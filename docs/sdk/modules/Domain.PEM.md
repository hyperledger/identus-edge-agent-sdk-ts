[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / PEM

# Namespace: PEM

[Domain](Domain.md).PEM

## Table of contents

### Functions

- [fromKey](Domain.PEM.md#fromkey)
- [toRaw](Domain.PEM.md#toraw)

## Functions

### fromKey

▸ **fromKey**(`key`, `label`): `string`

create a PEM from a Key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Key`](../classes/Domain.Key.md) | Cryptographic key |
| `label` | `string` | PEM header / footer label |

#### Returns

`string`

#### Defined in

[src/domain/models/keyManagement/exportable/PEM.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/PEM.ts#L41)

___

### toRaw

▸ **toRaw**(`pem`, `label`): `Buffer`

create a Uint8Array from a PEM

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pem` | `string` |  |
| `label` | `string` | expected header / footer label |

#### Returns

`Buffer`

#### Defined in

[src/domain/models/keyManagement/exportable/PEM.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/keyManagement/exportable/PEM.ts#L17)
