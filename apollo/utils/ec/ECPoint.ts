import BN from "bn.js";
import { ECCoordinate } from "./ECCoordinate";

export class ECPoint {
  constructor(public x: ECCoordinate, public y: ECCoordinate) {}

  static fromBigIntegersStrings(x: string, y: string): ECPoint {
    return new ECPoint(
      new ECCoordinate(new BN(x)),
      new ECCoordinate(new BN(y))
    );
  }

  static fromBigIntegers(x: BN, y: BN): ECPoint {
    return new ECPoint(new ECCoordinate(x), new ECCoordinate(y));
  }
}
