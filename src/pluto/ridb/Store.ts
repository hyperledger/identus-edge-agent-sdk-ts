import { RIDB, RIDBTypes } from '@trust0/ridb';
import { makeCollections } from './collections';
import type { Pluto } from "../Pluto";
import { MangoQuery } from 'rxdb';
import { Model } from '../models';

type ExtractSchemas = ReturnType<typeof makeCollections>['schemas'];
export class RIDBStore implements Pluto.Store {
    private _db: RIDB<ExtractSchemas>;
    constructor() {

        const { schemas, migrations } = makeCollections();
        this._db = new RIDB<typeof schemas>({
            schemas,
            migrations: migrations as any
        });
    }

    async query<T extends Model>(table: string, query?: MangoQuery<T>): Promise<T[]> {
        const collection = this.collections[table as keyof ExtractSchemas]
        const ridbQuery = query?.selector || query || {}
        return collection.find(ridbQuery as any) as any
    }

    async insert<T extends Model>(table: string, model: T): Promise<void> {
        const collection = this.collections[table as keyof ExtractSchemas]
        await collection.create(model as any)
    }

    async update<T extends Model>(table: string, model: T): Promise<void> {
        const collection = this.collections[table as keyof ExtractSchemas]
        await collection.update(model as any)
    }

    async delete(table: string, uuid: string): Promise<void> {
        const collection = this.collections[table as keyof ExtractSchemas]
        await collection.delete(uuid)
    }

    get collections() {
        if (!this._db) {
            throw new Error("Start the ridb first")
        }
        return this._db.collections
    }

    async start(options: {
        storageType?: typeof RIDBTypes.BaseStorage;
        password?: string;
    }) {
        await this._db.start(options)
    }

    async cleanup() {
        throw new Error("Not implemented")
    }

    async clear() {
        throw new Error("Not implemented")
    }
}