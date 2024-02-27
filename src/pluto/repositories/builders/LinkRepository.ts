import * as Domain from "../../../domain";
import { BaseRepository, OptionalId } from "./BaseRepository";

/**
 * @class LinkRepository
 * 
 * Extends {@link BaseRepository} to handle model relationships
 */
export abstract class LinkRepository<T extends Domain.Pluto.Storable>
  extends BaseRepository<T>
{
  override insert(model: OptionalId<T>): Promise<T> {
    const obj = { uuid: Domain.Pluto.makeUUID(), ...model };
    return super.insert(obj as T);
  }
}
