import * as elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";

import { X25519KeyCommon } from "./X25519KeyCommon";

export class X25519PublicKey extends X25519KeyCommon {
  private keyPair: elliptic.ec.KeyPair;

  constructor(nativeValue: Uint8Array) {
    super();

    this.keyPair = this.ec.keyFromPublic(
      Array.from(
        base64url.baseDecode(nativeValue.toString())
      ) as unknown as Buffer
    );
  }

  getEncoded(): Buffer {
    return Buffer.from(
      base64url.baseEncode(Buffer.from(this.keyPair.getPublic(false, "array")))
    );
  }

  verify(message: Buffer, sig: Buffer) {
    return this.keyPair.verify(message, Array.from(sig) as unknown as Buffer);
  }
}
