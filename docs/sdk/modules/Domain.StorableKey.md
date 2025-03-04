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

[src/domain/models/keyManagement/StorableKey.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/StorableKey.ts#L26)
