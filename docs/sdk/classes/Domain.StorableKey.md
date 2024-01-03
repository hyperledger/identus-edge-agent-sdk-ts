[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / StorableKey

# Class: StorableKey

[Domain](../modules/Domain.md).StorableKey

## Table of contents

### Constructors

- [constructor](Domain.StorableKey.md#constructor)

### Properties

- [StorableData](Domain.StorableKey.md#storabledata)
- [restorationIdentifier](Domain.StorableKey.md#restorationidentifier)
- [securityLevel](Domain.StorableKey.md#securitylevel)

### Methods

- [store](Domain.StorableKey.md#store)

## Constructors

### constructor

• **new StorableKey**(): [`StorableKey`](Domain.StorableKey.md)

#### Returns

[`StorableKey`](Domain.StorableKey.md)

## Properties

### StorableData

• `Abstract` **StorableData**: `Uint8Array`

#### Defined in

[src/domain/models/keyManagement/StorableKey.ts:8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/keyManagement/StorableKey.ts#L8)

___

### restorationIdentifier

• `Abstract` **restorationIdentifier**: `string`

#### Defined in

[src/domain/models/keyManagement/StorableKey.ts:9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/keyManagement/StorableKey.ts#L9)

___

### securityLevel

• `Abstract` **securityLevel**: [`SecurityLevel`](../enums/Domain.SecurityLevel.md)

#### Defined in

[src/domain/models/keyManagement/StorableKey.ts:7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/keyManagement/StorableKey.ts#L7)

## Methods

### store

▸ **store**(): `void`

#### Returns

`void`

#### Defined in

[src/domain/models/keyManagement/StorableKey.ts:6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/keyManagement/StorableKey.ts#L6)
