import { uuid } from "@stablelib/uuid";
import * as Domain from "../../../../domain";
import { Pollux } from "../../../types";
import { OEA } from "../types";

interface Args {
  claims: OEA.SDJWTPresentationClaims;
}

export class CreatePresentationRequest extends Pollux.CreatePresentationRequest<Args> {
  async run() {
    const presentationClaims = this.args.claims;
    // const options = this.args.options;
    const options = {
      name: "Presentation",
      purpose: "Verifying Credentials",
      domain: 'N/A',
      challenge: `Sign this text ${uuid()}`,
      jwt: { jwtAlg: [Domain.JWT_ALG.ES256K] }
    };

    // if (!(options instanceof Domain.JWTPresentationOptions) || !options.jwt) {
    //   throw new Domain.PolluxError.InvalidPresentationDefinitionError("Required field options jwt or sdjwt is undefined")
    // }

    // if (!jwtOptions) {
    //   throw new Domain.PolluxError.InvalidPresentationDefinitionError("Required field options jwt is undefined")
    // }

    // if (!jwtOptions.jwtAlg) {
    //   throw new Domain.PolluxError.InvalidPresentationDefinitionError("Presentation options didn't include jwtAlg, jwtVcAlg or jwtVpAlg, one of them is required.")
    // }

    if (!this.validatePresentationClaims(presentationClaims)) {
      throw new Domain.PolluxError.InvalidPresentationDefinitionError("Presentation claims are invalid.");
    }

    const constraints: OEA.InputConstraints = {
      limit_disclosure: OEA.InputLimitDisclosure.REQUIRED,
      fields: Object.keys(presentationClaims.claims).map<OEA.InputField>((path) => ({
        path: [
          `$.vc.credentialSubject.${path}`,
          `$.credentialSubject.${path}`,
          `$.${path}`
        ],
        id: uuid(),
        optional: false,
        filter: presentationClaims.claims[path],
        name: path
      })),
    };

    if (presentationClaims.issuer) {
      constraints.fields.push({
        path: ["$.vc.issuer", "$.issuer", "$.iss", "$.vc.iss"],
        id: uuid(),
        optional: false,
        name: "issuer",
        filter: {
          type: "string",
          pattern: presentationClaims.issuer
        }
      });
    }

    const inputDescriptor: OEA.InputDescriptor = {
      id: uuid(),
      name: options.name,
      purpose: options.purpose,
      constraints: constraints,
      format: {
        jwt: { alg: options.jwt.jwtAlg },
      }
    };

    const presentationDefinitionRequest: OEA.PresentationExchangeDefinitionRequest = {
      presentation_definition: {
        id: uuid(),
        input_descriptors: [
          inputDescriptor
        ],
        format: {
          jwt: { alg: options.jwt.jwtAlg },
        },
      },
      // ??? doesnt exist in Type PresentationExchangeDefinitionRequest
      // options: {
      //   challenge: options.challenge,
      //   domain: options.domain
      // }
    };

    return presentationDefinitionRequest;
  }

  // TODO check originals logic actually works
  validatePresentationClaims(claims: any) {

    if (claims.schema && typeof claims.schema !== 'string') {
      return false;
    }
    if (claims.issuer && typeof claims.issuer !== 'string') {
      return false;
    }
    if (!claims.claims) {
      return false;
    }

    // TODO does this actually validate? return values are swallowed!
    Object.keys(claims.claims).forEach((field) => {
      const filter: OEA.InputFieldFilter = claims.claims[field];
      if (!filter.type || typeof filter.type !== 'string') {
        return false;
      }
      if (filter.pattern && typeof filter.pattern !== 'string') {
        return false;
      }
      if (filter.pattern && typeof filter.pattern !== 'string') {
        return false;
      }
      if (filter.enum && Array.isArray(filter.enum)) {
        return false;
      }
      if (filter.const && Array.isArray(filter.const)) {
        return false;
      }
      if (filter.value && typeof filter.value !== 'string' && typeof filter.value !== 'number') {
        return false;
      }
    });

    return true;
  }
}
