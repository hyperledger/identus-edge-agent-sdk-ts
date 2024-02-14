import type { Model } from "../Model";
import { schemaFactory } from "../Schema";

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

export const DIDKeyLinkSchema = schemaFactory<DIDKeyLink>(schema => {
  schema.setRequired("didId", "keyId");
  schema.addProperty("string", "didId");
  schema.addProperty("string", "keyId");
  schema.addProperty("string", "alias");
});
