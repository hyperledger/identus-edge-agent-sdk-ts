import type * as Domain from "../../domain";
import type { Model } from "./Model";

/**
 * Definition for Key model
 * Represents {@link Domain!PrivateKey}
 * 
 * @typedef {Object} KeyModel
 * @see Domain.Key
 * @see Domain.StorableKey
 */
export interface Key extends Model, Domain.StorableKey {
  /**
   * Optional name
   */
  alias?: string;
}
