[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / MediatorHandler

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

[src/edge-agent/types/index.ts:106](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L106)

___

### mediatorDID

• `Abstract` **mediatorDID**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/types/index.ts:104](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L104)

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

[src/edge-agent/types/index.ts:110](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L110)

___

### bootRegisteredMediator

▸ **bootRegisteredMediator**(): `Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Returns

`Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Defined in

[src/edge-agent/types/index.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L108)

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

[src/edge-agent/types/index.ts:120](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L120)

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

[src/edge-agent/types/index.ts:114](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L114)

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

[src/edge-agent/types/index.ts:118](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L118)

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

[src/edge-agent/types/index.ts:112](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L112)
