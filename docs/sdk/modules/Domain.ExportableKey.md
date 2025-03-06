[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / ExportableKey

# Namespace: ExportableKey

[Domain](Domain.md).ExportableKey

Declaration merge to contain key conversion functions

## Table of contents

### Interfaces

- [Common](../interfaces/Domain.ExportableKey.Common.md)
- [JWK](../interfaces/Domain.ExportableKey.JWK.md)
- [PEM](../interfaces/Domain.ExportableKey.PEM.md)

### Type Aliases

- [All](Domain.ExportableKey.md#all)

### Functions

- [factory](Domain.ExportableKey.md#factory)

## Type Aliases

### All

Ƭ **All**: [`Common`](../interfaces/Domain.ExportableKey.Common.md) & [`JWK`](../interfaces/Domain.ExportableKey.JWK.md) & [`PEM`](../interfaces/Domain.ExportableKey.PEM.md)

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/exportable/ExportableKey.ts#L25)

## Functions

### factory

▸ **factory**(`key`, `opts`): `Object`

factory to create Key property with desired functions
which allow converting the Key raw into different formats

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PrivateKey`](../classes/Domain.PrivateKey.md) \| [`PublicKey`](../classes/Domain.PublicKey.md) |
| `opts` | `Options` |

#### Returns

`Object`

object with exportable functions

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `Hex` | () => `string` |
| `JWK` | (`base?`: [`Base`](../interfaces/Domain.JWK.Base.md)) => [`JWK`](Domain.md#jwk) |
| `PEM` | () => `string` |
| `String` | (`encoding?`: `BufferEncoding`) => `string` |

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/exportable/ExportableKey.ts#L54)
