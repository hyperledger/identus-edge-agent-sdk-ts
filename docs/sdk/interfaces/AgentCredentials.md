[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AgentCredentials

# Interface: AgentCredentials

## Implemented by

- [`Agent`](../classes/Agent.md)

## Table of contents

### Methods

- [createPresentationForRequestProof](AgentCredentials.md#createpresentationforrequestproof)
- [prepareRequestCredentialWithIssuer](AgentCredentials.md#preparerequestcredentialwithissuer)
- [processIssuedCredentialMessage](AgentCredentials.md#processissuedcredentialmessage)
- [verifiableCredentials](AgentCredentials.md#verifiablecredentials)

## Methods

### createPresentationForRequestProof

▸ **createPresentationForRequestProof**(`request`, `credential`): `Promise`\<`Presentation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestPresentation`](../classes/RequestPresentation.md) |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |

#### Returns

`Promise`\<`Presentation`\>

#### Defined in

[src/prism-agent/types/index.ts:54](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L54)

___

### prepareRequestCredentialWithIssuer

▸ **prepareRequestCredentialWithIssuer**(`offer`): `Promise`\<`RequestCredential`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`OfferCredential`](../classes/OfferCredential.md) |

#### Returns

`Promise`\<`RequestCredential`\>

#### Defined in

[src/prism-agent/types/index.ts:47](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L47)

___

### processIssuedCredentialMessage

▸ **processIssuedCredentialMessage**(`message`): `Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`IssueCredential`](../classes/IssueCredential.md) |

#### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

#### Defined in

[src/prism-agent/types/index.ts:50](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L50)

___

### verifiableCredentials

▸ **verifiableCredentials**(): `Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Defined in

[src/prism-agent/types/index.ts:53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/types/index.ts#L53)
