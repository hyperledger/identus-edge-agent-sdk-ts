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
- [\_jwe](Pollux.md#_jwe)
- [\_pako](Pollux.md#_pako)
- [api](Pollux.md#api)
- [apollo](Pollux.md#apollo)
- [castor](Pollux.md#castor)

### Accessors

- [anoncreds](Pollux.md#anoncreds)
- [jwe](Pollux.md#jwe)

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
- [getDescriptorItems](Pollux.md#getdescriptoritems)
- [getSigningKid](Pollux.md#getsigningkid)
- [isCredentialRevoked](Pollux.md#iscredentialrevoked)
- [isOfferPayload](Pollux.md#isofferpayload)
- [isPresentationDefinitionRequestType](Pollux.md#ispresentationdefinitionrequesttype)
- [parseCredential](Pollux.md#parsecredential)
- [parsePresentationSubmission](Pollux.md#parsepresentationsubmission)
- [processCredentialOffer](Pollux.md#processcredentialoffer)
- [revealCredentialFields](Pollux.md#revealcredentialfields)
- [start](Pollux.md#start)
- [validPresentationSubmissionOptions](Pollux.md#validpresentationsubmissionoptions)
- [validateInputDescriptor](Pollux.md#validateinputdescriptor)
- [validatePresentationDefinitionOptions](Pollux.md#validatepresentationdefinitionoptions)
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

[src/pollux/Pollux.ts:82](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L82)

## Properties

### JWT

• `Private` **JWT**: `JWT`

#### Defined in

[src/pollux/Pollux.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L86)

___

### SDJWT

• `Private` **SDJWT**: `SDJWT`

#### Defined in

[src/pollux/Pollux.ts:87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L87)

___

### \_anoncreds

• `Private` **\_anoncreds**: `undefined` \| `AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:78](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L78)

___

### \_jwe

• `Private` **\_jwe**: `undefined` \| `__module`

#### Defined in

[src/pollux/Pollux.ts:79](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L79)

___

### \_pako

• `Private` **\_pako**: typeof `Pako` = `pako`

#### Defined in

[src/pollux/Pollux.ts:80](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L80)

___

### api

• `Private` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/pollux/Pollux.ts:85](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L85)

___

### apollo

• `Private` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/pollux/Pollux.ts:83](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L83)

___

### castor

• `Private` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/pollux/Pollux.ts:84](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L84)

## Accessors

### anoncreds

• `get` **anoncreds**(): `AnoncredsLoader`

#### Returns

`AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:91](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L91)

___

### jwe

• `get` **jwe**(): `__module`

#### Returns

`__module`

#### Defined in

[src/pollux/Pollux.ts:98](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L98)

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

[src/pollux/Pollux.ts:476](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L476)

___

### createJWTPresentationSubmission

▸ **createJWTPresentationSubmission**(`presentationDefinitionRequest`, `credential`, `privateKey`, `options?`): `Promise`\<[`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationDefinitionRequest` | `any` |
| `credential` | [`Credential`](Domain.Credential.md) |
| `privateKey` | [`PrivateKey`](Domain.PrivateKey.md) |
| `options?` | `Object` |
| `options.challenge?` | `string` |
| `options.domain?` | `string` |
| `options.presentationFrame?` | `boolean` \| `Record`\<`number`, `boolean`\> \| {} |

#### Returns

`Promise`\<[`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission)\>

#### Defined in

[src/pollux/Pollux.ts:379](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L379)

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

[src/pollux/Pollux.ts:587](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L587)

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

[src/pollux/Pollux.ts:1259](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L1259)

___

### createPresentationSubmission

▸ **createPresentationSubmission**\<`Type`\>(`presentationDefinitionRequest`, `credential`, `privateKey?`, `options?`): `Promise`\<[`PresentationSubmission`](../modules/Domain.md#presentationsubmission)\<`Type`\>\>

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
| `options?` | `Object` |
| `options.challenge?` | `string` |
| `options.domain?` | `string` |
| `options.presentationFrame?` | `boolean` \| `Record`\<`number`, `boolean`\> \| {} |

#### Returns

`Promise`\<[`PresentationSubmission`](../modules/Domain.md#presentationsubmission)\<`Type`\>\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationSubmission](../interfaces/Domain.Pollux-1.md#createpresentationsubmission)

#### Defined in

[src/pollux/Pollux.ts:496](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L496)

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

[src/pollux/Pollux.ts:200](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L200)

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

[src/pollux/Pollux.ts:190](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L190)

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

[src/pollux/Pollux.ts:183](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L183)

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

[src/pollux/Pollux.ts:176](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L176)

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

[src/pollux/Pollux.ts:1181](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L1181)

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

[src/pollux/Pollux.ts:304](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L304)

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

[src/pollux/Pollux.ts:1198](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L1198)

___

### getDescriptorItems

▸ **getDescriptorItems**(`inputDescriptors`, `credential`): [`DescriptorItem`](../modules/Domain.md#descriptoritem)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputDescriptors` | [`InputDescriptor`](../modules/Domain.md#inputdescriptor)[] |
| `credential` | [`Credential`](Domain.Credential.md) |

#### Returns

[`DescriptorItem`](../modules/Domain.md#descriptoritem)[]

#### Defined in

[src/pollux/Pollux.ts:352](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L352)

___

### getSigningKid

▸ **getSigningKid**(`did`, `privateKey`): `Promise`\<`undefined` \| `string`\>

try to match the privateKey with a dids verificationMethod
returning the relevant key id

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `privateKey` | [`PrivateKey`](Domain.PrivateKey.md) |

#### Returns

`Promise`\<`undefined` \| `string`\>

kid (key identifier)
// ??? replaced by CreateJWT task

#### Defined in

[src/pollux/Pollux.ts:1343](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L1343)

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

[src/pollux/Pollux.ts:318](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L318)

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

[src/pollux/Pollux.ts:1046](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L1046)

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

[src/pollux/Pollux.ts:344](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L344)

___

### parseCredential

▸ **parseCredential**(`credentialBuffer`, `options?`): `Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md) \| [`SDJWTCredential`](SDJWTCredential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.credentialMetadata?` | `CredentialRequestMetadataType` |
| `options.linkSecret?` | `string` |
| `options.type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Returns

`Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md) \| [`SDJWTCredential`](SDJWTCredential.md)\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[parseCredential](../interfaces/Domain.Pollux-1.md#parsecredential)

#### Defined in

[src/pollux/Pollux.ts:1207](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L1207)

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

[src/pollux/Pollux.ts:547](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L547)

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

[src/pollux/Pollux.ts:1094](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L1094)

___

### revealCredentialFields

▸ **revealCredentialFields**(`credential`, `fields`, `linkSecret?`): `Promise`\<`Record`\<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |
| `fields` | `string`[] |
| `linkSecret?` | `string` |

#### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[revealCredentialFields](../interfaces/Domain.Pollux-1.md#revealcredentialfields)

#### Defined in

[src/pollux/Pollux.ts:106](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L106)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pollux/Pollux.ts:1037](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L1037)

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

[src/pollux/Pollux.ts:736](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L736)

___

### validateInputDescriptor

▸ **validateInputDescriptor**(`vc`, `descriptorMapper`, `inputDescriptor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | `any` |
| `descriptorMapper` | `DescriptorPath` |
| `inputDescriptor` | `undefined` \| [`InputDescriptor`](../modules/Domain.md#inputdescriptor) |

#### Returns

`void`

#### Defined in

[src/pollux/Pollux.ts:764](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L764)

___

### validatePresentationDefinitionOptions

▸ **validatePresentationDefinitionOptions**(`type`, `options`): [`PresentationJWTOptions`](../modules/Domain.md#presentationjwtoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CredentialType`](../enums/Domain.CredentialType.md) |
| `options` | [`AnoncredsPresentationOptions`](Domain.AnoncredsPresentationOptions.md) \| [`JWTPresentationOptions`](Domain.JWTPresentationOptions.md) \| [`SDJWPresentationOptions`](Domain.SDJWPresentationOptions.md) |

#### Returns

[`PresentationJWTOptions`](../modules/Domain.md#presentationjwtoptions)

#### Defined in

[src/pollux/Pollux.ts:554](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L554)

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

[src/pollux/Pollux.ts:991](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L991)

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

[src/pollux/Pollux.ts:992](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L992)

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | [`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission) |
| `options` | [`SDJWT`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.SDJWT.md) |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[verifyPresentationSubmission](../interfaces/Domain.Pollux-1.md#verifypresentationsubmission)

#### Defined in

[src/pollux/Pollux.ts:993](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L993)

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

[src/pollux/Pollux.ts:960](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L960)

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

[src/pollux/Pollux.ts:825](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L825)

▸ **verifyPresentationSubmissionJWT**(`presentationSubmission`, `options`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | [`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission) |
| `options` | [`SDJWT`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.SDJWT.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/pollux/Pollux.ts:826](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L826)

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

[src/pollux/Pollux.ts:232](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pollux/Pollux.ts#L232)
