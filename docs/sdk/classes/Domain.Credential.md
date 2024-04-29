[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Credential

# Class: Credential

[Domain](../modules/Domain.md).Credential

Storable
define properties a Domain object must implement to be compatible with Pluto

## Hierarchy

- **`Credential`**

  ↳ [`AnonCredsCredential`](AnonCredsCredential.md)

  ↳ [`JWTCredential`](JWTCredential.md)

## Implements

- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](Domain.Credential.md#constructor)

### Properties

- [claims](Domain.Credential.md#claims)
- [credentialType](Domain.Credential.md#credentialtype)
- [id](Domain.Credential.md#id)
- [issuer](Domain.Credential.md#issuer)
- [properties](Domain.Credential.md#properties)
- [recoveryId](Domain.Credential.md#recoveryid)
- [subject](Domain.Credential.md#subject)
- [uuid](Domain.Credential.md#uuid)

### Methods

- [getProperty](Domain.Credential.md#getproperty)
- [isProvable](Domain.Credential.md#isprovable)
- [isRevoked](Domain.Credential.md#isrevoked)
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

[src/domain/models/Credential.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L14)

___

### credentialType

• `Abstract` **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md)

#### Defined in

[src/domain/models/Credential.ts:9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L9)

___

### id

• `Abstract` **id**: `string`

#### Defined in

[src/domain/models/Credential.ts:11](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L11)

___

### issuer

• `Abstract` **issuer**: `string`

#### Defined in

[src/domain/models/Credential.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L12)

___

### properties

• `Abstract` **properties**: `Map`\<`string`, `any`\>

#### Defined in

[src/domain/models/Credential.ts:15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L15)

___

### recoveryId

• `Abstract` **recoveryId**: `string`

#### Defined in

[src/domain/models/Credential.ts:10](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L10)

___

### subject

• `Abstract` **subject**: `string`

#### Defined in

[src/domain/models/Credential.ts:13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L13)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Defined in

[src/domain/models/Credential.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L17)

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

[src/domain/models/Credential.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L19)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Defined in

[src/domain/models/Credential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L23)

___

### isRevoked

▸ **isRevoked**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/domain/models/Credential.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L31)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Defined in

[src/domain/models/Credential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L27)
