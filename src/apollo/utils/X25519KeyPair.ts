import ApolloBaseAsymmetricEncryption from "@input-output-hk/apollo";
import { X25519PrivateKey } from "./X25519PrivateKey";
import { X25519PublicKey } from "./X25519PublicKey";
import { KeyPair } from "../../domain";

/**
 * @ignore
 */
export class X25519KeyPair extends KeyPair {
  constructor(
    public privateKey: X25519PrivateKey,
    public publicKey: X25519PublicKey
  ) {
    super();
  }

  static generateKeyPair() {
    const keyPair =
      ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMX25519KeyPair.Companion.generateKeyPair();

    return new X25519KeyPair(
      new X25519PrivateKey(keyPair.privateKey.raw),
      new X25519PublicKey(keyPair.publicKey.raw)
    );
  }
}
