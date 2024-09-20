import { OIDC } from "../types";
import { TokenRequest } from "../protocols/TokenRequest";
import { AuthorizationResponse } from "../protocols/AuthorizationResponse";
import { expect } from "../../../utils";
import { Task } from "../../../utils/tasks";

interface Args {
  authMeta: OIDC.AuthServerMetadata;
  authResponse: AuthorizationResponse;
  clientId: string;
  redirectUri: string;
}

export class CreateTokenRequest extends Task<TokenRequest, Args> {
  async run() {
    const tokenEndpoint = expect(this.args.authMeta.token_endpoint, "token endpoint missing");

    // ? presume no client authentication so set clientId

    const body = new URLSearchParams({
      client_id: this.args.clientId,
      code: this.args.authResponse.code,
      redirect_uri: this.args.redirectUri,
    });
    const headers = new Headers();

    // TODO oauth2 handle all client authentication methods
    const request = new TokenRequest(
      tokenEndpoint,
      "authorization_code",
      body,
      headers
    );

    return request;
  }
}
