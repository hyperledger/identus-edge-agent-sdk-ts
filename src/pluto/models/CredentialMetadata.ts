import type { Model } from "./Model";

/**
 * Definition for CredentialMetadata model
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
