[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / RequestPresentation

# Class: RequestPresentation

## Table of contents

### Constructors

- [constructor](RequestPresentation.md#constructor)

### Properties

- [attachments](RequestPresentation.md#attachments)
- [body](RequestPresentation.md#body)
- [from](RequestPresentation.md#from)
- [id](RequestPresentation.md#id)
- [thid](RequestPresentation.md#thid)
- [to](RequestPresentation.md#to)
- [type](RequestPresentation.md#type)

### Accessors

- [decodedAttachments](RequestPresentation.md#decodedattachments)

### Methods

- [makeMessage](RequestPresentation.md#makemessage)
- [fromMessage](RequestPresentation.md#frommessage)
- [makeRequestFromProposal](RequestPresentation.md#makerequestfromproposal)

## Constructors

### constructor

• **new RequestPresentation**(`body`, `attachments`, `from`, `to`, `thid?`, `id?`): [`RequestPresentation`](RequestPresentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`RequestPresentationBody`](../interfaces/RequestPresentationBody.md) |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |
| `from` | [`DID`](Domain.DID.md) |
| `to` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `id` | `string` |

#### Returns

[`RequestPresentation`](RequestPresentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L14)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L16)

___

### body

• **body**: [`RequestPresentationBody`](../interfaces/RequestPresentationBody.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L12)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L20)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L19)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L18)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommRequestPresentation`

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L11)

## Accessors

### decodedAttachments

• `get` **decodedAttachments**(): `any`[]

#### Returns

`any`[]

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L30)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L34)

___

### fromMessage

▸ **fromMessage**(`fromMessage`): [`RequestPresentation`](RequestPresentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromMessage` | [`Message`](Domain.Message-1.md) |

#### Returns

[`RequestPresentation`](RequestPresentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L47)

___

### makeRequestFromProposal

▸ **makeRequestFromProposal**(`message`): [`RequestPresentation`](RequestPresentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

[`RequestPresentation`](RequestPresentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:67](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L67)
