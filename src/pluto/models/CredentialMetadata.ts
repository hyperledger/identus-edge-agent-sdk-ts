import type { Model } from "./Model";
import { schemaFactory } from "./Schema";

/**
 * Definition for CredentialMetadata model
 * Represents {@link Domain!CredentialMetadata}
 * 
 * @see Domain.CredentialMetadata
 */
export interface CredentialMetadata extends Model {
  /**
   * Identifier for recovery
   */
  recoveryId: string;
  /**
   * Stringified JSON values
   */
  dataJson: string;
  /**
   * Identifier for retrieval
   */
  name: string;
}

export const CredentialMetadataSchema = schemaFactory<CredentialMetadata>(schema => {
  schema.setRequired("recoveryId", "dataJson", "name");
  schema.addProperty("string", "recoveryId");
  schema.addProperty("string", "dataJson");
  schema.addProperty("string", "name");
  schema.setEncrypted("dataJson");
});
