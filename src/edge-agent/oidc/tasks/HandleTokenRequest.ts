import { TokenRequest } from "../protocols/TokenRequest";
import { TokenResponse } from "../protocols/TokenResponse";
import { Task } from "../../../utils/tasks";
import { validate } from "../../../utils";
import { OIDC } from "../types";
import { InvalidTokenResponseStatus } from "../errors";

interface Args {
  request: TokenRequest;
}

export class HandleTokenRequest extends Task<TokenResponse, Args> {
  async run(ctx: Task.Context) {
    const response = await ctx.Api.request(
      this.args.request.method,
      this.args.request.url.href,
      undefined,
      new Map(this.args.request.headers),
      this.args.request.body.toString()
    );

    if (response.status !== 200) {
      throw new InvalidTokenResponseStatus();
    }

    validate(response.body, OIDC.TokenResponseSchema);
    return new TokenResponse(response.body);
  }
}
