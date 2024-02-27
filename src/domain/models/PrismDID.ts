import { DID } from "./DID";
import { CastorError } from "./Errors";
import { PrivateKey } from "./keyManagement";

export class PrismDID {
  constructor(
    public readonly did: DID,
    public readonly privateKey: PrivateKey,
    public readonly alias?: string
  ) {}

  static parseMethodId(value: string | string[]): string {
    if (typeof value === "string") {
      return value;
    }

    const sectionRegex = /^[A-Za-z0-9_-]+$/;

    if (!value.every((section) => sectionRegex.test(section))) {
      throw new CastorError.MethodIdIsDoesNotSatisfyRegex();
    }

    const joined = value.join(":");
    const methodSpecificIdRegex = /^([A-Za-z0-9_-]*:)*[A-Za-z0-9_-]+$/;

    if (!methodSpecificIdRegex.test(joined)) {
      throw new CastorError.MethodIdIsDoesNotSatisfyRegex();
    }

    return joined;
  }
}
