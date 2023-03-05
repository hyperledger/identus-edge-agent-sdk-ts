import elliptic from "elliptic";
import { X25519PublicKey } from "./X25519PublicKey";

export class X25519PrivateKey {
  protected bytes: Buffer;
  private static eddsa = new elliptic.ec("curve25519");
  constructor(bytes: Uint8Array) {
    this.bytes = Buffer.from(bytes);
  }
  toBytes(): Buffer {
    return this.bytes;
  }

  sign(message: Buffer) {
    const keyPair = X25519PrivateKey.eddsa.keyFromPrivate(this.bytes);
    const sig = keyPair.sign(message);
    return Buffer.from(sig.toDER());
  }

  static fromEd25519Private(xPrv: Buffer): X25519PublicKey {
    throw new Error();
  }
}
