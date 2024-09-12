[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AgentInvitations

# Interface: AgentInvitations

## Implemented by

- [`Agent`](../classes/Agent.md)

## Table of contents

### Methods

- [acceptDIDCommInvitation](AgentInvitations.md#acceptdidcomminvitation)
- [acceptInvitation](AgentInvitations.md#acceptinvitation)
- [parseInvitation](AgentInvitations.md#parseinvitation)
- [parseOOBInvitation](AgentInvitations.md#parseoobinvitation)
- [parsePrismInvitation](AgentInvitations.md#parseprisminvitation)

## Methods

### acceptDIDCommInvitation

▸ **acceptDIDCommInvitation**(`invitation`, `optionalAlias?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitation` | [`OutOfBandInvitation`](../classes/OutOfBandInvitation.md) |
| `optionalAlias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:104](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/types/index.ts#L104)

___

### acceptInvitation

▸ **acceptInvitation**(`invitation`, `optionalAlias?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitation` | `PrismOnboardingInvitation` |
| `optionalAlias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:108](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/types/index.ts#L108)

___

### parseInvitation

▸ **parseInvitation**(`str`): `Promise`\<`InvitationType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Promise`\<`InvitationType`\>

#### Defined in

[src/edge-agent/types/index.ts:106](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/types/index.ts#L106)

___

### parseOOBInvitation

▸ **parseOOBInvitation**(`str`): `Promise`\<[`OutOfBandInvitation`](../classes/OutOfBandInvitation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `URL` |

#### Returns

`Promise`\<[`OutOfBandInvitation`](../classes/OutOfBandInvitation.md)\>

#### Defined in

[src/edge-agent/types/index.ts:112](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/types/index.ts#L112)

___

### parsePrismInvitation

▸ **parsePrismInvitation**(`str`): `Promise`\<`PrismOnboardingInvitation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Promise`\<`PrismOnboardingInvitation`\>

#### Defined in

[src/edge-agent/types/index.ts:110](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/types/index.ts#L110)
