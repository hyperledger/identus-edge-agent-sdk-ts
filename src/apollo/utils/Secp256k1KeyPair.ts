import BN from "bn.js";
import elliptic from "elliptic";
import { KeyPair } from "../../domain";

import { Secp256k1PrivateKey } from "./Secp256k1PrivateKey";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";

/**
 * @ignore
 */
export class Secp256k1KeyPair extends KeyPair {
  public static ec: elliptic.ec = new elliptic.ec("secp256k1");

  constructor(
    public privateKey: Secp256k1PrivateKey,
    public publicKey: Secp256k1PublicKey
  ) {
    super();
  }

  static generateKeyPair() {
    const keyPair = this.ec.genKeyPair();
    const bigNumber = keyPair.getPrivate();
    const basePoint = keyPair.getPublic();
    return Secp256k1KeyPair.fromNativeValues(bigNumber, basePoint);
  }

  static fromNativeValues(
    privateNative: BN,
    publicNative: elliptic.curve.base.BasePoint
  ): Secp256k1KeyPair {
    return new Secp256k1KeyPair(
      new Secp256k1PrivateKey(Uint8Array.from(privateNative.toArray())),
      new Secp256k1PublicKey(
        Uint8Array.from(publicNative.encodeCompressed("array"))
      )
    );
  }
}
