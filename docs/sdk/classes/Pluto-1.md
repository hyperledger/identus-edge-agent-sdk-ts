[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Pluto

# Class: Pluto

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Implements

- [`Pluto`](../interfaces/Domain.Pluto-1.md)

## Table of contents

### Constructors

- [constructor](Pluto-1.md#constructor)

### Properties

- [Repositories](Pluto-1.md#repositories)
- [keyRestoration](Pluto-1.md#keyrestoration)
- [store](Pluto-1.md#store)

### Methods

- [deleteMessage](Pluto-1.md#deletemessage)
- [getAllCredentials](Pluto-1.md#getallcredentials)
- [getAllDidPairs](Pluto-1.md#getalldidpairs)
- [getAllMediators](Pluto-1.md#getallmediators)
- [getAllMessages](Pluto-1.md#getallmessages)
- [getAllPeerDIDs](Pluto-1.md#getallpeerdids)
- [getAllPrismDIDs](Pluto-1.md#getallprismdids)
- [getCredentialMetadata](Pluto-1.md#getcredentialmetadata)
- [getDIDPrivateKeysByDID](Pluto-1.md#getdidprivatekeysbydid)
- [getLinkSecret](Pluto-1.md#getlinksecret)
- [getMessage](Pluto-1.md#getmessage)
- [getPairByDID](Pluto-1.md#getpairbydid)
- [getPairByName](Pluto-1.md#getpairbyname)
- [getPrismDID](Pluto-1.md#getprismdid)
- [mapDIDPairToDomain](Pluto-1.md#mapdidpairtodomain)
- [onlyOne](Pluto-1.md#onlyone)
- [revokeCredential](Pluto-1.md#revokecredential)
- [start](Pluto-1.md#start)
- [storeCredential](Pluto-1.md#storecredential)
- [storeCredentialMetadata](Pluto-1.md#storecredentialmetadata)
- [storeDIDPair](Pluto-1.md#storedidpair)
- [storeLinkSecret](Pluto-1.md#storelinksecret)
- [storeMediator](Pluto-1.md#storemediator)
- [storeMessage](Pluto-1.md#storemessage)
- [storeMessages](Pluto-1.md#storemessages)
- [storePeerDID](Pluto-1.md#storepeerdid)
- [storePrismDID](Pluto-1.md#storeprismdid)
- [storePrivateKey](Pluto-1.md#storeprivatekey)

## Constructors

### constructor

• **new Pluto**(`store`, `keyRestoration`): [`Pluto`](Pluto-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`Store`](../interfaces/Pluto.Store.md) |
| `keyRestoration` | [`KeyRestoration`](../interfaces/Domain.KeyRestoration.md) |

#### Returns

[`Pluto`](Pluto-1.md)

#### Defined in

[src/pluto/Pluto.ts:105](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L105)

## Properties

### Repositories

• `Private` **Repositories**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CredentialMetadata` | `CredentialMetadataRepository` |
| `Credentials` | `CredentialRepository` |
| `DIDKeyLinks` | `DIDKeyLinkRepository` |
| `DIDLinks` | `DIDLinkRepository` |
| `DIDs` | `DIDRepository` |
| `Keys` | `KeyRepository` |
| `LinkSecrets` | `LinkSecretRepository` |
| `Messages` | `MessageRepository` |

#### Defined in

[src/pluto/Pluto.ts:103](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L103)

___

### keyRestoration

• `Private` `Readonly` **keyRestoration**: [`KeyRestoration`](../interfaces/Domain.KeyRestoration.md)

#### Defined in

[src/pluto/Pluto.ts:107](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L107)

___

### store

• `Private` `Readonly` **store**: [`Store`](../interfaces/Pluto.Store.md)

#### Defined in

[src/pluto/Pluto.ts:106](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L106)

## Methods

### deleteMessage

▸ **deleteMessage**(`id`): `Promise`\<`void`\>

Delete a previously stored messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[deleteMessage](../interfaces/Domain.Pluto-1.md#deletemessage)

#### Defined in

[src/pluto/Pluto.ts:112](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L112)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](Domain.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllCredentials](../interfaces/Domain.Pluto-1.md#getallcredentials)

#### Defined in

[src/pluto/Pluto.ts:133](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L133)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](Domain.DIDPair.md)[]\>

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](Domain.DIDPair.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllDidPairs](../interfaces/Domain.Pluto-1.md#getalldidpairs)

#### Defined in

[src/pluto/Pluto.ts:299](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L299)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)[]\>

Mediators *

#### Returns

`Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllMediators](../interfaces/Domain.Pluto-1.md#getallmediators)

#### Defined in

[src/pluto/Pluto.ts:351](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L351)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](Domain.Message-1.md)[]\>

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](Domain.Message-1.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllMessages](../interfaces/Domain.Pluto-1.md#getallmessages)

#### Defined in

[src/pluto/Pluto.ts:280](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L280)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](PeerDID-1.md)[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](PeerDID-1.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllPeerDIDs](../interfaces/Domain.Pluto-1.md#getallpeerdids)

#### Defined in

[src/pluto/Pluto.ts:237](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L237)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](Domain.PrismDID.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDID`](Domain.PrismDID.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllPrismDIDs](../interfaces/Domain.Pluto-1.md#getallprismdids)

#### Defined in

[src/pluto/Pluto.ts:198](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L198)

___

### getCredentialMetadata

▸ **getCredentialMetadata**(`name`): `Promise`\<``null`` \| [`CredentialMetadata`](Domain.CredentialMetadata.md)\>

Fetch the Credential Metadata by its name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``null`` \| [`CredentialMetadata`](Domain.CredentialMetadata.md)\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getCredentialMetadata](../interfaces/Domain.Pluto-1.md#getcredentialmetadata)

#### Defined in

[src/pluto/Pluto.ts:154](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L154)

___

### getDIDPrivateKeysByDID

▸ **getDIDPrivateKeysByDID**(`did`): `Promise`\<[`PrivateKey`](Domain.PrivateKey.md)[]\>

Retrieve available private keys for a given DID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |

#### Returns

`Promise`\<[`PrivateKey`](Domain.PrivateKey.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getDIDPrivateKeysByDID](../interfaces/Domain.Pluto-1.md#getdidprivatekeysbydid)

#### Defined in

[src/pluto/Pluto.ts:176](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L176)

___

### getLinkSecret

▸ **getLinkSecret**(`name?`): `Promise`\<``null`` \| [`LinkSecret`](Domain.LinkSecret.md)\>

Retrieve the stored link secret by its name

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `Domain.LinkSecret.defaultName` |

#### Returns

`Promise`\<``null`` \| [`LinkSecret`](Domain.LinkSecret.md)\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getLinkSecret](../interfaces/Domain.Pluto-1.md#getlinksecret)

#### Defined in

[src/pluto/Pluto.ts:165](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L165)

___

### getMessage

▸ **getMessage**(`id`): `Promise`\<``null`` \| [`Message`](Domain.Message-1.md)\>

Retrieve a DIDComm message by ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<``null`` \| [`Message`](Domain.Message-1.md)\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getMessage](../interfaces/Domain.Pluto-1.md#getmessage)

#### Defined in

[src/pluto/Pluto.ts:276](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L276)

___

### getPairByDID

▸ **getPairByDID**(`did`): `Promise`\<``null`` \| [`DIDPair`](Domain.DIDPair.md)\>

Retrieve a DID pair containing a given DID as either host or receiver.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](Domain.DIDPair.md)\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getPairByDID](../interfaces/Domain.Pluto-1.md#getpairbydid)

#### Defined in

[src/pluto/Pluto.ts:307](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L307)

___

### getPairByName

▸ **getPairByName**(`alias`): `Promise`\<``null`` \| [`DIDPair`](Domain.DIDPair.md)\>

Retrieve a DID pair by a given pair name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `string` |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](Domain.DIDPair.md)\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getPairByName](../interfaces/Domain.Pluto-1.md#getpairbyname)

#### Defined in

[src/pluto/Pluto.ts:324](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L324)

___

### getPrismDID

▸ **getPrismDID**(`didId`): `Promise`\<``null`` \| [`PrismDID`](Domain.PrismDID.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didId` | `string` |

#### Returns

`Promise`\<``null`` \| [`PrismDID`](Domain.PrismDID.md)\>

#### Defined in

[src/pluto/Pluto.ts:206](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L206)

___

### mapDIDPairToDomain

▸ **mapDIDPairToDomain**(`link`): `Promise`\<``null`` \| [`DIDPair`](Domain.DIDPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | `DIDLink` |

#### Returns

`Promise`\<``null`` \| [`DIDPair`](Domain.DIDPair.md)\>

#### Defined in

[src/pluto/Pluto.ts:335](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L335)

___

### onlyOne

▸ **onlyOne**\<`T`\>(`arr`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`T`

#### Defined in

[src/pluto/Pluto.ts:405](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L405)

___

### revokeCredential

▸ **revokeCredential**(`credential`): `Promise`\<`void`\>

Revoke a Credential

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[revokeCredential](../interfaces/Domain.Pluto-1.md#revokecredential)

#### Defined in

[src/pluto/Pluto.ts:138](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L138)

___

### start

▸ **start**(): `Promise`\<`void`\>

Pluto initialise function

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[start](../interfaces/Domain.Pluto-1.md#start)

#### Defined in

[src/pluto/Pluto.ts:121](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L121)

___

### storeCredential

▸ **storeCredential**(`credential`): `Promise`\<`void`\>

Credentials *

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storeCredential](../interfaces/Domain.Pluto-1.md#storecredential)

#### Defined in

[src/pluto/Pluto.ts:129](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L129)

___

### storeCredentialMetadata

▸ **storeCredentialMetadata**(`metadata`): `Promise`\<`void`\>

Credential Metadata *

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`CredentialMetadata`](Domain.CredentialMetadata.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storeCredentialMetadata](../interfaces/Domain.Pluto-1.md#storecredentialmetadata)

#### Defined in

[src/pluto/Pluto.ts:150](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L150)

___

### storeDIDPair

▸ **storeDIDPair**(`host`, `receiver`, `alias`): `Promise`\<`void`\>

DID Pairs *

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`DID`](Domain.DID.md) |
| `receiver` | [`DID`](Domain.DID.md) |
| `alias` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storeDIDPair](../interfaces/Domain.Pluto-1.md#storedidpair)

#### Defined in

[src/pluto/Pluto.ts:287](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L287)

___

### storeLinkSecret

▸ **storeLinkSecret**(`linkSecret`): `Promise`\<`void`\>

LinkSecret *

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkSecret` | [`LinkSecret`](Domain.LinkSecret.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storeLinkSecret](../interfaces/Domain.Pluto-1.md#storelinksecret)

#### Defined in

[src/pluto/Pluto.ts:161](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L161)

___

### storeMediator

▸ **storeMediator**(`mediator`): `Promise`\<`void`\>

Store a mediator information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`Mediator`](../interfaces/Domain.Mediator.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storeMediator](../interfaces/Domain.Pluto-1.md#storemediator)

#### Defined in

[src/pluto/Pluto.ts:387](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L387)

___

### storeMessage

▸ **storeMessage**(`message`): `Promise`\<`void`\>

Messages *

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storeMessage](../interfaces/Domain.Pluto-1.md#storemessage)

#### Defined in

[src/pluto/Pluto.ts:268](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L268)

___

### storeMessages

▸ **storeMessages**(`messages`): `Promise`\<`void`\>

Store an array of DIDComm messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](Domain.Message-1.md)[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storeMessages](../interfaces/Domain.Pluto-1.md#storemessages)

#### Defined in

[src/pluto/Pluto.ts:272](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L272)

___

### storePeerDID

▸ **storePeerDID**(`did`, `privateKeys`): `Promise`\<`void`\>

Peer DIDs *

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `privateKeys` | [`PrivateKey`](Domain.PrivateKey.md)[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storePeerDID](../interfaces/Domain.Pluto-1.md#storepeerdid)

#### Defined in

[src/pluto/Pluto.ts:228](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L228)

___

### storePrismDID

▸ **storePrismDID**(`did`, `privateKey`, `alias?`): `Promise`\<`void`\>

Prism DIDs *

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `privateKey` | [`PrivateKey`](Domain.PrivateKey.md) |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storePrismDID](../interfaces/Domain.Pluto-1.md#storeprismdid)

#### Defined in

[src/pluto/Pluto.ts:187](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L187)

___

### storePrivateKey

▸ **storePrivateKey**(`privateKey`): `Promise`\<`void`\>

PrivateKeys *

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](Domain.PrivateKey.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storePrivateKey](../interfaces/Domain.Pluto-1.md#storeprivatekey)

#### Defined in

[src/pluto/Pluto.ts:172](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pluto/Pluto.ts#L172)
