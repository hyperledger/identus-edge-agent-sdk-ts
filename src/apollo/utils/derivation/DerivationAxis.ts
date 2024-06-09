import { ApolloError } from "../../../domain";

export class DerivationAxis {
  constructor(private readonly i: number) { }

  /**
   * Represents if the axis is hardened
   */
  get hardened(): boolean {
    return ((this.i >> 31) & 1) == 1;
  }

  /**
   * Number corresponding to the axis (different for index), always between 0 and 2^31^
   */
  get number(): number {
    return this.i & ~(1 << 31);
  }

  /**
   * Renders axis as number with optional ' for hardened path, e.g. 1 or 7'
   */
  toString(): string {
    return this.hardened ? `${this.number}'` : `${this.i}`;
  }

  private static safeCast(num: any): number {
    const safeNum = parseInt(num)
    if (Number.isNaN(safeNum)) {
      throw new ApolloError.InvalidDerivationPath(
        "Invalid axis, not a number"
      );
    }
    return safeNum
  }

  static normal(num: number): DerivationAxis {
    const safeNum = this.safeCast(num)
    if (safeNum < 0) {
      throw new ApolloError.InvalidDerivationPath(
        "Number corresponding to the axis should be a positive number"
      );
    }
    return new DerivationAxis(safeNum);
  }

  static hardened(num: number): DerivationAxis {
    const safeNum = this.safeCast(num)
    if (safeNum < 0) {
      throw new ApolloError.InvalidDerivationPath(
        "Number corresponding to the axis should be a positive number"
      );
    }
    return new DerivationAxis(safeNum | (1 << 31));
  }
}
