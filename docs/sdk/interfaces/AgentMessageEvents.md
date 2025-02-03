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
| `callback` | [`EventCallback`](../modules.md#eventcallback) |

#### Returns

`void`

#### Defined in

[src/edge-agent/types/index.ts:66](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/edge-agent/types/index.ts#L66)

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

[src/edge-agent/types/index.ts:68](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/edge-agent/types/index.ts#L68)

___

### removeListener

▸ **removeListener**(`eventName`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`ListenerKey`](../enums/ListenerKey.md) |
| `callback` | [`EventCallback`](../modules.md#eventcallback) |

#### Returns

`void`

#### Defined in

[src/edge-agent/types/index.ts:67](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/edge-agent/types/index.ts#L67)
