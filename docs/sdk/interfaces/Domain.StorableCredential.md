[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / StorableCredential

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

[src/domain/models/Credential.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/Credential.ts#L43)
