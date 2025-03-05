[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / PublicKey

# Class: PublicKey

[Domain](../modules/Domain.md).PublicKey

## Hierarchy

- [`Key`](Domain.Key.md)

  ↳ **`PublicKey`**

## Table of contents

### Constructors

- [constructor](Domain.PublicKey.md#constructor)

### Properties

- [keySpecification](Domain.PublicKey.md#keyspecification)
- [raw](Domain.PublicKey.md#raw)
- [size](Domain.PublicKey.md#size)
- [to](Domain.PublicKey.md#to)
- [type](Domain.PublicKey.md#type)

### Accessors

- [alg](Domain.PublicKey.md#alg)
- [curve](Domain.PublicKey.md#curve)
- [value](Domain.PublicKey.md#value)

### Methods

- [canVerify](Domain.PublicKey.md#canverify)
- [getEncoded](Domain.PublicKey.md#getencoded)
- [getProperty](Domain.PublicKey.md#getproperty)
- [isCurve](Domain.PublicKey.md#iscurve)
- [isDerivable](Domain.PublicKey.md#isderivable)
- [isExportable](Domain.PublicKey.md#isexportable)
- [isSignable](Domain.PublicKey.md#issignable)
- [isStorable](Domain.PublicKey.md#isstorable)

## Constructors

### constructor

• **new PublicKey**(): [`PublicKey`](Domain.PublicKey.md)

#### Returns

[`PublicKey`](Domain.PublicKey.md)

#### Inherited from

[Key](Domain.Key.md).[constructor](Domain.Key.md#constructor)

## Properties

### keySpecification

• `Abstract` **keySpecification**: `Map`\<`string`, `string`\>

#### Inherited from

[Key](Domain.Key.md).[keySpecification](Domain.Key.md#keyspecification)

#### Defined in

[src/domain/models/keyManagement/Key.ts:217](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L217)

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Inherited from

[Key](Domain.Key.md).[raw](Domain.Key.md#raw)

#### Defined in

[src/domain/models/keyManagement/Key.ts:219](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L219)

___

### size

• `Abstract` **size**: `number`

#### Inherited from

[Key](Domain.Key.md).[size](Domain.Key.md#size)

#### Defined in

[src/domain/models/keyManagement/Key.ts:218](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L218)

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

[src/domain/models/keyManagement/Key.ts:220](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L220)

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/Domain.KeyTypes.md)

#### Inherited from

[Key](Domain.Key.md).[type](Domain.Key.md#type)

#### Defined in

[src/domain/models/keyManagement/Key.ts:216](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L216)

## Accessors

### alg

• `get` **alg**(): [`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Returns

[`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Inherited from

Key.alg

#### Defined in

[src/domain/models/keyManagement/Key.ts:229](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L229)

___

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Inherited from

Key.curve

#### Defined in

[src/domain/models/keyManagement/Key.ts:224](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L224)

___

### value

• `get` **value**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[src/domain/models/keyManagement/PublicKey.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/PublicKey.ts#L4)

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Inherited from

[Key](Domain.Key.md).[canVerify](Domain.Key.md#canverify)

#### Defined in

[src/domain/models/keyManagement/Key.ts:251](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L251)

___

### getEncoded

▸ **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

[Key](Domain.Key.md).[getEncoded](Domain.Key.md#getencoded)

#### Defined in

[src/domain/models/keyManagement/Key.ts:222](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L222)

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

[src/domain/models/keyManagement/Key.ts:255](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L255)

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

[src/domain/models/keyManagement/Key.ts:259](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L259)

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Inherited from

[Key](Domain.Key.md).[isDerivable](Domain.Key.md#isderivable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:235](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L235)

___

### isExportable

▸ **isExportable**(): this is All

#### Returns

this is All

#### Inherited from

[Key](Domain.Key.md).[isExportable](Domain.Key.md#isexportable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:239](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L239)

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Inherited from

[Key](Domain.Key.md).[isSignable](Domain.Key.md#issignable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:243](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L243)

___

### isStorable

▸ **isStorable**(): this is StorableKey

#### Returns

this is StorableKey

#### Inherited from

[Key](Domain.Key.md).[isStorable](Domain.Key.md#isstorable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:247](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/Key.ts#L247)
