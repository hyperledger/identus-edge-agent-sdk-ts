import { ApolloError } from "../../../domain";
import { DerivationPathBase } from "./core";
import { DerivationAxis } from "./DerivationAxis";
import { DeprecatedDerivationPath } from "./schemas/DeprecatedDerivation";
import { PrismDerivationPath } from "./schemas/PrismDerivation";

const SCHEMAS = [
  PrismDerivationPath,
  DeprecatedDerivationPath,
];

type DerivationClass = typeof SCHEMAS extends Array<infer T> ? T : never;

export class DerivationPath {

  private static create(DerivationClass: DerivationClass, paths: number[]): DerivationPathBase<any> | undefined {
    try {
      const path = new DerivationClass(paths);
      return path;
    } catch (err) {
      if (!(err instanceof ApolloError.InvalidDerivationPath)) {
        throw err
      }
    }
  }

  private static callBackOrThrow(
    paths: number[],
    cb: (path: DerivationPathBase<any>) => any
  ) {
    for (const DerivationClass of SCHEMAS) {
      const path = this.create(DerivationClass, paths);
      if (path) {
        return cb(path);
      }
    }
    throw new ApolloError.InvalidDerivationPath("DerivationPathErr Incompatible Derivation schema");
  }

  get axes(): DerivationAxis[] {
    return this.paths.map((path) => new DerivationAxis(path))
  }

  get index() {
    return DerivationPath.callBackOrThrow(
      this.paths,
      (path) => path.index
    )
  }

  at(index: number): number {
    const num = this.paths.at(index);
    if (num !== undefined) {
      return num
    }
    throw new ApolloError.InvalidDerivationPath("DerivationPathErr Incompatible Derivation schema");
  }

  get schema() {
    return DerivationPath.callBackOrThrow(
      this.paths,
      (path) => path.schema
    )
  }

  constructor(
    private paths: number[]
  ) {
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
    return DerivationPath.callBackOrThrow(
      this.paths,
      (path) => `m/${path.axes.map((axis) => axis.toString()).join("/")}`
    )
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
        return DerivationPath.callBackOrThrow(
          paths,
          (path) => new DerivationPath(path.axes.map((a) => a.number))
        )
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















