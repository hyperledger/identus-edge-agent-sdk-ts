[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Pollux

# Class: Pollux

Implementation of Pollux

**`Export`**

## Implements

- [`Pollux`](../interfaces/Domain.Pollux-1.md)

## Table of contents

### Constructors

- [constructor](Pollux.md#constructor)

### Properties

- [\_anoncreds](Pollux.md#_anoncreds)
- [api](Pollux.md#api)
- [castor](Pollux.md#castor)
- [jwt](Pollux.md#jwt)

### Accessors

- [anoncreds](Pollux.md#anoncreds)

### Methods

- [createPresentationDefinitionRequest](Pollux.md#createpresentationdefinitionrequest)
- [createPresentationProof](Pollux.md#createpresentationproof)
- [createPresentationSubmission](Pollux.md#createpresentationsubmission)
- [extractAttachment](Pollux.md#extractattachment)
- [extractCredentialFormatFromMessage](Pollux.md#extractcredentialformatfrommessage)
- [extractDomainChallenge](Pollux.md#extractdomainchallenge)
- [fetchCredentialDefinition](Pollux.md#fetchcredentialdefinition)
- [fetchSchema](Pollux.md#fetchschema)
- [isAnonCredsBody](Pollux.md#isanoncredsbody)
- [parseCredential](Pollux.md#parsecredential)
- [parsePresentationSubmission](Pollux.md#parsepresentationsubmission)
- [processAnonCredsCredential](Pollux.md#processanoncredscredential)
- [processJWTCredential](Pollux.md#processjwtcredential)
- [start](Pollux.md#start)
- [validJWTPresentationSubmissionOptions](Pollux.md#validjwtpresentationsubmissionoptions)
- [verifyPresentationSubmission](Pollux.md#verifypresentationsubmission)

## Constructors

### constructor

• **new Pollux**(`castor`, `api?`, `jwt?`): [`Pollux`](Pollux.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `api` | [`Api`](../interfaces/Domain.Api.md) |
| `jwt` | `JWT` |

#### Returns

[`Pollux`](Pollux.md)

#### Defined in

[src/pollux/Pollux.ts:54](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L54)

## Properties

### \_anoncreds

• `Private` **\_anoncreds**: `undefined` \| `AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:52](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L52)

___

### api

• `Private` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/pollux/Pollux.ts:56](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L56)

___

### castor

• `Private` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/pollux/Pollux.ts:55](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L55)

___

### jwt

• `Private` **jwt**: `JWT`

#### Defined in

[src/pollux/Pollux.ts:57](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L57)

## Accessors

### anoncreds

• `get` **anoncreds**(): `AnoncredsLoader`

#### Returns

`AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:396](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L396)

## Methods

### createPresentationDefinitionRequest

▸ **createPresentationDefinitionRequest**(`type`, `presentationClaims`, `options`): `Promise`\<[`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\>

Creates a PresentationDefinitionRequest object for oob Verifications

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CredentialType`](../enums/Domain.CredentialType.md) |
| `presentationClaims` | [`PresentationClaims`](../interfaces/Domain.PresentationClaims.md) |
| `options` | [`PresentationOptions`](Domain.PresentationOptions.md) |

#### Returns

`Promise`\<[`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationDefinitionRequest](../interfaces/Domain.Pollux-1.md#createpresentationdefinitionrequest)

#### Defined in

[src/pollux/Pollux.ts:154](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L154)

___

### createPresentationProof

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<[`Presentation`](../interfaces/Domain.Anoncreds.Presentation.md)\>

Process a PresentationRequest with Credential to create a Presentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> | - |
| `credential` | [`AnonCredsCredential`](AnonCredsCredential.md) |  |
| `options` | [`Anoncreds`](../interfaces/Domain.Pollux.createPresentationProof.options.Anoncreds.md) | object containing necessary metadata |

#### Returns

`Promise`\<[`Presentation`](../interfaces/Domain.Anoncreds.Presentation.md)\>

dependent on the CredentialType

**`Throws`**

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationProof](../interfaces/Domain.Pollux-1.md#createpresentationproof)

#### Defined in

[src/pollux/Pollux.ts:642](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L642)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |
| `credential` | [`JWTCredential`](JWTCredential.md) |
| `options` | [`JWT`](../interfaces/Domain.Pollux.createPresentationProof.options.JWT.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationProof](../interfaces/Domain.Pollux-1.md#createpresentationproof)

#### Defined in

[src/pollux/Pollux.ts:643](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L643)

___

### createPresentationSubmission

▸ **createPresentationSubmission**(`presentationDefinitionRequest`, `credential`, `privateKey`): `Promise`\<[`PresentationSubmission`](../modules/Domain.md#presentationsubmission)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationDefinitionRequest` | [`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest) |
| `credential` | [`Credential`](Domain.Credential.md) |
| `privateKey` | [`PrivateKey`](Domain.PrivateKey.md) |

#### Returns

`Promise`\<[`PresentationSubmission`](../modules/Domain.md#presentationsubmission)\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[createPresentationSubmission](../interfaces/Domain.Pollux-1.md#createpresentationsubmission)

#### Defined in

[src/pollux/Pollux.ts:60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L60)

___

### extractAttachment

▸ **extractAttachment**(`body`, `attachments`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `any` |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |

#### Returns

`any`

#### Defined in

[src/pollux/Pollux.ts:500](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L500)

___

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`JWT`](../enums/Domain.CredentialType.md#jwt) \| [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) \| [`Unknown`](../enums/Domain.CredentialType.md#unknown)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

[`JWT`](../enums/Domain.CredentialType.md#jwt) \| [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) \| [`Unknown`](../enums/Domain.CredentialType.md#unknown)

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[extractCredentialFormatFromMessage](../interfaces/Domain.Pollux-1.md#extractcredentialformatfrommessage)

#### Defined in

[src/pollux/Pollux.ts:405](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L405)

___

### extractDomainChallenge

▸ **extractDomainChallenge**(`attachments`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `challenge?` | `string` |
| `domain?` | `string` |

#### Defined in

[src/pollux/Pollux.ts:629](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L629)

___

### fetchCredentialDefinition

▸ **fetchCredentialDefinition**(`credentialDefinitionId`): `Promise`\<[`CredentialDefinition`](../interfaces/Domain.Anoncreds.CredentialDefinition.md)\>

handle the retrieval of a Credential Definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialDefinitionId` | `string` |

#### Returns

`Promise`\<[`CredentialDefinition`](../interfaces/Domain.Anoncreds.CredentialDefinition.md)\>

#### Defined in

[src/pollux/Pollux.ts:468](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L468)

___

### fetchSchema

▸ **fetchSchema**(`schemaURI`): `Promise`\<`any`\>

handle the retrieval of a Schema definition

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemaURI` | `string` | URI used to retrieve the Schema definition |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/pollux/Pollux.ts:488](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L488)

___

### isAnonCredsBody

▸ **isAnonCredsBody**(`body`): body is CredentialOffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `any` |

#### Returns

body is CredentialOffer

#### Defined in

[src/pollux/Pollux.ts:513](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L513)

___

### parseCredential

▸ **parseCredential**(`credentialBuffer`, `options?`): `Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.credentialMetadata?` | [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md) |
| `options.linkSecret?` | `string` |
| `options.type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Returns

`Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md)\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[parseCredential](../interfaces/Domain.Pollux-1.md#parsecredential)

#### Defined in

[src/pollux/Pollux.ts:581](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L581)

___

### parsePresentationSubmission

▸ **parsePresentationSubmission**(`data`): data is PresentationSubmission

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

data is PresentationSubmission

#### Defined in

[src/pollux/Pollux.ts:129](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L129)

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<[[`CredentialRequest`](../interfaces/Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](Domain.Message-1.md) |
| `options` | [`CredentialRequestOptions`](../interfaces/Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<[[`CredentialRequest`](../interfaces/Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md)]\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[processAnonCredsCredential](../interfaces/Domain.Pollux-1.md#processanoncredscredential)

#### Defined in

[src/pollux/Pollux.ts:551](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L551)

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](Domain.Message-1.md) |
| `options` | [`CredentialRequestOptions`](../interfaces/Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[processJWTCredential](../interfaces/Domain.Pollux-1.md#processjwtcredential)

#### Defined in

[src/pollux/Pollux.ts:427](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L427)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pollux/Pollux.ts:391](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L391)

___

### validJWTPresentationSubmissionOptions

▸ **validJWTPresentationSubmissionOptions**(`options`): options is JWT

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

options is JWT

#### Defined in

[src/pollux/Pollux.ts:235](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L235)

___

### verifyPresentationSubmission

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options?`): `Promise`\<`boolean`\>

Process a PresentationSubmission, resolve the issuer did and verify the credential and the holder signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationSubmission` | `any` | - |
| `options?` | [`JWT`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.JWT.md) \| [`Anoncreds`](../interfaces/Domain.Pollux.verifyPresentationSubmission.options.Anoncreds.md) | object containing necessary metadata |

#### Returns

`Promise`\<`boolean`\>

true if the submission is valid or false if it is not

#### Implementation of

[Pollux](../interfaces/Domain.Pollux-1.md).[verifyPresentationSubmission](../interfaces/Domain.Pollux-1.md#verifypresentationsubmission)

#### Defined in

[src/pollux/Pollux.ts:239](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/Pollux.ts#L239)
