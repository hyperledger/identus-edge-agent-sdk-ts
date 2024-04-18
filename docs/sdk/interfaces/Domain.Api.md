[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Api

# Interface: Api

[Domain](../modules/Domain.md).Api

## Table of contents

### Properties

- [client](Domain.Api.md#client)

### Methods

- [request](Domain.Api.md#request)

## Properties

### client

• `Optional` **client**: `AxiosStatic`

#### Defined in

[src/domain/models/Api.ts:8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Api.ts#L8)

## Methods

### request

▸ **request**\<`T`\>(`httpMethod`, `url`, `urlParameters`, `httpHeaders`, `body`): `Promise`\<[`HttpResponse`](../classes/Domain.HttpResponse.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpMethod` | `string` |
| `url` | `string` |
| `urlParameters` | `Map`\<`string`, `string`\> |
| `httpHeaders` | `Map`\<`string`, `string`\> |
| `body` | `any` |

#### Returns

`Promise`\<[`HttpResponse`](../classes/Domain.HttpResponse.md)\<`T`\>\>

#### Defined in

[src/domain/models/Api.ts:10](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/domain/models/Api.ts#L10)
