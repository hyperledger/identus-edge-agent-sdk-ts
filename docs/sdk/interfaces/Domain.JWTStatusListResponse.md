[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / JWTStatusListResponse

# Interface: JWTStatusListResponse

[Domain](../modules/Domain.md).JWTStatusListResponse

## Table of contents

### Properties

- [@context](Domain.JWTStatusListResponse.md#@context)
- [credentialSubject](Domain.JWTStatusListResponse.md#credentialsubject)
- [id](Domain.JWTStatusListResponse.md#id)
- [issuanceDate](Domain.JWTStatusListResponse.md#issuancedate)
- [issuer](Domain.JWTStatusListResponse.md#issuer)
- [proof](Domain.JWTStatusListResponse.md#proof)
- [type](Domain.JWTStatusListResponse.md#type)

## Properties

### @context

• **@context**: [[`credential`](../enums/Domain.W3CVerifiableCredentialContext.md#credential), [`revocation`](../enums/Domain.W3CVerifiableCredentialContext.md#revocation)]

#### Defined in

[src/domain/models/VerifiableCredential.ts:306](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/domain/models/VerifiableCredential.ts#L306)

___

### credentialSubject

• **credentialSubject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encodedList` | `string` |
| `id` | `string` |
| `statusPurpose` | `string` |
| `type` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:317](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/domain/models/VerifiableCredential.ts#L317)

___

### id

• **id**: `string`

#### Defined in

[src/domain/models/VerifiableCredential.ts:315](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/domain/models/VerifiableCredential.ts#L315)

___

### issuanceDate

• **issuanceDate**: `string`

#### Defined in

[src/domain/models/VerifiableCredential.ts:316](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/domain/models/VerifiableCredential.ts#L316)

___

### issuer

• **issuer**: `string`

#### Defined in

[src/domain/models/VerifiableCredential.ts:314](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/domain/models/VerifiableCredential.ts#L314)

___

### proof

• **proof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created` | `string` |
| `cryptoSuite` | `string` |
| `jws` | `string` |
| `proofPurpose` | [`ProofPurpose`](../enums/Domain.JWTProofPurpose.md#proofpurpose) |
| `proofValue` | `string` |
| `type` | [`JWTProofType`](../enums/Domain.JWTProofType.md) |
| `verificationMethod` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:323](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/domain/models/VerifiableCredential.ts#L323)

___

### type

• **type**: [[`credential`](../enums/Domain.W3CVerifiableCredentialType.md#credential), [`revocation`](../enums/Domain.W3CVerifiableCredentialType.md#revocation)]

#### Defined in

[src/domain/models/VerifiableCredential.ts:310](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176/src/domain/models/VerifiableCredential.ts#L310)
