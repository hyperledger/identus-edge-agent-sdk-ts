[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [Pluto](../modules/Domain.Pluto.md) / Storable

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

[src/domain/buildingBlocks/Pluto.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/f2306959fcea168d196649eedb6a342635865544/src/domain/buildingBlocks/Pluto.ts#L22)
