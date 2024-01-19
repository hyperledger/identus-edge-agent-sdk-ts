import type { Model } from "./Model";

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
