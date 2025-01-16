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

[src/domain/models/VerifiableCredential.ts:321](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/VerifiableCredential.ts#L321)

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

[src/domain/models/VerifiableCredential.ts:332](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/VerifiableCredential.ts#L332)

___

### id

• **id**: `string`

#### Defined in

[src/domain/models/VerifiableCredential.ts:330](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/VerifiableCredential.ts#L330)

___

### issuanceDate

• **issuanceDate**: `string`

#### Defined in

[src/domain/models/VerifiableCredential.ts:331](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/VerifiableCredential.ts#L331)

___

### issuer

• **issuer**: `string`

#### Defined in

[src/domain/models/VerifiableCredential.ts:329](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/VerifiableCredential.ts#L329)

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

[src/domain/models/VerifiableCredential.ts:338](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/VerifiableCredential.ts#L338)

___

### type

• **type**: [[`credential`](../enums/Domain.W3CVerifiableCredentialType.md#credential), [`revocation`](../enums/Domain.W3CVerifiableCredentialType.md#revocation)]

#### Defined in

[src/domain/models/VerifiableCredential.ts:325](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/bda7c5f2d075f5f1181d8e566d0db6b907796ca5/src/domain/models/VerifiableCredential.ts#L325)
