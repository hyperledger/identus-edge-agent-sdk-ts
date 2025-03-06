[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Mercury

# Interface: Mercury

[Domain](../modules/Domain.md).Mercury

## Implemented by

- [`Mercury`](../classes/Mercury.md)

## Table of contents

### Methods

- [packMessage](Domain.Mercury.md#packmessage)
- [sendMessage](Domain.Mercury.md#sendmessage)
- [sendMessageParseMessage](Domain.Mercury.md#sendmessageparsemessage)
- [unpackMessage](Domain.Mercury.md#unpackmessage)

## Methods

### packMessage

▸ **packMessage**(`message`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message-1.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/buildingBlocks/Mercury.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Mercury.ts#L4)

___

### sendMessage

▸ **sendMessage**(`message`): `Promise`\<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message-1.md) |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[src/domain/buildingBlocks/Mercury.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Mercury.ts#L6)

___

### sendMessageParseMessage

▸ **sendMessageParseMessage**(`message`): `Promise`\<`undefined` \| [`Message`](../classes/Domain.Message-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message-1.md) |

#### Returns

`Promise`\<`undefined` \| [`Message`](../classes/Domain.Message-1.md)\>

#### Defined in

[src/domain/buildingBlocks/Mercury.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Mercury.ts#L7)

___

### unpackMessage

▸ **unpackMessage**(`message`): `Promise`\<[`Message`](../classes/Domain.Message-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message-1.md)\>

#### Defined in

[src/domain/buildingBlocks/Mercury.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Mercury.ts#L5)
