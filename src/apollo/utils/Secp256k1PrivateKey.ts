import BN from "bn.js";
import * as ECConfig from "../../config/ECConfig";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";
import { ApolloError } from "../../domain/models/Errors";
import { SignableKey } from "../../domain/models/keyManagement/SignableKey";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { Curve, KeyTypes, PrivateKey } from "../../domain";

import * as ApolloPKG from "apollo/packages/ApolloBaseAsymmetricEncryption";

const {
  io: {
    iohk: {
      atala: {
        prism: { apollo },
      },
    },
  },
} = ApolloPKG;

/**
 * @ignore
 */
export class Secp256k1PrivateKey extends PrivateKey implements SignableKey {
  public type: KeyTypes = KeyTypes.EC;
  public keySpecification: Map<string, string> = new Map();
  public raw: Uint8Array;
  public size: number;

  private get native() {
    return apollo.utils.KMMECSecp256k1PrivateKey.Companion.secp256k1FromByteArray(
      Int8Array.from(this.raw)
    );
  }

  constructor(nativeValue: Uint8Array) {
    if (nativeValue.length !== ECConfig.PRIVATE_KEY_BYTE_SIZE) {
      throw new ApolloError.ECPublicKeyInitialization();
    }
    super();

    this.keySpecification.set(KeyProperties.curve, Curve.SECP256K1);
    this.raw = nativeValue;
    this.size = this.raw.length;
  }

  publicKey() {
    const secp256K1PublicKey = this.native.getPublicKey();
    return new Secp256k1PublicKey(Uint8Array.from(secp256K1PublicKey.raw));
  }

  getEncoded(): Uint8Array {
    const byteList = this.raw;
    const padding = new Uint8Array(
      ECConfig.PRIVATE_KEY_BYTE_SIZE - byteList.length
    ).fill(0);
    return new Uint8Array([...padding, ...byteList]);
  }

  sign(message: Buffer) {
    return Buffer.from(
      Uint8Array.from(this.native.sign(Int8Array.from(message)))
    );
  }

  static secp256k1FromBigInteger(bigInteger: BN): Secp256k1PrivateKey {
    return new Secp256k1PrivateKey(Uint8Array.from(bigInteger.toArray()));
  }

  static secp256k1FromBytes(encoded: Uint8Array): Secp256k1PrivateKey {
    if (encoded.length !== ECConfig.PRIVATE_KEY_BYTE_SIZE) {
      throw new ApolloError.ECPublicKeyInitialization();
    }
    const bnprv = new BN(encoded);
    return new Secp256k1PrivateKey(Uint8Array.from(bnprv.toArray()));
  }

  public readonly to = {
    Buffer: () => Buffer.from(this.getEncoded()),
    Hex: () => this.to.Buffer().toString("hex"),
  };

  static from = {
    Buffer: (value: Buffer) =>
      Secp256k1PrivateKey.secp256k1FromBytes(new Uint8Array(value)),
    Hex: (value: string) =>
      Secp256k1PrivateKey.from.Buffer(Buffer.from(value, "hex")),
    String: (value: string) =>
      Secp256k1PrivateKey.from.Buffer(Buffer.from(value)),
  };
}
