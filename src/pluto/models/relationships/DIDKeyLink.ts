import type { Model } from "../Model";

/**
 * Definition for DID -> Key relationships
 * 
 * @typedef {Object} DIDKeyLink
 */
export interface DIDKeyLink extends Model {
  /**
   * UUID of DID
   */
  didId: string;
  /**
   * UUID of Key
   */
  keyId: string;
  /**
   * Optional name for the relationship
   */
  alias?: string;
}
