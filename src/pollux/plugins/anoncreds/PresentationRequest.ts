import { Payload } from "../../../domain/protocols/Payload";
import { AnonCredsCredential } from "../../models/AnonCredsVerifiableCredential";
import { Pollux } from "../../PlugPol";
import { FetchCredentialDefinition } from "./FetchCredentialDefinition";
import { fetchSchema } from "./FetchSchema";
import { GetLinkSecret } from "./GetLinkSecret";
import * as Types from "./types";

interface Args {
  credential: AnonCredsCredential;
  presentationRequest: Types.PresentationRequest;
}

export class PresentationRequest extends Pollux.Task<Args> {
  async run(ctx: Pollux.Context) {
    // TODO validate Credential and PresentationRequest
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

    // return JSON.stringify(result);
    return Payload.make(Types.PRESENTATION, result);
  }
}
