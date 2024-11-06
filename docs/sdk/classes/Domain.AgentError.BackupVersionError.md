[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / BackupVersionError

# Class: BackupVersionError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).BackupVersionError

## Hierarchy

- `Error`

  ↳ **`BackupVersionError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.BackupVersionError.md#constructor)

### Properties

- [cause](Domain.AgentError.BackupVersionError.md#cause)
- [message](Domain.AgentError.BackupVersionError.md#message)
- [name](Domain.AgentError.BackupVersionError.md#name)
- [stack](Domain.AgentError.BackupVersionError.md#stack)
- [prepareStackTrace](Domain.AgentError.BackupVersionError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.BackupVersionError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.BackupVersionError.md#capturestacktrace)

## Constructors

### constructor

• **new BackupVersionError**(): [`BackupVersionError`](Domain.AgentError.BackupVersionError.md)

#### Returns

[`BackupVersionError`](Domain.AgentError.BackupVersionError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:240](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/errors/Agent.ts#L240)

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
