[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [JWK](../modules/Domain.JWK.md) / Base

# Interface: Base

[Domain](../modules/Domain.md).[JWK](../modules/Domain.JWK.md).Base

## Hierarchy

- **`Base`**

  ↳ [`EC`](Domain.JWK.EC.md)

  ↳ [`OCT`](Domain.JWK.OCT.md)

  ↳ [`OKP`](Domain.JWK.OKP.md)

  ↳ [`RSA`](Domain.JWK.RSA.md)

## Indexable

▪ [propName: `string`]: `unknown`

## Table of contents

### Properties

- [alg](Domain.JWK.Base.md#alg)
- [ext](Domain.JWK.Base.md#ext)
- [key\_ops](Domain.JWK.Base.md#key_ops)
- [kid](Domain.JWK.Base.md#kid)
- [kty](Domain.JWK.Base.md#kty)
- [use](Domain.JWK.Base.md#use)
- [x5c](Domain.JWK.Base.md#x5c)
- [x5t](Domain.JWK.Base.md#x5t)
- [x5t#S256](Domain.JWK.Base.md#x5t#s256)
- [x5u](Domain.JWK.Base.md#x5u)

## Properties

### alg

• `Optional` **alg**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L30)

___

### ext

• `Optional` **ext**: `boolean`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L32)

___

### key\_ops

• `Optional` **key\_ops**: [`key_ops`](../modules/Domain.JWK.md#key_ops)[]

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L34)

___

### kid

• `Optional` **kid**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L36)

___

### kty

• `Optional` **kty**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:38](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L38)

___

### use

• `Optional` **use**: ``"sig"`` \| ``"enc"``

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:40](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L40)

___

### x5c

• `Optional` **x5c**: `string`[]

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:42](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L42)

___

### x5t

• `Optional` **x5t**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:44](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L44)

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:46](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L46)

___

### x5u

• `Optional` **x5u**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:48](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/keyManagement/exportable/JWK.ts#L48)
