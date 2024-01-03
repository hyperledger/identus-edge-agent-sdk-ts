[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PlutoError](../modules/Domain.PlutoError.md) / DatabaseServiceAlreadyRunning

# Class: DatabaseServiceAlreadyRunning

[Domain](../modules/Domain.md).[PlutoError](../modules/Domain.PlutoError.md).DatabaseServiceAlreadyRunning

## Hierarchy

- `Error`

  ↳ **`DatabaseServiceAlreadyRunning`**

## Table of contents

### Constructors

- [constructor](Domain.PlutoError.DatabaseServiceAlreadyRunning.md#constructor)

### Properties

- [cause](Domain.PlutoError.DatabaseServiceAlreadyRunning.md#cause)
- [message](Domain.PlutoError.DatabaseServiceAlreadyRunning.md#message)
- [name](Domain.PlutoError.DatabaseServiceAlreadyRunning.md#name)
- [stack](Domain.PlutoError.DatabaseServiceAlreadyRunning.md#stack)
- [prepareStackTrace](Domain.PlutoError.DatabaseServiceAlreadyRunning.md#preparestacktrace)
- [stackTraceLimit](Domain.PlutoError.DatabaseServiceAlreadyRunning.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PlutoError.DatabaseServiceAlreadyRunning.md#capturestacktrace)

## Constructors

### constructor

• **new DatabaseServiceAlreadyRunning**(`message?`): [`DatabaseServiceAlreadyRunning`](Domain.PlutoError.DatabaseServiceAlreadyRunning.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`DatabaseServiceAlreadyRunning`](Domain.PlutoError.DatabaseServiceAlreadyRunning.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1059

• **new DatabaseServiceAlreadyRunning**(`message?`, `options?`): [`DatabaseServiceAlreadyRunning`](Domain.PlutoError.DatabaseServiceAlreadyRunning.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Returns

[`DatabaseServiceAlreadyRunning`](Domain.PlutoError.DatabaseServiceAlreadyRunning.md)

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
