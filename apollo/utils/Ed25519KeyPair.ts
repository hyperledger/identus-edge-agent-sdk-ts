import elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";

import { Ed25519KeyCommon } from "./Ed25519KeyCommon";
import { Ed25519PrivateKey } from "./Ed25519PrivateKey";
import { Ed25519PublicKey } from "./Ed25519PublicKey";

export class Ed25519KeyPair extends Ed25519KeyCommon {
  private privateKey: Ed25519PrivateKey;
  private publicKey: Ed25519PublicKey;

  constructor() {
    super();

    const secret = Buffer.from(elliptic.rand(32));
    const keyPair = this.eddsa.keyFromSecret(secret);

    const pub = Buffer.from(keyPair.getPublic());

    this.privateKey = new Ed25519PrivateKey(
      Buffer.from(base64url.baseEncode(secret))
    );

    this.publicKey = new Ed25519PublicKey(
      Buffer.from(base64url.baseEncode(pub))
    );
  }

  public getPrivate(): Buffer {
    return this.privateKey.getEncoded();
  }

  public getPublic(): Buffer {
    return this.publicKey.getEncoded();
  }

  public sign(message: Buffer) {
    return this.privateKey.sign(message);
  }

  public verify(message: Buffer, sig: Buffer) {
    return this.publicKey.verify(message, sig);
  }
}
