[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [MercuryError](../modules/Domain.MercuryError.md) / UrlSessionError

# Class: UrlSessionError

[Domain](../modules/Domain.md).[MercuryError](../modules/Domain.MercuryError.md).UrlSessionError

## Hierarchy

- `Error`

  ↳ **`UrlSessionError`**

## Table of contents

### Constructors

- [constructor](Domain.MercuryError.UrlSessionError.md#constructor)

### Properties

- [cause](Domain.MercuryError.UrlSessionError.md#cause)
- [error](Domain.MercuryError.UrlSessionError.md#error)
- [message](Domain.MercuryError.UrlSessionError.md#message)
- [name](Domain.MercuryError.UrlSessionError.md#name)
- [stack](Domain.MercuryError.UrlSessionError.md#stack)
- [statusCode](Domain.MercuryError.UrlSessionError.md#statuscode)
- [prepareStackTrace](Domain.MercuryError.UrlSessionError.md#preparestacktrace)
- [stackTraceLimit](Domain.MercuryError.UrlSessionError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.MercuryError.UrlSessionError.md#capturestacktrace)

## Constructors

### constructor

• **new UrlSessionError**(`message?`, `statusCode?`, `error?`): [`UrlSessionError`](Domain.MercuryError.UrlSessionError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `statusCode?` | `number` |
| `error?` | `Error` |

#### Returns

[`UrlSessionError`](Domain.MercuryError.UrlSessionError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Mercury.ts:77](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/errors/Mercury.ts#L77)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### error

• `Optional` **error**: `Error`

#### Defined in

[src/domain/models/errors/Mercury.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/errors/Mercury.ts#L75)

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

### statusCode

• **statusCode**: `number`

#### Defined in

[src/domain/models/errors/Mercury.ts:74](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/errors/Mercury.ts#L74)

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
