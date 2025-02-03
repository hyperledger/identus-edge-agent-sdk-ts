[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Domain

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
- [Pollux](Domain.Pollux.md)
- [PolluxError](Domain.PolluxError.md)
- [Protocols](Domain.Protocols.md)
- [StorableKey](Domain.StorableKey.md)

### Enumerations

- [AttachmentFormats](../enums/Domain.AttachmentFormats.md)
- [CredentialStatusType](../enums/Domain.CredentialStatusType.md)
- [CredentialType](../enums/Domain.CredentialType.md)
- [Curve](../enums/Domain.Curve.md)
- [DescriptorItemFormat](../enums/Domain.DescriptorItemFormat.md)
- [InputLimitDisclosure](../enums/Domain.InputLimitDisclosure.md)
- [JWTProofPurpose](../enums/Domain.JWTProofPurpose.md)
- [JWTProofType](../enums/Domain.JWTProofType.md)
- [JWTRevocationStatusPurpose](../enums/Domain.JWTRevocationStatusPurpose.md)
- [JWTVerifiableCredentialProperties](../enums/Domain.JWTVerifiableCredentialProperties.md)
- [JWTVerifiablePresentationProperties](../enums/Domain.JWTVerifiablePresentationProperties.md)
- [JWT\_ALG](../enums/Domain.JWT_ALG.md)
- [KeyProperties](../enums/Domain.KeyProperties.md)
- [KeyTypes](../enums/Domain.KeyTypes.md)
- [KeyUsage](../enums/Domain.KeyUsage.md)
- [MessageDirection](../enums/Domain.MessageDirection.md)
- [RevocationType](../enums/Domain.RevocationType.md)
- [SDJWTVerifiableCredentialProperties](../enums/Domain.SDJWTVerifiableCredentialProperties.md)
- [Usage](../enums/Domain.Usage.md)
- [W3CVerifiableCredentialContext](../enums/Domain.W3CVerifiableCredentialContext.md)
- [W3CVerifiableCredentialType](../enums/Domain.W3CVerifiableCredentialType.md)

### Classes

- [AlsoKnownAs](../classes/Domain.AlsoKnownAs.md)
- [AnoncredsPresentationOptions](../classes/Domain.AnoncredsPresentationOptions.md)
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
- [JWTPresentationOptions](../classes/Domain.JWTPresentationOptions.md)
- [Key](../classes/Domain.Key.md)
- [KeyAgreement](../classes/Domain.KeyAgreement.md)
- [KeyPair](../classes/Domain.KeyPair.md)
- [LinkSecret](../classes/Domain.LinkSecret.md)
- [Message](../classes/Domain.Message-1.md)
- [PresentationDefinitionRequestType](../classes/Domain.PresentationDefinitionRequestType.md)
- [PresentationOptions](../classes/Domain.PresentationOptions.md)
- [PrismDID](../classes/Domain.PrismDID.md)
- [PrivateKey](../classes/Domain.PrivateKey.md)
- [PublicKey](../classes/Domain.PublicKey.md)
- [SDJWPresentationOptions](../classes/Domain.SDJWPresentationOptions.md)
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
- [CredentialIssueOptions](../interfaces/Domain.CredentialIssueOptions.md)
- [CredentialRequestOptions](../interfaces/Domain.CredentialRequestOptions.md)
- [CredentialSubject](../interfaces/Domain.CredentialSubject.md)
- [JWTRevocationStatus](../interfaces/Domain.JWTRevocationStatus.md)
- [JWTStatusListResponse](../interfaces/Domain.JWTStatusListResponse.md)
- [KeyCurve](../interfaces/Domain.KeyCurve.md)
- [Mediator](../interfaces/Domain.Mediator.md)
- [Mercury](../interfaces/Domain.Mercury.md)
- [Pluto](../interfaces/Domain.Pluto-1.md)
- [Pollux](../interfaces/Domain.Pollux-1.md)
- [ProvableCredential](../interfaces/Domain.ProvableCredential.md)
- [PublicKeyJWK](../interfaces/Domain.PublicKeyJWK.md)
- [Seed](../interfaces/Domain.Seed.md)
- [SeedWords](../interfaces/Domain.SeedWords.md)
- [Signature](../interfaces/Domain.Signature.md)
- [StorableCredential](../interfaces/Domain.StorableCredential.md)
- [StorableKey](../interfaces/Domain.StorableKey-1.md)
- [VerifiableCredentialTypeContainer](../interfaces/Domain.VerifiableCredentialTypeContainer.md)
- [W3CVerifiableCredentialData](../interfaces/Domain.W3CVerifiableCredentialData.md)

### Type Aliases

- [AnoncredsInputFieldFilter](Domain.md#anoncredsinputfieldfilter)
- [AnoncredsPresentationClaims](Domain.md#anoncredspresentationclaims)
- [AnoncredsPresentationSubmission](Domain.md#anoncredspresentationsubmission)
- [AttachmentData](Domain.md#attachmentdata)
- [AttachmentJsonData](Domain.md#attachmentjsondata)
- [AttributeType](Domain.md#attributetype)
- [Claims](Domain.md#claims)
- [CredentialOfferJWTBasePayload](Domain.md#credentialofferjwtbasepayload)
- [CredentialOfferPayloads](Domain.md#credentialofferpayloads)
- [CredentialOfferTypes](Domain.md#credentialoffertypes)
- [CredentialRequestTuple](Domain.md#credentialrequesttuple)
- [DIDDocumentCoreProperty](Domain.md#diddocumentcoreproperty)
- [DefinitionFormat](Domain.md#definitionformat)
- [DescriptorItem](Domain.md#descriptoritem)
- [ExportableKey](Domain.md#exportablekey)
- [Hasher](Domain.md#hasher)
- [HttpMethod](Domain.md#httpmethod)
- [InputConstraints](Domain.md#inputconstraints)
- [InputDescriptor](Domain.md#inputdescriptor)
- [InputField](Domain.md#inputfield)
- [InputFieldFilter](Domain.md#inputfieldfilter)
- [JWK](Domain.md#jwk)
- [JWTCredentialPayload](Domain.md#jwtcredentialpayload)
- [JWTHeader](Domain.md#jwtheader)
- [JWTObject](Domain.md#jwtobject)
- [JWTPayload](Domain.md#jwtpayload)
- [JWTPresentationClaims](Domain.md#jwtpresentationclaims)
- [JWTPresentationPayload](Domain.md#jwtpresentationpayload)
- [JWTPresentationSubmission](Domain.md#jwtpresentationsubmission)
- [JsonString](Domain.md#jsonstring)
- [MnemonicWordList](Domain.md#mnemonicwordlist)
- [PredicateType](Domain.md#predicatetype)
- [PresentationAnoncredsRequest](Domain.md#presentationanoncredsrequest)
- [PresentationClaims](Domain.md#presentationclaims)
- [PresentationDefinitionData](Domain.md#presentationdefinitiondata)
- [PresentationDefinitionRequest](Domain.md#presentationdefinitionrequest)
- [PresentationExchangeDefinitionRequest](Domain.md#presentationexchangedefinitionrequest)
- [PresentationJWTOptions](Domain.md#presentationjwtoptions)
- [PresentationRequestOptions](Domain.md#presentationrequestoptions)
- [PresentationSubmission](Domain.md#presentationsubmission)
- [PresentationSubmissionData](Domain.md#presentationsubmissiondata)
- [ProcessedCredentialOfferPayloads](Domain.md#processedcredentialofferpayloads)
- [SDJWTPresentationClaims](Domain.md#sdjwtpresentationclaims)
- [SDJWTPresentationExchangeSubmission](Domain.md#sdjwtpresentationexchangesubmission)
- [SDJWTPresentationSubmission](Domain.md#sdjwtpresentationsubmission)
- [Signer](Domain.md#signer)
- [Verifier](Domain.md#verifier)
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

### AnoncredsInputFieldFilter

Ƭ **AnoncredsInputFieldFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$gt?` | [`PredicateType`](Domain.md#predicatetype) |
| `$gte?` | [`PredicateType`](Domain.md#predicatetype) |
| `$lt?` | [`PredicateType`](Domain.md#predicatetype) |
| `$lte?` | [`PredicateType`](Domain.md#predicatetype) |
| `name` | `string` |
| `type` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:114](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L114)

___

### AnoncredsPresentationClaims

Ƭ **AnoncredsPresentationClaims**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | `Anoncreds.RequestedAttributes` |
| `predicates?` | [`Claims`](Domain.md#claims)\<[`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds)\> |

#### Defined in

[src/domain/models/VerifiableCredential.ts:103](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L103)

___

### AnoncredsPresentationSubmission

Ƭ **AnoncredsPresentationSubmission**: `Anoncreds.PresentationType`

#### Defined in

[src/domain/models/VerifiableCredential.ts:230](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L230)

___

### AttachmentData

Ƭ **AttachmentData**: [`AttachmentJsonData`](Domain.md#attachmentjsondata) \| [`AttachmentLinkData`](../interfaces/Domain.AttachmentLinkData.md) \| [`AttachmentBase64`](../interfaces/Domain.AttachmentBase64.md) \| [`AttachmentJwsData`](../interfaces/Domain.AttachmentJwsData.md) \| [`AttachmentJws`](../interfaces/Domain.AttachmentJws.md) \| [`AttachmentHeader`](../interfaces/Domain.AttachmentHeader.md)

#### Defined in

[src/domain/models/MessageAttachment.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/MessageAttachment.ts#L34)

___

### AttachmentJsonData

Ƭ **AttachmentJsonData**: \{ `json`: `any`  } \| \{ `data`: `any`  }

#### Defined in

[src/domain/models/MessageAttachment.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/MessageAttachment.ts#L28)

___

### AttributeType

Ƭ **AttributeType**: `string` \| `number`

#### Defined in

[src/domain/models/VerifiableCredential.ts:82](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L82)

___

### Claims

Ƭ **Claims**\<`Type`\>: `Type` extends [`JWT`](../enums/Domain.CredentialType.md#jwt) ? \{ `[name: string]`: [`InputFieldFilter`](Domain.md#inputfieldfilter);  } : `Type` extends [`SDJWT`](../enums/Domain.CredentialType.md#sdjwt) ? \{ `[name: string]`: [`InputFieldFilter`](Domain.md#inputfieldfilter);  } : \{ `[name: string]`: [`AnoncredsInputFieldFilter`](Domain.md#anoncredsinputfieldfilter);  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:85](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L85)

___

### CredentialOfferJWTBasePayload

Ƭ **CredentialOfferJWTBasePayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `options` | \{ `challenge`: `string` ; `domain`: `string`  } |
| `options.challenge` | `string` |
| `options.domain` | `string` |

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/buildingBlocks/Pollux.ts#L16)

___

### CredentialOfferPayloads

Ƭ **CredentialOfferPayloads**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AnonCreds` | `Anoncreds.CredentialOfferType` |
| `Unknown` | `unknown` |
| `prism/jwt` | [`CredentialOfferJWTBasePayload`](Domain.md#credentialofferjwtbasepayload) |
| `vc+sd-jwt` | [`CredentialOfferJWTBasePayload`](Domain.md#credentialofferjwtbasepayload) |
| `w3c` | `unknown` |

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/buildingBlocks/Pollux.ts#L23)

___

### CredentialOfferTypes

Ƭ **CredentialOfferTypes**: [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) \| [`JWT`](../enums/Domain.CredentialType.md#jwt) \| [`SDJWT`](../enums/Domain.CredentialType.md#sdjwt)

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/buildingBlocks/Pollux.ts#L32)

___

### CredentialRequestTuple

Ƭ **CredentialRequestTuple**\<`T1`, `T2`\>: [`T1`, `T2`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | `Anoncreds.CredentialRequestType` |
| `T2` | `Anoncreds.CredentialRequestMetadataType` |

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/buildingBlocks/Pollux.ts#L9)

___

### DIDDocumentCoreProperty

Ƭ **DIDDocumentCoreProperty**: [`Service`](../classes/Domain.Service.md) \| [`AlsoKnownAs`](../classes/Domain.AlsoKnownAs.md) \| [`Controller`](../classes/Domain.Controller.md) \| [`VerificationMethods`](../classes/Domain.VerificationMethods.md) \| [`Services`](../classes/Domain.Services.md) \| [`Authentication`](../classes/Domain.Authentication.md) \| [`AssertionMethod`](../classes/Domain.AssertionMethod.md) \| [`KeyAgreement`](../classes/Domain.KeyAgreement.md) \| [`CapabilityInvocation`](../classes/Domain.CapabilityInvocation.md) \| [`CapabilityDelegation`](../classes/Domain.CapabilityDelegation.md)

#### Defined in

[src/domain/models/DIDDocument.ts:99](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDDocument.ts#L99)

___

### DefinitionFormat

Ƭ **DefinitionFormat**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `jwt?` | \{ `alg`: `string`[]  } |
| `jwt.alg` | `string`[] |
| `sdjwt?` | \{ `alg`: `string`[]  } |
| `sdjwt.alg` | `string`[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:154](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L154)

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

[src/domain/models/VerifiableCredential.ts:197](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L197)

___

### ExportableKey

Ƭ **ExportableKey**: [`All`](Domain.ExportableKey.md#all)

ExportableKey defines the formats a crypographic key can be converted to
Default is all

#### Defined in

[src/domain/models/keyManagement/exportable/ExportableKey.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/exportable/ExportableKey.ts#L12)

[src/domain/models/keyManagement/exportable/ExportableKey.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/exportable/ExportableKey.ts#L24)

___

### Hasher

Ƭ **Hasher**: (`data`: `string`, `alg`: `string`) => `Promise`\<`Uint8Array`\>

#### Type declaration

▸ (`data`, `alg`): `Promise`\<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `alg` | `string` |

##### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[src/domain/models/VerifiableCredential.ts:388](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L388)

___

### HttpMethod

Ƭ **HttpMethod**: ``"DELETE"`` \| ``"GET"`` \| ``"POST"`` \| ``"PUT"``

#### Defined in

[src/domain/models/Api.ts:1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/Api.ts#L1)

___

### InputConstraints

Ƭ **InputConstraints**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fields` | [`InputField`](Domain.md#inputfield)[] |
| `limit_disclosure` | [`InputLimitDisclosure`](../enums/Domain.InputLimitDisclosure.md) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:141](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L141)

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

[src/domain/models/VerifiableCredential.ts:146](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L146)

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

[src/domain/models/VerifiableCredential.ts:132](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L132)

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

[src/domain/models/VerifiableCredential.ts:123](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L123)

___

### JWK

Ƭ **JWK**: [`EC`](../interfaces/Domain.JWK.EC.md) \| [`OCT`](../interfaces/Domain.JWK.OCT.md) \| [`OKP`](../interfaces/Domain.JWK.OKP.md) \| [`RSA`](../interfaces/Domain.JWK.RSA.md)

JWK

#### Defined in

[src/domain/models/keyManagement/exportable/JWK.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/exportable/JWK.ts#L11)

[src/domain/models/keyManagement/exportable/JWK.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/exportable/JWK.ts#L17)

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

[src/domain/models/VerifiableCredential.ts:350](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L350)

___

### JWTHeader

Ƭ **JWTHeader**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alg` | `string` |
| `typ` | ``"JWT"`` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:392](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L392)

___

### JWTObject

Ƭ **JWTObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `header` | [`JWTHeader`](Domain.md#jwtheader) |
| `payload` | [`JWTPayload`](Domain.md#jwtpayload) |
| `signature` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:400](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L400)

___

### JWTPayload

Ƭ **JWTPayload**: [`JWTCredentialPayload`](Domain.md#jwtcredentialpayload) \| [`JWTPresentationPayload`](Domain.md#jwtpresentationpayload)

#### Defined in

[src/domain/models/VerifiableCredential.ts:399](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L399)

___

### JWTPresentationClaims

Ƭ **JWTPresentationClaims**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claims` | [`Claims`](Domain.md#claims)\<[`JWT`](../enums/Domain.CredentialType.md#jwt)\> |
| `issuer?` | `string` |
| `schema?` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:90](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L90)

___

### JWTPresentationPayload

Ƭ **JWTPresentationPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aud?` | `string` |
| `exp?` | `number` |
| `iss?` | `string` |
| `jti?` | `string` |
| `nbf?` | `number` |
| `nonce?` | `string` |
| `vp` | [`W3CVerifiablePresentation`](Domain.md#w3cverifiablepresentation) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:362](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L362)

___

### JWTPresentationSubmission

Ƭ **JWTPresentationSubmission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `presentation_submission` | \{ `definition_id`: `string` ; `descriptor_map`: [`DescriptorItem`](Domain.md#descriptoritem)[] ; `id`: `string`  } |
| `presentation_submission.definition_id` | `string` |
| `presentation_submission.descriptor_map` | [`DescriptorItem`](Domain.md#descriptoritem)[] |
| `presentation_submission.id` | `string` |
| `verifiablePresentation` | `string`[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:205](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L205)

___

### JsonString

Ƭ **JsonString**: `string`

#### Defined in

[src/domain/models/index.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/index.ts#L23)

___

### MnemonicWordList

Ƭ **MnemonicWordList**: [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`] \| [`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`]

#### Defined in

[src/domain/models/WordList.ts:1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/WordList.ts#L1)

___

### PredicateType

Ƭ **PredicateType**: `string` \| `number`

#### Defined in

[src/domain/models/VerifiableCredential.ts:81](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L81)

___

### PresentationAnoncredsRequest

Ƭ **PresentationAnoncredsRequest**: `Anoncreds.PresentationRequestType`

#### Defined in

[src/domain/models/VerifiableCredential.ts:163](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L163)

___

### PresentationClaims

Ƭ **PresentationClaims**\<`Type`\>: `Type` extends [`JWT`](../enums/Domain.CredentialType.md#jwt) ? [`JWTPresentationClaims`](Domain.md#jwtpresentationclaims) : `Type` extends [`SDJWT`](../enums/Domain.CredentialType.md#sdjwt) ? [`SDJWTPresentationClaims`](Domain.md#sdjwtpresentationclaims) : [`AnoncredsPresentationClaims`](Domain.md#anoncredspresentationclaims)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:108](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L108)

___

### PresentationDefinitionData

Ƭ **PresentationDefinitionData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AnonCreds` | [`PresentationAnoncredsRequest`](Domain.md#presentationanoncredsrequest) |
| `Unknown` | `any` |
| `prism/jwt` | [`PresentationExchangeDefinitionRequest`](Domain.md#presentationexchangedefinitionrequest) |
| `vc+sd-jwt` | [`PresentationExchangeDefinitionRequest`](Domain.md#presentationexchangedefinitionrequest) |
| `w3c` | `any` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:174](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L174)

___

### PresentationDefinitionRequest

Ƭ **PresentationDefinitionRequest**\<`Type`\>: [`PresentationDefinitionData`](Domain.md#presentationdefinitiondata)[`Type`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:193](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L193)

___

### PresentationExchangeDefinitionRequest

Ƭ **PresentationExchangeDefinitionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `presentation_definition` | \{ `format?`: [`DefinitionFormat`](Domain.md#definitionformat) ; `id`: `string` ; `input_descriptors`: [`InputDescriptor`](Domain.md#inputdescriptor)[]  } |
| `presentation_definition.format?` | [`DefinitionFormat`](Domain.md#definitionformat) |
| `presentation_definition.id` | `string` |
| `presentation_definition.input_descriptors` | [`InputDescriptor`](Domain.md#inputdescriptor)[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:165](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L165)

___

### PresentationJWTOptions

Ƭ **PresentationJWTOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `jwtAlg?` | `string`[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:407](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L407)

___

### PresentationRequestOptions

Ƭ **PresentationRequestOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AnonCreds` | `ConstructorParameters`\<typeof [`AnoncredsPresentationOptions`](../classes/Domain.AnoncredsPresentationOptions.md)\>[``"0"``] |
| `Unknown` | `any` |
| `prism/jwt` | `ConstructorParameters`\<typeof [`JWTPresentationOptions`](../classes/Domain.JWTPresentationOptions.md)\>[``"0"``] |
| `vc+sd-jwt` | `ConstructorParameters`\<typeof [`SDJWPresentationOptions`](../classes/Domain.SDJWPresentationOptions.md)\>[``"0"``] |
| `w3c` | `any` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:411](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L411)

___

### PresentationSubmission

Ƭ **PresentationSubmission**\<`Type`\>: [`PresentationSubmissionData`](Domain.md#presentationsubmissiondata)[`Type`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Defined in

[src/domain/models/VerifiableCredential.ts:243](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L243)

___

### PresentationSubmissionData

Ƭ **PresentationSubmissionData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AnonCreds` | [`AnoncredsPresentationSubmission`](Domain.md#anoncredspresentationsubmission) |
| `Unknown` | `any` |
| `prism/jwt` | [`JWTPresentationSubmission`](Domain.md#jwtpresentationsubmission) |
| `vc+sd-jwt` | [`JWTPresentationSubmission`](Domain.md#jwtpresentationsubmission) |
| `w3c` | `any` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:234](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L234)

___

### ProcessedCredentialOfferPayloads

Ƭ **ProcessedCredentialOfferPayloads**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AnonCreds` | [`CredentialRequestTuple`](Domain.md#credentialrequesttuple) |
| `Unknown` | `unknown` |
| `prism/jwt` | `string` |
| `vc+sd-jwt` | `string` |
| `w3c` | `unknown` |

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/buildingBlocks/Pollux.ts#L37)

___

### SDJWTPresentationClaims

Ƭ **SDJWTPresentationClaims**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claims` | [`Claims`](Domain.md#claims)\<[`SDJWT`](../enums/Domain.CredentialType.md#sdjwt)\> |
| `issuer?` | `string` |
| `schema?` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:96](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L96)

___

### SDJWTPresentationExchangeSubmission

Ƭ **SDJWTPresentationExchangeSubmission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `presentation_submission` | \{ `definition_id`: `string` ; `descriptor_map`: [`DescriptorItem`](Domain.md#descriptoritem)[] ; `id`: `string`  } |
| `presentation_submission.definition_id` | `string` |
| `presentation_submission.descriptor_map` | [`DescriptorItem`](Domain.md#descriptoritem)[] |
| `presentation_submission.id` | `string` |
| `verifiablePresentation` | `string`[] |

#### Defined in

[src/domain/models/VerifiableCredential.ts:214](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L214)

___

### SDJWTPresentationSubmission

Ƭ **SDJWTPresentationSubmission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disclosures` | `any`[] |
| `payload` | `string` |
| `protected` | `string` |
| `signature` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:223](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L223)

___

### Signer

Ƭ **Signer**: (`data`: `string` \| `Uint8Array`) => `Promise`\<`string`\>

#### Type declaration

▸ (`data`): `Promise`\<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

##### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/models/VerifiableCredential.ts:389](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L389)

___

### Verifier

Ƭ **Verifier**: (`data`: `string`, `sig`: `string`) => `Promise`\<`boolean`\>

#### Type declaration

▸ (`data`, `sig`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `sig` | `string` |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/domain/models/VerifiableCredential.ts:390](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L390)

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
| `credentialStatus?` | [`JWTRevocationStatus`](../interfaces/Domain.JWTRevocationStatus.md) \| `unknown` |
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

[src/domain/models/VerifiableCredential.ts:247](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L247)

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

[src/domain/models/VerifiableCredential.ts:373](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L373)

___

### W3CVerifiablePresentationProof

Ƭ **W3CVerifiablePresentationProof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `challenge` | `string` |
| `domain` | `string` |

#### Defined in

[src/domain/models/VerifiableCredential.ts:384](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/VerifiableCredential.ts#L384)

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

[src/domain/models/keyManagement/Key.ts:190](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/Key.ts#L190)

___

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

[src/domain/models/keyManagement/Key.ts:199](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/Key.ts#L199)

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

[src/domain/models/keyManagement/Key.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/Key.ts#L24)

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

[src/domain/models/keyManagement/Key.ts:144](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/Key.ts#L144)

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

[src/domain/models/keyManagement/Key.ts:57](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/Key.ts#L57)

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

[src/domain/models/keyManagement/Key.ts:123](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/keyManagement/Key.ts#L123)
