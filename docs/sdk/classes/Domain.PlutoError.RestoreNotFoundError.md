[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PlutoError](../modules/Domain.PlutoError.md) / RestoreNotFoundError

# Class: RestoreNotFoundError

[Domain](../modules/Domain.md).[PlutoError](../modules/Domain.PlutoError.md).RestoreNotFoundError

## Hierarchy

- `Error`

  ↳ **`RestoreNotFoundError`**

## Table of contents

### Constructors

- [constructor](Domain.PlutoError.RestoreNotFoundError.md#constructor)

### Properties

- [cause](Domain.PlutoError.RestoreNotFoundError.md#cause)
- [message](Domain.PlutoError.RestoreNotFoundError.md#message)
- [name](Domain.PlutoError.RestoreNotFoundError.md#name)
- [stack](Domain.PlutoError.RestoreNotFoundError.md#stack)
- [prepareStackTrace](Domain.PlutoError.RestoreNotFoundError.md#preparestacktrace)
- [stackTraceLimit](Domain.PlutoError.RestoreNotFoundError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PlutoError.RestoreNotFoundError.md#capturestacktrace)

## Constructors

### constructor

• **new RestoreNotFoundError**(): [`RestoreNotFoundError`](Domain.PlutoError.RestoreNotFoundError.md)

#### Returns

[`RestoreNotFoundError`](Domain.PlutoError.RestoreNotFoundError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Pluto.ts:116](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/models/errors/Pluto.ts#L116)

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
