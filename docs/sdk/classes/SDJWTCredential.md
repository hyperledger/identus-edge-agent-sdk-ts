[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / SDJWTCredential

# Class: SDJWTCredential

Storable
define properties a Domain object must implement to be compatible with Pluto

## Hierarchy

- [`Credential`](Domain.Credential.md)

  ↳ **`SDJWTCredential`**

## Implements

- [`ProvableCredential`](../interfaces/Domain.ProvableCredential.md)
- [`StorableCredential`](../interfaces/Domain.StorableCredential.md)
- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](SDJWTCredential.md#constructor)

### Properties

- [claims](SDJWTCredential.md#claims)
- [core](SDJWTCredential.md#core)
- [credentialType](SDJWTCredential.md#credentialtype)
- [properties](SDJWTCredential.md#properties)
- [recoveryId](SDJWTCredential.md#recoveryid)
- [uuid](SDJWTCredential.md#uuid)

### Accessors

- [id](SDJWTCredential.md#id)
- [issuer](SDJWTCredential.md#issuer)
- [revoked](SDJWTCredential.md#revoked)
- [subject](SDJWTCredential.md#subject)

### Methods

- [getProperty](SDJWTCredential.md#getproperty)
- [isProvable](SDJWTCredential.md#isprovable)
- [isRevoked](SDJWTCredential.md#isrevoked)
- [isStorable](SDJWTCredential.md#isstorable)
- [presentation](SDJWTCredential.md#presentation)
- [toStorable](SDJWTCredential.md#tostorable)
- [verifiableCredential](SDJWTCredential.md#verifiablecredential)
- [fromJWS](SDJWTCredential.md#fromjws)

## Constructors

### constructor

• **new SDJWTCredential**(`object`, `claims`, `revoked?`): [`SDJWTCredential`](SDJWTCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `SDJwt`\<`Record`\<`string`, `unknown`\>, `Record`\<`string`, `unknown`\>, `kbHeader`, `kbPayload`\> |
| `claims` | `Record`\<`string`, `any`\>[] |
| `revoked?` | `boolean` |

#### Returns

[`SDJWTCredential`](SDJWTCredential.md)

#### Overrides

[Credential](Domain.Credential.md).[constructor](Domain.Credential.md#constructor)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L53)

## Properties

### claims

• **claims**: `Record`\<`string`, `any`\>[] = `[]`

#### Overrides

[Credential](Domain.Credential.md).[claims](Domain.Credential.md#claims)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L50)

___

### core

• **core**: `SDJwt`\<`Record`\<`string`, `unknown`\>, `Record`\<`string`, `unknown`\>, `kbHeader`, `kbPayload`\>

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L51)

___

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.SDJWT`

#### Overrides

[Credential](Domain.Credential.md).[credentialType](Domain.Credential.md#credentialtype)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L32)

___

### properties

• **properties**: `Map`\<[`Claims`](../enums/Domain.JWT.Claims.md) \| `SDJWT_VP_PROPS`, `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L49)

___

### recoveryId

• **recoveryId**: `string` = `SDJWTVerifiableCredentialRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L33)

___

### uuid

• **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Overrides

[Credential](Domain.Credential.md).[uuid](Domain.Credential.md#uuid)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L48)

## Accessors

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L35)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L39)

___

### revoked

• `get` **revoked**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:151](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L151)

___

### subject

• `get` **subject**(): `any`

#### Returns

`any`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L43)

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

[src/domain/models/Credential.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Credential.ts#L17)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isProvable](Domain.Credential.md#isprovable)

#### Defined in

[src/domain/models/Credential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Credential.ts#L21)

___

### isRevoked

▸ **isRevoked**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Credential](Domain.Credential.md).[isRevoked](Domain.Credential.md#isrevoked)

#### Defined in

[src/domain/models/Credential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Credential.ts#L29)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isStorable](Domain.Credential.md#isstorable)

#### Defined in

[src/domain/models/Credential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Credential.ts#L25)

___

### presentation

▸ **presentation**(): [`W3CVerifiablePresentation`](../modules/Domain.md#w3cverifiablepresentation)

#### Returns

[`W3CVerifiablePresentation`](../modules/Domain.md#w3cverifiablepresentation)

#### Implementation of

[ProvableCredential](../interfaces/Domain.ProvableCredential.md).[presentation](../interfaces/Domain.ProvableCredential.md#presentation)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:137](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L137)

___

### toStorable

▸ **toStorable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `availableClaims?` | `string`[] |
| `credentialCreated?` | `string` |
| `credentialData` | `string` |
| `credentialSchema?` | `string` |
| `credentialUpdated?` | `string` |
| `id` | `string` |
| `issuer?` | `string` |
| `recoveryId` | `string` |
| `revoked?` | `boolean` |
| `subject?` | `string` |
| `validUntil?` | `string` |

#### Implementation of

[StorableCredential](../interfaces/Domain.StorableCredential.md).[toStorable](../interfaces/Domain.StorableCredential.md#tostorable)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:155](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L155)

___

### verifiableCredential

▸ **verifiableCredential**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ProvableCredential](../interfaces/Domain.ProvableCredential.md).[verifiableCredential](../interfaces/Domain.ProvableCredential.md#verifiablecredential)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:133](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L133)

___

### fromJWS

▸ **fromJWS**\<`E`\>(`jws`, `revoked?`): [`SDJWTCredential`](SDJWTCredential.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `jws` | `string` | `undefined` |
| `revoked` | `boolean` | `false` |

#### Returns

[`SDJWTCredential`](SDJWTCredential.md)

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:171](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L171)
