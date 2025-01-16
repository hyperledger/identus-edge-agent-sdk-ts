[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PolluxError](../modules/Domain.PolluxError.md) / RevocationError

# Class: RevocationError

[Domain](../modules/Domain.md).[PolluxError](../modules/Domain.PolluxError.md).RevocationError

general Revocation error, message should contain details

## Hierarchy

- `Error`

  ↳ **`RevocationError`**

## Table of contents

### Constructors

- [constructor](Domain.PolluxError.RevocationError.md#constructor)

### Properties

- [cause](Domain.PolluxError.RevocationError.md#cause)
- [message](Domain.PolluxError.RevocationError.md#message)
- [name](Domain.PolluxError.RevocationError.md#name)
- [stack](Domain.PolluxError.RevocationError.md#stack)
- [prepareStackTrace](Domain.PolluxError.RevocationError.md#preparestacktrace)
- [stackTraceLimit](Domain.PolluxError.RevocationError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PolluxError.RevocationError.md#capturestacktrace)

## Constructors

### constructor

• **new RevocationError**(`message?`): [`RevocationError`](Domain.PolluxError.RevocationError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`RevocationError`](Domain.PolluxError.RevocationError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1059

• **new RevocationError**(`message?`, `options?`): [`RevocationError`](Domain.PolluxError.RevocationError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Returns

[`RevocationError`](Domain.PolluxError.RevocationError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1059

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
