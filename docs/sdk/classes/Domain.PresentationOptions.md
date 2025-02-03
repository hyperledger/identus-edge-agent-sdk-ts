[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / PresentationOptions

# Class: PresentationOptions

[Domain](../modules/Domain.md).PresentationOptions

## Table of contents

### Constructors

- [constructor](Domain.PresentationOptions.md#constructor)

### Properties

- [data](Domain.PresentationOptions.md#data)
- [type](Domain.PresentationOptions.md#type)

### Accessors

- [options](Domain.PresentationOptions.md#options)

## Constructors

### constructor

• **new PresentationOptions**(`data?`, `type?`): [`PresentationOptions`](Domain.PresentationOptions.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `{}` |
| `type` | [`CredentialType`](../enums/Domain.CredentialType.md) | `CredentialType.JWT` |

#### Returns

[`PresentationOptions`](Domain.PresentationOptions.md)

#### Defined in

[src/domain/models/VerifiableCredential.ts:423](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L423)

## Properties

### data

• `Private` **data**: `any` = `{}`

#### Defined in

[src/domain/models/VerifiableCredential.ts:424](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L424)

___

### type

• `Private` **type**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.JWT`

#### Defined in

[src/domain/models/VerifiableCredential.ts:425](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L425)

## Accessors

### options

• `get` **options**(): [`AnoncredsPresentationOptions`](Domain.AnoncredsPresentationOptions.md) \| [`JWTPresentationOptions`](Domain.JWTPresentationOptions.md) \| [`SDJWPresentationOptions`](Domain.SDJWPresentationOptions.md)

#### Returns

[`AnoncredsPresentationOptions`](Domain.AnoncredsPresentationOptions.md) \| [`JWTPresentationOptions`](Domain.JWTPresentationOptions.md) \| [`SDJWPresentationOptions`](Domain.SDJWPresentationOptions.md)

#### Defined in

[src/domain/models/VerifiableCredential.ts:430](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L430)
