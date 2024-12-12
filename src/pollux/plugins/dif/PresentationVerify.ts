import * as Domain from "../../../domain";
import { JWTCredential } from "../../models/JWTVerifiableCredential";
import { asArray, asJsonObj, expect } from "../../../utils";
import { DescriptorPath } from "../../utils/DescriptorPath";
import { Pollux } from "../../PlugPol";
import { IsCredentialRevoked } from "./IsCredentialRevoked";
import { DIF } from "./types";
import { SDJWTCredential } from "../../models/SDJWTVerifiableCredential";
import { Payload } from "../../../domain/protocols/Payload";

interface Args {
  presentation: DIF.EmbedTarget;
  presentationRequest: DIF.Presentation.Request;
}

export class PresentationVerify extends Pollux.Task<Args> {
  async run(ctx: Pollux.Context) {
    const presentation = this.args.presentation;
    const presentationRequest = this.args.presentationRequest;

    const valid = (
      this.isValidSubmission(presentation)
      && this.isValidPresentationRequest(presentationRequest)
    )
      ? this.verifyPresentationSubmissionJWT(ctx, presentation, presentationRequest)
      : false;

    return Payload.make("valid", valid);
  }

  private isValidSubmission(data: any): data is DIF.EmbedTarget {
    if (!data || (data && typeof data !== "object")) {
      return false;
    }

    const { presentation_submission } = data;

    if (!presentation_submission || (typeof presentation_submission !== "object")) {
      return false;
    }

    const descriptorMaps = asArray(presentation_submission?.descriptor_map);

    // ?? 'sdjwt' is not a DIF format
    // const knownFormats: DIF.Presentation.Submission.Format[] = ["jwt_vc", "jwt_vp"];
    const knownFormats = ["jwt_vc", "jwt_vp", "sdjwt"];
    return descriptorMaps.some((x: any) => knownFormats.includes(asJsonObj(x).format));
  }

  private isValidPresentationRequest(data: any): data is DIF.Presentation.Request {
    return typeof data === "object" ? true : false;
  }

  private async verifyPresentationSubmissionJWT(
    ctx: Pollux.Context,
    presentationSubmission: DIF.EmbedTarget,
    presentationRequest: DIF.Presentation.Request
  ): Promise<boolean> {
    const inputDescriptors = presentationRequest.presentation_definition.input_descriptors;
    const presentationSubmissionMapper = new DescriptorPath(presentationSubmission);
    const descriptorMaps = presentationSubmission.presentation_submission.descriptor_map;

    // TODO for loop will exit on first return statement? what about other items?
    for (const descriptorItem of descriptorMaps) {
      if (descriptorItem.format === "sdjwt" as any) {
        const jws = expect(
          presentationSubmissionMapper.getValue(descriptorItem.path),
          `Invalid Submission, ${descriptorItem.path} not found in submission`
        );

        const presentation = SDJWTCredential.fromJWS(jws);
        const issuer = presentation.issuer;

        if ("challenge" in presentationRequest && "domain" in presentationRequest) {
          const challenge = presentationRequest?.challenge;

          if (challenge && challenge !== '') {
            const nonce = presentation.getProperty("nonce");

            if (!nonce || typeof nonce !== "string") {
              throw new Error(`Invalid Submission, ${descriptorItem.path} does not contain a nonce in its payload with a valid signature for '${challenge}'`);
            }
            if (nonce !== challenge) {
              throw new Error(`Invalid Submission, ${descriptorItem.path} does not contain valid signature for '${challenge}'`);
            }
          }
        }

        // // TODO this need be checked
        // const requiredClaims = asArray(this.args.requiredClaims);
        // const credentialValid = await ctx.SDJWT.verify({
        //   issuerDID: issuer,
        //   jws,
        //   requiredClaimKeys: requiredClaims
        // });

        const claims = await ctx.SDJWT.reveal(
          presentation.core.jwt?.payload ?? {},
          presentation.core.disclosures ?? [],
        );
        const verifiableCredentialPropsMapper = new DescriptorPath(claims);
        const inputDescriptor = inputDescriptors.find((inputDescriptor) => inputDescriptor.id === descriptorItem.id);

        this.validateInputDescriptor(
          presentation.id,
          verifiableCredentialPropsMapper,
          inputDescriptor
        );
        return true;
      }

      if (descriptorItem.format === "jwt_vp") {
        const jws = presentationSubmissionMapper.getValue(descriptorItem.path);

        if (!jws) {
          throw new Domain.PolluxError.InvalidVerifyFormatError(`Invalid Submission, ${descriptorItem.path} not found in submission`);
        }

        const presentation = JWTCredential.fromJWS(jws);
        const issuer = presentation.issuer;

        // ? all sdk / oea specific
        // const presentationDefinitionOptions = presentationRequest;

        // if ("challenge" in presentationDefinitionOptions && "domain" in presentationDefinitionOptions) {
        //   const challenge = presentationDefinitionOptions?.challenge;
        //   if (challenge && challenge !== '') {
        //     const nonce = presentation.getProperty('nonce');

        //     if (!nonce || typeof nonce !== "string") {
        //       throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, `Invalid Submission, ${descriptorItem.path} does not contain a nonce in its payload with a valid signature for '${challenge}'`);
        //     }
        //     if (nonce !== challenge) {
        //       throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, `Invalid Submission, ${descriptorItem.path} does not contain valid signature for '${challenge}'`);
        //     }
        //   }
        // }

        // if (presentation.credentialType !== Domain.CredentialType.JWT) {
        //   throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, "Invalid JWT Credential only jwt or sdjwt is supported for jwt submission");
        // }

        const credentialValid = await ctx.JWT.verify({ issuerDID: issuer, jws });

        if (!credentialValid) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, "Invalid Holder Presentation JWS Signature");
        }

        let verifiableCredentialPropsMapper: DescriptorPath;

        // if (descriptorItem.format !== OEA.JWT_VP) {
        //   throw new Error("");
        // }

        const nestedPath = descriptorItem.path_nested;

        if (!nestedPath) {
          throw new Domain.PolluxError.InvalidVerifyFormatError(
            `Invalid Submission, ${descriptorItem.path} of format "jwt_vp" must provide a nested_path with "jwt_vc" for JWT`
          );
        }

        const verifiableCredentialMapper = new DescriptorPath(presentation);
        const vc = verifiableCredentialMapper.getValue(nestedPath.path);

        if (!vc) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, "Invalid Verifiable Presentation payload, cannot find vc");
        }
        const verifiableCredential = JWTCredential.fromJWS(vc);
        try {
          const revocationTask = new IsCredentialRevoked({ credential: verifiableCredential });
          const isRevoked = await ctx.run(revocationTask);

          if (isRevoked) {
            throw new Domain.PolluxError.InvalidVerifyCredentialError(vc, "Invalid Verifiable Presentation, credential is revoked");
          }
        } catch (err) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(vc, `Invalid Verifiable Presentation, could not verify if the credential is revoked, reason: ${(err as Error).message}`);
        }

        if (verifiableCredential.subject !== issuer) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(vc, "Invalid Verifiable Presentation payload, the credential has been issued to another holder");
        }

        const verifiableCredentialValid = await ctx.JWT.verify({
          holderDID: verifiableCredential.subject ? Domain.DID.fromString(verifiableCredential.subject) : undefined,
          issuerDID: verifiableCredential.issuer,
          jws: verifiableCredential.id
        });
        if (!verifiableCredentialValid) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(vc, "Invalid Presentation Credential JWS Signature");
        }
        verifiableCredentialPropsMapper = new DescriptorPath(verifiableCredential);


        const inputDescriptor = inputDescriptors.find((inputDescriptor) => inputDescriptor.id === descriptorItem.id);

        this.validateInputDescriptor(
          vc,
          verifiableCredentialPropsMapper,
          inputDescriptor
        );
        return true;
      }

      throw new Domain.PolluxError.InvalidVerifyFormatError(
        `Invalid Submission, ${descriptorItem.path} expected to have format "jwt_vp"`
      );
    }
    return false;
  }

  private validateInputDescriptor(
    vc: any,
    descriptorMapper: DescriptorPath,
    inputDescriptor?: DIF.Presentation.Definition.InputDescriptor
  ) {
    if (inputDescriptor) {
      const constraints = inputDescriptor.constraints;
      const fields = constraints.fields;

      if (constraints.limit_disclosure === "required") {
        for (const field of fields) {
          const paths = [...field.path];
          const optional = field.optional;

          if (!optional) {
            let validClaim = false;
            let reason = null;

            while (paths.length && !validClaim) {
              const [path] = paths.splice(0, 1);

              if (path) {
                const fieldInVC = descriptorMapper.getValue(path);

                if (field.filter && fieldInVC !== null) {
                  const filter = field.filter;

                  if (filter.pattern) {
                    const pattern = new RegExp(filter.pattern);

                    if (pattern.test(fieldInVC) || fieldInVC === filter.pattern) {
                      validClaim = true;
                    } else {
                      const t = "testing";
                      reason = `Expected the ${path} field to be "${filter.pattern}" but got "${fieldInVC}"`;
                    }
                  } else if (filter.enum) {
                    if (filter.enum.includes(fieldInVC)) {
                      validClaim = true;
                    } else {
                      reason = `Expected the ${path} field to be one of ${filter.enum.join(", ")} but got ${fieldInVC}`;
                    }

                    validClaim = filter.enum.includes(fieldInVC);
                  } else if (filter.const && fieldInVC === filter.pattern) {
                    if (fieldInVC === filter.const) {
                      validClaim = true;
                    } else {
                      reason = `Expected the ${path} field to be "${filter.const}" but got "${fieldInVC}"`;
                    }

                    validClaim = fieldInVC === filter.const;
                  }
                } else if (!reason) {
                  reason = `Expected one of the paths ${field.path.join(", ")} to exist.`;
                }
              } else {
                reason = `Expected one of the paths ${field.path.join(", ")} to exist.`;
              }
            }
            if (!validClaim) {
              throw new Domain.PolluxError.InvalidVerifyCredentialError(vc, `Invalid Claim: ${reason || 'paths are not found or have unexpected value'}`);
            }
          }
        }
      }
    }
  }
}
