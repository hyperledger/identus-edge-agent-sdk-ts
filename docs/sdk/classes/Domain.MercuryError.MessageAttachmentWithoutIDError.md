[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [MercuryError](../modules/Domain.MercuryError.md) / MessageAttachmentWithoutIDError

# Class: MessageAttachmentWithoutIDError

[Domain](../modules/Domain.md).[MercuryError](../modules/Domain.MercuryError.md).MessageAttachmentWithoutIDError

## Hierarchy

- `Error`

  ↳ **`MessageAttachmentWithoutIDError`**

## Table of contents

### Constructors

- [constructor](Domain.MercuryError.MessageAttachmentWithoutIDError.md#constructor)

### Properties

- [cause](Domain.MercuryError.MessageAttachmentWithoutIDError.md#cause)
- [message](Domain.MercuryError.MessageAttachmentWithoutIDError.md#message)
- [name](Domain.MercuryError.MessageAttachmentWithoutIDError.md#name)
- [stack](Domain.MercuryError.MessageAttachmentWithoutIDError.md#stack)
- [prepareStackTrace](Domain.MercuryError.MessageAttachmentWithoutIDError.md#preparestacktrace)
- [stackTraceLimit](Domain.MercuryError.MessageAttachmentWithoutIDError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.MercuryError.MessageAttachmentWithoutIDError.md#capturestacktrace)

## Constructors

### constructor

• **new MessageAttachmentWithoutIDError**(`message?`): [`MessageAttachmentWithoutIDError`](Domain.MercuryError.MessageAttachmentWithoutIDError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`MessageAttachmentWithoutIDError`](Domain.MercuryError.MessageAttachmentWithoutIDError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Mercury.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/errors/Mercury.ts#L44)

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
