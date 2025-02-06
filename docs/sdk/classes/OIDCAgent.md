[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / OIDCAgent

# Class: OIDCAgent

define the structure of a Startable entity

## Hierarchy

- [`Controller`](Domain.Protocols.Startable.Controller.md)

  ↳ **`OIDCAgent`**

## Table of contents

### Constructors

- [constructor](OIDCAgent.md#constructor)

### Properties

- [api](OIDCAgent.md#api)
- [apollo](OIDCAgent.md#apollo)
- [castor](OIDCAgent.md#castor)
- [connections](OIDCAgent.md#connections)
- [pluto](OIDCAgent.md#pluto)
- [pollux](OIDCAgent.md#pollux)
- [seed](OIDCAgent.md#seed)
- [state](OIDCAgent.md#state)

### Methods

- [\_start](OIDCAgent.md#_start)
- [\_stop](OIDCAgent.md#_stop)
- [createAuthorizationRequest](OIDCAgent.md#createauthorizationrequest)
- [createCredentialRequest](OIDCAgent.md#createcredentialrequest)
- [createNewPrismDID](OIDCAgent.md#createnewprismdid)
- [fetchAuthorizationServerMetadata](OIDCAgent.md#fetchauthorizationservermetadata)
- [fetchIssuerMetadata](OIDCAgent.md#fetchissuermetadata)
- [handleTokenRequest](OIDCAgent.md#handletokenrequest)
- [isCredentialRevoked](OIDCAgent.md#iscredentialrevoked)
- [parseCredentialOffer](OIDCAgent.md#parsecredentialoffer)
- [resolveCredentialOffer](OIDCAgent.md#resolvecredentialoffer)
- [resolveCredentialRequest](OIDCAgent.md#resolvecredentialrequest)
- [revealCredentialFields](OIDCAgent.md#revealcredentialfields)
- [runTask](OIDCAgent.md#runtask)
- [send](OIDCAgent.md#send)
- [signWith](OIDCAgent.md#signwith)
- [start](OIDCAgent.md#start)
- [stop](OIDCAgent.md#stop)
- [verifiableCredentials](OIDCAgent.md#verifiablecredentials)
- [initialize](OIDCAgent.md#initialize)

## Constructors

### constructor

• **new OIDCAgent**(`apollo`, `castor`, `pluto`, `seed?`, `api?`): [`OIDCAgent`](OIDCAgent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apollo` | [`Apollo`](../interfaces/Domain.Apollo.md) |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `pluto` | [`Pluto`](../interfaces/Domain.Pluto-1.md) |
| `seed?` | [`Seed`](../interfaces/Domain.Seed.md) |
| `api?` | [`Api`](../interfaces/Domain.Api.md) |

#### Returns

[`OIDCAgent`](OIDCAgent.md)

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[constructor](Domain.Protocols.Startable.Controller.md#constructor)

#### Defined in

[src/edge-agent/oidc/Agent.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L35)

## Properties

### api

• `Optional` `Readonly` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/edge-agent/oidc/Agent.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L40)

___

### apollo

• `Readonly` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/edge-agent/oidc/Agent.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L36)

___

### castor

• `Readonly` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/edge-agent/oidc/Agent.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L37)

___

### connections

• `Private` **connections**: `Connection`[] = `[]`

#### Defined in

[src/edge-agent/oidc/Agent.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L32)

___

### pluto

• `Readonly` **pluto**: [`Pluto`](../interfaces/Domain.Pluto-1.md)

#### Defined in

[src/edge-agent/oidc/Agent.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L38)

___

### pollux

• `Readonly` **pollux**: [`Pollux`](Pollux.md)

#### Defined in

[src/edge-agent/oidc/Agent.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L33)

___

### seed

• `Optional` `Readonly` **seed**: [`Seed`](../interfaces/Domain.Seed.md)

#### Defined in

[src/edge-agent/oidc/Agent.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L39)

___

### state

• **state**: [`State`](../enums/Domain.Protocols.Startable.State.md) = `State.STOPPED`

current status of the entity

#### Inherited from

[Controller](Domain.Protocols.Startable.Controller.md).[state](Domain.Protocols.Startable.Controller.md#state)

#### Defined in

[src/domain/protocols/Startable.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/protocols/Startable.ts#L42)

## Methods

### \_start

▸ **_start**(): `Promise`\<`void`\>

internal method to define specific startup routine

used by `start()` internally

implement with `protected` to keep hidden from class interface

#### Returns

`Promise`\<`void`\>

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[_start](Domain.Protocols.Startable.Controller.md#_start)

#### Defined in

[src/edge-agent/oidc/Agent.ts:77](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L77)

___

### \_stop

▸ **_stop**(): `Promise`\<`void`\>

internal method to define teardown routine

used by `stop()` internally

implement with `protected` to keep hidden from class interface

#### Returns

`Promise`\<`void`\>

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[_stop](Domain.Protocols.Startable.Controller.md#_stop)

#### Defined in

[src/edge-agent/oidc/Agent.ts:82](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L82)

___

### createAuthorizationRequest

▸ **createAuthorizationRequest**(`issuerMeta`, `authServerMeta`, `clientId`, `redirectUri`, `opts?`): `Promise`\<`AuthorizationRequest`\>

manage the creation of an Authorization Request

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issuerMeta` | `Object` |  |
| `issuerMeta.authorization_servers?` | `string`[] | - |
| `issuerMeta.batch_credential_endpoint?` | `string` | - |
| `issuerMeta.credential_configurations_supported` | `Object` | - |
| `issuerMeta.credential_endpoint` | `string` | - |
| `issuerMeta.credential_identifiers_supported?` | `boolean` | - |
| `issuerMeta.credential_issuer` | `string` | - |
| `issuerMeta.credential_response_encryption?` | `Object` | - |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `string`[] | - |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `string`[] | - |
| `issuerMeta.credential_response_encryption.encryption_required` | `boolean` | - |
| `issuerMeta.deferred_credential_endpoint?` | `string` | - |
| `issuerMeta.display?` | `Object` | - |
| `issuerMeta.notification_endpoint?` | `string` | - |
| `issuerMeta.signed_metadata?` | `string` | - |
| `authServerMeta` | `Object` |  |
| `authServerMeta.acr_values_supported?` | `string`[] | JSON array containing a list of the Authentication Context Class References that this authorization server supports. |
| `authServerMeta.authorization_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`alg` value). |
| `authServerMeta.authorization_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`enc` value). |
| `authServerMeta.authorization_endpoint?` | `string` | URL of the authorization server's authorization endpoint. |
| `authServerMeta.authorization_response_iss_parameter_supported?` | `boolean` | Boolean value indicating whether the authorization server provides the `iss` parameter in the authorization response. |
| `authServerMeta.authorization_signing_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. |
| `authServerMeta.backchannel_authentication_endpoint?` | `string` | CIBA Backchannel Authentication Endpoint. |
| `authServerMeta.backchannel_authentication_request_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported for validation of signed CIBA authentication requests. |
| `authServerMeta.backchannel_logout_session_supported?` | `boolean` | Boolean value specifying whether the authorization server can pass a `sid` (session ID) Claim in the Logout Token to identify the RP session with the OP. |
| `authServerMeta.backchannel_logout_supported?` | `boolean` | Boolean value specifying whether the authorization server supports back-channel logout. |
| `authServerMeta.backchannel_token_delivery_modes_supported?` | `string`[] | Supported CIBA authentication result delivery modes. |
| `authServerMeta.backchannel_user_code_parameter_supported?` | `boolean` | Indicates whether the authorization server supports the use of the CIBA `user_code` parameter. |
| `authServerMeta.check_session_iframe?` | `string` | URL of an authorization server iframe that supports cross-origin communications for session state information with the RP Client, using the HTML5 postMessage API. |
| `authServerMeta.claim_types_supported?` | `string`[] | JSON array containing a list of the Claim Types that the authorization server supports. |
| `authServerMeta.claims_locales_supported?` | `string`[] | Languages and scripts supported for values in Claims being returned, represented as a JSON array of RFC 5646 language tag values. |
| `authServerMeta.claims_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `claims` parameter. |
| `authServerMeta.claims_supported?` | `string`[] | JSON array containing a list of the Claim Names of the Claims that the authorization server MAY be able to supply values for. |
| `authServerMeta.code_challenge_methods_supported?` | `string`[] | PKCE code challenge methods supported by this authorization server. |
| `authServerMeta.device_authorization_endpoint?` | `string` | URL of the authorization server's device authorization endpoint. |
| `authServerMeta.display_values_supported?` | `string`[] | JSON array containing a list of the `display` parameter values that the authorization server supports. |
| `authServerMeta.dpop_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS algorithms supported for DPoP proof JWTs. |
| `authServerMeta.end_session_endpoint?` | `string` | URL at the authorization server to which an RP can perform a redirect to request that the End-User be logged out at the authorization server. |
| `authServerMeta.frontchannel_logout_session_supported?` | `boolean` | Boolean value specifying whether the authorization server can pass `iss` (issuer) and `sid` (session ID) query parameters to identify the RP session with the authorization server when the `frontchannel_logout_uri` is used. |
| `authServerMeta.frontchannel_logout_supported?` | `boolean` | Boolean value specifying whether the authorization server supports HTTP-based logout. |
| `authServerMeta.grant_types_supported?` | `string`[] | JSON array containing a list of the `grant_type` values that this authorization server supports. |
| `authServerMeta.id_token_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the authorization server for the ID Token. |
| `authServerMeta.id_token_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the authorization server for the ID Token. |
| `authServerMeta.id_token_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the authorization server for the ID Token. |
| `authServerMeta.introspection_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response content key encryption (`alg` value). |
| `authServerMeta.introspection_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response content encryption (`enc` value). |
| `authServerMeta.introspection_endpoint?` | `string` | URL of the authorization server's introspection endpoint. |
| `authServerMeta.introspection_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this introspection endpoint. |
| `authServerMeta.introspection_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the introspection endpoint for the signature on the JWT used to authenticate the client at the introspection endpoint. |
| `authServerMeta.introspection_signing_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. |
| `authServerMeta.issuer` | `string` | Authorization server's Issuer Identifier URL. |
| `authServerMeta.jwks_uri?` | `string` | URL of the authorization server's JWK Set document. |
| `authServerMeta.mtls_endpoint_aliases?` | `Object` | JSON object containing alternative authorization server endpoints, which a client intending to do mutual TLS will use in preference to the conventional endpoints. |
| `authServerMeta.op_policy_uri?` | `string` | URL that the authorization server provides to the person registering the client to read about the authorization server's requirements on how the client can use the data provided by the authorization server. |
| `authServerMeta.op_tos_uri?` | `string` | URL that the authorization server provides to the person registering the client to read about the authorization server's terms of service. |
| `authServerMeta.pushed_authorization_request_endpoint?` | `string` | URL of the authorization server's pushed authorization request endpoint. |
| `authServerMeta.registration_endpoint?` | `string` | URL of the authorization server's Dynamic Client Registration Endpoint. |
| `authServerMeta.request_object_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the authorization server for Request Objects. |
| `authServerMeta.request_object_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the authorization server for Request Objects. |
| `authServerMeta.request_object_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the authorization server for Request Objects. |
| `authServerMeta.request_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `request` parameter. |
| `authServerMeta.request_uri_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `request_uri` parameter. |
| `authServerMeta.require_pushed_authorization_requests?` | `boolean` | Indicates whether the authorization server accepts authorization requests only via PAR. |
| `authServerMeta.require_request_uri_registration?` | `boolean` | Boolean value specifying whether the authorization server requires any `request_uri` values used to be pre-registered. |
| `authServerMeta.require_signed_request_object?` | `boolean` | Indicates where authorization request needs to be protected as Request Object and provided through either `request` or `request_uri` parameter. |
| `authServerMeta.response_modes_supported?` | `string`[] | JSON array containing a list of the `response_mode` values that this authorization server supports. |
| `authServerMeta.response_types_supported?` | `string`[] | JSON array containing a list of the `response_type` values that this authorization server supports. |
| `authServerMeta.revocation_endpoint?` | `string` | URL of the authorization server's revocation endpoint. |
| `authServerMeta.revocation_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this revocation endpoint. |
| `authServerMeta.revocation_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the revocation endpoint for the signature on the JWT used to authenticate the client at the revocation endpoint. |
| `authServerMeta.scopes_supported?` | `string`[] | JSON array containing a list of the `scope` values that this authorization server supports. |
| `authServerMeta.service_documentation?` | `string` | URL of a page containing human-readable information that developers might want or need to know when using the authorization server. |
| `authServerMeta.signed_metadata?` | `string` | Signed JWT containing metadata values about the authorization server as claims. |
| `authServerMeta.subject_types_supported?` | `string`[] | JSON array containing a list of the Subject Identifier types that this authorization server supports. |
| `authServerMeta.tls_client_certificate_bound_access_tokens?` | `boolean` | Indicates authorization server support for mutual-TLS client certificate-bound access tokens. |
| `authServerMeta.token_endpoint?` | `string` | URL of the authorization server's token endpoint. |
| `authServerMeta.token_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this token endpoint. |
| `authServerMeta.token_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the token endpoint for the signature on the JWT used to authenticate the client at the token endpoint. |
| `authServerMeta.ui_locales_supported?` | `string`[] | Languages and scripts supported for the user interface, represented as a JSON array of language tag values from RFC 5646. |
| `authServerMeta.userinfo_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the UserInfo Endpoint. |
| `authServerMeta.userinfo_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the UserInfo Endpoint. |
| `authServerMeta.userinfo_endpoint?` | `string` | URL of the authorization server's UserInfo Endpoint. |
| `authServerMeta.userinfo_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the UserInfo Endpoint. |
| `clientId` | `string` |  |
| `redirectUri` | `string` |  |
| `opts?` | `Object` | - |
| `opts.offer?` | `Object` | - |
| `opts.offer.credential_configuration_ids` | `string`[] | array of unique strings that each identify one of the keys in name/value pairs stored in the `credential_configurations_supported` Credential Issuer Metadata |
| `opts.offer.credential_issuer` | `string` | url of the Credential Issuer from which the wallet is requested to obtain one or more Credentials the Wallet uses it to obtain the Credential Issuer's Metadata |
| `opts.offer.grants?` | `Object` | indicates the Grant Types the Authorization Server is prepared to process if `grants` is nil the Wallet must determine the Grant Types using the Metadata when multiple grants are present, it is at the Wallets discretion which to use |
| `opts.offer.grants.authorization_code?` | `Object` | - |
| `opts.offer.grants.authorization_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries |
| `opts.offer.grants.authorization_code.issuer_state?` | `string` | used to bind the Authorization Request with the Credential Issuer to a context if the Wallet decides to use the Authorization Code flow and received this value it must be included in the subsequent Authorization Reqest |
| `opts.offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code?` | `Object` | - |
| `opts.offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries |
| `opts.offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.interval?` | `number` | amount of time in seconds that the Wallet should wait between polling requests to the token endpoint |
| `opts.offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.pre-authorized_code` | `string` | code representing the Issuers authorization short lived and single use if the Wallet decides to use the pre-authorized_code flow, this value must be included in the subsequent Token Request |
| `opts.offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code?` | `Object` | specifies whether the Authorization Server expects a presentation of a Transaction Code along with the Token Request |
| `opts.offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.description?` | ... \| ... | - |
| `opts.offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.input_mode?` | ... \| ... | - |
| `opts.offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.length?` | ... \| ... | - |
| `opts.scopes?` | `string`[] | - |

#### Returns

`Promise`\<`AuthorizationRequest`\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:241](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L241)

___

### createCredentialRequest

▸ **createCredentialRequest**(`offer`, `clientId`): `Promise`\<`CredentialRequest`\>

create a CredentialRequest for the given offer
a connection with the relevant Issuer must have already been established

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offer` | `Object` |  |
| `offer.credential_configuration_ids` | `string`[] | array of unique strings that each identify one of the keys in name/value pairs stored in the `credential_configurations_supported` Credential Issuer Metadata |
| `offer.credential_issuer` | `string` | url of the Credential Issuer from which the wallet is requested to obtain one or more Credentials the Wallet uses it to obtain the Credential Issuer's Metadata |
| `offer.grants?` | `Object` | indicates the Grant Types the Authorization Server is prepared to process if `grants` is nil the Wallet must determine the Grant Types using the Metadata when multiple grants are present, it is at the Wallets discretion which to use |
| `offer.grants.authorization_code?` | `Object` | - |
| `offer.grants.authorization_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries |
| `offer.grants.authorization_code.issuer_state?` | `string` | used to bind the Authorization Request with the Credential Issuer to a context if the Wallet decides to use the Authorization Code flow and received this value it must be included in the subsequent Authorization Reqest |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code?` | `Object` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.interval?` | `number` | amount of time in seconds that the Wallet should wait between polling requests to the token endpoint |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.pre-authorized_code` | `string` | code representing the Issuers authorization short lived and single use if the Wallet decides to use the pre-authorized_code flow, this value must be included in the subsequent Token Request |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code?` | `Object` | specifies whether the Authorization Server expects a presentation of a Transaction Code along with the Token Request |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.description?` | `string` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.input_mode?` | `string` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.length?` | `number` | - |
| `clientId` | `string` |  |

#### Returns

`Promise`\<`CredentialRequest`\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:303](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L303)

___

### createNewPrismDID

▸ **createNewPrismDID**(`alias`, `services?`, `keyPathIndex?`): `Promise`\<[`DID`](Domain.DID.md)\>

Asyncronously create a new PrismDID

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alias` | `string` | `undefined` |
| `services?` | [`Service`](Domain.Service.md)[] | `[]` |
| `keyPathIndex?` | `number` | `undefined` |

#### Returns

`Promise`\<[`DID`](Domain.DID.md)\>

**`Async`**

#### Defined in

[src/edge-agent/oidc/Agent.ts:142](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L142)

___

### fetchAuthorizationServerMetadata

▸ **fetchAuthorizationServerMetadata**(`uri`): `Promise`\<\{ `acr_values_supported?`: `string`[] ; `authorization_encryption_alg_values_supported?`: `string`[] ; `authorization_encryption_enc_values_supported?`: `string`[] ; `authorization_endpoint?`: `string` ; `authorization_response_iss_parameter_supported?`: `boolean` ; `authorization_signing_alg_values_supported?`: `string`[] ; `backchannel_authentication_endpoint?`: `string` ; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[] ; `backchannel_logout_session_supported?`: `boolean` ; `backchannel_logout_supported?`: `boolean` ; `backchannel_token_delivery_modes_supported?`: `string`[] ; `backchannel_user_code_parameter_supported?`: `boolean` ; `check_session_iframe?`: `string` ; `claim_types_supported?`: `string`[] ; `claims_locales_supported?`: `string`[] ; `claims_parameter_supported?`: `boolean` ; `claims_supported?`: `string`[] ; `code_challenge_methods_supported?`: `string`[] ; `device_authorization_endpoint?`: `string` ; `display_values_supported?`: `string`[] ; `dpop_signing_alg_values_supported?`: `string`[] ; `end_session_endpoint?`: `string` ; `frontchannel_logout_session_supported?`: `boolean` ; `frontchannel_logout_supported?`: `boolean` ; `grant_types_supported?`: `string`[] ; `id_token_encryption_alg_values_supported?`: `string`[] ; `id_token_encryption_enc_values_supported?`: `string`[] ; `id_token_signing_alg_values_supported?`: `string`[] ; `introspection_encryption_alg_values_supported?`: `string`[] ; `introspection_encryption_enc_values_supported?`: `string`[] ; `introspection_endpoint?`: `string` ; `introspection_endpoint_auth_methods_supported?`: `string`[] ; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[] ; `introspection_signing_alg_values_supported?`: `string`[] ; `issuer`: `string` ; `jwks_uri?`: `string` ; `mtls_endpoint_aliases?`: {} ; `op_policy_uri?`: `string` ; `op_tos_uri?`: `string` ; `pushed_authorization_request_endpoint?`: `string` ; `registration_endpoint?`: `string` ; `request_object_encryption_alg_values_supported?`: `string`[] ; `request_object_encryption_enc_values_supported?`: `string`[] ; `request_object_signing_alg_values_supported?`: `string`[] ; `request_parameter_supported?`: `boolean` ; `request_uri_parameter_supported?`: `boolean` ; `require_pushed_authorization_requests?`: `boolean` ; `require_request_uri_registration?`: `boolean` ; `require_signed_request_object?`: `boolean` ; `response_modes_supported?`: `string`[] ; `response_types_supported?`: `string`[] ; `revocation_endpoint?`: `string` ; `revocation_endpoint_auth_methods_supported?`: `string`[] ; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[] ; `scopes_supported?`: `string`[] ; `service_documentation?`: `string` ; `signed_metadata?`: `string` ; `subject_types_supported?`: `string`[] ; `tls_client_certificate_bound_access_tokens?`: `boolean` ; `token_endpoint?`: `string` ; `token_endpoint_auth_methods_supported?`: `string`[] ; `token_endpoint_auth_signing_alg_values_supported?`: `string`[] ; `ui_locales_supported?`: `string`[] ; `userinfo_encryption_alg_values_supported?`: `string`[] ; `userinfo_encryption_enc_values_supported?`: `string`[] ; `userinfo_endpoint?`: `string` ; `userinfo_signing_alg_values_supported?`: `string`[]  }\>

try to retrieve Authorization Server Metadata from the give URI
`/.well-known/openid-configuration` will be appended to the URI

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` \| `URL` |

#### Returns

`Promise`\<\{ `acr_values_supported?`: `string`[] ; `authorization_encryption_alg_values_supported?`: `string`[] ; `authorization_encryption_enc_values_supported?`: `string`[] ; `authorization_endpoint?`: `string` ; `authorization_response_iss_parameter_supported?`: `boolean` ; `authorization_signing_alg_values_supported?`: `string`[] ; `backchannel_authentication_endpoint?`: `string` ; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[] ; `backchannel_logout_session_supported?`: `boolean` ; `backchannel_logout_supported?`: `boolean` ; `backchannel_token_delivery_modes_supported?`: `string`[] ; `backchannel_user_code_parameter_supported?`: `boolean` ; `check_session_iframe?`: `string` ; `claim_types_supported?`: `string`[] ; `claims_locales_supported?`: `string`[] ; `claims_parameter_supported?`: `boolean` ; `claims_supported?`: `string`[] ; `code_challenge_methods_supported?`: `string`[] ; `device_authorization_endpoint?`: `string` ; `display_values_supported?`: `string`[] ; `dpop_signing_alg_values_supported?`: `string`[] ; `end_session_endpoint?`: `string` ; `frontchannel_logout_session_supported?`: `boolean` ; `frontchannel_logout_supported?`: `boolean` ; `grant_types_supported?`: `string`[] ; `id_token_encryption_alg_values_supported?`: `string`[] ; `id_token_encryption_enc_values_supported?`: `string`[] ; `id_token_signing_alg_values_supported?`: `string`[] ; `introspection_encryption_alg_values_supported?`: `string`[] ; `introspection_encryption_enc_values_supported?`: `string`[] ; `introspection_endpoint?`: `string` ; `introspection_endpoint_auth_methods_supported?`: `string`[] ; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[] ; `introspection_signing_alg_values_supported?`: `string`[] ; `issuer`: `string` ; `jwks_uri?`: `string` ; `mtls_endpoint_aliases?`: {} ; `op_policy_uri?`: `string` ; `op_tos_uri?`: `string` ; `pushed_authorization_request_endpoint?`: `string` ; `registration_endpoint?`: `string` ; `request_object_encryption_alg_values_supported?`: `string`[] ; `request_object_encryption_enc_values_supported?`: `string`[] ; `request_object_signing_alg_values_supported?`: `string`[] ; `request_parameter_supported?`: `boolean` ; `request_uri_parameter_supported?`: `boolean` ; `require_pushed_authorization_requests?`: `boolean` ; `require_request_uri_registration?`: `boolean` ; `require_signed_request_object?`: `boolean` ; `response_modes_supported?`: `string`[] ; `response_types_supported?`: `string`[] ; `revocation_endpoint?`: `string` ; `revocation_endpoint_auth_methods_supported?`: `string`[] ; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[] ; `scopes_supported?`: `string`[] ; `service_documentation?`: `string` ; `signed_metadata?`: `string` ; `subject_types_supported?`: `string`[] ; `tls_client_certificate_bound_access_tokens?`: `boolean` ; `token_endpoint?`: `string` ; `token_endpoint_auth_methods_supported?`: `string`[] ; `token_endpoint_auth_signing_alg_values_supported?`: `string`[] ; `ui_locales_supported?`: `string`[] ; `userinfo_encryption_alg_values_supported?`: `string`[] ; `userinfo_encryption_enc_values_supported?`: `string`[] ; `userinfo_endpoint?`: `string` ; `userinfo_signing_alg_values_supported?`: `string`[]  }\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:224](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L224)

___

### fetchIssuerMetadata

▸ **fetchIssuerMetadata**(`uri`): `Promise`\<\{ `authorization_servers?`: `string`[] ; `batch_credential_endpoint?`: `string` ; `credential_configurations_supported`: {} ; `credential_endpoint`: `string` ; `credential_identifiers_supported?`: `boolean` ; `credential_issuer`: `string` ; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[] ; `enc_values_supported`: `string`[] ; `encryption_required`: `boolean`  } ; `deferred_credential_endpoint?`: `string` ; `display?`: {} ; `notification_endpoint?`: `string` ; `signed_metadata?`: `string`  }\>

try to retrieve Issuer Metadata from the given URI
`/.well-known/openid-credential-issuer` will be appended to the uri

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`\<\{ `authorization_servers?`: `string`[] ; `batch_credential_endpoint?`: `string` ; `credential_configurations_supported`: {} ; `credential_endpoint`: `string` ; `credential_identifiers_supported?`: `boolean` ; `credential_issuer`: `string` ; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[] ; `enc_values_supported`: `string`[] ; `encryption_required`: `boolean`  } ; `deferred_credential_endpoint?`: `string` ; `display?`: {} ; `notification_endpoint?`: `string` ; `signed_metadata?`: `string`  }\>

**`Link`**

https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-issuer-metadata

#### Defined in

[src/edge-agent/oidc/Agent.ts:212](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L212)

___

### handleTokenRequest

▸ **handleTokenRequest**(`authorizationRequest`, `callbackUrl?`): `Promise`\<`TokenResponse`\>

manage fetching an Token from the Authorization Server
establishing a connection for future use

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorizationRequest` | `AuthorizationRequest` |
| `callbackUrl?` | `string` \| `URL` |

#### Returns

`Promise`\<`TokenResponse`\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:271](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L271)

___

### isCredentialRevoked

▸ **isCredentialRevoked**(`credential`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:108](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L108)

___

### parseCredentialOffer

▸ **parseCredentialOffer**(`offer`): `Promise`\<\{ `credential_configuration_ids`: `string`[] ; `credential_issuer`: `string` ; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string` ; `issuer_state?`: `string`  } ; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string` ; `interval?`: `number` ; `pre-authorized_code`: `string` ; `tx_code?`: \{ `description?`: `string` ; `input_mode?`: `string` ; `length?`: `number`  }  }  }  }\>

validates the offer is correctly formed OIDC Credential Offer
returns the offer Typed as such

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offer` | `string` \| `JsonObj`\<`any`\> | json object |

#### Returns

`Promise`\<\{ `credential_configuration_ids`: `string`[] ; `credential_issuer`: `string` ; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string` ; `issuer_state?`: `string`  } ; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string` ; `interval?`: `number` ; `pre-authorized_code`: `string` ; `tx_code?`: \{ `description?`: `string` ; `input_mode?`: `string` ; `length?`: `number`  }  }  }  }\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:198](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L198)

___

### resolveCredentialOffer

▸ **resolveCredentialOffer**(`offer`, `clientId`, `redirectUri`): `Promise`\<`AuthorizationRequest`\>

Convenience function 1 of 2
for Credential Issuance flow 
from Credential Offer to Authorization Request

steps
  - fetchIssuerMetadata
  - fetchAuthorizationServerMetadata
  - createAuthorizationRequest

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offer` | `Object` |  |
| `offer.credential_configuration_ids` | `string`[] | array of unique strings that each identify one of the keys in name/value pairs stored in the `credential_configurations_supported` Credential Issuer Metadata |
| `offer.credential_issuer` | `string` | url of the Credential Issuer from which the wallet is requested to obtain one or more Credentials the Wallet uses it to obtain the Credential Issuer's Metadata |
| `offer.grants?` | `Object` | indicates the Grant Types the Authorization Server is prepared to process if `grants` is nil the Wallet must determine the Grant Types using the Metadata when multiple grants are present, it is at the Wallets discretion which to use |
| `offer.grants.authorization_code?` | `Object` | - |
| `offer.grants.authorization_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries |
| `offer.grants.authorization_code.issuer_state?` | `string` | used to bind the Authorization Request with the Credential Issuer to a context if the Wallet decides to use the Authorization Code flow and received this value it must be included in the subsequent Authorization Reqest |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code?` | `Object` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.interval?` | `number` | amount of time in seconds that the Wallet should wait between polling requests to the token endpoint |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.pre-authorized_code` | `string` | code representing the Issuers authorization short lived and single use if the Wallet decides to use the pre-authorized_code flow, this value must be included in the subsequent Token Request |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code?` | `Object` | specifies whether the Authorization Server expects a presentation of a Transaction Code along with the Token Request |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.description?` | `string` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.input_mode?` | `string` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.length?` | `number` | - |
| `clientId` | `string` | - |
| `redirectUri` | `string` | - |

#### Returns

`Promise`\<`AuthorizationRequest`\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:334](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L334)

___

### resolveCredentialRequest

▸ **resolveCredentialRequest**(`offer`, `authorizationRequest`, `opts?`): `Promise`\<[`Credential`](Domain.Credential.md)\>

Convenience function 2 of 2 
for Credential Issuance flow 
from callbackUrl to Credential issuance

steps
  - handleTokenRequest
  - createCredentialRequest
  - storeCredential

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offer` | `Object` | - |
| `offer.credential_configuration_ids` | `string`[] | array of unique strings that each identify one of the keys in name/value pairs stored in the `credential_configurations_supported` Credential Issuer Metadata |
| `offer.credential_issuer` | `string` | url of the Credential Issuer from which the wallet is requested to obtain one or more Credentials the Wallet uses it to obtain the Credential Issuer's Metadata |
| `offer.grants?` | `Object` | indicates the Grant Types the Authorization Server is prepared to process if `grants` is nil the Wallet must determine the Grant Types using the Metadata when multiple grants are present, it is at the Wallets discretion which to use |
| `offer.grants.authorization_code?` | `Object` | - |
| `offer.grants.authorization_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries |
| `offer.grants.authorization_code.issuer_state?` | `string` | used to bind the Authorization Request with the Credential Issuer to a context if the Wallet decides to use the Authorization Code flow and received this value it must be included in the subsequent Authorization Reqest |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code?` | `Object` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.interval?` | `number` | amount of time in seconds that the Wallet should wait between polling requests to the token endpoint |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.pre-authorized_code` | `string` | code representing the Issuers authorization short lived and single use if the Wallet decides to use the pre-authorized_code flow, this value must be included in the subsequent Token Request |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code?` | `Object` | specifies whether the Authorization Server expects a presentation of a Transaction Code along with the Token Request |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.description?` | `string` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.input_mode?` | `string` | - |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.length?` | `number` | - |
| `authorizationRequest` | `AuthorizationRequest` |  |
| `opts?` | `Object` | - |
| `opts.callbackUrl?` | `string` \| `URL` | - |
| `opts.clientId?` | `string` | - |

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:357](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L357)

___

### revealCredentialFields

▸ **revealCredentialFields**(`credential`, `fields`, `linkSecret`): `Promise`\<`Record`\<`string`, `any`\>\>

This method can be used by holders in order to disclose the value of a Credential
JWT are just encoded plainText
Anoncreds will really need to be disclosed as the fields are encoded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |
| `fields` | `string`[] |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:120](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L120)

___

### runTask

▸ **runTask**\<`T`\>(`task`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `Task`\<`T`, `unknown`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:90](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L90)

___

### send

▸ **send**(`request`): `Promise`\<[`Credential`](Domain.Credential.md)\>

handle sending the given request and return the appropriate response

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `CredentialRequest` |

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:175](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L175)

▸ **send**(`request`): `Promise`\<`TokenResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `TokenRequest` |

#### Returns

`Promise`\<`TokenResponse`\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:176](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L176)

___

### signWith

▸ **signWith**(`did`, `message`): `Promise`\<[`Signature`](../interfaces/Domain.Signature.md)\>

Asyncronously sign a message with a DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `message` | `Uint8Array` |

#### Returns

`Promise`\<[`Signature`](../interfaces/Domain.Signature.md)\>

**`Async`**

#### Defined in

[src/edge-agent/oidc/Agent.ts:159](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L159)

___

### start

▸ **start**(): `Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

#### Inherited from

[Controller](Domain.Protocols.Startable.Controller.md).[start](Domain.Protocols.Startable.Controller.md#start)

#### Defined in

[src/domain/protocols/Startable.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/protocols/Startable.ts#L62)

___

### stop

▸ **stop**(): `Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

#### Inherited from

[Controller](Domain.Protocols.Startable.Controller.md).[stop](Domain.Protocols.Startable.Controller.md#stop)

#### Defined in

[src/domain/protocols/Startable.ts:72](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/protocols/Startable.ts#L72)

___

### verifiableCredentials

▸ **verifiableCredentials**(): `Promise`\<[`Credential`](Domain.Credential.md)[]\>

Asyncronously get all verifiable credentials

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)[]\>

#### Defined in

[src/edge-agent/oidc/Agent.ts:129](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L129)

___

### initialize

▸ **initialize**(`params`): [`OIDCAgent`](OIDCAgent.md)

Convenience initializer for Agent
allowing default instantiation, omitting all but the absolute necessary parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | dependencies object |
| `params.api?` | [`Api`](../interfaces/Domain.Api.md) |  |
| `params.apollo?` | [`Apollo`](../interfaces/Domain.Apollo.md) |  |
| `params.castor?` | [`Castor`](../interfaces/Domain.Castor.md) |  |
| `params.pluto` | [`Pluto`](../interfaces/Domain.Pluto-1.md) | storage implementation |
| `params.seed?` | [`Seed`](../interfaces/Domain.Seed.md) |  |

#### Returns

[`OIDCAgent`](OIDCAgent.md)

#### Defined in

[src/edge-agent/oidc/Agent.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/oidc/Agent.ts#L60)
