[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / ApiImpl

# Class: ApiImpl

Implement API using built in fetch

## Implements

- [`Api`](../interfaces/Domain.Api.md)

## Table of contents

### Constructors

- [constructor](ApiImpl.md#constructor)

### Methods

- [includeBody](ApiImpl.md#includebody)
- [parseResponse](ApiImpl.md#parseresponse)
- [request](ApiImpl.md#request)

## Constructors

### constructor

• **new ApiImpl**(): [`ApiImpl`](ApiImpl.md)

#### Returns

[`ApiImpl`](ApiImpl.md)

## Methods

### includeBody

▸ **includeBody**(`method`): `boolean`

should `body` be included in the request

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`HttpMethod`](../modules/Domain.md#httpmethod) |

#### Returns

`boolean`

#### Defined in

[src/edge-agent/helpers/FetchApi.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/edge-agent/helpers/FetchApi.ts#L55)

___

### parseResponse

▸ **parseResponse**(`response`): `Promise`\<`any`\>

attempt to convert response to JSON
or return as string

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/edge-agent/helpers/FetchApi.ts:66](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/edge-agent/helpers/FetchApi.ts#L66)

___

### request

▸ **request**\<`T`\>(`method`, `urlStr`, `urlParameters?`, `httpHeaders?`, `body?`): `Promise`\<[`ApiResponse`](Domain.ApiResponse.md)\<`T`\>\>

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
| `method` | [`HttpMethod`](../modules/Domain.md#httpmethod) |
| `urlStr` | `string` |
| `urlParameters` | `Map`\<`string`, `string`\> |
| `httpHeaders` | `Map`\<`string`, `string`\> |
| `body?` | `string` \| `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<[`ApiResponse`](Domain.ApiResponse.md)\<`T`\>\>

#### Implementation of

[Api](../interfaces/Domain.Api.md).[request](../interfaces/Domain.Api.md#request)

#### Defined in

[src/edge-agent/helpers/FetchApi.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/edge-agent/helpers/FetchApi.ts#L7)
