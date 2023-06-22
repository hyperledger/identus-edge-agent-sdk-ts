import { PrivateKey, PublicKey } from "./KeyManagement";

export abstract class KeyPair {
  abstract publicKey: PublicKey;
  abstract privateKey: PrivateKey;
}
