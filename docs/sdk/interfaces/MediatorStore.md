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

[src/edge-agent/types/index.ts:167](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L167)

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

[src/edge-agent/types/index.ts:165](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L165)
