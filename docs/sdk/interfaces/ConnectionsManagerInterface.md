[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / ConnectionsManagerInterface

# Interface: ConnectionsManagerInterface

## Implemented by

- [`ConnectionsManager`](../classes/ConnectionsManager.md)

## Table of contents

### Properties

- [cancellables](ConnectionsManagerInterface.md#cancellables)
- [castor](ConnectionsManagerInterface.md#castor)
- [mediationHandler](ConnectionsManagerInterface.md#mediationhandler)
- [mercury](ConnectionsManagerInterface.md#mercury)
- [pairings](ConnectionsManagerInterface.md#pairings)
- [pluto](ConnectionsManagerInterface.md#pluto)

### Methods

- [addConnection](ConnectionsManagerInterface.md#addconnection)
- [awaitMessageResponse](ConnectionsManagerInterface.md#awaitmessageresponse)
- [awaitMessages](ConnectionsManagerInterface.md#awaitmessages)
- [registerMediator](ConnectionsManagerInterface.md#registermediator)
- [removeConnection](ConnectionsManagerInterface.md#removeconnection)
- [sendMessage](ConnectionsManagerInterface.md#sendmessage)
- [startMediator](ConnectionsManagerInterface.md#startmediator)
- [stopAllEvents](ConnectionsManagerInterface.md#stopallevents)

## Properties

### cancellables

• **cancellables**: `CancellableTask`\<`any`\>[]

#### Defined in

[src/prism-agent/types/index.ts:109](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L109)

___

### castor

• **castor**: [`Castor`](Domain.Castor.md)

#### Defined in

[src/prism-agent/types/index.ts:103](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L103)

___

### mediationHandler

• **mediationHandler**: [`MediatorHandler`](../classes/MediatorHandler.md)

#### Defined in

[src/prism-agent/types/index.ts:106](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L106)

___

### mercury

• **mercury**: [`Mercury`](Domain.Mercury.md)

#### Defined in

[src/prism-agent/types/index.ts:104](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L104)

___

### pairings

• **pairings**: [`DIDPair`](../classes/Domain.DIDPair.md)[]

#### Defined in

[src/prism-agent/types/index.ts:107](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L107)

___

### pluto

• **pluto**: [`Pluto`](Domain.Pluto.md)

#### Defined in

[src/prism-agent/types/index.ts:105](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L105)

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

[src/prism-agent/types/index.ts:113](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L113)

___

### awaitMessageResponse

▸ **awaitMessageResponse**(`id`): `Promise`\<`undefined` \| [`Message`](../classes/Domain.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Message`](../classes/Domain.Message.md)\>

#### Defined in

[src/prism-agent/types/index.ts:119](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L119)

___

### awaitMessages

▸ **awaitMessages**(): `Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Returns

`Promise`\<[`Message`](../classes/Domain.Message.md)[]\>

#### Defined in

[src/prism-agent/types/index.ts:117](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L117)

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

[src/prism-agent/types/index.ts:125](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L125)

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

[src/prism-agent/types/index.ts:115](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L115)

___

### sendMessage

▸ **sendMessage**(`message`): `Promise`\<`undefined` \| [`Message`](../classes/Domain.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message.md) |

#### Returns

`Promise`\<`undefined` \| [`Message`](../classes/Domain.Message.md)\>

#### Defined in

[src/prism-agent/types/index.ts:121](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L121)

___

### startMediator

▸ **startMediator**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/prism-agent/types/index.ts:123](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L123)

___

### stopAllEvents

▸ **stopAllEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/prism-agent/types/index.ts:111](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L111)
