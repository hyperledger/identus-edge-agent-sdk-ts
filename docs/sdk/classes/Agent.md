[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Agent

# Class: Agent

Edge agent implementation

**`Export`**

Agent

## Implements

- [`AgentCredentials`](../interfaces/AgentCredentials.md)
- [`AgentDIDHigherFunctions`](../interfaces/AgentDIDHigherFunctions.md)
- [`AgentInvitations`](../interfaces/AgentInvitations.md)

## Table of contents

### Constructors

- [constructor](Agent.md#constructor)

### Properties

- [agentCredentials](Agent.md#agentcredentials)
- [agentDIDHigherFunctions](Agent.md#agentdidhigherfunctions)
- [agentInvitations](Agent.md#agentinvitations)
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
- [sendMessage](Agent.md#sendmessage)
- [signWith](Agent.md#signwith)
- [start](Agent.md#start)
- [startFetchingMessages](Agent.md#startfetchingmessages)
- [stop](Agent.md#stop)
- [stopFetchingMessages](Agent.md#stopfetchingmessages)
- [verifiableCredentials](Agent.md#verifiablecredentials)
- [initialize](Agent.md#initialize)
- [instanceFromConnectionManager](Agent.md#instancefromconnectionmanager)

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
| `seed?` | [`Seed`](../interfaces/Domain.Seed.md) |
| `api?` | [`Api`](../interfaces/Domain.Api.md) |
| `options?` | `AgentOptions` |

#### Returns

[`Agent`](Agent.md)

#### Defined in

[src/edge-agent/Agent.ts:84](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L84)

## Properties

### agentCredentials

• `Private` **agentCredentials**: `AgentCredentials`

#### Defined in

[src/edge-agent/Agent.ts:64](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L64)

___

### agentDIDHigherFunctions

• `Private` **agentDIDHigherFunctions**: `AgentDIDHigherFunctions`

#### Defined in

[src/edge-agent/Agent.ts:65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L65)

___

### agentInvitations

• `Private` **agentInvitations**: `AgentInvitations`

#### Defined in

[src/edge-agent/Agent.ts:66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L66)

___

### api

• `Readonly` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/edge-agent/Agent.ts:92](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L92)

___

### apollo

• `Readonly` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/edge-agent/Agent.ts:85](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L85)

___

### backup

• **backup**: `AgentBackup`

#### Defined in

[src/edge-agent/Agent.ts:62](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L62)

___

### castor

• `Readonly` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/edge-agent/Agent.ts:86](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L86)

___

### connectionManager

• `Readonly` **connectionManager**: [`ConnectionsManager`](ConnectionsManager.md)

#### Defined in

[src/edge-agent/Agent.ts:90](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L90)

___

### mediationHandler

• `Readonly` **mediationHandler**: [`MediatorHandler`](MediatorHandler.md)

#### Defined in

[src/edge-agent/Agent.ts:89](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L89)

___

### mercury

• `Readonly` **mercury**: [`Mercury`](../interfaces/Domain.Mercury.md)

#### Defined in

[src/edge-agent/Agent.ts:88](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L88)

___

### pluto

• `Readonly` **pluto**: [`Pluto`](../interfaces/Domain.Pluto-1.md)

#### Defined in

[src/edge-agent/Agent.ts:87](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L87)

___

### pollux

• `Private` **pollux**: [`Pollux`](Pollux.md)

#### Defined in

[src/edge-agent/Agent.ts:68](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L68)

___

### seed

• `Readonly` **seed**: [`Seed`](../interfaces/Domain.Seed.md)

#### Defined in

[src/edge-agent/Agent.ts:91](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L91)

___

### state

• **state**: `AgentState` = `AgentState.STOPPED`

Agent state

#### Defined in

[src/edge-agent/Agent.ts:61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L61)

## Accessors

### currentMediatorDID

• `get` **currentMediatorDID**(): `undefined` \| [`DID`](Domain.DID.md)

Get current mediator DID if available or null

#### Returns

`undefined` \| [`DID`](Domain.DID.md)

#### Defined in

[src/edge-agent/Agent.ts:220](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L220)

## Methods

### acceptDIDCommInvitation

▸ **acceptDIDCommInvitation**(`invitation`, `optionalAlias?`): `Promise`\<`void`\>

Asyncronously accept a didcomm v2 invitation, will create a pair between the Agent
 its connecting with and the current owner's did

#### Parameters

| Name | Type |
| :------ | :------ |
| `invitation` | [`OutOfBandInvitation`](OutOfBandInvitation.md) |
| `optionalAlias?` | `string` |

#### Returns

`Promise`\<`void`\>

**`Deprecated`**

- use `acceptInvitation`

**`Async`**

#### Implementation of

[AgentInvitations](../interfaces/AgentInvitations.md).[acceptDIDCommInvitation](../interfaces/AgentInvitations.md#acceptdidcomminvitation)

#### Defined in

[src/edge-agent/Agent.ts:444](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L444)

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

#### Implementation of

[AgentInvitations](../interfaces/AgentInvitations.md).[acceptInvitation](../interfaces/AgentInvitations.md#acceptinvitation)

#### Defined in

[src/edge-agent/Agent.ts:397](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L397)

___

### addListener

▸ **addListener**(`eventName`, `callback`): `void`

Add an event listener to get notified from an Event "MESSAGE"

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`ListenerKey`](../enums/ListenerKey.md) |
| `callback` | `EventCallback` |

#### Returns

`void`

#### Defined in

[src/edge-agent/Agent.ts:491](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L491)

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

#### Implementation of

[AgentDIDHigherFunctions](../interfaces/AgentDIDHigherFunctions.md).[createNewPeerDID](../interfaces/AgentDIDHigherFunctions.md#createnewpeerdid)

#### Defined in

[src/edge-agent/Agent.ts:369](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L369)

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

#### Implementation of

[AgentDIDHigherFunctions](../interfaces/AgentDIDHigherFunctions.md).[createNewPrismDID](../interfaces/AgentDIDHigherFunctions.md#createnewprismdid)

#### Defined in

[src/edge-agent/Agent.ts:349](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L349)

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

#### Implementation of

[AgentCredentials](../interfaces/AgentCredentials.md).[createPresentationForRequestProof](../interfaces/AgentCredentials.md#createpresentationforrequestproof)

#### Defined in

[src/edge-agent/Agent.ts:542](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L542)

___

### handlePresentation

▸ **handlePresentation**\<`Type`\>(`presentation`): `Promise`\<`boolean`\>

Initiate the Presentation and presentationSubmission

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](../enums/Domain.CredentialType.md) = [`JWT`](../enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentation` | [`Presentation`](Presentation.md) |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[AgentCredentials](../interfaces/AgentCredentials.md).[handlePresentation](../interfaces/AgentCredentials.md#handlepresentation)

#### Defined in

[src/edge-agent/Agent.ts:594](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L594)

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

#### Implementation of

[AgentCredentials](../interfaces/AgentCredentials.md).[initiatePresentationRequest](../interfaces/AgentCredentials.md#initiatepresentationrequest)

#### Defined in

[src/edge-agent/Agent.ts:578](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L578)

___

### isCredentialRevoked

▸ **isCredentialRevoked**(`credential`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Domain.Credential.md) |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[AgentCredentials](../interfaces/AgentCredentials.md).[isCredentialRevoked](../interfaces/AgentCredentials.md#iscredentialrevoked)

#### Defined in

[src/edge-agent/Agent.ts:137](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L137)

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

#### Implementation of

[AgentInvitations](../interfaces/AgentInvitations.md).[parseInvitation](../interfaces/AgentInvitations.md#parseinvitation)

#### Defined in

[src/edge-agent/Agent.ts:386](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L386)

___

### parseOOBInvitation

▸ **parseOOBInvitation**(`str`): `Promise`\<[`OutOfBandInvitation`](OutOfBandInvitation.md)\>

Asyncronously parse an out of band invitation from a URI as the oob come in format of valid URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `URL` |

#### Returns

`Promise`\<[`OutOfBandInvitation`](OutOfBandInvitation.md)\>

**`Async`**

#### Implementation of

[AgentInvitations](../interfaces/AgentInvitations.md).[parseOOBInvitation](../interfaces/AgentInvitations.md#parseoobinvitation)

#### Defined in

[src/edge-agent/Agent.ts:431](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L431)

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

#### Implementation of

[AgentInvitations](../interfaces/AgentInvitations.md).[parsePrismInvitation](../interfaces/AgentInvitations.md#parseprisminvitation)

#### Defined in

[src/edge-agent/Agent.ts:420](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L420)

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

#### Implementation of

[AgentCredentials](../interfaces/AgentCredentials.md).[prepareRequestCredentialWithIssuer](../interfaces/AgentCredentials.md#preparerequestcredentialwithissuer)

#### Defined in

[src/edge-agent/Agent.ts:513](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L513)

___

### processIssuedCredentialMessage

▸ **processIssuedCredentialMessage**(`message`): `Promise`\<[`Credential`](Domain.Credential.md)\>

Extract the verifiableCredential object from the Issue credential message asyncronously

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`IssueCredential`](IssueCredential.md) |

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)\>

**`Async`**

#### Implementation of

[AgentCredentials](../interfaces/AgentCredentials.md).[processIssuedCredentialMessage](../interfaces/AgentCredentials.md#processissuedcredentialmessage)

#### Defined in

[src/edge-agent/Agent.ts:526](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L526)

___

### removeListener

▸ **removeListener**(`eventName`, `callback`): `void`

Remove event listener, used by stop procedure

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`ListenerKey`](../enums/ListenerKey.md) |
| `callback` | `EventCallback` |

#### Returns

`void`

**`Date`**

20/06/2023 - 14:31:30

#### Defined in

[src/edge-agent/Agent.ts:502](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L502)

___

### revealCredentialFields

▸ **revealCredentialFields**(`credential`, `fields`, `linkSecret`): `Promise`\<\{ `[name: string]`: `any`;  }\>

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

`Promise`\<\{ `[name: string]`: `any`;  }\>

#### Implementation of

[AgentCredentials](../interfaces/AgentCredentials.md).[revealCredentialFields](../interfaces/AgentCredentials.md#revealcredentialfields)

#### Defined in

[src/edge-agent/Agent.ts:268](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L268)

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

[src/edge-agent/Agent.ts:472](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L472)

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

#### Implementation of

[AgentDIDHigherFunctions](../interfaces/AgentDIDHigherFunctions.md).[signWith](../interfaces/AgentDIDHigherFunctions.md#signwith)

#### Defined in

[src/edge-agent/Agent.ts:409](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L409)

___

### start

▸ **start**(): `Promise`\<`AgentState`\>

Asyncronously start the agent

#### Returns

`Promise`\<`AgentState`\>

**`Async`**

#### Defined in

[src/edge-agent/Agent.ts:283](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L283)

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

[src/edge-agent/Agent.ts:455](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L455)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

Asyncronously stop the agent and any side task that is running

#### Returns

`Promise`\<`void`\>

**`Async`**

#### Defined in

[src/edge-agent/Agent.ts:330](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L330)

___

### stopFetchingMessages

▸ **stopFetchingMessages**(): `void`

Stops fetching messages

#### Returns

`void`

#### Defined in

[src/edge-agent/Agent.ts:462](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L462)

___

### verifiableCredentials

▸ **verifiableCredentials**(): `Promise`\<[`Credential`](Domain.Credential.md)[]\>

Asyncronously get all verifiable credentials

#### Returns

`Promise`\<[`Credential`](Domain.Credential.md)[]\>

#### Implementation of

[AgentCredentials](../interfaces/AgentCredentials.md).[verifiableCredentials](../interfaces/AgentCredentials.md#verifiablecredentials)

#### Defined in

[src/edge-agent/Agent.ts:481](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L481)

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

[src/edge-agent/Agent.ts:155](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L155)

___

### instanceFromConnectionManager

▸ **instanceFromConnectionManager**(`apollo`, `castor`, `pluto`, `mercury`, `connectionManager`, `seed?`, `api?`, `options?`): [`Agent`](Agent.md)

Mainly for testing purposes but instantiating the Agent from a ConnectionManager directly

#### Parameters

| Name | Type |
| :------ | :------ |
| `apollo` | [`Apollo`](../interfaces/Domain.Apollo.md) |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `pluto` | [`Pluto`](../interfaces/Domain.Pluto-1.md) |
| `mercury` | [`Mercury`](../interfaces/Domain.Mercury.md) |
| `connectionManager` | [`ConnectionsManager`](ConnectionsManager.md) |
| `seed?` | [`Seed`](../interfaces/Domain.Seed.md) |
| `api?` | [`Api`](../interfaces/Domain.Api.md) |
| `options?` | `AgentOptions` |

#### Returns

[`Agent`](Agent.md)

**`Static`**

#### Defined in

[src/edge-agent/Agent.ts:237](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/Agent.ts#L237)
