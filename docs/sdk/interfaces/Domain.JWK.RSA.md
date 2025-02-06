[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [JWK](../modules/Domain.JWK.md) / RSA

# Interface: RSA

[Domain](../modules/Domain.md).[JWK](../modules/Domain.JWK.md).RSA

## Hierarchy

- [`Base`](Domain.JWK.Base.md)

  ↳ **`RSA`**

## Table of contents

### Properties

- [alg](Domain.JWK.RSA.md#alg)
- [d](Domain.JWK.RSA.md#d)
- [dp](Domain.JWK.RSA.md#dp)
- [dq](Domain.JWK.RSA.md#dq)
- [e](Domain.JWK.RSA.md#e)
- [ext](Domain.JWK.RSA.md#ext)
- [key\_ops](Domain.JWK.RSA.md#key_ops)
- [kid](Domain.JWK.RSA.md#kid)
- [kty](Domain.JWK.RSA.md#kty)
- [n](Domain.JWK.RSA.md#n)
- [oth](Domain.JWK.RSA.md#oth)
- [p](Domain.JWK.RSA.md#p)
- [q](Domain.JWK.RSA.md#q)
- [qi](Domain.JWK.RSA.md#qi)
- [use](Domain.JWK.RSA.md#use)
- [x5c](Domain.JWK.RSA.md#x5c)
- [x5t](Domain.JWK.RSA.md#x5t)
- [x5t#S256](Domain.JWK.RSA.md#x5t#s256)
- [x5u](Domain.JWK.RSA.md#x5u)

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[alg](Domain.JWK.Base.md#alg)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L31)

___

### d

• **d**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:88](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L88)

___

### dp

• **dp**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:89](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L89)

___

### dq

• **dq**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:90](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L90)

___

### e

• **e**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:91](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L91)

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

[Base](Domain.JWK.Base.md).[ext](Domain.JWK.Base.md#ext)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L33)

___

### key\_ops

• `Optional` **key\_ops**: [`key_ops`](../modules/Domain.JWK.md#key_ops)[]

#### Inherited from

[Base](Domain.JWK.Base.md).[key_ops](Domain.JWK.Base.md#key_ops)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L35)

___

### kid

• `Optional` **kid**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[kid](Domain.JWK.Base.md#kid)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L37)

___

### kty

• **kty**: ``"RSA"``

#### Overrides

[Base](Domain.JWK.Base.md).[kty](Domain.JWK.Base.md#kty)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L87)

___

### n

• **n**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:92](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L92)

___

### oth

• **oth**: \{ `d?`: `string` ; `r?`: `string` ; `t?`: `string`  }[]

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:93](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L93)

___

### p

• **p**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:98](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L98)

___

### q

• **q**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:99](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L99)

___

### qi

• **qi**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:100](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L100)

___

### use

• `Optional` **use**: ``"sig"`` \| ``"enc"``

#### Inherited from

[Base](Domain.JWK.Base.md).[use](Domain.JWK.Base.md#use)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L41)

___

### x5c

• `Optional` **x5c**: `string`[]

#### Inherited from

[Base](Domain.JWK.Base.md).[x5c](Domain.JWK.Base.md#x5c)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L43)

___

### x5t

• `Optional` **x5t**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t](Domain.JWK.Base.md#x5t)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L45)

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t#S256](Domain.JWK.Base.md#x5t#s256)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L47)

___

### x5u

• `Optional` **x5u**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5u](Domain.JWK.Base.md#x5u)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/keyManagement/exportable/JWK.ts#L49)
