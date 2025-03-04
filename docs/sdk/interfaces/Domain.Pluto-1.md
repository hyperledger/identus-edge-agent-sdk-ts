[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Pluto

# Interface: Pluto

[Domain](../modules/Domain.md).Pluto

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implemented by

- [`Pluto`](../classes/Pluto-1.md)

## Table of contents

### Methods

- [backup](Domain.Pluto-1.md#backup)
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
- [restore](Domain.Pluto-1.md#restore)
- [revokeCredential](Domain.Pluto-1.md#revokecredential)
- [start](Domain.Pluto-1.md#start)
- [stop](Domain.Pluto-1.md#stop)
- [storeCredential](Domain.Pluto-1.md#storecredential)
- [storeCredentialMetadata](Domain.Pluto-1.md#storecredentialmetadata)
- [storeDID](Domain.Pluto-1.md#storedid)
- [storeDIDPair](Domain.Pluto-1.md#storedidpair)
- [storeLinkSecret](Domain.Pluto-1.md#storelinksecret)
- [storeMediator](Domain.Pluto-1.md#storemediator)
- [storeMessage](Domain.Pluto-1.md#storemessage)
- [storeMessages](Domain.Pluto-1.md#storemessages)
- [storePeerDID](Domain.Pluto-1.md#storepeerdid)
- [storePrismDID](Domain.Pluto-1.md#storeprismdid)
- [storePrivateKey](Domain.Pluto-1.md#storeprivatekey)

## Methods

### backup

▸ **backup**(`version?`): `Promise`\<\{ `credentials`: \{ `data`: `string` ; `recovery_id`: `string`  }[] ; `did_pairs`: \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] ; `dids`: \{ `alias?`: `string` ; `did`: `string`  }[] ; `keys`: \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] ; `link_secret?`: `string` = linksecret; `mediators`: \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] ; `messages`: `string`[] ; `version?`: ``"0.0.1"``  }\>

create a Backup object from the stored data

#### Parameters

| Name | Type |
| :------ | :------ |
| `version?` | ``"0.0.1"`` |

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string` ; `recovery_id`: `string`  }[] ; `did_pairs`: \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] ; `dids`: \{ `alias?`: `string` ; `did`: `string`  }[] ; `keys`: \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] ; `link_secret?`: `string` = linksecret; `mediators`: \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] ; `messages`: `string`[] ; `version?`: ``"0.0.1"``  }\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L47)

___

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

[src/domain/buildingBlocks/Pluto.ts:182](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L182)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:162](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L162)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](../classes/Domain.DIDPair.md)[]\>

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](../classes/Domain.DIDPair.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:132](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L132)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

Retrieve all stored mediators.

#### Returns

`Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:157](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L157)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](../classes/Domain.Message-1.md)[]\>

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message-1.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:147](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L147)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](../classes/PeerDID-1.md)[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](../classes/PeerDID-1.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:122](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L122)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](../classes/Domain.PrismDID.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDID`](../classes/Domain.PrismDID.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:117](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L117)

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

[src/domain/buildingBlocks/Pluto.ts:64](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L64)

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

[src/domain/buildingBlocks/Pluto.ts:127](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L127)

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

[src/domain/buildingBlocks/Pluto.ts:167](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L167)

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

[src/domain/buildingBlocks/Pluto.ts:152](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L152)

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

[src/domain/buildingBlocks/Pluto.ts:137](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L137)

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

[src/domain/buildingBlocks/Pluto.ts:142](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L142)

___

### restore

▸ **restore**(`backup`): `Promise`\<`void`\>

load the given data into the store

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `backup` | `Object` | `undefined` |
| `backup.credentials` | \{ `data`: `string` ; `recovery_id`: `string`  }[] | `undefined` |
| `backup.did_pairs` | \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] | `undefined` |
| `backup.dids` | \{ `alias?`: `string` ; `did`: `string`  }[] | `undefined` |
| `backup.keys` | \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] | `undefined` |
| `backup.link_secret?` | `string` | `linksecret` |
| `backup.mediators` | \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] | `undefined` |
| `backup.messages` | `string`[] | `undefined` |
| `backup.version?` | ``"0.0.1"`` | `undefined` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L53)

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

[src/domain/buildingBlocks/Pluto.ts:177](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L177)

___

### start

▸ **start**(): `Promise`\<`void`\>

Pluto initialise function

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L41)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L42)

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

[src/domain/buildingBlocks/Pluto.ts:112](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L112)

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

[src/domain/buildingBlocks/Pluto.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L58)

___

### storeDID

▸ **storeDID**(`did`, `keys?`, `alias?`): `Promise`\<`void`\>

Store a DID
with optional private key(s) and alias

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |
| `keys?` | `Arrayable`\<[`PrivateKey`](../classes/Domain.PrivateKey.md)\> |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L70)

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

[src/domain/buildingBlocks/Pluto.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L87)

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

[src/domain/buildingBlocks/Pluto.ts:172](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L172)

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

[src/domain/buildingBlocks/Pluto.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L107)

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

[src/domain/buildingBlocks/Pluto.ts:92](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L92)

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

[src/domain/buildingBlocks/Pluto.ts:97](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L97)

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

**`Deprecated`**

use storeDID instead

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L82)

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

**`Deprecated`**

use storeDID instead

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:76](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L76)

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

[src/domain/buildingBlocks/Pluto.ts:102](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/buildingBlocks/Pluto.ts#L102)
