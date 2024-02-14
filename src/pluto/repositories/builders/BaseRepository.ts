import { MangoQuery } from "rxdb";
import * as Domain from "../../../domain";
import type { Model } from "../../models";
import type { Pluto } from "../../Pluto";

export type OptionalId<T extends Model> = Omit<T, "uuid"> & { uuid?: string; };
export type WithId<T> = T & Required<Domain.Pluto.Storable>;

/**
 * @class BaseRepository
 * 
 * Define the basic functionality for interacting with the Store
 */
export abstract class BaseRepository<T extends Model> {
  /**
   * Allows setting of properties to be present in all Models sent to Store
   */
  protected baseModel: Partial<T> = {};

  constructor(
    private readonly store: Pluto.Store,
    protected readonly name: string,
  ) {}

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
      return model;
    }
    catch (e) {
      throw new Domain.PlutoError.StoreInsertError();
    }
  }

  /**
   * Search the Store for Models
   * 
   * @param query either an object or array of objects with matchable properties
   * 
   * properties within an object will be AND'ed
   *   different objects will be OR'd
   * 
   * @example
   * search for a model with uuid and name
   * ```ts
   *   repo.getModels({ uuid: "1", name: "eg" })
   * ```
   * @example
   * search for models with uuid of 1 or 2
   * ```ts
   *   repo.getModels([{ uuid: "1" }, { uuid: "2" }])
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
    if (Object.keys(this.baseModel).length > 0) {
      query = {
        ...query,
        selector: {
          $and: [query?.selector ?? {}, this.baseModel]
        } as any
      };
    }


    try {
      return this.store.query(this.name, query);
    }
    catch (e) {
      throw new Domain.PlutoError.StoreQueryFailed();
    }
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
