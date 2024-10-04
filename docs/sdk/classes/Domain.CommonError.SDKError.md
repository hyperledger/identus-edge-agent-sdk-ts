[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [CommonError](../modules/Domain.CommonError.md) / SDKError

# Class: SDKError

[Domain](../modules/Domain.md).[CommonError](../modules/Domain.CommonError.md).SDKError

## Hierarchy

- `Error`

  ↳ **`SDKError`**

  ↳↳ [`MnemonicWordError`](Domain.ApolloError.MnemonicWordError.md)

  ↳↳ [`MnemonicLengthError`](Domain.ApolloError.MnemonicLengthError.md)

  ↳↳ [`CouldNotParseMessageString`](Domain.ApolloError.CouldNotParseMessageString.md)

  ↳↳ [`KeyRestoratonFailed`](Domain.ApolloError.KeyRestoratonFailed.md)

  ↳↳ [`InvalidKeyCurve`](Domain.ApolloError.InvalidKeyCurve.md)

  ↳↳ [`InvalidKeyType`](Domain.ApolloError.InvalidKeyType.md)

  ↳↳ [`MissingKeyParameters`](Domain.ApolloError.MissingKeyParameters.md)

  ↳↳ [`KeyInitializationError`](Domain.ApolloError.KeyInitializationError.md)

  ↳↳ [`InvalidDerivationPath`](Domain.ApolloError.InvalidDerivationPath.md)

  ↳↳ [`ApolloLibError`](Domain.ApolloError.ApolloLibError.md)

  ↳↳ [`UnknownError`](Domain.CommonError.UnknownError.md)

  ↳↳ [`ExpectError`](Domain.CommonError.ExpectError.md)

  ↳↳ [`ValidationError`](Domain.CommonError.ValidationError.md)

## Table of contents

### Constructors

- [constructor](Domain.CommonError.SDKError.md#constructor)

### Properties

- [cause](Domain.CommonError.SDKError.md#cause)
- [message](Domain.CommonError.SDKError.md#message)
- [name](Domain.CommonError.SDKError.md#name)
- [stack](Domain.CommonError.SDKError.md#stack)
- [prepareStackTrace](Domain.CommonError.SDKError.md#preparestacktrace)
- [stackTraceLimit](Domain.CommonError.SDKError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.CommonError.SDKError.md#capturestacktrace)

## Constructors

### constructor

• **new SDKError**(`code`, `message`): [`SDKError`](Domain.CommonError.SDKError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `message` | `string` |

#### Returns

[`SDKError`](Domain.CommonError.SDKError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Common.ts:2](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/models/errors/Common.ts#L2)

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
