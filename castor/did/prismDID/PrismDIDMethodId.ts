import { CastorError } from "../../../domain/models/Errors";

export class PrismDIDMethodId {
  private readonly value: string;
  readonly sections: string[];

  constructor(value: string) {
    const sectionRegex = /^[A-Za-z0-9_-]+$/;
    const methodSpecificIdRegex = /^([A-Za-z0-9_-]*:)*[A-Za-z0-9_-]+$/;

    this.value = value;
    this.sections = value.split(":");

    if (!this.sections.every((section) => sectionRegex.test(section))) {
      throw new CastorError.MethodIdIsDoesNotSatisfyRegex();
    }
    if (!methodSpecificIdRegex.test(value)) {
      throw new CastorError.MethodIdIsDoesNotSatisfyRegex();
    }
  }

  static fromSections(sections: string[]): PrismDIDMethodId {
    return new PrismDIDMethodId(sections.join(":"));
  }

  toString(): string {
    return this.value;
  }
}
