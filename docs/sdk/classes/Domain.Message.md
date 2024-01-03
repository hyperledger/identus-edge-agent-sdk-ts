[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Message

# Class: Message

[Domain](../modules/Domain.md).Message

## Table of contents

### Constructors

- [constructor](Domain.Message.md#constructor)

### Properties

- [ack](Domain.Message.md#ack)
- [attachments](Domain.Message.md#attachments)
- [body](Domain.Message.md#body)
- [createdTime](Domain.Message.md#createdtime)
- [direction](Domain.Message.md#direction)
- [expiresTimePlus](Domain.Message.md#expirestimeplus)
- [extraHeaders](Domain.Message.md#extraheaders)
- [from](Domain.Message.md#from)
- [fromPrior](Domain.Message.md#fromprior)
- [id](Domain.Message.md#id)
- [piuri](Domain.Message.md#piuri)
- [pthid](Domain.Message.md#pthid)
- [thid](Domain.Message.md#thid)
- [to](Domain.Message.md#to)

### Methods

- [fromJson](Domain.Message.md#fromjson)
- [isBase64Attachment](Domain.Message.md#isbase64attachment)
- [isJsonAttachment](Domain.Message.md#isjsonattachment)

## Constructors

### constructor

• **new Message**(`body`, `id?`, `piuri`, `from?`, `to?`, `attachments?`, `thid?`, `extraHeaders?`, `createdTime?`, `expiresTimePlus?`, `ack?`, `direction?`, `fromPrior?`, `pthid?`): [`Message`](Domain.Message.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `body` | `string` | `undefined` |
| `id` | `string` | `undefined` |
| `piuri` | `string` | `undefined` |
| `from?` | [`DID`](Domain.DID.md) | `undefined` |
| `to?` | [`DID`](Domain.DID.md) | `undefined` |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] | `[]` |
| `thid?` | `string` | `undefined` |
| `extraHeaders` | `string`[] | `[]` |
| `createdTime` | `string` | `undefined` |
| `expiresTimePlus` | `string` | `undefined` |
| `ack` | `string`[] | `[]` |
| `direction` | [`MessageDirection`](../enums/Domain.MessageDirection.md) | `MessageDirection.RECEIVED` |
| `fromPrior?` | `string` | `undefined` |
| `pthid?` | `string` | `undefined` |

#### Returns

[`Message`](Domain.Message.md)

#### Defined in

[src/domain/models/Message.ts:18](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L18)

## Properties

### ack

• `Readonly` **ack**: `string`[] = `[]`

#### Defined in

[src/domain/models/Message.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L32)

___

### attachments

• `Readonly` **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] = `[]`

#### Defined in

[src/domain/models/Message.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L24)

___

### body

• `Readonly` **body**: `string`

#### Defined in

[src/domain/models/Message.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L19)

___

### createdTime

• `Readonly` **createdTime**: `string`

#### Defined in

[src/domain/models/Message.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L27)

___

### direction

• `Readonly` **direction**: [`MessageDirection`](../enums/Domain.MessageDirection.md) = `MessageDirection.RECEIVED`

#### Defined in

[src/domain/models/Message.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L33)

___

### expiresTimePlus

• `Readonly` **expiresTimePlus**: `string`

#### Defined in

[src/domain/models/Message.ts:28](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L28)

___

### extraHeaders

• `Readonly` **extraHeaders**: `string`[] = `[]`

#### Defined in

[src/domain/models/Message.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L26)

___

### from

• `Optional` `Readonly` **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/Message.ts:22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L22)

___

### fromPrior

• `Optional` `Readonly` **fromPrior**: `string`

#### Defined in

[src/domain/models/Message.ts:34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L34)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/domain/models/Message.ts:20](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L20)

___

### piuri

• `Readonly` **piuri**: `string`

#### Defined in

[src/domain/models/Message.ts:21](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L21)

___

### pthid

• `Optional` `Readonly` **pthid**: `string`

#### Defined in

[src/domain/models/Message.ts:35](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L35)

___

### thid

• `Optional` `Readonly` **thid**: `string`

#### Defined in

[src/domain/models/Message.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L25)

___

### to

• `Optional` `Readonly` **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/Message.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L23)

## Methods

### fromJson

▸ **fromJson**(`jsonString`): [`Message`](Domain.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |

#### Returns

[`Message`](Domain.Message.md)

#### Defined in

[src/domain/models/Message.ts:38](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L38)

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

[src/domain/models/Message.ts:129](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L129)

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

[src/domain/models/Message.ts:133](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Message.ts#L133)
