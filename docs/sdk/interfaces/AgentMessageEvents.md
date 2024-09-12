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

[src/edge-agent/types/index.ts:133](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/types/index.ts#L133)

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

[src/edge-agent/types/index.ts:135](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/types/index.ts#L135)

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

[src/edge-agent/types/index.ts:134](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/types/index.ts#L134)
