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

[src/domain/models/keyManagement/Key.ts:30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L30)

___

### raw

• `Abstract` **raw**: `Uint8Array`

#### Defined in

[src/domain/models/keyManagement/Key.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L32)

___

### size

• `Abstract` **size**: `number`

#### Defined in

[src/domain/models/keyManagement/Key.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L31)

___

### to

• `Abstract` **to**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Buffer` | () => `Buffer` |
| `String` | (`encoding?`: ``"base64"`` \| ``"ascii"`` \| ``"utf8"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"ucs2"`` \| ``"ucs-2"`` \| ``"base64url"`` \| ``"latin1"`` \| ``"binary"`` \| ``"hex"``) => `string` |

#### Defined in

[src/domain/models/keyManagement/Key.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L33)

___

### type

• `Abstract` **type**: [`KeyTypes`](../enums/Domain.KeyTypes.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:29](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L29)

## Accessors

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/keyManagement/Key.ts:37](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L37)

## Methods

### canVerify

▸ **canVerify**(): this is VerifiableKey

#### Returns

this is VerifiableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:58](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L58)

___

### getEncoded

▸ **getEncoded**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[src/domain/models/keyManagement/Key.ts:35](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L35)

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

[src/domain/models/keyManagement/Key.ts:62](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L62)

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

[src/domain/models/keyManagement/Key.ts:66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L66)

___

### isDerivable

▸ **isDerivable**(): this is DerivableKey

#### Returns

this is DerivableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:42](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L42)

___

### isExportable

▸ **isExportable**(): this is unknown

#### Returns

this is unknown

#### Defined in

[src/domain/models/keyManagement/Key.ts:46](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L46)

___

### isSignable

▸ **isSignable**(): this is SignableKey

#### Returns

this is SignableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:50](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L50)

___

### isStorable

▸ **isStorable**(): this is StorableKey

#### Returns

this is StorableKey

#### Defined in

[src/domain/models/keyManagement/Key.ts:54](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L54)
