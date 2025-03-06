[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Castor

# Interface: Castor

[Domain](../modules/Domain.md).Castor

## Implemented by

- [`Castor`](../classes/Castor.md)

## Table of contents

### Methods

- [createPeerDID](Domain.Castor.md#createpeerdid)
- [createPrismDID](Domain.Castor.md#createprismdid)
- [getEcnumbasis](Domain.Castor.md#getecnumbasis)
- [parseDID](Domain.Castor.md#parsedid)
- [resolveDID](Domain.Castor.md#resolvedid)
- [verifySignature](Domain.Castor.md#verifysignature)

## Methods

### createPeerDID

▸ **createPeerDID**(`publicKeys`, `services`): `Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeys` | [`PublicKey`](../classes/Domain.PublicKey.md)[] |
| `services` | [`Service`](../classes/Domain.Service.md)[] |

#### Returns

`Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Defined in

[src/domain/buildingBlocks/Castor.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Castor.ts#L11)

___

### createPrismDID

▸ **createPrismDID**(`masterPublicKey`, `services?`, `authenticationKeys?`): `Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masterPublicKey` | [`PublicKey`](../classes/Domain.PublicKey.md) |
| `services?` | [`Service`](../classes/Domain.Service.md)[] |
| `authenticationKeys?` | ([`PublicKey`](../classes/Domain.PublicKey.md) \| [`KeyPair`](../classes/Domain.KeyPair.md))[] |

#### Returns

`Promise`\<[`DID`](../classes/Domain.DID.md)\>

#### Defined in

[src/domain/buildingBlocks/Castor.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Castor.ts#L6)

___

### getEcnumbasis

▸ **getEcnumbasis**(`did`, `publicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |
| `publicKey` | [`PublicKey`](../classes/Domain.PublicKey.md) |

#### Returns

`string`

#### Defined in

[src/domain/buildingBlocks/Castor.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Castor.ts#L21)

___

### parseDID

▸ **parseDID**(`did`): [`DID`](../classes/Domain.DID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

[`DID`](../classes/Domain.DID.md)

#### Defined in

[src/domain/buildingBlocks/Castor.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Castor.ts#L5)

___

### resolveDID

▸ **resolveDID**(`did`): `Promise`\<[`DIDDocument`](../classes/Domain.DIDDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<[`DIDDocument`](../classes/Domain.DIDDocument.md)\>

#### Defined in

[src/domain/buildingBlocks/Castor.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Castor.ts#L15)

___

### verifySignature

▸ **verifySignature**(`did`, `challenge`, `signature`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](../classes/Domain.DID.md) |
| `challenge` | `Uint8Array` |
| `signature` | `Uint8Array` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/domain/buildingBlocks/Castor.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Castor.ts#L16)
