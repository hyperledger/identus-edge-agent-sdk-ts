import { Key } from "./Key";
import { KeyProperties } from "../KeyProperties";
import { PublicKey } from "./PublicKey";
import { Pluto } from "../../buildingBlocks/Pluto";

export abstract class PrivateKey extends Key implements Pluto.Storable {
  public _id?: string;

  get curve() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.getProperty(KeyProperties.curve)!;
  }
  get index() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.getProperty(KeyProperties.index)!;
  }
  get value() {
    return this.raw;
  }
  abstract publicKey(): PublicKey;

  abstract to: {
    Buffer: () => Buffer;
    Hex: () => string;
  };
}
