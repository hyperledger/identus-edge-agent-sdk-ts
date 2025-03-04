[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / Mercury

# Class: Mercury

Mercury is a powerful and flexible library for working with decentralized identifiers and secure communications
protocols. Whether you are a developer looking to build a secure and private messaging app or a more complex
decentralized system requiring trusted peer-to-peer connections, Mercury provides the tools and features you need to
establish, manage, and secure your communications easily.

**`Export`**

Mercury

## Implements

- [`Mercury`](../interfaces/Domain.Mercury.md)

## Table of contents

### Constructors

- [constructor](Mercury.md#constructor)

### Properties

- [api](Mercury.md#api)
- [castor](Mercury.md#castor)
- [protocol](Mercury.md#protocol)

### Methods

- [getDIDCommDID](Mercury.md#getdidcommdid)
- [getDIDCommURL](Mercury.md#getdidcommurl)
- [makeRequest](Mercury.md#makerequest)
- [notDid](Mercury.md#notdid)
- [packMessage](Mercury.md#packmessage)
- [prepareForwardMessage](Mercury.md#prepareforwardmessage)
- [requiresForwarding](Mercury.md#requiresforwarding)
- [sendMessage](Mercury.md#sendmessage)
- [sendMessageParseMessage](Mercury.md#sendmessageparsemessage)
- [unpackMessage](Mercury.md#unpackmessage)

## Constructors

### constructor

• **new Mercury**(`castor`, `protocol`, `api`): [`Mercury`](Mercury.md)

Creates an instance of Mercury.

#### Parameters

| Name | Type |
| :------ | :------ |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `protocol` | [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md) |
| `api` | [`Api`](../interfaces/Domain.Api.md) |

#### Returns

[`Mercury`](Mercury.md)

#### Defined in

[src/mercury/Mercury.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L29)

## Properties

### api

• **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/mercury/Mercury.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L32)

___

### castor

• **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/mercury/Mercury.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L30)

___

### protocol

• **protocol**: [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md)

#### Defined in

[src/mercury/Mercury.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L31)

## Methods

### getDIDCommDID

▸ **getDIDCommDID**(`document`): `undefined` \| [`DID`](Domain.DID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`DIDDocument`](Domain.DIDDocument.md) |

#### Returns

`undefined` \| [`DID`](Domain.DID.md)

#### Defined in

[src/mercury/Mercury.ts:186](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L186)

___

### getDIDCommURL

▸ **getDIDCommURL**(`document`): `undefined` \| `URL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`DIDDocument`](Domain.DIDDocument.md) |

#### Returns

`undefined` \| `URL`

#### Defined in

[src/mercury/Mercury.ts:177](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L177)

___

### makeRequest

▸ **makeRequest**\<`T`\>(`service`, `message`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | `undefined` \| [`Service`](Domain.Service.md) \| `URL` |
| `message` | `string` |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/mercury/Mercury.ts:101](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L101)

___

### notDid

▸ **notDid**(`did`): did is undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `undefined` \| [`DID`](Domain.DID.md) |

#### Returns

did is undefined

#### Defined in

[src/mercury/Mercury.ts:142](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L142)

___

### packMessage

▸ **packMessage**(`message`): `Promise`\<`string`\>

Asynchronously packs a given message object into a string representation. This function may throw an error if the
message object is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[Mercury](../interfaces/Domain.Mercury.md).[packMessage](../interfaces/Domain.Mercury.md#packmessage)

#### Defined in

[src/mercury/Mercury.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L42)

___

### prepareForwardMessage

▸ **prepareForwardMessage**(`msg`, `encrypted`, `mediatorDID`): `ForwardMessage`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](Domain.Message-1.md) |
| `encrypted` | `string` |
| `mediatorDID` | [`DID`](Domain.DID.md) |

#### Returns

`ForwardMessage`

#### Defined in

[src/mercury/Mercury.ts:158](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L158)

___

### requiresForwarding

▸ **requiresForwarding**(`document`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`DIDDocument`](Domain.DIDDocument.md) |

#### Returns

`boolean`

#### Defined in

[src/mercury/Mercury.ts:199](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L199)

___

### sendMessage

▸ **sendMessage**\<`T`\>(`message`): `Promise`\<`T`\>

Asynchronously sends a given message and returns the response data.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

`Promise`\<`T`\>

**`Async`**

#### Implementation of

[Mercury](../interfaces/Domain.Mercury.md).[sendMessage](../interfaces/Domain.Mercury.md#sendmessage)

#### Defined in

[src/mercury/Mercury.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L70)

___

### sendMessageParseMessage

▸ **sendMessageParseMessage**(`message`): `Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

Asynchronously sends a given message and returns the response message object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

`Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

**`Async`**

#### Implementation of

[Mercury](../interfaces/Domain.Mercury.md).[sendMessageParseMessage](../interfaces/Domain.Mercury.md#sendmessageparsemessage)

#### Defined in

[src/mercury/Mercury.ts:130](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L130)

___

### unpackMessage

▸ **unpackMessage**(`message`): `Promise`\<[`Message`](Domain.Message-1.md)\>

Asynchronously unpacks a given string representation of a message into a message object. This
function may throw an error if the string is not a valid message representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](Domain.Message-1.md)\>

#### Implementation of

[Mercury](../interfaces/Domain.Mercury.md).[unpackMessage](../interfaces/Domain.Mercury.md#unpackmessage)

#### Defined in

[src/mercury/Mercury.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/mercury/Mercury.ts#L58)
