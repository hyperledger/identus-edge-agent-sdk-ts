import { uuid } from "@stablelib/uuid";
import * as Domain from "../../../../domain";
import { DIF } from "../types";
import { JsonObj } from "../../../../utils";
import { Payload } from "../../../../domain/protocols/Payload";
import { Plugins } from "../../../../plugins";

interface Args {
  claims: JsonObj<DIF.Presentation.Definition.Field.Filter>;
  issuer?: string;
}

export class CreatePresentationDefinition extends Plugins.Task<Args> {
  async run() {
    const constraintFields = Object.keys(this.args.claims)
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
      fields: constraintFields,
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
}
