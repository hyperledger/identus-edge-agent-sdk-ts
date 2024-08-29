import { validate } from "../../../utils";
import { Task } from "../../../utils/tasks";
import { OIDC } from "../types";

interface Args {
  uri: string | URL,
}

export class FetchIssuerMetadata extends Task<OIDC.IssuerMetadata, Args> {
  async run(ctx: Task.Context) {
    const url = new URL(this.args.uri.toString());
    const agent_url = `${url}/.well-known/openid-credential-issuer`;
    const response = await ctx.Api.request("GET", agent_url);
    const meta = response.body;
    validate(meta, OIDC.IssuerMetadata);

    return meta;
  }
}
