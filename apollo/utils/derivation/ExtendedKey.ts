import { BIP32Interface } from "bip32";
import { Secp256k1KeyPair } from "../Secp256k1KeyPair";
import { Secp256k1PrivateKey } from "../Secp256k1PrivateKey";
import { Secp256k1PublicKey } from "../Secp256k1PublicKey";
import { DerivationAxis } from "./DerivationAxis";
import { DerivationPath } from "./DerivationPath";

export class ExtendedKey {
  constructor(private bip32: BIP32Interface, private path: DerivationPath) {}

  /**
   * Public key for this extended key
   */
  public publicKey(): Secp256k1PublicKey {
    return this.privateKey().getPublicKey();
  }

  /**
   * Private key for this extended key
   */
  public privateKey(): Secp256k1PrivateKey {
    if (!this.bip32.privateKey) {
      throw new Error("Error Bip32 PrivateKey not found");
    }
    return Secp256k1PrivateKey.secp256k1FromBytes(this.bip32.privateKey);
  }

  /**
   * KeyPair for this extended key
   */
  public keyPair(): Secp256k1KeyPair {
    return new Secp256k1KeyPair(this.privateKey(), this.publicKey());
  }

  /**
   * Generates child extended key for given index
   */
  public derive(axis: DerivationAxis): ExtendedKey {
    const derivedBip32 = axis.hardened
      ? this.bip32.deriveHardened(axis.number)
      : this.bip32.derive(axis.number);
    return new ExtendedKey(derivedBip32, this.path.derive(axis));
  }
}
