import { KeyPair } from "../../domain";
import { Ed25519PrivateKey } from "./Ed25519PrivateKey";
import { Ed25519PublicKey } from "./Ed25519PublicKey";
import ApolloPKG from "@hyperledger/identus-apollo";
const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;

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
    const keyPair = ApolloSDK.utils.KMMEdKeyPair.Companion.generateKeyPair();

    return new Ed25519KeyPair(
      new Ed25519PrivateKey(keyPair.privateKey.raw),
      new Ed25519PublicKey(keyPair.publicKey.raw)
    );
  }
}
