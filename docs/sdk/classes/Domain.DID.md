[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / DID

# Class: DID

[Domain](../modules/Domain.md).DID

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](Domain.DID.md#constructor)

### Properties

- [method](Domain.DID.md#method)
- [methodId](Domain.DID.md#methodid)
- [schema](Domain.DID.md#schema)
- [uuid](Domain.DID.md#uuid)

### Methods

- [toString](Domain.DID.md#tostring)
- [from](Domain.DID.md#from)
- [fromString](Domain.DID.md#fromstring)
- [getMethodFromString](Domain.DID.md#getmethodfromstring)
- [getMethodIdFromString](Domain.DID.md#getmethodidfromstring)
- [getSchemaFromString](Domain.DID.md#getschemafromstring)

## Constructors

### constructor

• **new DID**(`schema`, `method`, `methodId`): [`DID`](Domain.DID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` |
| `method` | `string` |
| `methodId` | `string` |

#### Returns

[`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/DID.ts:10](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L10)

## Properties

### method

• `Readonly` **method**: `string`

#### Defined in

[src/domain/models/DID.ts:7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L7)

___

### methodId

• `Readonly` **methodId**: `string`

#### Defined in

[src/domain/models/DID.ts:8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L8)

___

### schema

• `Readonly` **schema**: `string`

#### Defined in

[src/domain/models/DID.ts:6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L6)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Defined in

[src/domain/models/DID.ts:5](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L5)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/DID.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L17)

___

### from

▸ **from**(`value`): [`DID`](Domain.DID.md)

parse value into a DID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | some representation of a DID |

#### Returns

[`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/DID.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L26)

___

### fromString

▸ **fromString**(`text`): [`DID`](Domain.DID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/DID.ts:47](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L47)

___

### getMethodFromString

▸ **getMethodFromString**(`text`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/domain/models/DID.ts:70](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L70)

___

### getMethodIdFromString

▸ **getMethodIdFromString**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[src/domain/models/DID.ts:75](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L75)

___

### getSchemaFromString

▸ **getSchemaFromString**(`text`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/domain/models/DID.ts:65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/DID.ts#L65)
