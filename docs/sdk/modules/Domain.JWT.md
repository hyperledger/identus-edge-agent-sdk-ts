[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / JWT

# Namespace: JWT

[Domain](Domain.md).JWT

## Table of contents

### Interfaces

- [DecodedObj](../interfaces/Domain.JWT.DecodedObj.md)
- [Header](../interfaces/Domain.JWT.Header.md)

### Type Aliases

- [Payload](Domain.JWT.md#payload)

### Functions

- [decode](Domain.JWT.md#decode)
- [sign](Domain.JWT.md#sign)

## Type Aliases

### Payload

Ƭ **Payload**: `JWTPayload`

#### Defined in

[src/domain/utils/JWT.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/utils/JWT.ts#L13)

## Functions

### decode

▸ **decode**(`jws`): [`DecodedObj`](../interfaces/Domain.JWT.DecodedObj.md)

decode a JWT into its parts

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |

#### Returns

[`DecodedObj`](../interfaces/Domain.JWT.DecodedObj.md)

#### Defined in

[src/domain/utils/JWT.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/utils/JWT.ts#L62)

___

### sign

▸ **sign**(`issuer`, `privateKey`, `payload`, `header?`): `Promise`\<`string`\>

Creates a signed JWT

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | [`DID`](../classes/Domain.DID.md) |
| `privateKey` | [`PrivateKey`](../classes/Domain.PrivateKey.md) |
| `payload` | `Partial`\<`JWTPayload`\> |
| `header?` | `Partial`\<[`Header`](../interfaces/Domain.JWT.Header.md)\> |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/utils/JWT.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/47157819fe5d19bccc5fcc542e98f32706bff6c2/src/domain/utils/JWT.ts#L31)
