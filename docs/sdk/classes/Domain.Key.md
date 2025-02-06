[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Key

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

[src/domain/models/keyManagement/Key.ts:217](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L217)

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Defined in

[src/domain/models/keyManagement/Key.ts:219](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L219)

___

### size

• `Abstract` **size**: `number`

#### Defined in

[src/domain/models/keyManagement/Key.ts:218](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L218)

___

### to

• `Abstract` **to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `String` | (`encoding?`: `BufferEncoding`) => `string` |

#### Defined in

[src/domain/models/keyManagement/Key.ts:220](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L220)

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/Domain.KeyTypes.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:216](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L216)

## Accessors

### alg

• `get` **alg**(): [`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Returns

[`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:229](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L229)

___

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/keyManagement/Key.ts:224](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L224)

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:251](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L251)

___

### getEncoded

▸ **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[src/domain/models/keyManagement/Key.ts:222](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L222)

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

[src/domain/models/keyManagement/Key.ts:255](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L255)

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

[src/domain/models/keyManagement/Key.ts:259](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L259)

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:235](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L235)

___

### isExportable

▸ **isExportable**(): this is All

#### Returns

this is All

#### Defined in

[src/domain/models/keyManagement/Key.ts:239](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L239)

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:243](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L243)

___

### isStorable

▸ **isStorable**(): this is StorableKey

#### Returns

this is StorableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:247](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/Key.ts#L247)
