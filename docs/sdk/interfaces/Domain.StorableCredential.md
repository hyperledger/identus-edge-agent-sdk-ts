[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / StorableCredential

# Interface: StorableCredential

[Domain](../modules/Domain.md).StorableCredential

## Implemented by

- [`AnonCredsCredential`](../classes/AnonCredsCredential.md)
- [`JWTCredential`](../classes/JWTCredential.md)

## Table of contents

### Methods

- [toStorable](Domain.StorableCredential.md#tostorable)

## Methods

### toStorable

▸ **toStorable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `availableClaims?` | `string`[] |
| `credentialCreated?` | `string` |
| `credentialData` | `string` |
| `credentialSchema?` | `string` |
| `credentialUpdated?` | `string` |
| `id` | `string` |
| `issuer?` | `string` |
| `recoveryId` | `string` |
| `revoked?` | `boolean` |
| `subject?` | `string` |
| `validUntil?` | `string` |

#### Defined in

[src/domain/models/Credential.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/Credential.ts#L43)
