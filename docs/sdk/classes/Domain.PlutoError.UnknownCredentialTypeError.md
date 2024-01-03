[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PlutoError](../modules/Domain.PlutoError.md) / UnknownCredentialTypeError

# Class: UnknownCredentialTypeError

[Domain](../modules/Domain.md).[PlutoError](../modules/Domain.PlutoError.md).UnknownCredentialTypeError

## Hierarchy

- `Error`

  ↳ **`UnknownCredentialTypeError`**

## Table of contents

### Constructors

- [constructor](Domain.PlutoError.UnknownCredentialTypeError.md#constructor)

### Properties

- [cause](Domain.PlutoError.UnknownCredentialTypeError.md#cause)
- [message](Domain.PlutoError.UnknownCredentialTypeError.md#message)
- [name](Domain.PlutoError.UnknownCredentialTypeError.md#name)
- [stack](Domain.PlutoError.UnknownCredentialTypeError.md#stack)
- [prepareStackTrace](Domain.PlutoError.UnknownCredentialTypeError.md#preparestacktrace)
- [stackTraceLimit](Domain.PlutoError.UnknownCredentialTypeError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PlutoError.UnknownCredentialTypeError.md#capturestacktrace)

## Constructors

### constructor

• **new UnknownCredentialTypeError**(`message?`): [`UnknownCredentialTypeError`](Domain.PlutoError.UnknownCredentialTypeError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`UnknownCredentialTypeError`](Domain.PlutoError.UnknownCredentialTypeError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1059

• **new UnknownCredentialTypeError**(`message?`, `options?`): [`UnknownCredentialTypeError`](Domain.PlutoError.UnknownCredentialTypeError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Returns

[`UnknownCredentialTypeError`](Domain.PlutoError.UnknownCredentialTypeError.md)

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

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

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

node_modules/@types/node/globals.d.ts:4
