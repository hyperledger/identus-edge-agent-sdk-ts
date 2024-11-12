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

- [BackupMgr](Pluto-1.md#backupmgr)
- [Repositories](Pluto-1.md#repositories)
- [keyRestoration](Pluto-1.md#keyrestoration)
- [store](Pluto-1.md#store)

### Methods

- [backup](Pluto-1.md#backup)
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
- [getPrismDIDS](Pluto-1.md#getprismdids)
- [mapDIDPairToDomain](Pluto-1.md#mapdidpairtodomain)
- [onlyOne](Pluto-1.md#onlyone)
- [restore](Pluto-1.md#restore)
- [revokeCredential](Pluto-1.md#revokecredential)
- [start](Pluto-1.md#start)
- [storeCredential](Pluto-1.md#storecredential)
- [storeCredentialMetadata](Pluto-1.md#storecredentialmetadata)
- [storeDID](Pluto-1.md#storedid)
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

[src/pluto/Pluto.ts:109](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L109)

## Properties

### BackupMgr

• **BackupMgr**: `BackupManager`

#### Defined in

[src/pluto/Pluto.ts:106](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L106)

___

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

[src/pluto/Pluto.ts:107](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L107)

___

### keyRestoration

• `Private` `Readonly` **keyRestoration**: [`KeyRestoration`](../interfaces/Domain.KeyRestoration.md)

#### Defined in

[src/pluto/Pluto.ts:111](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L111)

___

### store

• `Private` `Readonly` **store**: [`Store`](../interfaces/Pluto.Store.md)

#### Defined in

[src/pluto/Pluto.ts:110](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L110)

## Methods

### backup

▸ **backup**(): `Promise`\<\{ `credentials`: \{ `data`: `string` ; `recovery_id`: `string`  }[] ; `did_pairs`: \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] ; `dids`: \{ `alias?`: `string` ; `did`: `string`  }[] ; `keys`: \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] ; `link_secret?`: `string` = linksecret; `mediators`: \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] ; `messages`: `string`[] ; `version?`: ``"0.0.1"``  }\>

Backups *

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string` ; `recovery_id`: `string`  }[] ; `did_pairs`: \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] ; `dids`: \{ `alias?`: `string` ; `did`: `string`  }[] ; `keys`: \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] ; `link_secret?`: `string` = linksecret; `mediators`: \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] ; `messages`: `string`[] ; `version?`: ``"0.0.1"``  }\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[backup](../interfaces/Domain.Pluto-1.md#backup)

#### Defined in

[src/pluto/Pluto.ts:124](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L124)

___

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

[src/pluto/Pluto.ts:132](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L132)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](Domain.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllCredentials](../interfaces/Domain.Pluto-1.md#getallcredentials)

#### Defined in

[src/pluto/Pluto.ts:146](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L146)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](Domain.DIDPair.md)[]\>

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](Domain.DIDPair.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllDidPairs](../interfaces/Domain.Pluto-1.md#getalldidpairs)

#### Defined in

[src/pluto/Pluto.ts:326](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L326)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)[]\>

Mediators *

#### Returns

`Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllMediators](../interfaces/Domain.Pluto-1.md#getallmediators)

#### Defined in

[src/pluto/Pluto.ts:378](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L378)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](Domain.Message-1.md)[]\>

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](Domain.Message-1.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllMessages](../interfaces/Domain.Pluto-1.md#getallmessages)

#### Defined in

[src/pluto/Pluto.ts:307](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L307)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](PeerDID-1.md)[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](PeerDID-1.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllPeerDIDs](../interfaces/Domain.Pluto-1.md#getallpeerdids)

#### Defined in

[src/pluto/Pluto.ts:262](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L262)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](Domain.PrismDID.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDID`](Domain.PrismDID.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllPrismDIDs](../interfaces/Domain.Pluto-1.md#getallprismdids)

#### Defined in

[src/pluto/Pluto.ts:224](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L224)

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

[src/pluto/Pluto.ts:167](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L167)

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

[src/pluto/Pluto.ts:189](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L189)

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

[src/pluto/Pluto.ts:178](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L178)

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

[src/pluto/Pluto.ts:303](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L303)

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

[src/pluto/Pluto.ts:334](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L334)

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

[src/pluto/Pluto.ts:351](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L351)

___

### getPrismDIDS

▸ **getPrismDIDS**(`didId`): `Promise`\<[`PrismDID`](Domain.PrismDID.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didId` | `string` |

#### Returns

`Promise`\<[`PrismDID`](Domain.PrismDID.md)[]\>

#### Defined in

[src/pluto/Pluto.ts:236](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L236)

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

[src/pluto/Pluto.ts:362](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L362)

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

[src/pluto/Pluto.ts:432](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L432)

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

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[restore](../interfaces/Domain.Pluto-1.md#restore)

#### Defined in

[src/pluto/Pluto.ts:128](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L128)

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

[src/pluto/Pluto.ts:151](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L151)

___

### start

▸ **start**(): `Promise`\<`void`\>

Pluto initialise function

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[start](../interfaces/Domain.Pluto-1.md#start)

#### Defined in

[src/pluto/Pluto.ts:117](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L117)

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

[src/pluto/Pluto.ts:142](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L142)

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

[src/pluto/Pluto.ts:163](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L163)

___

### storeDID

▸ **storeDID**(`did`, `keys?`, `alias?`): `Promise`\<`void`\>

DIDs *

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `keys?` | `Arrayable`\<[`PrivateKey`](Domain.PrivateKey.md)\> |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[storeDID](../interfaces/Domain.Pluto-1.md#storedid)

#### Defined in

[src/pluto/Pluto.ts:199](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L199)

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

[src/pluto/Pluto.ts:314](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L314)

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

[src/pluto/Pluto.ts:174](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L174)

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

[src/pluto/Pluto.ts:414](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L414)

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

[src/pluto/Pluto.ts:293](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L293)

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

[src/pluto/Pluto.ts:297](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L297)

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

[src/pluto/Pluto.ts:254](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L254)

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

[src/pluto/Pluto.ts:213](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L213)

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

[src/pluto/Pluto.ts:185](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/pluto/Pluto.ts#L185)
