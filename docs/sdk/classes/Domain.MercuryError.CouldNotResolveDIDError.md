[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [MercuryError](../modules/Domain.MercuryError.md) / CouldNotResolveDIDError

# Class: CouldNotResolveDIDError

[Domain](../modules/Domain.md).[MercuryError](../modules/Domain.MercuryError.md).CouldNotResolveDIDError

## Hierarchy

- `Error`

  ↳ **`CouldNotResolveDIDError`**

## Table of contents

### Constructors

- [constructor](Domain.MercuryError.CouldNotResolveDIDError.md#constructor)

### Properties

- [cause](Domain.MercuryError.CouldNotResolveDIDError.md#cause)
- [message](Domain.MercuryError.CouldNotResolveDIDError.md#message)
- [name](Domain.MercuryError.CouldNotResolveDIDError.md#name)
- [stack](Domain.MercuryError.CouldNotResolveDIDError.md#stack)
- [prepareStackTrace](Domain.MercuryError.CouldNotResolveDIDError.md#preparestacktrace)
- [stackTraceLimit](Domain.MercuryError.CouldNotResolveDIDError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.MercuryError.CouldNotResolveDIDError.md#capturestacktrace)

## Constructors

### constructor

• **new CouldNotResolveDIDError**(`message?`): [`CouldNotResolveDIDError`](Domain.MercuryError.CouldNotResolveDIDError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`CouldNotResolveDIDError`](Domain.MercuryError.CouldNotResolveDIDError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Mercury.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/errors/Mercury.ts#L62)

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
