[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Pollux

# Interface: Pollux

[Domain](../modules/Domain.md).Pollux

Pollux
handle Credential related tasks

## Implemented by

- [`Pollux`](../classes/Pollux.md)

## Table of contents

### Properties

- [isCredentialRevoked](Domain.Pollux-1.md#iscredentialrevoked)
- [parseCredential](Domain.Pollux-1.md#parsecredential)
- [revealCredentialFields](Domain.Pollux-1.md#revealcredentialfields)

### Methods

- [createPresentationDefinitionRequest](Domain.Pollux-1.md#createpresentationdefinitionrequest)
- [createPresentationProof](Domain.Pollux-1.md#createpresentationproof)
- [createPresentationSubmission](Domain.Pollux-1.md#createpresentationsubmission)
- [processCredentialOffer](Domain.Pollux-1.md#processcredentialoffer)
- [verifyPresentationSubmission](Domain.Pollux-1.md#verifypresentationsubmission)

## Properties

### isCredentialRevoked

• **isCredentialRevoked**: (`credential`: [`Credential`](../classes/Domain.Credential.md)) => `Promise`\<`boolean`\>

#### Type declaration

▸ (`credential`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L56)

___

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

[src/domain/buildingBlocks/Pollux.ts:58](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L58)

___

### revealCredentialFields

• **revealCredentialFields**: (`credential`: [`Credential`](../classes/Domain.Credential.md), `fields`: `string`[], `linkSecret?`: `string`) => `Promise`\<\{ `[name: string]`: `any`;  }\>

#### Type declaration

▸ (`credential`, `fields`, `linkSecret?`): `Promise`\<\{ `[name: string]`: `any`;  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |
| `fields` | `string`[] |
| `linkSecret?` | `string` |

##### Returns

`Promise`\<\{ `[name: string]`: `any`;  }\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L52)

## Methods

### createPresentationDefinitionRequest

▸ **createPresentationDefinitionRequest**\<`T`\>(`type`, `claims`, `options`): `Promise`\<[`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\<`T`\>\>

Creates a PresentationDefinitionRequest object for oob Verifications

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `claims` | [`PresentationClaims`](../modules/Domain.md#presentationclaims)\<`T`\> |
| `options` | [`PresentationOptions`](../classes/Domain.PresentationOptions.md) |

#### Returns

`Promise`\<[`PresentationDefinitionRequest`](../modules/Domain.md#presentationdefinitionrequest)\<`T`\>\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:107](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L107)

___

### createPresentationProof

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

Process a PresentationRequest with Credential to create a Presentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<[`AnonCreds`](../enums/Domain.AttachmentFormats.md#anoncreds), `PresentationRequestType`\> |  |
| `credential` | [`AnonCredsCredential`](../classes/AnonCredsCredential.md) |  |
| `options` | [`Anoncreds`](Domain.Pollux.createPresentationProof.options.Anoncreds.md) | object containing necessary metadata |

#### Returns

`Promise`\<`string`\>

dependent on the CredentialType

**`Throws`**

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:124](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L124)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<[`JWT`](../enums/Domain.AttachmentFormats.md#jwt), `JWTJson`\> |
| `credential` | [`JWTCredential`](../classes/JWTCredential.md) |
| `options` | [`JWT`](Domain.Pollux.createPresentationProof.options.JWT.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:125](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L125)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<[`SDJWT`](../enums/Domain.AttachmentFormats.md#sdjwt), `SDJWTJson`\> |
| `credential` | [`SDJWTCredential`](../classes/SDJWTCredential.md) |
| `options` | [`SDJWT`](Domain.Pollux.createPresentationProof.options.SDJWT.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:126](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L126)

▸ **createPresentationProof**(`presentationRequest`, `credential`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationRequest` | `PresentationRequest`\<`any`, `unknown`\> |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |
| `options?` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:127](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L127)

___

### createPresentationSubmission

▸ **createPresentationSubmission**(`presentationDefinition`, `credential`, `privateKey`): `Promise`\<[`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationDefinition` | [`PresentationExchangeDefinitionRequest`](../modules/Domain.md#presentationexchangedefinitionrequest) |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |
| `privateKey` | [`PrivateKey`](../classes/Domain.PrivateKey.md) |

#### Returns

`Promise`\<[`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission)\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:70](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L70)

▸ **createPresentationSubmission**(`presentationDefinition`, `credential`, `privateKey`): `Promise`\<`PresentationType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationDefinition` | `PresentationRequestType` |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |
| `privateKey` | [`LinkSecret`](../classes/Domain.LinkSecret.md) |

#### Returns

`Promise`\<`PresentationType`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L75)

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
| `options` | [`CredentialRequestOptions`](Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<[`ProcessedCredentialOfferPayloads`](../modules/Domain.md#processedcredentialofferpayloads)[`Types`]\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:63](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L63)

___

### verifyPresentationSubmission

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options?`): `Promise`\<`boolean`\>

Process a PresentationSubmission, resolve the issuer did and verify the credential and the holder signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presentationSubmission` | [`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission) | - |
| `options?` | [`JWT`](Domain.Pollux.verifyPresentationSubmission.options.JWT.md) | object containing necessary metadata |

#### Returns

`Promise`\<`boolean`\>

true if the submission is valid or false if it is not

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:88](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L88)

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | `PresentationType` |
| `options?` | [`Anoncreds`](Domain.Pollux.verifyPresentationSubmission.options.Anoncreds.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:92](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L92)

▸ **verifyPresentationSubmission**(`presentationSubmission`, `options?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentationSubmission` | [`JWTPresentationSubmission`](../modules/Domain.md#jwtpresentationsubmission) |
| `options?` | [`JWT`](Domain.Pollux.verifyPresentationSubmission.options.JWT.md) \| [`Anoncreds`](Domain.Pollux.verifyPresentationSubmission.options.Anoncreds.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:96](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/buildingBlocks/Pollux.ts#L96)
