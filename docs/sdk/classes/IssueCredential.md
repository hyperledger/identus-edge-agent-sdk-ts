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

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L15)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L17)

___

### body

• **body**: [`IssueCredentialBody`](../interfaces/IssueCredentialBody.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L16)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L18)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L21)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L20)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L19)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommIssueCredential`

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L13)

## Methods

### getCredentialStrings

▸ **getCredentialStrings**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L37)

___

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L24)

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

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:88](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L88)

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

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L50)

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

[src/edge-agent/protocols/issueCredential/IssueCredential.ts:72](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/protocols/issueCredential/IssueCredential.ts#L72)
