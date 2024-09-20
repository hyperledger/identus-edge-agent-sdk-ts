import { expect } from "../../../utils";
import { OIDC } from "../types";

interface Metadata {
  codeVerifier?: string;
  nonce?: string;
}

export class AuthorizationRequest {
  public url: URL;
  public readonly meta: Metadata = {};

  constructor(
    public readonly authServerMeta: OIDC.AuthServerMetadata,
    public readonly issuerMeta: OIDC.IssuerMetadata,
  ) {
    const endpoint = expect(authServerMeta.authorization_endpoint, "authorization_endpoint missing");
    this.url = new URL(endpoint);
  }

  get params() {
    return this.url.searchParams;
  }

  setCodeChallenge(method: "S256", challenge: string, verifier: string) {
    this.params.set('code_challenge_method', method);
    this.params.set('code_challenge', challenge);
    this.meta.codeVerifier = verifier;
  }

  setNonce(nonce: string) {
    this.params.set('nonce', nonce);
    this.meta.nonce = nonce;
  }
}
