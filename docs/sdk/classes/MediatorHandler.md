[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / MediatorHandler

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

[src/prism-agent/types/index.ts:137](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L137)

___

### mediatorDID

• `Abstract` **mediatorDID**: [`DID`](Domain.DID.md)

#### Defined in

[src/prism-agent/types/index.ts:135](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L135)

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

[src/prism-agent/types/index.ts:141](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L141)

___

### bootRegisteredMediator

▸ **bootRegisteredMediator**(): `Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Returns

`Promise`\<`undefined` \| [`Mediator`](../interfaces/Domain.Mediator.md)\>

#### Defined in

[src/prism-agent/types/index.ts:139](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L139)

___

### pickupUnreadMessages

▸ **pickupUnreadMessages**(`limit`): `Promise`\<\{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message.md)  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |

#### Returns

`Promise`\<\{ `attachmentId`: `string` ; `message`: [`Message`](Domain.Message.md)  }[]\>

#### Defined in

[src/prism-agent/types/index.ts:145](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L145)

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

[src/prism-agent/types/index.ts:149](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L149)

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

[src/prism-agent/types/index.ts:143](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L143)
