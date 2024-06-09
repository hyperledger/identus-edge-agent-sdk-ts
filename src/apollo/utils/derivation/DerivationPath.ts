import { ApolloError } from "../../../domain";
import { DerivationAxis } from "./DerivationAxis";
import { DeprecatedDerivationPath } from "./schemas/DeprecatedDerivation";
import { IdentusDerivationPath } from "./schemas/IdentusDerivation";

export class DerivationPath {
  static resolvers = [
    IdentusDerivationPath,
    DeprecatedDerivationPath,
  ]

  constructor(
    private paths: number[]
  ) {
  }

  get axes(): DerivationAxis[] {
    return this.paths.map((path) => new DerivationAxis(path))
  }

  get index(): number {
    const first = this.axes.at(0);
    const index = first?.number ?? 0;
    return index;
  }

  derive(axis: DerivationAxis): DerivationPath {
    return new DerivationPath([
      ...this.paths,
      axis.number
    ]);
  }

  static empty(): DerivationPath {
    return new DerivationPath([]);
  }

  toString(): string {
    if (!this.axes.length) {
      throw new ApolloError.InvalidDerivationPath("DerivationPathErr Derivation path is empty");
    }

    let axes: DerivationAxis[] | undefined = [];
    for (let resolver of DerivationPath.resolvers) {
      try {
        const path = new resolver(this.paths);
        axes.push(...path.axes)
        return `m/${axes.map((axis) => axis.toString()).join("/")}`
      } catch (err) {
      }
    }
    throw new ApolloError.InvalidDerivationPath("DerivationPathErr Incompatible Derivation schema");
  }

  /**
   * Parses string representation of derivation path
   *
   * @param path Path to parse in format m/axis1/axis2/.../axisn where all axes are number between 0 and 2^31^ - 1 and
   * optionally a ' added after to mark hardened axis e.g. m/21/37'/0
   */
  static fromPath(path: string): DerivationPath {
    try {
      if (typeof path === "string") {
        const splitPath = path.split("/");
        if (splitPath.at(0)?.trim().toLowerCase() !== "m") {
          throw new ApolloError.InvalidDerivationPath("Path needs to start with m or M");
        }
        const paths = splitPath.slice(1).map(DerivationPath.parseAxis).map((a) => a.number);
        for (let resolver of DerivationPath.resolvers) {
          try {
            const resolved = new resolver(paths);
            return new DerivationPath(
              resolved.axes.map((a) => a.number)
            );
          } catch (err) {
            if (!(err instanceof ApolloError.InvalidDerivationPath)) {
              throw err
            }
          }
        }
        throw new ApolloError.InvalidDerivationPath(`Incompatible Derivation schema`)
      }
      throw new ApolloError.InvalidDerivationPath(`Derivation path should be string`)
    } catch (err) {
      throw new ApolloError.InvalidDerivationPath(`DerivationPathErr ${(err as Error).message}`)
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















