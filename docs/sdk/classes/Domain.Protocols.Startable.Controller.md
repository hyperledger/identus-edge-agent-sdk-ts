[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [Protocols](../modules/Domain.Protocols.md) / [Startable](../modules/Domain.Protocols.Startable.md) / Controller

# Class: Controller

[Protocols](../modules/Domain.Protocols.md).[Startable](../modules/Domain.Protocols.Startable.md).Controller

define the structure of a Startable entity

## Hierarchy

- **`Controller`**

  ↳ [`Agent`](Agent.md)

  ↳ [`Pluto`](Pluto-1.md)

  ↳ [`OIDCAgent`](OIDCAgent.md)

## Implements

- [`IController`](../interfaces/Domain.Protocols.Startable.IController.md)

## Table of contents

### Constructors

- [constructor](Domain.Protocols.Startable.Controller.md#constructor)

### Properties

- [state](Domain.Protocols.Startable.Controller.md#state)

### Methods

- [\_start](Domain.Protocols.Startable.Controller.md#_start)
- [\_stop](Domain.Protocols.Startable.Controller.md#_stop)
- [start](Domain.Protocols.Startable.Controller.md#start)
- [stop](Domain.Protocols.Startable.Controller.md#stop)

## Constructors

### constructor

• **new Controller**(): [`Controller`](Domain.Protocols.Startable.Controller.md)

#### Returns

[`Controller`](Domain.Protocols.Startable.Controller.md)

## Properties

### state

• **state**: [`State`](../enums/Domain.Protocols.Startable.State.md) = `State.STOPPED`

current status of the entity

#### Implementation of

[IController](../interfaces/Domain.Protocols.Startable.IController.md).[state](../interfaces/Domain.Protocols.Startable.IController.md#state)

#### Defined in

[src/domain/protocols/Startable.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/protocols/Startable.ts#L42)

## Methods

### \_start

▸ **_start**(): `Promise`\<`void`\>

internal method to define specific startup routine

used by `start()` internally

implement with `protected` to keep hidden from class interface

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/protocols/Startable.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/protocols/Startable.ts#L51)

___

### \_stop

▸ **_stop**(): `Promise`\<`void`\>

internal method to define teardown routine

used by `stop()` internally

implement with `protected` to keep hidden from class interface

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/protocols/Startable.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/protocols/Startable.ts#L60)

___

### start

▸ **start**(): `Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

#### Implementation of

[IController](../interfaces/Domain.Protocols.Startable.IController.md).[start](../interfaces/Domain.Protocols.Startable.IController.md#start)

#### Defined in

[src/domain/protocols/Startable.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/protocols/Startable.ts#L62)

___

### stop

▸ **stop**(): `Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enums/Domain.Protocols.Startable.State.md)\>

#### Implementation of

[IController](../interfaces/Domain.Protocols.Startable.IController.md).[stop](../interfaces/Domain.Protocols.Startable.IController.md#stop)

#### Defined in

[src/domain/protocols/Startable.ts:72](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/protocols/Startable.ts#L72)
