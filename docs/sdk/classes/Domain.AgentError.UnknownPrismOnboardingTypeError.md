[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [AgentError](../modules/Domain.AgentError.md) / UnknownPrismOnboardingTypeError

# Class: UnknownPrismOnboardingTypeError

[Domain](../modules/Domain.md).[AgentError](../modules/Domain.AgentError.md).UnknownPrismOnboardingTypeError

## Hierarchy

- `Error`

  ↳ **`UnknownPrismOnboardingTypeError`**

## Table of contents

### Constructors

- [constructor](Domain.AgentError.UnknownPrismOnboardingTypeError.md#constructor)

### Properties

- [cause](Domain.AgentError.UnknownPrismOnboardingTypeError.md#cause)
- [message](Domain.AgentError.UnknownPrismOnboardingTypeError.md#message)
- [name](Domain.AgentError.UnknownPrismOnboardingTypeError.md#name)
- [stack](Domain.AgentError.UnknownPrismOnboardingTypeError.md#stack)
- [prepareStackTrace](Domain.AgentError.UnknownPrismOnboardingTypeError.md#preparestacktrace)
- [stackTraceLimit](Domain.AgentError.UnknownPrismOnboardingTypeError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.AgentError.UnknownPrismOnboardingTypeError.md#capturestacktrace)

## Constructors

### constructor

• **new UnknownPrismOnboardingTypeError**(): [`UnknownPrismOnboardingTypeError`](Domain.AgentError.UnknownPrismOnboardingTypeError.md)

#### Returns

[`UnknownPrismOnboardingTypeError`](Domain.AgentError.UnknownPrismOnboardingTypeError.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Agent.ts:68](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/errors/Agent.ts#L68)

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

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

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
