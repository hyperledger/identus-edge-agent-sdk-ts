import elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";
import { KeyPair } from "../../domain";

import { Ed25519PrivateKey } from "./Ed25519PrivateKey";
import { Ed25519PublicKey } from "./Ed25519PublicKey";

export class Ed25519KeyPair extends KeyPair {
  public static eddsa = new elliptic.eddsa("ed25519");

  constructor(
    public privateKey: Ed25519PrivateKey,
    public publicKey: Ed25519PublicKey
  ) {
    super();
  }

  static generateKeyPair() {
    const secret = Buffer.from(elliptic.rand(32));
    const keyPair = Ed25519KeyPair.eddsa.keyFromSecret(secret);

    const pub = Buffer.from(keyPair.getPublic());

    const privateKey = new Ed25519PrivateKey(
      Buffer.from(base64url.baseEncode(secret))
    );

    const publicKey = new Ed25519PublicKey(
      Buffer.from(base64url.baseEncode(pub))
    );

    return new Ed25519KeyPair(privateKey, publicKey);
  }
}
