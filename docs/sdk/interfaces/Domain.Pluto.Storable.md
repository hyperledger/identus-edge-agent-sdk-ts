[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [Pluto](../modules/Domain.Pluto.md) / Storable

# Interface: Storable

[Domain](../modules/Domain.md).[Pluto](../modules/Domain.Pluto.md).Storable

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implemented by

- [`Credential`](../classes/Domain.Credential.md)
- [`CredentialMetadata`](../classes/Domain.CredentialMetadata.md)
- [`DID`](../classes/Domain.DID.md)
- [`JWTCredential`](../classes/JWTCredential.md)
- [`LinkSecret`](../classes/Domain.LinkSecret.md)
- [`Message`](../classes/Domain.Message-1.md)
- [`PrivateKey`](../classes/Domain.PrivateKey.md)
- [`SDJWTCredential`](../classes/SDJWTCredential.md)

## Table of contents

### Properties

- [uuid](Domain.Pluto.Storable.md#uuid)

## Properties

### uuid

• **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Defined in

[src/domain/buildingBlocks/Pluto.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/buildingBlocks/Pluto.ts#L22)
