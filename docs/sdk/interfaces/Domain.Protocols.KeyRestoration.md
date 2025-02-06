[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [Protocols](../modules/Domain.Protocols.md) / KeyRestoration

# Interface: KeyRestoration

[Domain](../modules/Domain.md).[Protocols](../modules/Domain.Protocols.md).KeyRestoration

KeyRestoration protocol defines methods for verifying and restoring cryptographic keys from raw data.

## Implemented by

- [`Apollo`](../classes/Apollo.md)

## Table of contents

### Methods

- [restorePrivateKey](Domain.Protocols.KeyRestoration.md#restoreprivatekey)
- [restorePublicKey](Domain.Protocols.KeyRestoration.md#restorepublickey)

## Methods

### restorePrivateKey

▸ **restorePrivateKey**(`key`): [`PrivateKey`](../classes/Domain.PrivateKey.md)

Restores a PrivateKey from the given StorableKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`StorableKey`](Domain.StorableKey-1.md) |

#### Returns

[`PrivateKey`](../classes/Domain.PrivateKey.md)

PrivateKey instance

**`Throws`**

if the restoration process fails

#### Defined in

[src/domain/protocols/KeyRestoration.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/protocols/KeyRestoration.ts#L14)

___

### restorePublicKey

▸ **restorePublicKey**(`key`): [`PublicKey`](../classes/Domain.PublicKey.md)

Restores a PublicKey from the given StorableKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`StorableKey`](Domain.StorableKey-1.md) |

#### Returns

[`PublicKey`](../classes/Domain.PublicKey.md)

PublicKey instance

**`Throws`**

if the restoration process fails, this method throws an error

#### Defined in

[src/domain/protocols/KeyRestoration.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/protocols/KeyRestoration.ts#L23)
