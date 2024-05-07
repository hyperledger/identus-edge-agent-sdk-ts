[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / MissingKeyParameters

# Class: MissingKeyParameters

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).MissingKeyParameters

## Hierarchy

- `Error`

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

• **new MissingKeyParameters**(`missing`): [`MissingKeyParameters`](Domain.ApolloError.MissingKeyParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `missing` | `string`[] |

#### Returns

[`MissingKeyParameters`](Domain.ApolloError.MissingKeyParameters.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Apollo.ts:56](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/errors/Apollo.ts#L56)

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
