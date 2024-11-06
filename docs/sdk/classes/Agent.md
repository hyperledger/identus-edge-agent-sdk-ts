[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Agent

# Class: Agent

Edge agent implementation

**`Export`**

Agent

## Table of contents

### Constructors

- [constructor](Agent.md#constructor)

### Properties

- [api](Agent.md#api)
- [apollo](Agent.md#apollo)
- [backup](Agent.md#backup)
- [castor](Agent.md#castor)
- [connectionManager](Agent.md#connectionmanager)
- [mediationHandler](Agent.md#mediationhandler)
- [mercury](Agent.md#mercury)
- [pluto](Agent.md#pluto)
- [pollux](Agent.md#pollux)
- [seed](Agent.md#seed)
- [state](Agent.md#state)

### Accessors

- [currentMediatorDID](Agent.md#currentmediatordid)

### Methods

- [acceptDIDCommInvitation](Agent.md#acceptdidcomminvitation)
- [acceptInvitation](Agent.md#acceptinvitation)
- [acceptPrismOnboardingInvitation](Agent.md#acceptprismonboardinginvitation)
- [addListener](Agent.md#addlistener)
- [createNewPeerDID](Agent.md#createnewpeerdid)
- [createNewPrismDID](Agent.md#createnewprismdid)
- [createPresentationForRequestProof](Agent.md#createpresentationforrequestproof)
- [handlePresentation](Agent.md#handlepresentation)
- [initiatePresentationRequest](Agent.md#initiatepresentationrequest)
- [isCredentialRevoked](Agent.md#iscredentialrevoked)
- [parseInvitation](Agent.md#parseinvitation)
- [parseOOBInvitation](Agent.md#parseoobinvitation)
- [parsePrismInvitation](Agent.md#parseprisminvitation)
- [prepareRequestCredentialWithIssuer](Agent.md#preparerequestcredentialwithissuer)
- [processIssuedCredentialMessage](Agent.md#processissuedcredentialmessage)
- [removeListener](Agent.md#removelistener)
- [revealCredentialFields](Agent.md#revealcredentialfields)
- [runTask](Agent.md#runtask)
- [sendMessage](Agent.md#sendmessage)
- [signWith](Agent.md#signwith)
- [start](Agent.md#start)
- [startFetchingMessages](Agent.md#startfetchingmessages)
- [stop](Agent.md#stop)
- [stopFetchingMessages](Agent.md#stopfetchingmessages)
- [verifiableCredentials](Agent.md#verifiablecredentials)
- [initialize](Agent.md#initialize)

## Constructors

### constructor

• **new Agent**(`apollo`, `castor`, `pluto`, `mercury`, `mediationHandler`, `connectionManager`, `seed?`, `api?`, `options?`): [`Agent`](Agent.md)

Creates an instance of Agent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `apollo` | [`Apollo`](../interfaces/Domain.Apollo.md) |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `pluto` | [`Pluto`](../interfaces/Domain.Pluto-1.md) |
| `mercury` | [`Mercury`](../interfaces/Domain.Mercury.md) |
| `mediationHandler` | [`MediatorHandler`](MediatorHandler.md) |
| `connectionManager` | [`ConnectionsManager`](ConnectionsManager.md) |
| `seed` | [`Seed`](../interfaces/Domain.Seed.md) |
| `api` | [`Api`](../interfaces/Domain.Api.md) |
| `options?` | `AgentOptions` |

#### Returns

[`Agent`](Agent.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:74](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L74)

## Properties

### api

• `Readonly` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:82](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L82)

___

### apollo

• `Readonly` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L75)

___

### backup

• **backup**: `AgentBackup`

#### Defined in

[src/edge-agent/didcomm/Agent.ts:63](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L63)

___

### castor

• `Readonly` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:76](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L76)

___

### connectionManager

• `Readonly` **connectionManager**: [`ConnectionsManager`](ConnectionsManager.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:80](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L80)

___

### mediationHandler

• `Readonly` **mediationHandler**: [`MediatorHandler`](MediatorHandler.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:79](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L79)

___

### mercury

• `Readonly` **mercury**: [`Mercury`](../interfaces/Domain.Mercury.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:78](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L78)

___

### pluto

• `Readonly` **pluto**: [`Pluto`](../interfaces/Domain.Pluto-1.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:77](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L77)

___

### pollux

• `Readonly` **pollux**: [`Pollux`](Pollux.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:64](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L64)

___

### seed

• `Readonly` **seed**: [`Seed`](../interfaces/Domain.Seed.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:81](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L81)

___

### state

• **state**: `AgentState` = `AgentState.STOPPED`

Agent state

#### Defined in

[src/edge-agent/didcomm/Agent.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L62)

## Accessors

### currentMediatorDID

• `get` **currentMediatorDID**(): `undefined` \| [`DID`](Domain.DID.md)

Get current mediator DID if available or null

#### Returns

`undefined` \| [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:243](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L243)

## Methods

### acceptDIDCommInvitation

▸ **acceptDIDCommInvitation**(`invitation`, `alias?`): `Promise`\<`void`\>

Asyncronously accept a didcomm v2 invitation, will create a pair between the Agent
 its connecting with and the current owner's did

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitation` | [`OutOfBandInvitation`](OutOfBandInvitation.md) |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

**`Deprecated`**

- use `acceptInvitation`

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:408](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L408)

___

### acceptInvitation

▸ **acceptInvitation**(`invitation`, `optionalAlias?`): `Promise`\<`void`\>

Handle an invitation to create a connection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `invitation` | `InvitationType` | an OOB or PrismOnboarding invitation |
| `optionalAlias?` | `string` | - |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:330](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L330)

___

### acceptPrismOnboardingInvitation

▸ **acceptPrismOnboardingInvitation**(`invitation`): `Promise`\<`void`\>

Asyncronously accept an onboarding invitation, used to onboard the current DID in the Cloud Agent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitation` | `PrismOnboardingInvitation` |

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:361](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L361)

___

### addListener

▸ **addListener**(`eventName`, `callback`): `void`

Add an event listener to get notified from an Event "MESSAGE"

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`ListenerKey`](../enums/ListenerKey.md) |
| `callback` | [`EventCallback`](../modules.md#eventcallback) |

#### Returns

`void`

#### Defined in

[src/edge-agent/didcomm/Agent.ts:217](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L217)

___

### createNewPeerDID

▸ **createNewPeerDID**(`services?`, `updateMediator?`): `Promise`\<[`DID`](Domain.DID.md)\>

Asyncronously Create a new PeerDID

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `services?` | [`Service`](Domain.Service.md)[] | `[]` |
| `updateMediator?` | `boolean` | `true` |

#### Returns

`Promise`\<[`DID`](Domain.DID.md)\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:290](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L290)

___

### createNewPrismDID

▸ **createNewPrismDID**(`alias`, `services?`, `keyPathIndex?`): `Promise`\<[`DID`](Domain.DID.md)\>

Asyncronously create a new PrismDID

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alias` | `string` | `undefined` |
| `services?` | [`Service`](Domain.Service.md)[] | `[]` |
| `keyPathIndex?` | `number` | `undefined` |

#### Returns

`Promise`\<[`DID`](Domain.DID.md)\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:273](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L273)

___

### createPresentationForRequestProof

▸ **createPresentationForRequestProof**(`request`, `credential`): `Promise`\<[`Presentation`](Presentation.md)\>

Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
This is used when the verified requests a specific verifiable credential, this will create the actual
instance of the presentation which we can share with the verifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestPresentation`](RequestPresentation.md) |
| `credential` | [`Credential`](Domain.Credential.md) |

#### Returns

`Promise`\<[`Presentation`](Presentation.md)\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:510](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L510)

___

### handlePresentation

▸ **handlePresentation**(`presentation`): `Promise`\<`boolean`\>

Initiate the Presentation and presentationSubmission

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentation` | [`Presentation`](Presentation.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/edge-agent/didcomm/Agent.ts:556](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L556)

___

### initiatePresentationRequest

▸ **initiatePresentationRequest**\<`T`\>(`type`, `toDID`, `presentationClaims`): `Promise`\<[`RequestPresentation`](RequestPresentation.md)\>

Initiate a PresentationRequest from the SDK, to create oob Verification Requests

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `toDID` | [`DID`](Domain.DID.md) |
| `presentationClaims` | [`PresentationClaims`](../modules/Domain.md#presentationclaims)\<`T`\> |

#### Returns

`Promise`\<[`RequestPresentation`](RequestPresentation.md)\>

1. Example use-case: Send a Presentation Request for a JWT credential issued by a specific issuer
```ts
 agent.initiatePresentationRequest(
   Domain.CredentialType.JWT,
   toDID,
   { issuer: Domain.DID.fromString("did:peer:12345"), claims: {}}
);
```

2. Example use-case: Send a Presentation Request for a JWT credential issued by a specific issuer and specific claims
```ts
 agent.initiatePresentationRequest(
   Domain.CredentialType.JWT,
   toDID,
   { issuer: Domain.DID.fromString("did:peer:12345"), claims: {email: {type: 'string', pattern:'email@email.com'}}}
);
```

#### Defined in

[src/edge-agent/didcomm/Agent.ts:543](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L543)

___

### isCredentialRevoked

▸ **isCredentialRevoked**(`credential`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/edge-agent/didcomm/Agent.ts:447](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L447)

___

### parseInvitation

▸ **parseInvitation**(`str`): `Promise`\<`InvitationType`\>

Asyncronously parse an invitation from a valid json string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Promise`\<`InvitationType`\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:318](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L318)

___

### parseOOBInvitation

▸ **parseOOBInvitation**(`url`): `Promise`\<[`OutOfBandInvitation`](OutOfBandInvitation.md)\>

Asyncronously parse an out of band invitation from a URI as the oob come in format of valid URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`Promise`\<[`OutOfBandInvitation`](OutOfBandInvitation.md)\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:388](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L388)

___

### parsePrismInvitation

▸ **parsePrismInvitation**(`str`): `Promise`\<`PrismOnboardingInvitation`\>

Asyncronously parse a prismOnboarding invitation from a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Promise`\<`PrismOnboardingInvitation`\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:349](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L349)

___

### prepareRequestCredentialWithIssuer

▸ **prepareRequestCredentialWithIssuer**(`offer`): `Promise`\<`RequestCredential`\>

Asyncronously prepare a request credential message from a valid offerCredential for now supporting w3c verifiable credentials offers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`OfferCredential`](OfferCredential.md) |

#### Returns

`Promise`\<`RequestCredential`\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:479](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L479)

___

### processIssuedCredentialMessage

▸ **processIssuedCredentialMessage**(`issueCredential`): `Promise`\<[`Credential`](Domain.Credential.md)\>

Extract the verifiableCredential object from the Issue credential message asyncronously

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueCredential` | [`IssueCredential`](IssueCredential.md) |

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:493](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L493)

___

### removeListener

▸ **removeListener**(`eventName`, `callback`): `void`

Remove event listener, used by stop procedure

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`ListenerKey`](../enums/ListenerKey.md) |
| `callback` | [`EventCallback`](../modules.md#eventcallback) |

#### Returns

`void`

**`Date`**

20/06/2023 - 14:31:30

#### Defined in

[src/edge-agent/didcomm/Agent.ts:228](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L228)

___

### revealCredentialFields

▸ **revealCredentialFields**(`credential`, `fields`, `linkSecret`): `Promise`\<`Record`\<`string`, `any`\>\>

This method can be used by holders in order to disclose the value of a Credential
JWT are just encoded plainText
Anoncreds will really need to be disclosed as the fields are encoded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |
| `fields` | `string`[] |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

#### Defined in

[src/edge-agent/didcomm/Agent.ts:459](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L459)

___

### runTask

▸ **runTask**\<`T`\>(`task`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `Task`\<`T`, `unknown`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/edge-agent/didcomm/Agent.ts:247](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L247)

___

### sendMessage

▸ **sendMessage**(`message`): `Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

Asyncronously send a didcomm Message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message-1.md) |

#### Returns

`Promise`\<`undefined` \| [`Message`](Domain.Message-1.md)\>

#### Defined in

[src/edge-agent/didcomm/Agent.ts:438](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L438)

___

### signWith

▸ **signWith**(`did`, `message`): `Promise`\<[`Signature`](../interfaces/Domain.Signature.md)\>

Asyncronously sign a message with a DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `message` | `Uint8Array` |

#### Returns

`Promise`\<[`Signature`](../interfaces/Domain.Signature.md)\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:306](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L306)

___

### start

▸ **start**(): `Promise`\<`AgentState`\>

Asyncronously start the agent

#### Returns

`Promise`\<`AgentState`\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:158](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L158)

___

### startFetchingMessages

▸ **startFetchingMessages**(`iterationPeriod`): `Promise`\<`void`\>

Start fetching for new messages in such way that it can be stopped at any point in time without causing memory leaks

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterationPeriod` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/didcomm/Agent.ts:421](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L421)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

Asyncronously stop the agent and any side task that is running

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Defined in

[src/edge-agent/didcomm/Agent.ts:200](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L200)

___

### stopFetchingMessages

▸ **stopFetchingMessages**(): `void`

Stops fetching messages

#### Returns

`void`

#### Defined in

[src/edge-agent/didcomm/Agent.ts:428](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L428)

___

### verifiableCredentials

▸ **verifiableCredentials**(): `Promise`\<[`Credential`](Domain.Credential.md)[]\>

Asyncronously get all verifiable credentials

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)[]\>

#### Defined in

[src/edge-agent/didcomm/Agent.ts:468](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L468)

___

### initialize

▸ **initialize**(`params`): [`Agent`](Agent.md)

Convenience initializer for Agent
allowing default instantiation, omitting all but the absolute necessary parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | dependencies object |
| `params.api?` | [`Api`](../interfaces/Domain.Api.md) |  |
| `params.apollo?` | [`Apollo`](../interfaces/Domain.Apollo.md) |  |
| `params.castor?` | [`Castor`](../interfaces/Domain.Castor.md) |  |
| `params.mediatorDID` | `string` \| [`DID`](Domain.DID.md) | did of the mediator to be used |
| `params.mercury?` | [`Mercury`](../interfaces/Domain.Mercury.md) |  |
| `params.options?` | `AgentOptions` | - |
| `params.pluto` | [`Pluto`](../interfaces/Domain.Pluto-1.md) | storage implementation |
| `params.seed?` | [`Seed`](../interfaces/Domain.Seed.md) |  |

#### Returns

[`Agent`](Agent.md)

#### Defined in

[src/edge-agent/didcomm/Agent.ts:103](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/edge-agent/didcomm/Agent.ts#L103)
