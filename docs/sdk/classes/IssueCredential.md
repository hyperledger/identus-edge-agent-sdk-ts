[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / IssueCredential

# Class: IssueCredential

## Table of contents

### Constructors

- [constructor](IssueCredential.md#constructor)

### Properties

- [attachments](IssueCredential.md#attachments)
- [body](IssueCredential.md#body)
- [from](IssueCredential.md#from)
- [id](IssueCredential.md#id)
- [thid](IssueCredential.md#thid)
- [to](IssueCredential.md#to)
- [type](IssueCredential.md#type)

### Methods

- [getCredentialStrings](IssueCredential.md#getcredentialstrings)
- [makeMessage](IssueCredential.md#makemessage)
- [build](IssueCredential.md#build)
- [fromMessage](IssueCredential.md#frommessage)
- [makeIssueFromRequestCredential](IssueCredential.md#makeissuefromrequestcredential)

## Constructors

### constructor

• **new IssueCredential**(`body`, `attachments`, `from`, `to`, `thid?`, `id?`): [`IssueCredential`](IssueCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`IssueCredentialBody`](../interfaces/IssueCredentialBody.md) |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |
| `from` | [`DID`](Domain.DID.md) |
| `to` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `id` | `string` |

#### Returns

[`IssueCredential`](IssueCredential.md)

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L14)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:16](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L16)

___

### body

• **body**: [`IssueCredentialBody`](../interfaces/IssueCredentialBody.md)

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L15)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:20](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L20)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L19)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:18](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L18)

___

### type

▪ `Static` **type**: `ProtocolType` = `ProtocolType.DidcommIssueCredential`

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L12)

## Methods

### getCredentialStrings

▸ **getCredentialStrings**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L36)

___

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L23)

___

### build

▸ **build**\<`T`\>(`fromDID`, `toDID`, `thid?`, `credentials?`): [`IssueCredential`](IssueCredential.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromDID` | [`DID`](Domain.DID.md) |
| `toDID` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `credentials` | `Map`\<`string`, `T`\> |

#### Returns

[`IssueCredential`](IssueCredential.md)

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:96](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L96)

___

### fromMessage

▸ **fromMessage**(`fromMessage`): [`IssueCredential`](IssueCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromMessage` | [`Message`](Domain.Message-1.md) |

#### Returns

[`IssueCredential`](IssueCredential.md)

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:49](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L49)

___

### makeIssueFromRequestCredential

▸ **makeIssueFromRequestCredential**(`msg`): [`IssueCredential`](IssueCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](Domain.Message-1.md) |

#### Returns

[`IssueCredential`](IssueCredential.md)

#### Defined in

[src/prism-agent/protocols/issueCredential/IssueCredential.ts:80](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/issueCredential/IssueCredential.ts#L80)
