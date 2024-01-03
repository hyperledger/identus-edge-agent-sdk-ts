[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Credential

# Class: Credential

[Domain](../modules/Domain.md).Credential

## Hierarchy

- **`Credential`**

  ↳ [`AnonCredsCredential`](AnonCredsCredential.md)

  ↳ [`JWTCredential`](JWTCredential.md)

## Table of contents

### Constructors

- [constructor](Domain.Credential.md#constructor)

### Properties

- [claims](Domain.Credential.md#claims)
- [id](Domain.Credential.md#id)
- [issuer](Domain.Credential.md#issuer)
- [properties](Domain.Credential.md#properties)
- [recoveryId](Domain.Credential.md#recoveryid)
- [subject](Domain.Credential.md#subject)

### Methods

- [getProperty](Domain.Credential.md#getproperty)
- [isProvable](Domain.Credential.md#isprovable)
- [isStorable](Domain.Credential.md#isstorable)

## Constructors

### constructor

• **new Credential**(): [`Credential`](Domain.Credential.md)

#### Returns

[`Credential`](Domain.Credential.md)

## Properties

### claims

• `Abstract` **claims**: `Claim`[]

#### Defined in

[src/domain/models/Credential.ts:16](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L16)

___

### id

• `Abstract` **id**: `string`

#### Defined in

[src/domain/models/Credential.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L12)

___

### issuer

• `Abstract` **issuer**: `string`

#### Defined in

[src/domain/models/Credential.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L14)

___

### properties

• `Abstract` **properties**: `Map`\<`string`, `any`\>

#### Defined in

[src/domain/models/Credential.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L17)

___

### recoveryId

• `Abstract` **recoveryId**: `string`

#### Defined in

[src/domain/models/Credential.ts:9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L9)

___

### subject

• `Abstract` **subject**: `string`

#### Defined in

[src/domain/models/Credential.ts:15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L15)

## Methods

### getProperty

▸ **getProperty**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[src/domain/models/Credential.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L19)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Defined in

[src/domain/models/Credential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L23)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Defined in

[src/domain/models/Credential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L27)
