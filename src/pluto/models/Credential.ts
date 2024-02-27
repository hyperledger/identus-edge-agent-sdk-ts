import type { Model } from "./Model";
import { schemaFactory } from "./Schema";

/**
 * Definition for Storable Credential model
 * Represents {@link Domain!Credential}
 * 
 * @typedef {Object} CredentialModel
 * @see Domain.Credential
 */
export interface Credential extends Model {
  /**
   * Identifier for recovery
   */
  recoveryId: string;
  /**
   * Stringified JSON values
   */
  dataJson: string;

  // searchable properties
  issuer?: string;
  subject?: string;
  credentialCreated?: string;
  credentialUpdated?: string;
  credentialSchema?: string;
  validUntil?: string;
  revoked?: boolean;
  // availableClaims?: string[];
}

export const CredentialSchema = schemaFactory<Credential>(schema => {
  schema.setRequired("recoveryId", "dataJson");
  schema.addProperty("string", "recoveryId");
  schema.addProperty("string", "dataJson");

  schema.addProperty("string", "issuer");
  schema.addProperty("string", "subject");
  schema.addProperty("string", "credentialCreated");
  schema.addProperty("string", "credentialUpdated");
  schema.addProperty("string", "credentialSchema");
  schema.addProperty("string", "validUntil");
  schema.addProperty("boolean", "revoked");

  schema.setEncrypted("dataJson");
});
