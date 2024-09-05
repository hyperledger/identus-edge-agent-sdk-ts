[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / InvalidOfferCredentialBodyError

# Class: InvalidOfferCredentialBodyError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).InvalidOfferCredentialBodyError

## Hierarchy

- `Error`

  ↳ **`InvalidOfferCredentialBodyError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.InvalidOfferCredentialBodyError.md#constructor)

### Properties

- [cause](Domain.AgentError.InvalidOfferCredentialBodyError.md#cause)
- [message](Domain.AgentError.InvalidOfferCredentialBodyError.md#message)
- [name](Domain.AgentError.InvalidOfferCredentialBodyError.md#name)
- [stack](Domain.AgentError.InvalidOfferCredentialBodyError.md#stack)
- [prepareStackTrace](Domain.AgentError.InvalidOfferCredentialBodyError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.InvalidOfferCredentialBodyError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.InvalidOfferCredentialBodyError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidOfferCredentialBodyError**(`message?`): [`InvalidOfferCredentialBodyError`](Domain.AgentError.InvalidOfferCredentialBodyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidOfferCredentialBodyError`](Domain.AgentError.InvalidOfferCredentialBodyError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:170](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/domain/models/errors/Agent.ts#L170)

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
