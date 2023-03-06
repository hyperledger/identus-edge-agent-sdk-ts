import * as elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";

import { Ed25519KeyCommon } from "./Ed25519KeyCommon";

export class Ed25519PublicKey extends Ed25519KeyCommon {
  private keyPair: elliptic.eddsa.KeyPair;

  constructor(nativeValue: Uint8Array) {
    super();

    this.keyPair = this.eddsa.keyFromPublic(
      Array.from(
        base64url.baseDecode(nativeValue.toString())
      ) as unknown as Buffer
    );
  }

  getEncoded(): Buffer {
    return Buffer.from(base64url.baseEncode(this.keyPair.getPublic()));
  }

  verify(message: Buffer, sig: Buffer) {
    //TODO: Report a bug in elliptic, this method is not expecting a Buffer (bytes)
    //Internally it expects to find an array, if not Buffer.slice.concat fails when Array.slice.concat doesn't
    //Must keep this...
    return this.keyPair.verify(message, Array.from(sig) as unknown as Buffer);
  }
}
