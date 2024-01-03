[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [ApolloError](../modules/Domain.ApolloError.md) / InvalidMnemonicWord

# Class: InvalidMnemonicWord

[Domain](../modules/Domain.md).[ApolloError](../modules/Domain.ApolloError.md).InvalidMnemonicWord

## Hierarchy

- `Error`

  ↳ **`InvalidMnemonicWord`**

## Table of contents

### Constructors

- [constructor](Domain.ApolloError.InvalidMnemonicWord.md#constructor)

### Properties

- [cause](Domain.ApolloError.InvalidMnemonicWord.md#cause)
- [message](Domain.ApolloError.InvalidMnemonicWord.md#message)
- [name](Domain.ApolloError.InvalidMnemonicWord.md#name)
- [stack](Domain.ApolloError.InvalidMnemonicWord.md#stack)
- [prepareStackTrace](Domain.ApolloError.InvalidMnemonicWord.md#preparestacktrace)
- [stackTraceLimit](Domain.ApolloError.InvalidMnemonicWord.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.ApolloError.InvalidMnemonicWord.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidMnemonicWord**(`message?`): [`InvalidMnemonicWord`](Domain.ApolloError.InvalidMnemonicWord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidMnemonicWord`](Domain.ApolloError.InvalidMnemonicWord.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Apollo.ts:2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/errors/Apollo.ts#L2)

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
