[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / HandshakeRequest

# Class: HandshakeRequest

## Table of contents

### Constructors

- [constructor](HandshakeRequest.md#constructor)

### Properties

- [body](HandshakeRequest.md#body)
- [from](HandshakeRequest.md#from)
- [id](HandshakeRequest.md#id)
- [thid](HandshakeRequest.md#thid)
- [to](HandshakeRequest.md#to)
- [type](HandshakeRequest.md#type)

### Methods

- [makeMessage](HandshakeRequest.md#makemessage)
- [fromMessage](HandshakeRequest.md#frommessage)
- [fromOutOfBand](HandshakeRequest.md#fromoutofband)
- [safeParseBody](HandshakeRequest.md#safeparsebody)

## Constructors

### constructor

• **new HandshakeRequest**(`body`, `from`, `to`, `thid?`, `id?`): [`HandshakeRequest`](HandshakeRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md) |
| `from` | [`DID`](Domain.DID.md) |
| `to` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `id` | `string` |

#### Returns

[`HandshakeRequest`](HandshakeRequest.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L13)

## Properties

### body

• **body**: [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L14)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L15)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L18)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L17)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L16)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommconnectionRequest`

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L11)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L21)

___

### fromMessage

▸ **fromMessage**(`inviteMessage`, `from`): [`HandshakeRequest`](HandshakeRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteMessage` | [`Message`](Domain.Message-1.md) |
| `from` | [`DID`](Domain.DID.md) |

#### Returns

[`HandshakeRequest`](HandshakeRequest.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:59](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L59)

___

### fromOutOfBand

▸ **fromOutOfBand**(`inviteMessage`, `from`): [`HandshakeRequest`](HandshakeRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteMessage` | [`OutOfBandInvitation`](OutOfBandInvitation.md) |
| `from` | [`DID`](Domain.DID.md) |

#### Returns

[`HandshakeRequest`](HandshakeRequest.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:76](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L76)

___

### safeParseBody

▸ **safeParseBody**(`msg`): [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](Domain.Message-1.md) |

#### Returns

[`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/3c504bead94c87cd52de807c230d8a674846dce5/src/edge-agent/protocols/connection/HandshakeRequest.ts#L34)
