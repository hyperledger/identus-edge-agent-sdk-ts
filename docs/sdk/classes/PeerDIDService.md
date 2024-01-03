[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / PeerDIDService

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

• **new PeerDIDService**(`type`, `serviceEndpoint`, `routingKeys`, `accept`): [`PeerDIDService`](PeerDIDService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `serviceEndpoint` | `string` |
| `routingKeys` | `string`[] |
| `accept` | `string`[] |

#### Returns

[`PeerDIDService`](PeerDIDService.md)

#### Defined in

[src/peer-did/PeerDID.ts:51](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L51)

## Properties

### accept

• `Readonly` **accept**: `string`[]

#### Defined in

[src/peer-did/PeerDID.ts:49](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L49)

___

### routingKeys

• `Readonly` **routingKeys**: `string`[]

#### Defined in

[src/peer-did/PeerDID.ts:48](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L48)

___

### serviceEndpoint

• `Readonly` **serviceEndpoint**: `string`

#### Defined in

[src/peer-did/PeerDID.ts:47](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L47)

___

### type

• `Readonly` **type**: `string`

#### Defined in

[src/peer-did/PeerDID.ts:46](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L46)

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

[src/peer-did/PeerDID.ts:66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L66)

___

### DIDCommMessagingEncodedKey

▪ `Static` `Readonly` **DIDCommMessagingEncodedKey**: ``"dm"``

#### Defined in

[src/peer-did/PeerDID.ts:64](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L64)

___

### DIDCommMessagingKey

▪ `Static` `Readonly` **DIDCommMessagingKey**: ``"DIDCommMessaging"``

#### Defined in

[src/peer-did/PeerDID.ts:63](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L63)

## Methods

### encode

▸ **encode**(): [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)

#### Returns

[`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)

#### Defined in

[src/peer-did/PeerDID.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L73)

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

[src/peer-did/PeerDID.ts:85](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/peer-did/PeerDID.ts#L85)
