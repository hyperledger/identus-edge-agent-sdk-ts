[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / KeyProperties

# Enumeration: KeyProperties

[Domain](../modules/Domain.md).KeyProperties

## Table of contents

### Enumeration Members

- [algorithm](Domain.KeyProperties.md#algorithm)
- [chainCode](Domain.KeyProperties.md#chaincode)
- [curve](Domain.KeyProperties.md#curve)
- [curvePointX](Domain.KeyProperties.md#curvepointx)
- [curvePointY](Domain.KeyProperties.md#curvepointy)
- [derivationPath](Domain.KeyProperties.md#derivationpath)
- [derivationSchema](Domain.KeyProperties.md#derivationschema)
- [index](Domain.KeyProperties.md#index)
- [rawKey](Domain.KeyProperties.md#rawkey)
- [seed](Domain.KeyProperties.md#seed)
- [type](Domain.KeyProperties.md#type)

## Enumeration Members

### algorithm

• **algorithm** = ``"algorithm"``

The 'algorithm' corresponds to the cryptographic algorithm associated with the key.

#### Defined in

[src/domain/models/KeyProperties.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L5)

___

### chainCode

• **chainCode** = ``"chainCode"``

The 'chainCode' used for key derivation.
hex encoded value.

```ts
const chainCode = Buffer.from(props[KeyProperties.chainCode], "hex");
```

#### Defined in

[src/domain/models/KeyProperties.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L30)

___

### curve

• **curve** = ``"curve"``

The 'curve' represents the elliptic curve used for an elliptic-curve key.

#### Defined in

[src/domain/models/KeyProperties.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L10)

___

### curvePointX

• **curvePointX** = ``"curvePoint.x"``

The 'curvePointX' represents the x-coordinate of a curve point for an elliptic-curve key.

#### Defined in

[src/domain/models/KeyProperties.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L51)

___

### curvePointY

• **curvePointY** = ``"curvePoint.y"``

The 'curvePointY' represents the y-coordinate of a curve point for an elliptic-curve key.

#### Defined in

[src/domain/models/KeyProperties.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L56)

___

### derivationPath

• **derivationPath** = ``"derivationPath"``

The 'derivationPath' refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme.

#### Defined in

[src/domain/models/KeyProperties.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L40)

___

### derivationSchema

• **derivationSchema** = ``"derivationSchema"``

The 'derivationSchema' corresponds to derivationSchema used.

#### Defined in

[src/domain/models/KeyProperties.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L20)

___

### index

• **index** = ``"index"``

#### Defined in

[src/domain/models/KeyProperties.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L41)

___

### rawKey

• **rawKey** = ``"raw"``

The 'rawKey' refers to the raw binary form of the key.

#### Defined in

[src/domain/models/KeyProperties.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L35)

___

### seed

• **seed** = ``"seed"``

The 'seed' corresponds to the seed value from which a key is derived.

#### Defined in

[src/domain/models/KeyProperties.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L15)

___

### type

• **type** = ``"type"``

The 'type' denotes the type of the key.

#### Defined in

[src/domain/models/KeyProperties.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/KeyProperties.ts#L46)
