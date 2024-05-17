[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Pollux

# Interface: Pollux

[Domain](../modules/Domain.md).Pollux

Pollux
handle Credential related tasks

## Implemented by

- [`Pollux`](../classes/Pollux.md)

## Table of contents

### Properties

- [parseCredential](Domain.Pollux-1.md#parsecredential)

### Methods

- [createPresentationDefinitionRequest](Domain.Pollux-1.md#createpresentationdefinitionrequest)
- [createPresentationProof](Domain.Pollux-1.md#createpresentationproof)
- [createPresentationSubmission](Domain.Pollux-1.md#createpresentationsubmission)
- [extractCredentialFormatFromMessage](Domain.Pollux-1.md#extractcredentialformatfrommessage)
- [processAnonCredsCredential](Domain.Pollux-1.md#processanoncredscredential)
- [processJWTCredential](Domain.Pollux-1.md#processjwtcredential)
- [verifyPresentationSubmission](Domain.Pollux-1.md#verifypresentationsubmission)

## Properties

### parseCredential

• **parseCredential**: (`credentialBuffer`: `Uint8Array`, `options?`: \{ `[name: string]`: `any`; `type`: [`CredentialType`](../enums/Domain.CredentialType.md)  }) => `Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

#### Type declaration

▸ (`credentialBuffer`, `options?`): `Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

##### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:21](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L21)

## Methods

### createPresentationDefinitionRequest

▸ **createPresentationDefinitionRequest**(`type`, `claims`, `options`): `Promise`\<[`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\>

Creates a PresentationDefinitionRequest object for oob Verifications

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CredentialType`](../enums/Domain.CredentialType.md) |
| `claims` | [`PresentationClaims`](Domain.PresentationClaims.md) |
| `options` | [`PresentationOptions`](../classes/Domain.PresentationOptions.md) |

#### Returns

`Promise`\<[`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:41](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L41)

___

### createPresentationProof

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<[`Presentation`](Domain.Anoncreds.Presentation.md)\>

Process a PresentationRequest with Credential to create a Presentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |  |
| `credential` | [`AnonCredsCredential`](../classes/AnonCredsCredential.md) |  |
| `options` | [`Anoncreds`](Domain.Pollux.createPresentationProof.options.Anoncreds.md) | object containing necessary metadata |

#### Returns

`Promise`\<[`Presentation`](Domain.Anoncreds.Presentation.md)\>

dependent on the CredentialType

**`Throws`**

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:82](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L82)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |
| `credential` | [`JWTCredential`](../classes/JWTCredential.md) |
| `options` | [`JWT`](Domain.Pollux.createPresentationProof.options.JWT.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:83](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L83)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`unknown`\> |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |
| `options?` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:84](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L84)

___

### createPresentationSubmission

▸ **createPresentationSubmission**(`presentationDefinition`, `credential`, `privateKey`): `Promise`\<[`PresentationSubmission`](../modules/Domain.md#presentationsubmission)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationDefinition` | [`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest) |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |
| `privateKey` | [`PrivateKey`](../classes/Domain.PrivateKey.md) |

#### Returns

`Promise`\<[`PresentationSubmission`](../modules/Domain.md#presentationsubmission)\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:47](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L47)

___

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`CredentialType`](../enums/Domain.CredentialType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message-1.md) |

#### Returns

[`CredentialType`](../enums/Domain.CredentialType.md)

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L33)

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/Domain.Message-1.md) |
| `options` | [`CredentialRequestOptions`](Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md)\>\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:29](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L29)

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/Domain.Message-1.md) |
| `options` | [`CredentialRequestOptions`](Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L25)

___

### verifyPresentationSubmission

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options?`): `Promise`\<`boolean`\>

Process a PresentationSubmission, resolve the issuer did and verify the credential and the holder signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationSubmission` | [`PresentationSubmission`](../modules/Domain.md#presentationsubmission) | - |
| `options?` | [`JWT`](Domain.Pollux.verifyPresentationSubmission.options.JWT.md) | object containing necessary metadata |

#### Returns

`Promise`\<`boolean`\>

true if the submission is valid or false if it is not

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L61)

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | [`PresentationSubmission`](../modules/Domain.md#presentationsubmission) |
| `options?` | [`Anoncreds`](Domain.Pollux.verifyPresentationSubmission.options.Anoncreds.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L65)

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | [`PresentationSubmission`](../modules/Domain.md#presentationsubmission) |
| `options?` | [`JWT`](Domain.Pollux.verifyPresentationSubmission.options.JWT.md) \| [`Anoncreds`](Domain.Pollux.verifyPresentationSubmission.options.Anoncreds.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:69](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/buildingBlocks/Pollux.ts#L69)
