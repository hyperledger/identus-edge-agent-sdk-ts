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
- [isHandShakeBody](HandshakeRequest.md#ishandshakebody)
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

[src/edge-agent/protocols/connection/HandshakeRequest.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L12)

## Properties

### body

• **body**: [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L13)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L14)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L17)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:16](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L16)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L15)

___

### type

▪ `Static` **type**: `ProtocolType` = `ProtocolType.DidcommconnectionRequest`

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:10](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L10)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:20](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L20)

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

[src/edge-agent/protocols/connection/HandshakeRequest.ts:82](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L82)

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

[src/edge-agent/protocols/connection/HandshakeRequest.ts:101](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L101)

___

### isHandShakeBody

▸ **isHandShakeBody**(`type`, `body`): body is HandshakeRequestBody

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ProtocolType` |
| `body` | `any` |

#### Returns

body is HandshakeRequestBody

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L33)

___

### safeParseBody

▸ **safeParseBody**(`body`, `type`): [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `string` |
| `type` | `ProtocolType` |

#### Returns

[`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/connection/HandshakeRequest.ts:41](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/connection/HandshakeRequest.ts#L41)
