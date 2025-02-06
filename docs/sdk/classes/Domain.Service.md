[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Service

# Class: Service

[Domain](../modules/Domain.md).Service

## Table of contents

### Constructors

- [constructor](Domain.Service.md#constructor)

### Properties

- [id](Domain.Service.md#id)
- [serviceEndpoint](Domain.Service.md#serviceendpoint)
- [type](Domain.Service.md#type)

### Accessors

- [isDIDCommMessaging](Domain.Service.md#isdidcommmessaging)

## Constructors

### constructor

• **new Service**(`id`, `type`, `serviceEndpoint`): [`Service`](Domain.Service.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | `string`[] |
| `serviceEndpoint` | [`ServiceEndpoint`](Domain.ServiceEndpoint.md) |

#### Returns

[`Service`](Domain.Service.md)

#### Defined in

[src/domain/models/DIDDocument.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/DIDDocument.ts#L37)

## Properties

### id

• **id**: `string`

#### Defined in

[src/domain/models/DIDDocument.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/DIDDocument.ts#L38)

___

### serviceEndpoint

• **serviceEndpoint**: [`ServiceEndpoint`](Domain.ServiceEndpoint.md)

#### Defined in

[src/domain/models/DIDDocument.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/DIDDocument.ts#L40)

___

### type

• **type**: `string`[]

#### Defined in

[src/domain/models/DIDDocument.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/DIDDocument.ts#L39)

## Accessors

### isDIDCommMessaging

• `get` **isDIDCommMessaging**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/domain/models/DIDDocument.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7eadfa3c5dda4c81079844b2a47014b3c9b03dac/src/domain/models/DIDDocument.ts#L43)
