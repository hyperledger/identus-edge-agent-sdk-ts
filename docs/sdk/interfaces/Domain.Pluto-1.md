[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Pluto

# Interface: Pluto

[Domain](../modules/Domain.md).Pluto

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implemented by

- [`Pluto`](../classes/Pluto-1.md)

## Table of contents

### Methods

- [deleteMessage](Domain.Pluto-1.md#deletemessage)
- [getAllCredentials](Domain.Pluto-1.md#getallcredentials)
- [getAllDidPairs](Domain.Pluto-1.md#getalldidpairs)
- [getAllMediators](Domain.Pluto-1.md#getallmediators)
- [getAllMessages](Domain.Pluto-1.md#getallmessages)
- [getAllPeerDIDs](Domain.Pluto-1.md#getallpeerdids)
- [getAllPrismDIDs](Domain.Pluto-1.md#getallprismdids)
- [getCredentialMetadata](Domain.Pluto-1.md#getcredentialmetadata)
- [getDIDPrivateKeysByDID](Domain.Pluto-1.md#getdidprivatekeysbydid)
- [getLinkSecret](Domain.Pluto-1.md#getlinksecret)
- [getMessage](Domain.Pluto-1.md#getmessage)
- [getPairByDID](Domain.Pluto-1.md#getpairbydid)
- [getPairByName](Domain.Pluto-1.md#getpairbyname)
- [revokeCredential](Domain.Pluto-1.md#revokecredential)
- [start](Domain.Pluto-1.md#start)
- [storeCredential](Domain.Pluto-1.md#storecredential)
- [storeCredentialMetadata](Domain.Pluto-1.md#storecredentialmetadata)
- [storeDIDPair](Domain.Pluto-1.md#storedidpair)
- [storeLinkSecret](Domain.Pluto-1.md#storelinksecret)
- [storeMediator](Domain.Pluto-1.md#storemediator)
- [storeMessage](Domain.Pluto-1.md#storemessage)
- [storeMessages](Domain.Pluto-1.md#storemessages)
- [storePeerDID](Domain.Pluto-1.md#storepeerdid)
- [storePrismDID](Domain.Pluto-1.md#storeprismdid)
- [storePrivateKey](Domain.Pluto-1.md#storeprivatekey)

## Methods

### deleteMessage

▸ **deleteMessage**(`uuid`): `Promise`\<`void`\>

Delete a previously stored messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:158](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L158)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:138](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L138)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](../classes/Domain.DIDPair.md)[]\>

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](../classes/Domain.DIDPair.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:108](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L108)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

Retrieve all stored mediators.

#### Returns

`Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:133](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L133)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](../classes/Domain.Message-1.md)[]\>

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message-1.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:123](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L123)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](../classes/PeerDID-1.md)[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](../classes/PeerDID-1.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:98](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L98)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](../classes/Domain.PrismDID.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDID`](../classes/Domain.PrismDID.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:93](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L93)

___

### getCredentialMetadata

▸ **getCredentialMetadata**(`name`): `Promise`\<``null`` \| [`CredentialMetadata`](../classes/Domain.CredentialMetadata.md)\>

Fetch the Credential Metadata by its name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| [`CredentialMetadata`](../classes/Domain.CredentialMetadata.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:48](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L48)

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`did`): `Promise`\<[`PrivateKey`](../classes/Domain.PrivateKey.md)[]\>

Retrieve available private keys for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<[`PrivateKey`](../classes/Domain.PrivateKey.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:103](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L103)

___

### getLinkSecret

▸ **getLinkSecret**(`name?`): `Promise`\<``null`` \| [`LinkSecret`](../classes/Domain.LinkSecret.md)\>

Retrieve the stored link secret by its name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Promise`\<``null`` \| [`LinkSecret`](../classes/Domain.LinkSecret.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:143](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L143)

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<``null`` \| [`Message`](../classes/Domain.Message-1.md)\>

Retrieve a DIDComm message by ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`Message`](../classes/Domain.Message-1.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:128](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L128)

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`\<``null`` \| [`DIDPair`](../classes/Domain.DIDPair.md)\>

Retrieve a DID pair containing a given DID as either host or receiver.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](../classes/Domain.DIDPair.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:113](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L113)

___

### getPairByName

▸ **getPairByName**(`name`): `Promise`\<``null`` \| [`DIDPair`](../classes/Domain.DIDPair.md)\>

Retrieve a DID pair by a given pair name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](../classes/Domain.DIDPair.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:118](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L118)

___

### revokeCredential

▸ **revokeCredential**(`credential`): `Promise`\<`void`\>

Revoke a Credential

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:153](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L153)

___

### start

▸ **start**(): `Promise`\<`void`\>

Pluto initialise function

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:37](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L37)

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`\<`void`\>

Store a Credential into the Database

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:88](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L88)

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`): `Promise`\<`void`\>

Store the Credential Metadata

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`CredentialMetadata`](../classes/Domain.CredentialMetadata.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:42](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L42)

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `name`): `Promise`\<`void`\>

Store a named pair of DIDs representing a DIDComm connection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`DID`](../classes/Domain.DID.md) |
| `receiver` | [`DID`](../classes/Domain.DID.md) |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:63](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L63)

___

### storeLinkSecret

▸ **storeLinkSecret**(`linkSecret`): `Promise`\<`void`\>

Store a new linkSecret

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecret` | [`LinkSecret`](../classes/Domain.LinkSecret.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:148](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L148)

___

### storeMediator

▸ **storeMediator**(`mediator`): `Promise`\<`void`\>

Store a mediator information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`Mediator`](Domain.Mediator.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:83](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L83)

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

Store a DIDComm message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message-1.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:68](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L68)

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

Store an array of DIDComm messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](../classes/Domain.Message-1.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L73)

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`\<`void`\>

Store a Peer DID and an array of its privateKeys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |
| `privateKeys` | [`PrivateKey`](../classes/Domain.PrivateKey.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:58](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L58)

___

### storePrismDID

▸ **storePrismDID**(`did`, `privateKey`, `alias?`): `Promise`\<`void`\>

Store a PRISM DID and its private key with given metadata.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |
| `privateKey` | [`PrivateKey`](../classes/Domain.PrivateKey.md) |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L53)

___

### storePrivateKey

▸ **storePrivateKey**(`privateKey`): `Promise`\<`void`\>

Store a list of private keys with its metadata and a reference to the DID it belongs to.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](../classes/Domain.PrivateKey.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:78](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/buildingBlocks/Pluto.ts#L78)
