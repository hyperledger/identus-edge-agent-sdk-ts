[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Message

# Class: Message

[Domain](../modules/Domain.md).Message

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](Domain.Message-1.md#constructor)

### Properties

- [ack](Domain.Message-1.md#ack)
- [attachments](Domain.Message-1.md#attachments)
- [body](Domain.Message-1.md#body)
- [createdTime](Domain.Message-1.md#createdtime)
- [direction](Domain.Message-1.md#direction)
- [expiresTimePlus](Domain.Message-1.md#expirestimeplus)
- [extraHeaders](Domain.Message-1.md#extraheaders)
- [from](Domain.Message-1.md#from)
- [fromPrior](Domain.Message-1.md#fromprior)
- [id](Domain.Message-1.md#id)
- [piuri](Domain.Message-1.md#piuri)
- [pthid](Domain.Message-1.md#pthid)
- [thid](Domain.Message-1.md#thid)
- [to](Domain.Message-1.md#to)
- [uuid](Domain.Message-1.md#uuid)

### Methods

- [fromJson](Domain.Message-1.md#fromjson)
- [isBase64Attachment](Domain.Message-1.md#isbase64attachment)
- [isJsonAttachment](Domain.Message-1.md#isjsonattachment)

## Constructors

### constructor

• **new Message**(`body`, `id?`, `piuri`, `from?`, `to?`, `attachments?`, `thid?`, `extraHeaders?`, `createdTime?`, `expiresTimePlus?`, `ack?`, `direction?`, `fromPrior?`, `pthid?`): [`Message`](Domain.Message-1.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `body` | `string` \| `JsonObj`\<`any`\> | `undefined` |
| `id` | `string` | `undefined` |
| `piuri` | `string` | `undefined` |
| `from?` | [`DID`](Domain.DID.md) | `undefined` |
| `to?` | [`DID`](Domain.DID.md) | `undefined` |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] | `[]` |
| `thid?` | `string` | `undefined` |
| `extraHeaders` | `JsonObj`\<`any`\> | `{}` |
| `createdTime` | `number` | `undefined` |
| `expiresTimePlus` | `number` | `undefined` |
| `ack` | `string`[] | `[]` |
| `direction` | [`MessageDirection`](../enums/Domain.MessageDirection.md) | `MessageDirection.RECEIVED` |
| `fromPrior?` | `string` | `undefined` |
| `pthid?` | `string` | `undefined` |

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/domain/models/Message.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L24)

## Properties

### ack

• `Readonly` **ack**: `string`[] = `[]`

#### Defined in

[src/domain/models/Message.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L35)

___

### attachments

• `Readonly` **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] = `[]`

#### Defined in

[src/domain/models/Message.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L30)

___

### body

• `Readonly` **body**: `JsonObj`\<`any`\>

#### Defined in

[src/domain/models/Message.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L22)

___

### createdTime

• `Readonly` **createdTime**: `number`

#### Defined in

[src/domain/models/Message.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L33)

___

### direction

• **direction**: [`MessageDirection`](../enums/Domain.MessageDirection.md) = `MessageDirection.RECEIVED`

#### Defined in

[src/domain/models/Message.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L36)

___

### expiresTimePlus

• `Readonly` **expiresTimePlus**: `number`

#### Defined in

[src/domain/models/Message.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L34)

___

### extraHeaders

• `Readonly` **extraHeaders**: `JsonObj`\<`any`\> = `{}`

#### Defined in

[src/domain/models/Message.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L32)

___

### from

• `Optional` `Readonly` **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/Message.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L28)

___

### fromPrior

• `Optional` `Readonly` **fromPrior**: `string`

#### Defined in

[src/domain/models/Message.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L37)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/domain/models/Message.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L26)

___

### piuri

• `Readonly` **piuri**: `string`

#### Defined in

[src/domain/models/Message.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L27)

___

### pthid

• `Optional` `Readonly` **pthid**: `string`

#### Defined in

[src/domain/models/Message.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L38)

___

### thid

• `Optional` `Readonly` **thid**: `string`

#### Defined in

[src/domain/models/Message.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L31)

___

### to

• `Optional` `Readonly` **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/Message.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L29)

___

### uuid

• **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Defined in

[src/domain/models/Message.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L21)

## Methods

### fromJson

▸ **fromJson**(`jsonString`): [`Message`](Domain.Message-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `any` |

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/domain/models/Message.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L44)

___

### isBase64Attachment

▸ **isBase64Attachment**(`data`): data is AttachmentBase64

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

data is AttachmentBase64

#### Defined in

[src/domain/models/Message.ts:140](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L140)

___

### isJsonAttachment

▸ **isJsonAttachment**(`data`): data is AttachmentJsonData

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

data is AttachmentJsonData

#### Defined in

[src/domain/models/Message.ts:144](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Message.ts#L144)
