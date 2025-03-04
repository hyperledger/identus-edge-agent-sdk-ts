[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / JWT

# Namespace: JWT

[Domain](Domain.md).JWT

## Table of contents

### Enumerations

- [Claims](../enums/Domain.JWT.Claims.md)

### Interfaces

- [DecodedObj](../interfaces/Domain.JWT.DecodedObj.md)
- [Header](../interfaces/Domain.JWT.Header.md)

### Type Aliases

- [Payload](Domain.JWT.md#payload)

### Functions

- [decode](Domain.JWT.md#decode)

## Type Aliases

### Payload

Ƭ **Payload**: `JWTPayload`

#### Defined in

[src/domain/utils/JWT.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/utils/JWT.ts#L13)

## Functions

### decode

▸ **decode**(`jws`): [`DecodedObj`](../interfaces/Domain.JWT.DecodedObj.md)

decode a JWT into its parts
TODO move this to JWT component - needs removing from JWTCredential first

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |

#### Returns

[`DecodedObj`](../interfaces/Domain.JWT.DecodedObj.md)

#### Defined in

[src/domain/utils/JWT.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/ccc9c0ac7bbfa014ad60ef1b5e244665d7b8ffc1/src/domain/utils/JWT.ts#L41)
