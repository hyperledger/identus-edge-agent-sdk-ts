[@atala/prism-wallet-sdk](README.md) / Exports

# @atala/prism-wallet-sdk

## Table of contents

### References

- [KeyProperties](modules.md#keyproperties)

### Namespaces

- [Domain](modules/Domain.md)
- [PeerDID](modules/PeerDID.md)
- [Pluto](modules/Pluto.md)

### Enumerations

- [AnonCredsCredentialProperties](enums/AnonCredsCredentialProperties.md)
- [ListenerKey](enums/ListenerKey.md)
- [ProtocolType](enums/ProtocolType.md)

### Classes

- [Agent](classes/Agent.md)
- [AnonCredsCredential](classes/AnonCredsCredential.md)
- [ApiImpl](classes/ApiImpl.md)
- [Apollo](classes/Apollo.md)
- [BasicMediatorHandler](classes/BasicMediatorHandler.md)
- [BasicMessage](classes/BasicMessage.md)
- [Castor](classes/Castor.md)
- [ConnectionsManager](classes/ConnectionsManager.md)
- [DIDCommWrapper](classes/DIDCommWrapper.md)
- [HandshakeRequest](classes/HandshakeRequest.md)
- [IssueCredential](classes/IssueCredential.md)
- [JWTCredential](classes/JWTCredential.md)
- [MediatorHandler](classes/MediatorHandler.md)
- [Mercury](classes/Mercury.md)
- [OfferCredential](classes/OfferCredential.md)
- [OutOfBandInvitation](classes/OutOfBandInvitation.md)
- [PeerDID](classes/PeerDID-1.md)
- [PeerDIDService](classes/PeerDIDService.md)
- [Pluto](classes/Pluto-1.md)
- [Pollux](classes/Pollux.md)
- [Presentation](classes/Presentation.md)
- [ProposePresentation](classes/ProposePresentation.md)
- [PublicMediatorStore](classes/PublicMediatorStore.md)
- [RequestPresentation](classes/RequestPresentation.md)
- [Store](classes/Store.md)

### Interfaces

- [AgentCredentials](interfaces/AgentCredentials.md)
- [AgentDIDHigherFunctions](interfaces/AgentDIDHigherFunctions.md)
- [AgentInvitations](interfaces/AgentInvitations.md)
- [AgentMessageEvents](interfaces/AgentMessageEvents.md)
- [BasicMessageBody](interfaces/BasicMessageBody.md)
- [ConnectionsManagerInterface](interfaces/ConnectionsManagerInterface.md)
- [CredentialBody](interfaces/CredentialBody.md)
- [DIDCommProtocol](interfaces/DIDCommProtocol.md)
- [HandshakeRequestBody](interfaces/HandshakeRequestBody.md)
- [IssueCredentialBody](interfaces/IssueCredentialBody.md)
- [MediationGrantBody](interfaces/MediationGrantBody.md)
- [MediationKeysUpdateListBody](interfaces/MediationKeysUpdateListBody.md)
- [MediatorStore](interfaces/MediatorStore.md)
- [OfferCredentialBody](interfaces/OfferCredentialBody.md)
- [ParsedCredentialFormat](interfaces/ParsedCredentialFormat.md)
- [PeerDIDEncoded](interfaces/PeerDIDEncoded.md)
- [PickupAttachment](interfaces/PickupAttachment.md)
- [PickupReceivedBody](interfaces/PickupReceivedBody.md)
- [PickupRequestBody](interfaces/PickupRequestBody.md)
- [PresentationBody](interfaces/PresentationBody.md)
- [PrismOnboardingInvitationBody](interfaces/PrismOnboardingInvitationBody.md)
- [PrismRevocationBody](interfaces/PrismRevocationBody.md)
- [ProofTypes](interfaces/ProofTypes.md)
- [ProposeCredentialBody](interfaces/ProposeCredentialBody.md)
- [RequestPresentationBody](interfaces/RequestPresentationBody.md)

### Type Aliases

- [OutOfBandInvitationBody](modules.md#outofbandinvitationbody)
- [ProposePresentationBody](modules.md#proposepresentationbody)

### Variables

- [AnonCredsRecoveryId](modules.md#anoncredsrecoveryid)
- [JWTVerifiableCredentialRecoveryId](modules.md#jwtverifiablecredentialrecoveryid)

### Functions

- [isPresentationDefinitionRequestType](modules.md#ispresentationdefinitionrequesttype)

## References

### KeyProperties

Re-exports [KeyProperties](enums/Domain.KeyProperties.md)

## Type Aliases

### OutOfBandInvitationBody

Ƭ **OutOfBandInvitationBody**: [`HandshakeRequestBody`](interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/types.ts:93](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/protocols/types.ts#L93)

___

### ProposePresentationBody

Ƭ **ProposePresentationBody**: [`RequestPresentationBody`](interfaces/RequestPresentationBody.md)

#### Defined in

[src/edge-agent/protocols/types.ts:78](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/edge-agent/protocols/types.ts#L78)

## Variables

### AnonCredsRecoveryId

• `Const` **AnonCredsRecoveryId**: ``"anonCreds+credential"``

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L21)

___

### JWTVerifiableCredentialRecoveryId

• `Const` **JWTVerifiableCredentialRecoveryId**: ``"jwt+credential"``

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/pollux/models/JWTVerifiableCredential.ts#L23)

## Functions

### isPresentationDefinitionRequestType

▸ **isPresentationDefinitionRequestType**\<`Type`\>(`request`, `type`): request is PresentationDefinitionRequest\<Type\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](enums/Domain.CredentialType.md) = [`JWT`](enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PresentationDefinitionRequest`](modules/Domain.md#presentationdefinitionrequest)\<`Type`\> |
| `type` | `Type` |

#### Returns

request is PresentationDefinitionRequest\<Type\>

#### Defined in

[src/pollux/utils/claims.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/pollux/utils/claims.ts#L69)
