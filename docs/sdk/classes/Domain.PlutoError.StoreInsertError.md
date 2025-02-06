[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PlutoError](../modules/Domain.PlutoError.md) / StoreInsertError

# Class: StoreInsertError

[Domain](../modules/Domain.md).[PlutoError](../modules/Domain.PlutoError.md).StoreInsertError

## Hierarchy

- `Error`

  ↳ **`StoreInsertError`**

## Table of contents

### Constructors

- [constructor](Domain.PlutoError.StoreInsertError.md#constructor)

### Properties

- [cause](Domain.PlutoError.StoreInsertError.md#cause)
- [message](Domain.PlutoError.StoreInsertError.md#message)
- [name](Domain.PlutoError.StoreInsertError.md#name)
- [stack](Domain.PlutoError.StoreInsertError.md#stack)
- [prepareStackTrace](Domain.PlutoError.StoreInsertError.md#preparestacktrace)
- [stackTraceLimit](Domain.PlutoError.StoreInsertError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PlutoError.StoreInsertError.md#capturestacktrace)

## Constructors

### constructor

• **new StoreInsertError**(`message?`): [`StoreInsertError`](Domain.PlutoError.StoreInsertError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`StoreInsertError`](Domain.PlutoError.StoreInsertError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Pluto.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/domain/models/errors/Pluto.ts#L20)

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
