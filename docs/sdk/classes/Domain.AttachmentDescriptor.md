[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / AttachmentDescriptor

# Class: AttachmentDescriptor

[Domain](../modules/Domain.md).AttachmentDescriptor

## Table of contents

### Constructors

- [constructor](Domain.AttachmentDescriptor.md#constructor)

### Properties

- [byteCount](Domain.AttachmentDescriptor.md#bytecount)
- [data](Domain.AttachmentDescriptor.md#data)
- [description](Domain.AttachmentDescriptor.md#description)
- [filename](Domain.AttachmentDescriptor.md#filename)
- [format](Domain.AttachmentDescriptor.md#format)
- [id](Domain.AttachmentDescriptor.md#id)
- [lastModTime](Domain.AttachmentDescriptor.md#lastmodtime)
- [mediaType](Domain.AttachmentDescriptor.md#mediatype)

### Accessors

- [payload](Domain.AttachmentDescriptor.md#payload)

### Methods

- [build](Domain.AttachmentDescriptor.md#build)

## Constructors

### constructor

• **new AttachmentDescriptor**(`data`, `mediaType?`, `id?`, `filename?`, `format?`, `lastModTime?`, `byteCount?`, `description?`): [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttachmentData`](../modules/Domain.md#attachmentdata) |
| `mediaType?` | `string` |
| `id` | `string` |
| `filename?` | `string`[] |
| `format?` | `string` |
| `lastModTime?` | `string` |
| `byteCount?` | `number` |
| `description?` | `string` |

#### Returns

[`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)

#### Defined in

[src/domain/models/MessageAttachment.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L43)

## Properties

### byteCount

• `Optional` `Readonly` **byteCount**: `number`

#### Defined in

[src/domain/models/MessageAttachment.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L50)

___

### data

• `Readonly` **data**: [`AttachmentData`](../modules/Domain.md#attachmentdata)

#### Defined in

[src/domain/models/MessageAttachment.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L44)

___

### description

• `Optional` `Readonly` **description**: `string`

#### Defined in

[src/domain/models/MessageAttachment.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L51)

___

### filename

• `Optional` `Readonly` **filename**: `string`[]

#### Defined in

[src/domain/models/MessageAttachment.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L47)

___

### format

• `Optional` `Readonly` **format**: `string`

#### Defined in

[src/domain/models/MessageAttachment.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L48)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[src/domain/models/MessageAttachment.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L46)

___

### lastModTime

• `Optional` `Readonly` **lastModTime**: `string`

#### Defined in

[src/domain/models/MessageAttachment.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L49)

___

### mediaType

• `Optional` `Readonly` **mediaType**: `string`

#### Defined in

[src/domain/models/MessageAttachment.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L45)

## Accessors

### payload

• `get` **payload**(): `any`

#### Returns

`any`

#### Defined in

[src/domain/models/MessageAttachment.ts:54](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L54)

## Methods

### build

▸ **build**\<`T`\>(`payload`, `id?`, `mediaType?`, `filename?`, `format?`, `lastModTime?`, `byteCount?`, `description?`): [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | `T` | `undefined` |
| `id` | `string` | `undefined` |
| `mediaType` | `string` | `"application/json"` |
| `filename?` | `string`[] | `undefined` |
| `format?` | `string` | `undefined` |
| `lastModTime?` | `string` | `undefined` |
| `byteCount?` | `number` | `undefined` |
| `description?` | `string` | `undefined` |

#### Returns

[`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)

#### Defined in

[src/domain/models/MessageAttachment.ts:58](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/MessageAttachment.ts#L58)
