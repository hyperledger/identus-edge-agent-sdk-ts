import { PrivateKey, PublicKey, StorableKey } from "../models";

/**
 * KeyRestoration protocol defines methods for verifying and restoring cryptographic keys from raw data.
 */
export interface KeyRestoration {
  /**
   * Restores a PrivateKey from the given StorableKey
   * 
   * @param {StorableKey} key
   * @returns {PrivateKey} PrivateKey instance
   * @throws {ApolloError.KeyRestoratonFailed} if the restoration process fails
   */
  restorePrivateKey(key: StorableKey): PrivateKey;

  /**
   * Restores a PublicKey from the given StorableKey
   * 
   * @param {StorableKey} key
   * @returns {PublicKey} PublicKey instance
   * @throws {ApolloError.KeyRestoratonFailed} if the restoration process fails, this method throws an error
   */
  restorePublicKey(key: StorableKey): PublicKey;
}
