export class DerivationAxis {
  constructor(private readonly i: number) {}

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

  static normal(num: number): DerivationAxis {
    if (num < 0) {
      throw new Error(
        "number corresponding to the axis should be a positive number"
      );
    }
    return new DerivationAxis(num);
  }

  static hardened(num: number): DerivationAxis {
    if (num < 0) {
      throw new Error(
        "number corresponding to the axis should be a positive number"
      );
    }
    return new DerivationAxis(num | (1 << 31));
  }
}
