import type { MangoQuery } from "rxdb";
import type * as Domain from "../../../domain";
import { Model } from "../../models";
import { BaseRepository } from "./BaseRepository";


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
  abstract toDomain(model: T): D;
  /**
   * Map from a Domain class to a Model
   * @param domain may be missing uuid
   * @returns Model potentially without uuid
   */
  abstract toModel(domain: D): T;

  /**
   * Search the Store, mapping any found to Domain
   * 
   * @param selector either an object or array of objects with matchable properties
   * @returns {T[]} Array of matched Domain instances
   * @throws {@link StoreQueryFailed} if the query fails
   */
  async get(query?: MangoQuery<T>): Promise<D[]> {
    const result = await this.getModels(query);
    return result.map(x => this.toDomain(x));
  }

  /**
   * Search for instances based on given values
   * 
   * @param selector object with matchable properties
   * @returns all found Domain instances
   * @throws {@link StoreQueryFailed} if the query fails
   */
  async find(selector?: Partial<T>): Promise<D[]> {
    const query = selector ? { selector } : undefined;
    const result = await this.getModels(query as any);
    return result.map(x => this.toDomain(x));
  }

  /**
   * Search for single instance based on given values
   * 
   * @param selector object with matchable properties
   * @returns first found Domain instance or null
   * @throws {@link StoreQueryFailed} if the query fails
   */
  async findOne(selector?: Partial<T>): Promise<D | null> {
    const result = await this.find(selector);
    const first = result.at(0);

    return first ?? null;
  }

  /**
   * Utility fn for common use of find with uuid
   * 
   * @param uuid 
   * @returns first found Domain instance or undefined
   * @throws {@link StoreQueryFailed} if the query fails
   */
  async byUUID(uuid: string) {
    // ? casting because TS isnt recognising {uuid} as Partial<T>
    return this.findOne({ uuid } as any);
  }

  /**
   * Persist the Domain instance in the Store.
   * 
   * @param domain 
   * 
   * Will be mapped to relevant Model for persistance
   * @see {@link BaseRepository.insert}
   * @throws {@link StoreInsertError} if insert fails
   * @throws {@link StoreUUIDNotReturned} if UUID not returned
   */
  async save(domain: D): Promise<void> {
    const model = this.toModel(domain);
    await this.insert(model);
  }
}
