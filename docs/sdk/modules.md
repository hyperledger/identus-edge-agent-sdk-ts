[@hyperledger/identus-sdk](README.md) / Exports

# @hyperledger/identus-sdk

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
- [Presentation](classes/Presentation.md)
- [ProposePresentation](classes/ProposePresentation.md)
- [PublicMediatorStore](classes/PublicMediatorStore.md)
- [RequestPresentation](classes/RequestPresentation.md)
- [SDJWTCredential](classes/SDJWTCredential.md)
- [Store](classes/Store.md)

### Interfaces

- [AgentMessageEvents](interfaces/AgentMessageEvents.md)
- [BasicMessageBody](interfaces/BasicMessageBody.md)
- [ConnectionsManagerInterface](interfaces/ConnectionsManagerInterface.md)
- [DIDCommProtocol](interfaces/DIDCommProtocol.md)
- [HandshakeRequestBody](interfaces/HandshakeRequestBody.md)
- [MediationGrantBody](interfaces/MediationGrantBody.md)
- [MediationKeysUpdateListBody](interfaces/MediationKeysUpdateListBody.md)
- [MediatorStore](interfaces/MediatorStore.md)
- [PeerDIDEncoded](interfaces/PeerDIDEncoded.md)
- [PickupAttachment](interfaces/PickupAttachment.md)
- [PickupReceivedBody](interfaces/PickupReceivedBody.md)
- [PickupRequestBody](interfaces/PickupRequestBody.md)
- [PresentationBody](interfaces/PresentationBody.md)
- [PrismOnboardingInvitationBody](interfaces/PrismOnboardingInvitationBody.md)
- [PrismRevocationBody](interfaces/PrismRevocationBody.md)
- [ProblemReportBody](interfaces/ProblemReportBody.md)
- [ProposePresentationBody](interfaces/ProposePresentationBody.md)
- [RequestPresentationBody](interfaces/RequestPresentationBody.md)

### Type Aliases

- [CollectionList](modules.md#collectionlist)
- [ConnectionEventArg](modules.md#connectioneventarg)
- [EventCallback](modules.md#eventcallback)
- [MessageEventArg](modules.md#messageeventarg)
- [OutOfBandInvitationBody](modules.md#outofbandinvitationbody)
- [RevokeEventArg](modules.md#revokeeventarg)

### Variables

- [AnonCredsRecoveryId](modules.md#anoncredsrecoveryid)
- [JWTVerifiableCredentialRecoveryId](modules.md#jwtverifiablecredentialrecoveryid)
- [Plugins](modules.md#plugins)
- [SDJWTVerifiableCredentialRecoveryId](modules.md#sdjwtverifiablecredentialrecoveryid)

### Functions

- [makeCollections](modules.md#makecollections)

## References

### KeyProperties

Re-exports [KeyProperties](enums/Domain.KeyProperties.md)

## Type Aliases

### CollectionList

Ƭ **CollectionList**: `Record`\<`string`, `CollectionCreate`\>

#### Defined in

[src/pluto/rxdb/collections.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pluto/rxdb/collections.ts#L17)

___

### ConnectionEventArg

Ƭ **ConnectionEventArg**: [`DIDPair`](classes/Domain.DIDPair.md)

#### Defined in

[src/edge-agent/types/index.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L50)

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

[src/edge-agent/types/index.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L52)

___

### MessageEventArg

Ƭ **MessageEventArg**: [`Message`](classes/Domain.Message-1.md)[]

#### Defined in

[src/edge-agent/types/index.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L49)

___

### OutOfBandInvitationBody

Ƭ **OutOfBandInvitationBody**: [`HandshakeRequestBody`](interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/types.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/protocols/types.ts#L54)

___

### RevokeEventArg

Ƭ **RevokeEventArg**: [`Credential`](classes/Domain.Credential.md)

#### Defined in

[src/edge-agent/types/index.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/edge-agent/types/index.ts#L51)

## Variables

### AnonCredsRecoveryId

• `Const` **AnonCredsRecoveryId**: ``"anonCreds+credential"``

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/AnonCredsVerifiableCredential.ts#L21)

___

### JWTVerifiableCredentialRecoveryId

• `Const` **JWTVerifiableCredentialRecoveryId**: ``"jwt+credential"``

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/JWTVerifiableCredential.ts#L16)

___

### Plugins

• `Const` **Plugins**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Anoncreds` | `Plugin` |

#### Defined in

[src/index.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/index.ts#L56)

___

### SDJWTVerifiableCredentialRecoveryId

• `Const` **SDJWTVerifiableCredentialRecoveryId**: ``"sd+jwt+credential"``

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pollux/models/SDJWTVerifiableCredential.ts#L19)

## Functions

### makeCollections

▸ **makeCollections**(`additional?`): [`CollectionList`](modules.md#collectionlist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `additional?` | [`CollectionList`](modules.md#collectionlist) |

#### Returns

[`CollectionList`](modules.md#collectionlist)

#### Defined in

[src/pluto/rxdb/collections.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/pluto/rxdb/collections.ts#L19)
