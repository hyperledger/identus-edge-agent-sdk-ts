[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Domain

# Namespace: Domain

## Table of contents

### Namespaces

- [AgentError](Domain.AgentError.md)
- [Anoncreds](Domain.Anoncreds.md)
- [ApiError](Domain.ApiError.md)
- [ApolloError](Domain.ApolloError.md)
- [CastorError](Domain.CastorError.md)
- [CommonError](Domain.CommonError.md)
- [ExportableKey](Domain.ExportableKey.md)
- [ImportableKey](Domain.ImportableKey.md)
- [JWK](Domain.JWK.md)
- [MercuryError](Domain.MercuryError.md)
- [Message](Domain.Message.md)
- [PEM](Domain.PEM.md)
- [Pluto](Domain.Pluto.md)
- [PlutoError](Domain.PlutoError.md)
- [Pollux](Domain.Pollux.md)
- [PolluxError](Domain.PolluxError.md)
- [StorableKey](Domain.StorableKey.md)

### Enumerations

- [AttachmentFormats](../enums/Domain.AttachmentFormats.md)
- [CredentialType](../enums/Domain.CredentialType.md)
- [Curve](../enums/Domain.Curve.md)
- [DescriptorItemFormat](../enums/Domain.DescriptorItemFormat.md)
- [InputLimitDisclosure](../enums/Domain.InputLimitDisclosure.md)
- [JWTVerifiableCredentialProperties](../enums/Domain.JWTVerifiableCredentialProperties.md)
- [JWTVerifiablePresentationProperties](../enums/Domain.JWTVerifiablePresentationProperties.md)
- [KeyProperties](../enums/Domain.KeyProperties.md)
- [KeyTypes](../enums/Domain.KeyTypes.md)
- [MessageDirection](../enums/Domain.MessageDirection.md)
- [W3CVerifiableCredentialContext](../enums/Domain.W3CVerifiableCredentialContext.md)
- [W3CVerifiableCredentialType](../enums/Domain.W3CVerifiableCredentialType.md)

### Classes

- [AlsoKnownAs](../classes/Domain.AlsoKnownAs.md)
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
- [HttpResponse](../classes/Domain.HttpResponse.md)
- [Key](../classes/Domain.Key.md)
- [KeyAgreement](../classes/Domain.KeyAgreement.md)
- [KeyPair](../classes/Domain.KeyPair.md)
- [LinkSecret](../classes/Domain.LinkSecret.md)
- [Message](../classes/Domain.Message-1.md)
- [PresentationOptions](../classes/Domain.PresentationOptions.md)
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
- [AttachmentJsonData](../interfaces/Domain.AttachmentJsonData.md)
- [AttachmentJws](../interfaces/Domain.AttachmentJws.md)
- [AttachmentJwsData](../interfaces/Domain.AttachmentJwsData.md)
- [AttachmentLinkData](../interfaces/Domain.AttachmentLinkData.md)
- [Castor](../interfaces/Domain.Castor.md)
- [CredentialIssueOptions](../interfaces/Domain.CredentialIssueOptions.md)
- [CredentialRequestOptions](../interfaces/Domain.CredentialRequestOptions.md)
- [CredentialSubject](../interfaces/Domain.CredentialSubject.md)
- [KeyCurve](../interfaces/Domain.KeyCurve.md)
- [KeyRestoration](../interfaces/Domain.KeyRestoration.md)
- [Mediator](../interfaces/Domain.Mediator.md)
- [Mercury](../interfaces/Domain.Mercury.md)
- [Pluto](../interfaces/Domain.Pluto-1.md)
- [Pollux](../interfaces/Domain.Pollux-1.md)
- [PresentationClaims](../interfaces/Domain.PresentationClaims.md)
- [ProvableCredential](../interfaces/Domain.ProvableCredential.md)
- [PublicKeyJWK](../interfaces/Domain.PublicKeyJWK.md)
- [Seed](../interfaces/Domain.Seed.md)
- [SeedWords](../interfaces/Domain.SeedWords.md)
- [Signature](../interfaces/Domain.Signature.md)
- [StorableCredential](../interfaces/Domain.StorableCredential.md)
- [StorableKey](../interfaces/Domain.StorableKey-1.md)
- [VerifiableCredentialTypeContainer](../interfaces/Domain.VerifiableCredentialTypeContainer.md)

### Type Aliases

- [AttachmentData](Domain.md#attachmentdata)
- [Claims](Domain.md#claims)
- [DIDDocumentCoreProperty](Domain.md#diddocumentcoreproperty)
- [DefinitionFormat](Domain.md#definitionformat)
- [DescriptorItem](Domain.md#descriptoritem)
- [ExportableKey](Domain.md#exportablekey)
- [InputConstraints](Domain.md#inputconstraints)
- [InputDescriptor](Domain.md#inputdescriptor)
- [InputField](Domain.md#inputfield)
- [InputFieldFilter](Domain.md#inputfieldfilter)
- [JWK](Domain.md#jwk)
- [JWTCredentialPayload](Domain.md#jwtcredentialpayload)
- [JWTPayload](Domain.md#jwtpayload)
- [JWTPresentationPayload](Domain.md#jwtpresentationpayload)
- [JsonString](Domain.md#jsonstring)
- [MnemonicWordList](Domain.md#mnemonicwordlist)
- [PredicateType](Domain.md#predicatetype)
- [PresentationDefinitionRequest](Domain.md#presentationdefinitionrequest)
- [PresentationJWTOptions](Domain.md#presentationjwtoptions)
- [PresentationSubmission](Domain.md#presentationsubmission)
- [W3CVerifiableCredential](Domain.md#w3cverifiablecredential)
- [W3CVerifiablePresentation](Domain.md#w3cverifiablepresentation)
- [W3CVerifiablePresentationProof](Domain.md#w3cverifiablepresentationproof)

### Functions

- [getKeyCurveByNameAndIndex](Domain.md#getkeycurvebynameandindex)

## Type Aliases

### AttachmentData

Ƭ **AttachmentData**: [`AttachmentJsonData`](../interfaces/Domain.AttachmentJsonData.md) \| [`AttachmentLinkData`](../interfaces/Domain.AttachmentLinkData.md) \| [`AttachmentBase64`](../interfaces/Domain.AttachmentBase64.md) \| [`AttachmentJwsData`](../interfaces/Domain.AttachmentJwsData.md) \| [`AttachmentJws`](../interfaces/Domain.AttachmentJws.md) \| [`AttachmentHeader`](../interfaces/Domain.AttachmentHeader.md)

#### Defined in

[src/domain/models/MessageAttachment.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/MessageAttachment.ts#L31)

___

### Claims

Ƭ **Claims**: `Object`

#### Index signature

▪ [name: `string`]: [`InputFieldFilter`](Domain.md#inputfieldfilter)

#### Defined in

[src/domain/models/VerifiableCredential.ts:65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L65)

___

### DIDDocumentCoreProperty

Ƭ **DIDDocumentCoreProperty**: [`Service`](../classes/Domain.Service.md) \| [`AlsoKnownAs`](../classes/Domain.AlsoKnownAs.md) \| [`Controller`](../classes/Domain.Controller.md) \| [`VerificationMethods`](../classes/Domain.VerificationMethods.md) \| [`Services`](../classes/Domain.Services.md) \| [`Authentication`](../classes/Domain.Authentication.md) \| [`AssertionMethod`](../classes/Domain.AssertionMethod.md) \| [`KeyAgreement`](../classes/Domain.KeyAgreement.md) \| [`CapabilityInvocation`](../classes/Domain.CapabilityInvocation.md) \| [`CapabilityDelegation`](../classes/Domain.CapabilityDelegation.md)

#### Defined in

[src/domain/models/DIDDocument.ts:99](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/DIDDocument.ts#L99)

___

### DefinitionFormat

Ƭ **DefinitionFormat**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `jwt` | \{ `alg`: `string`[]  } |
| `jwt.alg` | `string`[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:106](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L106)

___

### DescriptorItem

Ƭ **DescriptorItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | [`DescriptorItemFormat`](../enums/Domain.DescriptorItemFormat.md) |
| `id` | `string` |
| `path` | `string` |
| `path_nested?` | [`DescriptorItem`](Domain.md#descriptoritem) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:125](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L125)

___

### ExportableKey

Ƭ **ExportableKey**: [`All`](Domain.ExportableKey.md#all)

ExportableKey defines the formats a crypographic key can be converted to
Default is all

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:11](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/exportable/ExportableKey.ts#L11)

[src/domain/models/keyManagement/exportable/ExportableKey.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/exportable/ExportableKey.ts#L23)

___

### InputConstraints

Ƭ **InputConstraints**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fields` | [`InputField`](Domain.md#inputfield)[] |
| `limit_disclosure` | [`InputLimitDisclosure`](../enums/Domain.InputLimitDisclosure.md) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:93](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L93)

___

### InputDescriptor

Ƭ **InputDescriptor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `constraints` | [`InputConstraints`](Domain.md#inputconstraints) |
| `format?` | [`DefinitionFormat`](Domain.md#definitionformat) |
| `id` | `string` |
| `name?` | `string` |
| `purpose?` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:98](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L98)

___

### InputField

Ƭ **InputField**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter?` | [`InputFieldFilter`](Domain.md#inputfieldfilter) |
| `id?` | `string` |
| `name?` | `string` |
| `optional?` | `boolean` |
| `path` | `string`[] |
| `purpose?` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:82](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L82)

___

### InputFieldFilter

Ƭ **InputFieldFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `const?` | [`PredicateType`](Domain.md#predicatetype)[] |
| `enum?` | [`PredicateType`](Domain.md#predicatetype)[] |
| `pattern?` | `string` |
| `type` | `string` |
| `value?` | [`PredicateType`](Domain.md#predicatetype) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:74](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L74)

___

### JWK

Ƭ **JWK**: [`EC`](../interfaces/Domain.JWK.EC.md) \| [`OCT`](../interfaces/Domain.JWK.OCT.md) \| [`OKP`](../interfaces/Domain.JWK.OKP.md) \| [`RSA`](../interfaces/Domain.JWK.RSA.md)

JWK

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/exportable/JWK.ts#L7)

[src/domain/models/keyManagement/exportable/JWK.ts:13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/exportable/JWK.ts#L13)

___

### JWTCredentialPayload

Ƭ **JWTCredentialPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aud?` | `string` |
| `exp` | `number` |
| `iss` | `string` |
| `jti?` | `string` |
| `nbf` | `number` |
| `revoked?` | `boolean` |
| `sub` | `string` |
| `vc` | [`W3CVerifiableCredential`](Domain.md#w3cverifiablecredential) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:181](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L181)

___

### JWTPayload

Ƭ **JWTPayload**: [`JWTCredentialPayload`](Domain.md#jwtcredentialpayload) \| [`JWTPresentationPayload`](Domain.md#jwtpresentationpayload)

#### Defined in

[src/domain/models/VerifiableCredential.ts:221](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L221)

___

### JWTPresentationPayload

Ƭ **JWTPresentationPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aud` | `string` |
| `exp?` | `number` |
| `iss?` | `string` |
| `jti?` | `string` |
| `nbf?` | `number` |
| `nonce` | `string` |
| `vp` | [`W3CVerifiablePresentation`](Domain.md#w3cverifiablepresentation) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:193](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L193)

___

### JsonString

Ƭ **JsonString**: `string`

#### Defined in

[src/domain/models/index.ts:24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/index.ts#L24)

___

### MnemonicWordList

Ƭ **MnemonicWordList**: [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`] \| [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`]

#### Defined in

[src/domain/models/WordList.ts:1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/WordList.ts#L1)

___

### PredicateType

Ƭ **PredicateType**: `string` \| `number`

#### Defined in

[src/domain/models/VerifiableCredential.ts:63](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L63)

___

### PresentationDefinitionRequest

Ƭ **PresentationDefinitionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `options` | \{ `challenge`: `string` ; `domain`: `string`  } |
| `options.challenge` | `string` |
| `options.domain` | `string` |
| `presentation_definition` | \{ `format?`: [`DefinitionFormat`](Domain.md#definitionformat) ; `id`: `string` ; `input_descriptors`: [`InputDescriptor`](Domain.md#inputdescriptor)[]  } |
| `presentation_definition.format?` | [`DefinitionFormat`](Domain.md#definitionformat) |
| `presentation_definition.id` | `string` |
| `presentation_definition.input_descriptors` | [`InputDescriptor`](Domain.md#inputdescriptor)[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:112](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L112)

___

### PresentationJWTOptions

Ƭ **PresentationJWTOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `jwtAlg?` | `string`[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:223](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L223)

___

### PresentationSubmission

Ƭ **PresentationSubmission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `presentation_submission` | \{ `definition_id`: `string` ; `descriptor_map`: [`DescriptorItem`](Domain.md#descriptoritem)[] ; `id`: `string`  } |
| `presentation_submission.definition_id` | `string` |
| `presentation_submission.descriptor_map` | [`DescriptorItem`](Domain.md#descriptoritem)[] |
| `presentation_submission.id` | `string` |
| `verifiablePresentation` | `string`[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:132](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L132)

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
| `credentialStatus?` | \{ `id`: `string` ; `type`: `string`  } |
| `credentialStatus.id` | `string` |
| `credentialStatus.type` | `string` |
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

[src/domain/models/VerifiableCredential.ts:142](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L142)

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

[src/domain/models/VerifiableCredential.ts:204](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L204)

___

### W3CVerifiablePresentationProof

Ƭ **W3CVerifiablePresentationProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `challenge` | `string` |
| `domain` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:215](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/VerifiableCredential.ts#L215)

## Functions

### getKeyCurveByNameAndIndex

▸ **getKeyCurveByNameAndIndex**(`name`, `index?`): `KeyCurve`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `index?` | `number` |

#### Returns

`KeyCurve`

#### Defined in

[src/domain/models/keyManagement/Key.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/a3fc2aa/src/domain/models/keyManagement/Key.ts#L12)
