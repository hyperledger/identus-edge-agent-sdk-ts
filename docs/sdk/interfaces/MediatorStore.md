[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / MediatorStore

# Interface: MediatorStore

## Implemented by

- [`PublicMediatorStore`](../classes/PublicMediatorStore.md)

## Table of contents

### Methods

- [getAllMediators](MediatorStore.md#getallmediators)
- [storeMediator](MediatorStore.md#storemediator)

## Methods

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

#### Returns

`Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

#### Defined in

[src/edge-agent/types/index.ts:99](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/edge-agent/types/index.ts#L99)

___

### storeMediator

▸ **storeMediator**(`mediator`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`Mediator`](Domain.Mediator.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:97](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/edge-agent/types/index.ts#L97)
