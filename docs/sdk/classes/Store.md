[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / Store

# Class: Store

## Implements

- [`Store`](../interfaces/Pluto.Store.md)

## Table of contents

### Constructors

- [constructor](Store.md#constructor)

### Properties

- [\_db](Store.md#_db)
- [collections](Store.md#collections)
- [options](Store.md#options)

### Accessors

- [db](Store.md#db)

### Methods

- [cleanup](Store.md#cleanup)
- [clear](Store.md#clear)
- [delete](Store.md#delete)
- [getCollection](Store.md#getcollection)
- [insert](Store.md#insert)
- [query](Store.md#query)
- [start](Store.md#start)
- [stop](Store.md#stop)
- [update](Store.md#update)

## Constructors

### constructor

• **new Store**(`options`, `collections?`): [`Store`](Store.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RxDatabaseCreator`\<`any`, `any`\> |
| `collections?` | [`CollectionList`](../modules.md#collectionlist) |

#### Returns

[`Store`](Store.md)

#### Defined in

[src/pluto/rxdb/Store.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L14)

## Properties

### \_db

• `Private` `Optional` **\_db**: `RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L12)

___

### collections

• `Private` `Optional` `Readonly` **collections**: [`CollectionList`](../modules.md#collectionlist)

#### Defined in

[src/pluto/rxdb/Store.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L16)

___

### options

• `Private` `Readonly` **options**: `RxDatabaseCreator`\<`any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L15)

## Accessors

### db

• `get` **db**(): `RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Returns

`RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L25)

## Methods

### cleanup

▸ **cleanup**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/rxdb/Store.ts:103](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L103)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/rxdb/Store.ts:115](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L115)

___

### delete

▸ **delete**(`name`, `uuid`): `Promise`\<`void`\>

Deleting a  row in the Store

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uuid` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[delete](../interfaces/Pluto.Store.md#delete)

#### Defined in

[src/pluto/rxdb/Store.ts:66](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L66)

___

### getCollection

▸ **getCollection**(`name`): `RxCollection`\<`any`, {}, {}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`RxCollection`\<`any`, {}, {}, {}\>

#### Defined in

[src/pluto/rxdb/Store.ts:78](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L78)

___

### insert

▸ **insert**(`name`, `data`): `Promise`\<`void`\>

Persist new data in the Store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | table name |
| `data` | `any` | object to save |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[insert](../interfaces/Pluto.Store.md#insert)

#### Defined in

[src/pluto/rxdb/Store.ts:95](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L95)

___

### query

▸ **query**\<`T`\>(`name`, `query?`): `Promise`\<`any`\>

Run a query to fetch data from the Store

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Storable`](../interfaces/Domain.Pluto.Storable.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | table name |
| `query?` | `MangoQuery`\<`T`\> | a MangoQuery object, a set of values and operators defining the query properties within an object will be AND'ed different objects will be OR'd |

#### Returns

`Promise`\<`any`\>

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

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[query](../interfaces/Pluto.Store.md#query)

#### Defined in

[src/pluto/rxdb/Store.ts:87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L87)

___

### start

▸ **start**(): `Promise`\<`void`\>

Start the database and build collections

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[start](../interfaces/Pluto.Store.md#start)

#### Defined in

[src/pluto/rxdb/Store.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L36)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

Handle any necessary teardown.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[stop](../interfaces/Pluto.Store.md#stop)

#### Defined in

[src/pluto/rxdb/Store.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L47)

___

### update

▸ **update**\<`T`\>(`name`, `model`): `Promise`\<`void`\>

Updating a new row in the Store

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Storable`](../interfaces/Domain.Pluto.Storable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `model` | `T` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[update](../interfaces/Pluto.Store.md#update)

#### Defined in

[src/pluto/rxdb/Store.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/pluto/rxdb/Store.ts#L52)
