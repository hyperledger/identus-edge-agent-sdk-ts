[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / InvalidPickupDeliveryMessageError

# Class: InvalidPickupDeliveryMessageError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).InvalidPickupDeliveryMessageError

## Hierarchy

- `Error`

  ↳ **`InvalidPickupDeliveryMessageError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.InvalidPickupDeliveryMessageError.md#constructor)

### Properties

- [cause](Domain.AgentError.InvalidPickupDeliveryMessageError.md#cause)
- [message](Domain.AgentError.InvalidPickupDeliveryMessageError.md#message)
- [name](Domain.AgentError.InvalidPickupDeliveryMessageError.md#name)
- [stack](Domain.AgentError.InvalidPickupDeliveryMessageError.md#stack)
- [prepareStackTrace](Domain.AgentError.InvalidPickupDeliveryMessageError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.InvalidPickupDeliveryMessageError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.InvalidPickupDeliveryMessageError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidPickupDeliveryMessageError**(): [`InvalidPickupDeliveryMessageError`](Domain.AgentError.InvalidPickupDeliveryMessageError.md)

#### Returns

[`InvalidPickupDeliveryMessageError`](Domain.AgentError.InvalidPickupDeliveryMessageError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/errors/Agent.ts#L78)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:27

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:29

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:20
