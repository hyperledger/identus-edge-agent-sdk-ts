[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / InvalidMessageError

# Class: InvalidMessageError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).InvalidMessageError

## Hierarchy

- `Error`

  ↳ **`InvalidMessageError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.InvalidMessageError.md#constructor)

### Properties

- [cause](Domain.AgentError.InvalidMessageError.md#cause)
- [message](Domain.AgentError.InvalidMessageError.md#message)
- [name](Domain.AgentError.InvalidMessageError.md#name)
- [stack](Domain.AgentError.InvalidMessageError.md#stack)
- [prepareStackTrace](Domain.AgentError.InvalidMessageError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.InvalidMessageError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.InvalidMessageError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidMessageError**(`message?`): [`InvalidMessageError`](Domain.AgentError.InvalidMessageError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"Invalid Message"` |

#### Returns

[`InvalidMessageError`](Domain.AgentError.InvalidMessageError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/errors/Agent.ts#L8)

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
