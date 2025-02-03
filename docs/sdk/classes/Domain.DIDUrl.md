[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / DIDUrl

# Class: DIDUrl

[Domain](../modules/Domain.md).DIDUrl

## Table of contents

### Constructors

- [constructor](Domain.DIDUrl.md#constructor)

### Properties

- [did](Domain.DIDUrl.md#did)
- [fragment](Domain.DIDUrl.md#fragment)
- [parameters](Domain.DIDUrl.md#parameters)
- [path](Domain.DIDUrl.md#path)

### Methods

- [fragmentString](Domain.DIDUrl.md#fragmentstring)
- [pathString](Domain.DIDUrl.md#pathstring)
- [queryString](Domain.DIDUrl.md#querystring)
- [string](Domain.DIDUrl.md#string)

## Constructors

### constructor

• **new DIDUrl**(`did`, `path?`, `parameters?`, `fragment?`): [`DIDUrl`](Domain.DIDUrl.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `did` | [`DID`](Domain.DID.md) | `undefined` |
| `path` | `string`[] | `[]` |
| `parameters` | `Map`\<`string`, `string`\> | `undefined` |
| `fragment` | `string` | `""` |

#### Returns

[`DIDUrl`](Domain.DIDUrl.md)

#### Defined in

[src/domain/models/DIDUrl.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L9)

## Properties

### did

• **did**: [`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/DIDUrl.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L4)

___

### fragment

• **fragment**: `string`

#### Defined in

[src/domain/models/DIDUrl.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L7)

___

### parameters

• **parameters**: `Map`\<`string`, `string`\>

#### Defined in

[src/domain/models/DIDUrl.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L6)

___

### path

• **path**: `string`[]

#### Defined in

[src/domain/models/DIDUrl.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L5)

## Methods

### fragmentString

▸ **fragmentString**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/DIDUrl.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L35)

___

### pathString

▸ **pathString**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/DIDUrl.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L25)

___

### queryString

▸ **queryString**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/DIDUrl.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L29)

___

### string

▸ **string**(): `string`

#### Returns

`string`

#### Defined in

[src/domain/models/DIDUrl.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDUrl.ts#L21)
