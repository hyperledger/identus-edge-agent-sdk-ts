[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / UnknownCredentialBodyError

# Class: UnknownCredentialBodyError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).UnknownCredentialBodyError

## Hierarchy

- `Error`

  ↳ **`UnknownCredentialBodyError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.UnknownCredentialBodyError.md#constructor)

### Properties

- [cause](Domain.AgentError.UnknownCredentialBodyError.md#cause)
- [message](Domain.AgentError.UnknownCredentialBodyError.md#message)
- [name](Domain.AgentError.UnknownCredentialBodyError.md#name)
- [stack](Domain.AgentError.UnknownCredentialBodyError.md#stack)
- [prepareStackTrace](Domain.AgentError.UnknownCredentialBodyError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.UnknownCredentialBodyError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.UnknownCredentialBodyError.md#capturestacktrace)

## Constructors

### constructor

• **new UnknownCredentialBodyError**(): [`UnknownCredentialBodyError`](Domain.AgentError.UnknownCredentialBodyError.md)

#### Returns

[`UnknownCredentialBodyError`](Domain.AgentError.UnknownCredentialBodyError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:187](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/errors/Agent.ts#L187)

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
