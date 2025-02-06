[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / MediatorHandler

# Class: MediatorHandler

## Implemented by

- [`BasicMediatorHandler`](BasicMediatorHandler.md)

## Table of contents

### Constructors

- [constructor](MediatorHandler.md#constructor)

### Properties

- [mediator](MediatorHandler.md#mediator)
- [mediatorDID](MediatorHandler.md#mediatordid)

### Methods

- [achieveMediation](MediatorHandler.md#achievemediation)
- [bootRegisteredMediator](MediatorHandler.md#bootregisteredmediator)
- [listenUnreadMessages](MediatorHandler.md#listenunreadmessages)
- [pickupUnreadMessages](MediatorHandler.md#pickupunreadmessages)
- [registerMessagesAsRead](MediatorHandler.md#registermessagesasread)
- [updateKeyListWithDIDs](MediatorHandler.md#updatekeylistwithdids)

## Constructors

### constructor

• **new MediatorHandler**(): [`MediatorHandler`](MediatorHandler.md)

#### Returns

[`MediatorHandler`](MediatorHandler.md)

## Properties

### mediator

• `Optional` `Abstract` **mediator**: [`Mediator`](../interfaces/Domain.Mediator.md)

#### Defined in

[src/edge-agent/types/index.ts:105](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/types/index.ts#L105)

___

### mediatorDID

• `Abstract` **mediatorDID**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/types/index.ts:103](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/types/index.ts#L103)

## Methods

### achieveMediation

▸ **achieveMediation**(`host`): `Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`DID`](Domain.DID.md) |

#### Returns

`Promise`\<[`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Defined in

[src/edge-agent/types/index.ts:109](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/types/index.ts#L109)

___

### bootRegisteredMediator

▸ **bootRegisteredMediator**(): `Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Returns

`Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Defined in

[src/edge-agent/types/index.ts:107](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/types/index.ts#L107)

___

### listenUnreadMessages

▸ **listenUnreadMessages**(`signal`, `serviceEndpointUri`, `onMessage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `serviceEndpointUri` | `string` |
| `onMessage` | (`messages`: \{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message-1.md)  }[]) => `void` \| `Promise`\<`void`\> |

#### Returns

`void`

#### Defined in

[src/edge-agent/types/index.ts:119](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/types/index.ts#L119)

___

### pickupUnreadMessages

▸ **pickupUnreadMessages**(`limit`): `Promise`\<\{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message-1.md)  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |

#### Returns

`Promise`\<\{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message-1.md)  }[]\>

#### Defined in

[src/edge-agent/types/index.ts:113](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/types/index.ts#L113)

___

### registerMessagesAsRead

▸ **registerMessagesAsRead**(`ids`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:117](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/types/index.ts#L117)

___

### updateKeyListWithDIDs

▸ **updateKeyListWithDIDs**(`dids`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dids` | [`DID`](Domain.DID.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:111](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/edge-agent/types/index.ts#L111)
