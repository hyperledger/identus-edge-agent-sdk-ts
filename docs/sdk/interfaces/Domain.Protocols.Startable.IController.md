[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [Protocols](../modules/Domain.Protocols.md) / [Startable](../modules/Domain.Protocols.Startable.md) / IController

# Interface: IController

[Protocols](../modules/Domain.Protocols.md).[Startable](../modules/Domain.Protocols.Startable.md).IController

define the structure of a Startable entity

## Implemented by

- [`Controller`](../classes/Domain.Protocols.Startable.Controller.md)

## Table of contents

### Properties

- [state](Domain.Protocols.Startable.IController.md#state)

### Methods

- [start](Domain.Protocols.Startable.IController.md#start)
- [stop](Domain.Protocols.Startable.IController.md#stop)

## Properties

### state

• **state**: [`State`](../enums/Domain.Protocols.Startable.State.md)

current status of the entity

#### Defined in

[src/domain/protocols/Startable.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/domain/protocols/Startable.ts#L22)

## Methods

### start

▸ **start**(): `Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

#### Defined in

[src/domain/protocols/Startable.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/domain/protocols/Startable.ts#L30)

___

### stop

▸ **stop**(): `Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

#### Defined in

[src/domain/protocols/Startable.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/domain/protocols/Startable.ts#L38)
