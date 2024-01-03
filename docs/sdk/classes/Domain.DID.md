[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / DID

# Class: DID

[Domain](../modules/Domain.md).DID

## Table of contents

### Constructors

- [constructor](Domain.DID.md#constructor)

### Properties

- [method](Domain.DID.md#method)
- [methodId](Domain.DID.md#methodid)
- [schema](Domain.DID.md#schema)

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

[src/domain/models/DID.ts:8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L8)

## Properties

### method

• `Readonly` **method**: `string`

#### Defined in

[src/domain/models/DID.ts:5](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L5)

___

### methodId

• `Readonly` **methodId**: `string`

#### Defined in

[src/domain/models/DID.ts:6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L6)

___

### schema

• `Readonly` **schema**: `string`

#### Defined in

[src/domain/models/DID.ts:4](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L4)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/DID.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L14)

___

### from

▸ **from**(`value`): [`DID`](Domain.DID.md)

parse value into a DID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| [`DID`](Domain.DID.md) | some representation of a DID |

#### Returns

[`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/DID.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L23)

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

[src/domain/models/DID.ts:35](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L35)

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

[src/domain/models/DID.ts:58](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L58)

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

[src/domain/models/DID.ts:63](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L63)

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

[src/domain/models/DID.ts:53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/DID.ts#L53)
