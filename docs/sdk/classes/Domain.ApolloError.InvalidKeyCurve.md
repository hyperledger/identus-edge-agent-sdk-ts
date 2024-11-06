[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / InvalidKeyCurve

# Class: InvalidKeyCurve

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).InvalidKeyCurve

thrown when given Key Curve is not supported

## Hierarchy

- [`SDKError`](Domain.CommonError.SDKError.md)

  ↳ **`InvalidKeyCurve`**

## Table of contents

### Constructors

- [constructor](Domain.ApolloError.InvalidKeyCurve.md#constructor)

### Properties

- [cause](Domain.ApolloError.InvalidKeyCurve.md#cause)
- [message](Domain.ApolloError.InvalidKeyCurve.md#message)
- [name](Domain.ApolloError.InvalidKeyCurve.md#name)
- [stack](Domain.ApolloError.InvalidKeyCurve.md#stack)
- [prepareStackTrace](Domain.ApolloError.InvalidKeyCurve.md#preparestacktrace)
- [stackTraceLimit](Domain.ApolloError.InvalidKeyCurve.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApolloError.InvalidKeyCurve.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidKeyCurve**(`keyCurve?`): [`InvalidKeyCurve`](Domain.ApolloError.InvalidKeyCurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyCurve?` | `string` |

#### Returns

[`InvalidKeyCurve`](Domain.ApolloError.InvalidKeyCurve.md)

#### Overrides

[SDKError](Domain.CommonError.SDKError.md).[constructor](Domain.CommonError.SDKError.md#constructor)

#### Defined in

[src/domain/models/errors/Apollo.ts:57](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/errors/Apollo.ts#L57)

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
