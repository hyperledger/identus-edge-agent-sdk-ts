[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / MediatorHandler

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

[src/edge-agent/types/index.ts:173](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/edge-agent/types/index.ts#L173)

___

### mediatorDID

• `Abstract` **mediatorDID**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/types/index.ts:171](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/edge-agent/types/index.ts#L171)

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

[src/edge-agent/types/index.ts:177](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/edge-agent/types/index.ts#L177)

___

### bootRegisteredMediator

▸ **bootRegisteredMediator**(): `Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Returns

`Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Defined in

[src/edge-agent/types/index.ts:175](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/edge-agent/types/index.ts#L175)

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

[src/edge-agent/types/index.ts:187](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/edge-agent/types/index.ts#L187)

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

[src/edge-agent/types/index.ts:181](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/edge-agent/types/index.ts#L181)

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

[src/edge-agent/types/index.ts:185](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/edge-agent/types/index.ts#L185)

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

[src/edge-agent/types/index.ts:179](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/382b1c7b46001b3d4171eaa2010aa8f9482d27e8/src/edge-agent/types/index.ts#L179)
