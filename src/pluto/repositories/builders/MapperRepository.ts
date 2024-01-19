import type * as Domain from "../../../domain";
import { Model } from "../../models";
import { BaseRepository, OptionalId, WithId } from "./BaseRepository";

/**
 * @class MapperRepository
 * 
 * Extends {@link BaseRepository} to handle Store interactions
 * while mapping between a Domain class and a Model object
 */
export abstract class MapperRepository<T extends Model, D extends Domain.Pluto.Storable>
  extends BaseRepository<T>
{
  /**
   * Map from a Model to the Domain class
   * 
   * @param model the stored Model with a uuid
   * @returns Domain with uuid set
   */
  abstract toDomain(model: T): WithId<D>;
  /**
   * Map from a Domain class to a Model
   * @param domain may be missing uuid
   * @returns Model potentially without uuid
   */
  abstract toModel(domain: D): OptionalId<T>;

  /**
   * Search the Store, mapping any found to Domain
   * 
   * @param selector either an object or array of objects with matchable properties
   * @returns {T[]} Array of matched Domain instances
   * @throws {@link StoreQueryFailed} if the query fails
   */
  async get(selector?: Partial<T> | Partial<T>[]): Promise<WithId<D>[]> {
    const result = await this.getModels(selector ?? []);
    return result.map(x => this.toDomain(x));
  }

  /**
   * Search for single instance
   * 
   * @param selector object with matchable properties
   * @returns first found Domain instance or undefined
   * @throws {@link StoreQueryFailed} if the query fails
   */
  async find(selector: Partial<T>): Promise<WithId<D> | undefined> {
    const result = await this.getModels(selector);
    const first = result.at(0);

    return first != null ? this.toDomain(first) : undefined;
  }

  /**
   * Utility fn for common use of find with uuid
   * 
   * @param uuid 
   * @returns first found Domain instance or undefined
   * @throws {@link StoreQueryFailed} if the query fails
   */
  async byId(uuid: string) {
    // ? casting because TS isnt recognising {uuid} as Partial<T>
    return this.find({ uuid } as Partial<T>);
  }

  /**
   * Persist the Domain instance in the Store.
   * Update and return the given instance with the created UUID
   * 
   * @param domain 
   * @returns domain with uuid set
   * 
   * Will be mapped to relevant Model for persistance
   * @see {@link BaseRepository.insert}
   * @throws {@link StoreInsertError} if insert fails
   * @throws {@link StoreUUIDNotReturned} if UUID not returned
   */
  async save(domain: D): Promise<WithId<D>> {
    const model = this.toModel(domain);
    const result = await this.insert(model);

    return this.withId(domain, result.uuid);
  }
}
