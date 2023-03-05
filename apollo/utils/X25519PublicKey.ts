import elliptic from "elliptic";

const utils = elliptic.utils;

export class X25519PublicKey {
  protected bytes: Buffer;

  private ec = new elliptic.ec("curve25519");

  constructor(bytes: Uint8Array) {
    this.bytes = Buffer.from(bytes);
  }
  toBytes(): Buffer {
    return this.bytes;
  }

  verify(message: Buffer, sig: Buffer) {
    return this.ec.verify(
      message,
      sig.toString("hex"),
      utils.parseBytes(this.bytes.toString("hex")).slice(0, 32)
    );
  }
}
