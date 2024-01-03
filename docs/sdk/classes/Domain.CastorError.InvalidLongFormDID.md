[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [CastorError](../modules/Domain.CastorError.md) / InvalidLongFormDID

# Class: InvalidLongFormDID

[Domain](../modules/Domain.md).[CastorError](../modules/Domain.CastorError.md).InvalidLongFormDID

## Hierarchy

- `Error`

  ↳ **`InvalidLongFormDID`**

## Table of contents

### Constructors

- [constructor](Domain.CastorError.InvalidLongFormDID.md#constructor)

### Properties

- [cause](Domain.CastorError.InvalidLongFormDID.md#cause)
- [message](Domain.CastorError.InvalidLongFormDID.md#message)
- [name](Domain.CastorError.InvalidLongFormDID.md#name)
- [stack](Domain.CastorError.InvalidLongFormDID.md#stack)
- [prepareStackTrace](Domain.CastorError.InvalidLongFormDID.md#preparestacktrace)
- [stackTraceLimit](Domain.CastorError.InvalidLongFormDID.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.CastorError.InvalidLongFormDID.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidLongFormDID**(`message?`): [`InvalidLongFormDID`](Domain.CastorError.InvalidLongFormDID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidLongFormDID`](Domain.CastorError.InvalidLongFormDID.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Castor.ts:2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/errors/Castor.ts#L2)

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
