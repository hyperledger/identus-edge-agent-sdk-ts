import type { Model } from "./Model";
import { schemaFactory } from "./Schema";

/**
 * Definition for DID model
 * Represents {@link Domain!DID}
 * 
 * @typedef {Object} DIDModel
 * @see Domain.DID
 */
export interface DID extends Model {
  // uuid = full did

  // searchable properties
  schema: string;
  method: string;

  /**
   * Optional name
   */
  alias?: string;
}

export const DIDSchema = schemaFactory<DID>(schema => {
  schema.setRequired("method", "schema");
  schema.addProperty("string", "method");
  schema.addProperty("string", "schema");
  schema.addProperty("string", "alias");
});
