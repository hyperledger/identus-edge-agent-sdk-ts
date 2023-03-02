import { CastorError } from "./Errors";

export class PrismDIDMethodId {
  private value: string;

  constructor(valueOrSections: string | string[]) {
    if (typeof valueOrSections === "string") {
      this.value = valueOrSections;
    } else {
      this.value = valueOrSections.join(":");
      const sectionRegex = /^[A-Za-z0-9_-]+$/;
      if (!valueOrSections.every((section) => sectionRegex.test(section))) {
        throw new CastorError.MethodIdIsDoesNotSatisfyRegex();
      }
      const methodSpecificIdRegex = /^([A-Za-z0-9_-]*:)*[A-Za-z0-9_-]+$/;
      if (!methodSpecificIdRegex.test(this.value)) {
        throw new CastorError.MethodIdIsDoesNotSatisfyRegex();
      }
    }
  }

  get sections(): string[] {
    return this.value.split(":");
  }

  toString(): string {
    return this.value;
  }
}
