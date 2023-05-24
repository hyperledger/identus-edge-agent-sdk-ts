import BN from "bn.js";
import elliptic from "elliptic";
import { Secp256k1KeyCommon } from "./Secp256k1KeyCommon";

import { Secp256k1PrivateKey } from "./Secp256k1PrivateKey";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";

export class Secp256k1KeyPair extends Secp256k1KeyCommon {
  constructor(
    public privateKey: Secp256k1PrivateKey,
    public publicKey: Secp256k1PublicKey
  ) {
    super();
  }

  static generateSecp256k1KeyPair(): Secp256k1KeyPair {
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
      new Secp256k1PrivateKey(privateNative),
      new Secp256k1PublicKey(publicNative)
    );
  }
}
