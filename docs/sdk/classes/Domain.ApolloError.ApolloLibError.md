[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / ApolloLibError

# Class: ApolloLibError

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).ApolloLibError

thrown when Apollo library returns unexpected result

## Hierarchy

- [`SDKError`](Domain.CommonError.SDKError.md)

  ↳ **`ApolloLibError`**

## Table of contents

### Constructors

- [constructor](Domain.ApolloError.ApolloLibError.md#constructor)

### Properties

- [cause](Domain.ApolloError.ApolloLibError.md#cause)
- [message](Domain.ApolloError.ApolloLibError.md#message)
- [name](Domain.ApolloError.ApolloLibError.md#name)
- [stack](Domain.ApolloError.ApolloLibError.md#stack)
- [prepareStackTrace](Domain.ApolloError.ApolloLibError.md#preparestacktrace)
- [stackTraceLimit](Domain.ApolloError.ApolloLibError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApolloError.ApolloLibError.md#capturestacktrace)

## Constructors

### constructor

• **new ApolloLibError**(`message`): [`ApolloLibError`](Domain.ApolloError.ApolloLibError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`ApolloLibError`](Domain.ApolloError.ApolloLibError.md)

#### Overrides

[SDKError](Domain.CommonError.SDKError.md).[constructor](Domain.CommonError.SDKError.md#constructor)

#### Defined in

[src/domain/models/errors/Apollo.ts:104](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/models/errors/Apollo.ts#L104)

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
