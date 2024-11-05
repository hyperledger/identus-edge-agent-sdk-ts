[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / PublicMediatorStore

# Class: PublicMediatorStore

PlutoMediationStore is used just to interface between the mediators and storage.
It is mainly used to store + fetch mediator from current storage instance (pluto)

**`Export`**

PublicMediatorStore

## Implements

- [`MediatorStore`](../interfaces/MediatorStore.md)

## Table of contents

### Constructors

- [constructor](PublicMediatorStore.md#constructor)

### Properties

- [pluto](PublicMediatorStore.md#pluto)

### Methods

- [getAllMediators](PublicMediatorStore.md#getallmediators)
- [storeMediator](PublicMediatorStore.md#storemediator)

## Constructors

### constructor

• **new PublicMediatorStore**(`pluto`): [`PublicMediatorStore`](PublicMediatorStore.md)

Creates an instance of PublicMediatorStore.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluto` | [`Pluto`](../interfaces/Domain.Pluto-1.md) |

#### Returns

[`PublicMediatorStore`](PublicMediatorStore.md)

#### Defined in

[src/edge-agent/mediator/PlutoMediatorStore.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/edge-agent/mediator/PlutoMediatorStore.ts#L20)

## Properties

### pluto

• `Private` **pluto**: [`Pluto`](../interfaces/Domain.Pluto-1.md)

#### Defined in

[src/edge-agent/mediator/PlutoMediatorStore.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/edge-agent/mediator/PlutoMediatorStore.ts#L20)

## Methods

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)[]\>

Asyncronously fetch all the mediators from storage

#### Returns

`Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)[]\>

**`Async`**

#### Implementation of

[MediatorStore](../interfaces/MediatorStore.md).[getAllMediators](../interfaces/MediatorStore.md#getallmediators)

#### Defined in

[src/edge-agent/mediator/PlutoMediatorStore.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/edge-agent/mediator/PlutoMediatorStore.ts#L40)

___

### storeMediator

▸ **storeMediator**(`mediator`): `Promise`\<`void`\>

Stores a mediator asyncronously in pluto

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`Mediator`](../interfaces/Domain.Mediator.md) |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Implementation of

[MediatorStore](../interfaces/MediatorStore.md).[storeMediator](../interfaces/MediatorStore.md#storemediator)

#### Defined in

[src/edge-agent/mediator/PlutoMediatorStore.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/edge-agent/mediator/PlutoMediatorStore.ts#L29)
