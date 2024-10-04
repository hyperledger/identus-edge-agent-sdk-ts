[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PolluxError](../modules/Domain.PolluxError.md) / InvalidVerifyCredentialError

# Class: InvalidVerifyCredentialError

[Domain](../modules/Domain.md).[PolluxError](../modules/Domain.PolluxError.md).InvalidVerifyCredentialError

## Hierarchy

- `Error`

  ↳ **`InvalidVerifyCredentialError`**

## Table of contents

### Constructors

- [constructor](Domain.PolluxError.InvalidVerifyCredentialError.md#constructor)

### Properties

- [cause](Domain.PolluxError.InvalidVerifyCredentialError.md#cause)
- [message](Domain.PolluxError.InvalidVerifyCredentialError.md#message)
- [name](Domain.PolluxError.InvalidVerifyCredentialError.md#name)
- [reason](Domain.PolluxError.InvalidVerifyCredentialError.md#reason)
- [stack](Domain.PolluxError.InvalidVerifyCredentialError.md#stack)
- [prepareStackTrace](Domain.PolluxError.InvalidVerifyCredentialError.md#preparestacktrace)
- [stackTraceLimit](Domain.PolluxError.InvalidVerifyCredentialError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PolluxError.InvalidVerifyCredentialError.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidVerifyCredentialError**(`credentialId`, `reason`): [`InvalidVerifyCredentialError`](Domain.PolluxError.InvalidVerifyCredentialError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialId` | `string` |
| `reason` | `string` |

#### Returns

[`InvalidVerifyCredentialError`](Domain.PolluxError.InvalidVerifyCredentialError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Pollux.ts:68](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/errors/Pollux.ts#L68)

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

### reason

• **reason**: `string`

#### Defined in

[src/domain/models/errors/Pollux.ts:68](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/errors/Pollux.ts#L68)

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
