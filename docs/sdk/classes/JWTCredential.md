[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / JWTCredential

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

[src/pollux/models/JWTVerifiableCredential.ts:35](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L35)

• **new JWTCredential**(`payload`, `revoked?`): [`JWTCredential`](JWTCredential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`JWTCredentialPayload`](../modules/Domain.md#jwtcredentialpayload) \| [`JWTPresentationPayload`](../modules/Domain.md#jwtpresentationpayload) |
| `revoked?` | `boolean` |

#### Returns

[`JWTCredential`](JWTCredential.md)

#### Overrides

Credential.constructor

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L36)

## Properties

### credentialType

• **credentialType**: [`CredentialType`](../enums/Domain.CredentialType.md) = `CredentialType.JWT`

#### Overrides

[Credential](Domain.Credential.md).[credentialType](Domain.Credential.md#credentialtype)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L31)

___

### properties

• **properties**: `Map`\<[`iss`](../enums/Domain.JWTVerifiableCredentialProperties.md#iss) \| [`sub`](../enums/Domain.JWTVerifiableCredentialProperties.md#sub) \| [`jti`](../enums/Domain.JWTVerifiableCredentialProperties.md#jti) \| [`nbf`](../enums/Domain.JWTVerifiableCredentialProperties.md#nbf) \| [`exp`](../enums/Domain.JWTVerifiableCredentialProperties.md#exp) \| [`aud`](../enums/Domain.JWTVerifiableCredentialProperties.md#aud) \| [`vc`](../enums/Domain.JWTVerifiableCredentialProperties.md#vc) \| [`type`](../enums/Domain.JWTVerifiableCredentialProperties.md#type) \| [`revoked`](../enums/Domain.JWTVerifiableCredentialProperties.md#revoked) \| [`iss`](../enums/Domain.JWTVerifiablePresentationProperties.md#iss) \| [`jti`](../enums/Domain.JWTVerifiablePresentationProperties.md#jti) \| [`aud`](../enums/Domain.JWTVerifiablePresentationProperties.md#aud) \| [`nbf`](../enums/Domain.JWTVerifiablePresentationProperties.md#nbf) \| [`iat`](../enums/Domain.JWTVerifiablePresentationProperties.md#iat) \| [`exp`](../enums/Domain.JWTVerifiablePresentationProperties.md#exp) \| [`nonce`](../enums/Domain.JWTVerifiablePresentationProperties.md#nonce) \| [`vp`](../enums/Domain.JWTVerifiablePresentationProperties.md#vp), `any`\>

#### Overrides

[Credential](Domain.Credential.md).[properties](Domain.Credential.md#properties)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L33)

___

### recoveryId

• **recoveryId**: `string` = `JWTVerifiableCredentialRecoveryId`

#### Overrides

[Credential](Domain.Credential.md).[recoveryId](Domain.Credential.md#recoveryid)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L32)

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

[src/domain/models/Credential.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L17)

## Accessors

### audience

• `get` **audience**(): `any`

#### Returns

`any`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:330](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L330)

___

### claims

• `get` **claims**(): `Record`\<`string`, `any`\>[]

#### Returns

`Record`\<`string`, `any`\>[]

#### Overrides

Credential.claims

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:287](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L287)

___

### context

• `get` **context**(): `undefined` \| [[`credential`](../enums/Domain.W3CVerifiableCredentialContext.md#credential)]

#### Returns

`undefined` \| [[`credential`](../enums/Domain.W3CVerifiableCredentialContext.md#credential)]

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:296](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L296)

___

### credentialSchema

• `get` **credentialSchema**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:300](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L300)

___

### credentialStatus

• `get` **credentialStatus**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:304](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L304)

___

### credentialSubject

• `get` **credentialSubject**(): `undefined` \| `Record`\<`string`, `any`\>

#### Returns

`undefined` \| `Record`\<`string`, `any`\>

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:308](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L308)

___

### evidence

• `get` **evidence**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:312](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L312)

___

### expirationDate

• `get` **expirationDate**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:316](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L316)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Overrides

Credential.id

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:263](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L263)

___

### isCredential

• `get` **isCredential**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:259](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L259)

___

### issuanceDate

• `get` **issuanceDate**(): `string`

#### Returns

`string`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:323](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L323)

___

### issuer

• `get` **issuer**(): `any`

#### Returns

`any`

#### Overrides

Credential.issuer

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:337](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L337)

___

### refreshService

• `get` **refreshService**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:344](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L344)

___

### revoked

• `get` **revoked**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:356](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L356)

___

### subject

• `get` **subject**(): `string`

#### Returns

`string`

#### Overrides

Credential.subject

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:348](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L348)

___

### termsOfUse

• `get` **termsOfUse**(): `undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Returns

`undefined` \| \{ `id`: `string` ; `type`: `string`  }

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:364](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L364)

___

### type

• `get` **type**(): `undefined` \| [[`credential`](../enums/Domain.W3CVerifiableCredentialType.md#credential)] \| [[`presentation`](../enums/Domain.W3CVerifiableCredentialType.md#presentation)]

#### Returns

`undefined` \| [[`credential`](../enums/Domain.W3CVerifiableCredentialType.md#credential)] \| [[`presentation`](../enums/Domain.W3CVerifiableCredentialType.md#presentation)]

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:368](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L368)

___

### vc

• `get` **vc**(): `undefined` \| [`W3CVerifiableCredential`](../modules/Domain.md#w3cverifiablecredential)

#### Returns

`undefined` \| [`W3CVerifiableCredential`](../modules/Domain.md#w3cverifiablecredential)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:271](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L271)

___

### vp

• `get` **vp**(): `undefined` \| [`W3CVerifiablePresentation`](../modules/Domain.md#w3cverifiablepresentation)

#### Returns

`undefined` \| [`W3CVerifiablePresentation`](../modules/Domain.md#w3cverifiablepresentation)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:279](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L279)

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

[src/domain/models/Credential.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L19)

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

[src/pollux/models/JWTVerifiableCredential.ts:181](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L181)

___

### isProvable

▸ **isProvable**(): this is ProvableCredential

#### Returns

this is ProvableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isProvable](Domain.Credential.md#isprovable)

#### Defined in

[src/domain/models/Credential.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L23)

___

### isRevoked

▸ **isRevoked**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Credential](Domain.Credential.md).[isRevoked](Domain.Credential.md#isrevoked)

#### Defined in

[src/domain/models/Credential.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L31)

___

### isStorable

▸ **isStorable**(): this is StorableCredential

#### Returns

this is StorableCredential

#### Inherited from

[Credential](Domain.Credential.md).[isStorable](Domain.Credential.md#isstorable)

#### Defined in

[src/domain/models/Credential.ts:27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Credential.ts#L27)

___

### presentation

▸ **presentation**(): [`W3CVerifiablePresentation`](../modules/Domain.md#w3cverifiablepresentation)

#### Returns

[`W3CVerifiablePresentation`](../modules/Domain.md#w3cverifiablepresentation)

#### Implementation of

[ProvableCredential](../interfaces/Domain.ProvableCredential.md).[presentation](../interfaces/Domain.ProvableCredential.md#presentation)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:372](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L372)

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

[src/pollux/models/JWTVerifiableCredential.ts:407](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L407)

___

### verifiableCredential

▸ **verifiableCredential**(): [`W3CVerifiableCredential`](../modules/Domain.md#w3cverifiablecredential)

#### Returns

[`W3CVerifiableCredential`](../modules/Domain.md#w3cverifiablecredential)

#### Implementation of

[ProvableCredential](../interfaces/Domain.ProvableCredential.md).[verifiableCredential](../interfaces/Domain.ProvableCredential.md#verifiablecredential)

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:389](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L389)

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

[src/pollux/models/JWTVerifiableCredential.ts:177](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/pollux/models/JWTVerifiableCredential.ts#L177)
