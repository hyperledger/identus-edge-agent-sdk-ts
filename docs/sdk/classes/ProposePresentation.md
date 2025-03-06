[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / ProposePresentation

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
- [validate](ProposePresentation.md#validate)
- [fromMessage](ProposePresentation.md#frommessage)

## Constructors

### constructor

• **new ProposePresentation**(`body`, `attachments`, `from`, `to`, `thid?`, `id?`): [`ProposePresentation`](ProposePresentation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`ProposePresentationBody`](../interfaces/ProposePresentationBody.md) |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |
| `from` | [`DID`](Domain.DID.md) |
| `to` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `id` | `string` |

#### Returns

[`ProposePresentation`](ProposePresentation.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L22)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L24)

___

### body

• **body**: [`ProposePresentationBody`](../interfaces/ProposePresentationBody.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L23)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L28)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L27)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L26)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommProposePresentation`

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L20)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L43)

___

### validate

▸ **validate**(): `void`

#### Returns

`void`

#### Defined in

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L33)

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

[src/edge-agent/protocols/proofPresentation/ProposePresentation.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/proofPresentation/ProposePresentation.ts#L56)
