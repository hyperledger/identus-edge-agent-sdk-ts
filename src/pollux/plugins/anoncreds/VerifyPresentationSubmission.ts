import { Pollux } from "../../types";
import { ACContext } from "./Plugin";
import * as Types from "./types";

interface Args {
  presentationRequest: Types.PresentationRequest;
  presentationSubmission: Types.PresentationSubmission;
}

export class VerifyPresentationSubmission extends Pollux.VerifyPresentationSubmission<Args> {
  async run(ctx: ACContext) {
    const presentationSubmission = this.args.presentationSubmission;
    const presentationRequest = this.args.presentationRequest;

    if (ctx.Anoncreds.isValidPresentation(presentationSubmission)) {
      const [identifier] = presentationSubmission.identifiers;
      const credentialSchema = await ctx.fetchSchema(identifier.schema_id);
      const credentialDefinition = await ctx.fetchCredentialDefinition(identifier.cred_def_id);

      const schemas_dict = new Map<string, Types.Schema>();
      const definitions_dict = new Map<string, Types.CredentialDefinition>();

      schemas_dict.set(identifier.schema_id, credentialSchema);
      definitions_dict.set(identifier.cred_def_id, credentialDefinition);

      return ctx.Anoncreds.verifyPresentation(
        presentationSubmission,
        presentationRequest,
        Object.fromEntries(schemas_dict),
        Object.fromEntries(definitions_dict)
      );
    }

    throw new Error();
  }
}
