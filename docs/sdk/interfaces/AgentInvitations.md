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

[src/prism-agent/types/index.ts:90](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L90)

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

[src/prism-agent/types/index.ts:94](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L94)

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

[src/prism-agent/types/index.ts:92](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L92)

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

[src/prism-agent/types/index.ts:98](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L98)

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

[src/prism-agent/types/index.ts:96](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L96)
