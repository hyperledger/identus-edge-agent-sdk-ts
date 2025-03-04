[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / MediatorStore

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

[src/edge-agent/types/index.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L100)

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

[src/edge-agent/types/index.ts:98](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L98)
