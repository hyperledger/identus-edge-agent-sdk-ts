[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / InvalidProposePresentationMessageError

# Class: InvalidProposePresentationMessageError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).InvalidProposePresentationMessageError

## Hierarchy

- `Error`

  ↳ **`InvalidProposePresentationMessageError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.InvalidProposePresentationMessageError.md#constructor)

### Properties

- [cause](Domain.AgentError.InvalidProposePresentationMessageError.md#cause)
- [message](Domain.AgentError.InvalidProposePresentationMessageError.md#message)
- [name](Domain.AgentError.InvalidProposePresentationMessageError.md#name)
- [stack](Domain.AgentError.InvalidProposePresentationMessageError.md#stack)
- [prepareStackTrace](Domain.AgentError.InvalidProposePresentationMessageError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.InvalidProposePresentationMessageError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.InvalidProposePresentationMessageError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidProposePresentationMessageError**(`message?`): [`InvalidProposePresentationMessageError`](Domain.AgentError.InvalidProposePresentationMessageError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidProposePresentationMessageError`](Domain.AgentError.InvalidProposePresentationMessageError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:119](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/errors/Agent.ts#L119)

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
