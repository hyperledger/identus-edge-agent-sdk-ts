[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / Pollux

# Class: Pollux

Implementation of Pollux

**`Export`**

Pollux

## Hierarchy

- [`Controller`](Domain.Protocols.Startable.Controller.md)

  ↳ **`Pollux`**

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
- [state](Pollux.md#state)

### Accessors

- [anoncreds](Pollux.md#anoncreds)
- [jwe](Pollux.md#jwe)

### Methods

- [\_start](Pollux.md#_start)
- [\_stop](Pollux.md#_stop)
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
- [stop](Pollux.md#stop)
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

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[constructor](Domain.Protocols.Startable.Controller.md#constructor)

#### Defined in

[src/pollux/Pollux.ts:83](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L83)

## Properties

### JWT

• `Private` **JWT**: `JWT`

#### Defined in

[src/pollux/Pollux.ts:87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L87)

___

### SDJWT

• `Private` **SDJWT**: `SDJWT`

#### Defined in

[src/pollux/Pollux.ts:88](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L88)

___

### \_anoncreds

• `Private` **\_anoncreds**: `undefined` \| `AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:79](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L79)

___

### \_jwe

• `Private` **\_jwe**: `undefined` \| `__module`

#### Defined in

[src/pollux/Pollux.ts:80](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L80)

___

### \_pako

• `Private` **\_pako**: typeof `Pako` = `pako`

#### Defined in

[src/pollux/Pollux.ts:81](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L81)

___

### api

• `Private` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/pollux/Pollux.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L86)

___

### apollo

• `Private` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/pollux/Pollux.ts:84](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L84)

___

### castor

• `Private` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/pollux/Pollux.ts:85](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L85)

___

### state

• **state**: [`State`](../enums/Domain.Protocols.Startable.State.md) = `State.STOPPED`

current status of the entity

#### Inherited from

[Controller](Domain.Protocols.Startable.Controller.md).[state](Domain.Protocols.Startable.Controller.md#state)

#### Defined in

[src/domain/protocols/Startable.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/protocols/Startable.ts#L42)

## Accessors

### anoncreds

• `get` **anoncreds**(): `AnoncredsLoader`

#### Returns

`AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:93](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L93)

___

### jwe

• `get` **jwe**(): `__module`

#### Returns

`__module`

#### Defined in

[src/pollux/Pollux.ts:100](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L100)

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

[src/pollux/Pollux.ts:107](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L107)

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

[src/pollux/Pollux.ts:116](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L116)

___

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

[src/pollux/Pollux.ts:487](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L487)

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

[src/pollux/Pollux.ts:390](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L390)

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

[src/pollux/Pollux.ts:598](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L598)

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

[src/pollux/Pollux.ts:1260](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1260)

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

[src/pollux/Pollux.ts:507](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L507)

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

[src/pollux/Pollux.ts:211](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L211)

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

[src/pollux/Pollux.ts:201](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L201)

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

[src/pollux/Pollux.ts:194](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L194)

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

[src/pollux/Pollux.ts:187](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L187)

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

[src/pollux/Pollux.ts:1182](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1182)

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

[src/pollux/Pollux.ts:315](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L315)

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

[src/pollux/Pollux.ts:1199](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1199)

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

[src/pollux/Pollux.ts:363](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L363)

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

[src/pollux/Pollux.ts:1344](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1344)

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

[src/pollux/Pollux.ts:329](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L329)

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

[src/pollux/Pollux.ts:1047](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1047)

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

[src/pollux/Pollux.ts:355](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L355)

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

[src/pollux/Pollux.ts:1208](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1208)

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

[src/pollux/Pollux.ts:558](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L558)

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

[src/pollux/Pollux.ts:1095](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1095)

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

[src/pollux/Pollux.ts:118](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L118)

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

[src/pollux/Pollux.ts:747](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L747)

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

[src/pollux/Pollux.ts:775](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L775)

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

[src/pollux/Pollux.ts:565](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L565)

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

[src/pollux/Pollux.ts:1002](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1002)

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

[src/pollux/Pollux.ts:1003](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1003)

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

[src/pollux/Pollux.ts:1004](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L1004)

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

[src/pollux/Pollux.ts:971](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L971)

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

[src/pollux/Pollux.ts:836](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L836)

▸ **verifyPresentationSubmissionJWT**(`presentationSubmission`, `options`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | [`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission) |
| `options` | [`SDJWT`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.SDJWT.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/pollux/Pollux.ts:837](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L837)

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

[src/pollux/Pollux.ts:243](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pollux/Pollux.ts#L243)
