import { X25519PrivateKey } from "./X25519PrivateKey";
import { X25519PublicKey } from "./X25519PublicKey";

export class X25519KeyPair {
  constructor(
    private privateKey: X25519PrivateKey,
    private publicKey: X25519PublicKey
  ) {}

  public getPrivate(): Buffer {
    return this.privateKey.toBytes();
  }

  public getPublic(): Buffer {
    return this.publicKey.toBytes();
  }
}
