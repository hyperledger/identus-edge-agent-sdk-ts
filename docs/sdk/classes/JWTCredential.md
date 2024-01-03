[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / JWTCredential

# Class: JWTCredential

## Hierarchy

- [`Credential`](Domain.Credential.md)

  ↳ **`JWTCredential`**

## Implements

- [`ProvableCredential`](../interfaces/Domain.ProvableCredential.md)
- [`StorableCredential`](../interfaces/Domain.StorableCredential.md)

## Table of contents

### Constructors

- [constructor](JWTCredential.md#constructor)

### Properties

- [aud](JWTCredential.md#aud)
- [credentialType](JWTCredential.md#credentialtype)
- [exp](JWTCredential.md#exp)
- [iss](JWTCredential.md#iss)
- [jti](JWTCredential.md#jti)
- [nbf](JWTCredential.md#nbf)
- [originalJWTString](JWTCredential.md#originaljwtstring)
- [properties](JWTCredential.md#properties)
- [recoveryId](JWTCredential.md#recoveryid)
- [sub](JWTCredential.md#sub)
- [verifiableCredential](JWTCredential.md#verifiablecredential)

### Accessors

- [claims](JWTCredential.md#claims)
- [context](JWTCredential.md#context)
- [credentialSchema](JWTCredential.md#credentialschema)
- [credentialStatus](JWTCredential.md#credentialstatus)
- [credentialSubject](JWTCredential.md#credentialsubject)
- [evidence](JWTCredential.md#evidence)
- [expirationDate](JWTCredential.md#expirationdate)
- [id](JWTCredential.md#id)
- [issuanceDate](JWTCredential.md#issuancedate)
- [issuer](JWTCredential.md#issuer)
- [refreshService](JWTCredential.md#refreshservice)
- [subject](JWTCredential.md#subject)
- [termsOfUse](JWTCredential.md#termsofuse)
- [type](JWTCredential.md#type)
- [vc](JWTCredential.md#vc)

### Methods

- [getProperty](JWTCredential.md#getproperty)
- [isProvable](JWTCredential.md#isprovable)
- [isStorable](JWTCredential.md#isstorable)
- [presentation](JWTCredential.md#presentation)
- [toStorable](JWTCredential.md#tostorable)
- [fromJWT](JWTCredential.md#fromjwt)

## Constructors

### constructor

• **new JWTCredential**(`iss`, `verifiableCredential`, `jti`, `nbf`, `sub`, `exp?`, `aud?`, `originalJWTString?`): [`JWTCredential`](JWTCredential.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `iss` | `string` | `undefined` |
| `verifiableCredential` | `Record`\<`string`, `any`\> | `undefined` |
| `jti` | `string` | `undefined` |
| `nbf` | `number` | `undefined` |
| `sub` | `string` | `undefined` |
| `exp?` | `number` | `undefined` |
| `aud` | `string`[] | `[]` |
| `originalJWTString?` | `string` | `undefined` |

#### Returns

[`JWTCredential`](JWTCredential.md)

#### Overrides

[Credential](Domain.Credential.md).[constructor](Domain.Credential.md#constructor)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L33)

## Properties

### aud

• `Readonly` **aud**: `string`[] = `[]`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:40](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L40)

___

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.JWT`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L25)

___

### exp

• `Optional` `Readonly` **exp**: `number`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:39](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L39)

___

### iss

• `Readonly` **iss**: `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L34)

___

### jti

• `Readonly` **jti**: `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L36)

___

### nbf

• `Readonly` **nbf**: `number`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:37](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L37)

___

### originalJWTString

• `Optional` `Readonly` **originalJWTString**: `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:41](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L41)

___

### properties

• **properties**: `Map`\<[`JWTVerifiableCredentialProperties`](../enums/JWTVerifiableCredentialProperties.md), `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L27)

___

### recoveryId

• **recoveryId**: `string` = `JWTVerifiableCredentialRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:26](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L26)

___

### sub

• `Readonly` **sub**: `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:38](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L38)

___

### verifiableCredential

• `Readonly` **verifiableCredential**: `Record`\<`string`, `any`\>

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:35](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L35)

## Accessors

### claims

• `get` **claims**(): `any`[]

#### Returns

`any`[]

#### Overrides

Credential.claims

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:81](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L81)

___

### context

• `get` **context**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:85](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L85)

___

### credentialSchema

• `get` **credentialSchema**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:89](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L89)

___

### credentialStatus

• `get` **credentialStatus**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:93](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L93)

___

### credentialSubject

• `get` **credentialSubject**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:97](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L97)

___

### evidence

• `get` **evidence**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:101](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L101)

___

### expirationDate

• `get` **expirationDate**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:105](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L105)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L73)

___

### issuanceDate

• `get` **issuanceDate**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:109](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L109)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:113](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L113)

___

### refreshService

• `get` **refreshService**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:117](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L117)

___

### subject

• `get` **subject**(): `any`

#### Returns

`any`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:121](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L121)

___

### termsOfUse

• `get` **termsOfUse**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:125](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L125)

___

### type

• `get` **type**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:129](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L129)

___

### vc

• `get` **vc**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:77](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L77)

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

### presentation

▸ **presentation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `@context` | `string`[] |
| `type` | `string`[] |
| `verifiableCredential` | `string`[] |

#### Implementation of

[ProvableCredential](../interfaces/Domain.ProvableCredential.md).[presentation](../interfaces/Domain.ProvableCredential.md#presentation)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:133](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L133)

___

### toStorable

▸ **toStorable**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `availableClaims` | `any`[] |
| `credentialData` | `string` |
| `id` | `any` |
| `issuer` | `any` |
| `recoveryId` | `string` |
| `subject` | `any` |
| `validUntil` | `any` |

#### Implementation of

[StorableCredential](../interfaces/Domain.StorableCredential.md).[toStorable](../interfaces/Domain.StorableCredential.md#tostorable)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:142](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L142)

___

### fromJWT

▸ **fromJWT**(`jwtObj`, `jwtString`): [`JWTCredential`](JWTCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwtObj` | `any` |
| `jwtString` | `string` |

#### Returns

[`JWTCredential`](JWTCredential.md)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L60)
