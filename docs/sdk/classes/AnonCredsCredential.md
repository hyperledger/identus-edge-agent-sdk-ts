[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / AnonCredsCredential

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
- [fromJson](AnonCredsCredential.md#fromjson)

## Constructors

### constructor

• **new AnonCredsCredential**(`credential`, `isRevoked?`): [`AnonCredsCredential`](AnonCredsCredential.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credential` | `CredentialType` | `undefined` |
| `isRevoked` | `boolean` | `false` |

#### Returns

[`AnonCredsCredential`](AnonCredsCredential.md)

#### Overrides

[Credential](Domain.Credential.md).[constructor](Domain.Credential.md#constructor)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L30)

## Properties

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.AnonCreds`

#### Overrides

[Credential](Domain.Credential.md).[credentialType](Domain.Credential.md#credentialtype)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L26)

___

### properties

• **properties**: `Map`\<[`AnonCredsCredentialProperties`](../enums/AnonCredsCredentialProperties.md), `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L28)

___

### recoveryId

• **recoveryId**: `string` = `AnonCredsRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L27)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Inherited from

[Credential](Domain.Credential.md).[uuid](Domain.Credential.md#uuid)

#### Defined in

[src/domain/models/Credential.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/Credential.ts#L15)

## Accessors

### claims

• `get` **claims**(): {}[]

#### Returns

{}[]

#### Overrides

Credential.claims

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:64](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L64)

___

### credentialDefinitionId

• `get` **credentialDefinitionId**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L71)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L49)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L75)

___

### revoked

• `get` **revoked**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L87)

___

### schemaId

• `get` **schemaId**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:79](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L79)

___

### subject

• `get` **subject**(): `any`

#### Returns

`any`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:83](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L83)

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

[src/domain/models/Credential.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/Credential.ts#L17)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isProvable](Domain.Credential.md#isprovable)

#### Defined in

[src/domain/models/Credential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/Credential.ts#L21)

___

### isRevoked

▸ **isRevoked**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Credential](Domain.Credential.md).[isRevoked](Domain.Credential.md#isrevoked)

#### Defined in

[src/domain/models/Credential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/Credential.ts#L29)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isStorable](Domain.Credential.md#isstorable)

#### Defined in

[src/domain/models/Credential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/models/Credential.ts#L25)

___

### toJSON

▸ **toJSON**(): `CredentialType`

#### Returns

`CredentialType`

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L105)

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

[src/pollux/models/AnonCredsVerifiableCredential.ts:91](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L91)

___

### fromJson

▸ **fromJson**(`value`): [`AnonCredsCredential`](AnonCredsCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`AnonCredsCredential`](AnonCredsCredential.md)

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:115](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/pollux/models/AnonCredsVerifiableCredential.ts#L115)
