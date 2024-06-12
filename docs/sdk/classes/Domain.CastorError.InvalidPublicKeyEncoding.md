[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [CastorError](../modules/Domain.CastorError.md) / InvalidPublicKeyEncoding

# Class: InvalidPublicKeyEncoding

[Domain](../modules/Domain.md).[CastorError](../modules/Domain.CastorError.md).InvalidPublicKeyEncoding

## Hierarchy

- `Error`

  ↳ **`InvalidPublicKeyEncoding`**

## Table of contents

### Constructors

- [constructor](Domain.CastorError.InvalidPublicKeyEncoding.md#constructor)

### Properties

- [cause](Domain.CastorError.InvalidPublicKeyEncoding.md#cause)
- [message](Domain.CastorError.InvalidPublicKeyEncoding.md#message)
- [name](Domain.CastorError.InvalidPublicKeyEncoding.md#name)
- [stack](Domain.CastorError.InvalidPublicKeyEncoding.md#stack)
- [prepareStackTrace](Domain.CastorError.InvalidPublicKeyEncoding.md#preparestacktrace)
- [stackTraceLimit](Domain.CastorError.InvalidPublicKeyEncoding.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.CastorError.InvalidPublicKeyEncoding.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidPublicKeyEncoding**(`message?`): [`InvalidPublicKeyEncoding`](Domain.CastorError.InvalidPublicKeyEncoding.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidPublicKeyEncoding`](Domain.CastorError.InvalidPublicKeyEncoding.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Castor.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/models/errors/Castor.ts#L14)

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
