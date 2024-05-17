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

[src/domain/models/keyManagement/exportable/ExportableKey.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/ExportableKey.ts#L24)

## Functions

### factory

▸ **factory**(`key`, `opts`): `Object`

factory to create Key property with desired functions
which allow converting the Key raw into different formats

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PublicKey`](../classes/Domain.PublicKey.md) \| [`PrivateKey`](../classes/Domain.PrivateKey.md) |
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
| `String` | (`encoding?`: ``"base64"`` \| ``"ascii"`` \| ``"utf8"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"ucs2"`` \| ``"ucs-2"`` \| ``"base64url"`` \| ``"latin1"`` \| ``"binary"`` \| ``"hex"``) => `string` |

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/ExportableKey.ts#L53)
