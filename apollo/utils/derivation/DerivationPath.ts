import { DerivationAxis } from "./DerivationAxis";

export class DerivationPath {
  axes: DerivationAxis[];

  constructor(axes: DerivationAxis[]) {
    this.axes = axes;
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
   * Parses string representation of derivation path
   *
   * @param path Path to parse in format m/axis1/axis2/.../axisn where all axes are number between 0 and 2^31^ - 1 and
   * optionally a ' added after to mark hardened axis e.g. m/21/37'/0
   */
  static fromPath(path: string): DerivationPath {
    const splitPath = path.split("/");
    if (splitPath[0].trim().toLowerCase() !== "m") {
      throw new Error("Path needs to start with m or M");
    } else {
      return new DerivationPath(
        splitPath.slice(1).map(DerivationPath.parseAxis)
      );
    }
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
