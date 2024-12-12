import { Task } from "../../../utils";
import * as Types from "./types";

interface Args {
  uri: string;
}

export class FetchCredentialDefinition extends Task<Types.CredentialDefinition, Args> {
  async run(ctx: Task.Context) {
    const response = await ctx.Api.request("GET", this.args.uri);
    // TODO validate <Anoncreds.CredentialSchemaType> 
    return response.body as Types.CredentialDefinition;
  }
}
