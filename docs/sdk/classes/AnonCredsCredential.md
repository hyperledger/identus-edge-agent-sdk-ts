[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AnonCredsCredential

# Class: AnonCredsCredential

## Hierarchy

- [`Credential`](Domain.Credential.md)

  ↳ **`AnonCredsCredential`**

## Implements

- [`StorableCredential`](../interfaces/Domain.StorableCredential.md)

## Table of contents

### Constructors

- [constructor](AnonCredsCredential.md#constructor)

### Properties

- [credentialType](AnonCredsCredential.md#credentialtype)
- [properties](AnonCredsCredential.md#properties)
- [recoveryId](AnonCredsCredential.md#recoveryid)

### Accessors

- [claims](AnonCredsCredential.md#claims)
- [id](AnonCredsCredential.md#id)
- [issuer](AnonCredsCredential.md#issuer)
- [subject](AnonCredsCredential.md#subject)

### Methods

- [getProperty](AnonCredsCredential.md#getproperty)
- [isProvable](AnonCredsCredential.md#isprovable)
- [isStorable](AnonCredsCredential.md#isstorable)
- [toStorable](AnonCredsCredential.md#tostorable)

## Constructors

### constructor

• **new AnonCredsCredential**(`credential`): [`AnonCredsCredential`](AnonCredsCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../interfaces/Domain.Anoncreds.Credential.md) |

#### Returns

[`AnonCredsCredential`](AnonCredsCredential.md)

#### Overrides

[Credential](Domain.Credential.md).[constructor](Domain.Credential.md#constructor)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L27)

## Properties

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.AnonCreds`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L23)

___

### properties

• **properties**: `Map`\<[`AnonCredsCredentialProperties`](../enums/AnonCredsCredentialProperties.md), `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L25)

___

### recoveryId

• **recoveryId**: `string` = `AnonCredsRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L24)

## Accessors

### claims

• `get` **claims**(): `never`[]

#### Returns

`never`[]

#### Overrides

Credential.claims

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:56](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L56)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:52](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L52)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L65)

___

### subject

• `get` **subject**(): `any`

#### Returns

`any`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L61)

## Methods

### getProperty

▸ **getProperty**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[Credential](Domain.Credential.md).[getProperty](Domain.Credential.md#getproperty)

#### Defined in

[src/domain/models/Credential.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L19)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isProvable](Domain.Credential.md#isprovable)

#### Defined in

[src/domain/models/Credential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L23)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isStorable](Domain.Credential.md#isstorable)

#### Defined in

[src/domain/models/Credential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/models/Credential.ts#L27)

___

### toStorable

▸ **toStorable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `availableClaims` | `never`[] |
| `credentialData` | `string` |
| `id` | `any` |
| `issuer` | `any` |
| `recoveryId` | `string` |
| `subject` | `any` |
| `validUntil` | `any` |

#### Implementation of

[StorableCredential](../interfaces/Domain.StorableCredential.md).[toStorable](../interfaces/Domain.StorableCredential.md#tostorable)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:69](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L69)
