[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / OfferCredential

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
- [build](OfferCredential.md#build)
- [fromMessage](OfferCredential.md#frommessage)
- [makeOfferFromProposedCredential](OfferCredential.md#makeofferfromproposedcredential)

## Constructors

### constructor

• **new OfferCredential**(`body`, `attachments`, `from?`, `to?`, `thid?`, `id?`): [`OfferCredential`](OfferCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`OfferCredentialBody`](../interfaces/OfferCredentialBody.md) |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |
| `from?` | [`DID`](Domain.DID.md) |
| `to?` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `id` | `string` |

#### Returns

[`OfferCredential`](OfferCredential.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L14)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[]

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L16)

___

### body

• **body**: [`OfferCredentialBody`](../interfaces/OfferCredentialBody.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L15)

___

### from

• `Optional` **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L20)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L19)

___

### to

• `Optional` **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L18)

___

### type

▪ `Static` **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.DidcommOfferCredential`

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L12)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L29)

___

### build

▸ **build**\<`T`\>(`credentialPreview`, `fromDID`, `toDID`, `thid?`, `credentials?`): [`OfferCredential`](OfferCredential.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialPreview` | `CredentialPreview` |
| `fromDID` | [`DID`](Domain.DID.md) |
| `toDID` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |
| `credentials` | `Map`\<`string`, `T`\> |

#### Returns

[`OfferCredential`](OfferCredential.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:80](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L80)

___

### fromMessage

▸ **fromMessage**(`fromMessage`): [`OfferCredential`](OfferCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromMessage` | [`Message`](Domain.Message-1.md) |

#### Returns

[`OfferCredential`](OfferCredential.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:59](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L59)

___

### makeOfferFromProposedCredential

▸ **makeOfferFromProposedCredential**(`proposed`): [`OfferCredential`](OfferCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposed` | `ProposeCredential` |

#### Returns

[`OfferCredential`](OfferCredential.md)

#### Defined in

[src/edge-agent/protocols/issueCredential/OfferCredential.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/edge-agent/protocols/issueCredential/OfferCredential.ts#L42)
