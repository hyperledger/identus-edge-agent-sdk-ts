[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / MissingKeyParameters

# Class: MissingKeyParameters

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).MissingKeyParameters

thrown when expected parameter is missing for Key operation

## Hierarchy

- [`SDKError`](Domain.CommonError.SDKError.md)

  ↳ **`MissingKeyParameters`**

## Table of contents

### Constructors

- [constructor](Domain.ApolloError.MissingKeyParameters.md#constructor)

### Properties

- [cause](Domain.ApolloError.MissingKeyParameters.md#cause)
- [message](Domain.ApolloError.MissingKeyParameters.md#message)
- [name](Domain.ApolloError.MissingKeyParameters.md#name)
- [stack](Domain.ApolloError.MissingKeyParameters.md#stack)
- [prepareStackTrace](Domain.ApolloError.MissingKeyParameters.md#preparestacktrace)
- [stackTraceLimit](Domain.ApolloError.MissingKeyParameters.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApolloError.MissingKeyParameters.md#capturestacktrace)

## Constructors

### constructor

• **new MissingKeyParameters**(`...missing`): [`MissingKeyParameters`](Domain.ApolloError.MissingKeyParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...missing` | `string`[] |

#### Returns

[`MissingKeyParameters`](Domain.ApolloError.MissingKeyParameters.md)

#### Overrides

[SDKError](Domain.CommonError.SDKError.md).[constructor](Domain.CommonError.SDKError.md#constructor)

#### Defined in

[src/domain/models/errors/Apollo.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/errors/Apollo.ts#L78)

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
