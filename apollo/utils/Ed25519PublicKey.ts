import elliptic from "elliptic";

const utils = elliptic.utils;

export class Ed25519PublicKey {
  protected bytes: Buffer;

  private eddsa = new elliptic.eddsa("ed25519");

  constructor(bytes: Uint8Array) {
    this.bytes = Buffer.from(bytes);
  }
  toBytes(): Buffer {
    return this.bytes;
  }

  verify(message: Buffer, sig: Buffer) {
    return this.eddsa.verify(
      message,
      sig.toString("hex"),
      utils.parseBytes(this.bytes.toString("hex")).slice(0, 32)
    );
  }
}
