import * as Domain from "../../../domain";
import { asArray, asJsonObj } from "../../../utils";
import { IsCredentialRevoked } from "./IsCredentialRevoked";
import { Payload } from "../../../domain/protocols/Payload";
import { JWTCredential } from "../../../pollux/models/JWTVerifiableCredential";
import { SDJWTCredential } from "../../../pollux/models/SDJWTVerifiableCredential";
import { DescriptorPath } from "../../../pollux/utils/DescriptorPath";
import { DIF } from "./types";
import type { Context } from "./index";
import { Plugins } from "../../../plugins";

interface Args {
  presentation: DIF.EmbedTarget;
  presentationRequest: DIF.Presentation.Request;
}


export class PresentationVerify extends Plugins.Task<Args> {

  private get knownFormats() {
    const formats: DIF.Presentation.Submission.Format[] = ["jwt_vc", "jwt_vp", "sd_jwt"];
    return formats;
  }
  async run(ctx: Context) {
    const presentation = this.args.presentation;
    const presentationRequest = this.args.presentationRequest;

    const validPresentation = this.isValidPresentation(presentation);
    const validRequest = this.isValidPresentationRequest(presentationRequest);
    const valid = validPresentation && validRequest
      ? await this.verify(ctx, presentation, presentationRequest)
      : false;

    return Payload.make("valid", valid);
  }

  private isValidPresentation(data: any): data is DIF.EmbedTarget {
    if (!data || (data && typeof data !== "object")) {
      return false;
    }

    const { presentation_submission } = data;

    if (!presentation_submission || (typeof presentation_submission !== "object")) {
      return false;
    }

    const descriptorMaps = asArray(presentation_submission?.descriptor_map);
    return descriptorMaps.some((x: any) => this.knownFormats.includes(asJsonObj(x).format));
  }

  private isValidPresentationRequest(data: any): data is DIF.Presentation.Request {
    return typeof data === "object" ? true : false;
  }

  private async getCredential(
    ctx: Context,
    descriptorItem: DIF.Presentation.Submission.DescriptorItem,
    value: any
  ) {
    if (descriptorItem.format === "jwt_vc" || descriptorItem.format === "jwt_vp") {
      // for jwt_vc and jwt_vp both are JWT objects and fromJWS will load the right object
      const credential = JWTCredential.fromJWS(value);
      const jwtIssuer = Domain.DID.fromString(credential.issuer);

      // only the jwt_vc credentials have a subject, verifiable presentations not
      const jwtSubject = descriptorItem.format === "jwt_vc" && credential.subject ?
        Domain.DID.fromString(credential.subject) :
        undefined;

      const valid = await ctx.JWT.verify({
        holderDID: jwtSubject,
        issuerDID: jwtIssuer,
        jws: credential.id
      });
      if (!valid) {
        return null;
      }
      return credential;
    }
    if (descriptorItem.format === "sd_jwt") {
      const credential = SDJWTCredential.fromJWS(value);
      const valid = await ctx.SDJWT.verify({
        issuerDID: credential.issuer,
        jws: credential.id,
        // We leave them empty, we won't be checking here
        // but instead disclosing all the values and then validating the claims against input_descriptors
        requiredClaimKeys: []
      });
      if (!valid) {
        return null;
      }
      return credential;
    }

    throw new Domain.PolluxError.InvalidVerifyFormatError(
      `Invalid Submission, ${descriptorItem.path} expected to have one of the following formats ${this.knownFormats.join(", ")} but got ${descriptorItem.format}`
    );
  }

  private async verifyJWTClaims(
    ctx: Context,
    inputDescriptors: DIF.Presentation.Definition.InputDescriptor[],
    credential: JWTCredential,
  ) {
    try {
      const revocationTask = new IsCredentialRevoked({ credential: credential });
      const isRevoked = await ctx.run(revocationTask);

      if (isRevoked.data) {
        throw new Domain.PolluxError.InvalidVerifyCredentialError(credential.id, "Invalid Verifiable Presentation, credential is revoked");
      }
    } catch (err) {
      if (err instanceof Domain.PolluxError.InvalidVerifyCredentialError) {
        throw err;
      } else {
        throw new Domain.PolluxError.InvalidVerifyCredentialError(credential.id, `Invalid Verifiable Presentation, could not verify if the credential is revoked, reason: ${(err as Error).message}`);
      }
    }

    //TOOD: VC Subject must match the Holder's presentation DID, a holder should never create a presentation on a credential that was not issued to him
    // if (verifiableCredential.subject !== issuer) {
    //   throw new Domain.PolluxError.InvalidVerifyCredentialError(vc, "Invalid Verifiable Presentation payload, the credential has been issued to another holder");
    // 

    const mapper = new DescriptorPath(credential);
    for (const inputDescriptor of inputDescriptors) {
      const valid = this.validateInputDescriptor(
        credential.id,
        mapper,
        inputDescriptor
      );
      if (!valid) {
        return false;
      }
    }
    return true;
  }

  private async verifySDJWTClaims(
    ctx: Context,
    inputDescriptors: DIF.Presentation.Definition.InputDescriptor[],
    credential: SDJWTCredential,
  ) {

    const claims = await ctx.SDJWT.reveal(
      credential.core.jwt?.payload ?? {},
      credential.core.disclosures ?? [],
    );
    const mapper = new DescriptorPath(claims);

    for (const inputDescriptor of inputDescriptors) {
      const valid = this.validateInputDescriptor(
        credential.id,
        mapper,
        inputDescriptor
      );
      if (!valid) {
        return false;
      }
    }

    return true;
  }

  private async processDescriptorItem(
    ctx: Context,
    inputDescriptors: DIF.Presentation.Definition.InputDescriptor[],
    descriptorItem: DIF.Presentation.Submission.DescriptorItem,
    value: any,
  ): Promise<boolean> {
    const isPresentation = descriptorItem.format === "jwt_vp" ? true : false;
    if (descriptorItem.path_nested) {
      const credential = await this.getCredential(ctx, descriptorItem, value);
      if (!credential) {
        throw new Domain.PolluxError.InvalidVerifyCredentialError(
          value,
          `Invalid ${isPresentation ? 'Verifiable Presentation' : 'Verifiable Credential'} JWS Signature`
        );
      }
      const nestedMapper = new DescriptorPath(credential);
      const nestedValue = nestedMapper.getValue(descriptorItem.path_nested.path);
      if (!nestedValue) {
        throw new Domain.PolluxError.InvalidVerifyFormatError(
          `Invalid Submission, ${descriptorItem.path_nested.path} not found in submission`
        );
      }
      return this.processDescriptorItem(
        ctx,
        inputDescriptors,
        descriptorItem.path_nested,
        nestedValue,
      );
    }

    const credential = await this.getCredential(ctx, descriptorItem, value);
    if (!credential) {
      //TODO: Improve this error, can be presentation or credential
      throw new Domain.PolluxError.InvalidVerifyCredentialError(
        value,
        `Invalid ${isPresentation ? 'Verifiable Presentation' : 'Verifiable Credential'} JWS Signature`
      );
    }

    return credential instanceof JWTCredential ?
      this.verifyJWTClaims(ctx, inputDescriptors, credential) :
      this.verifySDJWTClaims(ctx, inputDescriptors, credential);
  }

  private async verify(
    ctx: Context,
    presentationSubmission: DIF.EmbedTarget,
    presentationRequest: DIF.Presentation.Request
  ): Promise<boolean> {
    const inputDescriptors = presentationRequest.presentation_definition.input_descriptors;
    const presentationSubmissionMapper = new DescriptorPath(presentationSubmission);
    const descriptorMaps = presentationSubmission.presentation_submission.descriptor_map;

    // return true if 
    for (const descriptorItem of descriptorMaps) {
      //Check descriptor format, and path or nested path
      const inputDescriptor = inputDescriptors.find(({ id }) => id === descriptorItem.id);
      if (!inputDescriptor) {
        throw new Domain.PolluxError.InvalidVerifyFormatError(`Invalid Submission, undefined input descriptor`);
      }
      const value = presentationSubmissionMapper.getValue(descriptorItem.path);
      const valid = await this.processDescriptorItem(
        ctx,
        inputDescriptors,
        descriptorItem,
        value
      );
      if (valid) {
        return true;
      }
    }
    return false;
  }

  private validateField(
    vc: string,
    mapper: DescriptorPath,
    path: string | undefined,
    field: DIF.Presentation.Definition.Field,
  ) {
    if (!path) {
      throw new Domain.PolluxError.InvalidVerifyCredentialError(
        vc,
        `Invalid Claim: Expected one of the paths ${field.path.join(", ")} to exist.`
      );
    }

    const value = mapper.getValue(path);

    if (field.filter && value !== null) {
      const filter = field.filter;

      if (filter.pattern) {
        const pattern = new RegExp(filter.pattern);
        if (!pattern.test(value) && value !== filter.pattern) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(
            vc, `Invalid Claim: Expected the ${path} field to be "${filter.pattern}" but got "${value}"`
          )
        } else {
          return true;
        }

      } else if (filter.enum) {
        if (!filter.enum.includes(value)) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(
            vc, `Invalid Claim: Expected the ${path} field to be one of ${filter.enum.join(", ")} but got ${value}`
          )
        } else {
          return true
        }

      } else if (filter.const && value === filter.pattern) {
        if (value !== filter.const) {
          throw new Domain.PolluxError.InvalidVerifyCredentialError(
            vc, `Invalid Claim: Expected the ${path} field to be "${filter.const}" but got "${value}"`
          )
        } else {
          return true;
        }

      }
    }

    throw new Domain.PolluxError.InvalidVerifyCredentialError(
      vc, `Invalid Claim: Expected one of the paths ${field.path.join(", ")} to exist.`
    )
  }

  private validateInputDescriptor(
    vc: any,
    descriptorMapper: DescriptorPath,
    inputDescriptor: DIF.Presentation.Definition.InputDescriptor
  ) {
    const constraints = inputDescriptor.constraints;
    const fields = constraints.fields;

    if (constraints.limit_disclosure === "required") {

      for (const field of fields) {
        const paths = [...field.path];
        const optional = field.optional;

        if (!optional) {
          let error: Error | undefined;
          while (paths.length) {
            const [path] = paths.splice(0, 1);
            try {
              this.validateField(vc, descriptorMapper, path, field);
              //if field is valid, stop searching paths
              error = undefined;
              break;
            } catch (err) {
              //set error and continue to see if other paths succeed
              error ??= err as Error;
            }
          }
          if (error) {
            throw error
          }
        }
      }
    }

    return true;
  }
}
