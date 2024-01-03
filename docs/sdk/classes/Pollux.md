[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Pollux

# Class: Pollux

Implementation of PolluxInterface and responsible of handling credential related tasks

**`Export`**

## Implements

- [`Pollux`](../interfaces/Domain.Pollux.md)

## Table of contents

### Constructors

- [constructor](Pollux.md#constructor)

### Properties

- [\_anoncreds](Pollux.md#_anoncreds)
- [api](Pollux.md#api)
- [castor](Pollux.md#castor)

### Accessors

- [anoncreds](Pollux.md#anoncreds)

### Methods

- [extractAttachment](Pollux.md#extractattachment)
- [extractCredentialFormatFromMessage](Pollux.md#extractcredentialformatfrommessage)
- [extractDomainChallenge](Pollux.md#extractdomainchallenge)
- [fetchCredentialDefinition](Pollux.md#fetchcredentialdefinition)
- [isAnonCredsBody](Pollux.md#isanoncredsbody)
- [parseCredential](Pollux.md#parsecredential)
- [processAnonCredsCredential](Pollux.md#processanoncredscredential)
- [processJWTCredential](Pollux.md#processjwtcredential)
- [start](Pollux.md#start)

## Constructors

### constructor

• **new Pollux**(`castor`, `api?`): [`Pollux`](Pollux.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `castor` | [`Castor`](../interfaces/Domain.Castor.md) |
| `api` | [`Api`](../interfaces/Domain.Api.md) |

#### Returns

[`Pollux`](Pollux.md)

#### Defined in

[src/pollux/Pollux.ts:31](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L31)

## Properties

### \_anoncreds

• `Private` **\_anoncreds**: `undefined` \| `AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:29](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L29)

___

### api

• `Private` **api**: [`Api`](../interfaces/Domain.Api.md)

#### Defined in

[src/pollux/Pollux.ts:33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L33)

___

### castor

• `Private` **castor**: [`Castor`](../interfaces/Domain.Castor.md)

#### Defined in

[src/pollux/Pollux.ts:32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L32)

## Accessors

### anoncreds

• `get` **anoncreds**(): `AnoncredsLoader`

#### Returns

`AnoncredsLoader`

#### Defined in

[src/pollux/Pollux.ts:41](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L41)

## Methods

### extractAttachment

▸ **extractAttachment**(`body`, `attachments`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `any` |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |

#### Returns

`any`

#### Defined in

[src/pollux/Pollux.ts:116](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L116)

___

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`JWT`](../enums/Domain.CredentialType.md#jwt) \| [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) \| [`Unknown`](../enums/Domain.CredentialType.md#unknown)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Domain.Message.md) |

#### Returns

[`JWT`](../enums/Domain.CredentialType.md#jwt) \| [`AnonCreds`](../enums/Domain.CredentialType.md#anoncreds) \| [`Unknown`](../enums/Domain.CredentialType.md#unknown)

#### Implementation of

[Pollux](../interfaces/Domain.Pollux.md).[extractCredentialFormatFromMessage](../interfaces/Domain.Pollux.md#extractcredentialformatfrommessage)

#### Defined in

[src/pollux/Pollux.ts:51](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L51)

___

### extractDomainChallenge

▸ **extractDomainChallenge**(`attachments`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachments` | [`AttachmentDescriptor`](Domain.AttachmentDescriptor.md)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `challenge?` | `string` |
| `domain?` | `string` |

#### Defined in

[src/pollux/Pollux.ts:260](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L260)

___

### fetchCredentialDefinition

▸ **fetchCredentialDefinition**(`credentialDefinitionId`): `Promise`\<[`CredentialDefinition`](../interfaces/Domain.Anoncreds.CredentialDefinition.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialDefinitionId` | `string` |

#### Returns

`Promise`\<[`CredentialDefinition`](../interfaces/Domain.Anoncreds.CredentialDefinition.md)\>

#### Defined in

[src/pollux/Pollux.ts:103](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L103)

___

### isAnonCredsBody

▸ **isAnonCredsBody**(`body`): body is CredentialOffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `any` |

#### Returns

body is CredentialOffer

#### Defined in

[src/pollux/Pollux.ts:129](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L129)

___

### parseCredential

▸ **parseCredential**(`credentialBuffer`, `options?`): `Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.credentialMetadata?` | [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md) |
| `options.linkSecret?` | `string` |
| `options.type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Returns

`Promise`\<[`AnonCredsCredential`](AnonCredsCredential.md) \| [`JWTCredential`](JWTCredential.md)\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux.md).[parseCredential](../interfaces/Domain.Pollux.md#parsecredential)

#### Defined in

[src/pollux/Pollux.ts:200](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L200)

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<[[`CredentialRequest`](../interfaces/Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](Domain.Message.md) |
| `options` | [`CredentialRequestOptions`](../interfaces/Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<[[`CredentialRequest`](../interfaces/Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](../interfaces/Domain.Anoncreds.CredentialRequestMeta.md)]\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux.md).[processAnonCredsCredential](../interfaces/Domain.Pollux.md#processanoncredscredential)

#### Defined in

[src/pollux/Pollux.ts:167](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L167)

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](Domain.Message.md) |
| `options` | [`CredentialRequestOptions`](../interfaces/Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[Pollux](../interfaces/Domain.Pollux.md).[processJWTCredential](../interfaces/Domain.Pollux.md#processjwtcredential)

#### Defined in

[src/pollux/Pollux.ts:71](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L71)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pollux/Pollux.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/pollux/Pollux.ts#L36)
