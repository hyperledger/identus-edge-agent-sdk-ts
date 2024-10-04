[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / ApiResponse

# Class: ApiResponse\<T\>

[Domain](../modules/Domain.md).ApiResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Constructors

- [constructor](Domain.ApiResponse.md#constructor)

### Properties

- [body](Domain.ApiResponse.md#body)
- [headers](Domain.ApiResponse.md#headers)
- [status](Domain.ApiResponse.md#status)
- [statusText](Domain.ApiResponse.md#statustext)

### Accessors

- [httpStatus](Domain.ApiResponse.md#httpstatus)

## Constructors

### constructor

• **new ApiResponse**\<`T`\>(`body`, `status`, `statusText?`, `headersInit?`): [`ApiResponse`](Domain.ApiResponse.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `body` | `T` | `undefined` |
| `status` | `number` | `undefined` |
| `statusText` | `string` | `"OK"` |
| `headersInit` | `Record`\<`string`, `any`\> | `{}` |

#### Returns

[`ApiResponse`](Domain.ApiResponse.md)\<`T`\>

#### Defined in

[src/domain/models/Api.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/Api.ts#L37)

## Properties

### body

• `Readonly` **body**: `T`

#### Defined in

[src/domain/models/Api.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/Api.ts#L38)

___

### headers

• `Readonly` **headers**: `Headers`

#### Defined in

[src/domain/models/Api.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/Api.ts#L35)

___

### status

• `Readonly` **status**: `number`

#### Defined in

[src/domain/models/Api.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/Api.ts#L39)

___

### statusText

• `Readonly` **statusText**: `string` = `"OK"`

#### Defined in

[src/domain/models/Api.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/Api.ts#L40)

## Accessors

### httpStatus

• `get` **httpStatus**(): `number`

#### Returns

`number`

#### Defined in

[src/domain/models/Api.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/7b4542fdfe44dc06a6c4ef341cf3335e29422147/src/domain/models/Api.ts#L46)
