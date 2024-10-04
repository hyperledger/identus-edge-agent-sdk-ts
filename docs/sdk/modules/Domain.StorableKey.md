[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / StorableKey

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

[src/domain/models/keyManagement/StorableKey.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/StorableKey.ts#L26)
