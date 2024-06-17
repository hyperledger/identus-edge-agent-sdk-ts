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

▸ **backup**(): `Promise`\<\{ `credentials`: \{ `data`: `string` ; `recovery_id`: `string`  }[] ; `did_pairs`: \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] ; `dids`: \{ `alias?`: `string` ; `did`: `string`  }[] ; `keys`: \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] ; `link_secret?`: `string` = linksecret; `mediators`: \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] ; `messages`: `string`[] ; `version?`: ``"0.0.1"``  }\>

create a Backup object from the stored data

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string` ; `recovery_id`: `string`  }[] ; `did_pairs`: \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] ; `dids`: \{ `alias?`: `string` ; `did`: `string`  }[] ; `keys`: \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] ; `link_secret?`: `string` = linksecret; `mediators`: \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] ; `messages`: `string`[] ; `version?`: ``"0.0.1"``  }\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:44](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L44)

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

[src/domain/buildingBlocks/Pluto.ts:179](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L179)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:159](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L159)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](../classes/Domain.DIDPair.md)[]\>

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](../classes/Domain.DIDPair.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:129](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L129)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

Retrieve all stored mediators.

#### Returns

`Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:154](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L154)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](../classes/Domain.Message-1.md)[]\>

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message-1.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:144](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L144)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](../classes/PeerDID-1.md)[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](../classes/PeerDID-1.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:119](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L119)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](../classes/Domain.PrismDID.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDID`](../classes/Domain.PrismDID.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:114](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L114)

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

[src/domain/buildingBlocks/Pluto.ts:61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L61)

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

[src/domain/buildingBlocks/Pluto.ts:124](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L124)

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

[src/domain/buildingBlocks/Pluto.ts:164](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L164)

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

[src/domain/buildingBlocks/Pluto.ts:149](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L149)

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

[src/domain/buildingBlocks/Pluto.ts:134](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L134)

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

[src/domain/buildingBlocks/Pluto.ts:139](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L139)

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

[src/domain/buildingBlocks/Pluto.ts:50](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L50)

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

[src/domain/buildingBlocks/Pluto.ts:174](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L174)

___

### start

▸ **start**(): `Promise`\<`void`\>

Pluto initialise function

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:39](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L39)

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

[src/domain/buildingBlocks/Pluto.ts:109](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L109)

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

[src/domain/buildingBlocks/Pluto.ts:55](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L55)

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

[src/domain/buildingBlocks/Pluto.ts:67](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L67)

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

[src/domain/buildingBlocks/Pluto.ts:84](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L84)

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

[src/domain/buildingBlocks/Pluto.ts:169](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L169)

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

[src/domain/buildingBlocks/Pluto.ts:104](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L104)

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

[src/domain/buildingBlocks/Pluto.ts:89](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L89)

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

[src/domain/buildingBlocks/Pluto.ts:94](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L94)

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

[src/domain/buildingBlocks/Pluto.ts:79](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L79)

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

[src/domain/buildingBlocks/Pluto.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L73)

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

[src/domain/buildingBlocks/Pluto.ts:99](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Pluto.ts#L99)
