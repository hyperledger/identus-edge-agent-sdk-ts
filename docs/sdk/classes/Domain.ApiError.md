[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / ApiError

# Class: ApiError

[Domain](../modules/Domain.md).ApiError

## Hierarchy

- `Error`

  ↳ **`ApiError`**

## Table of contents

### Constructors

- [constructor](Domain.ApiError.md#constructor)

### Properties

- [body](Domain.ApiError.md#body)
- [cause](Domain.ApiError.md#cause)
- [message](Domain.ApiError.md#message)
- [name](Domain.ApiError.md#name)
- [stack](Domain.ApiError.md#stack)
- [status](Domain.ApiError.md#status)
- [statusText](Domain.ApiError.md#statustext)
- [prepareStackTrace](Domain.ApiError.md#preparestacktrace)
- [stackTraceLimit](Domain.ApiError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApiError.md#capturestacktrace)

## Constructors

### constructor

• **new ApiError**(`status`, `statusText`, `body`): [`ApiError`](Domain.ApiError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `statusText` | `string` |
| `body` | `any` |

#### Returns

[`ApiError`](Domain.ApiError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/Api.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Api.ts#L52)

## Properties

### body

• `Readonly` **body**: `any`

#### Defined in

[src/domain/models/Api.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Api.ts#L55)

___

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

### status

• `Readonly` **status**: `number`

#### Defined in

[src/domain/models/Api.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Api.ts#L53)

___

### statusText

• `Readonly` **statusText**: `string`

#### Defined in

[src/domain/models/Api.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Api.ts#L54)

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
