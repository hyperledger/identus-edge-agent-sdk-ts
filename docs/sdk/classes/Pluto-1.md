[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / Pluto

# Class: Pluto

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Hierarchy

- [`Controller`](Domain.Protocols.Startable.Controller.md)

  ↳ **`Pluto`**

## Implements

- [`Pluto`](../interfaces/Domain.Pluto-1.md)

## Table of contents

### Constructors

- [constructor](Pluto-1.md#constructor)

### Properties

- [BackupMgr](Pluto-1.md#backupmgr)
- [Repositories](Pluto-1.md#repositories)
- [keyRestoration](Pluto-1.md#keyrestoration)
- [state](Pluto-1.md#state)
- [store](Pluto-1.md#store)

### Methods

- [\_start](Pluto-1.md#_start)
- [\_stop](Pluto-1.md#_stop)
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
- [stop](Pluto-1.md#stop)
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
| `keyRestoration` | [`KeyRestoration`](../interfaces/Domain.Protocols.KeyRestoration.md) |

#### Returns

[`Pluto`](Pluto-1.md)

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[constructor](Domain.Protocols.Startable.Controller.md#constructor)

#### Defined in

[src/pluto/Pluto.ts:116](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L116)

## Properties

### BackupMgr

• **BackupMgr**: `BackupManager`

#### Defined in

[src/pluto/Pluto.ts:113](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L113)

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

[src/pluto/Pluto.ts:114](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L114)

___

### keyRestoration

• `Private` `Readonly` **keyRestoration**: [`KeyRestoration`](../interfaces/Domain.Protocols.KeyRestoration.md)

#### Defined in

[src/pluto/Pluto.ts:118](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L118)

___

### state

• **state**: [`State`](../enums/Domain.Protocols.Startable.State.md) = `State.STOPPED`

current status of the entity

#### Inherited from

[Controller](Domain.Protocols.Startable.Controller.md).[state](Domain.Protocols.Startable.Controller.md#state)

#### Defined in

[src/domain/protocols/Startable.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/protocols/Startable.ts#L42)

___

### store

• `Private` `Readonly` **store**: [`Store`](../interfaces/Pluto.Store.md)

#### Defined in

[src/pluto/Pluto.ts:117](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L117)

## Methods

### \_start

▸ **_start**(): `Promise`\<`void`\>

internal method to define specific startup routine

used by `start()` internally

implement with `protected` to keep hidden from class interface

#### Returns

`Promise`\<`void`\>

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[_start](Domain.Protocols.Startable.Controller.md#_start)

#### Defined in

[src/pluto/Pluto.ts:133](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L133)

___

### \_stop

▸ **_stop**(): `Promise`\<`void`\>

internal method to define teardown routine

used by `stop()` internally

implement with `protected` to keep hidden from class interface

#### Returns

`Promise`\<`void`\>

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[_stop](Domain.Protocols.Startable.Controller.md#_stop)

#### Defined in

[src/pluto/Pluto.ts:139](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L139)

___

### backup

▸ **backup**(`version?`): `Promise`\<\{ `credentials`: \{ `data`: `string` ; `recovery_id`: `string`  }[] ; `did_pairs`: \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] ; `dids`: \{ `alias?`: `string` ; `did`: `string`  }[] ; `keys`: \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] ; `link_secret?`: `string` = linksecret; `mediators`: \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] ; `messages`: `string`[] ; `version?`: ``"0.0.1"``  }\>

Backups *

#### Parameters

| Name | Type |
| :------ | :------ |
| `version?` | ``"0.0.1"`` |

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string` ; `recovery_id`: `string`  }[] ; `did_pairs`: \{ `alias`: `string` ; `holder`: `string` ; `recipient`: `string`  }[] ; `dids`: \{ `alias?`: `string` ; `did`: `string`  }[] ; `keys`: \{ `did?`: `string` ; `index?`: `number` ; `key`: `string` ; `recovery_id`: `string`  }[] ; `link_secret?`: `string` = linksecret; `mediators`: \{ `holder_did`: `string` ; `mediator_did`: `string` ; `routing_did`: `string`  }[] ; `messages`: `string`[] ; `version?`: ``"0.0.1"``  }\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[backup](../interfaces/Domain.Pluto-1.md#backup)

#### Defined in

[src/pluto/Pluto.ts:146](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L146)

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

[src/pluto/Pluto.ts:154](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L154)

___

### getAllCredentials

▸ **getAllCredentials**(): `Promise`\<[`Credential`](Domain.Credential.md)[]\>

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllCredentials](../interfaces/Domain.Pluto-1.md#getallcredentials)

#### Defined in

[src/pluto/Pluto.ts:168](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L168)

___

### getAllDidPairs

▸ **getAllDidPairs**(): `Promise`\<[`DIDPair`](Domain.DIDPair.md)[]\>

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](Domain.DIDPair.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllDidPairs](../interfaces/Domain.Pluto-1.md#getalldidpairs)

#### Defined in

[src/pluto/Pluto.ts:348](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L348)

___

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)[]\>

Mediators *

#### Returns

`Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllMediators](../interfaces/Domain.Pluto-1.md#getallmediators)

#### Defined in

[src/pluto/Pluto.ts:400](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L400)

___

### getAllMessages

▸ **getAllMessages**(): `Promise`\<[`Message`](Domain.Message-1.md)[]\>

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](Domain.Message-1.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllMessages](../interfaces/Domain.Pluto-1.md#getallmessages)

#### Defined in

[src/pluto/Pluto.ts:329](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L329)

___

### getAllPeerDIDs

▸ **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](PeerDID-1.md)[]\>

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](PeerDID-1.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllPeerDIDs](../interfaces/Domain.Pluto-1.md#getallpeerdids)

#### Defined in

[src/pluto/Pluto.ts:284](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L284)

___

### getAllPrismDIDs

▸ **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](Domain.PrismDID.md)[]\>

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDID`](Domain.PrismDID.md)[]\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[getAllPrismDIDs](../interfaces/Domain.Pluto-1.md#getallprismdids)

#### Defined in

[src/pluto/Pluto.ts:246](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L246)

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

[src/pluto/Pluto.ts:189](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L189)

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

[src/pluto/Pluto.ts:211](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L211)

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

[src/pluto/Pluto.ts:200](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L200)

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

[src/pluto/Pluto.ts:325](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L325)

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

[src/pluto/Pluto.ts:356](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L356)

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

[src/pluto/Pluto.ts:373](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L373)

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

[src/pluto/Pluto.ts:258](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L258)

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

[src/pluto/Pluto.ts:384](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L384)

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

[src/pluto/Pluto.ts:454](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L454)

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

[src/pluto/Pluto.ts:150](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L150)

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

[src/pluto/Pluto.ts:173](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L173)

___

### start

▸ **start**(): `Promise`\<`any`\>

Pluto initialise function

#### Returns

`Promise`\<`any`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[start](../interfaces/Domain.Pluto-1.md#start)

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[start](Domain.Protocols.Startable.Controller.md#start)

#### Defined in

[src/pluto/Pluto.ts:126](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L126)

___

### stop

▸ **stop**(): `Promise`\<`any`\>

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<`any`\>

#### Implementation of

[Pluto](../interfaces/Domain.Pluto-1.md).[stop](../interfaces/Domain.Pluto-1.md#stop)

#### Overrides

[Controller](Domain.Protocols.Startable.Controller.md).[stop](Domain.Protocols.Startable.Controller.md#stop)

#### Defined in

[src/pluto/Pluto.ts:129](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L129)

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

[src/pluto/Pluto.ts:164](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L164)

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

[src/pluto/Pluto.ts:185](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L185)

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

[src/pluto/Pluto.ts:221](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L221)

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

[src/pluto/Pluto.ts:336](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L336)

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

[src/pluto/Pluto.ts:196](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L196)

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

[src/pluto/Pluto.ts:436](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L436)

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

[src/pluto/Pluto.ts:315](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L315)

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

[src/pluto/Pluto.ts:319](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L319)

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

[src/pluto/Pluto.ts:276](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L276)

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

[src/pluto/Pluto.ts:235](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L235)

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

[src/pluto/Pluto.ts:207](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/pluto/Pluto.ts#L207)
