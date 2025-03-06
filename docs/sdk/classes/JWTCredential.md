[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / JWTCredential

# Class: JWTCredential

Storable
define properties a Domain object must implement to be compatible with Pluto

## Hierarchy

- [`Credential`](Domain.Credential.md)

  ↳ **`JWTCredential`**

## Implements

- [`ProvableCredential`](../interfaces/Domain.ProvableCredential.md)
- [`StorableCredential`](../interfaces/Domain.StorableCredential.md)
- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](JWTCredential.md#constructor)

### Properties

- [credentialType](JWTCredential.md#credentialtype)
- [properties](JWTCredential.md#properties)
- [recoveryId](JWTCredential.md#recoveryid)
- [uuid](JWTCredential.md#uuid)

### Accessors

- [audience](JWTCredential.md#audience)
- [claims](JWTCredential.md#claims)
- [context](JWTCredential.md#context)
- [credentialSchema](JWTCredential.md#credentialschema)
- [credentialStatus](JWTCredential.md#credentialstatus)
- [credentialSubject](JWTCredential.md#credentialsubject)
- [evidence](JWTCredential.md#evidence)
- [expirationDate](JWTCredential.md#expirationdate)
- [id](JWTCredential.md#id)
- [isCredential](JWTCredential.md#iscredential)
- [issuanceDate](JWTCredential.md#issuancedate)
- [issuer](JWTCredential.md#issuer)
- [refreshService](JWTCredential.md#refreshservice)
- [revoked](JWTCredential.md#revoked)
- [subject](JWTCredential.md#subject)
- [termsOfUse](JWTCredential.md#termsofuse)
- [type](JWTCredential.md#type)
- [vc](JWTCredential.md#vc)
- [vp](JWTCredential.md#vp)

### Methods

- [getProperty](JWTCredential.md#getproperty)
- [isCredentialPayload](JWTCredential.md#iscredentialpayload)
- [isProvable](JWTCredential.md#isprovable)
- [isRevoked](JWTCredential.md#isrevoked)
- [isStorable](JWTCredential.md#isstorable)
- [presentation](JWTCredential.md#presentation)
- [toStorable](JWTCredential.md#tostorable)
- [verifiableCredential](JWTCredential.md#verifiablecredential)
- [fromJWS](JWTCredential.md#fromjws)

## Constructors

### constructor

• **new JWTCredential**(`payload`, `revoked?`): [`JWTCredential`](JWTCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `string` |
| `revoked?` | `boolean` |

#### Returns

[`JWTCredential`](JWTCredential.md)

#### Overrides

[Credential](Domain.Credential.md).[constructor](Domain.Credential.md#constructor)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:59](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L59)

• **new JWTCredential**(`payload`, `revoked?`): [`JWTCredential`](JWTCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `JWTCredentialPayload` \| `JWTPresentationPayload` |
| `revoked?` | `boolean` |

#### Returns

[`JWTCredential`](JWTCredential.md)

#### Overrides

Credential.constructor

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L60)

## Properties

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.JWT`

#### Overrides

[Credential](Domain.Credential.md).[credentialType](Domain.Credential.md#credentialtype)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L55)

___

### properties

• **properties**: `Map`\<[`Claims`](../enums/Domain.JWT.Claims.md) \| `JWT_VC_PROPS` \| `JWT_VP_PROPS`, `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L57)

___

### recoveryId

• **recoveryId**: `string` = `JWTVerifiableCredentialRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L56)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Inherited from

[Credential](Domain.Credential.md).[uuid](Domain.Credential.md#uuid)

#### Defined in

[src/domain/models/Credential.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Credential.ts#L15)

## Accessors

### audience

• `get` **audience**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:359](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L359)

___

### claims

• `get` **claims**(): `Record`\<`string`, `any`\>[]

#### Returns

`Record`\<`string`, `any`\>[]

#### Overrides

Credential.claims

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:316](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L316)

___

### context

• `get` **context**(): `undefined` \| [[`credential`](../enums/Domain.W3CVerifiableCredentialContext.md#credential)]

#### Returns

`undefined` \| [[`credential`](../enums/Domain.W3CVerifiableCredentialContext.md#credential)]

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:325](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L325)

___

### credentialSchema

• `get` **credentialSchema**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:329](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L329)

___

### credentialStatus

• `get` **credentialStatus**(): `unknown`

#### Returns

`unknown`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:333](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L333)

___

### credentialSubject

• `get` **credentialSubject**(): `undefined` \| `Record`\<`string`, `any`\>

#### Returns

`undefined` \| `Record`\<`string`, `any`\>

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:337](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L337)

___

### evidence

• `get` **evidence**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:341](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L341)

___

### expirationDate

• `get` **expirationDate**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:345](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L345)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:292](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L292)

___

### isCredential

• `get` **isCredential**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:288](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L288)

___

### issuanceDate

• `get` **issuanceDate**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:352](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L352)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:366](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L366)

___

### refreshService

• `get` **refreshService**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:373](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L373)

___

### revoked

• `get` **revoked**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:385](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L385)

___

### subject

• `get` **subject**(): `string`

#### Returns

`string`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:377](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L377)

___

### termsOfUse

• `get` **termsOfUse**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:393](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L393)

___

### type

• `get` **type**(): `undefined` \| [[`credential`](../enums/Domain.W3CVerifiableCredentialType.md#credential)] \| [[`presentation`](../enums/Domain.W3CVerifiableCredentialType.md#presentation)]

#### Returns

`undefined` \| [[`credential`](../enums/Domain.W3CVerifiableCredentialType.md#credential)] \| [[`presentation`](../enums/Domain.W3CVerifiableCredentialType.md#presentation)]

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:397](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L397)

___

### vc

• `get` **vc**(): `undefined` \| [`W3CVerifiableCredential`](../modules/Domain.md#w3cverifiablecredential)

#### Returns

`undefined` \| [`W3CVerifiableCredential`](../modules/Domain.md#w3cverifiablecredential)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:300](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L300)

___

### vp

• `get` **vp**(): `undefined` \| [`W3CVerifiablePresentation`](../modules/Domain.md#w3cverifiablepresentation)

#### Returns

`undefined` \| [`W3CVerifiablePresentation`](../modules/Domain.md#w3cverifiablepresentation)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:308](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L308)

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

### isCredentialPayload

▸ **isCredentialPayload**(`payload`): payload is JWTCredentialPayload

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

payload is JWTCredentialPayload

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:207](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L207)

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

[src/pollux/models/JWTVerifiableCredential.ts:401](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L401)

___

### toStorable

▸ **toStorable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `availableClaims` | `string`[] |
| `credentialData` | `string` |
| `id` | `any` |
| `issuer` | `any` |
| `recoveryId` | `string` |
| `revoked` | `undefined` \| `boolean` |
| `subject` | `any` |
| `validUntil` | `any` |

#### Implementation of

[StorableCredential](../interfaces/Domain.StorableCredential.md).[toStorable](../interfaces/Domain.StorableCredential.md#tostorable)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:436](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L436)

___

### verifiableCredential

▸ **verifiableCredential**(): [`W3CVerifiableCredential`](../modules/Domain.md#w3cverifiablecredential)

#### Returns

[`W3CVerifiableCredential`](../modules/Domain.md#w3cverifiablecredential)

#### Implementation of

[ProvableCredential](../interfaces/Domain.ProvableCredential.md).[verifiableCredential](../interfaces/Domain.ProvableCredential.md#verifiablecredential)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:418](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L418)

___

### fromJWS

▸ **fromJWS**(`jws`, `revoked?`): [`JWTCredential`](JWTCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |
| `revoked?` | `boolean` |

#### Returns

[`JWTCredential`](JWTCredential.md)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:203](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L203)
