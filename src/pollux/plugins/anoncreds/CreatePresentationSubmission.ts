import { Pollux } from "../../types";
import * as Domain from "../../../domain";
import { ACContext } from "./Plugin";
import * as Types from "./types";
import { AnonCredsCredential } from "../../models/AnonCredsVerifiableCredential";

interface Args {
  credential: Domain.Credential;
  // TODO rename correctly when adding breaking changes
  privateKey: Domain.LinkSecret;
  presentationDefinition: Types.PresentationRequest;
}

export class CreatePresentationSubmission extends Pollux.CreatePresentationSubmission<Args> {
  async run(ctx: ACContext) {
    const credential = this.args.credential;
    const presentationDefinition = this.args.presentationDefinition;
    const linkSecret = this.args.privateKey;

    if (!(credential instanceof AnonCredsCredential)) {
      throw new Error("Required a valid Anoncreds Credential for Anoncreds Presentation submission");
    }

    if (!linkSecret || !(linkSecret instanceof Domain.LinkSecret)) {
      throw new Error("Required a valid link secret for a Anoncreds Presentation submission");
    }

    const credentialSchema = await ctx.fetchSchema(credential.schemaId);
    const credentialDefinition = await ctx.fetchCredentialDefinition(credential.credentialDefinitionId);
    const schemas = { [credential.schemaId]: credentialSchema };
    const credDefs = { [credential.credentialDefinitionId]: credentialDefinition };

    return ctx.Anoncreds.createPresentation(
      // TODO validate
      presentationDefinition,
      schemas,
      credDefs,
      credential.toJSON(),
      linkSecret.secret
    );
  }
}
