[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PolluxError](../modules/Domain.PolluxError.md) / InvalidPresentationError

# Class: InvalidPresentationError

[Domain](../modules/Domain.md).[PolluxError](../modules/Domain.PolluxError.md).InvalidPresentationError

## Hierarchy

- `Error`

  ↳ **`InvalidPresentationError`**

## Table of contents

### Constructors

- [constructor](Domain.PolluxError.InvalidPresentationError.md#constructor)

### Properties

- [cause](Domain.PolluxError.InvalidPresentationError.md#cause)
- [message](Domain.PolluxError.InvalidPresentationError.md#message)
- [name](Domain.PolluxError.InvalidPresentationError.md#name)
- [stack](Domain.PolluxError.InvalidPresentationError.md#stack)
- [prepareStackTrace](Domain.PolluxError.InvalidPresentationError.md#preparestacktrace)
- [stackTraceLimit](Domain.PolluxError.InvalidPresentationError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PolluxError.InvalidPresentationError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidPresentationError**(`message?`): [`InvalidPresentationError`](Domain.PolluxError.InvalidPresentationError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidPresentationError`](Domain.PolluxError.InvalidPresentationError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Pollux.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/errors/Pollux.ts#L74)

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
