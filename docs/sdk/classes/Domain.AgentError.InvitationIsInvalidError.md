[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / InvitationIsInvalidError

# Class: InvitationIsInvalidError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).InvitationIsInvalidError

## Hierarchy

- `Error`

  ↳ **`InvitationIsInvalidError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.InvitationIsInvalidError.md#constructor)

### Properties

- [cause](Domain.AgentError.InvitationIsInvalidError.md#cause)
- [message](Domain.AgentError.InvitationIsInvalidError.md#message)
- [name](Domain.AgentError.InvitationIsInvalidError.md#name)
- [stack](Domain.AgentError.InvitationIsInvalidError.md#stack)
- [prepareStackTrace](Domain.AgentError.InvitationIsInvalidError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.InvitationIsInvalidError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.InvitationIsInvalidError.md#capturestacktrace)

## Constructors

### constructor

• **new InvitationIsInvalidError**(`message?`): [`InvitationIsInvalidError`](Domain.AgentError.InvitationIsInvalidError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"Invalid invitation"` |

#### Returns

[`InvitationIsInvalidError`](Domain.AgentError.InvitationIsInvalidError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/domain/models/errors/Agent.ts#L44)

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
