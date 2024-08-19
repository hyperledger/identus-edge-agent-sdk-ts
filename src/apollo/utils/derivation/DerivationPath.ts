import { ApolloError } from "../../../domain";
import { DerivationClass, DerivationPathBase } from "../../../domain/models/derivation";
import { DerivationAxis } from "../../../domain/models/derivation/DerivationAxis";

export class DerivationPath {
  constructor(
    private paths: number[],
    private derivations: DerivationClass[]
  ) {
  }

  get axes(): DerivationAxis[] {
    return this.paths.map((path) => new DerivationAxis(path));
  }

  get index() {
    return DerivationPath.callBackOrThrow(
      this.derivations,
      this.paths,
      (path) => path.index
    );
  }

  at(index: number): number {
    const num = this.paths.at(index);
    if (num !== undefined) {
      return num;
    }
    throw new ApolloError.InvalidDerivationPath("DerivationPathErr Incompatible Derivation schema");
  }

  get schema() {
    return DerivationPath.callBackOrThrow(
      this.derivations,
      this.paths,
      (path) => path.schema
    );
  }

  derive(axis: DerivationAxis): DerivationPath {
    return new DerivationPath([
      ...this.paths,
      axis.number
    ], this.derivations);
  }

  static empty(derivations: DerivationClass[]): DerivationPath {
    return new DerivationPath([], derivations);
  }

  toString(): string {
    if (!this.axes.length) {
      throw new ApolloError.InvalidDerivationPath("DerivationPathErr Derivation path is empty");
    }
    return DerivationPath.callBackOrThrow(
      this.derivations,
      this.paths,
      (path) => `m/${path.axes.map((axis) => axis.toString()).join("/")}`
    );
  }

  /**
   * Parses string representation of derivation path
   *
   * @param path Path to parse in format m/axis1/axis2/.../axisn where all axes are number between 0 and 2^31^ - 1 and
   * optionally a ' added after to mark hardened axis e.g. m/21/37'/0
   */
  static fromPath(path: string, derivations: DerivationClass[]): DerivationPath {
    if (typeof path === "string") {
      const splitPath = path.split("/");
      if (splitPath.at(0)?.trim().toLowerCase() !== "m") {
        throw new ApolloError.InvalidDerivationPath("Path needs to start with m or M");
      }
      const paths = splitPath.slice(1).map(DerivationPath.parseAxis).map((a) => a.number);
      return DerivationPath.callBackOrThrow(
        derivations,
        paths,
        (path) => new DerivationPath(path.axes.map((a) => a.number), derivations)
      );
    }
    throw new ApolloError.InvalidDerivationPath(`Derivation path should be string`);

  }

  private static parseAxis(axis: string): DerivationAxis {
    const hardened = axis.endsWith("'");
    const axisNumStr = hardened ? axis.substring(0, axis.length - 1) : axis;
    const axisNum = parseInt(axisNumStr);
    return hardened
      ? DerivationAxis.hardened(axisNum)
      : DerivationAxis.normal(axisNum);
  }


  private static create(
    DerivationClass: DerivationClass,
    paths: number[]
  ): DerivationPathBase<any> | undefined {
    try {
      const path = new DerivationClass(paths);
      return path;
    } catch (err) {
      if (!(err instanceof ApolloError.InvalidDerivationPath)) {
        throw err;
      }
    }
  }

  private static callBackOrThrow(
    derivations: DerivationClass[],
    paths: number[],
    cb: (path: DerivationPathBase<any>) => any
  ) {
    for (const DerivationClass of derivations) {
      const path = this.create(DerivationClass, paths);
      if (path) {
        return cb(path);
      }
    }
    throw new ApolloError.InvalidDerivationPath("DerivationPathErr Incompatible Derivation schema");
  }

}
