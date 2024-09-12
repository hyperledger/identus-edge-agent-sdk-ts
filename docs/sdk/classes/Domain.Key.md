[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Key

# Class: Key

[Domain](../modules/Domain.md).Key

## Hierarchy

- **`Key`**

  ↳ [`PrivateKey`](Domain.PrivateKey.md)

  ↳ [`PublicKey`](Domain.PublicKey.md)

## Table of contents

### Constructors

- [constructor](Domain.Key.md#constructor)

### Properties

- [keySpecification](Domain.Key.md#keyspecification)
- [raw](Domain.Key.md#raw)
- [size](Domain.Key.md#size)
- [to](Domain.Key.md#to)
- [type](Domain.Key.md#type)

### Accessors

- [alg](Domain.Key.md#alg)
- [curve](Domain.Key.md#curve)

### Methods

- [canVerify](Domain.Key.md#canverify)
- [getEncoded](Domain.Key.md#getencoded)
- [getProperty](Domain.Key.md#getproperty)
- [isCurve](Domain.Key.md#iscurve)
- [isDerivable](Domain.Key.md#isderivable)
- [isExportable](Domain.Key.md#isexportable)
- [isSignable](Domain.Key.md#issignable)
- [isStorable](Domain.Key.md#isstorable)

## Constructors

### constructor

• **new Key**(): [`Key`](Domain.Key.md)

#### Returns

[`Key`](Domain.Key.md)

## Properties

### keySpecification

• `Abstract` **keySpecification**: `Map`\<`string`, `string`\>

#### Defined in

[src/domain/models/keyManagement/Key.ts:153](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L153)

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Defined in

[src/domain/models/keyManagement/Key.ts:155](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L155)

___

### size

• `Abstract` **size**: `number`

#### Defined in

[src/domain/models/keyManagement/Key.ts:154](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L154)

___

### to

• `Abstract` **to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `String` | (`encoding?`: `BufferEncoding`) => `string` |

#### Defined in

[src/domain/models/keyManagement/Key.ts:156](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L156)

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/Domain.KeyTypes.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:152](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L152)

## Accessors

### alg

• `get` **alg**(): [`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Returns

[`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:165](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L165)

___

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/keyManagement/Key.ts:160](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L160)

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:187](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L187)

___

### getEncoded

▸ **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[src/domain/models/keyManagement/Key.ts:158](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L158)

___

### getProperty

▸ **getProperty**(`name`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/domain/models/keyManagement/Key.ts:191](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L191)

___

### isCurve

▸ **isCurve**\<`T`\>(`curve`): this is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | `string` |

#### Returns

this is T

#### Defined in

[src/domain/models/keyManagement/Key.ts:195](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L195)

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:171](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L171)

___

### isExportable

▸ **isExportable**(): this is All

#### Returns

this is All

#### Defined in

[src/domain/models/keyManagement/Key.ts:175](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L175)

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:179](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L179)

___

### isStorable

▸ **isStorable**(): this is StorableKey

#### Returns

this is StorableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:183](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/keyManagement/Key.ts#L183)
