[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / OutOfBandInvitation

# Class: OutOfBandInvitation

## Table of contents

### Constructors

- [constructor](OutOfBandInvitation.md#constructor)

### Properties

- [body](OutOfBandInvitation.md#body)
- [from](OutOfBandInvitation.md#from)
- [id](OutOfBandInvitation.md#id)
- [type](OutOfBandInvitation.md#type)

### Methods

- [parseOutOfBandInvitationFromJson](OutOfBandInvitation.md#parseoutofbandinvitationfromjson)
- [parsePrismOnboardingInvitationFromJson](OutOfBandInvitation.md#parseprismonboardinginvitationfromjson)

## Constructors

### constructor

• **new OutOfBandInvitation**(`body`, `from`, `id?`): [`OutOfBandInvitation`](OutOfBandInvitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md) |
| `from` | `string` |
| `id` | `string` |

#### Returns

[`OutOfBandInvitation`](OutOfBandInvitation.md)

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L12)

## Properties

### body

• **body**: [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L13)

___

### from

• **from**: `string`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L14)

___

### id

• **id**: `string`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L15)

___

### type

• **type**: `ProtocolType` = `ProtocolType.Didcomminvitation`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:10](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L10)

## Methods

### parseOutOfBandInvitationFromJson

▸ **parseOutOfBandInvitationFromJson**(`json`): [`OutOfBandInvitation`](OutOfBandInvitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`OutOfBandInvitation`](OutOfBandInvitation.md)

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:39](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L39)

___

### parsePrismOnboardingInvitationFromJson

▸ **parsePrismOnboardingInvitationFromJson**(`json`): `PrismOnboardingInvitation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`PrismOnboardingInvitation`

#### Defined in

[src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts:18](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/protocols/invitation/v2/OutOfBandInvitation.ts#L18)
