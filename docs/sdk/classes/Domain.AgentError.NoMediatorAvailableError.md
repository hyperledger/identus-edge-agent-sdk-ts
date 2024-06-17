[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / NoMediatorAvailableError

# Class: NoMediatorAvailableError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).NoMediatorAvailableError

## Hierarchy

- `Error`

  ↳ **`NoMediatorAvailableError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.NoMediatorAvailableError.md#constructor)

### Properties

- [cause](Domain.AgentError.NoMediatorAvailableError.md#cause)
- [message](Domain.AgentError.NoMediatorAvailableError.md#message)
- [name](Domain.AgentError.NoMediatorAvailableError.md#name)
- [stack](Domain.AgentError.NoMediatorAvailableError.md#stack)
- [prepareStackTrace](Domain.AgentError.NoMediatorAvailableError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.NoMediatorAvailableError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.NoMediatorAvailableError.md#capturestacktrace)

## Constructors

### constructor

• **new NoMediatorAvailableError**(`message?`): [`NoMediatorAvailableError`](Domain.AgentError.NoMediatorAvailableError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`NoMediatorAvailableError`](Domain.AgentError.NoMediatorAvailableError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:193](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/errors/Agent.ts#L193)

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
