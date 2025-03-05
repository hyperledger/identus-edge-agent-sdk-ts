[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / StorableKey

# Namespace: StorableKey

[Domain](Domain.md).StorableKey

## Table of contents

### Functions

- [recoveryId](Domain.StorableKey.md#recoveryid)

## Functions

### recoveryId

▸ **recoveryId**(`algorithm`, `...suffix`): `string`

Factory for RecoveryId.
Nomenclature:
  - algorithm first
  - arbitrary suffixes for customisation
  - separated by "+"

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `algorithm` |
| `...suffix` | `privacy`[] |

#### Returns

`string`

#### Defined in

[src/domain/models/keyManagement/StorableKey.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/keyManagement/StorableKey.ts#L26)
