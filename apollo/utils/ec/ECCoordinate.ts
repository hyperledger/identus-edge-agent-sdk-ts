import BN from "bn.js";

export class ECCoordinate {
  private static PRIVATE_KEY_BYTE_SIZE = 32;

  constructor(public coordinate: BN) {}

  bytes(): Uint8Array {
    return Buffer.from(
      new Array(ECCoordinate.PRIVATE_KEY_BYTE_SIZE)
        .fill(0)
        .concat(this.coordinate)
    );
  }
}
