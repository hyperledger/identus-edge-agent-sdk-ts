[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / CouldNotParseMessageString

# Class: CouldNotParseMessageString

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).CouldNotParseMessageString

// ??

## Hierarchy

- [`SDKError`](Domain.CommonError.SDKError.md)

  ↳ **`CouldNotParseMessageString`**

## Table of contents

### Constructors

- [constructor](Domain.ApolloError.CouldNotParseMessageString.md#constructor)

### Properties

- [cause](Domain.ApolloError.CouldNotParseMessageString.md#cause)
- [message](Domain.ApolloError.CouldNotParseMessageString.md#message)
- [name](Domain.ApolloError.CouldNotParseMessageString.md#name)
- [stack](Domain.ApolloError.CouldNotParseMessageString.md#stack)
- [prepareStackTrace](Domain.ApolloError.CouldNotParseMessageString.md#preparestacktrace)
- [stackTraceLimit](Domain.ApolloError.CouldNotParseMessageString.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApolloError.CouldNotParseMessageString.md#capturestacktrace)

## Constructors

### constructor

• **new CouldNotParseMessageString**(): [`CouldNotParseMessageString`](Domain.ApolloError.CouldNotParseMessageString.md)

#### Returns

[`CouldNotParseMessageString`](Domain.ApolloError.CouldNotParseMessageString.md)

#### Overrides

[SDKError](Domain.CommonError.SDKError.md).[constructor](Domain.CommonError.SDKError.md#constructor)

#### Defined in

[src/domain/models/errors/Apollo.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/domain/models/errors/Apollo.ts#L26)

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
