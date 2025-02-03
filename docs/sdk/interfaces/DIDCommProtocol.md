[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / DIDCommProtocol

# Interface: DIDCommProtocol

## Implemented by

- [`DIDCommWrapper`](../classes/DIDCommWrapper.md)

## Table of contents

### Methods

- [packEncrypted](DIDCommProtocol.md#packencrypted)
- [unpack](DIDCommProtocol.md#unpack)

## Methods

### packEncrypted

▸ **packEncrypted**(`message`, `to`, `from?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message-1.md) |
| `to` | [`DID`](../classes/Domain.DID.md) |
| `from?` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/mercury/DIDCommProtocol.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/mercury/DIDCommProtocol.ts#L4)

___

### unpack

▸ **unpack**(`message`): `Promise`\<[`Message`](../classes/Domain.Message-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message-1.md)\>

#### Defined in

[src/mercury/DIDCommProtocol.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/mercury/DIDCommProtocol.ts#L14)
