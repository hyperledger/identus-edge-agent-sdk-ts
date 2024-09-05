[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [CastorError](../modules/Domain.CastorError.md) / InvalidJWKKeysError

# Class: InvalidJWKKeysError

[Domain](../modules/Domain.md).[CastorError](../modules/Domain.CastorError.md).InvalidJWKKeysError

## Hierarchy

- `Error`

  ↳ **`InvalidJWKKeysError`**

## Table of contents

### Constructors

- [constructor](Domain.CastorError.InvalidJWKKeysError.md#constructor)

### Properties

- [cause](Domain.CastorError.InvalidJWKKeysError.md#cause)
- [message](Domain.CastorError.InvalidJWKKeysError.md#message)
- [name](Domain.CastorError.InvalidJWKKeysError.md#name)
- [stack](Domain.CastorError.InvalidJWKKeysError.md#stack)
- [prepareStackTrace](Domain.CastorError.InvalidJWKKeysError.md#preparestacktrace)
- [stackTraceLimit](Domain.CastorError.InvalidJWKKeysError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.CastorError.InvalidJWKKeysError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidJWKKeysError**(`message?`): [`InvalidJWKKeysError`](Domain.CastorError.InvalidJWKKeysError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidJWKKeysError`](Domain.CastorError.InvalidJWKKeysError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Castor.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/domain/models/errors/Castor.ts#L44)

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
