/**
 * Types and Schema definitions for OIDC
 * 
 * @link https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html
 */
import * as TB from "@sinclair/typebox";

export namespace OIDC {
  export type CredentialOffer = TB.Static<typeof CredentialOffer>;
  export const CredentialOffer = TB.Object({
    /**
     * url of the Credential Issuer
     * from which the wallet is requested to obtain one or more Credentials
     * the Wallet uses it to obtain the Credential Issuer's Metadata
     */
    credential_issuer: TB.String(),
    /**
     * array of unique strings that each identify one of the keys in name/value pairs
     * stored in the `credential_configurations_supported` Credential Issuer Metadata
     */
    credential_configuration_ids: TB.Array(TB.String()),
    /**
     * indicates the Grant Types the Authorization Server is prepared to process
     * if `grants` is nil the Wallet must determine the Grant Types using the Metadata
     * when multiple grants are present, it is at the Wallets discretion which to use
     */
    grants: TB.Optional(TB.Object({
      authorization_code: TB.Optional(TB.Object({
        /**
         * used to bind the Authorization Request with the Credential Issuer to a context
         * if the Wallet decides to use the Authorization Code flow and received this value
         * it must be included in the subsequent Authorization Reqest
         */
        issuer_state: TB.Optional(TB.String()),
        /**
         * can be used to identify the Authorization Server to use with this grant type
         * when `authorization_servers` in Issuer Metadata has multiple entries 
         */
        authorization_server: TB.Optional(TB.String()),
      })),

      "urn:ietf:params:oauth:grant-type:pre-authorized_code": TB.Optional(TB.Object({
        /**
         * code representing the Issuers authorization
         * short lived and single use
         * if the Wallet decides to use the pre-authorized_code flow, this value 
         * must be included in the subsequent Token Request
         */
        "pre-authorized_code": TB.String(),
        /**
         * amount of time in seconds that the Wallet should wait between polling requests
         * to the token endpoint
         */
        interval: TB.Optional(TB.Number()),
        /**
         * can be used to identify the Authorization Server to use with this grant type
         * when `authorization_servers` in Issuer Metadata has multiple entries 
         */
        authorization_server: TB.Optional(TB.String()),
        /**
         * specifies whether the Authorization Server expects a presentation of a Transaction Code
         * along with the Token Request
         */
        tx_code: TB.Optional(TB.Object({
          input_mode: TB.Optional(TB.String()),
          length: TB.Optional(TB.Number()),
          description: TB.Optional(TB.String()),
        }))
      }))
    }))
  });

  export type IssuerMetadata = TB.Static<typeof IssuerMetadata>;
  export const IssuerMetadata = TB.Object({
    /// REQUIRED: The Credential Issuer's identifier, as defined in Section 11.2.1.
    credential_issuer: TB.String(),

    /// Array of strings, where each string is an identifier of the OAuth 2.0 Authorization Server (as defined in
    /// [RFC8414]) the Credential Issuer relies on for authorization. If this parameter is omitted, the entity providing
    /// the Credential Issuer is also acting as the Authorization Server, i.e., the Credential Issuer's identifier is
    /// used to obtain the Authorization Server metadata.
    authorization_servers: TB.Optional(TB.Array(TB.String())),

    /// REQUIRED: URL of the Credential Issuer's Credential Endpoint, as defined in Section 7.2. This URL MUST use the https
    /// scheme and MAY contain port, path, and query parameter components.
    credential_endpoint: TB.String(),

    /// URL of the Credential Issuer's Batch Credential Endpoint, as defined in Section 8. This URL MUST use the https
    /// scheme and MAY contain port, path, and query parameter components. If omitted, the Credential Issuer does not
    /// support the Batch Credential Endpoint.
    batch_credential_endpoint: TB.Optional(TB.String()),

    /// URL of the Credential Issuer's Deferred Credential Endpoint, as defined in Section 9. This URL MUST use the
    /// https scheme and MAY contain port, path, and query parameter components. If omitted, the Credential Issuer does
    /// not support the Deferred Credential Endpoint.
    deferred_credential_endpoint: TB.Optional(TB.String()),

    /// URL of the Credential Issuer's Notification Endpoint, as defined in Section 10. This URL MUST use the https
    /// scheme and MAY contain port, path, and query parameter components. If omitted, the Credential Issuer does not
    /// support the Notification Endpoint.
    notification_endpoint: TB.Optional(TB.String()),

    /// String that is a signed JWT. This JWT contains Credential Issuer metadata parameters as claims.
    signed_metadata: TB.Optional(TB.String()),

    /// REQUIRED: describes specifics of the Credential that the Credential Issuer supports issuance of.
    credential_configurations_supported: TB.Record(TB.String(), TB.Object({
      /// Format of this Credential, i.e., `jwt_vc_json` or `ldp_vc`. Depending on the format value, may contain further
      /// elements defining the type and (optionally) particular claims the Credential MAY contain and information about
      /// how to display the Credential.
      format: TB.String(),
      /// A JSON string identifying the scope value that this Credential Issuer supports for this particular Credential.
      /// The value can be the same across multiple `credential_configurations_supported` objects. The Authorization
      /// Server MUST be able to uniquely identify the Credential Issuer based on the scope value. The Wallet can use this
      /// value in the Authorization Request as defined in Section 5.1.2. Scope values in this Credential Issuer metadata
      /// MAY duplicate those in the scopes_supported parameter of the Authorization Server.
      scope: TB.Optional(TB.String()),
      credential_definition: TB.Object({
        type: TB.Array(TB.String()),
        credentialSubject: TB.Optional(TB.Object({})),
        // credentialSubject: Record<string, string | number | boolean | null | undefined>;
      }),

      /// Array of case sensitive strings that identify the representation of the cryptographic key material that the
      /// issued Credential is bound to, as defined in Section 7.1. Support for keys in JWK format [RFC7517] is indicated
      /// by the value `jwk`. Support for keys expressed as a COSE Key object [RFC8152] (for example, used in
      /// [ISO.18013-5]) is indicated by the value `cose_key`. When the Cryptographic Binding Method is a DID, valid
      /// values are a `did:` prefix followed by a method-name using a syntax as defined in Section 3.1 of [DID-Core], but
      /// without a `:` and method-specific-id. For example, support for the DID method with a method-name "example" would
      /// be represented by `did:example`.
      cryptographic_binding_methods_supported: TB.Optional(TB.Array(TB.String())),

      /// Array of case sensitive strings that identify the algorithms that the Issuer uses to sign the issued Credential.
      credential_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),

      /// Object that describes specifics of the key proof(s) that the Credential Issuer supports. This object contains a
      /// list of name/value pairs, where each name is a unique identifier of the supported proof type(s). Valid values
      /// are defined in Section 7.2.1, other values MAY be used. This identifier is also used by the Wallet in the
      /// Credential Request as defined in Section 7.2. The value in the name/value pair is an object that contains
      /// metadata about the key proof.
      proof_types_supported: TB.Optional(TB.Record(TB.String(), TB.Object({
        /// Array of case sensitive strings that identify the algorithms that the Issuer supports for this proof type.
        /// The Wallet uses one of them to sign the proof.
        proof_signing_alg_values_supported: TB.Array(TB.String()),
      }))),
    })),


    /// Object containing information about whether the Credential Issuer supports encryption of the Credential and
    /// Batch Credential Response on top of TLS.
    credential_response_encryption: TB.Optional(TB.Object({
      /// Array containing a list of the JWE [RFC7516] encryption algorithms (`alg` values) [RFC7518] supported by the
      /// Credential and Batch Credential Endpoint to encode the Credential or Batch Credential Response in a JWT
      /// [RFC7519].
      alg_values_supported: TB.Array(TB.String()),
      /// Array containing a list of the JWE [RFC7516] encryption algorithms (`enc` values) [RFC7518] supported by the
      /// Credential and Batch Credential Endpoint to encode the Credential or Batch Credential Response in a JWT
      /// [RFC7519].
      enc_values_supported: TB.Array(TB.String()),

      /// Boolean value specifying whether the Credential Issuer requires the additional encryption on top of TLS for the
      /// Credential Response. If the value is true, the Credential Issuer requires encryption for every Credential
      /// Response and therefore the Wallet MUST provide encryption keys in the Credential Request. If the value is
      /// `false`, the Wallet MAY chose whether it provides encryption keys or not.
      encryption_required: TB.Boolean(),
    })),

    /// Boolean value specifying whether the Credential Issuer supports returning `credential_identifiers` parameter in
    /// the authorization_details Token Response parameter, with true indicating support. If omitted, the default value
    /// is `false`.
    credential_identifiers_supported: TB.Optional(TB.Boolean()),

    /// Array of objects, where each object contains display properties of a Credential Issuer for a certain language.
    display: TB.Optional(TB.Object({
      /// A language identifier, and a name in that language.
      // name_locale: {
      //   name: TB.Optional(TB.String()),
      //   locale: TB.Optional(TB.String()),
      // };

      // /// Object with information about the logo of the Credential Issuer.
      // logo?: {
      //   uri: string;
      //   alt_text: TB.Optional(TB.String()),
      // };
    })),

  });

  // export interface CredentialDisplay {
  //   /// String value of a display name for the Credential.
  //   name: string;

  //   /// String value that identifies the language of this object represented as a language tag taken from values defined
  //   /// in BCP47 [RFC5646].
  //   locale: TB.Optional(TB.String()),

  //   /// Object with information about the logo of the Credential.
  //   logo?: {
  //     uri: string;
  //     alt_text: TB.Optional(TB.String()),
  //   };

  //   /// String value of a description of the Credential.
  //   description: TB.Optional(TB.String()),

  //   /// String value of a background color of the Credential represented as numerical color values defined in CSS Color
  //   /// Module Level 37.
  //   background_color: TB.Optional(TB.String()),

  //   /// Object with information about the background image of the Credential.
  //   background_image?: {
  //     uri: TB.Optional(TB.String()),
  //   };

  //   /// String value of a text color of the Credential represented as numerical color values defined in CSS Color Module
  //   /// Level 37.
  //   text_color: TB.Optional(TB.String()),
  // }

  export type AuthServerMetadata = TB.Static<typeof AuthServerMetadata>;
  export const AuthServerMetadata = TB.Object({
    /**
     * Authorization server's Issuer Identifier URL.
     */
    issuer: TB.String(),
    /**
     * URL of the authorization server's authorization endpoint.
     */
    authorization_endpoint: TB.Optional(TB.String()),
    /**
     * URL of the authorization server's token endpoint.
     */
    token_endpoint: TB.Optional(TB.String()),
    /**
     * URL of the authorization server's JWK Set document.
     */
    jwks_uri: TB.Optional(TB.String()),
    /**
     * URL of the authorization server's Dynamic Client Registration Endpoint.
     */
    registration_endpoint: TB.Optional(TB.String()),
    /**
     * JSON array containing a list of the `scope` values that this authorization server supports.
     */
    scopes_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the `response_type` values that this authorization server
     * supports.
     */
    response_types_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the `response_mode` values that this authorization server
     * supports.
     */
    response_modes_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the `grant_type` values that this authorization server
     * supports.
     */
    grant_types_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of client authentication methods supported by this token endpoint.
     */
    token_endpoint_auth_methods_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWS signing algorithms supported by the token endpoint for
     * the signature on the JWT used to authenticate the client at the token endpoint.
     */
    token_endpoint_auth_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * URL of a page containing human-readable information that developers might want or need to know
     * when using the authorization server.
     */
    service_documentation: TB.Optional(TB.String()),
    /**
     * Languages and scripts supported for the user interface, represented as a JSON array of language
     * tag values from RFC 5646.
     */
    ui_locales_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * URL that the authorization server provides to the person registering the client to read about
     * the authorization server's requirements on how the client can use the data provided by the
     * authorization server.
     */
    op_policy_uri: TB.Optional(TB.String()),
    /**
     * URL that the authorization server provides to the person registering the client to read about
     * the authorization server's terms of service.
     */
    op_tos_uri: TB.Optional(TB.String()),
    /**
     * URL of the authorization server's revocation endpoint.
     */
    revocation_endpoint: TB.Optional(TB.String()),
    /**
     * JSON array containing a list of client authentication methods supported by this revocation
     * endpoint.
     */
    revocation_endpoint_auth_methods_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWS signing algorithms supported by the revocation endpoint
     * for the signature on the JWT used to authenticate the client at the revocation endpoint.
     */
    revocation_endpoint_auth_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * URL of the authorization server's introspection endpoint.
     */
    introspection_endpoint: TB.Optional(TB.String()),
    /**
     * JSON array containing a list of client authentication methods supported by this introspection
     * endpoint.
     */
    introspection_endpoint_auth_methods_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWS signing algorithms supported by the introspection
     * endpoint for the signature on the JWT used to authenticate the client at the introspection
     * endpoint.
     */
    introspection_endpoint_auth_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * PKCE code challenge methods supported by this authorization server.
     */
    code_challenge_methods_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * Signed JWT containing metadata values about the authorization server as claims.
     */
    signed_metadata: TB.Optional(TB.String()),
    /**
     * URL of the authorization server's device authorization endpoint.
     */
    device_authorization_endpoint: TB.Optional(TB.String()),
    /**
     * Indicates authorization server support for mutual-TLS client certificate-bound access tokens.
     */
    tls_client_certificate_bound_access_tokens: TB.Optional(TB.Boolean()),
    /**
     * JSON object containing alternative authorization server endpoints, which a client intending to
     * do mutual TLS will use in preference to the conventional endpoints.
     */
    mtls_endpoint_aliases: TB.Optional(TB.Object({})),
    /**
     * URL of the authorization server's UserInfo Endpoint.
     */
    userinfo_endpoint: TB.Optional(TB.String()),
    /**
     * JSON array containing a list of the Authentication Context Class References that this
     * authorization server supports.
     */
    acr_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the Subject Identifier types that this authorization server
     * supports.
     */
    subject_types_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWS `alg` values supported by the authorization server for
     * the ID Token.
     */
    id_token_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWE `alg` values supported by the authorization server for
     * the ID Token.
     */
    id_token_encryption_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWE `enc` values supported by the authorization server for
     * the ID Token.
     */
    id_token_encryption_enc_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWS `alg` values supported by the UserInfo Endpoint.
     */
    userinfo_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWE `alg` values supported by the UserInfo Endpoint.
     */
    userinfo_encryption_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWE `enc` values supported by the UserInfo Endpoint.
     */
    userinfo_encryption_enc_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWS `alg` values supported by the authorization server for
     * Request Objects.
     */
    request_object_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWE `alg` values supported by the authorization server for
     * Request Objects.
     */
    request_object_encryption_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the JWE `enc` values supported by the authorization server for
     * Request Objects.
     */
    request_object_encryption_enc_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the `display` parameter values that the authorization server
     * supports.
     */
    display_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the Claim Types that the authorization server supports.
     */
    claim_types_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of the Claim Names of the Claims that the authorization server MAY
     * be able to supply values for.
     */
    claims_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * Languages and scripts supported for values in Claims being returned, represented as a JSON
     * array of RFC 5646 language tag values.
     */
    claims_locales_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * Boolean value specifying whether the authorization server supports use of the `claims`
     * parameter.
     */
    claims_parameter_supported: TB.Optional(TB.Boolean()),
    /**
     * Boolean value specifying whether the authorization server supports use of the `request`
     * parameter.
     */
    request_parameter_supported: TB.Optional(TB.Boolean()),
    /**
     * Boolean value specifying whether the authorization server supports use of the `request_uri`
     * parameter.
     */
    request_uri_parameter_supported: TB.Optional(TB.Boolean()),
    /**
     * Boolean value specifying whether the authorization server requires any `request_uri` values
     * used to be pre-registered.
     */
    require_request_uri_registration: TB.Optional(TB.Boolean()),
    /**
     * Indicates where authorization request needs to be protected as Request Object and provided
     * through either `request` or `request_uri` parameter.
     */
    require_signed_request_object: TB.Optional(TB.Boolean()),
    /**
     * URL of the authorization server's pushed authorization request endpoint.
     */
    pushed_authorization_request_endpoint: TB.Optional(TB.String()),
    /**
     * Indicates whether the authorization server accepts authorization requests only via PAR.
     */
    require_pushed_authorization_requests: TB.Optional(TB.Boolean()),
    /**
     * JSON array containing a list of algorithms supported by the authorization server for
     * introspection response signing.
     */
    introspection_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of algorithms supported by the authorization server for
     * introspection response content key encryption (`alg` value).
     */
    introspection_encryption_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of algorithms supported by the authorization server for
     * introspection response content encryption (`enc` value).
     */
    introspection_encryption_enc_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * Boolean value indicating whether the authorization server provides the `iss` parameter in the
     * authorization response.
     */
    authorization_response_iss_parameter_supported: TB.Optional(TB.Boolean()),
    /**
     * JSON array containing a list of algorithms supported by the authorization server for
     * introspection response signing.
     */
    authorization_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of algorithms supported by the authorization server for
     * introspection response encryption (`alg` value).
     */
    authorization_encryption_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * JSON array containing a list of algorithms supported by the authorization server for
     * introspection response encryption (`enc` value).
     */
    authorization_encryption_enc_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * CIBA Backchannel Authentication Endpoint.
     */
    backchannel_authentication_endpoint: TB.Optional(TB.String()),
    /**
     * JSON array containing a list of the JWS signing algorithms supported for validation of signed
     * CIBA authentication requests.
     */
    backchannel_authentication_request_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * Supported CIBA authentication result delivery modes.
     */
    backchannel_token_delivery_modes_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * Indicates whether the authorization server supports the use of the CIBA `user_code` parameter.
     */
    backchannel_user_code_parameter_supported: TB.Optional(TB.Boolean()),
    /**
     * URL of an authorization server iframe that supports cross-origin communications for session
     * state information with the RP Client, using the HTML5 postMessage API.
     */
    check_session_iframe: TB.Optional(TB.String()),
    /**
     * JSON array containing a list of the JWS algorithms supported for DPoP proof JWTs.
     */
    dpop_signing_alg_values_supported: TB.Optional(TB.Array(TB.String())),
    /**
     * URL at the authorization server to which an RP can perform a redirect to request that the
     * End-User be logged out at the authorization server.
     */
    end_session_endpoint: TB.Optional(TB.String()),
    /**
     * Boolean value specifying whether the authorization server can pass `iss` (issuer) and `sid`
     * (session ID) query parameters to identify the RP session with the authorization server when the
     * `frontchannel_logout_uri` is used.
     */
    frontchannel_logout_session_supported: TB.Optional(TB.Boolean()),
    /**
     * Boolean value specifying whether the authorization server supports HTTP-based logout.
     */
    frontchannel_logout_supported: TB.Optional(TB.Boolean()),
    /**
     * Boolean value specifying whether the authorization server can pass a `sid` (session ID) Claim
     * in the Logout Token to identify the RP session with the OP.
     */
    backchannel_logout_session_supported: TB.Optional(TB.Boolean()),
    /**
     * Boolean value specifying whether the authorization server supports back-channel logout.
     */
    backchannel_logout_supported: TB.Optional(TB.Boolean()),
    // [metadata: string]: JsonValue | undefined;
  });

  // https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-successful-token-response
  export type TokenResponseSchema = TB.Static<typeof TokenResponseSchema>;
  export const TokenResponseSchema = TB.Object({
    access_token: TB.String(),
    token_type: TB.String(),
    expires_in: TB.Optional(TB.Number()),
    c_nonce: TB.Optional(TB.String()),
    c_nonce_expires_in: TB.Optional(TB.Number()),
    refresh_token: TB.Optional(TB.String()),
    refresh_expires_in: TB.Optional(TB.Number()),
    id_token: TB.Optional(TB.String()),
    scope: TB.Optional(TB.String()),
    session_state: TB.Optional(TB.String()),
  });
}
