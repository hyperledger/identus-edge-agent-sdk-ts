import { DerivationAxis } from "./DerivationAxis";

export class DerivationPath {
  axes: DerivationAxis[];

  constructor(axes: DerivationAxis[]) {
    this.axes = axes;
  }

  /**
   * get the index at depth 0.
   * default to 0 if no value found
   * 
   * @returns {number} - the value at depth 0
   */
  get index(): number {
    const first = this.axes.at(0);
    const index = first?.number ?? 0;
    return index;
  }

  /**
   * Creates child derivation path for given index, hardened or not
   */
  derive(axis: DerivationAxis): DerivationPath {
    return new DerivationPath([...this.axes, axis]);
  }

  toString(): string {
    return ["m", ...this.axes.map((axis) => axis.toString())].join("/");
  }

  static empty(): DerivationPath {
    return new DerivationPath([]);
  }

  /**
   * Attempt to create a DerivationPath from a value
   * 
   * @param value 
   * @returns {DerivationPath}
   * @throws - if the value cannot be converted to a DerivationPath
   */
  static from(value: unknown): DerivationPath {
    if (value instanceof DerivationPath) {
      return value;
    }

    if (typeof value === "string") {
      if (value.at(0) === "m") {
        return DerivationPath.fromPath(value);
      }
    }

    if (typeof value === "number") {
      return DerivationPath.fromIndex(value);
    }

    throw new Error(`DerivationPath value not valid [${value}]`);
  }


  /**
   * Create a DerivationPath from an index
   * 
   * index is hardened and used at depth 1, with two subsequent hardened 0s
   * Example: index: 3 = DerivationPath: `m/3'/0'/0'`
   * 
   * equivalent of Swift DerivableKey.keyPathString
   * 
   * @param index - hardened index for depth 1
   * @returns {DerivationPath}
   */
  static fromIndex(index: number): DerivationPath {
    return new DerivationPath([
      DerivationAxis.hardened(index),
      DerivationAxis.hardened(0),
      DerivationAxis.hardened(0),
    ]);
  }

  /**
   * Parses string representation of derivation path
   *
   * @param path Path to parse in format m/axis1/axis2/.../axisn where all axes are number between 0 and 2^31^ - 1 and
   * optionally a ' added after to mark hardened axis e.g. m/21/37'/0
   */
  static fromPath(path: string): DerivationPath {
    const splitPath = path.split("/");
    if (splitPath.at(0)?.trim().toLowerCase() !== "m") {
      throw new Error("Path needs to start with m or M");
    }

    return new DerivationPath(
      splitPath.slice(1).map(DerivationPath.parseAxis)
    );
  }

  private static parseAxis(axis: string): DerivationAxis {
    const hardened = axis.endsWith("'");
    const axisNumStr = hardened ? axis.substring(0, axis.length - 1) : axis;
    const axisNum = parseInt(axisNumStr);
    return hardened
      ? DerivationAxis.hardened(axisNum)
      : DerivationAxis.normal(axisNum);
  }
}
