[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / ImportableKey

# Namespace: ImportableKey

[Domain](Domain.md).ImportableKey

## Table of contents

### Functions

- [factory](Domain.ImportableKey.md#factory)

## Functions

### factory

▸ **factory**\<`T`\>(`ctor`, `opts`): `Object`

factory to create Key property with desired functions
allows creation of a given Key through different data types

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Key`](../classes/Domain.Key.md)\<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctor` | (`bytes`: `any`) => `T` | the Key Class |
| `opts` | `Options` |  |

#### Returns

`Object`

object with importable functions

| Name | Type |
| :------ | :------ |
| `Buffer` | (`value`: `Buffer`) => `T` |
| `Hex` | (`value`: `string`) => `T` |
| `PEM` | (`value`: `string`) => `T` |
| `String` | (`value`: `string`, `encoding?`: ``"base64"`` \| ``"ascii"`` \| ``"utf8"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"ucs2"`` \| ``"ucs-2"`` \| ``"base64url"`` \| ``"latin1"`` \| ``"binary"`` \| ``"hex"``) => `T` |

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:76](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/exportable/ExportableKey.ts#L76)
