[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / DIDDocument

# Class: DIDDocument

[Domain](../modules/Domain.md).DIDDocument

## Table of contents

### Constructors

- [constructor](Domain.DIDDocument.md#constructor)

### Properties

- [coreProperties](Domain.DIDDocument.md#coreproperties)
- [id](Domain.DIDDocument.md#id)

### Accessors

- [services](Domain.DIDDocument.md#services)
- [verificationMethods](Domain.DIDDocument.md#verificationmethods)

## Constructors

### constructor

• **new DIDDocument**(`id`, `coreProperties`): [`DIDDocument`](Domain.DIDDocument.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`DID`](Domain.DID.md) |
| `coreProperties` | [`DIDDocumentCoreProperty`](../modules/Domain.md#diddocumentcoreproperty)[] |

#### Returns

[`DIDDocument`](Domain.DIDDocument.md)

#### Defined in

[src/domain/models/DIDDocument.ts:112](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDDocument.ts#L112)

## Properties

### coreProperties

• **coreProperties**: [`DIDDocumentCoreProperty`](../modules/Domain.md#diddocumentcoreproperty)[]

#### Defined in

[src/domain/models/DIDDocument.ts:114](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDDocument.ts#L114)

___

### id

• **id**: [`DID`](Domain.DID.md)

#### Defined in

[src/domain/models/DIDDocument.ts:113](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDDocument.ts#L113)

## Accessors

### services

• `get` **services**(): [`Service`](Domain.Service.md)[]

#### Returns

[`Service`](Domain.Service.md)[]

#### Defined in

[src/domain/models/DIDDocument.ts:117](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDDocument.ts#L117)

___

### verificationMethods

• `get` **verificationMethods**(): [`VerificationMethod`](Domain.VerificationMethod.md)[]

#### Returns

[`VerificationMethod`](Domain.VerificationMethod.md)[]

#### Defined in

[src/domain/models/DIDDocument.ts:126](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/1a3abf65a2f89b4ecd0f28af600329805573d6fc/src/domain/models/DIDDocument.ts#L126)
