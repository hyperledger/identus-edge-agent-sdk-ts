[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / AgentMessageEvents

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

[src/edge-agent/types/index.ts:67](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L67)

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

[src/edge-agent/types/index.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L69)

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

[src/edge-agent/types/index.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/edge-agent/types/index.ts#L68)
