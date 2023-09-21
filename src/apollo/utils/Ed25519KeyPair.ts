import { KeyPair } from "../../domain";
import { Ed25519PrivateKey } from "./Ed25519PrivateKey";
import { Ed25519PublicKey } from "./Ed25519PublicKey";
import ApolloBaseAsymmetricEncryption from "apollo/packages/ApolloBaseAsymmetricEncryption";

/**
 * @ignore
 */
export class Ed25519KeyPair extends KeyPair {
  constructor(
    public privateKey: Ed25519PrivateKey,
    public publicKey: Ed25519PublicKey
  ) {
    super();
  }

  static generateKeyPair() {
    const keyPair = ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMEdKeyPair.Companion.generateKeyPair();
    const privateKey = new Ed25519PrivateKey(keyPair.privateKey.raw);
    const publicKey = new Ed25519PublicKey(keyPair.publicKey.raw);

    return new Ed25519KeyPair(privateKey, publicKey);
  }
}
