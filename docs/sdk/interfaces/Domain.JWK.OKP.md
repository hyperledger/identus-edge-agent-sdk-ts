[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [JWK](../modules/Domain.JWK.md) / OKP

# Interface: OKP

[Domain](../modules/Domain.md).[JWK](../modules/Domain.JWK.md).OKP

## Hierarchy

- [`Base`](Domain.JWK.Base.md)

  ↳ **`OKP`**

## Table of contents

### Properties

- [alg](Domain.JWK.OKP.md#alg)
- [crv](Domain.JWK.OKP.md#crv)
- [d](Domain.JWK.OKP.md#d)
- [ext](Domain.JWK.OKP.md#ext)
- [key\_ops](Domain.JWK.OKP.md#key_ops)
- [kid](Domain.JWK.OKP.md#kid)
- [kty](Domain.JWK.OKP.md#kty)
- [use](Domain.JWK.OKP.md#use)
- [x](Domain.JWK.OKP.md#x)
- [x5c](Domain.JWK.OKP.md#x5c)
- [x5t](Domain.JWK.OKP.md#x5t)
- [x5t#S256](Domain.JWK.OKP.md#x5t#s256)
- [x5u](Domain.JWK.OKP.md#x5u)

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[alg](Domain.JWK.Base.md#alg)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L27)

___

### crv

• **crv**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:72](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L72)

___

### d

• `Optional` **d**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:74](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L74)

___

### ext

• `Optional` **ext**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[ext](Domain.JWK.Base.md#ext)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:29](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L29)

___

### key\_ops

• `Optional` **key\_ops**: [`key_ops`](../modules/Domain.JWK.md#key_ops)[]

#### Inherited from

[Base](Domain.JWK.Base.md).[key_ops](Domain.JWK.Base.md#key_ops)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L31)

___

### kid

• `Optional` **kid**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[kid](Domain.JWK.Base.md#kid)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L33)

___

### kty

• **kty**: ``"OKP"``

#### Overrides

[Base](Domain.JWK.Base.md).[kty](Domain.JWK.Base.md#kty)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:70](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L70)

___

### use

• `Optional` **use**: ``"sig"`` \| ``"enc"``

#### Inherited from

[Base](Domain.JWK.Base.md).[use](Domain.JWK.Base.md#use)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L37)

___

### x

• **x**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:76](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L76)

___

### x5c

• `Optional` **x5c**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5c](Domain.JWK.Base.md#x5c)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:39](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L39)

___

### x5t

• `Optional` **x5t**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t](Domain.JWK.Base.md#x5t)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L41)

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t#S256](Domain.JWK.Base.md#x5t#s256)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L43)

___

### x5u

• `Optional` **x5u**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5u](Domain.JWK.Base.md#x5u)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/keyManagement/exportable/JWK.ts#L45)
