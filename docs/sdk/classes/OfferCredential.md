[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / OfferCredential

# Class: OfferCredential

## Table of contents

### Constructors

- [constructor](OfferCredential.md#constructor)

### Properties

- [attachments](OfferCredential.md#attachments)
- [body](OfferCredential.md#body)
- [from](OfferCredential.md#from)
- [id](OfferCredential.md#id)
- [thid](OfferCredential.md#thid)
- [to](OfferCredential.md#to)
- [type](OfferCredential.md#type)

### Methods

- [makeMessage](OfferCredential.md#makemessage)
- [validate](OfferCredential.md#validate)
- [fromMessage](OfferCredential.md#frommessage)

## Constructors

### constructor

• **new OfferCredential**(`body`, `attachments`, `from?`, `to?`, `thid?`, `id?`): [`OfferCredential`](OfferCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `OfferCredentialBody` |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |
| `from?` | [`DID`](Domain.DID.md) |
| `to?` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `id` | `string` |

#### Returns

[`OfferCredential`](OfferCredential.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L27)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L29)

___

### body

• **body**: `OfferCredentialBody`

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L28)

___

### from

• `Optional` **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L30)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L33)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L32)

___

### to

• `Optional` **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L31)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommOfferCredential`

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L25)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L48)

___

### validate

▸ **validate**(): `void`

#### Returns

`void`

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L38)

___

### fromMessage

▸ **fromMessage**(`msg`): [`OfferCredential`](OfferCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](Domain.Message-1.md) |

#### Returns

[`OfferCredential`](OfferCredential.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L61)
