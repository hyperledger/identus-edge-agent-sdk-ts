import { Pollux } from "../../../types";
import * as Domain from "../../../../domain";
import { SDJWTCredential } from "../../../models/SDJWTVerifiableCredential";
import { SDJWTContext } from "./Plugin";
import { OEA } from "../types";
import { DescriptorPath } from "../../../utils/DescriptorPath";
import { asArray } from "../../../../utils";

interface Args {
  presentationSubmission: OEA.PresentationSubmission;
  presentationRequest: OEA.PresentationRequest;
  requiredClaims?: string[];
}

export class VerifyPresentationSubmission extends Pollux.VerifyPresentationSubmission<Args> {
  async run(ctx: SDJWTContext) {
    const presentationSubmission = this.args.presentationSubmission;
    const presentationRequest = this.args.presentationRequest;

    if (
      this.isValidSubmission(presentationSubmission)
      && this.isValidPresentationRequest(presentationRequest)
    ) {
      return this.verifyPresentationSubmission(ctx, presentationSubmission, presentationRequest);
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

    return descriptorMaps.some((x: any) => ["sdjwt"].includes(x.format));
  }

  private isValidPresentationRequest(data: any): data is OEA.PresentationRequest {
    return typeof data === "object" ? true : false;
  }

  private async verifyPresentationSubmission(
    ctx: SDJWTContext,
    presentationSubmission: OEA.PresentationSubmission,
    presentationRequest: OEA.PresentationRequest
  ): Promise<boolean> {
    const inputDescriptors = presentationRequest.presentation_definition.input_descriptors;
    const presentationSubmissionMapper = new DescriptorPath(presentationSubmission);
    const descriptorMaps = presentationSubmission.presentation_submission.descriptor_map;

    // ?? for loop will exit on first return statement? what about other items?
    for (const descriptorItem of descriptorMaps) {
      if (descriptorItem.format === OEA.SDJWT) {
        const jws = presentationSubmissionMapper.getValue(descriptorItem.path);
        if (!jws) {
          throw new Error(`Invalid Submission, ${descriptorItem.path} not found in submission`);
        }

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

        const requiredClaims = asArray(this.args.requiredClaims);
        // TODO this need be checked
        const credentialValid = await ctx.SDJWT.verify({
          issuerDID: issuer,
          jws,
          requiredClaimKeys: requiredClaims
        });

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
