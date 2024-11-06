[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / OutOfBandInvitation

# Class: OutOfBandInvitation

## Table of contents

### Constructors

- [constructor](OutOfBandInvitation.md#constructor)

### Properties

- [attachments](OutOfBandInvitation.md#attachments)
- [body](OutOfBandInvitation.md#body)
- [expiration](OutOfBandInvitation.md#expiration)
- [from](OutOfBandInvitation.md#from)
- [id](OutOfBandInvitation.md#id)
- [type](OutOfBandInvitation.md#type)

### Accessors

- [isExpired](OutOfBandInvitation.md#isexpired)

### Methods

- [parsePrismOnboardingInvitationFromJson](OutOfBandInvitation.md#parseprismonboardinginvitationfromjson)

## Constructors

### constructor

• **new OutOfBandInvitation**(`body`, `from`, `id?`, `attachments?`, `expiration?`): [`OutOfBandInvitation`](OutOfBandInvitation.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `body` | [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md) | `undefined` |
| `from` | `string` | `undefined` |
| `id` | `string` | `undefined` |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] | `[]` |
| `expiration` | ``null`` \| `number` | `null` |

#### Returns

[`OutOfBandInvitation`](OutOfBandInvitation.md)

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L12)

## Properties

### attachments

• **attachments**: [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] = `[]`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L16)

___

### body

• **body**: [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L13)

___

### expiration

• **expiration**: ``null`` \| `number` = `null`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L17)

___

### from

• **from**: `string`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L14)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L15)

___

### type

• **type**: [`ProtocolType`](../enums/ProtocolType.md) = `ProtocolType.Didcomminvitation`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L10)

## Accessors

### isExpired

• `get` **isExpired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L20)

## Methods

### parsePrismOnboardingInvitationFromJson

▸ **parsePrismOnboardingInvitationFromJson**(`json`): `PrismOnboardingInvitation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`PrismOnboardingInvitation`

**`Deprecated`**

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L34)
