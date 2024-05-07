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

[src/edge-agent/types/index.ts:172](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L172)

___

### mediatorDID

• `Abstract` **mediatorDID**: [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/types/index.ts:170](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L170)

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

[src/edge-agent/types/index.ts:176](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L176)

___

### bootRegisteredMediator

▸ **bootRegisteredMediator**(): `Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Returns

`Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Defined in

[src/edge-agent/types/index.ts:174](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L174)

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

[src/edge-agent/types/index.ts:186](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L186)

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

[src/edge-agent/types/index.ts:180](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L180)

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

[src/edge-agent/types/index.ts:184](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L184)

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

[src/edge-agent/types/index.ts:178](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L178)
