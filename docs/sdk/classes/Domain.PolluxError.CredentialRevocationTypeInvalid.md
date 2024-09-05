[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PolluxError](../modules/Domain.PolluxError.md) / CredentialRevocationTypeInvalid

# Class: CredentialRevocationTypeInvalid

[Domain](../modules/Domain.md).[PolluxError](../modules/Domain.PolluxError.md).CredentialRevocationTypeInvalid

## Hierarchy

- `Error`

  ↳ **`CredentialRevocationTypeInvalid`**

## Table of contents

### Constructors

- [constructor](Domain.PolluxError.CredentialRevocationTypeInvalid.md#constructor)

### Properties

- [cause](Domain.PolluxError.CredentialRevocationTypeInvalid.md#cause)
- [message](Domain.PolluxError.CredentialRevocationTypeInvalid.md#message)
- [name](Domain.PolluxError.CredentialRevocationTypeInvalid.md#name)
- [stack](Domain.PolluxError.CredentialRevocationTypeInvalid.md#stack)
- [prepareStackTrace](Domain.PolluxError.CredentialRevocationTypeInvalid.md#preparestacktrace)
- [stackTraceLimit](Domain.PolluxError.CredentialRevocationTypeInvalid.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PolluxError.CredentialRevocationTypeInvalid.md#capturestacktrace)

## Constructors

### constructor

• **new CredentialRevocationTypeInvalid**(`message?`): [`CredentialRevocationTypeInvalid`](Domain.PolluxError.CredentialRevocationTypeInvalid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`CredentialRevocationTypeInvalid`](Domain.PolluxError.CredentialRevocationTypeInvalid.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Pollux.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/domain/models/errors/Pollux.ts#L20)

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
