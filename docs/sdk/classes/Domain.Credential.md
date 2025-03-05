[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Credential

# Class: Credential

[Domain](../modules/Domain.md).Credential

Storable
define properties a Domain object must implement to be compatible with Pluto

## Hierarchy

- **`Credential`**

  ↳ [`JWTCredential`](JWTCredential.md)

  ↳ [`SDJWTCredential`](SDJWTCredential.md)

  ↳ [`AnonCredsCredential`](AnonCredsCredential.md)

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

[src/domain/models/Credential.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L12)

___

### credentialType

• `Abstract` **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md)

#### Defined in

[src/domain/models/Credential.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L7)

___

### id

• `Abstract` **id**: `string`

#### Defined in

[src/domain/models/Credential.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L9)

___

### issuer

• `Abstract` **issuer**: `string`

#### Defined in

[src/domain/models/Credential.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L10)

___

### properties

• `Abstract` **properties**: `Map`\<`string`, `any`\>

#### Defined in

[src/domain/models/Credential.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L13)

___

### recoveryId

• `Abstract` **recoveryId**: `string`

#### Defined in

[src/domain/models/Credential.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L8)

___

### subject

• `Abstract` **subject**: `string`

#### Defined in

[src/domain/models/Credential.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L11)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Defined in

[src/domain/models/Credential.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L15)

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

[src/domain/models/Credential.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L17)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Defined in

[src/domain/models/Credential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L21)

___

### isRevoked

▸ **isRevoked**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/domain/models/Credential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L29)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Defined in

[src/domain/models/Credential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/d44afc3403bdd5cf86219cd263be20ea744f4706/src/domain/models/Credential.ts#L25)
