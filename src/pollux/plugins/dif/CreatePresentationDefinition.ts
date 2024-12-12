import { uuid } from "@stablelib/uuid";
import * as Domain from "../../../domain";
import { Pollux } from "../../PlugPol";
import { DIF } from "./types";
import { JsonObj } from "../../../utils";
import { Payload } from "../../../domain/protocols/Payload";

interface Args {
  claims: JsonObj<DIF.Presentation.Definition.Field.Filter>;
  issuer?: string;
  // TODO not used - schema: string;
}

export class CreatePresentationDefinition extends Pollux.Task<Args> {
  async run(ctx: Pollux.Context) {
    const contraintFields = Object.keys(this.args.claims)
      .map<DIF.Presentation.Definition.Field>((path) => ({
        path: [
          `$.vc.credentialSubject.${path}`,
          `$.credentialSubject.${path}`,
          `$.${path}`
        ],
        id: uuid(),
        optional: false,
        filter: this.args.claims[path],
        name: path
      }));

    const constraints: DIF.Presentation.Definition.Constraints = {
      limit_disclosure: "required",
      fields: contraintFields,
    };

    if (this.args.issuer) {
      constraints.fields.push({
        path: ["$.vc.issuer", "$.issuer", "$.iss", "$.vc.iss"],
        id: uuid(),
        optional: false,
        name: "issuer",
        filter: {
          type: "string",
          pattern: this.args.issuer
        }
      });
    }

    const inputDescriptor: DIF.Presentation.Definition.InputDescriptor = {
      id: uuid(),
      name: "Presentation",
      purpose: "Verifying Credentials",
      constraints: constraints,
      format: {
        jwt: { alg: [Domain.JWT_ALG.ES256K] },
        sdjwt: { alg: [Domain.JWT_ALG.ES256K] },
      }
    };

    const request: DIF.Presentation.Request = {
      presentation_definition: {
        id: uuid(),
        input_descriptors: [inputDescriptor],
        format: {
          jwt: { alg: [Domain.JWT_ALG.ES256K] },
          sdjwt: { alg: [Domain.JWT_ALG.ES256K] },
        },
      },
      options: {
        challenge: `Sign this text ${uuid()}`,
        domain: 'N/A',
      }
    };

    return Payload.make("presentation-definition", request);
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
      const filter: any = claims.claims[field];

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
