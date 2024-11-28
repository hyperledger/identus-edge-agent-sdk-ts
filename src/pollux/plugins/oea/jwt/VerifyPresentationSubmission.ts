import { Pollux } from "../../../types";
import * as Domain from "../../../../domain";
import { JWTCredential } from "../../../models/JWTVerifiableCredential";
import { asJsonObj } from "../../../../utils";
import { DescriptorPath } from "../../../utils/DescriptorPath";
import { OEA } from "../types";
import { JWTContext } from "./Plugin";
import { IsCredentialRevoked } from "./IsCredentialRevoked";

interface Args {
  presentationSubmission: OEA.PresentationSubmission;
  presentationRequest: OEA.PresentationRequest;
}

export class VerifyPresentationSubmission extends Pollux.VerifyPresentationSubmission<Args> {
  async run(ctx: JWTContext) {
    const presentationSubmission = this.args.presentationSubmission;
    const presentationRequest = this.args.presentationRequest;

    if (
      this.isValidSubmission(presentationSubmission)
      && this.isValidPresentationRequest(presentationRequest)
    ) {
      return this.verifyPresentationSubmissionJWT(ctx, presentationSubmission, presentationRequest);
    }

    return false;
  }

  private isValidSubmission(data: any): data is OEA.PresentationSubmission {
    if (!data || (data && typeof data !== "object")) {
      return false;
    }

    const { presentation_submission } = data;

    if (!presentation_submission || (typeof presentation_submission !== "object")) {
      return false;
    }
    const descriptorMaps = presentation_submission?.descriptor_map ?? [];

    return descriptorMaps.some((x: any) => ['jwt_vc', 'jwt_vp'].includes(asJsonObj(x).format));
  }

  private isValidPresentationRequest(data: any): data is OEA.PresentationRequest {
    return (
      data
      && typeof data === "object"
      && typeof data.options === "object"
    )
      ? true
      : false;
  }

  private async verifyPresentationSubmissionJWT(
    ctx: JWTContext,
    presentationSubmission: OEA.PresentationSubmission,
    presentationRequest: OEA.PresentationRequest
  ): Promise<boolean> {
    const inputDescriptors = presentationRequest.presentation_definition.input_descriptors;
    const presentationSubmissionMapper = new DescriptorPath(presentationSubmission);
    const descriptorMaps = presentationSubmission.presentation_submission.descriptor_map;

    for (const descriptorItem of descriptorMaps) {

      if (descriptorItem.format === OEA.JWT_VP) {
        const jws = presentationSubmissionMapper.getValue(descriptorItem.path);

        if (!jws) {
          throw new Domain.PolluxError.InvalidVerifyFormatError(`Invalid Submission, ${descriptorItem.path} not found in submission`);
        }

        const presentation = JWTCredential.fromJWS(jws);
        const issuer = presentation.issuer;
        const presentationDefinitionOptions = presentationRequest;

        if ("challenge" in presentationDefinitionOptions && "domain" in presentationDefinitionOptions) {
          const challenge = presentationDefinitionOptions?.challenge;
          if (challenge && challenge !== '') {
            const nonce = presentation.getProperty('nonce');

            if (!nonce || typeof nonce !== "string") {
              throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, `Invalid Submission, ${descriptorItem.path} does not contain a nonce in its payload with a valid signature for '${challenge}'`);
            }
            if (nonce !== challenge) {
              throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, `Invalid Submission, ${descriptorItem.path} does not contain valid signature for '${challenge}'`);
            }
          }
        }

        if (presentation.credentialType !== Domain.CredentialType.JWT) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, "Invalid JWT Credential only jwt or sdjwt is supported for jwt submission");
        }

        const credentialValid = await ctx.JWT.verify({ issuerDID: issuer, jws });

        if (!credentialValid) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(jws, "Invalid Holder Presentation JWS Signature");
        }

        let verifiableCredentialPropsMapper: DescriptorPath;

        if (descriptorItem.format !== OEA.JWT_VP) {
          throw new Error("");
        }

        const nestedPath = descriptorItem.path_nested;

        if (!nestedPath) {
          throw new Domain.PolluxError.InvalidVerifyFormatError(
            `Invalid Submission, ${descriptorItem.path} of format ${OEA.JWT_VP} must provide a nested_path with ${OEA.JWT_VC} for JWT`
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
        `Invalid Submission, ${descriptorItem.path} expected to have format ${OEA.JWT_VP}`
      );
    }
    return false;
  }

  private validateInputDescriptor(vc: any, descriptorMapper: DescriptorPath, inputDescriptor: any) {
    if (inputDescriptor) {
      const constraints = inputDescriptor.constraints;
      const fields = constraints.fields;

      if (constraints.limit_disclosure === OEA.InputLimitDisclosure.REQUIRED) {
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
