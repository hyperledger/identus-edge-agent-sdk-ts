[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Store

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
- [update](Store.md#update)

## Constructors

### constructor

• **new Store**(`options`, `collections?`): [`Store`](Store.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RxDatabaseCreator`\<`any`, `any`\> |
| `collections?` | `CollectionList` |

#### Returns

[`Store`](Store.md)

#### Defined in

[src/pluto/rxdb/Store.ts:14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L14)

## Properties

### \_db

• `Private` `Optional` **\_db**: `RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:12](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L12)

___

### collections

• `Private` `Optional` `Readonly` **collections**: `CollectionList`

#### Defined in

[src/pluto/rxdb/Store.ts:16](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L16)

___

### options

• `Private` `Readonly` **options**: `RxDatabaseCreator`\<`any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L15)

## Accessors

### db

• `get` **db**(): `RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Returns

`RxDatabase`\<`CollectionsOfDatabase`, `any`, `any`\>

#### Defined in

[src/pluto/rxdb/Store.ts:25](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L25)

## Methods

### cleanup

▸ **cleanup**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/rxdb/Store.ts:98](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L98)

___

### clear

▸ **clear**(): `Promise`\<`void`\>

Use with caution, this will remove all entries from database
and then destroy the database itself.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/pluto/rxdb/Store.ts:110](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L110)

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

[src/pluto/rxdb/Store.ts:61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L61)

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

[src/pluto/rxdb/Store.ts:73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L73)

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

[src/pluto/rxdb/Store.ts:90](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L90)

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
| `name` | `string` | Model name |
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

[src/pluto/rxdb/Store.ts:82](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L82)

___

### start

▸ **start**(): `Promise`\<`void`\>

Start the database and build collections

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Pluto.Store.md).[start](../interfaces/Pluto.Store.md#start)

#### Defined in

[src/pluto/rxdb/Store.ts:36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L36)

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

[src/pluto/rxdb/Store.ts:47](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/pluto/rxdb/Store.ts#L47)
