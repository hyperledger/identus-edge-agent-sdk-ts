[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / InvalidProposeCredentialBodyError

# Class: InvalidProposeCredentialBodyError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).InvalidProposeCredentialBodyError

## Hierarchy

- `Error`

  ↳ **`InvalidProposeCredentialBodyError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.InvalidProposeCredentialBodyError.md#constructor)

### Properties

- [cause](Domain.AgentError.InvalidProposeCredentialBodyError.md#cause)
- [message](Domain.AgentError.InvalidProposeCredentialBodyError.md#message)
- [name](Domain.AgentError.InvalidProposeCredentialBodyError.md#name)
- [stack](Domain.AgentError.InvalidProposeCredentialBodyError.md#stack)
- [prepareStackTrace](Domain.AgentError.InvalidProposeCredentialBodyError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.InvalidProposeCredentialBodyError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.InvalidProposeCredentialBodyError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidProposeCredentialBodyError**(`message?`): [`InvalidProposeCredentialBodyError`](Domain.AgentError.InvalidProposeCredentialBodyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidProposeCredentialBodyError`](Domain.AgentError.InvalidProposeCredentialBodyError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:170](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/errors/Agent.ts#L170)

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
