import elliptic from "elliptic";

const utils = elliptic.utils;

export class Ed25519PrivateKey {
  protected bytes: Buffer;
  private eddsa = new elliptic.eddsa("ed25519");
  constructor(bytes: Uint8Array) {
    this.bytes = Buffer.from(bytes);
  }
  toBytes(): Buffer {
    return this.bytes;
  }

  sign(message: Buffer) {
    const keyPair = this.eddsa.keyFromSecret(
      utils.parseBytes(this.bytes).slice(0, 32)
    );
    const sig = keyPair.sign(message);
    return Buffer.from(sig.toBytes());
  }
}
