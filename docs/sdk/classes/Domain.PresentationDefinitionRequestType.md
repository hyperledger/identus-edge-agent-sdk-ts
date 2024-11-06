[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / PresentationDefinitionRequestType

# Class: PresentationDefinitionRequestType\<Type\>

[Domain](../modules/Domain.md).PresentationDefinitionRequestType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) |

## Table of contents

### Constructors

- [constructor](Domain.PresentationDefinitionRequestType.md#constructor)

### Properties

- [data](Domain.PresentationDefinitionRequestType.md#data)

### Methods

- [fromData](Domain.PresentationDefinitionRequestType.md#fromdata)

## Constructors

### constructor

• **new PresentationDefinitionRequestType**\<`Type`\>(`data`): [`PresentationDefinitionRequestType`](Domain.PresentationDefinitionRequestType.md)\<`Type`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`PresentationDefinitionData`](../modules/Domain.md#presentationdefinitiondata)[`Type`] |

#### Returns

[`PresentationDefinitionRequestType`](Domain.PresentationDefinitionRequestType.md)\<`Type`\>

#### Defined in

[src/domain/models/VerifiableCredential.ts:183](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/VerifiableCredential.ts#L183)

## Properties

### data

• **data**: [`PresentationDefinitionData`](../modules/Domain.md#presentationdefinitiondata)[`Type`]

#### Defined in

[src/domain/models/VerifiableCredential.ts:183](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/VerifiableCredential.ts#L183)

## Methods

### fromData

▸ **fromData**\<`Type`\>(`data`): [`PresentationDefinitionRequestType`](Domain.PresentationDefinitionRequestType.md)\<`Type`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`PresentationDefinitionData`](../modules/Domain.md#presentationdefinitiondata) |

#### Returns

[`PresentationDefinitionRequestType`](Domain.PresentationDefinitionRequestType.md)\<`Type`\>

#### Defined in

[src/domain/models/VerifiableCredential.ts:185](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/VerifiableCredential.ts#L185)
