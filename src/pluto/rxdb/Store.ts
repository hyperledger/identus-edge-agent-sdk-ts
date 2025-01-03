import { CollectionsOfDatabase, MangoQuery, RxDatabase, RxDatabaseCreator, RxDocument, addRxPlugin, createRxDatabase, removeRxDatabase } from 'rxdb';
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { CollectionList, makeCollections } from "./collections";
import type { Pluto } from "../Pluto";
import { Model } from '../models';
import { RxDBEncryptedMigrationPlugin } from '../migration';
import { Domain } from '../..';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';

export class RxdbStore implements Pluto.Store {
  private _db?: RxDatabase<CollectionsOfDatabase, any, any>;

  constructor(
    private readonly options: RxDatabaseCreator,
    private readonly collections?: CollectionList
  ) {
    addRxPlugin(RxDBQueryBuilderPlugin);
    addRxPlugin(RxDBJsonDumpPlugin);
    addRxPlugin(RxDBEncryptedMigrationPlugin);
    addRxPlugin(RxDBUpdatePlugin);
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
        multiInstance: true
      });
      const collections = makeCollections(this.collections ?? {});
      await this._db.addCollections(collections);
    }
  }

  async stop(): Promise<void> {
    await this.db.destroy();
    delete this._db;
  }

  async update<T extends Domain.Pluto.Storable>(name: string, model: T): Promise<void> {
    const table = this.getCollection(name);
    const row = await table.findOne({
      selector: {
        uuid: model.uuid
      }
    }).exec();
    if (row) {

      //Improve error handling when not found
      await row.patch(model);
    }
  }

  async delete(name: string, uuid: string): Promise<void> {
    const table = this.getCollection(name);
    const row = await table.findOne({
      selector: {
        uuid: uuid
      }
    });
    //TODO: Improve error handling, specially when not found
    await row?.remove();
  }


  getCollection(name: string) {
    const safeName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
    if (!this.db.collections[safeName]) {
      throw new Error("Collection does not exist");
    }

    return this.db.collections[safeName];
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
   */
  async cleanup() {
    const storages = Array.from(this.db.storageInstances.values());

    for (const storage of storages) {
      await storage.cleanup(Infinity);
    }
  }

  /**
   * Use with caution, this will remove all entries from database
   * and then destroy the database itself.
   */
  async clear() {
    await this.cleanup();
    await removeRxDatabase(this.options.name, this.db.storage);
  }
}
