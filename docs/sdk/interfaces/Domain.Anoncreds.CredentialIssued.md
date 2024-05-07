[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [Anoncreds](../modules/Domain.Anoncreds.md) / CredentialIssued

# Interface: CredentialIssued

[Domain](../modules/Domain.md).[Anoncreds](../modules/Domain.Anoncreds.md).CredentialIssued

## Hierarchy

- `Omit`\<[`Credential`](Domain.Anoncreds.Credential.md), ``"values"``\>

  ↳ **`CredentialIssued`**

## Table of contents

### Properties

- [cred\_def\_id](Domain.Anoncreds.CredentialIssued.md#cred_def_id)
- [schema\_id](Domain.Anoncreds.CredentialIssued.md#schema_id)
- [signature](Domain.Anoncreds.CredentialIssued.md#signature)
- [signature\_correctness\_proof](Domain.Anoncreds.CredentialIssued.md#signature_correctness_proof)
- [values](Domain.Anoncreds.CredentialIssued.md#values)

## Properties

### cred\_def\_id

• **cred\_def\_id**: `string`

#### Inherited from

Omit.cred\_def\_id

#### Defined in

[src/domain/models/Anoncreds.ts:61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/Anoncreds.ts#L61)

___

### schema\_id

• **schema\_id**: `string`

#### Inherited from

Omit.schema\_id

#### Defined in

[src/domain/models/Anoncreds.ts:60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/Anoncreds.ts#L60)

___

### signature

• **signature**: `Credential_Signature`

#### Inherited from

Omit.signature

#### Defined in

[src/domain/models/Anoncreds.ts:62](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/Anoncreds.ts#L62)

___

### signature\_correctness\_proof

• **signature\_correctness\_proof**: `Credential_SignatureCorrectnessProof`

#### Inherited from

Omit.signature\_correctness\_proof

#### Defined in

[src/domain/models/Anoncreds.ts:63](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/Anoncreds.ts#L63)

___

### values

• **values**: `Tuple`\<`string`, `Credential_Value`\>[]

#### Defined in

[src/domain/models/Anoncreds.ts:68](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/Anoncreds.ts#L68)
