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

[src/edge-agent/types/index.ts:84](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/edge-agent/types/index.ts#L84)

___

### createNewPrismDID

▸ **createNewPrismDID**(`alias`, `services`, `keyPathIndex?`): `Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |
| `services` | [`Service`](../classes/Domain.Service.md)[] |
| `keyPathIndex?` | `number` |

#### Returns

`Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Defined in

[src/edge-agent/types/index.ts:89](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/edge-agent/types/index.ts#L89)

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

[src/edge-agent/types/index.ts:82](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/edge-agent/types/index.ts#L82)
