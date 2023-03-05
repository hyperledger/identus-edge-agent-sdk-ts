import { Ed25519PrivateKey } from "./Ed25519PrivateKey";
import { Ed25519PublicKey } from "./Ed25519PublicKey";

export class Ed25519KeyPair {
  constructor(
    private privateKey: Ed25519PrivateKey,
    private publicKey: Ed25519PublicKey
  ) {}

  public getPrivate(): Ed25519PrivateKey {
    return this.privateKey;
  }

  public getPublic(): Ed25519PublicKey {
    return this.publicKey;
  }

  public getPrivateBytes(): Buffer {
    return this.privateKey.toBytes();
  }

  public getPublicBytes(): Buffer {
    return this.publicKey.toBytes();
  }
}
