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
| `String` | (`value`: `string`, `encoding?`: `BufferEncoding`) => `T` |

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:76](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/ExportableKey.ts#L76)
