[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / InvalidDerivationPath

# Class: InvalidDerivationPath

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).InvalidDerivationPath

## Hierarchy

- `Error`

  ↳ **`InvalidDerivationPath`**

## Table of contents

### Constructors

- [constructor](Domain.ApolloError.InvalidDerivationPath.md#constructor)

### Properties

- [cause](Domain.ApolloError.InvalidDerivationPath.md#cause)
- [message](Domain.ApolloError.InvalidDerivationPath.md#message)
- [name](Domain.ApolloError.InvalidDerivationPath.md#name)
- [stack](Domain.ApolloError.InvalidDerivationPath.md#stack)
- [prepareStackTrace](Domain.ApolloError.InvalidDerivationPath.md#preparestacktrace)
- [stackTraceLimit](Domain.ApolloError.InvalidDerivationPath.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApolloError.InvalidDerivationPath.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidDerivationPath**(`message?`): [`InvalidDerivationPath`](Domain.ApolloError.InvalidDerivationPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidDerivationPath`](Domain.ApolloError.InvalidDerivationPath.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Apollo.ts:30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/errors/Apollo.ts#L30)

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
