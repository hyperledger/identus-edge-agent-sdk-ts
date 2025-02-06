[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [CommonError](../modules/Domain.CommonError.md) / ValidationError

# Class: ValidationError

[Domain](../modules/Domain.md).[CommonError](../modules/Domain.CommonError.md).ValidationError

## Hierarchy

- [`SDKError`](Domain.CommonError.SDKError.md)

  ↳ **`ValidationError`**

## Table of contents

### Constructors

- [constructor](Domain.CommonError.ValidationError.md#constructor)

### Properties

- [cause](Domain.CommonError.ValidationError.md#cause)
- [errors](Domain.CommonError.ValidationError.md#errors)
- [message](Domain.CommonError.ValidationError.md#message)
- [name](Domain.CommonError.ValidationError.md#name)
- [stack](Domain.CommonError.ValidationError.md#stack)
- [prepareStackTrace](Domain.CommonError.ValidationError.md#preparestacktrace)
- [stackTraceLimit](Domain.CommonError.ValidationError.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.CommonError.ValidationError.md#capturestacktrace)

## Constructors

### constructor

• **new ValidationError**(`errors?`): [`ValidationError`](Domain.CommonError.ValidationError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors?` | `string`[] |

#### Returns

[`ValidationError`](Domain.CommonError.ValidationError.md)

#### Overrides

[SDKError](Domain.CommonError.SDKError.md).[constructor](Domain.CommonError.SDKError.md#constructor)

#### Defined in

[src/domain/models/errors/Common.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/errors/Common.ts#L17)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[cause](Domain.CommonError.SDKError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### errors

• `Optional` `Readonly` **errors**: `string`[]

#### Defined in

[src/domain/models/errors/Common.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/errors/Common.ts#L17)

___

### message

• **message**: `string`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[message](Domain.CommonError.SDKError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[name](Domain.CommonError.SDKError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[stack](Domain.CommonError.SDKError.md#stack)

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

[SDKError](Domain.CommonError.SDKError.md).[prepareStackTrace](Domain.CommonError.SDKError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:27

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[SDKError](Domain.CommonError.SDKError.md).[stackTraceLimit](Domain.CommonError.SDKError.md#stacktracelimit)

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

[SDKError](Domain.CommonError.SDKError.md).[captureStackTrace](Domain.CommonError.SDKError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:20
