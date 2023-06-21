import { base64url } from "multiformats/bases/base64";

import { X25519KeyCommon } from "./X25519KeyCommon";

import { X25519PrivateKey } from "./X25519PrivateKey";
import { X25519PublicKey } from "./X25519PublicKey";

/**
 * @ignore
 */
export class X25519KeyPair extends X25519KeyCommon {
  private privateKey: X25519PrivateKey;
  private publicKey: X25519PublicKey;

  constructor() {
    super();

    const keyPair = this.ec.generateKeyPair();

    const pub = keyPair.publicKey;

    this.privateKey = new X25519PrivateKey(
      Buffer.from(base64url.baseEncode(Buffer.from(keyPair.secretKey)))
    );
    this.publicKey = new X25519PublicKey(
      Buffer.from(base64url.baseEncode(Uint8Array.from(pub)))
    );
  }

  public getPrivate(): Buffer {
    return this.privateKey.getEncoded();
  }

  public getPublic(): Buffer {
    return this.publicKey.getEncoded();
  }
}
