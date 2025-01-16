[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / PrivateKey

# Class: PrivateKey

[Domain](../modules/Domain.md).PrivateKey

Storable
define properties a Domain object must implement to be compatible with Pluto

## Hierarchy

- [`Key`](Domain.Key.md)

  ↳ **`PrivateKey`**

## Implements

- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](Domain.PrivateKey.md#constructor)

### Properties

- [keySpecification](Domain.PrivateKey.md#keyspecification)
- [raw](Domain.PrivateKey.md#raw)
- [size](Domain.PrivateKey.md#size)
- [to](Domain.PrivateKey.md#to)
- [type](Domain.PrivateKey.md#type)
- [uuid](Domain.PrivateKey.md#uuid)

### Accessors

- [alg](Domain.PrivateKey.md#alg)
- [curve](Domain.PrivateKey.md#curve)
- [index](Domain.PrivateKey.md#index)
- [value](Domain.PrivateKey.md#value)

### Methods

- [canVerify](Domain.PrivateKey.md#canverify)
- [getEncoded](Domain.PrivateKey.md#getencoded)
- [getProperty](Domain.PrivateKey.md#getproperty)
- [isCurve](Domain.PrivateKey.md#iscurve)
- [isDerivable](Domain.PrivateKey.md#isderivable)
- [isExportable](Domain.PrivateKey.md#isexportable)
- [isSignable](Domain.PrivateKey.md#issignable)
- [isStorable](Domain.PrivateKey.md#isstorable)
- [publicKey](Domain.PrivateKey.md#publickey)

## Constructors

### constructor

• **new PrivateKey**(): [`PrivateKey`](Domain.PrivateKey.md)

#### Returns

[`PrivateKey`](Domain.PrivateKey.md)

#### Inherited from

[Key](Domain.Key.md).[constructor](Domain.Key.md#constructor)

## Properties

### keySpecification

• `Abstract` **keySpecification**: `Map`\<`string`, `string`\>

#### Inherited from

[Key](Domain.Key.md).[keySpecification](Domain.Key.md#keyspecification)

#### Defined in

[src/domain/models/keyManagement/Key.ts:153](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L153)

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Inherited from

[Key](Domain.Key.md).[raw](Domain.Key.md#raw)

#### Defined in

[src/domain/models/keyManagement/Key.ts:155](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L155)

___

### size

• `Abstract` **size**: `number`

#### Inherited from

[Key](Domain.Key.md).[size](Domain.Key.md#size)

#### Defined in

[src/domain/models/keyManagement/Key.ts:154](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L154)

___

### to

• `Abstract` **to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `String` | (`encoding?`: `BufferEncoding`) => `string` |

#### Inherited from

[Key](Domain.Key.md).[to](Domain.Key.md#to)

#### Defined in

[src/domain/models/keyManagement/Key.ts:156](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L156)

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/Domain.KeyTypes.md)

#### Inherited from

[Key](Domain.Key.md).[type](Domain.Key.md#type)

#### Defined in

[src/domain/models/keyManagement/Key.ts:152](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L152)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Defined in

[src/domain/models/keyManagement/PrivateKey.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/PrivateKey.ts#L9)

## Accessors

### alg

• `get` **alg**(): [`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Returns

[`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Inherited from

Key.alg

#### Defined in

[src/domain/models/keyManagement/Key.ts:165](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L165)

___

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Overrides

Key.curve

#### Defined in

[src/domain/models/keyManagement/PrivateKey.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/PrivateKey.ts#L11)

___

### index

• `get` **index**(): `undefined` \| `number`

Derivation index.
The index of the key in the derivation path.
Only applicable for HD keys

#### Returns

`undefined` \| `number`

#### Defined in

[src/domain/models/keyManagement/PrivateKey.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/PrivateKey.ts#L23)

___

### value

• `get` **value**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[src/domain/models/keyManagement/PrivateKey.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/PrivateKey.ts#L30)

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Inherited from

[Key](Domain.Key.md).[canVerify](Domain.Key.md#canverify)

#### Defined in

[src/domain/models/keyManagement/Key.ts:187](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L187)

___

### getEncoded

▸ **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

[Key](Domain.Key.md).[getEncoded](Domain.Key.md#getencoded)

#### Defined in

[src/domain/models/keyManagement/Key.ts:158](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L158)

___

### getProperty

▸ **getProperty**(`name`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`

#### Inherited from

[Key](Domain.Key.md).[getProperty](Domain.Key.md#getproperty)

#### Defined in

[src/domain/models/keyManagement/Key.ts:191](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L191)

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

#### Inherited from

[Key](Domain.Key.md).[isCurve](Domain.Key.md#iscurve)

#### Defined in

[src/domain/models/keyManagement/Key.ts:195](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L195)

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Inherited from

[Key](Domain.Key.md).[isDerivable](Domain.Key.md#isderivable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:171](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L171)

___

### isExportable

▸ **isExportable**(): this is All

#### Returns

this is All

#### Inherited from

[Key](Domain.Key.md).[isExportable](Domain.Key.md#isexportable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:175](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L175)

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Inherited from

[Key](Domain.Key.md).[isSignable](Domain.Key.md#issignable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:179](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L179)

___

### isStorable

▸ **isStorable**(): this is StorableKey

#### Returns

this is StorableKey

#### Inherited from

[Key](Domain.Key.md).[isStorable](Domain.Key.md#isstorable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:183](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/Key.ts#L183)

___

### publicKey

▸ **publicKey**(): [`PublicKey`](Domain.PublicKey.md)

#### Returns

[`PublicKey`](Domain.PublicKey.md)

#### Defined in

[src/domain/models/keyManagement/PrivateKey.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/keyManagement/PrivateKey.ts#L7)
