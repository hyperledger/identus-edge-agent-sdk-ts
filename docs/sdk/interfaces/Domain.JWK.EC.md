[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [JWK](../modules/Domain.JWK.md) / EC

# Interface: EC

[Domain](../modules/Domain.md).[JWK](../modules/Domain.JWK.md).EC

## Hierarchy

- [`Base`](Domain.JWK.Base.md)

  ↳ **`EC`**

## Table of contents

### Properties

- [alg](Domain.JWK.EC.md#alg)
- [crv](Domain.JWK.EC.md#crv)
- [d](Domain.JWK.EC.md#d)
- [ext](Domain.JWK.EC.md#ext)
- [key\_ops](Domain.JWK.EC.md#key_ops)
- [kid](Domain.JWK.EC.md#kid)
- [kty](Domain.JWK.EC.md#kty)
- [use](Domain.JWK.EC.md#use)
- [x](Domain.JWK.EC.md#x)
- [x5c](Domain.JWK.EC.md#x5c)
- [x5t](Domain.JWK.EC.md#x5t)
- [x5t#S256](Domain.JWK.EC.md#x5t#s256)
- [x5u](Domain.JWK.EC.md#x5u)
- [y](Domain.JWK.EC.md#y)

## Properties

### alg

• `Optional` **alg**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[alg](Domain.JWK.Base.md#alg)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L31)

___

### crv

• **crv**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:58](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L58)

___

### d

• `Optional` **d**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L60)

___

### ext

• `Optional` **ext**: `boolean`

#### Inherited from

[Base](Domain.JWK.Base.md).[ext](Domain.JWK.Base.md#ext)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L33)

___

### key\_ops

• `Optional` **key\_ops**: [`key_ops`](../modules/Domain.JWK.md#key_ops)[]

#### Inherited from

[Base](Domain.JWK.Base.md).[key_ops](Domain.JWK.Base.md#key_ops)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L35)

___

### kid

• `Optional` **kid**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[kid](Domain.JWK.Base.md#kid)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L37)

___

### kty

• **kty**: ``"EC"``

#### Overrides

[Base](Domain.JWK.Base.md).[kty](Domain.JWK.Base.md#kty)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L56)

___

### use

• `Optional` **use**: ``"sig"`` \| ``"enc"``

#### Inherited from

[Base](Domain.JWK.Base.md).[use](Domain.JWK.Base.md#use)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L41)

___

### x

• `Optional` **x**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L62)

___

### x5c

• `Optional` **x5c**: `string`[]

#### Inherited from

[Base](Domain.JWK.Base.md).[x5c](Domain.JWK.Base.md#x5c)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L43)

___

### x5t

• `Optional` **x5t**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t](Domain.JWK.Base.md#x5t)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L45)

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5t#S256](Domain.JWK.Base.md#x5t#s256)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L47)

___

### x5u

• `Optional` **x5u**: `string`

#### Inherited from

[Base](Domain.JWK.Base.md).[x5u](Domain.JWK.Base.md#x5u)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L49)

___

### y

• `Optional` **y**: `string`

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:64](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/JWK.ts#L64)
