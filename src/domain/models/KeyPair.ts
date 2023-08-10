import { PrivateKey, PublicKey } from "./keyManagement";
import { KeyProperties } from "./KeyProperties";

export abstract class KeyPair {
  get curve() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.privateKey.getProperty(KeyProperties.curve)!;
  }
  abstract publicKey: PublicKey;
  abstract privateKey: PrivateKey;
}
