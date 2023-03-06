import BN from "bn.js";

import { ECConfig } from "../../config/ECConfig";
import { Secp256k1KeyCommon } from "./Secp256k1KeyCommon";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";
import { ApolloError } from "../../domain/models/Errors";

abstract class Secp256k1PrivateKeyCommon {
  public abstract getPublicKey(): Secp256k1PublicKey;
}

export class Secp256k1PrivateKey
  extends Secp256k1KeyCommon
  implements Secp256k1PrivateKeyCommon
{
  constructor(public nativeValue: BN) {
    if (nativeValue.cmp(ECConfig.n) >= 0) {
      throw new ApolloError.ECPublicKeyInitialization();
    }
    super();
  }

  getEncoded(): Uint8Array {
    const byteList = Uint8Array.from(this.nativeValue.toArray());
    const padding = new Uint8Array(
      ECConfig.PRIVATE_KEY_BYTE_SIZE - byteList.length
    ).fill(0);
    return new Uint8Array([...padding, ...byteList]);
  }

  public getPublicKey(): Secp256k1PublicKey {
    const keyPair = this.ec.keyFromPrivate(
      this.nativeValue.toString("hex"),
      "hex"
    );
    return new Secp256k1PublicKey(keyPair.getPublic());
  }

  static secp256k1FromBigInteger(bigInteger: BN): Secp256k1PrivateKey {
    return new Secp256k1PrivateKey(bigInteger);
  }

  static secp256k1FromBytes(encoded: Uint8Array): Secp256k1PrivateKey {
    if (encoded.length !== ECConfig.PRIVATE_KEY_BYTE_SIZE) {
      throw new ApolloError.ECPublicKeyInitialization();
    }
    return new Secp256k1PrivateKey(new BN(encoded));
  }

  sign(message: Buffer) {
    const keyPair = Secp256k1PrivateKey.ec.keyFromPrivate(this.getEncoded());
    const sig = keyPair.sign(message);
    return Buffer.from(sig.toDER());
  }
}
