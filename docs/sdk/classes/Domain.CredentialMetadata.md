[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / CredentialMetadata

# Class: CredentialMetadata

[Domain](../modules/Domain.md).CredentialMetadata

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](Domain.CredentialMetadata.md#constructor)

### Properties

- [json](Domain.CredentialMetadata.md#json)
- [name](Domain.CredentialMetadata.md#name)
- [type](Domain.CredentialMetadata.md#type)
- [uuid](Domain.CredentialMetadata.md#uuid)

### Methods

- [isType](Domain.CredentialMetadata.md#istype)
- [toJSON](Domain.CredentialMetadata.md#tojson)

## Constructors

### constructor

• **new CredentialMetadata**(`type`, `name`, `json`): [`CredentialMetadata`](Domain.CredentialMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CredentialType`](../enums/Domain.CredentialType.md) |
| `name` | `string` |
| `json` | `Record`\<`string`, `any`\> |

#### Returns

[`CredentialMetadata`](Domain.CredentialMetadata.md)

#### Defined in

[src/domain/models/CredentialMetadata.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/CredentialMetadata.ts#L7)

## Properties

### json

• `Private` `Readonly` **json**: `Record`\<`string`, `any`\>

#### Defined in

[src/domain/models/CredentialMetadata.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/CredentialMetadata.ts#L10)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[src/domain/models/CredentialMetadata.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/CredentialMetadata.ts#L9)

___

### type

• `Readonly` **type**: [`CredentialType`](../enums/Domain.CredentialType.md)

#### Defined in

[src/domain/models/CredentialMetadata.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/CredentialMetadata.ts#L8)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Defined in

[src/domain/models/CredentialMetadata.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/CredentialMetadata.ts#L5)

## Methods

### isType

▸ **isType**(`type`): `boolean`

Check the CredentialType of this Metadata

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CredentialType`](../enums/Domain.CredentialType.md) |

#### Returns

`boolean`

#### Defined in

[src/domain/models/CredentialMetadata.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/CredentialMetadata.ts#L19)

___

### toJSON

▸ **toJSON**(): `Record`\<`string`, `any`\>

Get the raw CredentialMetadata JSON

#### Returns

`Record`\<`string`, `any`\>

JSON

#### Defined in

[src/domain/models/CredentialMetadata.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/c632f0efed4b3d905476bd3d4312ebd50a8d0a12/src/domain/models/CredentialMetadata.ts#L28)
