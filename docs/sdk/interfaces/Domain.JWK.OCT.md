[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [JWK](../modules/Domain.JWK.md) / OCT

# Interface: OCT

[Domain](../modules/Domain.md).[JWK](../modules/Domain.JWK.md).OCT

## Hierarchy

- [`Base`](Domain.JWK.Base.md)

  ↳ **`OCT`**

## Table of contents

### Properties

- [alg](Domain.JWK.OCT.md#alg)
- [ext](Domain.JWK.OCT.md#ext)
- [k](Domain.JWK.OCT.md#k)
- [key\_ops](Domain.JWK.OCT.md#key_ops)
- [kid](Domain.JWK.OCT.md#kid)
- [kty](Domain.JWK.OCT.md#kty)
- [use](Domain.JWK.OCT.md#use)
- [x5c](Domain.JWK.OCT.md#x5c)
- [x5t](Domain.JWK.OCT.md#x5t)
- [x5t#S256](Domain.JWK.OCT.md#x5t#s256)
- [x5u](Domain.JWK.OCT.md#x5u)

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[alg](Domain.JWK.Base.md#alg)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L31)

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

[Base](Domain.JWK.Base.md).[ext](Domain.JWK.Base.md#ext)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L33)

___

### k

• **k**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:71](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L71)

___

### key\_ops

• `Optional` **key\_ops**: [`key_ops`](../modules/Domain.JWK.md#key_ops)[]

#### Inherited from

[Base](Domain.JWK.Base.md).[key_ops](Domain.JWK.Base.md#key_ops)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L35)

___

### kid

• `Optional` **kid**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[kid](Domain.JWK.Base.md#kid)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L37)

___

### kty

• **kty**: ``"oct"``

#### Overrides

[Base](Domain.JWK.Base.md).[kty](Domain.JWK.Base.md#kty)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L69)

___

### use

• `Optional` **use**: ``"sig"`` \| ``"enc"``

#### Inherited from

[Base](Domain.JWK.Base.md).[use](Domain.JWK.Base.md#use)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L41)

___

### x5c

• `Optional` **x5c**: `string`[]

#### Inherited from

[Base](Domain.JWK.Base.md).[x5c](Domain.JWK.Base.md#x5c)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L43)

___

### x5t

• `Optional` **x5t**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t](Domain.JWK.Base.md#x5t)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L45)

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t#S256](Domain.JWK.Base.md#x5t#s256)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L47)

___

### x5u

• `Optional` **x5u**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5u](Domain.JWK.Base.md#x5u)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/keyManagement/exportable/JWK.ts#L49)
