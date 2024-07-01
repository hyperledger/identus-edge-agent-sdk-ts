import { Secp256k1PrivateKey } from "../apollo/utils/Secp256k1PrivateKey";
import * as Domain from "../domain";
import Pollux from "../pollux";
import { isEmpty, isNil } from "../utils";
import { AgentDIDHigherFunctions } from "./Agent.DIDHigherFunctions";
import { ApiImpl } from "./helpers/ApiImpl";
import { MediatorHandler } from "./types";

/**
 * https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html
 */

interface CredentialOffer {
  /**
   * url of the Credential Issuer
   * from which the wallet is requested to obtain one or more Credentials
   * the Wallet uses it to obtain the Credential Issuer's Metadata
   */
  credential_issuer: string;
  /**
   * array of unique strings that each identify one of the keys in name/value pairs
   * stored in the `credential_configurations_supported` Credential Issuer Metadata
   */
  credential_configuration_ids: string[];
  /**
   * indicates the Grant Types the Authorization Server is prepared to process
   * if `grants` is nil the Wallet must determine the Grant Types using the Metadata
   * when multiple grants are present, it is at the Wallets discretion which to use
   */
  grants?: {
    authorization_code: {
      /**
       * used to bind the Authorization Request with the Credential Issuer to a context
       * if the Wallet decides to use the Authorization Code flow and received this value
       * it must be included in the subsequent Authorization Reqest
       */
      issuer_state?: string;
      /**
       * can be used to identify the Authorization Server to use with this grant type
       * when `authorization_servers` in Issuer Metadata has multiple entries 
       */
      authorization_server?: string;
    };
    "urn:ietf:params:oauth:grant-type:pre-authorized_code"?: {
      /**
       * code representing the Issuers authorization
       * short lived and single use
       * if the Wallet decides to use the pre-authorized_code flow, this value 
       * must be included in the subsequent Token Request
       */
      "pre-authorized_code": string;
      /**
       * amount of time in seconds that the Wallet should wait between polling requests
       * to the token endpoint
       */
      interval?: number;
      /**
       * can be used to identify the Authorization Server to use with this grant type
       * when `authorization_servers` in Issuer Metadata has multiple entries 
       */
      authorization_server?: string;
      /**
       * specifies whether the Authorization Server expects a presentation of a Transaction Code
       * along with the Token Request
       */
      tx_code?: {
        input_mode?: string;
        length: number;
        description?: string;
      };
    };
  };
}

interface OIDCIssuerMetadata {
  credential_issuer: string;
  authorization_servers: string[];
  credential_endpoint: string;
  credential_identifiers_supported: boolean;
  credential_configurations_supported: {
    [key: string]: {
      //TODO Fix this, should be jwt_vc
      // format: 'jwt_vc_json' #string,
      format: 'jwt_vc_json';
      scope: string;
      credential_signing_alg_values_supported: string[];
      credential_definition: {
        type: string[];
        credentialSubject: Record<string, string | number | boolean | null | undefined>;
      };
    };
  };
}

interface OIDCConfiguration {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  introspection_endpoint: string;
  userinfo_endpoint: string;
  end_session_endpoint: string;
  frontchannel_logout_session_supported: boolean;
  frontchannel_logout_supported: boolean;
  jwks_uri: string;
  check_session_iframe: string;
  grant_types_supported: string[];
  acr_values_supported: string[];
  response_types_supported: string[];
  subject_types_supported: string[];
  id_token_signing_alg_values_supported: string[];
  id_token_encryption_alg_values_supported: string[];
  id_token_encryption_enc_values_supported: string[];
  userinfo_signing_alg_values_supported: string[];
  userinfo_encryption_alg_values_supported: string[];
  userinfo_encryption_enc_values_supported: string[];
  request_object_signing_alg_values_supported: string[];
  request_object_encryption_alg_values_supported: string[];
  request_object_encryption_enc_values_supported: string[];
  response_modes_supported: string[];
  registration_endpoint: string;
  token_endpoint_auth_methods_supported: string[];
  token_endpoint_auth_signing_alg_values_supported: string[];
  introspection_endpoint_auth_methods_supported: string[];
  introspection_endpoint_auth_signing_alg_values_supported: string[];
  authorization_signing_alg_values_supported: string[];
  authorization_encryption_alg_values_supported: string[];
  authorization_encryption_enc_values_supported: string[];
  claims_supported: string[];
  claim_types_supported: string[];
  claims_parameter_supported: boolean;
  scopes_supported: string[];
  request_parameter_supported: boolean;
  request_uri_parameter_supported: boolean;
  require_request_uri_registration: boolean;
  code_challenge_methods_supported: string[];
  tls_client_certificate_bound_access_tokens: boolean;
  dpop_signing_alg_values_supported: string[];
  revocation_endpoint: string;
  revocation_endpoint_auth_methods_supported: string[];
  revocation_endpoint_auth_signing_alg_values_supported: string[];
  backchannel_logout_supported: boolean;
  backchannel_logout_session_supported: boolean;
  device_authorization_endpoint: string;
  backchannel_token_delivery_modes_supported: string[];
  backchannel_authentication_endpoint: string;
  backchannel_authentication_request_signing_alg_values_supported: string[];
  require_pushed_authorization_requests: false,
  pushed_authorization_request_endpoint: string;
  mtls_endpoint_aliases: Record<string, string>;
  authorization_response_iss_parameter_supported: boolean;
}

interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  session_state: string;
  scope: string;
  c_nonce_expires_in: number;
  c_nonce: string;
  "not-before-policy": number;
}


export class OIDCAgent {
  public readonly pollux: Pollux;
  private agentDIDHigherFunctions: AgentDIDHigherFunctions;

  constructor(
    // shared
    public readonly apollo: Domain.Apollo,
    public readonly castor: Domain.Castor,
    public readonly pluto: Domain.Pluto,
    public readonly mediationHandler: MediatorHandler,
    public readonly seed: Domain.Seed = apollo.createRandomSeed().seed,
    public readonly api: Domain.Api = new ApiImpl(),
    // OIDC specific
    public readonly clientId: string,
    public readonly credentialIssuer: string,
    public readonly redirectUri: string,
    public readonly scope: string,
  ) {
    this.pollux = new Pollux(apollo, castor);
    this.agentDIDHigherFunctions = new AgentDIDHigherFunctions(
      apollo,
      castor,
      pluto,
      mediationHandler,
      seed
    );
  }

  //=== shared fns ===

  async start() {
    await this.pluto.start();
  }

  // stop
  // revealCredentialFields
  // createNewPrismDID
  // createNewPeerDID
  // parseInvitation - could be used to parse the OIDC Credential Offer?
  // signWith
  // sendMessage - probably not needed, but could be used if we wanted to manually send the Credential Request
  // verifiableCredentials
  // prepareRequestCredentialWithIssuer - its the correct function but currently coupled to didcomm, returning a RequestCredential instance
  // processIssuedCredentialMessage - same as above ^

  //=== specifc fns ===

  async getIssuerMetadata(url: string): Promise<OIDCIssuerMetadata> {
    const agent_url = `${url}/.well-known/openid-credential-issuer`;
    const response = await this.api.request("GET", agent_url);
    // TODO validate
    return response.body as any;
  }

  async getASConfiguration(issuerMeta: OIDCIssuerMetadata): Promise<OIDCConfiguration> {
    // TODO fix hacked url
    const authUrl = issuerMeta.authorization_servers.at(0)?.replace("http://external-keycloak-issuer:8080", "http://localhost:9980");
    const configUrl = `${authUrl}/.well-known/openid-configuration`;
    const response = await this.api.request("GET", configUrl);
    // TODO validate
    return response.body as any;
  }

  makeLoginUrl(asConfig: OIDCConfiguration, offer: CredentialOffer): string {
    const issuer_state = offer.grants?.authorization_code?.issuer_state ?? "";

    if (isEmpty(issuer_state)) {
      throw new Error();
    }

    const params = new URLSearchParams({
      client_id: this.clientId,
      issuer_state: issuer_state,
      redirect_uri: this.redirectUri,
      response_type: "code",
      scope: `openid ${this.scope}`,
    });

    const url = `${asConfig.authorization_endpoint}?${params.toString()}`;
    return url;
  }

  // ??? probably not needed in actual browser flow
  async getAuthorizationResponse(): Promise<string | undefined> {
    const url = "http://localhost:7777/mockserver/retrieve?type=REQUESTS";
    const response = await this.api.request("PUT", url, undefined, undefined, {
      path: "/cb",
      method: "GET"
    });
    const body = response.body;

    if (Array.isArray(body) && body.length > 0) {
      const auths = body.map(x => x?.queryStringParameters?.code?.at(0));
      const code = auths.at(-1);
      console.log({ auths, code });
      return code;
    }

    return undefined;
  }

  async sendTokenRequest(asConfig: OIDCConfiguration, authCode: string): Promise<TokenResponse> {
    const response = await this.api.request(
      "POST",
      asConfig.token_endpoint,
      undefined,
      new Map([["Content-Type", "application/x-www-form-urlencoded"]]),
      new URLSearchParams({
        // TODO this should be dependent on the IssuerMetadata
        grant_type: "authorization_code",
        code: authCode,
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
      })
    );

    return response.body as any;
  }

  async sendCredentialRequest(issuerMeta: OIDCIssuerMetadata, token: TokenResponse): Promise<Credential> {
    const alias = `${issuerMeta.credential_issuer}_${token.c_nonce}`;
    const holderDID = await this.agentDIDHigherFunctions.createNewPrismDID(alias, []);
    const keys = await this.pluto.getDIDPrivateKeysByDID(holderDID);
    const secpKey = keys.find(x => x.curve === Domain.Curve.SECP256K1);

    if (isNil(secpKey)) {
      throw new Error("key not found");
    }

    const demoDid = Domain.DID.from("did:prism:73196107e806b084d44339c847a3ae8dd279562f23895583f62cc91a2ee5b8fe:CnsKeRI8CghtYXN0ZXItMBABSi4KCXNlY3AyNTZrMRIhArrplJNfQYxthryRU87XdODy-YWUh5mqrvIfAdoZFeJBEjkKBWtleS0wEAJKLgoJc2VjcDI1NmsxEiEC8rsFplfYvRLazdWWi3LNR1gaAQXb-adVhZacJT4ntwE");

    const jwtProof = await this.pollux.createOIDCCredentialRequestJWT(
      // TODO fix DID not working
      holderDID,
      secpKey,
      // demoDid,
      // Secp256k1PrivateKey.from.String("2902637d412190fb08f5d0e0b2efc1eefae8060ae151e7951b69afbecbdd452e", "hex"),
      {
        aud: this.credentialIssuer,
        iss: this.clientId,
        iat: Date.now(),
        nonce: token.c_nonce,
      },
      {
        typ: "openid4vci-proof+jwt",
        // TODO fix this duplication
        kid: `${holderDID.toString()}#authenticationauthenticationKey`
      }
    );

    // TODO remove demo hack
    const url = issuerMeta.credential_endpoint.replace("http://caddy-issuer:8080/prism-agent", "http://localhost:8080/prism-agent");

    const response = await this.api.request(
      "POST",
      url,
      undefined,
      new Map([
        ["Content-Type", "application/json"],
        ["Authorization", `Bearer ${token.access_token}`],
      ]),
      {
        format: "jwt_vc_json",
        credential_definition: {
          "type": ["VerifiableCredential", this.scope],
          "credentialSubject": {},
        },
        proof: {
          "proof_type": "jwt",
          "jwt": jwtProof
        },
      }
    );

    // TODO validate
    const body = response.body as any;
    console.log({ body });

    const rawCred = Buffer.from(body.credential);
    const credential = await this.pollux.parseCredential(rawCred, { type: Domain.CredentialType.JWT });
    await this.pluto.storeCredential(credential);

    return credential as any;
  }
}
