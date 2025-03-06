[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / VerificationMethod

# Class: VerificationMethod

[Domain](../modules/Domain.md).VerificationMethod

## Table of contents

### Constructors

- [constructor](Domain.VerificationMethod.md#constructor)

### Properties

- [controller](Domain.VerificationMethod.md#controller)
- [id](Domain.VerificationMethod.md#id)
- [publicKeyJwk](Domain.VerificationMethod.md#publickeyjwk)
- [publicKeyMultibase](Domain.VerificationMethod.md#publickeymultibase)
- [type](Domain.VerificationMethod.md#type)

### Methods

- [getCurveByType](Domain.VerificationMethod.md#getcurvebytype)

## Constructors

### constructor

• **new VerificationMethod**(`id`, `controller`, `type`, `publicKeyJwk?`, `publicKeyMultibase?`): [`VerificationMethod`](Domain.VerificationMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |
| `type` | `string` |
| `publicKeyJwk?` | [`PublicKeyJWK`](../interfaces/Domain.PublicKeyJWK.md) |
| `publicKeyMultibase?` | `string` |

#### Returns

[`VerificationMethod`](Domain.VerificationMethod.md)

#### Defined in

[src/domain/models/DIDDocument.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/DIDDocument.ts#L14)

## Properties

### controller

• **controller**: `string`

#### Defined in

[src/domain/models/DIDDocument.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/DIDDocument.ts#L16)

___

### id

• **id**: `string`

#### Defined in

[src/domain/models/DIDDocument.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/DIDDocument.ts#L15)

___

### publicKeyJwk

• `Optional` **publicKeyJwk**: [`PublicKeyJWK`](../interfaces/Domain.PublicKeyJWK.md)

#### Defined in

[src/domain/models/DIDDocument.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/DIDDocument.ts#L18)

___

### publicKeyMultibase

• `Optional` **publicKeyMultibase**: `string`

#### Defined in

[src/domain/models/DIDDocument.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/DIDDocument.ts#L19)

___

### type

• **type**: `string`

#### Defined in

[src/domain/models/DIDDocument.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/DIDDocument.ts#L17)

## Methods

### getCurveByType

▸ **getCurveByType**(`type`): [`Curve`](../enums/Domain.Curve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`Curve`](../enums/Domain.Curve.md)

#### Defined in

[src/domain/models/DIDDocument.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/DIDDocument.ts#L22)
