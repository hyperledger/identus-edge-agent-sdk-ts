[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / ConnectionsManagerInterface

# Interface: ConnectionsManagerInterface

## Implemented by

- [`ConnectionsManager`](../classes/ConnectionsManager.md)

## Table of contents

### Properties

- [agentCredentials](ConnectionsManagerInterface.md#agentcredentials)
- [cancellables](ConnectionsManagerInterface.md#cancellables)
- [castor](ConnectionsManagerInterface.md#castor)
- [mediationHandler](ConnectionsManagerInterface.md#mediationhandler)
- [mercury](ConnectionsManagerInterface.md#mercury)
- [pairings](ConnectionsManagerInterface.md#pairings)
- [pluto](ConnectionsManagerInterface.md#pluto)
- [withWebsocketsExperiment](ConnectionsManagerInterface.md#withwebsocketsexperiment)

### Methods

- [addConnection](ConnectionsManagerInterface.md#addconnection)
- [awaitMessageResponse](ConnectionsManagerInterface.md#awaitmessageresponse)
- [processMessages](ConnectionsManagerInterface.md#processmessages)
- [registerMediator](ConnectionsManagerInterface.md#registermediator)
- [removeConnection](ConnectionsManagerInterface.md#removeconnection)
- [sendMessage](ConnectionsManagerInterface.md#sendmessage)
- [startMediator](ConnectionsManagerInterface.md#startmediator)
- [stopAllEvents](ConnectionsManagerInterface.md#stopallevents)

## Properties

### agentCredentials

• **agentCredentials**: [`AgentCredentials`](AgentCredentials.md)

#### Defined in

[src/edge-agent/types/index.ts:145](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L145)

___

### cancellables

• **cancellables**: `CancellableTask`\<`any`\>[]

#### Defined in

[src/edge-agent/types/index.ts:149](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L149)

___

### castor

• **castor**: [`Castor`](Domain.Castor.md)

#### Defined in

[src/edge-agent/types/index.ts:142](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L142)

___

### mediationHandler

• **mediationHandler**: [`MediatorHandler`](../classes/MediatorHandler.md)

#### Defined in

[src/edge-agent/types/index.ts:146](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L146)

___

### mercury

• **mercury**: [`Mercury`](Domain.Mercury.md)

#### Defined in

[src/edge-agent/types/index.ts:143](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L143)

___

### pairings

• **pairings**: [`DIDPair`](../classes/Domain.DIDPair.md)[]

#### Defined in

[src/edge-agent/types/index.ts:147](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L147)

___

### pluto

• **pluto**: [`Pluto`](Domain.Pluto-1.md)

#### Defined in

[src/edge-agent/types/index.ts:144](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L144)

___

### withWebsocketsExperiment

• **withWebsocketsExperiment**: `boolean`

#### Defined in

[src/edge-agent/types/index.ts:150](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L150)

## Methods

### addConnection

▸ **addConnection**(`paired`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paired` | [`DIDPair`](../classes/Domain.DIDPair.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:152](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L152)

___

### awaitMessageResponse

▸ **awaitMessageResponse**(`id`): `Promise`\<`undefined` \| [`Message`](../classes/Domain.Message-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Message`](../classes/Domain.Message-1.md)\>

#### Defined in

[src/edge-agent/types/index.ts:154](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L154)

___

### processMessages

▸ **processMessages**(`messages`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | \{ `attachmentId`: `string` ; `message`: [`Message`](../classes/Domain.Message-1.md)  }[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:155](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L155)

___

### registerMediator

▸ **registerMediator**(`hostDID`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostDID` | [`DID`](../classes/Domain.DID.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:161](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L161)

___

### removeConnection

▸ **removeConnection**(`pair`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`DIDPair`](../classes/Domain.DIDPair.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:153](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L153)

___

### sendMessage

▸ **sendMessage**(`message`): `Promise`\<`undefined` \| [`Message`](../classes/Domain.Message-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message-1.md) |

#### Returns

`Promise`\<`undefined` \| [`Message`](../classes/Domain.Message-1.md)\>

#### Defined in

[src/edge-agent/types/index.ts:159](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L159)

___

### startMediator

▸ **startMediator**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:160](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L160)

___

### stopAllEvents

▸ **stopAllEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/edge-agent/types/index.ts:151](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/edge-agent/types/index.ts#L151)
