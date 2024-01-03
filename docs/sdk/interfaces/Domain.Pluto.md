[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Pluto

# Interface: Pluto

[Domain](../modules/Domain.md).Pluto

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Table of contents

### Methods

- [fetchCredentialMetadata](Domain.Pluto.md#fetchcredentialmetadata)
- [getAllCredentials](Domain.Pluto.md#getallcredentials)
- [getAllDidPairs](Domain.Pluto.md#getalldidpairs)
- [getAllMediators](Domain.Pluto.md#getallmediators)
- [getAllMessages](Domain.Pluto.md#getallmessages)
- [getAllMessagesByDID](Domain.Pluto.md#getallmessagesbydid)
- [getAllMessagesByFromToDID](Domain.Pluto.md#getallmessagesbyfromtodid)
- [getAllMessagesOfType](Domain.Pluto.md#getallmessagesoftype)
- [getAllMessagesReceived](Domain.Pluto.md#getallmessagesreceived)
- [getAllMessagesReceivedFrom](Domain.Pluto.md#getallmessagesreceivedfrom)
- [getAllMessagesSent](Domain.Pluto.md#getallmessagessent)
- [getAllMessagesSentTo](Domain.Pluto.md#getallmessagessentto)
- [getAllPeerDIDs](Domain.Pluto.md#getallpeerdids)
- [getAllPrismDIDs](Domain.Pluto.md#getallprismdids)
- [getDIDInfoByAlias](Domain.Pluto.md#getdidinfobyalias)
- [getDIDInfoByDID](Domain.Pluto.md#getdidinfobydid)
- [getDIDPrivateKeyByID](Domain.Pluto.md#getdidprivatekeybyid)
- [getDIDPrivateKeysByDID](Domain.Pluto.md#getdidprivatekeysbydid)
- [getLinkSecret](Domain.Pluto.md#getlinksecret)
- [getMessage](Domain.Pluto.md#getmessage)
- [getPairByDID](Domain.Pluto.md#getpairbydid)
- [getPairByName](Domain.Pluto.md#getpairbyname)
- [getPrismDIDKeyPathIndex](Domain.Pluto.md#getprismdidkeypathindex)
- [getPrismLastKeyPathIndex](Domain.Pluto.md#getprismlastkeypathindex)
- [start](Domain.Pluto.md#start)
- [storeCredential](Domain.Pluto.md#storecredential)
- [storeCredentialMetadata](Domain.Pluto.md#storecredentialmetadata)
- [storeDIDPair](Domain.Pluto.md#storedidpair)
- [storeLinkSecret](Domain.Pluto.md#storelinksecret)
- [storeMediator](Domain.Pluto.md#storemediator)
- [storeMessage](Domain.Pluto.md#storemessage)
- [storeMessages](Domain.Pluto.md#storemessages)
- [storePeerDID](Domain.Pluto.md#storepeerdid)
- [storePrismDID](Domain.Pluto.md#storeprismdid)
- [storePrivateKeys](Domain.Pluto.md#storeprivatekeys)

## Methods

### fetchCredentialMetadata

▸ **fetchCredentialMetadata**(`linkSecretName`): `Promise`\<``null`` \| [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md)\>

Fetch the AnonCreds Credential Metadata by its linkSecret name

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<``null`` \| [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:29](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L29)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:202](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L202)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](../classes/Domain.DIDPair.md)[]\>

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](../classes/Domain.DIDPair.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:132](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L132)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

Retrieve all stored mediators.

#### Returns

`Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:197](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L197)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:147](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L147)

___

### getAllMessagesByDID

▸ **getAllMessagesByDID**(`did`): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

Retrieve all stored DIDComm messages, received from or sent to a given DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:152](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L152)

___

### getAllMessagesByFromToDID

▸ **getAllMessagesByFromToDID**(`from`, `to`): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

Retrieve all DIDComm messages containing given "from" AND "to" DIDs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`DID`](../classes/Domain.DID.md) |
| `to` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:187](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L187)

___

### getAllMessagesOfType

▸ **getAllMessagesOfType**(`type`, `relatedWithDID?`): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

Retrieve all stored DIDComm messages with given message type, and
optionally, related to a given DID. "Related" means that message should
contain a given DID in either "from" or "to" field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `relatedWithDID?` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:179](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L179)

___

### getAllMessagesReceived

▸ **getAllMessagesReceived**(): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

Retrieve all stored, received DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:162](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L162)

___

### getAllMessagesReceivedFrom

▸ **getAllMessagesReceivedFrom**(`did`): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

Retrieve all stored DIDComm messages, received from a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:172](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L172)

___

### getAllMessagesSent

▸ **getAllMessagesSent**(): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

Retrieve all stored, sent DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:157](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L157)

___

### getAllMessagesSentTo

▸ **getAllMessagesSentTo**(`did`): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

Retrieve all stored DIDComm messages, sent to a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:167](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L167)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](../classes/PeerDID-1.md)[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](../classes/PeerDID-1.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:117](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L117)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDIDInfo`](../classes/Domain.PrismDIDInfo.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDIDInfo`](../classes/Domain.PrismDIDInfo.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:92](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L92)

___

### getDIDInfoByAlias

▸ **getDIDInfoByAlias**(`alias`): `Promise`\<[`PrismDIDInfo`](../classes/Domain.PrismDIDInfo.md)[]\>

Retrieve DID information for a given DID alias.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |

#### Returns

`Promise`\<[`PrismDIDInfo`](../classes/Domain.PrismDIDInfo.md)[]\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:102](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L102)

___

### getDIDInfoByDID

▸ **getDIDInfoByDID**(`did`): `Promise`\<``null`` \| [`PrismDIDInfo`](../classes/Domain.PrismDIDInfo.md)\>

Retrieve DID information for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<``null`` \| [`PrismDIDInfo`](../classes/Domain.PrismDIDInfo.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:97](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L97)

___

### getDIDPrivateKeyByID

▸ **getDIDPrivateKeyByID**(`id`): `Promise`\<``null`` \| [`PrivateKey`](../classes/Domain.PrivateKey.md)\>

Retrieve private key for a given key ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`PrivateKey`](../classes/Domain.PrivateKey.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:127](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L127)

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

[src/domain/buildingBlocks/Pluto.ts:122](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L122)

___

### getLinkSecret

▸ **getLinkSecret**(`linkSecretName?`): `Promise`\<``null`` \| `string`\>

Retrieve the anoncreds stored link secret by its name

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecretName?` | `string` |

#### Returns

`Promise`\<``null`` \| `string`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:207](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L207)

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<``null`` \| [`Message`](../classes/Domain.Message.md)\>

Retrieve a DIDComm message by ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`Message`](../classes/Domain.Message.md)\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:192](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L192)

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

[src/domain/buildingBlocks/Pluto.ts:137](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L137)

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

[src/domain/buildingBlocks/Pluto.ts:142](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L142)

___

### getPrismDIDKeyPathIndex

▸ **getPrismDIDKeyPathIndex**(`did`): `Promise`\<``null`` \| `number`\>

Retrieve a PRISM DID key path index for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<``null`` \| `number`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:107](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L107)

___

### getPrismLastKeyPathIndex

▸ **getPrismLastKeyPathIndex**(): `Promise`\<`number`\>

Get the last used PRISM key path index.

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:112](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L112)

___

### start

▸ **start**(): `Promise`\<`void`\>

Pluto initialise function

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L36)

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

[src/domain/buildingBlocks/Pluto.ts:87](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L87)

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`, `linkSecret`): `Promise`\<`void`\>

Store the AnonCreds Credential Metadata referencing its linkSecret name

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md) |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:21](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L21)

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

[src/domain/buildingBlocks/Pluto.ts:57](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L57)

___

### storeLinkSecret

▸ **storeLinkSecret**(`linkSecret`, `linkSecretName`): `Promise`\<`void`\>

Store a new anoncreds linkSecret

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecret` | `string` |
| `linkSecretName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:212](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L212)

___

### storeMediator

▸ **storeMediator**(`mediator`, `host`, `routing`): `Promise`\<`void`\>

Store a mediator information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`DID`](../classes/Domain.DID.md) |
| `host` | [`DID`](../classes/Domain.DID.md) |
| `routing` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:82](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L82)

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

Store a DIDComm message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:62](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L62)

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

Store an array of DIDComm messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](../classes/Domain.Message.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:67](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L67)

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

[src/domain/buildingBlocks/Pluto.ts:52](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L52)

___

### storePrismDID

▸ **storePrismDID**(`did`, `keyPathIndex`, `privateKey`, `privateKeyMetaId`, `alias?`): `Promise`\<`void`\>

Store a PRISM DID and its private key with given metadata.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |
| `keyPathIndex` | `number` |
| `privateKey` | [`PrivateKey`](../classes/Domain.PrivateKey.md) |
| `privateKeyMetaId` | ``null`` \| `string` |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:41](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L41)

___

### storePrivateKeys

▸ **storePrivateKeys**(`privateKey`, `did`, `keyPathIndex`, `metaId`): `Promise`\<`void`\>

Store a list of private keys with its metadata and a reference to the DID it belongs to.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](../classes/Domain.PrivateKey.md) |
| `did` | [`DID`](../classes/Domain.DID.md) |
| `keyPathIndex` | `number` |
| `metaId` | ``null`` \| `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:72](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pluto.ts#L72)
