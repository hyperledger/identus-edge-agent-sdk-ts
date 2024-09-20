import { AuthorizationRequest } from "../protocols/AuthorizationRequest";
import { ProcessCallbackUrl } from "./ProcessCallbackUrl";
import { CreateTokenRequest } from "./CreateTokenRequest";
import { HandleTokenRequest } from "./HandleTokenRequest";
import { TokenResponse } from "../protocols/TokenResponse";
import { expect } from "../../../utils";
import { Task } from "../../../utils/tasks";
import { MissingClientId, MissingRedirectUri, RequiredCallbackUrl } from "../errors";

interface Args {
  authorizationRequest: AuthorizationRequest;
  callbackUrl?: string | URL;
}

export class ResolveTokenRequest extends Task<TokenResponse, Args> {
  async run(ctx: Task.Context) {
    // validateAuthResponse(this.authServerConfig!, { client_id: this.clientId }, new URL(window.location.href));
    const { authorizationRequest, callbackUrl } = this.args;
    const authMeta = authorizationRequest.authServerMeta;
    const clientId = expect(authorizationRequest.params.get("client_id"), MissingClientId);
    const redirectUri = expect(authorizationRequest.params.get("redirect_uri"), MissingRedirectUri);
    const urlStr = expect(callbackUrl?.toString() ?? window?.location?.href, RequiredCallbackUrl);
    const cbUrl = new URL(urlStr);

    const authResponse = await ctx.run(
      new ProcessCallbackUrl({
        authServerMeta: authMeta,
        callbackUrl: cbUrl,
        // expectedState: opts?.expectedState
      })
    );

    const tokenRequest = await ctx.run(
      new CreateTokenRequest({ authMeta, authResponse, clientId, redirectUri })
    );

    const tokenResponse = await ctx.run(
      new HandleTokenRequest({ request: tokenRequest })
    );

    return tokenResponse;
  }
}
