import { Key } from "./Key";
import { KeyProperties } from "./KeyProperties";

export abstract class PrivateKey extends Key {
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
}

export abstract class PublicKey extends Key {
  get curve() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.getProperty(KeyProperties.curve)!;
  }
  get value() {
    return this.raw;
  }
}
