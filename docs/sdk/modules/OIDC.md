[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / OIDC

# Namespace: OIDC

## Table of contents

### Type Aliases

- [AuthServerMetadata](OIDC.md#authservermetadata)
- [CredentialOffer](OIDC.md#credentialoffer)
- [IssuerMetadata](OIDC.md#issuermetadata)
- [TokenResponseSchema](OIDC.md#tokenresponseschema)

### Variables

- [AuthServerMetadata](OIDC.md#authservermetadata-1)
- [CredentialOffer](OIDC.md#credentialoffer-1)
- [IssuerMetadata](OIDC.md#issuermetadata-1)
- [TokenResponseSchema](OIDC.md#tokenresponseschema-1)

## Type Aliases

### AuthServerMetadata

Ƭ **AuthServerMetadata**: `TB.Static`\<typeof [`AuthServerMetadata`](OIDC.md#authservermetadata-1)\>

#### Defined in

[src/edge-agent/oidc/types.ts:221](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L221)

[src/edge-agent/oidc/types.ts:222](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L222)

___

### CredentialOffer

Ƭ **CredentialOffer**: `TB.Static`\<typeof [`CredentialOffer`](OIDC.md#credentialoffer-1)\>

#### Defined in

[src/edge-agent/oidc/types.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L9)

[src/edge-agent/oidc/types.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L10)

___

### IssuerMetadata

Ƭ **IssuerMetadata**: `TB.Static`\<typeof [`IssuerMetadata`](OIDC.md#issuermetadata-1)\>

#### Defined in

[src/edge-agent/oidc/types.ts:73](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L73)

[src/edge-agent/oidc/types.ts:74](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L74)

___

### TokenResponseSchema

Ƭ **TokenResponseSchema**: `TB.Static`\<typeof [`TokenResponseSchema`](OIDC.md#tokenresponseschema-1)\>

#### Defined in

[src/edge-agent/oidc/types.ts:539](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L539)

[src/edge-agent/oidc/types.ts:540](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L540)

## Variables

### AuthServerMetadata

• **AuthServerMetadata**: `TObject`\<\{ `acr_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `authorization_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `authorization_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `authorization_endpoint`: `TOptional`\<`TString`\> ; `authorization_response_iss_parameter_supported`: `TOptional`\<`TBoolean`\> ; `authorization_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `backchannel_authentication_endpoint`: `TOptional`\<`TString`\> ; `backchannel_authentication_request_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `backchannel_logout_session_supported`: `TOptional`\<`TBoolean`\> ; `backchannel_logout_supported`: `TOptional`\<`TBoolean`\> ; `backchannel_token_delivery_modes_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `backchannel_user_code_parameter_supported`: `TOptional`\<`TBoolean`\> ; `check_session_iframe`: `TOptional`\<`TString`\> ; `claim_types_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `claims_locales_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `claims_parameter_supported`: `TOptional`\<`TBoolean`\> ; `claims_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `code_challenge_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `device_authorization_endpoint`: `TOptional`\<`TString`\> ; `display_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `dpop_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `end_session_endpoint`: `TOptional`\<`TString`\> ; `frontchannel_logout_session_supported`: `TOptional`\<`TBoolean`\> ; `frontchannel_logout_supported`: `TOptional`\<`TBoolean`\> ; `grant_types_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `id_token_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `id_token_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `id_token_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `introspection_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `introspection_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `introspection_endpoint`: `TOptional`\<`TString`\> ; `introspection_endpoint_auth_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `introspection_endpoint_auth_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `introspection_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `issuer`: `TString` ; `jwks_uri`: `TOptional`\<`TString`\> ; `mtls_endpoint_aliases`: `TOptional`\<`TObject`\<{}\>\> ; `op_policy_uri`: `TOptional`\<`TString`\> ; `op_tos_uri`: `TOptional`\<`TString`\> ; `pushed_authorization_request_endpoint`: `TOptional`\<`TString`\> ; `registration_endpoint`: `TOptional`\<`TString`\> ; `request_object_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `request_object_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `request_object_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `request_parameter_supported`: `TOptional`\<`TBoolean`\> ; `request_uri_parameter_supported`: `TOptional`\<`TBoolean`\> ; `require_pushed_authorization_requests`: `TOptional`\<`TBoolean`\> ; `require_request_uri_registration`: `TOptional`\<`TBoolean`\> ; `require_signed_request_object`: `TOptional`\<`TBoolean`\> ; `response_modes_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `response_types_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `revocation_endpoint`: `TOptional`\<`TString`\> ; `revocation_endpoint_auth_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `revocation_endpoint_auth_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `scopes_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `service_documentation`: `TOptional`\<`TString`\> ; `signed_metadata`: `TOptional`\<`TString`\> ; `subject_types_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `tls_client_certificate_bound_access_tokens`: `TOptional`\<`TBoolean`\> ; `token_endpoint`: `TOptional`\<`TString`\> ; `token_endpoint_auth_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `token_endpoint_auth_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `ui_locales_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `userinfo_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `userinfo_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `userinfo_endpoint`: `TOptional`\<`TString`\> ; `userinfo_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>  }\>

#### Defined in

[src/edge-agent/oidc/types.ts:221](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L221)

[src/edge-agent/oidc/types.ts:222](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L222)

___

### CredentialOffer

• **CredentialOffer**: `TObject`\<\{ `credential_configuration_ids`: `TArray`\<`TString`\> ; `credential_issuer`: `TString` ; `grants`: `TOptional`\<`TObject`\<\{ `authorization_code`: `TOptional`\<`TObject`\<\{ `authorization_server`: `TOptional`\<`TString`\> ; `issuer_state`: `TOptional`\<`TString`\>  }\>\> ; `urn:ietf:params:oauth:grant-type:pre-authorized_code`: `TOptional`\<`TObject`\<\{ `authorization_server`: `TOptional`\<`TString`\> ; `interval`: `TOptional`\<`TNumber`\> ; `pre-authorized_code`: `TString` ; `tx_code`: `TOptional`\<`TObject`\<\{ `description`: ... ; `input_mode`: ... ; `length`: ...  }\>\>  }\>\>  }\>\>  }\>

#### Defined in

[src/edge-agent/oidc/types.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L9)

[src/edge-agent/oidc/types.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L10)

___

### IssuerMetadata

• **IssuerMetadata**: `TObject`\<\{ `authorization_servers`: `TOptional`\<`TArray`\<`TString`\>\> ; `batch_credential_endpoint`: `TOptional`\<`TString`\> ; `credential_configurations_supported`: `TRecord`\<`TString`, `TObject`\<\{ `credential_definition`: `TObject`\<\{ `credentialSubject`: `TOptional`\<`TObject`\<{}\>\> ; `type`: `TArray`\<`TString`\>  }\> ; `credential_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `cryptographic_binding_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\> ; `format`: `TString` ; `proof_types_supported`: `TOptional`\<`TRecord`\<`TString`, `TObject`\<\{ `proof_signing_alg_values_supported`: `TArray`\<`TString`\>  }\>\>\> ; `scope`: `TOptional`\<`TString`\>  }\>\> ; `credential_endpoint`: `TString` ; `credential_identifiers_supported`: `TOptional`\<`TBoolean`\> ; `credential_issuer`: `TString` ; `credential_response_encryption`: `TOptional`\<`TObject`\<\{ `alg_values_supported`: `TArray`\<`TString`\> ; `enc_values_supported`: `TArray`\<`TString`\> ; `encryption_required`: `TBoolean`  }\>\> ; `deferred_credential_endpoint`: `TOptional`\<`TString`\> ; `display`: `TOptional`\<`TObject`\<{}\>\> ; `notification_endpoint`: `TOptional`\<`TString`\> ; `signed_metadata`: `TOptional`\<`TString`\>  }\>

#### Defined in

[src/edge-agent/oidc/types.ts:73](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L73)

[src/edge-agent/oidc/types.ts:74](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L74)

___

### TokenResponseSchema

• **TokenResponseSchema**: `TObject`\<\{ `access_token`: `TString` ; `c_nonce`: `TOptional`\<`TString`\> ; `c_nonce_expires_in`: `TOptional`\<`TNumber`\> ; `expires_in`: `TOptional`\<`TNumber`\> ; `id_token`: `TOptional`\<`TString`\> ; `refresh_expires_in`: `TOptional`\<`TNumber`\> ; `refresh_token`: `TOptional`\<`TString`\> ; `scope`: `TOptional`\<`TString`\> ; `session_state`: `TOptional`\<`TString`\> ; `token_type`: `TString`  }\>

#### Defined in

[src/edge-agent/oidc/types.ts:539](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L539)

[src/edge-agent/oidc/types.ts:540](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/types.ts#L540)
