[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / AnonCredsCredential

# Class: AnonCredsCredential

Storable
define properties a Domain object must implement to be compatible with Pluto

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
- [uuid](AnonCredsCredential.md#uuid)

### Accessors

- [claims](AnonCredsCredential.md#claims)
- [credentialDefinitionId](AnonCredsCredential.md#credentialdefinitionid)
- [id](AnonCredsCredential.md#id)
- [issuer](AnonCredsCredential.md#issuer)
- [revoked](AnonCredsCredential.md#revoked)
- [schemaId](AnonCredsCredential.md#schemaid)
- [subject](AnonCredsCredential.md#subject)

### Methods

- [getProperty](AnonCredsCredential.md#getproperty)
- [isProvable](AnonCredsCredential.md#isprovable)
- [isRevoked](AnonCredsCredential.md#isrevoked)
- [isStorable](AnonCredsCredential.md#isstorable)
- [toJSON](AnonCredsCredential.md#tojson)
- [toStorable](AnonCredsCredential.md#tostorable)

## Constructors

### constructor

• **new AnonCredsCredential**(`credential`, `isRevoked?`): [`AnonCredsCredential`](AnonCredsCredential.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credential` | [`Credential`](../interfaces/Domain.Anoncreds.Credential.md) | `undefined` |
| `isRevoked` | `boolean` | `false` |

#### Returns

[`AnonCredsCredential`](AnonCredsCredential.md)

#### Overrides

[Credential](Domain.Credential.md).[constructor](Domain.Credential.md#constructor)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:28](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L28)

## Properties

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.AnonCreds`

#### Overrides

[Credential](Domain.Credential.md).[credentialType](Domain.Credential.md#credentialtype)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L24)

___

### properties

• **properties**: `Map`\<[`AnonCredsCredentialProperties`](../enums/AnonCredsCredentialProperties.md), `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L26)

___

### recoveryId

• **recoveryId**: `string` = `AnonCredsRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L25)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Inherited from

[Credential](Domain.Credential.md).[uuid](Domain.Credential.md#uuid)

#### Defined in

[src/domain/models/Credential.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/Credential.ts#L17)

## Accessors

### claims

• `get` **claims**(): {}[]

#### Returns

{}[]

#### Overrides

Credential.claims

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:62](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L62)

___

### credentialDefinitionId

• `get` **credentialDefinitionId**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:69](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L69)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:47](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L47)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L73)

___

### revoked

• `get` **revoked**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:85](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L85)

___

### schemaId

• `get` **schemaId**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:77](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L77)

___

### subject

• `get` **subject**(): `any`

#### Returns

`any`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:81](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L81)

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

[src/domain/models/Credential.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/Credential.ts#L19)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isProvable](Domain.Credential.md#isprovable)

#### Defined in

[src/domain/models/Credential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/Credential.ts#L23)

___

### isRevoked

▸ **isRevoked**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Credential](Domain.Credential.md).[isRevoked](Domain.Credential.md#isrevoked)

#### Defined in

[src/domain/models/Credential.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/Credential.ts#L31)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isStorable](Domain.Credential.md#isstorable)

#### Defined in

[src/domain/models/Credential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/domain/models/Credential.ts#L27)

___

### toJSON

▸ **toJSON**(): [`Credential`](../interfaces/Domain.Anoncreds.Credential.md)

#### Returns

[`Credential`](../interfaces/Domain.Anoncreds.Credential.md)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:103](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L103)

___

### toStorable

▸ **toStorable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `credentialData` | `string` |
| `id` | `string` |
| `issuer` | `any` |
| `recoveryId` | `string` |
| `subject` | `any` |
| `validUntil` | `any` |

#### Implementation of

[StorableCredential](../interfaces/Domain.StorableCredential.md).[toStorable](../interfaces/Domain.StorableCredential.md#tostorable)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:89](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/47ec1c8/src/pollux/models/AnonCredsVerifiableCredential.ts#L89)
