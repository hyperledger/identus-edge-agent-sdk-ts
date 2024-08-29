import { OIDC } from "../types";

export class TokenResponse {
  constructor(
    public readonly raw: OIDC.TokenResponseSchema
  ) {}

  get accessToken() { return this.raw.access_token; }
  get idToken() { return this.raw.id_token; }
  get cNonce() { return this.raw.c_nonce; }
}
