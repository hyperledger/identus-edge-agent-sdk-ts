[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AgentMessageEvents

# Interface: AgentMessageEvents

## Table of contents

### Methods

- [addListener](AgentMessageEvents.md#addlistener)
- [emit](AgentMessageEvents.md#emit)
- [removeListener](AgentMessageEvents.md#removelistener)

## Methods

### addListener

▸ **addListener**(`eventName`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`ListenerKey`](../enums/ListenerKey.md) |
| `callback` | `EventCallback` |

#### Returns

`void`

#### Defined in

[src/prism-agent/types/index.ts:94](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L94)

___

### emit

▸ **emit**(`eventName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`ListenerKey`](../enums/ListenerKey.md) |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/prism-agent/types/index.ts:96](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L96)

___

### removeListener

▸ **removeListener**(`eventName`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`ListenerKey`](../enums/ListenerKey.md) |
| `callback` | `EventCallback` |

#### Returns

`void`

#### Defined in

[src/prism-agent/types/index.ts:95](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L95)
