import elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";

import { Ed25519KeyCommon } from "./Ed25519KeyCommon";

/**
 * @ignore
 */
export class Ed25519PrivateKey extends Ed25519KeyCommon {
  private keyPair: elliptic.eddsa.KeyPair;

  constructor(nativeValue: Buffer) {
    super();
    this.keyPair = this.eddsa.keyFromSecret(
      Buffer.from(base64url.baseDecode(nativeValue.toString()))
    );
  }

  getEncoded(): Buffer {
    return Buffer.from(base64url.baseEncode(this.keyPair.getSecret()));
  }

  sign(message: Buffer) {
    const sig = this.keyPair.sign(message);
    return sig.toBytes();
  }
}
