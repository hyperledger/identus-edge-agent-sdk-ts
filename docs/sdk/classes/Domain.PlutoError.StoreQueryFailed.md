[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PlutoError](../modules/Domain.PlutoError.md) / StoreQueryFailed

# Class: StoreQueryFailed

[Domain](../modules/Domain.md).[PlutoError](../modules/Domain.PlutoError.md).StoreQueryFailed

## Hierarchy

- `Error`

  ↳ **`StoreQueryFailed`**

## Table of contents

### Constructors

- [constructor](Domain.PlutoError.StoreQueryFailed.md#constructor)

### Properties

- [cause](Domain.PlutoError.StoreQueryFailed.md#cause)
- [message](Domain.PlutoError.StoreQueryFailed.md#message)
- [name](Domain.PlutoError.StoreQueryFailed.md#name)
- [stack](Domain.PlutoError.StoreQueryFailed.md#stack)
- [prepareStackTrace](Domain.PlutoError.StoreQueryFailed.md#preparestacktrace)
- [stackTraceLimit](Domain.PlutoError.StoreQueryFailed.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PlutoError.StoreQueryFailed.md#capturestacktrace)

## Constructors

### constructor

• **new StoreQueryFailed**(`message?`): [`StoreQueryFailed`](Domain.PlutoError.StoreQueryFailed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`StoreQueryFailed`](Domain.PlutoError.StoreQueryFailed.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Pluto.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/errors/Pluto.ts#L26)

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
