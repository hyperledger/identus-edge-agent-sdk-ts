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

[src/domain/models/VerifiableCredential.ts:407](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/VerifiableCredential.ts#L407)

## Properties

### data

• `Private` **data**: `any` = `{}`

#### Defined in

[src/domain/models/VerifiableCredential.ts:408](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/VerifiableCredential.ts#L408)

___

### type

• `Private` **type**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.JWT`

#### Defined in

[src/domain/models/VerifiableCredential.ts:409](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/VerifiableCredential.ts#L409)

## Accessors

### options

• `get` **options**(): [`AnoncredsPresentationOptions`](Domain.AnoncredsPresentationOptions.md) \| [`JWTPresentationOptions`](Domain.JWTPresentationOptions.md)

#### Returns

[`AnoncredsPresentationOptions`](Domain.AnoncredsPresentationOptions.md) \| [`JWTPresentationOptions`](Domain.JWTPresentationOptions.md)

#### Defined in

[src/domain/models/VerifiableCredential.ts:414](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/VerifiableCredential.ts#L414)
