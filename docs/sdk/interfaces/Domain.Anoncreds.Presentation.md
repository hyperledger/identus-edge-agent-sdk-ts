[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [Anoncreds](../modules/Domain.Anoncreds.md) / Presentation

# Interface: Presentation

[Domain](../modules/Domain.md).[Anoncreds](../modules/Domain.Anoncreds.md).Presentation

## Table of contents

### Properties

- [identifiers](Domain.Anoncreds.Presentation.md#identifiers)
- [proof](Domain.Anoncreds.Presentation.md#proof)
- [requested\_proof](Domain.Anoncreds.Presentation.md#requested_proof)

## Properties

### identifiers

• **identifiers**: `Presentation_Identifier`[]

#### Defined in

[src/domain/models/Anoncreds.ts:130](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/Anoncreds.ts#L130)

___

### proof

• **proof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregated_proof` | \{ `c_hash`: `string` ; `c_list`: `number`[][]  } |
| `aggregated_proof.c_hash` | `string` |
| `aggregated_proof.c_list` | `number`[][] |
| `proofs` | `Presentation_Proof_Proofs`[] |

#### Defined in

[src/domain/models/Anoncreds.ts:116](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/Anoncreds.ts#L116)

___

### requested\_proof

• **requested\_proof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `predicates` | `Presentation_RequestedProof_Value` |
| `revealed_attrs` | `Presentation_RequestedProof_RevealedAttrs` |
| `self_attested_attrs` | `Presentation_RequestedProof_Value` |
| `unrevealed_attrs` | `Presentation_RequestedProof_Value` |

#### Defined in

[src/domain/models/Anoncreds.ts:123](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/Anoncreds.ts#L123)
