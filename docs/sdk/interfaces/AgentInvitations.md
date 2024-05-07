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

▸ **acceptDIDCommInvitation**(`invitation`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitation` | `OutOfBandInvitation` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:97](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L97)

___

### acceptInvitation

▸ **acceptInvitation**(`invitation`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitation` | `PrismOnboardingInvitation` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:101](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L101)

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

[src/edge-agent/types/index.ts:99](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L99)

___

### parseOOBInvitation

▸ **parseOOBInvitation**(`str`): `Promise`\<`OutOfBandInvitation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `URL` |

#### Returns

`Promise`\<`OutOfBandInvitation`\>

#### Defined in

[src/edge-agent/types/index.ts:105](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L105)

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

[src/edge-agent/types/index.ts:103](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/edge-agent/types/index.ts#L103)
