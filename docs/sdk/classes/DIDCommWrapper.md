[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / DIDCommWrapper

# Class: DIDCommWrapper

## Implements

- [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md)

## Table of contents

### Constructors

- [constructor](DIDCommWrapper.md#constructor)

### Properties

- [apollo](DIDCommWrapper.md#apollo)
- [castor](DIDCommWrapper.md#castor)
- [didResolver](DIDCommWrapper.md#didresolver)
- [pluto](DIDCommWrapper.md#pluto)
- [secretsResolver](DIDCommWrapper.md#secretsresolver)
- [didcomm](DIDCommWrapper.md#didcomm)

### Methods

- [doesRequireReturnRoute](DIDCommWrapper.md#doesrequirereturnroute)
- [packEncrypted](DIDCommWrapper.md#packencrypted)
- [parseAttachment](DIDCommWrapper.md#parseattachment)
- [parseAttachmentData](DIDCommWrapper.md#parseattachmentdata)
- [parseAttachmentDataToDomain](DIDCommWrapper.md#parseattachmentdatatodomain)
- [parseAttachmentToDomain](DIDCommWrapper.md#parseattachmenttodomain)
- [parseAttachments](DIDCommWrapper.md#parseattachments)
- [parseAttachmentsToDomain](DIDCommWrapper.md#parseattachmentstodomain)
- [unpack](DIDCommWrapper.md#unpack)
- [getDIDComm](DIDCommWrapper.md#getdidcomm)

## Constructors

### constructor

• **new DIDCommWrapper**(`apollo`, `castor`, `pluto`): [`DIDCommWrapper`](DIDCommWrapper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apollo` | [`Apollo`](../interfaces/Domain.Apollo.md) |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `pluto` | [`Pluto`](../interfaces/Domain.Pluto-1.md) |

#### Returns

[`DIDCommWrapper`](DIDCommWrapper.md)

#### Defined in

[src/mercury/didcomm/Wrapper.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L24)

## Properties

### apollo

• `Readonly` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/mercury/didcomm/Wrapper.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L25)

___

### castor

• `Readonly` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/mercury/didcomm/Wrapper.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L26)

___

### didResolver

• `Private` `Readonly` **didResolver**: `DIDResolver`

#### Defined in

[src/mercury/didcomm/Wrapper.ts:21](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L21)

___

### pluto

• `Readonly` **pluto**: [`Pluto`](../interfaces/Domain.Pluto-1.md)

#### Defined in

[src/mercury/didcomm/Wrapper.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L27)

___

### secretsResolver

• `Private` `Readonly` **secretsResolver**: `SecretsResolver`

#### Defined in

[src/mercury/didcomm/Wrapper.ts:22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L22)

___

### didcomm

▪ `Static` **didcomm**: `__module`

#### Defined in

[src/mercury/didcomm/Wrapper.ts:20](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L20)

## Methods

### doesRequireReturnRoute

▸ **doesRequireReturnRoute**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/mercury/didcomm/Wrapper.ts:55](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L55)

___

### packEncrypted

▸ **packEncrypted**(`message`, `toDid`, `fromDid?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |
| `toDid` | [`DID`](Domain.DID.md) |
| `fromDid?` | [`DID`](Domain.DID.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[DIDCommProtocol](../interfaces/DIDCommProtocol.md).[packEncrypted](../interfaces/DIDCommProtocol.md#packencrypted)

#### Defined in

[src/mercury/didcomm/Wrapper.ts:71](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L71)

___

### parseAttachment

▸ **parseAttachment**(`attachment`): `Attachment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md) |

#### Returns

`Attachment`

#### Defined in

[src/mercury/didcomm/Wrapper.ts:233](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L233)

___

### parseAttachmentData

▸ **parseAttachmentData**(`data`): `AttachmentData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttachmentData`](../modules/Domain.md#attachmentdata) |

#### Returns

`AttachmentData`

#### Defined in

[src/mercury/didcomm/Wrapper.ts:249](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L249)

___

### parseAttachmentDataToDomain

▸ **parseAttachmentDataToDomain**(`data`): [`AttachmentData`](../modules/Domain.md#attachmentdata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `AttachmentData` |

#### Returns

[`AttachmentData`](../modules/Domain.md#attachmentdata)

#### Defined in

[src/mercury/didcomm/Wrapper.ts:189](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L189)

___

### parseAttachmentToDomain

▸ **parseAttachmentToDomain**(`attachment`): [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | `Attachment` |

#### Returns

[`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)

#### Defined in

[src/mercury/didcomm/Wrapper.ts:171](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L171)

___

### parseAttachments

▸ **parseAttachments**(`attachments?`): `undefined` \| `Attachment`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachments?` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |

#### Returns

`undefined` \| `Attachment`[]

#### Defined in

[src/mercury/didcomm/Wrapper.ts:220](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L220)

___

### parseAttachmentsToDomain

▸ **parseAttachmentsToDomain**(`attachments`): [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachments` | `Attachment`[] |

#### Returns

[`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/mercury/didcomm/Wrapper.ts:155](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L155)

___

### unpack

▸ **unpack**(`message`): `Promise`\<[`Message`](Domain.Message-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](Domain.Message-1.md)\>

#### Implementation of

[DIDCommProtocol](../interfaces/DIDCommProtocol.md).[unpack](../interfaces/DIDCommProtocol.md#unpack)

#### Defined in

[src/mercury/didcomm/Wrapper.ts:117](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L117)

___

### getDIDComm

▸ **getDIDComm**(): `Promise`\<`__module`\>

#### Returns

`Promise`\<`__module`\>

#### Defined in

[src/mercury/didcomm/Wrapper.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/mercury/didcomm/Wrapper.ts#L33)
