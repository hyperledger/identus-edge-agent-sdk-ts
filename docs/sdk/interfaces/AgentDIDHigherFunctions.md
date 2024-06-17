[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AgentDIDHigherFunctions

# Interface: AgentDIDHigherFunctions

## Implemented by

- [`Agent`](../classes/Agent.md)

## Table of contents

### Methods

- [createNewPeerDID](AgentDIDHigherFunctions.md#createnewpeerdid)
- [createNewPrismDID](AgentDIDHigherFunctions.md#createnewprismdid)
- [signWith](AgentDIDHigherFunctions.md#signwith)

## Methods

### createNewPeerDID

▸ **createNewPeerDID**(`services`, `updateMediator`): `Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `services` | [`Service`](../classes/Domain.Service.md)[] |
| `updateMediator` | `boolean` |

#### Returns

`Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Defined in

[src/edge-agent/types/index.ts:90](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L90)

___

### createNewPrismDID

▸ **createNewPrismDID**(`alias`, `services`, `keyPathIndex?`, `issuingKeys?`): `Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |
| `services` | [`Service`](../classes/Domain.Service.md)[] |
| `keyPathIndex?` | `number` |
| `issuingKeys?` | ([`PublicKey`](../classes/Domain.PublicKey.md) \| [`KeyPair`](../classes/Domain.KeyPair.md))[] |

#### Returns

`Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Defined in

[src/edge-agent/types/index.ts:95](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L95)

___

### signWith

▸ **signWith**(`did`, `message`): `Promise`\<[`Signature`](Domain.Signature.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |
| `message` | `Uint8Array` |

#### Returns

`Promise`\<[`Signature`](Domain.Signature.md)\>

#### Defined in

[src/edge-agent/types/index.ts:88](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L88)
