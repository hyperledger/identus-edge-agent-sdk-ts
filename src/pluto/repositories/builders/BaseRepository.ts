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
    protected readonly store: Pluto.Store,
    protected readonly name: string,
  ) {}

  /**
   * Persist the Model in the Store.
   * Update and return the given Model with the created UUID
   * 
   * @param model
   * @returns {T}
   * @throws {@link StoreInsertError} if insert fails
   * @throws {@link StoreUUIDNotReturned} if UUID not returned
   */
  async insert(model: OptionalId<T>): Promise<T> {
    const obj = { ...model, ...this.baseModel };
    const result = await this.tryInsert(obj);
    const uuid = this.parseId(result);

    return this.withId(model, uuid) as T;
  }

  /**
   * Search the Store for Models
   * 
   * @param selector either an object or array of objects with matchable properties
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
  async getModels(selector?: Partial<T> | Partial<T>[]): Promise<T[]> {
    return this.runQuery(selector ?? []);
  }

  /**
   * Handle internal logic for running a query
   * 
   * @param model 
   * @returns {T[]}
   * @throws {@link StoreQueryFailed}
   */
  private async runQuery(model: Partial<T> | Partial<T>[]): Promise<T[]> {
    const arr = Array.isArray(model) ? model : [model];
    const selector = arr.map(x => ({ ...x, ...this.baseModel }));

    try {
      return this.store.query(this.name, selector);
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

  /**
   * Error wrapper for store.insert
   * 
   * @param obj 
   */
  private async tryInsert(obj: Partial<T>) {
    try {
      return await this.store.insert(this.name, obj);
    }
    catch (e) {
      throw new Domain.PlutoError.StoreInsertError();
    }
  }

  /**
   * Retrieve the UUID from a returned value
   * 
   * @param value 
   * @returns {string} UUID
   */
  private parseId(value: unknown): string {
    if (typeof value === "string") {
      return value;
    }

    if (
      typeof value === "object"
      && value != null
      && "uuid" in value
      && typeof value.uuid === "string"
    ) {
      return value.uuid;
    }

    throw new Domain.PlutoError.StoreUUIDNotReturned();
  }

  // update
  // delete
}
