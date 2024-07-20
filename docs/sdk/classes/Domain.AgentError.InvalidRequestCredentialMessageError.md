[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / InvalidRequestCredentialMessageError

# Class: InvalidRequestCredentialMessageError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).InvalidRequestCredentialMessageError

## Hierarchy

- `Error`

  ↳ **`InvalidRequestCredentialMessageError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.InvalidRequestCredentialMessageError.md#constructor)

### Properties

- [cause](Domain.AgentError.InvalidRequestCredentialMessageError.md#cause)
- [message](Domain.AgentError.InvalidRequestCredentialMessageError.md#message)
- [name](Domain.AgentError.InvalidRequestCredentialMessageError.md#name)
- [stack](Domain.AgentError.InvalidRequestCredentialMessageError.md#stack)
- [prepareStackTrace](Domain.AgentError.InvalidRequestCredentialMessageError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.InvalidRequestCredentialMessageError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.InvalidRequestCredentialMessageError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidRequestCredentialMessageError**(`message?`): [`InvalidRequestCredentialMessageError`](Domain.AgentError.InvalidRequestCredentialMessageError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidRequestCredentialMessageError`](Domain.AgentError.InvalidRequestCredentialMessageError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:104](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/domain/models/errors/Agent.ts#L104)

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
