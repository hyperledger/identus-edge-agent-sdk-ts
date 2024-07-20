[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Presentation

# Class: Presentation

## Table of contents

### Constructors

- [constructor](Presentation.md#constructor)

### Properties

- [attachments](Presentation.md#attachments)
- [body](Presentation.md#body)
- [from](Presentation.md#from)
- [id](Presentation.md#id)
- [thid](Presentation.md#thid)
- [to](Presentation.md#to)
- [type](Presentation.md#type)

### Methods

- [makeMessage](Presentation.md#makemessage)
- [fromMessage](Presentation.md#frommessage)
- [makePresentationFromRequest](Presentation.md#makepresentationfromrequest)

## Constructors

### constructor

• **new Presentation**(`body`, `attachments`, `from`, `to`, `thid?`, `id?`): [`Presentation`](Presentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`PresentationBody`](../interfaces/PresentationBody.md) |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |
| `from` | [`DID`](Domain.DID.md) |
| `to` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `id` | `string` |

#### Returns

[`Presentation`](Presentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L13)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L15)

___

### body

• **body**: [`PresentationBody`](../interfaces/PresentationBody.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L14)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L16)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L19)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L18)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L17)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommPresentation`

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L11)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L22)

___

### fromMessage

▸ **fromMessage**(`fromMessage`): [`Presentation`](Presentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromMessage` | [`Message`](Domain.Message-1.md) |

#### Returns

[`Presentation`](Presentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L35)

___

### makePresentationFromRequest

▸ **makePresentationFromRequest**(`message`): [`Presentation`](Presentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

[`Presentation`](Presentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/proofPresentation/Presentation.ts#L55)
