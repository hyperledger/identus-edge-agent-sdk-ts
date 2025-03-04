[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / JWK

# Namespace: JWK

[Domain](Domain.md).JWK

JWK definitions
based on https://www.iana.org/assignments/jose/jose.xhtml

## Table of contents

### Interfaces

- [Base](../interfaces/Domain.JWK.Base.md)
- [EC](../interfaces/Domain.JWK.EC.md)
- [OCT](../interfaces/Domain.JWK.OCT.md)
- [OKP](../interfaces/Domain.JWK.OKP.md)
- [RSA](../interfaces/Domain.JWK.RSA.md)

### Type Aliases

- [key\_ops](Domain.JWK.md#key_ops)

### Functions

- [fromKey](Domain.JWK.md#fromkey)

## Type Aliases

### key\_ops

Ƭ **key\_ops**: ``"sign"`` \| ``"verify"`` \| ``"encrypt"`` \| ``"decrypt"`` \| ``"wrapKey"`` \| ``"unwrapKey"`` \| ``"deriveKey"`` \| ``"deriveBits"``

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/keyManagement/exportable/JWK.ts#L18)

## Functions

### fromKey

▸ **fromKey**(`key`, `base?`): [`JWK`](Domain.md#jwk)

create a JWK from a given Key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`PrivateKey`](../classes/Domain.PrivateKey.md) \| [`PublicKey`](../classes/Domain.PublicKey.md) |  |
| `base` | [`Base`](../interfaces/Domain.JWK.Base.md) | set of JWK properties to be added |

#### Returns

[`JWK`](Domain.md#jwk)

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:111](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/keyManagement/exportable/JWK.ts#L111)
