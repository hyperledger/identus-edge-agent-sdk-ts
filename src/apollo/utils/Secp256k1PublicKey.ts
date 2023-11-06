import BN from "bn.js";
import elliptic from "elliptic";
import BigInteger from "bn.js";

import * as ECConfig from "../../config/ECConfig";
import { ECCoordinate } from "./ec/ECCoordinate";
import { ECPoint } from "./ec/ECPoint";

import {
  ApolloError,
  Curve,
  KeyTypes,
  KeyProperties,
  PublicKey,
  StorableKey,
  VerifiableKey
} from "../../domain";

/**
 * @ignore
 */
export class Secp256k1PublicKey extends PublicKey implements StorableKey, VerifiableKey {
  public static ec: elliptic.ec = new elliptic.ec("secp256k1");
  public readonly recoveryId = "secp256k1+pub";

  public type: KeyTypes = KeyTypes.EC;
  public keySpecification: Map<KeyProperties | string, string> = new Map();
  public size;
  public raw: Uint8Array;
  public get isCompressed() {
    return (
      this.keySpecification.has("compressed") &&
      this.keySpecification.get("compressed") === "true"
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
      throw new ApolloError.ECPublicKeyInitialization();
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

  get storableData() {
    return this.raw;
  }

  getEncoded(): Uint8Array {
    if (this.isCompressed) {
      if (this.raw.length !== ECConfig.PUBLIC_KEY_COMPRESSED_BYTE_SIZE) {
        throw new Error(
          `Compressed byte array's expected length is ${ECConfig.PUBLIC_KEY_COMPRESSED_BYTE_SIZE}, but got ${this.raw.length}`
        );
      }
      const point = Secp256k1PublicKey.ec.curve.decodePoint(this.raw);
      const uncompressedEncoding = point.encode();
      return Uint8Array.from(uncompressedEncoding);
    }

    return this.raw;
  }

  // constructor(
  //   private nativeValue: elliptic.curve.base.BasePoint,
  //   private ecPoint: ECPoint = Secp256k1PublicKey.computeCurvePoint(nativeValue)
  // ) {
  //   if (!Secp256k1PublicKey.isPointOnSecp256k1Curve(ecPoint)) {
  //     throw new ApolloError.ECPublicKeyInitialization();
  //   }

  //   super();

  // }

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

  static computeCurvePoint(basePoint: elliptic.curve.base.BasePoint): ECPoint {
    const xBigInt = new ECCoordinate(basePoint.getX());
    const yBigInt = new ECCoordinate(basePoint.getY());
    return new ECPoint(xBigInt, yBigInt);
  }

  static secp256k1FromBytes(encoded: Uint8Array): Secp256k1PublicKey {
    const expectedLength = 1 + 2 * ECConfig.PRIVATE_KEY_BYTE_SIZE;
    if (encoded.length !== expectedLength) {
      throw new Error(
        `Encoded byte array's expected length is ${expectedLength}, but got ${encoded.length} bytes`
      );
    }
    if (encoded.at(0) !== 0x04) {
      throw new Error(
        `First byte was expected to be 0x04, but got ${encoded.at(0)}`
      );
    }

    const xBytes = encoded.slice(1, 1 + ECConfig.PRIVATE_KEY_BYTE_SIZE);
    const yBytes = encoded.slice(
      1 + ECConfig.PRIVATE_KEY_BYTE_SIZE,
      encoded.length
    );
    return this.secp256k1FromByteCoordinates(xBytes, yBytes);
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
    const keyPair = this.ec.keyFromPublic({
      x: xCoord.toString("hex"),
      y: yCoord.toString("hex"),
    });
    const publicKey = keyPair.getPublic().encode("array", false);
    return new Secp256k1PublicKey(Uint8Array.from(publicKey));
  }

  static secp256k1FromCompressed(compressed: Uint8Array): Secp256k1PublicKey {
    if (compressed.length !== ECConfig.PUBLIC_KEY_COMPRESSED_BYTE_SIZE) {
      throw new Error(
        `Compressed byte array's expected length is ${ECConfig.PUBLIC_KEY_COMPRESSED_BYTE_SIZE}, but got ${compressed.length}`
      );
    }
    const point = this.ec.curve.decodePoint(compressed);
    const uncompressedEncoding = point.encode();
    return Secp256k1PublicKey.secp256k1FromBytes(uncompressedEncoding);
  }

  verify(message: Buffer, signature: Buffer) {
    const publicKeyBuffer = Buffer.from(this.getEncodedCompressed());
    return Secp256k1PublicKey.ec.verify(
      message,
      signature,
      Buffer.from(publicKeyBuffer)
    );
  }
}
