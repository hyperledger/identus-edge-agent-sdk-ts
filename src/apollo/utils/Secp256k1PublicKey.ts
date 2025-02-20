import BN from "bn.js";
import BigInteger from "bn.js";

import * as ECConfig from "../../domain/models/ECConfig";
import { ECPoint } from "./ec/ECPoint";
import { ApolloError, Curve, KeyProperties, KeyTypes, } from "../../domain";
import {
  PublicKey,
  ExportableKey,
  ImportableKey,
  StorableKey,
  VerifiableKey
} from "../../domain/models/keyManagement";

import ApolloPKG from "@hyperledger/identus-apollo";
const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;

/**
 * @ignore
 */
export class Secp256k1PublicKey extends PublicKey implements StorableKey, ExportableKey, VerifiableKey {
  public readonly recoveryId = StorableKey.recoveryId("secp256k1", "pub");

  public keySpecification: Map<KeyProperties | string, string> = new Map();
  public size: number;
  public raw: Uint8Array;
  public type = KeyTypes.EC;

  public readonly to = ExportableKey.factory(this, { pemLabel: "EC PUBLIC KEY" });
  static from = ImportableKey.factory(Secp256k1PublicKey, { pemLabel: "EC PUBLIC KEY" });

  public get isCompressed() {
    return (
      this.keySpecification.has("compressed") &&
      this.keySpecification.get("compressed") === "true"
    );
  }

  private get native() {
    return ApolloSDK.utils.KMMECSecp256k1PublicKey.Companion.secp256k1FromBytes(
      Int8Array.from(this.raw)
    );
  }

  constructor(nativeValue: Uint8Array) {
    super();

    const isCompressed =
      nativeValue.length === ECConfig.PUBLIC_KEY_COMPRESSED_BYTE_SIZE;

    const isUnCompressed =
      nativeValue.length === 1 + 2 * ECConfig.PRIVATE_KEY_BYTE_SIZE &&
      nativeValue.at(0) === 0x04;

    if (!isCompressed && !isUnCompressed) {
      throw new ApolloError.KeyInitializationError(`Invalid key bytes`);
    }
    this.keySpecification.set(KeyProperties.curve, Curve.SECP256K1);
    this.keySpecification.set("compressed", isCompressed ? "true" : "false");

    if (!isCompressed) {
      const xBytes = nativeValue.slice(1, 1 + ECConfig.PRIVATE_KEY_BYTE_SIZE);
      const yBytes = nativeValue.slice(
        1 + ECConfig.PRIVATE_KEY_BYTE_SIZE,
        nativeValue.length
      );

      this.keySpecification.set(
        KeyProperties.curvePointX,
        Buffer.from(xBytes).toString("hex")
      );
      this.keySpecification.set(
        KeyProperties.curvePointY,
        Buffer.from(yBytes).toString("hex")
      );
    } else {
      const xBytes = nativeValue.slice(1, 1 + ECConfig.PRIVATE_KEY_BYTE_SIZE);

      this.keySpecification.set(
        KeyProperties.curvePointX,
        Buffer.from(xBytes).toString("hex")
      );
    }

    this.raw = nativeValue;
    this.size = this.raw.length;
  }

  getEncoded(): Uint8Array {
    if (this.isCompressed) {
      if (this.raw.length !== ECConfig.PUBLIC_KEY_COMPRESSED_BYTE_SIZE) {
        throw new Error(
          `Compressed byte array's expected length is ${ECConfig.PUBLIC_KEY_COMPRESSED_BYTE_SIZE}, but got ${this.raw.length}`
        );
      }
    }

    return this.raw;
  }

  getEncodedCompressed(): Uint8Array {
    if (this.isCompressed) {
      return this.raw;
    }

    const expectedLength = 1 + 2 * ECConfig.PRIVATE_KEY_BYTE_SIZE;
    if (this.raw.length !== expectedLength) {
      throw new Error(
        `Encoded byte array's expected length is ${expectedLength}, but got ${this.raw.length} bytes`
      );
    }
    if (this.raw.at(0) !== 0x04) {
      throw new Error(
        `First byte was expected to be 0x04, but got ${this.raw.at(0)}`
      );
    }

    const size = ECConfig.PRIVATE_KEY_BYTE_SIZE;
    const xArr = this.raw.slice(1, 1 + ECConfig.PRIVATE_KEY_BYTE_SIZE);
    const yArr = this.raw.slice(
      1 + ECConfig.PRIVATE_KEY_BYTE_SIZE,
      this.raw.length
    );

    const lastY = yArr.at(-1) ?? 0;
    const prefix = 2 + (lastY & 1);
    const arr = new Uint8Array(1 + size);
    arr[0] = prefix;
    arr.set(xArr, 1);
    return arr;
  }

  static isPointOnSecp256k1Curve(point: ECPoint): boolean {
    const x = point.x.coordinate;
    const y = point.y.coordinate;
    // Elliptic curve equation for Secp256k1
    return y
      .sqr()
      .isub(x.pow(new BN(3)).iadd(ECConfig.b))
      .mod(ECConfig.p)
      .eq(new BN(0));
  }

  static secp256k1FromBytes(encoded: Uint8Array): Secp256k1PublicKey {
    return new Secp256k1PublicKey(
      Uint8Array.from(
        ApolloSDK.utils.KMMECSecp256k1PublicKey.Companion.secp256k1FromBytes(
          Int8Array.from(encoded)
        ).raw
      )
    );
  }

  static secp256k1FromByteCoordinates(
    x: Uint8Array,
    y: Uint8Array
  ): Secp256k1PublicKey {
    const xTrimmed = Array.from(x).slice(x.findIndex((byte) => byte !== 0));
    if (xTrimmed.length > ECConfig.PUBLIC_KEY_COORDINATE_BYTE_SIZE) {
      throw new Error(
        `Expected x coordinate byte length to be less than or equal ${ECConfig.PUBLIC_KEY_COORDINATE_BYTE_SIZE}, but got ${xTrimmed.length} bytes`
      );
    }
    const yTrimmed = Array.from(y).slice(y.findIndex((byte) => byte !== 0));
    if (yTrimmed.length > ECConfig.PUBLIC_KEY_COORDINATE_BYTE_SIZE) {
      throw new Error(
        `Expected y coordinate byte length to be less than or equal ${ECConfig.PUBLIC_KEY_COORDINATE_BYTE_SIZE}, but got ${yTrimmed.length} bytes`
      );
    }
    const xInteger = new BN(xTrimmed);
    const yInteger = new BN(yTrimmed);
    return this.secp256k1FromBigIntegerCoordinates(xInteger, yInteger);
  }

  static secp256k1FromBigIntegerCoordinates(
    x: BigInteger,
    y: BigInteger
  ): Secp256k1PublicKey {
    const xCoord = Buffer.from(x.toArray());
    const yCoord = Buffer.from(y.toArray());
    const publicKey =
      ApolloSDK.utils.KMMECSecp256k1PublicKey.Companion.secp256k1FromByteCoordinates(
        Int8Array.from(xCoord),
        Int8Array.from(yCoord)
      );
    return new Secp256k1PublicKey(Uint8Array.from(publicKey.raw));
  }

  verify(message: Buffer, signature: Buffer) {
    return this.native.verify(
      Int8Array.from(signature),
      Int8Array.from(message)
    );
  }
}
