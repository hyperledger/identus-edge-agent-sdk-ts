[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Apollo

# Interface: Apollo

[Domain](../modules/Domain.md).Apollo

## Implemented by

- [`Apollo`](../classes/Apollo.md)

## Table of contents

### Methods

- [createPrivateKey](Domain.Apollo.md#createprivatekey)
- [createPublicKey](Domain.Apollo.md#createpublickey)
- [createRandomMnemonics](Domain.Apollo.md#createrandommnemonics)
- [createRandomSeed](Domain.Apollo.md#createrandomseed)
- [createSeed](Domain.Apollo.md#createseed)

## Methods

### createPrivateKey

▸ **createPrivateKey**(`parameters`): [`PrivateKey`](../classes/Domain.PrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Object` |

#### Returns

[`PrivateKey`](../classes/Domain.PrivateKey.md)

#### Defined in

[src/domain/buildingBlocks/Apollo.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/buildingBlocks/Apollo.ts#L10)

___

### createPublicKey

▸ **createPublicKey**(`parameters`): [`PublicKey`](../classes/Domain.PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Object` |

#### Returns

[`PublicKey`](../classes/Domain.PublicKey.md)

#### Defined in

[src/domain/buildingBlocks/Apollo.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/buildingBlocks/Apollo.ts#L13)

___

### createRandomMnemonics

▸ **createRandomMnemonics**(): [`MnemonicWordList`](../modules/Domain.md#mnemonicwordlist)

#### Returns

[`MnemonicWordList`](../modules/Domain.md#mnemonicwordlist)

#### Defined in

[src/domain/buildingBlocks/Apollo.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/buildingBlocks/Apollo.ts#L7)

___

### createRandomSeed

▸ **createRandomSeed**(`passphrase?`): [`SeedWords`](Domain.SeedWords.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `passphrase?` | `string` |

#### Returns

[`SeedWords`](Domain.SeedWords.md)

#### Defined in

[src/domain/buildingBlocks/Apollo.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/buildingBlocks/Apollo.ts#L9)

___

### createSeed

▸ **createSeed**(`mnemonics`, `passphrase`): [`Seed`](Domain.Seed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonics` | [`MnemonicWordList`](../modules/Domain.md#mnemonicwordlist) |
| `passphrase` | `string` |

#### Returns

[`Seed`](Domain.Seed.md)

#### Defined in

[src/domain/buildingBlocks/Apollo.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/buildingBlocks/Apollo.ts#L8)
