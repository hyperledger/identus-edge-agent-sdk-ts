[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / LinkSecret

# Class: LinkSecret

[Domain](../modules/Domain.md).LinkSecret

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../interfaces/Domain.Pluto.Storable.md)

## Table of contents

### Constructors

- [constructor](Domain.LinkSecret.md#constructor)

### Properties

- [name](Domain.LinkSecret.md#name)
- [secret](Domain.LinkSecret.md#secret)
- [uuid](Domain.LinkSecret.md#uuid)
- [defaultName](Domain.LinkSecret.md#defaultname)

## Constructors

### constructor

• **new LinkSecret**(`secret`, `name?`): [`LinkSecret`](Domain.LinkSecret.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secret` | `string` | `undefined` |
| `name` | `string` | `LinkSecret.defaultName` |

#### Returns

[`LinkSecret`](Domain.LinkSecret.md)

#### Defined in

[src/domain/models/LinkSecret.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/LinkSecret.ts#L8)

## Properties

### name

• `Readonly` **name**: `string` = `LinkSecret.defaultName`

#### Defined in

[src/domain/models/LinkSecret.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/LinkSecret.ts#L10)

___

### secret

• `Readonly` **secret**: `string`

#### Defined in

[src/domain/models/LinkSecret.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/LinkSecret.ts#L9)

___

### uuid

• `Readonly` **uuid**: `string`

Universally Unique Identifier.
should be unique across all items.

#### Implementation of

[Storable](../interfaces/Domain.Pluto.Storable.md).[uuid](../interfaces/Domain.Pluto.Storable.md#uuid)

#### Defined in

[src/domain/models/LinkSecret.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/LinkSecret.ts#L6)

___

### defaultName

▪ `Static` **defaultName**: `string` = `"default"`

#### Defined in

[src/domain/models/LinkSecret.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/domain/models/LinkSecret.ts#L4)
