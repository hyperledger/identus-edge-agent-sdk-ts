[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / ProposePresentation

# Class: ProposePresentation

## Table of contents

### Constructors

- [constructor](ProposePresentation.md#constructor)

### Properties

- [attachments](ProposePresentation.md#attachments)
- [body](ProposePresentation.md#body)
- [from](ProposePresentation.md#from)
- [id](ProposePresentation.md#id)
- [thid](ProposePresentation.md#thid)
- [to](ProposePresentation.md#to)
- [type](ProposePresentation.md#type)

### Methods

- [makeMessage](ProposePresentation.md#makemessage)
- [fromMessage](ProposePresentation.md#frommessage)
- [makeProposalFromRequest](ProposePresentation.md#makeproposalfromrequest)

## Constructors

### constructor

• **new ProposePresentation**(`body`, `attachments`, `from`, `to`, `thid?`, `id?`): [`ProposePresentation`](ProposePresentation.md)

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

[`ProposePresentation`](ProposePresentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L13)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L15)

___

### body

• **body**: [`RequestPresentationBody`](../interfaces/RequestPresentationBody.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L12)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L16)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L19)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L18)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L17)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommProposePresentation`

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L11)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L29)

___

### fromMessage

▸ **fromMessage**(`fromMessage`): [`ProposePresentation`](ProposePresentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromMessage` | [`Message`](Domain.Message-1.md) |

#### Returns

[`ProposePresentation`](ProposePresentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L42)

___

### makeProposalFromRequest

▸ **makeProposalFromRequest**(`message`): [`ProposePresentation`](ProposePresentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

[`ProposePresentation`](ProposePresentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:63](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L63)
