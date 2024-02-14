import { CollectionsOfDatabase, MangoQuery, RxDatabase, RxDatabaseCreator, RxDocument, addRxPlugin, createRxDatabase, removeRxDatabase } from 'rxdb';
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { CollectionList, makeCollections } from "./collections";
import type { Pluto } from "../Pluto";
import { Model } from '../models';
// import { RxDBEncryptedMigrationPlugin } from '@pluto-encrypted/encryption';

export class RxdbStore implements Pluto.Store {
  private _db?: RxDatabase<CollectionsOfDatabase, any, any>;

  constructor(
    private readonly options: RxDatabaseCreator,
    private readonly collections?: CollectionList
  ) {
    addRxPlugin(RxDBQueryBuilderPlugin);
    addRxPlugin(RxDBJsonDumpPlugin);
    // addRxPlugin(RxDBEncryptedMigrationPlugin);
  }

  get db() {
    if (!this._db) {
      throw new Error('Start Pluto first.');
    }

    return this._db;
  }

  /**
   * Start the database and build collections
   */
  async start(): Promise<void> {
    if (!this._db) {
      this._db = await createRxDatabase({
        ...this.options,
        multiInstance: false
      });

      const collections = makeCollections(this.collections);
      await this._db.addCollections(collections);
    }
  }

  getCollection(name: string) {
    if (!this.db.collections[name]) {
      throw new Error("Collection does not exist");
    }

    return this.db.collections[name];
  }

  async query<T extends Model>(name: string, query?: MangoQuery<T>) {
    const collection = this.getCollection(name);
    const rxQuery = collection.find(query);
    const result: RxDocument[] = await rxQuery.exec();
    const models = result.map(x => x._data);
    return models as any;
  }

  async insert(name: string, data: any) {
    const table = this.getCollection(name);
    await table.insert(data);
  }

  /**
   * Use with caution, this will remove all entries from database
   * and then destroy the database itself.
   */
  async clear() {
    const storages = Array.from(this.db.storageInstances.values());

    for (const storage of storages) {
      await storage.cleanup(Infinity);
    }

    await removeRxDatabase(this.options.name, this.db.storage);
  }
}
