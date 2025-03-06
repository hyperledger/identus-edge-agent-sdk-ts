[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / ConnectionsManagerInterface

# Interface: ConnectionsManagerInterface

## Table of contents

### Properties

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

### cancellables

• **cancellables**: `CancellableTask`\<`any`\>[]

#### Defined in

[src/edge-agent/types/index.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L82)

___

### castor

• **castor**: [`Castor`](Domain.Castor.md)

#### Defined in

[src/edge-agent/types/index.ts:76](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L76)

___

### mediationHandler

• **mediationHandler**: [`MediatorHandler`](../classes/MediatorHandler.md)

#### Defined in

[src/edge-agent/types/index.ts:79](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L79)

___

### mercury

• **mercury**: [`Mercury`](Domain.Mercury.md)

#### Defined in

[src/edge-agent/types/index.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L77)

___

### pairings

• **pairings**: [`DIDPair`](../classes/Domain.DIDPair.md)[]

#### Defined in

[src/edge-agent/types/index.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L80)

___

### pluto

• **pluto**: [`Pluto`](Domain.Pluto-1.md)

#### Defined in

[src/edge-agent/types/index.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L78)

___

### withWebsocketsExperiment

• **withWebsocketsExperiment**: `boolean`

#### Defined in

[src/edge-agent/types/index.ts:83](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L83)

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

[src/edge-agent/types/index.ts:85](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L85)

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

[src/edge-agent/types/index.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L87)

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

[src/edge-agent/types/index.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L88)

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

[src/edge-agent/types/index.ts:94](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L94)

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

[src/edge-agent/types/index.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L86)

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

[src/edge-agent/types/index.ts:92](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L92)

___

### startMediator

▸ **startMediator**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:93](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L93)

___

### stopAllEvents

▸ **stopAllEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/edge-agent/types/index.ts:84](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L84)
