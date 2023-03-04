import BN from "bn.js";
import * as elliptic from "elliptic";
import BigInteger from "bn.js";

import { ECConfig } from "../../config/ECConfig";
import { ECCoordinate } from "./ec/ECCoordinate";
import { ECPoint } from "./ec/ECPoint";
import { ApolloError } from "../../domain/models/Errors";
import { Secp256k1KeyCommon } from "./Secp256k1KeyCommon";

abstract class Secp256k1PublicKeyCommon {
  abstract getEncodedCompressed(): Uint8Array;
  abstract getCurvePoint(): ECPoint;
}

export class Secp256k1PublicKey
  extends Secp256k1KeyCommon
  implements Secp256k1PublicKeyCommon
{
  constructor(
    private nativeValue: elliptic.curve.base.BasePoint,
    private ecPoint: ECPoint = Secp256k1PublicKey.computeCurvePoint(nativeValue)
  ) {
    if (!Secp256k1PublicKey.isPointOnSecp256k1Curve(ecPoint)) {
      throw new ApolloError.ECPublicKeyInitialization();
    }

    super();
  }

  getEncodedCompressed(): Uint8Array {
    const size = ECConfig.PRIVATE_KEY_BYTE_SIZE;
    const curvePoint = this.getCurvePoint();
    const yArr = curvePoint.y.bytes();
    const xArr = curvePoint.x.bytes();
    const prefix = 2 + (yArr[yArr.length - 1] & 1);
    const arr = new Uint8Array(1 + size);
    arr[0] = prefix;
    arr.set(xArr, 1);
    return arr;
  }

  getEncoded(): Uint8Array {
    //TODO: Fix here also,why each time we encode using that library its adding encoding
    return Uint8Array.from(this.nativeValue.encode("array", false));
  }

  getCurvePoint(): ECPoint {
    return this.ecPoint;
  }

  static computeCurvePoint(basePoint: elliptic.curve.base.BasePoint): ECPoint {
    const xBigInt = new ECCoordinate(basePoint.getX());
    const yBigInt = new ECCoordinate(basePoint.getY());
    return new ECPoint(xBigInt, yBigInt);
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
    const expectedLength = 1 + 2 * ECConfig.PRIVATE_KEY_BYTE_SIZE;
    if (encoded.length !== expectedLength) {
      throw new Error(
        `Encoded byte array's expected length is ${expectedLength}, but got ${encoded.length} bytes`
      );
    }
    if (encoded[0] !== 0x04) {
      throw new Error(
        `First byte was expected to be 0x04, but got ${encoded[0]}`
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
    const xCoord = x.toBuffer();
    const yCoord = y.toBuffer();
    const keyPair = this.ec.keyFromPublic({
      x: xCoord.toString("hex"),
      y: yCoord.toString("hex"),
    });
    return new Secp256k1PublicKey(keyPair.getPublic());
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
}
