// @ts-ignore
import { addRxPlugin, createRxDatabase, removeRxDatabase } from "rxdb";
import { MangoQuery } from "rxdb/dist/types/types/rx-query";
import { RxCollection } from "rxdb/dist/types/types/rx-collection";
import { RxDocument } from "rxdb/dist/types/types/rx-document";
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { CollectionList, makeCollections } from "./collections";
import type { Pluto } from "../Pluto";
import { Model } from '../models';
import { Domain } from '../..';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { CollectionsOfDatabase, RxDatabase, RxDatabaseCreator } from 'rxdb/dist/types/types/rx-database';
import { RxDBMigrationPlugin } from "rxdb/plugins/migration-schema";

export class RxdbStore implements Pluto.Store {
  private _db?: RxDatabase<CollectionsOfDatabase, any, any>;

  constructor(
    private readonly options: RxDatabaseCreator,
    private readonly collections?: CollectionList
  ) {
    addRxPlugin(RxDBQueryBuilderPlugin);
    addRxPlugin(RxDBMigrationPlugin);
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
        multiInstance: true,
        eventReduce: true,
        ignoreDuplicate: true,
        allowSlowCount: true,
      });
      const collections = makeCollections(this.collections ?? {});

      const created = await this.db.addCollections(collections);

      const withMigration = await Promise.all(
        Object.keys(created).map(
          key => new Promise<{
            needed: boolean,
            collection: RxCollection<any, any, any, any, any>
          }>((res, err) => {
            created[key].migrationNeeded().then((yes: boolean) => ({
              needed: yes,
              collection: created[key]
            })).then(res).catch(err)
          })
        )
      )

      const isMigrationNeeded = withMigration.find(({ needed }) => needed === true);

      if (isMigrationNeeded?.needed) {
        isMigrationNeeded.collection.startMigration(10);
        const migrationState = isMigrationNeeded.collection.getMigrationState();
        return new Promise((resolve, reject) => {
          migrationState.$.subscribe({
            error: (err: Error) => reject(err),
            next: (state: any) =>
              state.error ? reject(state.error) :
                state.status === "DONE" ? resolve() : null
          }
          );
        })
      }
    }
  }

  async update<T extends Domain.Pluto.Storable>(name: string, model: T): Promise<void> {
    const table = this.getCollection(name);
    const row = await table.findOne({
      selector: {
        uuid: model.uuid
      }
    }).exec();
    if (row) {
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

  async clean() {
    const storages = Array.from(this.db.storageInstances.values());
    for (const storage of storages) {
      await (storage as any).remove()
    }
    await removeRxDatabase(this.options.name, this.db.storage);
  }
}
