[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AgentMessageEvents

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

[src/prism-agent/types/index.ts:116](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L116)

___

### emit

▸ **emit**(`eventName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/prism-agent/types/index.ts:118](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L118)

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

[src/prism-agent/types/index.ts:117](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L117)
