[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / ConnectionsManager

# Class: ConnectionsManager

ConnectionsManager is responsible of establishing didcomm connection and
mediation process with other mediators through didcomm and is also
responsible of managing the task to periodically fetch messages from the mediator once connection is established

 ConnectionsManager

## Table of contents

### Constructors

- [constructor](ConnectionsManager.md#constructor)

### Properties

- [agent](ConnectionsManager.md#agent)
- [cancellable](ConnectionsManager.md#cancellable)
- [cancellables](ConnectionsManager.md#cancellables)
- [events](ConnectionsManager.md#events)
- [options](ConnectionsManager.md#options)
- [pairings](ConnectionsManager.md#pairings)

### Accessors

- [mediationHandler](ConnectionsManager.md#mediationhandler)
- [withWebsocketsExperiment](ConnectionsManager.md#withwebsocketsexperiment)

### Methods

- [addConnection](ConnectionsManager.md#addconnection)
- [awaitMessageResponse](ConnectionsManager.md#awaitmessageresponse)
- [findIndex](ConnectionsManager.md#findindex)
- [processMessages](ConnectionsManager.md#processmessages)
- [registerMediator](ConnectionsManager.md#registermediator)
- [removeConnection](ConnectionsManager.md#removeconnection)
- [sendMessage](ConnectionsManager.md#sendmessage)
- [startFetchingMessages](ConnectionsManager.md#startfetchingmessages)
- [startMediator](ConnectionsManager.md#startmediator)
- [stopAllEvents](ConnectionsManager.md#stopallevents)
- [stopFetchingMessages](ConnectionsManager.md#stopfetchingmessages)

## Constructors

### constructor

• **new ConnectionsManager**(`agent`, `options?`): [`ConnectionsManager`](ConnectionsManager.md)

Creates an instance of ConnectionsManager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](Agent.md) |
| `options?` | `AgentOptions` |

#### Returns

[`ConnectionsManager`](ConnectionsManager.md)

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L68)

## Properties

### agent

• `Private` `Readonly` **agent**: [`Agent`](Agent.md)

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L69)

___

### cancellable

• `Optional` **cancellable**: `CancellableTask`\<`void`\>

Cancellable task used to listen for new messages, stopping the Agent should also stop this
 from running and destroy the instance of the task until agent is started again

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L45)

___

### cancellables

• **cancellables**: `CancellableTask`\<`any`\>[] = `[]`

An array with cancellable tasks, mainly used to store one or multiple didcomm
connections in storage implementation at the same time. All of them can be cancelled
despite they run asyncronously when the Edge agent stops

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L37)

___

### events

• **events**: [`AgentMessageEvents`](../interfaces/AgentMessageEvents.md)

A list of public facing events which will notify the user interface when specific things happen,
for now when new messages arrive or didcomm connections are established in order to make UI more reactive

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L54)

___

### options

• `Optional` **options**: `AgentOptions`

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L70)

___

### pairings

• **pairings**: [`DIDPair`](Domain.DIDPair.md)[] = `[]`

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L56)

## Accessors

### mediationHandler

• `get` **mediationHandler**(): [`MediatorHandler`](MediatorHandler.md)

#### Returns

[`MediatorHandler`](MediatorHandler.md)

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L75)

___

### withWebsocketsExperiment

• `get` **withWebsocketsExperiment**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:79](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L79)

## Methods

### addConnection

▸ **addConnection**(`paired`): `Promise`\<`void`\>

Asyncronously add a didPair (didcomm connection) into pluto

#### Parameters

| Name | Type |
| :------ | :------ |
| `paired` | [`DIDPair`](Domain.DIDPair.md) |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:185](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L185)

___

### awaitMessageResponse

▸ **awaitMessageResponse**(`id`): `Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

Asyncronously wait for a message response just by waiting for new messages that match the specified ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

**`Async`**

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:118](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L118)

___

### findIndex

▸ **findIndex**(`pair`): `number`

Find the specified did pair connection index

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`DIDPair`](Domain.DIDPair.md) |

#### Returns

`number`

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:209](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L209)

___

### processMessages

▸ **processMessages**(`unreadMessages?`): `Promise`\<`void`\>

Asyncronously process unread messages that are received by either http or websockets didcomm transport
This method replaces awaitMessages()

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `unreadMessages` | \{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message-1.md)  }[] | `[]` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:129](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L129)

___

### registerMediator

▸ **registerMediator**(`hostDID`): `Promise`\<`void`\>

Asyncronously establish mediator with a mediator by providing the Host DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostDID` | [`DID`](Domain.DID.md) |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:240](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L240)

___

### removeConnection

▸ **removeConnection**(`pair`): `Promise`\<`void`\>

Remove a didPair or a didcomm connection, this does not mean the mediator will do
this but just means the connection will be removed from the current storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`DIDPair`](Domain.DIDPair.md) |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:226](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L226)

___

### sendMessage

▸ **sendMessage**(`message`): `Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

Asyncronously store a message and send it as didcomm message through the mercury implementation

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

`Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

**`Async`**

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:251](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L251)

___

### startFetchingMessages

▸ **startFetchingMessages**(`iterationPeriod`): `Promise`\<`void`\>

Asyncronously start fetching new messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterationPeriod` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:262](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L262)

___

### startMediator

▸ **startMediator**(): `Promise`\<`void`\>

Asyncronously Start the mediator, just checking if we had one stored in Database and
setting that one as default during the Agent start

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L90)

___

### stopAllEvents

▸ **stopAllEvents**(): `void`

Stops all the running events

#### Returns

`void`

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:102](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L102)

___

### stopFetchingMessages

▸ **stopFetchingMessages**(): `void`

Asyncronously stop fetching messages

#### Returns

`void`

#### Defined in

[src/edge-agent/connectionsManager/ConnectionsManager.ts:300](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/connectionsManager/ConnectionsManager.ts#L300)
