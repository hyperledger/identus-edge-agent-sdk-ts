[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [CommonError](../modules/Domain.CommonError.md) / UnknownError

# Class: UnknownError

[Domain](../modules/Domain.md).[CommonError](../modules/Domain.CommonError.md).UnknownError

## Hierarchy

- [`SDKError`](Domain.CommonError.SDKError.md)

  ↳ **`UnknownError`**

## Table of contents

### Constructors

- [constructor](Domain.CommonError.UnknownError.md#constructor)

### Properties

- [cause](Domain.CommonError.UnknownError.md#cause)
- [message](Domain.CommonError.UnknownError.md#message)
- [name](Domain.CommonError.UnknownError.md#name)
- [stack](Domain.CommonError.UnknownError.md#stack)
- [prepareStackTrace](Domain.CommonError.UnknownError.md#preparestacktrace)
- [stackTraceLimit](Domain.CommonError.UnknownError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.CommonError.UnknownError.md#capturestacktrace)

## Constructors

### constructor

• **new UnknownError**(): [`UnknownError`](Domain.CommonError.UnknownError.md)

#### Returns

[`UnknownError`](Domain.CommonError.UnknownError.md)

#### Overrides

[SDKError](Domain.CommonError.SDKError.md).[constructor](Domain.CommonError.SDKError.md#constructor)

#### Defined in

[src/domain/models/errors/Common.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/errors/Common.ts#L9)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[cause](Domain.CommonError.SDKError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[message](Domain.CommonError.SDKError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[name](Domain.CommonError.SDKError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[stack](Domain.CommonError.SDKError.md#stack)

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

[SDKError](Domain.CommonError.SDKError.md).[prepareStackTrace](Domain.CommonError.SDKError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:27

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[stackTraceLimit](Domain.CommonError.SDKError.md#stacktracelimit)

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

[SDKError](Domain.CommonError.SDKError.md).[captureStackTrace](Domain.CommonError.SDKError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:20
