[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Pluto](../modules/Pluto.md) / Store

# Interface: Store

[Pluto](../modules/Pluto.md).Store

## Implemented by

- [`Store`](../classes/Store.md)

## Table of contents

### Methods

- [delete](Pluto.Store.md#delete)
- [insert](Pluto.Store.md#insert)
- [query](Pluto.Store.md#query)
- [start](Pluto.Store.md#start)
- [update](Pluto.Store.md#update)

## Methods

### delete

▸ **delete**(`table`, `uuid`): `Promise`\<`void`\>

Deleting a  row in the Store

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `uuid` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/Pluto.ts:101](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/pluto/Pluto.ts#L101)

___

### insert

▸ **insert**\<`T`\>(`table`, `model`): `Promise`\<`void`\>

Persist new data in the Store.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Storable`](Domain.Pluto.Storable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `table` | `string` | table name |
| `model` | `T` | object to save |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/Pluto.ts:87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/pluto/Pluto.ts#L87)

___

### query

▸ **query**\<`T`\>(`table`, `query?`): `Promise`\<`T`[]\>

Run a query to fetch data from the Store

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Storable`](Domain.Pluto.Storable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `table` | `string` | table name |
| `query?` | `MangoQuery`\<`T`\> | a MangoQuery object, a set of values and operators defining the query properties within an object will be AND'ed different objects will be OR'd |

#### Returns

`Promise`\<`T`[]\>

relevant Models

**`Example`**

search for a model in TableOne with uuid and name
```ts
  store.query("TableOne", { selector: { uuid: "1", name: "eg" }})
```

**`Example`**

search for models in TableOne with uuid of 1 or 2
```ts
  store.query("TableOne", { selector: { $or: [{ uuid: "1" }, { uuid: "2" }] }})
```

**`Example`**

search for all models in TableOne
```ts
  store.query("TableOne")
```

#### Defined in

[src/pluto/Pluto.ts:79](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/pluto/Pluto.ts#L79)

___

### start

▸ **start**(): `Promise`\<`void`\>

Handle any necessary startup.
Will be called first before any usage, if provided.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/Pluto.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/pluto/Pluto.ts#L50)

___

### update

▸ **update**\<`T`\>(`table`, `model`): `Promise`\<`void`\>

Updating a new row in the Store

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Storable`](Domain.Pluto.Storable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `model` | `T` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/Pluto.ts:94](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/2cdbf1ede368164be3dd56f3e362e76e94d48b48/src/pluto/Pluto.ts#L94)
