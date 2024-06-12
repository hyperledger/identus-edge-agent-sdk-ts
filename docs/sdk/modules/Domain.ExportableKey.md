[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / ExportableKey

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

[src/domain/models/keyManagement/exportable/ExportableKey.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/ExportableKey.ts#L24)

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

[src/domain/models/keyManagement/exportable/ExportableKey.ts:53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/ExportableKey.ts#L53)
