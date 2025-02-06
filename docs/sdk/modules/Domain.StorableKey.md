[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / StorableKey

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

[src/domain/models/keyManagement/StorableKey.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/keyManagement/StorableKey.ts#L26)
