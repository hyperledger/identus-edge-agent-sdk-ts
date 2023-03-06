import { BN } from "bn.js";

export class BNHelper {
  private static BASE16 = 16;
  public static getBN(bigint: bigint) {
    return new BN(bigint.toString(BNHelper.BASE16), BNHelper.BASE16);
  }
}
