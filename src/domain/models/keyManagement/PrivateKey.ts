import { Key } from "./Key";
import { KeyProperties } from "../KeyProperties";
import { PublicKey } from "./PublicKey";

export abstract class PrivateKey extends Key {
  abstract publicKey(): PublicKey;

  /**
   * Derivation index.
   * The index of the key in the derivation path.
   * Only applicable for HD keys
   * 
   * @returns {number | undefined}
   */
  get index(): number | undefined {
    const value = this.getProperty(KeyProperties.index);
    const int = parseInt(value ?? "");

    return isNaN(int) ? undefined : int;
  }

  get value() {
    return this.raw;
  }
}
