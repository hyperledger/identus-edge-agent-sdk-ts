[@input-output-hk/atala-prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Pollux

# Interface: Pollux

[Domain](../modules/Domain.md).Pollux

## Implemented by

- [`Pollux`](../classes/Pollux.md)

## Table of contents

### Properties

- [parseCredential](Domain.Pollux.md#parsecredential)

### Methods

- [extractCredentialFormatFromMessage](Domain.Pollux.md#extractcredentialformatfrommessage)
- [processAnonCredsCredential](Domain.Pollux.md#processanoncredscredential)
- [processJWTCredential](Domain.Pollux.md#processjwtcredential)

## Properties

### parseCredential

• **parseCredential**: (`credentialBuffer`: `Uint8Array`, `options?`: \{ `[name: string]`: `any`; `type`: [`CredentialType`](../enums/Domain.CredentialType.md)  }) => `Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

#### Type declaration

▸ (`credentialBuffer`, `options?`): `Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `credentialBuffer` | `Uint8Array` |
| `options?` | `Object` |
| `options.type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

##### Returns

`Promise`\<[`Credential`](../classes/Domain.Credential.md)\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:11](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pollux.ts#L11)

## Methods

### extractCredentialFormatFromMessage

▸ **extractCredentialFormatFromMessage**(`message`): [`CredentialType`](../enums/Domain.CredentialType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../classes/Domain.Message.md) |

#### Returns

[`CredentialType`](../enums/Domain.CredentialType.md)

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pollux.ts#L23)

___

### processAnonCredsCredential

▸ **processAnonCredsCredential**(`offer`, `options`): `Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/Domain.Message.md) |
| `options` | [`CredentialRequestOptions`](Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`CredentialRequestTuple`\<[`CredentialRequest`](Domain.Anoncreds.CredentialRequest.md), [`CredentialRequestMeta`](Domain.Anoncreds.CredentialRequestMeta.md)\>\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pollux.ts#L19)

___

### processJWTCredential

▸ **processJWTCredential**(`offer`, `options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Message`](../classes/Domain.Message.md) |
| `options` | [`CredentialRequestOptions`](Domain.CredentialRequestOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/buildingBlocks/Pollux.ts:15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/3f28060/src/domain/buildingBlocks/Pollux.ts#L15)
