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

[src/domain/models/keyManagement/exportable/JWK.ts:30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L30)

___

### crv

• **crv**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:77](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L77)

___

### d

• `Optional` **d**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:79](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L79)

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

[Base](Domain.JWK.Base.md).[ext](Domain.JWK.Base.md#ext)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L32)

___

### key\_ops

• `Optional` **key\_ops**: [`key_ops`](../modules/Domain.JWK.md#key_ops)[]

#### Inherited from

[Base](Domain.JWK.Base.md).[key_ops](Domain.JWK.Base.md#key_ops)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L34)

___

### kid

• `Optional` **kid**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[kid](Domain.JWK.Base.md#kid)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L36)

___

### kty

• **kty**: ``"OKP"``

#### Overrides

[Base](Domain.JWK.Base.md).[kty](Domain.JWK.Base.md#kty)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:75](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L75)

___

### use

• `Optional` **use**: ``"sig"`` \| ``"enc"``

#### Inherited from

[Base](Domain.JWK.Base.md).[use](Domain.JWK.Base.md#use)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:40](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L40)

___

### x

• **x**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:81](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L81)

___

### x5c

• `Optional` **x5c**: `string`[]

#### Inherited from

[Base](Domain.JWK.Base.md).[x5c](Domain.JWK.Base.md#x5c)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:42](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L42)

___

### x5t

• `Optional` **x5t**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t](Domain.JWK.Base.md#x5t)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:44](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L44)

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t#S256](Domain.JWK.Base.md#x5t#s256)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:46](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L46)

___

### x5u

• `Optional` **x5u**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5u](Domain.JWK.Base.md#x5u)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:48](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L48)
