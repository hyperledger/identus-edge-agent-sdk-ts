[@atala/prism-wallet-sdk](README.md) / Exports

# @atala/prism-wallet-sdk

## Table of contents

### References

- [KeyProperties](modules.md#keyproperties)

### Namespaces

- [Domain](modules/Domain.md)
- [OIDC](modules/OIDC.md)
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
- [OIDCAgent](classes/OIDCAgent.md)
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
- [ProblemReportBody](interfaces/ProblemReportBody.md)
- [ProofTypes](interfaces/ProofTypes.md)
- [ProposeCredentialBody](interfaces/ProposeCredentialBody.md)
- [RequestPresentationBody](interfaces/RequestPresentationBody.md)

### Type Aliases

- [ConnectionEventArg](modules.md#connectioneventarg)
- [EventCallback](modules.md#eventcallback)
- [MessageEventArg](modules.md#messageeventarg)
- [OutOfBandInvitationBody](modules.md#outofbandinvitationbody)
- [ProposePresentationBody](modules.md#proposepresentationbody)
- [RevokeEventArg](modules.md#revokeeventarg)

### Variables

- [AnonCredsRecoveryId](modules.md#anoncredsrecoveryid)
- [JWTVerifiableCredentialRecoveryId](modules.md#jwtverifiablecredentialrecoveryid)

### Functions

- [isPresentationDefinitionRequestType](modules.md#ispresentationdefinitionrequesttype)

## References

### KeyProperties

Re-exports [KeyProperties](enums/Domain.KeyProperties.md)

## Type Aliases

### ConnectionEventArg

Ƭ **ConnectionEventArg**: [`DIDPair`](classes/Domain.DIDPair.md)

#### Defined in

[src/edge-agent/types/index.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/types/index.ts#L49)

___

### EventCallback

Ƭ **EventCallback**: (`arg`: [`MessageEventArg`](modules.md#messageeventarg) \| [`ConnectionEventArg`](modules.md#connectioneventarg) \| [`RevokeEventArg`](modules.md#revokeeventarg)) => `void`

#### Type declaration

▸ (`arg`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`MessageEventArg`](modules.md#messageeventarg) \| [`ConnectionEventArg`](modules.md#connectioneventarg) \| [`RevokeEventArg`](modules.md#revokeeventarg) |

##### Returns

`void`

#### Defined in

[src/edge-agent/types/index.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/types/index.ts#L51)

___

### MessageEventArg

Ƭ **MessageEventArg**: [`Message`](classes/Domain.Message-1.md)[]

#### Defined in

[src/edge-agent/types/index.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/types/index.ts#L48)

___

### OutOfBandInvitationBody

Ƭ **OutOfBandInvitationBody**: [`HandshakeRequestBody`](interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/types.ts:101](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/types.ts#L101)

___

### ProposePresentationBody

Ƭ **ProposePresentationBody**: [`RequestPresentationBody`](interfaces/RequestPresentationBody.md)

#### Defined in

[src/edge-agent/protocols/types.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/protocols/types.ts#L86)

___

### RevokeEventArg

Ƭ **RevokeEventArg**: [`Credential`](classes/Domain.Credential.md)

#### Defined in

[src/edge-agent/types/index.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/edge-agent/types/index.ts#L50)

## Variables

### AnonCredsRecoveryId

• `Const` **AnonCredsRecoveryId**: ``"anonCreds+credential"``

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/pollux/models/AnonCredsVerifiableCredential.ts#L21)

___

### JWTVerifiableCredentialRecoveryId

• `Const` **JWTVerifiableCredentialRecoveryId**: ``"jwt+credential"``

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/pollux/models/JWTVerifiableCredential.ts#L22)

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

[src/pollux/utils/claims.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/pollux/utils/claims.ts#L69)
