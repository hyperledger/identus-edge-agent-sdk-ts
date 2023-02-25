import { KeyCurve } from "./KeyCurve";
import { PrivateKey } from "./PrivateKey";
import { PublicKey } from "./PublicKey";

export interface KeyPair {
  keyCurve: KeyCurve;
  privateKey: PrivateKey;
  publicKey: PublicKey;
}
