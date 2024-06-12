[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / InvalidURLError

# Class: InvalidURLError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).InvalidURLError

## Hierarchy

- `Error`

  ↳ **`InvalidURLError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.InvalidURLError.md#constructor)

### Properties

- [cause](Domain.AgentError.InvalidURLError.md#cause)
- [message](Domain.AgentError.InvalidURLError.md#message)
- [name](Domain.AgentError.InvalidURLError.md#name)
- [stack](Domain.AgentError.InvalidURLError.md#stack)
- [prepareStackTrace](Domain.AgentError.InvalidURLError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.InvalidURLError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.InvalidURLError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidURLError**(`message?`): [`InvalidURLError`](Domain.AgentError.InvalidURLError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"Invalid URL"` |

#### Returns

[`InvalidURLError`](Domain.AgentError.InvalidURLError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/errors/Agent.ts#L2)

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
