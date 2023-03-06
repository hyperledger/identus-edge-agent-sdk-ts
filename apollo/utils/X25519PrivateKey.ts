import * as elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";

import { X25519KeyCommon } from "./X25519KeyCommon";

export class X25519PrivateKey extends X25519KeyCommon {
  private keyPair: elliptic.ec.KeyPair;

  constructor(nativeValue: Buffer) {
    super();

    this.keyPair = this.ec.keyFromPrivate(
      Array.from(
        base64url.baseDecode(nativeValue.toString())
      ) as unknown as Buffer
    );
  }

  getEncoded(): Buffer {
    return Buffer.from(
      base64url.baseEncode(Buffer.from(this.keyPair.getPrivate().toArray()))
    );
  }

  sign(message: Buffer) {
    return Buffer.from(this.keyPair.sign(message).toDER());
  }
}
