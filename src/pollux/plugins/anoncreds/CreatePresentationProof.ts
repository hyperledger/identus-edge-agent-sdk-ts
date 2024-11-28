import { Pollux } from "../../types";
import * as Domain from "../../../domain";
import { ACContext } from "./Plugin";
import { AnonCredsCredential } from "../../models/AnonCredsVerifiableCredential";
import { PresentationRequest } from "../../models/PresentationRequest";

interface Args {
  credential: Domain.Credential;
  presentationRequest: PresentationRequest<any, any>;
  linkSecret: Domain.LinkSecret;
}

export class CreatePresentationProof extends Pollux.CreatePresentationProof<Args> {
  async run(ctx: ACContext) {
    const credential = this.args.credential;
    const presentationRequest = this.args.presentationRequest;
    const linkSecret = this.args.linkSecret;

    if (
      credential instanceof AnonCredsCredential
      && presentationRequest.isType(Domain.AttachmentFormats.AnonCreds)
      && linkSecret
    ) {
      const schema = await ctx.fetchSchema(credential.schemaId);
      const schemas = { [credential.schemaId]: schema };
      const credentialDefinition = await ctx.fetchCredentialDefinition(credential.credentialDefinitionId);
      const credDefs = { [credential.credentialDefinitionId]: credentialDefinition };

      const result = ctx.Anoncreds.createPresentation(
        presentationRequest.toJSON(),
        schemas,
        credDefs,
        credential.toJSON(),
        linkSecret.secret
      );

      return JSON.stringify(result);
    }

    throw new Error();
  }
}
