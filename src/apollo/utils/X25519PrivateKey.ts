import { X25519KeyCommon } from "./X25519KeyCommon";

/**
 * @ignore
 */
export class X25519PrivateKey extends X25519KeyCommon {
  constructor(private nativeValue: Uint8Array) {
    super();
  }

  getEncoded(): Buffer {
    return Buffer.from(this.nativeValue);
  }
}
