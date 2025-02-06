[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / Api

# Interface: Api

[Domain](../modules/Domain.md).Api

Api Dependency

## Implemented by

- [`ApiImpl`](../classes/ApiImpl.md)

## Table of contents

### Methods

- [request](Domain.Api.md#request)

## Methods

### request

▸ **request**\<`T`\>(`httpMethod`, `url`, `urlParameters?`, `httpHeaders?`, `body?`): `Promise`\<[`ApiResponse`](../classes/Domain.ApiResponse.md)\<`T`\>\>

make a request
return an ApiResponse on any 2xx status
throw ApiError otherwise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpMethod` | [`HttpMethod`](../modules/Domain.md#httpmethod) |
| `url` | `string` |
| `urlParameters?` | `Map`\<`string`, `string`\> |
| `httpHeaders?` | `Map`\<`string`, `string`\> |
| `body?` | `string` \| `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<[`ApiResponse`](../classes/Domain.ApiResponse.md)\<`T`\>\>

#### Defined in

[src/domain/models/Api.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/Api.ts#L25)
