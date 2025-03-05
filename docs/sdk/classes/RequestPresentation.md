[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / RequestPresentation

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
- [validate](RequestPresentation.md#validate)
- [fromMessage](RequestPresentation.md#frommessage)

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

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L24)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L26)

___

### body

• **body**: [`RequestPresentationBody`](../interfaces/RequestPresentationBody.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L25)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L30)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L29)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L28)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommRequestPresentation`

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L22)

## Accessors

### decodedAttachments

• `get` **decodedAttachments**(): `any`[]

#### Returns

`any`[]

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L35)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L53)

___

### validate

▸ **validate**(): `void`

#### Returns

`void`

#### Defined in

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L39)

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

[src/edge-agent/protocols/proofPresentation/RequestPresentation.ts:66](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/proofPresentation/RequestPresentation.ts#L66)
