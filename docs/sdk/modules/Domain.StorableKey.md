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

[src/domain/models/keyManagement/StorableKey.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/keyManagement/StorableKey.ts#L26)
