[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / CannotFindLinkSecret

# Class: CannotFindLinkSecret

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).CannotFindLinkSecret

## Hierarchy

- `Error`

  ↳ **`CannotFindLinkSecret`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.CannotFindLinkSecret.md#constructor)

### Properties

- [cause](Domain.AgentError.CannotFindLinkSecret.md#cause)
- [message](Domain.AgentError.CannotFindLinkSecret.md#message)
- [name](Domain.AgentError.CannotFindLinkSecret.md#name)
- [stack](Domain.AgentError.CannotFindLinkSecret.md#stack)
- [prepareStackTrace](Domain.AgentError.CannotFindLinkSecret.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.CannotFindLinkSecret.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.CannotFindLinkSecret.md#capturestacktrace)

## Constructors

### constructor

• **new CannotFindLinkSecret**(`message?`): [`CannotFindLinkSecret`](Domain.AgentError.CannotFindLinkSecret.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"Cannot find link secret"` |

#### Returns

[`CannotFindLinkSecret`](Domain.AgentError.CannotFindLinkSecret.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/domain/models/errors/Agent.ts#L26)

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
