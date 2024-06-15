import { MangoQuery } from "rxdb/dist/types/types/rx-query";
import * as Domain from "../../../domain";
import type { Model } from "../../models";
import type { Pluto } from "../../Pluto";

export type OptionalId<T extends Model> = Omit<T, "uuid"> & { uuid?: string; };
export type WithId<T> = T & Required<Domain.Pluto.Storable>;

/**
 * @class BaseRepository
 * 
 * Encapsulate the functionality for interacting with the Store
 */
export abstract class BaseRepository<T extends Model> {
  /**
   * Allows setting of properties to be present in all Models sent to Store
   */
  protected baseModel: Partial<T> = {};

  constructor(
    private readonly store: Pluto.Store,
    protected readonly name: string,
  ) { }

  /**
   * Persist the Model in the Store.
   * 
   * @param model
   * @returns {T}
   * @throws {@link StoreInsertError} if insert fails
   * @throws {@link StoreUUIDNotReturned} if UUID not returned
   */
  async insert(model: T): Promise<T> {
    const obj = { ...model, ...this.baseModel };
    try {
      await this.store.insert(this.name, obj);
      return obj;
    }
    catch (e) {
      throw new Domain.PlutoError.StoreInsertError();
    }
  }

  async update(model: T) {
    try {
      await this.store.update(this.name, model)
    }
    catch (e) {
      throw new Domain.PlutoError.StoreUpdateError();
    }
  }

  async delete(uuid: string) {
    try {
      await this.store.delete(this.name, uuid)
    }
    catch (e) {
      throw new Domain.PlutoError.StoreDeleteError();
    }
  }

  /**
   * Search the Store for Models
   * 
   * @param query a MangoQuery object, a set of values and operators defining the query
   * @see rxdb/rx-query.d.ts
   * 
   * @example
   * search for a model with uuid and name
   * ```ts
   *   repo.getModels({ selector: { uuid: "1", name: "eg" }})
   * ```
   * @example
   * search for models with uuid of 1 or 2
   * ```ts
   *   repo.getModels({ selector: { $or: [{ uuid: "1" }, { uuid: "2" }] }})
   * ```
   * @example
   * search for all models
   * ```ts
   *   repo.getModels()
   * ```
   * 
   * @returns {T[]} Array of matched Models
   * @throws {@link StoreQueryFailed} if the query fails
   */
  async getModels(query?: MangoQuery<T>): Promise<T[]> {
    // const queryObj = typeof query === "function"
    //   ? this.buildQuery(query)
    //   : new NoSqlQueryBuilderClass(query);

    return this.runQuery(query);
  }

  /**
   * Handle internal logic for running a query
   * 
   * @param builder
   * @returns {T[]}
   * @throws {@link StoreQueryFailed}
   */
  private async runQuery(query?: MangoQuery<T>): Promise<T[]> {
    // const query = builder?.merge(this.baseModel).toJSON().query;
    const mQuery = this.makeMangoQuery(query);

    try {
      return this.store.query(this.name, mQuery);
    }
    catch (e) {
      throw new Domain.PlutoError.StoreQueryFailed();
    }
  }

  /**
   * Create the query to run from the given query and baseQuery
   * 
   * @param query 
   * @returns 
   */
  private makeMangoQuery(query?: MangoQuery<T>): MangoQuery<T> | undefined {
    if (Object.keys(this.baseModel).length > 0) {
      const baseQuery: MangoQuery = {
        selector: { $and: [this.baseModel] }
      };

      if (query?.selector) {
        baseQuery.selector?.$and?.push(query.selector);
      }

      return Object.assign({}, query, baseQuery);
    }

    return query;
  }

  /**
   * Add the UUID to a Storable and return
   * 
   * @param {Storable} obj 
   * @param {string} uuid 
   * @returns {T}
   */
  protected withId<X extends Domain.Pluto.Storable>(obj: X, uuid: string): WithId<X> {
    obj.uuid = uuid;
    return obj as WithId<X>;
  }

  // update
  // delete
}
