[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / PrismDID

# Class: PrismDID

[Domain](../modules/Domain.md).PrismDID

## Table of contents

### Constructors

- [constructor](Domain.PrismDID.md#constructor)

### Properties

- [alias](Domain.PrismDID.md#alias)
- [did](Domain.PrismDID.md#did)
- [privateKey](Domain.PrismDID.md#privatekey)

### Methods

- [parseMethodId](Domain.PrismDID.md#parsemethodid)

## Constructors

### constructor

• **new PrismDID**(`did`, `privateKey`, `alias?`): [`PrismDID`](Domain.PrismDID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `privateKey` | [`PrivateKey`](Domain.PrivateKey.md) |
| `alias?` | `string` |

#### Returns

[`PrismDID`](Domain.PrismDID.md)

#### Defined in

[src/domain/models/PrismDID.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/domain/models/PrismDID.ts#L6)

## Properties

### alias

• `Optional` `Readonly` **alias**: `string`

#### Defined in

[src/domain/models/PrismDID.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/domain/models/PrismDID.ts#L9)

___

### did

• `Readonly` **did**: [`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/PrismDID.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/domain/models/PrismDID.ts#L7)

___

### privateKey

• `Readonly` **privateKey**: [`PrivateKey`](Domain.PrivateKey.md)

#### Defined in

[src/domain/models/PrismDID.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/domain/models/PrismDID.ts#L8)

## Methods

### parseMethodId

▸ **parseMethodId**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

[src/domain/models/PrismDID.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/domain/models/PrismDID.ts#L12)
