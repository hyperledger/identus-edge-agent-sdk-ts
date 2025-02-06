[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / KeyPair

# Class: KeyPair

[Domain](../modules/Domain.md).KeyPair

## Table of contents

### Constructors

- [constructor](Domain.KeyPair.md#constructor)

### Properties

- [privateKey](Domain.KeyPair.md#privatekey)
- [publicKey](Domain.KeyPair.md#publickey)

### Accessors

- [curve](Domain.KeyPair.md#curve)

## Constructors

### constructor

• **new KeyPair**(): [`KeyPair`](Domain.KeyPair.md)

#### Returns

[`KeyPair`](Domain.KeyPair.md)

## Properties

### privateKey

• `Abstract` **privateKey**: [`PrivateKey`](Domain.PrivateKey.md)

#### Defined in

[src/domain/models/KeyPair.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/KeyPair.ts#L10)

___

### publicKey

• `Abstract` **publicKey**: [`PublicKey`](Domain.PublicKey.md)

#### Defined in

[src/domain/models/KeyPair.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/KeyPair.ts#L9)

## Accessors

### curve

• `get` **curve**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/KeyPair.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/KeyPair.ts#L5)
