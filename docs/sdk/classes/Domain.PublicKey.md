[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / PublicKey

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

[src/domain/models/keyManagement/Key.ts:30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L30)

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Inherited from

[Key](Domain.Key.md).[raw](Domain.Key.md#raw)

#### Defined in

[src/domain/models/keyManagement/Key.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L32)

___

### size

• `Abstract` **size**: `number`

#### Inherited from

[Key](Domain.Key.md).[size](Domain.Key.md#size)

#### Defined in

[src/domain/models/keyManagement/Key.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L31)

___

### to

• `Abstract` **to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `String` | (`encoding?`: ``"base64"`` \| ``"ascii"`` \| ``"utf8"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"ucs2"`` \| ``"ucs-2"`` \| ``"base64url"`` \| ``"latin1"`` \| ``"binary"`` \| ``"hex"``) => `string` |

#### Inherited from

[Key](Domain.Key.md).[to](Domain.Key.md#to)

#### Defined in

[src/domain/models/keyManagement/Key.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L33)

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/Domain.KeyTypes.md)

#### Inherited from

[Key](Domain.Key.md).[type](Domain.Key.md#type)

#### Defined in

[src/domain/models/keyManagement/Key.ts:29](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L29)

## Accessors

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Inherited from

Key.curve

#### Defined in

[src/domain/models/keyManagement/Key.ts:37](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L37)

___

### value

• `get` **value**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[src/domain/models/keyManagement/PublicKey.ts:4](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/PublicKey.ts#L4)

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Inherited from

[Key](Domain.Key.md).[canVerify](Domain.Key.md#canverify)

#### Defined in

[src/domain/models/keyManagement/Key.ts:58](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L58)

___

### getEncoded

▸ **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

[Key](Domain.Key.md).[getEncoded](Domain.Key.md#getencoded)

#### Defined in

[src/domain/models/keyManagement/Key.ts:35](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L35)

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

[src/domain/models/keyManagement/Key.ts:62](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L62)

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

[src/domain/models/keyManagement/Key.ts:66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L66)

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Inherited from

[Key](Domain.Key.md).[isDerivable](Domain.Key.md#isderivable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:42](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L42)

___

### isExportable

▸ **isExportable**(): this is unknown

#### Returns

this is unknown

#### Inherited from

[Key](Domain.Key.md).[isExportable](Domain.Key.md#isexportable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:46](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L46)

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Inherited from

[Key](Domain.Key.md).[isSignable](Domain.Key.md#issignable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:50](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L50)

___

### isStorable

▸ **isStorable**(): this is StorableKey

#### Returns

this is StorableKey

#### Inherited from

[Key](Domain.Key.md).[isStorable](Domain.Key.md#isstorable)

#### Defined in

[src/domain/models/keyManagement/Key.ts:54](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/keyManagement/Key.ts#L54)
