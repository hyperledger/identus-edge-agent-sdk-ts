import * as Domain from "../../../domain";
import { JsonObj } from "../../../utils";
import { Pollux } from "../../types";
import { ACContext } from "./Plugin";
import { AnonCredsCredential } from "../../models/AnonCredsVerifiableCredential";

export class RevealCredentialFields extends Pollux.RevealCredentialFields {
  async run(ctx: ACContext) {
    const credential = this.args.credential;

    if (!(credential instanceof AnonCredsCredential)) {
      throw new Error();
    }

    const linkSecret = await ctx.Pluto.getLinkSecret();

    if (!linkSecret) {
      throw new Domain.PolluxError.InvalidCredentialError("LinkSecret is required when revealing anoncreds fields");
    }

    const disclosedFields: JsonObj = {};
    const availableFields = this.args.fields.filter(
      (field) => credential.claims.find((claim) => Object.keys(claim).includes(field)) !== undefined
    );

    for (const field of availableFields) {
      disclosedFields[field] = {
        name: field,
        restrictions: {
          cred_def_id: credential.credentialDefinitionId
        }
      };
    }

    const presentationRequest = ctx.Anoncreds.createPresentationRequest(
      "self-disclose",
      "1.0.0",
      disclosedFields,
      {}
    );

    const schema = await ctx.fetchSchema(credential.schemaId);
    const credDef = await ctx.fetchCredentialDefinition(credential.credentialDefinitionId);
    const presentation = ctx.Anoncreds.createPresentation(
      presentationRequest,
      { [credential.schemaId]: schema },
      { [credential.credentialDefinitionId]: credDef },
      credential.toJSON(),
      linkSecret.secret
    );

    const revealedFields: JsonObj = {};

    for (const field of Object.keys(presentation.requested_proof.revealed_attrs)) {
      revealedFields[field] = presentation.requested_proof.revealed_attrs[field].raw;
    }

    return revealedFields;
  }
}
