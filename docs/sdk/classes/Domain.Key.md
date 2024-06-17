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

[src/domain/models/keyManagement/Key.ts:146](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L146)

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Defined in

[src/domain/models/keyManagement/Key.ts:148](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L148)

___

### size

• `Abstract` **size**: `number`

#### Defined in

[src/domain/models/keyManagement/Key.ts:147](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L147)

___

### to

• `Abstract` **to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `String` | (`encoding?`: `BufferEncoding`) => `string` |

#### Defined in

[src/domain/models/keyManagement/Key.ts:149](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L149)

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/Domain.KeyTypes.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:145](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L145)

## Accessors

### alg

• `get` **alg**(): [`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Returns

[`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:158](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L158)

___

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/keyManagement/Key.ts:153](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L153)

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:180](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L180)

___

### getEncoded

▸ **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[src/domain/models/keyManagement/Key.ts:151](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L151)

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

[src/domain/models/keyManagement/Key.ts:184](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L184)

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

[src/domain/models/keyManagement/Key.ts:188](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L188)

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:164](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L164)

___

### isExportable

▸ **isExportable**(): this is All

#### Returns

this is All

#### Defined in

[src/domain/models/keyManagement/Key.ts:168](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L168)

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:172](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L172)

___

### isStorable

▸ **isStorable**(): this is StorableKey

#### Returns

this is StorableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:176](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/Key.ts#L176)
