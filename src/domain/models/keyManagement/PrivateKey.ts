import { Key } from "./Key";
import { KeyProperties } from "../KeyProperties";
import { PublicKey } from "./PublicKey";
import { Pluto } from "../../buildingBlocks/Pluto";

export abstract class PrivateKey extends Key implements Pluto.Storable {
  abstract publicKey(): PublicKey;

  public readonly uuid = Pluto.makeUUID();

  get curve() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.getProperty(KeyProperties.curve)!;
  }

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
