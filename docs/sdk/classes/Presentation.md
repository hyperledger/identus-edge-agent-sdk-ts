[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / Presentation

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
- [validate](Presentation.md#validate)
- [fromMessage](Presentation.md#frommessage)

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

[src/edge-agent/protocols/proofPresentation/Presentation.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L22)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L24)

___

### body

• **body**: [`PresentationBody`](../interfaces/PresentationBody.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L23)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L28)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L27)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L26)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommPresentation`

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L20)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L43)

___

### validate

▸ **validate**(): `void`

#### Returns

`void`

#### Defined in

[src/edge-agent/protocols/proofPresentation/Presentation.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L33)

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

[src/edge-agent/protocols/proofPresentation/Presentation.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/protocols/proofPresentation/Presentation.ts#L56)
