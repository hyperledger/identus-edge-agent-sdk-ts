import { base64url } from "multiformats/bases/base64";

import * as x25519 from "@stablelib/x25519";

import { X25519PrivateKey } from "./X25519PrivateKey";
import { X25519PublicKey } from "./X25519PublicKey";
import { KeyPair } from "../../domain";
/**
 * @ignore
 */
export class X25519KeyPair extends KeyPair {
  public static ec = x25519;

  constructor(
    public privateKey: X25519PrivateKey,
    public publicKey: X25519PublicKey
  ) {
    super();
  }

  static generateKeyPair() {
    const keyPair = X25519KeyPair.ec.generateKeyPair();
    const pub = keyPair.publicKey;

    const privateKey = new X25519PrivateKey(Buffer.from(keyPair.secretKey));
    const publicKey = new X25519PublicKey(Buffer.from(Uint8Array.from(pub)));

    return new X25519KeyPair(privateKey, publicKey);
  }
}
