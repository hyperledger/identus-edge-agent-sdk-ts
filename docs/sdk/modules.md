[@input-output-hk/atala-prism-wallet-sdk](README.md) / Exports

# @input-output-hk/atala-prism-wallet-sdk

## Table of contents

### References

- [KeyProperties](modules.md#keyproperties)

### Namespaces

- [Domain](modules/Domain.md)
- [PeerDID](modules/PeerDID.md)

### Enumerations

- [AnonCredsCredentialProperties](enums/AnonCredsCredentialProperties.md)
- [JWTVerifiableCredentialProperties](enums/JWTVerifiableCredentialProperties.md)
- [ListenerKey](enums/ListenerKey.md)

### Classes

- [Agent](classes/Agent.md)
- [AnonCredsCredential](classes/AnonCredsCredential.md)
- [Apollo](classes/Apollo.md)
- [BasicMediatorHandler](classes/BasicMediatorHandler.md)
- [BasicMessage](classes/BasicMessage.md)
- [Castor](classes/Castor.md)
- [ConnectionsManager](classes/ConnectionsManager.md)
- [DIDCommWrapper](classes/DIDCommWrapper.md)
- [IssueCredential](classes/IssueCredential.md)
- [JWTCredential](classes/JWTCredential.md)
- [MediatorHandler](classes/MediatorHandler.md)
- [Mercury](classes/Mercury.md)
- [OfferCredential](classes/OfferCredential.md)
- [PeerDID](classes/PeerDID-1.md)
- [PeerDIDService](classes/PeerDIDService.md)
- [Pollux](classes/Pollux.md)
- [PublicMediatorStore](classes/PublicMediatorStore.md)
- [RequestPresentation](classes/RequestPresentation.md)

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
- [ProofTypes](interfaces/ProofTypes.md)
- [ProposeCredentialBody](interfaces/ProposeCredentialBody.md)
- [RequestPresentationBody](interfaces/RequestPresentationBody.md)

### Type Aliases

- [OutOfBandInvitationBody](modules.md#outofbandinvitationbody)
- [ProposePresentationBody](modules.md#proposepresentationbody)

### Variables

- [AnonCredsRecoveryId](modules.md#anoncredsrecoveryid)
- [JWTVerifiableCredentialRecoveryId](modules.md#jwtverifiablecredentialrecoveryid)

## References

### KeyProperties

Re-exports [KeyProperties](enums/Domain.KeyProperties.md)

## Type Aliases

### OutOfBandInvitationBody

Ƭ **OutOfBandInvitationBody**: [`HandshakeRequestBody`](interfaces/HandshakeRequestBody.md)

#### Defined in

[src/prism-agent/protocols/types.ts:87](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/protocols/types.ts#L87)

___

### ProposePresentationBody

Ƭ **ProposePresentationBody**: [`RequestPresentationBody`](interfaces/RequestPresentationBody.md)

#### Defined in

[src/prism-agent/protocols/types.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/prism-agent/protocols/types.ts#L73)

## Variables

### AnonCredsRecoveryId

• `Const` **AnonCredsRecoveryId**: ``"anonCreds+credential"``

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/AnonCredsVerifiableCredential.ts#L17)

___

### JWTVerifiableCredentialRecoveryId

• `Const` **JWTVerifiableCredentialRecoveryId**: ``"jwt+credential"``

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/models/JWTVerifiableCredential.ts#L19)
