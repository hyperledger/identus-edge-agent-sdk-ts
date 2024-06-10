import type { Model } from "./Model";
import { schemaFactory } from "./Schema";

/**
 * Definition for Key model
 * Represents {@link Domain!PrivateKey}
 * 
 * @typedef {Object} KeyModel
 * @see Domain.Key
 * @see Domain.StorableKey
 */
export interface Key extends Model {
  recoveryId: string;
  /**
   * Hex encoded Key.raw
   */
  rawHex: string;
  /**
   * Optional name
   */
  alias?: string;
  index?: number;
}

export const KeySchema = schemaFactory<Key>(schema => {
  schema.addProperty("string", "recoveryId");
  schema.addProperty("string", "rawHex");
  schema.addProperty("string", "alias");
  schema.addProperty("number", "index");
  schema.setEncrypted("rawHex");
  schema.setRequired("recoveryId", "rawHex");
  schema.setVersion(0);
});
