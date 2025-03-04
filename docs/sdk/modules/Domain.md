[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / Domain

# Namespace: Domain

## Table of contents

### References

- [KeyRestoration](Domain.md#keyrestoration)
- [Startable](Domain.md#startable)

### Namespaces

- [AgentError](Domain.AgentError.md)
- [ApolloError](Domain.ApolloError.md)
- [Backup](Domain.Backup.md)
- [CastorError](Domain.CastorError.md)
- [CommonError](Domain.CommonError.md)
- [ExportableKey](Domain.ExportableKey.md)
- [ImportableKey](Domain.ImportableKey.md)
- [JWK](Domain.JWK.md)
- [JWT](Domain.JWT.md)
- [MercuryError](Domain.MercuryError.md)
- [Message](Domain.Message.md)
- [PEM](Domain.PEM.md)
- [Pluto](Domain.Pluto.md)
- [PlutoError](Domain.PlutoError.md)
- [PolluxError](Domain.PolluxError.md)
- [Protocols](Domain.Protocols.md)
- [StorableKey](Domain.StorableKey.md)

### Enumerations

- [CredentialType](../enums/Domain.CredentialType.md)
- [Curve](../enums/Domain.Curve.md)
- [JWT\_ALG](../enums/Domain.JWT_ALG.md)
- [KeyProperties](../enums/Domain.KeyProperties.md)
- [KeyTypes](../enums/Domain.KeyTypes.md)
- [KeyUsage](../enums/Domain.KeyUsage.md)
- [MessageDirection](../enums/Domain.MessageDirection.md)
- [Usage](../enums/Domain.Usage.md)
- [W3CVerifiableCredentialContext](../enums/Domain.W3CVerifiableCredentialContext.md)
- [W3CVerifiableCredentialType](../enums/Domain.W3CVerifiableCredentialType.md)

### Classes

- [AlsoKnownAs](../classes/Domain.AlsoKnownAs.md)
- [ApiError](../classes/Domain.ApiError.md)
- [ApiResponse](../classes/Domain.ApiResponse.md)
- [AssertionMethod](../classes/Domain.AssertionMethod.md)
- [AttachmentDescriptor](../classes/Domain.AttachmentDescriptor.md)
- [Authentication](../classes/Domain.Authentication.md)
- [CapabilityDelegation](../classes/Domain.CapabilityDelegation.md)
- [CapabilityInvocation](../classes/Domain.CapabilityInvocation.md)
- [Controller](../classes/Domain.Controller.md)
- [Credential](../classes/Domain.Credential.md)
- [CredentialMetadata](../classes/Domain.CredentialMetadata.md)
- [DID](../classes/Domain.DID.md)
- [DIDDocument](../classes/Domain.DIDDocument.md)
- [DIDPair](../classes/Domain.DIDPair.md)
- [DIDResolver](../classes/Domain.DIDResolver.md)
- [DIDUrl](../classes/Domain.DIDUrl.md)
- [DerivableKey](../classes/Domain.DerivableKey.md)
- [Key](../classes/Domain.Key.md)
- [KeyAgreement](../classes/Domain.KeyAgreement.md)
- [KeyPair](../classes/Domain.KeyPair.md)
- [LinkSecret](../classes/Domain.LinkSecret.md)
- [Message](../classes/Domain.Message-1.md)
- [PrismDID](../classes/Domain.PrismDID.md)
- [PrivateKey](../classes/Domain.PrivateKey.md)
- [PublicKey](../classes/Domain.PublicKey.md)
- [Service](../classes/Domain.Service.md)
- [ServiceEndpoint](../classes/Domain.ServiceEndpoint.md)
- [Services](../classes/Domain.Services.md)
- [SignableKey](../classes/Domain.SignableKey.md)
- [VerifiableKey](../classes/Domain.VerifiableKey.md)
- [VerificationMethod](../classes/Domain.VerificationMethod.md)
- [VerificationMethods](../classes/Domain.VerificationMethods.md)

### Interfaces

- [Api](../interfaces/Domain.Api.md)
- [Apollo](../interfaces/Domain.Apollo.md)
- [AttachmentBase64](../interfaces/Domain.AttachmentBase64.md)
- [AttachmentHeader](../interfaces/Domain.AttachmentHeader.md)
- [AttachmentJws](../interfaces/Domain.AttachmentJws.md)
- [AttachmentJwsData](../interfaces/Domain.AttachmentJwsData.md)
- [AttachmentLinkData](../interfaces/Domain.AttachmentLinkData.md)
- [Castor](../interfaces/Domain.Castor.md)
- [KeyCurve](../interfaces/Domain.KeyCurve.md)
- [Mediator](../interfaces/Domain.Mediator.md)
- [Mercury](../interfaces/Domain.Mercury.md)
- [Pluto](../interfaces/Domain.Pluto-1.md)
- [ProvableCredential](../interfaces/Domain.ProvableCredential.md)
- [PublicKeyJWK](../interfaces/Domain.PublicKeyJWK.md)
- [Seed](../interfaces/Domain.Seed.md)
- [SeedWords](../interfaces/Domain.SeedWords.md)
- [Signature](../interfaces/Domain.Signature.md)
- [StorableCredential](../interfaces/Domain.StorableCredential.md)
- [StorableKey](../interfaces/Domain.StorableKey-1.md)

### Type Aliases

- [AttachmentData](Domain.md#attachmentdata)
- [AttachmentJsonData](Domain.md#attachmentjsondata)
- [DIDDocumentCoreProperty](Domain.md#diddocumentcoreproperty)
- [ExportableKey](Domain.md#exportablekey)
- [HttpMethod](Domain.md#httpmethod)
- [JWK](Domain.md#jwk)
- [JsonString](Domain.md#jsonstring)
- [MnemonicWordList](Domain.md#mnemonicwordlist)
- [PresentationClaims](Domain.md#presentationclaims)
- [W3CVerifiableCredential](Domain.md#w3cverifiablecredential)
- [W3CVerifiablePresentation](Domain.md#w3cverifiablepresentation)
- [W3CVerifiablePresentationProof](Domain.md#w3cverifiablepresentationproof)

### Functions

- [curveToAlg](Domain.md#curvetoalg)
- [getKeyCurveByNameAndIndex](Domain.md#getkeycurvebynameandindex)
- [getProtosUsage](Domain.md#getprotosusage)
- [getUsage](Domain.md#getusage)
- [getUsageFromId](Domain.md#getusagefromid)
- [getUsageId](Domain.md#getusageid)

## References

### KeyRestoration

Re-exports [KeyRestoration](../interfaces/Domain.Protocols.KeyRestoration.md)

___

### Startable

Re-exports [Startable](Domain.Protocols.Startable.md)

## Type Aliases

### AttachmentData

Ƭ **AttachmentData**: [`AttachmentJsonData`](Domain.md#attachmentjsondata) \| [`AttachmentLinkData`](../interfaces/Domain.AttachmentLinkData.md) \| [`AttachmentBase64`](../interfaces/Domain.AttachmentBase64.md) \| [`AttachmentJwsData`](../interfaces/Domain.AttachmentJwsData.md) \| [`AttachmentJws`](../interfaces/Domain.AttachmentJws.md) \| [`AttachmentHeader`](../interfaces/Domain.AttachmentHeader.md)

#### Defined in

[src/domain/models/MessageAttachment.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/MessageAttachment.ts#L32)

___

### AttachmentJsonData

Ƭ **AttachmentJsonData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Defined in

[src/domain/models/MessageAttachment.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/MessageAttachment.ts#L28)

___

### DIDDocumentCoreProperty

Ƭ **DIDDocumentCoreProperty**: [`Service`](../classes/Domain.Service.md) \| [`AlsoKnownAs`](../classes/Domain.AlsoKnownAs.md) \| [`Controller`](../classes/Domain.Controller.md) \| [`VerificationMethods`](../classes/Domain.VerificationMethods.md) \| [`Services`](../classes/Domain.Services.md) \| [`Authentication`](../classes/Domain.Authentication.md) \| [`AssertionMethod`](../classes/Domain.AssertionMethod.md) \| [`KeyAgreement`](../classes/Domain.KeyAgreement.md) \| [`CapabilityInvocation`](../classes/Domain.CapabilityInvocation.md) \| [`CapabilityDelegation`](../classes/Domain.CapabilityDelegation.md)

#### Defined in

[src/domain/models/DIDDocument.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/DIDDocument.ts#L99)

___

### ExportableKey

Ƭ **ExportableKey**: [`All`](Domain.ExportableKey.md#all)

ExportableKey defines the formats a crypographic key can be converted to
Default is all

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/exportable/ExportableKey.ts#L12)

[src/domain/models/keyManagement/exportable/ExportableKey.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/exportable/ExportableKey.ts#L24)

___

### HttpMethod

Ƭ **HttpMethod**: ``"DELETE"`` \| ``"GET"`` \| ``"POST"`` \| ``"PUT"``

#### Defined in

[src/domain/models/Api.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/Api.ts#L1)

___

### JWK

Ƭ **JWK**: [`EC`](../interfaces/Domain.JWK.EC.md) \| [`OCT`](../interfaces/Domain.JWK.OCT.md) \| [`OKP`](../interfaces/Domain.JWK.OKP.md) \| [`RSA`](../interfaces/Domain.JWK.RSA.md)

JWK

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/exportable/JWK.ts#L11)

[src/domain/models/keyManagement/exportable/JWK.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/exportable/JWK.ts#L17)

___

### JsonString

Ƭ **JsonString**: `string`

#### Defined in

[src/domain/models/index.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/index.ts#L23)

___

### MnemonicWordList

Ƭ **MnemonicWordList**: [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`] \| [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`]

#### Defined in

[src/domain/models/WordList.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/WordList.ts#L1)

___

### PresentationClaims

Ƭ **PresentationClaims**\<`T`\>: `T` extends [`JWT`](../enums/Domain.CredentialType.md#jwt) ? `OEA.JWTPresentationClaims` : `T` extends [`SDJWT`](../enums/Domain.CredentialType.md#sdjwt) ? `OEA.SDJWTPresentationClaims` : `T` extends [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) ? `ACClaims` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/VerifiableCredential.ts#L5)

___

### W3CVerifiableCredential

Ƭ **W3CVerifiableCredential**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `@context` | [[`credential`](../enums/Domain.W3CVerifiableCredentialContext.md#credential)] |
| `credentialSchema?` | \{ `id`: `string` ; `type`: `string`  } |
| `credentialSchema.id` | `string` |
| `credentialSchema.type` | `string` |
| `credentialStatus?` | `unknown` |
| `credentialSubject` | `Record`\<`string`, `any`\> |
| `evidence?` | \{ `id`: `string` ; `type`: `string`  } |
| `evidence.id` | `string` |
| `evidence.type` | `string` |
| `expirationDate?` | `string` |
| `issuanceDate` | `string` |
| `issued?` | `string` |
| `issuer` | `string` |
| `refreshService?` | \{ `id`: `string` ; `type`: `string`  } |
| `refreshService.id` | `string` |
| `refreshService.type` | `string` |
| `termsOfUse?` | \{ `id`: `string` ; `type`: `string`  } |
| `termsOfUse.id` | `string` |
| `termsOfUse.type` | `string` |
| `type` | [[`credential`](../enums/Domain.W3CVerifiableCredentialType.md#credential)] |
| `validFrom?` | \{ `id`: `string` ; `type`: `string`  } |
| `validFrom.id` | `string` |
| `validFrom.type` | `string` |
| `validUntil?` | \{ `id`: `string` ; `type`: `string`  } |
| `validUntil.id` | `string` |
| `validUntil.type` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/VerifiableCredential.ts#L38)

___

### W3CVerifiablePresentation

Ƭ **W3CVerifiablePresentation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `@context` | [[`credential`](../enums/Domain.W3CVerifiableCredentialContext.md#credential)] |
| `proof?` | [`W3CVerifiablePresentationProof`](Domain.md#w3cverifiablepresentationproof) |
| `type` | [[`presentation`](../enums/Domain.W3CVerifiableCredentialType.md#presentation)] |
| `verifiableCredential` | `string`[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/VerifiableCredential.ts#L74)

___

### W3CVerifiablePresentationProof

Ƭ **W3CVerifiablePresentationProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `challenge` | `string` |
| `domain` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:85](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/VerifiableCredential.ts#L85)

## Functions

### curveToAlg

▸ **curveToAlg**(`curve`): [`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | `string` |

#### Returns

[`JWT_ALG`](../enums/Domain.JWT_ALG.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:190](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/Key.ts#L190)

___

### getKeyCurveByNameAndIndex

▸ **getKeyCurveByNameAndIndex**(`name`, `index?`): [`KeyCurve`](../interfaces/Domain.KeyCurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `index?` | `number` |

#### Returns

[`KeyCurve`](../interfaces/Domain.KeyCurve.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:199](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/Key.ts#L199)

___

### getProtosUsage

▸ **getProtosUsage**(`usage`): [`KeyUsage`](../enums/Domain.KeyUsage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `usage` | [`Usage`](../enums/Domain.Usage.md) |

#### Returns

[`KeyUsage`](../enums/Domain.KeyUsage.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/Key.ts#L24)

___

### getUsage

▸ **getUsage**(`protosUsage`): [`Usage`](../enums/Domain.Usage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protosUsage` | [`KeyUsage`](../enums/Domain.KeyUsage.md) |

#### Returns

[`Usage`](../enums/Domain.Usage.md)

#### Defined in

[src/domain/models/keyManagement/Key.ts:144](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/Key.ts#L144)

___

### getUsageFromId

▸ **getUsageFromId**(`id`): `Object`

Return usage from a verification method id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `usage` | [`Usage`](../enums/Domain.Usage.md) |

#### Defined in

[src/domain/models/keyManagement/Key.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/Key.ts#L57)

___

### getUsageId

▸ **getUsageId**(`keyUsage`, `index?`): `string`

create an identifier for keys within a DID Document
should be unique within the Document

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `keyUsage` | [`Usage`](../enums/Domain.Usage.md) | `undefined` | maps to a prefix word |
| `index` | `number` | `0` | occurrence of this keyUsage |

#### Returns

`string`

#### Defined in

[src/domain/models/keyManagement/Key.ts:123](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/keyManagement/Key.ts#L123)
