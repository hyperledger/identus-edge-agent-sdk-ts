[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AgentCredentials

# Interface: AgentCredentials

## Implemented by

- [`Agent`](../classes/Agent.md)

## Table of contents

### Properties

- [isCredentialRevoked](AgentCredentials.md#iscredentialrevoked)
- [revealCredentialFields](AgentCredentials.md#revealcredentialfields)

### Methods

- [createPresentationForRequestProof](AgentCredentials.md#createpresentationforrequestproof)
- [handlePresentation](AgentCredentials.md#handlepresentation)
- [initiatePresentationRequest](AgentCredentials.md#initiatepresentationrequest)
- [prepareRequestCredentialWithIssuer](AgentCredentials.md#preparerequestcredentialwithissuer)
- [processIssuedCredentialMessage](AgentCredentials.md#processissuedcredentialmessage)
- [verifiableCredentials](AgentCredentials.md#verifiablecredentials)

## Properties

### isCredentialRevoked

• **isCredentialRevoked**: (`credential`: [`Credential`](../classes/Domain.Credential.md)) => `Promise`\<`boolean`\>

#### Type declaration

▸ (`credential`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/edge-agent/types/index.ts:63](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L63)

___

### revealCredentialFields

• **revealCredentialFields**: (`credential`: [`Credential`](../classes/Domain.Credential.md), `fields`: `string`[], `linkSecret`: `string`) => `Promise`\<\{ `[name: string]`: `any`;  }\>

#### Type declaration

▸ (`credential`, `fields`, `linkSecret`): `Promise`\<\{ `[name: string]`: `any`;  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../classes/Domain.Credential.md) |
| `fields` | `string`[] |
| `linkSecret` | `string` |

##### Returns

`Promise`\<\{ `[name: string]`: `any`;  }\>

#### Defined in

[src/edge-agent/types/index.ts:60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L60)

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

[src/edge-agent/types/index.ts:79](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L79)

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

[src/edge-agent/types/index.ts:84](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L84)

___

### initiatePresentationRequest

▸ **initiatePresentationRequest**(`type`, `toDID`, `claims`): `Promise`\<[`RequestPresentation`](../classes/RequestPresentation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`JWT`](../enums/Domain.CredentialType.md#jwt) |
| `toDID` | [`DID`](../classes/Domain.DID.md) |
| `claims` | [`JWTPresentationClaims`](../modules/Domain.md#jwtpresentationclaims) |

#### Returns

`Promise`\<[`RequestPresentation`](../classes/RequestPresentation.md)\>

#### Defined in

[src/edge-agent/types/index.ts:74](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L74)

▸ **initiatePresentationRequest**(`type`, `toDID`, `claims`): `Promise`\<[`RequestPresentation`](../classes/RequestPresentation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) |
| `toDID` | [`DID`](../classes/Domain.DID.md) |
| `claims` | [`AnoncredsPresentationClaims`](../modules/Domain.md#anoncredspresentationclaims) |

#### Returns

`Promise`\<[`RequestPresentation`](../classes/RequestPresentation.md)\>

#### Defined in

[src/edge-agent/types/index.ts:76](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L76)

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

[src/edge-agent/types/index.ts:67](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L67)

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

[src/edge-agent/types/index.ts:70](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L70)

___

### verifiableCredentials

▸ **verifiableCredentials**(): `Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)[]\>

#### Defined in

[src/edge-agent/types/index.ts:72](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/types/index.ts#L72)
