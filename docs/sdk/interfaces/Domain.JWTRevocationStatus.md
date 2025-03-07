[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / JWTRevocationStatus

# Interface: JWTRevocationStatus

[Domain](../modules/Domain.md).JWTRevocationStatus

## Hierarchy

- [`W3CVerifiableCredentialData`](Domain.W3CVerifiableCredentialData.md)

  ↳ **`JWTRevocationStatus`**

## Table of contents

### Properties

- [id](Domain.JWTRevocationStatus.md#id)
- [statusListCredential](Domain.JWTRevocationStatus.md#statuslistcredential)
- [statusListIndex](Domain.JWTRevocationStatus.md#statuslistindex)
- [statusPurpose](Domain.JWTRevocationStatus.md#statuspurpose)
- [type](Domain.JWTRevocationStatus.md#type)

## Properties

### id

• **id**: `string`

#### Overrides

[W3CVerifiableCredentialData](Domain.W3CVerifiableCredentialData.md).[id](Domain.W3CVerifiableCredentialData.md#id)

#### Defined in

[src/domain/models/VerifiableCredential.ts:305](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/VerifiableCredential.ts#L305)

___

### statusListCredential

• **statusListCredential**: `string`

#### Defined in

[src/domain/models/VerifiableCredential.ts:307](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/VerifiableCredential.ts#L307)

___

### statusListIndex

• **statusListIndex**: `number`

#### Defined in

[src/domain/models/VerifiableCredential.ts:304](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/VerifiableCredential.ts#L304)

___

### statusPurpose

• **statusPurpose**: [`JWTRevocationStatusPurpose`](../enums/Domain.JWTRevocationStatusPurpose.md)

#### Defined in

[src/domain/models/VerifiableCredential.ts:303](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/VerifiableCredential.ts#L303)

___

### type

• **type**: [`StatusList2021`](../enums/Domain.RevocationType.md#statuslist2021)

#### Overrides

[W3CVerifiableCredentialData](Domain.W3CVerifiableCredentialData.md).[type](Domain.W3CVerifiableCredentialData.md#type)

#### Defined in

[src/domain/models/VerifiableCredential.ts:306](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/VerifiableCredential.ts#L306)
