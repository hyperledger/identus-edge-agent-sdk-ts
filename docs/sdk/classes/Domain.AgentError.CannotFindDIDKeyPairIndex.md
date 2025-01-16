[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / CannotFindDIDKeyPairIndex

# Class: CannotFindDIDKeyPairIndex

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).CannotFindDIDKeyPairIndex

## Hierarchy

- `Error`

  ↳ **`CannotFindDIDKeyPairIndex`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.CannotFindDIDKeyPairIndex.md#constructor)

### Properties

- [cause](Domain.AgentError.CannotFindDIDKeyPairIndex.md#cause)
- [message](Domain.AgentError.CannotFindDIDKeyPairIndex.md#message)
- [name](Domain.AgentError.CannotFindDIDKeyPairIndex.md#name)
- [stack](Domain.AgentError.CannotFindDIDKeyPairIndex.md#stack)
- [prepareStackTrace](Domain.AgentError.CannotFindDIDKeyPairIndex.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.CannotFindDIDKeyPairIndex.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.CannotFindDIDKeyPairIndex.md#capturestacktrace)

## Constructors

### constructor

• **new CannotFindDIDKeyPairIndex**(`message?`): [`CannotFindDIDKeyPairIndex`](Domain.AgentError.CannotFindDIDKeyPairIndex.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"Can't find DID keypair index"` |

#### Returns

[`CannotFindDIDKeyPairIndex`](Domain.AgentError.CannotFindDIDKeyPairIndex.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/errors/Agent.ts#L14)

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
