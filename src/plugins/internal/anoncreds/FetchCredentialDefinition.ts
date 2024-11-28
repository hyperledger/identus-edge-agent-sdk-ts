import { Task } from "../../../utils";
import type { Context } from "./index";
import * as Types from "./types";

interface Args {
  uri: string;
}

export class FetchCredentialDefinition extends Task<Types.CredentialDefinition, Args> {
  async run(ctx: Context) {
    const response = await ctx.Api.request("GET", this.args.uri);
    // [ ] validate <Anoncreds.CredentialSchemaType> 
    return response.body as Types.CredentialDefinition;
  }
}
