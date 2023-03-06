import BN from "bn.js";

export class ECCoordinate {
  private static PRIVATE_KEY_BYTE_SIZE = 32;

  constructor(public coordinate: BN) {}

  bytes(): Uint8Array {
    const size = ECCoordinate.PRIVATE_KEY_BYTE_SIZE;
    const bytes = this.coordinate.toArrayLike(Buffer, "be", size);
    const padding = new Uint8Array(size - bytes.length);
    return new Uint8Array([...padding, ...bytes]);
  }
}
