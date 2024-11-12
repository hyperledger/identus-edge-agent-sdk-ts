[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / BasicMediatorHandler

# Class: BasicMediatorHandler

A basic implementation of our MediatorHandler Interface which is mainly used
to establish mediation and get new messages using the mediation and pickup didcomm v2 protocols

 BasicMediatorHandler

## Implements

- [`MediatorHandler`](MediatorHandler.md)

## Table of contents

### Constructors

- [constructor](BasicMediatorHandler.md#constructor)

### Properties

- [mediator](BasicMediatorHandler.md#mediator)
- [mediatorDID](BasicMediatorHandler.md#mediatordid)
- [mercury](BasicMediatorHandler.md#mercury)
- [store](BasicMediatorHandler.md#store)

### Methods

- [achieveMediation](BasicMediatorHandler.md#achievemediation)
- [bootRegisteredMediator](BasicMediatorHandler.md#bootregisteredmediator)
- [listenUnreadMessages](BasicMediatorHandler.md#listenunreadmessages)
- [pickupUnreadMessages](BasicMediatorHandler.md#pickupunreadmessages)
- [registerMessagesAsRead](BasicMediatorHandler.md#registermessagesasread)
- [updateKeyListWithDIDs](BasicMediatorHandler.md#updatekeylistwithdids)
- [fromMediator](BasicMediatorHandler.md#frommediator)

## Constructors

### constructor

• **new BasicMediatorHandler**(`mediatorDID`, `mercury`, `store`): [`BasicMediatorHandler`](BasicMediatorHandler.md)

Creates an instance of BasicMediatorHandler.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediatorDID` | [`DID`](Domain.DID.md) |
| `mercury` | [`Mercury`](../interfaces/Domain.Mercury.md) |
| `store` | [`MediatorStore`](../interfaces/MediatorStore.md) |

#### Returns

[`BasicMediatorHandler`](BasicMediatorHandler.md)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L41)

## Properties

### mediator

• `Optional` **mediator**: [`Mediator`](../interfaces/Domain.Mediator.md)

Optional instance of the mediator so that if the mediation was already
established and recorded we don't need to mediate again with the same mediator

#### Implementation of

[MediatorHandler](MediatorHandler.md).[mediator](MediatorHandler.md#mediator)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L31)

___

### mediatorDID

• **mediatorDID**: [`DID`](Domain.DID.md)

#### Implementation of

[MediatorHandler](MediatorHandler.md).[mediatorDID](MediatorHandler.md#mediatordid)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L42)

___

### mercury

• **mercury**: [`Mercury`](../interfaces/Domain.Mercury.md)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L43)

___

### store

• **store**: [`MediatorStore`](../interfaces/MediatorStore.md)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L44)

## Methods

### achieveMediation

▸ **achieveMediation**(`host`): `Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)\>

Asyncronously achieve mediation by specifying the HOST DID, this will
exchange the mediation protocol messages between the user and the mediator until established

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`DID`](Domain.DID.md) |

#### Returns

`Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)\>

**`Async`**

#### Implementation of

[MediatorHandler](MediatorHandler.md).[achieveMediation](MediatorHandler.md#achievemediation)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:96](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L96)

___

### bootRegisteredMediator

▸ **bootRegisteredMediator**(): `Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

Will asyncronously fetch the first mediator stored in database and set it as default mediator.

#### Returns

`Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

**`Async`**

#### Implementation of

[MediatorHandler](MediatorHandler.md).[bootRegisteredMediator](MediatorHandler.md#bootregisteredmediator)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:77](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L77)

___

### listenUnreadMessages

▸ **listenUnreadMessages**(`signal`, `serviceEndpointUri`, `onMessage`): `void`

Asyncronously create a websocket connection with the mediator
Establish a websocket connection and activate the live-mode with the mediator
and also listen for incomming unread messages with existing protocols.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `serviceEndpointUri` | `string` |
| `onMessage` | (`messages`: \{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message-1.md)  }[]) => `void` \| `Promise`\<`void`\> |

#### Returns

`void`

**`Async`**

#### Implementation of

[MediatorHandler](MediatorHandler.md).[listenUnreadMessages](MediatorHandler.md#listenunreadmessages)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:195](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L195)

___

### pickupUnreadMessages

▸ **pickupUnreadMessages**(`limit`): `Promise`\<\{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message-1.md)  }[]\>

Asyncronously pickup unread messages from the mediator
if new messages are found, because the messages from in form of attachments inside the pickup response
we need to parse those and return the user a list of messages it can read and decode, this is done inside the pickup runner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |

#### Returns

`Promise`\<\{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message-1.md)  }[]\>

**`Async`**

#### Implementation of

[MediatorHandler](MediatorHandler.md).[pickupUnreadMessages](MediatorHandler.md#pickupunreadmessages)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:166](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L166)

___

### registerMessagesAsRead

▸ **registerMessagesAsRead**(`ids`): `Promise`\<`void`\>

Asyncronously notify the current mediator that one or multiple message ID's have been read (or stored)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Implementation of

[MediatorHandler](MediatorHandler.md).[registerMessagesAsRead](MediatorHandler.md#registermessagesasread)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:250](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L250)

___

### updateKeyListWithDIDs

▸ **updateKeyListWithDIDs**(`dids`): `Promise`\<`void`\>

Asyncronously update the mediator with the new keyList, used during the mediation process or during DID Rotation

#### Parameters

| Name | Type |
| :------ | :------ |
| `dids` | [`DID`](Domain.DID.md)[] |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Implementation of

[MediatorHandler](MediatorHandler.md).[updateKeyListWithDIDs](MediatorHandler.md#updatekeylistwithdids)

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:145](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L145)

___

### fromMediator

▸ **fromMediator**(`mediator`, `mercury`, `store`): [`BasicMediatorHandler`](BasicMediatorHandler.md)

Secondary constructor for BasicMediation Handler, to instanciate if from an existing Mediator
instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`Mediator`](../interfaces/Domain.Mediator.md) |
| `mercury` | [`Mercury`](../interfaces/Domain.Mercury.md) |
| `store` | [`MediatorStore`](../interfaces/MediatorStore.md) |

#### Returns

[`BasicMediatorHandler`](BasicMediatorHandler.md)

**`Static`**

#### Defined in

[src/edge-agent/mediator/BasicMediatorHandler.ts:57](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/edge-agent/mediator/BasicMediatorHandler.ts#L57)
