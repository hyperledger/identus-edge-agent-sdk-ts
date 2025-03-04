[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / IssueCredential

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
- [fromMessage](IssueCredential.md#frommessage)

## Constructors

### constructor

• **new IssueCredential**(`body`, `attachments`, `from`, `to`, `thid?`, `id?`): [`IssueCredential`](IssueCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `IssueCredentialBody` |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |
| `from` | [`DID`](Domain.DID.md) |
| `to` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `id` | `string` |

#### Returns

[`IssueCredential`](IssueCredential.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L23)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L25)

___

### body

• **body**: `IssueCredentialBody`

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L24)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L26)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L29)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L28)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L27)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommIssueCredential`

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L21)

## Methods

### getCredentialStrings

▸ **getCredentialStrings**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L45)

___

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L32)

___

### fromMessage

▸ **fromMessage**(`msg`): [`IssueCredential`](IssueCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](Domain.Message-1.md) |

#### Returns

[`IssueCredential`](IssueCredential.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L58)
