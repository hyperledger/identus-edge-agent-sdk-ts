import BN from "bn.js";

import { ECConfig } from "../../config/ECConfig";
import { Secp256k1KeyCommon } from "./Secp256k1KeyCommon";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";
import { ApolloError } from "../../domain/models/Errors";
import { BNHelper } from "./bn/BNHelper";

abstract class Secp256k1PrivateKeyCommon {
  public abstract d: bigint;

  public abstract getPublicKey(): Secp256k1PublicKey;
}

export class Secp256k1PrivateKey
  extends Secp256k1KeyCommon
  implements Secp256k1PrivateKeyCommon
{
  constructor(
    private nativeValue: BN,
    public d: bigint = Secp256k1PrivateKey.privateKeyD(nativeValue)
  ) {
    if (d < BigInt(2) || BNHelper.getBN(d) >= ECConfig.n) {
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
    const keyPair = this.ec.keyFromPrivate(this.nativeValue.toString("hex"));
    return new Secp256k1PublicKey(keyPair.getPublic());
  }

  static secp256k1FromBigInteger(d: bigint): Secp256k1PrivateKey {
    return new Secp256k1PrivateKey(new BN(d.toString()));
  }

  static secp256k1FromBytes(encoded: Uint8Array): Secp256k1PrivateKey {
    if (encoded.length !== ECConfig.PRIVATE_KEY_BYTE_SIZE) {
      throw new ApolloError.ECPublicKeyInitialization();
    }
    return new Secp256k1PrivateKey(new BN(encoded));
  }

  private static privateKeyD(privateKey: BN): bigint {
    return BigInt(privateKey.toString());
  }
}
