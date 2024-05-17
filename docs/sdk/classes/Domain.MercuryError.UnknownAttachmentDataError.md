[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [MercuryError](../modules/Domain.MercuryError.md) / UnknownAttachmentDataError

# Class: UnknownAttachmentDataError

[Domain](../modules/Domain.md).[MercuryError](../modules/Domain.MercuryError.md).UnknownAttachmentDataError

## Hierarchy

- `Error`

  ↳ **`UnknownAttachmentDataError`**

## Table of contents

### Constructors

- [constructor](Domain.MercuryError.UnknownAttachmentDataError.md#constructor)

### Properties

- [cause](Domain.MercuryError.UnknownAttachmentDataError.md#cause)
- [message](Domain.MercuryError.UnknownAttachmentDataError.md#message)
- [name](Domain.MercuryError.UnknownAttachmentDataError.md#name)
- [stack](Domain.MercuryError.UnknownAttachmentDataError.md#stack)
- [prepareStackTrace](Domain.MercuryError.UnknownAttachmentDataError.md#preparestacktrace)
- [stackTraceLimit](Domain.MercuryError.UnknownAttachmentDataError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.MercuryError.UnknownAttachmentDataError.md#capturestacktrace)

## Constructors

### constructor

• **new UnknownAttachmentDataError**(`message?`): [`UnknownAttachmentDataError`](Domain.MercuryError.UnknownAttachmentDataError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`UnknownAttachmentDataError`](Domain.MercuryError.UnknownAttachmentDataError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Mercury.ts:38](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/errors/Mercury.ts#L38)

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
