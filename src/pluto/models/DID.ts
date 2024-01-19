import type { Model } from "./Model";

/**
 * Definition for DID model
 * Represents {@link Domain!DID}
 * 
 * @typedef {Object} DIDModel
 * @see Domain.DID
 */
export interface DID extends Model {
  schema: string;
  method: string;
  methodId: string;
  /**
   * Optional name
   */
  alias?: string;
}
