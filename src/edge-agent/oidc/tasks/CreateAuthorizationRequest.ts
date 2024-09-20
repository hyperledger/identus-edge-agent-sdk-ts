import { OIDC } from "../types";
import { isEmpty, notEmptyString } from "../../../utils";
import { AuthorizationRequest } from "../protocols/AuthorizationRequest";
import { Task } from "../../../utils/tasks";

interface Args {
  issuerMeta: OIDC.IssuerMetadata;
  authServerMeta: OIDC.AuthServerMetadata;
  clientId: string;
  redirectUri: string;
  offer?: OIDC.CredentialOffer;
  scopes?: string[];
}

export class CreateAuthorizationRequest extends Task<AuthorizationRequest, Args> {
  async run() {
    const issuerState = this.args.offer?.grants?.authorization_code?.issuer_state;
    const authRequest = new AuthorizationRequest(this.args.authServerMeta, this.args.issuerMeta);
    authRequest.params.set('client_id', this.args.clientId);
    authRequest.params.set('redirect_uri', this.args.redirectUri);
    authRequest.params.set('response_type', 'code');
    authRequest.params.set('scope', this.processScopes().join(' '));

    if (notEmptyString(issuerState)) {
      authRequest.params.set('issuer_state', issuerState);
    }

    // TODO find library for full Authorization support
    // if (authServerConfig.code_challenge_methods_supported?.includes('S256')) {
    //   const code_verifier = generateRandomCodeVerifier();
    //   const code_challenge = await calculatePKCECodeChallenge(code_verifier);
    //   authRequest.setCodeChallenge("S256", code_challenge, code_verifier);
    // }
    // else {
    //   const nonce = generateRandomNonce();
    //   authRequest.setNonce(nonce);

    //   if (authServerConfig.code_challenge_methods_supported?.includes("plain")) {
    //   }
    // }

    return authRequest;
  }

  private processScopes() {
    if (isEmpty(this.args.scopes)) {
      const configs = Object.entries(this.args.issuerMeta.credential_configurations_supported);
      const scopes = configs.reduce<string[]>((acc, [, config]) => {
        return notEmptyString(config.scope) ? acc.concat(config.scope) : acc;
      }, []);
      return scopes;
    }

    return this.args.scopes;
  }
}
