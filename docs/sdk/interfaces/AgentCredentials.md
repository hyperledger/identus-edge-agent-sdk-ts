[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AgentCredentials

# Interface: AgentCredentials

## Implemented by

- [`Agent`](../classes/Agent.md)

## Table of contents

### Methods

- [createPresentationForRequestProof](AgentCredentials.md#createpresentationforrequestproof)
- [handlePresentation](AgentCredentials.md#handlepresentation)
- [initiatePresentationRequest](AgentCredentials.md#initiatepresentationrequest)
- [prepareRequestCredentialWithIssuer](AgentCredentials.md#preparerequestcredentialwithissuer)
- [processIssuedCredentialMessage](AgentCredentials.md#processissuedcredentialmessage)
- [verifiableCredentials](AgentCredentials.md#verifiablecredentials)

## Methods

### createPresentationForRequestProof

▸ **createPresentationForRequestProof**(`request`, `credential`): `Promise`\<[`Presentation`](../classes/Presentation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestPresentation`](../classes/RequestPresentation.md) |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |

#### Returns

`Promise`\<[`Presentation`](../classes/Presentation.md)\>

#### Defined in

[src/prism-agent/types/index.ts:66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L66)

___

### handlePresentation

▸ **handlePresentation**(`presentation`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentation` | [`Presentation`](../classes/Presentation.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/prism-agent/types/index.ts:71](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L71)

___

### initiatePresentationRequest

▸ **initiatePresentationRequest**(`type`, `toDID`, `claims`): `Promise`\<[`RequestPresentation`](../classes/RequestPresentation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CredentialType`](../enums/Domain.CredentialType.md) |
| `toDID` | [`DID`](../classes/Domain.DID.md) |
| `claims` | [`PresentationClaims`](Domain.PresentationClaims.md) |

#### Returns

`Promise`\<[`RequestPresentation`](../classes/RequestPresentation.md)\>

#### Defined in

[src/prism-agent/types/index.ts:60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L60)

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

[src/prism-agent/types/index.ts:53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L53)

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

[src/prism-agent/types/index.ts:56](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L56)

___

### verifiableCredentials

▸ **verifiableCredentials**(): `Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Defined in

[src/prism-agent/types/index.ts:58](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/prism-agent/types/index.ts#L58)
