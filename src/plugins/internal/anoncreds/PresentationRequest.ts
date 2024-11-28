import { InvalidPresentationDefinitionError } from "../../../domain/models/errors/Pollux";
import { Payload } from "../../../domain/protocols/Payload";
import { Plugins } from "../../../plugins";
import { AnonCredsCredential } from "../../../pollux/models/AnonCredsVerifiableCredential";
import { isObject, notEmptyString } from "../../../utils";
import { FetchCredentialDefinition } from "./FetchCredentialDefinition";
import { fetchSchema } from "./FetchSchema";
import { GetLinkSecret } from "./GetLinkSecret";
import type { Context } from "./index";
import * as Types from "./types";

interface Args {
  credential: AnonCredsCredential;
  presentationRequest: Types.PresentationRequest;
}

export class PresentationRequest extends Plugins.Task<Args> {
  async run(ctx: Context) {
    // [ ] improve validation of Credential and PresentationRequest
    this.validate();
    const credential = this.args.credential;
    const presentationRequest = this.args.presentationRequest;
    const linkSecret = await ctx.run(new GetLinkSecret());
    const schema = await ctx.run(new fetchSchema({ uri: credential.schemaId }));
    const credentialDefinition = await ctx.run(new FetchCredentialDefinition({ uri: credential.credentialDefinitionId }));
    const schemas = { [credential.schemaId]: schema };
    const credDefs = { [credential.credentialDefinitionId]: credentialDefinition };

    const result = await ctx.Anoncreds.createPresentation(
      presentationRequest,
      schemas,
      credDefs,
      credential.toJSON(),
      linkSecret.secret
    );

    return Payload.make(Types.PRESENTATION, result);
  }

  private validate() {
    if (!(this.args.credential instanceof AnonCredsCredential)) {
      throw new Error('Required a valid Anoncreds Credential for Anoncreds Presentation submission');
    }

    const request = this.args.presentationRequest;
    const validRequest = isObject(request)
      && notEmptyString(request.name)
      && notEmptyString(request.nonce)
      && isObject(request.requested_attributes)
      && isObject(request.requested_predicates);

    if (!validRequest) {
      throw new InvalidPresentationDefinitionError();
    }
  }
}
