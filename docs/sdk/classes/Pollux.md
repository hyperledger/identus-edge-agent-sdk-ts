[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Pollux

# Class: Pollux

Implementation of Pollux

**`Export`**

Pollux

## Implements

- [`Pollux`](../interfaces/Domain.Pollux-1.md)

## Table of contents

### Constructors

- [constructor](Pollux.md#constructor)

### Properties

- [JWT](Pollux.md#jwt)
- [SDJWT](Pollux.md#sdjwt)
- [\_anoncreds](Pollux.md#_anoncreds)
- [\_pako](Pollux.md#_pako)
- [api](Pollux.md#api)
- [apollo](Pollux.md#apollo)
- [castor](Pollux.md#castor)

### Accessors

- [anoncreds](Pollux.md#anoncreds)

### Methods

- [createAnoncredsPresentationSubmission](Pollux.md#createanoncredspresentationsubmission)
- [createJWTPresentationSubmission](Pollux.md#createjwtpresentationsubmission)
- [createPresentationDefinitionRequest](Pollux.md#createpresentationdefinitionrequest)
- [createPresentationProof](Pollux.md#createpresentationproof)
- [createPresentationSubmission](Pollux.md#createpresentationsubmission)
- [encode](Pollux.md#encode)
- [extractEncodedList](Pollux.md#extractencodedlist)
- [extractVerificationStatusFromCredential](Pollux.md#extractverificationstatusfromcredential)
- [extractVerificationStatusFromResponse](Pollux.md#extractverificationstatusfromresponse)
- [fetchCredentialDefinition](Pollux.md#fetchcredentialdefinition)
- [fetchRevocationRegistry](Pollux.md#fetchrevocationregistry)
- [fetchSchema](Pollux.md#fetchschema)
- [isCredentialRevoked](Pollux.md#iscredentialrevoked)
- [isOfferPayload](Pollux.md#isofferpayload)
- [isPresentationDefinitionRequestType](Pollux.md#ispresentationdefinitionrequesttype)
- [parseCredential](Pollux.md#parsecredential)
- [parsePresentationSubmission](Pollux.md#parsepresentationsubmission)
- [processCredentialOffer](Pollux.md#processcredentialoffer)
- [revealCredentialFields](Pollux.md#revealcredentialfields)
- [start](Pollux.md#start)
- [validPresentationSubmissionOptions](Pollux.md#validpresentationsubmissionoptions)
- [verifyPresentationSubmission](Pollux.md#verifypresentationsubmission)
- [verifyPresentationSubmissionAnoncreds](Pollux.md#verifypresentationsubmissionanoncreds)
- [verifyPresentationSubmissionJWT](Pollux.md#verifypresentationsubmissionjwt)
- [verifyRevocationProof](Pollux.md#verifyrevocationproof)

## Constructors

### constructor

• **new Pollux**(`apollo`, `castor`, `api?`, `JWT?`, `SDJWT?`): [`Pollux`](Pollux.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apollo` | [`Apollo`](../interfaces/Domain.Apollo.md) |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `api` | [`Api`](../interfaces/Domain.Api.md) |
| `JWT` | `JWT` |
| `SDJWT` | `SDJWT` |

#### Returns

[`Pollux`](Pollux.md)

#### Defined in

[src/pollux/Pollux.ts:75](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L75)

## Properties

### JWT

• `Private` **JWT**: `JWT`

#### Defined in

[src/pollux/Pollux.ts:79](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L79)

___

### SDJWT

• `Private` **SDJWT**: `SDJWT`

#### Defined in

[src/pollux/Pollux.ts:80](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L80)

___

### \_anoncreds

• `Private` **\_anoncreds**: `undefined` \| `AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:72](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L72)

___

### \_pako

• `Private` **\_pako**: typeof `Pako` = `pako`

#### Defined in

[src/pollux/Pollux.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L73)

___

### api

• `Private` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/pollux/Pollux.ts:78](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L78)

___

### apollo

• `Private` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/pollux/Pollux.ts:76](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L76)

___

### castor

• `Private` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/pollux/Pollux.ts:77](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L77)

## Accessors

### anoncreds

• `get` **anoncreds**(): `AnoncredsLoader`

#### Returns

`AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:84](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L84)

## Methods

### createAnoncredsPresentationSubmission

▸ **createAnoncredsPresentationSubmission**(`presentationDefinitionRequest`, `credential`, `linkSecret`): `Promise`\<`PresentationType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationDefinitionRequest` | `PresentationRequestType` |
| `credential` | [`AnonCredsCredential`](AnonCredsCredential.md) |
| `linkSecret` | [`LinkSecret`](Domain.LinkSecret.md) |

#### Returns

`Promise`\<`PresentationType`\>

#### Defined in

[src/pollux/Pollux.ts:396](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L396)

___

### createJWTPresentationSubmission

▸ **createJWTPresentationSubmission**(`presentationDefinitionRequest`, `credential`, `privateKey`): `Promise`\<[`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationDefinitionRequest` | `any` |
| `credential` | [`JWTCredential`](JWTCredential.md) |
| `privateKey` | [`PrivateKey`](Domain.PrivateKey.md) |

#### Returns

`Promise`\<[`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission)\>

#### Defined in

[src/pollux/Pollux.ts:332](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L332)

___

### createPresentationDefinitionRequest

▸ **createPresentationDefinitionRequest**\<`Type`\>(`type`, `presentationClaims`, `presentationOptions`): `Promise`\<[`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\<`Type`\>\>

Creates a PresentationDefinitionRequest object for oob Verifications

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Type` |
| `presentationClaims` | [`PresentationClaims`](../modules/Domain.md#presentationclaims)\<`Type`\> |
| `presentationOptions` | [`PresentationOptions`](Domain.PresentationOptions.md) |

#### Returns

`Promise`\<[`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\<`Type`\>\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationDefinitionRequest](../interfaces/Domain.Pollux-1.md#createpresentationdefinitionrequest)

#### Defined in

[src/pollux/Pollux.ts:467](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L467)

___

### createPresentationProof

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

Process a PresentationRequest with Credential to create a Presentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`any`, `unknown`\> |  |
| `credential` | [`Credential`](Domain.Credential.md) |  |
| `options` | [`options`](../modules/Domain.Pollux.createPresentationProof.md#options) | object containing necessary metadata |

#### Returns

`Promise`\<`string`\>

dependent on the CredentialType

**`Throws`**

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationProof](../interfaces/Domain.Pollux-1.md#createpresentationproof)

#### Defined in

[src/pollux/Pollux.ts:1051](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L1051)

___

### createPresentationSubmission

▸ **createPresentationSubmission**\<`Type`\>(`presentationDefinitionRequest`, `credential`, `privateKey?`): `Promise`\<[`PresentationSubmission`](../modules/Domain.md#presentationsubmission)\<`Type`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationDefinitionRequest` | [`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\<`Type`\> |
| `credential` | [`Credential`](Domain.Credential.md) |
| `privateKey?` | [`PrivateKey`](Domain.PrivateKey.md) \| [`LinkSecret`](Domain.LinkSecret.md) |

#### Returns

`Promise`\<[`PresentationSubmission`](../modules/Domain.md#presentationsubmission)\<`Type`\>\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationSubmission](../interfaces/Domain.Pollux-1.md#createpresentationsubmission)

#### Defined in

[src/pollux/Pollux.ts:416](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L416)

___

### encode

▸ **encode**(`data`): `Promise`\<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`\<`Buffer`\>

#### Defined in

[src/pollux/Pollux.ts:174](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L174)

___

### extractEncodedList

▸ **extractEncodedList**(`body`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`JWTStatusListResponse`](../interfaces/Domain.JWTStatusListResponse.md) |

#### Returns

`Uint8Array`

#### Defined in

[src/pollux/Pollux.ts:165](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L165)

___

### extractVerificationStatusFromCredential

▸ **extractVerificationStatusFromCredential**(`credentialStatus`): credentialStatus is JWTRevocationStatus

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialStatus` | `any` |

#### Returns

credentialStatus is JWTRevocationStatus

#### Defined in

[src/pollux/Pollux.ts:158](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L158)

___

### extractVerificationStatusFromResponse

▸ **extractVerificationStatusFromResponse**(`credentialStatus`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialStatus` | `any` |

#### Returns

`boolean`

#### Defined in

[src/pollux/Pollux.ts:151](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L151)

___

### fetchCredentialDefinition

▸ **fetchCredentialDefinition**(`credentialDefinitionId`): `Promise`\<`CredentialDefinitionType`\>

handle the retrieval of a Credential Definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialDefinitionId` | `string` |

#### Returns

`Promise`\<`CredentialDefinitionType`\>

#### Defined in

[src/pollux/Pollux.ts:965](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L965)

___

### fetchRevocationRegistry

▸ **fetchRevocationRegistry**(`revocationStatus`): `Promise`\<[`JWTStatusListResponse`](../interfaces/Domain.JWTStatusListResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `revocationStatus` | [`JWTRevocationStatus`](../interfaces/Domain.JWTRevocationStatus.md) |

#### Returns

`Promise`\<[`JWTStatusListResponse`](../interfaces/Domain.JWTStatusListResponse.md)\>

#### Defined in

[src/pollux/Pollux.ts:282](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L282)

___

### fetchSchema

▸ **fetchSchema**(`schemaURI`): `Promise`\<`CredentialSchemaType`\>

handle the retrieval of a Schema definition

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaURI` | `string` | URI used to retrieve the Schema definition |

#### Returns

`Promise`\<`CredentialSchemaType`\>

#### Defined in

[src/pollux/Pollux.ts:985](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L985)

___

### isCredentialRevoked

▸ **isCredentialRevoked**(`credential`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[isCredentialRevoked](../interfaces/Domain.Pollux-1.md#iscredentialrevoked)

#### Defined in

[src/pollux/Pollux.ts:299](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L299)

___

### isOfferPayload

▸ **isOfferPayload**\<`Type`\>(`offer`, `type`): offer is CredentialOfferJWTBasePayload

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | `any` |
| `type` | `Type` |

#### Returns

offer is CredentialOfferJWTBasePayload

#### Defined in

[src/pollux/Pollux.ts:836](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L836)

___

### isPresentationDefinitionRequestType

▸ **isPresentationDefinitionRequestType**\<`Type`\>(`request`, `type`): request is PresentationDefinitionRequest\<Type\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\<`Type`\> |
| `type` | `Type` |

#### Returns

request is PresentationDefinitionRequest\<Type\>

#### Defined in

[src/pollux/Pollux.ts:324](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L324)

___

### parseCredential

▸ **parseCredential**(`credentialBuffer`, `options?`): `Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md) \| `SDJWTCredential`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.credentialMetadata?` | `CredentialRequestMetadataType` |
| `options.linkSecret?` | `string` |
| `options.type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Returns

`Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md) \| `SDJWTCredential`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[parseCredential](../interfaces/Domain.Pollux-1.md#parsecredential)

#### Defined in

[src/pollux/Pollux.ts:997](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L997)

___

### parsePresentationSubmission

▸ **parsePresentationSubmission**\<`Type`\>(`data`, `type`): data is PresentationSubmission\<Type\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `type` | `Type` |

#### Returns

data is PresentationSubmission\<Type\>

#### Defined in

[src/pollux/Pollux.ts:461](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L461)

___

### processCredentialOffer

▸ **processCredentialOffer**\<`Types`\>(`offer`, `options`): `Promise`\<[`ProcessedCredentialOfferPayloads`](../modules/Domain.md#processedcredentialofferpayloads)[`Types`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`CredentialOfferTypes`](../modules/Domain.md#credentialoffertypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`CredentialOfferPayloads`](../modules/Domain.md#credentialofferpayloads)[`Types`] |
| `options` | [`CredentialRequestOptions`](../interfaces/Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<[`ProcessedCredentialOfferPayloads`](../modules/Domain.md#processedcredentialofferpayloads)[`Types`]\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[processCredentialOffer](../interfaces/Domain.Pollux-1.md#processcredentialoffer)

#### Defined in

[src/pollux/Pollux.ts:884](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L884)

___

### revealCredentialFields

▸ **revealCredentialFields**(`credential`, `fields`, `linkSecret?`): `Promise`\<`Claim`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |
| `fields` | `string`[] |
| `linkSecret?` | `string` |

#### Returns

`Promise`\<`Claim`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[revealCredentialFields](../interfaces/Domain.Pollux-1.md#revealcredentialfields)

#### Defined in

[src/pollux/Pollux.ts:91](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L91)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pollux/Pollux.ts:832](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L832)

___

### validPresentationSubmissionOptions

▸ **validPresentationSubmissionOptions**\<`Response`, `Type`\>(`options`, `type`): options is Response

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | extends [`options`](../modules/Domain.Pollux.verifyPresentationSubmission.md#options) |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |
| `type` | `Type` |

#### Returns

options is Response

#### Defined in

[src/pollux/Pollux.ts:613](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L613)

___

### verifyPresentationSubmission

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options`): `Promise`\<`boolean`\>

Process a PresentationSubmission, resolve the issuer did and verify the credential and the holder signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationSubmission` | `PresentationType` | - |
| `options` | [`Anoncreds`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.Anoncreds.md) | object containing necessary metadata |

#### Returns

`Promise`\<`boolean`\>

true if the submission is valid or false if it is not

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[verifyPresentationSubmission](../interfaces/Domain.Pollux-1.md#verifypresentationsubmission)

#### Defined in

[src/pollux/Pollux.ts:797](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L797)

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | [`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission) |
| `options` | [`JWT`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.JWT.md) |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[verifyPresentationSubmission](../interfaces/Domain.Pollux-1.md#verifypresentationsubmission)

#### Defined in

[src/pollux/Pollux.ts:798](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L798)

___

### verifyPresentationSubmissionAnoncreds

▸ **verifyPresentationSubmissionAnoncreds**(`presentationSubmission`, `options`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | `PresentationType` |
| `options` | [`Anoncreds`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.Anoncreds.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/pollux/Pollux.ts:766](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L766)

___

### verifyPresentationSubmissionJWT

▸ **verifyPresentationSubmissionJWT**(`presentationSubmission`, `options`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | [`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission) |
| `options` | [`JWT`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.JWT.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/pollux/Pollux.ts:623](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L623)

___

### verifyRevocationProof

▸ **verifyRevocationProof**(`revocation`, `statusListIndex`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `revocation` | [`JWTStatusListResponse`](../interfaces/Domain.JWTStatusListResponse.md) |
| `statusListIndex` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/pollux/Pollux.ts:211](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pollux/Pollux.ts#L211)
