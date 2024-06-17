[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / PeerDIDService

# Class: PeerDIDService

Provides functionality to transfrom peerDIDServices from our interfaces into DIDComm module ones

## Table of contents

### Constructors

- [constructor](PeerDIDService.md#constructor)

### Properties

- [accept](PeerDIDService.md#accept)
- [routingKeys](PeerDIDService.md#routingkeys)
- [serviceEndpoint](PeerDIDService.md#serviceendpoint)
- [type](PeerDIDService.md#type)
- [CodingKeys](PeerDIDService.md#codingkeys)
- [DIDCommMessagingEncodedKey](PeerDIDService.md#didcommmessagingencodedkey)
- [DIDCommMessagingKey](PeerDIDService.md#didcommmessagingkey)

### Methods

- [encode](PeerDIDService.md#encode)
- [decode](PeerDIDService.md#decode)

## Constructors

### constructor

• **new PeerDIDService**(`type`, `serviceEndpoint`, `routingKeys?`, `accept?`): [`PeerDIDService`](PeerDIDService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `serviceEndpoint` | `string` |
| `routingKeys?` | `string`[] |
| `accept?` | `string`[] |

#### Returns

[`PeerDIDService`](PeerDIDService.md)

#### Defined in

[src/peer-did/PeerDID.ts:53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L53)

## Properties

### accept

• `Optional` `Readonly` **accept**: `string`[]

#### Defined in

[src/peer-did/PeerDID.ts:51](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L51)

___

### routingKeys

• `Optional` `Readonly` **routingKeys**: `string`[]

#### Defined in

[src/peer-did/PeerDID.ts:50](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L50)

___

### serviceEndpoint

• `Readonly` **serviceEndpoint**: `string`

#### Defined in

[src/peer-did/PeerDID.ts:49](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L49)

___

### type

• `Readonly` **type**: `string`

#### Defined in

[src/peer-did/PeerDID.ts:48](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L48)

___

### CodingKeys

▪ `Static` `Readonly` **CodingKeys**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accept` | `string` |
| `routingKeys` | `string` |
| `serviceEndpoint` | `string` |
| `type` | `string` |

#### Defined in

[src/peer-did/PeerDID.ts:68](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L68)

___

### DIDCommMessagingEncodedKey

▪ `Static` `Readonly` **DIDCommMessagingEncodedKey**: ``"dm"``

#### Defined in

[src/peer-did/PeerDID.ts:66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L66)

___

### DIDCommMessagingKey

▪ `Static` `Readonly` **DIDCommMessagingKey**: ``"DIDCommMessaging"``

#### Defined in

[src/peer-did/PeerDID.ts:65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L65)

## Methods

### encode

▸ **encode**(): [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)

#### Returns

[`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)

#### Defined in

[src/peer-did/PeerDID.ts:75](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L75)

___

### decode

▸ **decode**(`encoded`): [`PeerDIDService`](PeerDIDService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md) |

#### Returns

[`PeerDIDService`](PeerDIDService.md)

#### Defined in

[src/peer-did/PeerDID.ts:89](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/peer-did/PeerDID.ts#L89)
