[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / StorableCredential

# Interface: StorableCredential

[Domain](../modules/Domain.md).StorableCredential

## Implemented by

- [`AnonCredsCredential`](../classes/AnonCredsCredential.md)
- [`JWTCredential`](../classes/JWTCredential.md)
- [`SDJWTCredential`](../classes/SDJWTCredential.md)

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

[src/domain/models/Credential.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/Credential.ts#L41)
