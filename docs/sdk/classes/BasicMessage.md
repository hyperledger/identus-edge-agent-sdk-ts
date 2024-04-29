[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / BasicMessage

# Class: BasicMessage

## Table of contents

### Constructors

- [constructor](BasicMessage.md#constructor)

### Properties

- [body](BasicMessage.md#body)
- [from](BasicMessage.md#from)
- [thid](BasicMessage.md#thid)
- [to](BasicMessage.md#to)
- [type](BasicMessage.md#type)

### Methods

- [makeMessage](BasicMessage.md#makemessage)
- [fromMessage](BasicMessage.md#frommessage)

## Constructors

### constructor

• **new BasicMessage**(`body`, `from`, `to`, `thid?`): [`BasicMessage`](BasicMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`BasicMessageBody`](../interfaces/BasicMessageBody.md) |
| `from` | [`DID`](Domain.DID.md) |
| `to` | [`DID`](Domain.DID.md) |
| `thid?` | `string` |

#### Returns

[`BasicMessage`](BasicMessage.md)

#### Defined in

[src/prism-agent/protocols/other/BasicMessage.ts:10](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/other/BasicMessage.ts#L10)

## Properties

### body

• **body**: [`BasicMessageBody`](../interfaces/BasicMessageBody.md)

#### Defined in

[src/prism-agent/protocols/other/BasicMessage.ts:11](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/other/BasicMessage.ts#L11)

___

### from

• **from**: [`DID`](Domain.DID.md)

#### Defined in

[src/prism-agent/protocols/other/BasicMessage.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/other/BasicMessage.ts#L12)

___

### thid

• `Optional` **thid**: `string`

#### Defined in

[src/prism-agent/protocols/other/BasicMessage.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/other/BasicMessage.ts#L14)

___

### to

• **to**: [`DID`](Domain.DID.md)

#### Defined in

[src/prism-agent/protocols/other/BasicMessage.ts:13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/other/BasicMessage.ts#L13)

___

### type

▪ `Static` **type**: `ProtocolType` = `ProtocolType.DidcommBasicMessage`

#### Defined in

[src/prism-agent/protocols/other/BasicMessage.ts:8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/other/BasicMessage.ts#L8)

## Methods

### makeMessage

▸ **makeMessage**(): [`Message`](Domain.Message-1.md)

#### Returns

[`Message`](Domain.Message-1.md)

#### Defined in

[src/prism-agent/protocols/other/BasicMessage.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/other/BasicMessage.ts#L17)

___

### fromMessage

▸ **fromMessage**(`fromMessage`): [`BasicMessage`](BasicMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromMessage` | [`Message`](Domain.Message-1.md) |

#### Returns

[`BasicMessage`](BasicMessage.md)

#### Defined in

[src/prism-agent/protocols/other/BasicMessage.ts:30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/protocols/other/BasicMessage.ts#L30)
