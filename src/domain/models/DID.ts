import { InvalidDIDString } from "./errors/Castor";

export class DID {
  public readonly schema: string;
  public readonly method: string;
  public readonly methodId: string;

  constructor(schema: string, method: string, methodId: string) {
    this.schema = schema;
    this.method = method;
    this.methodId = methodId;
  }

  toString() {
    return `${this.schema}:${this.method}:${this.methodId}`;
  }

  /**
   * parse value into a DID
   * @param {DID | string} value - some representation of a DID
   * @returns {DID}
   */
  static from(value: DID | string): DID {
    if (value instanceof DID) {
      return value;
    }

    if (typeof value === "string") {
      return DID.fromString(value);
    }

    throw new Error("Invalid DID value");
  }

  static fromString(text: string): DID {
    const schema = DID.getSchemaFromString(text);
    const method = DID.getMethodFromString(text);
    const methodId = DID.getMethodIdFromString(text);

    if (schema === undefined) {
      throw new InvalidDIDString("Invalid DID string, missing scheme");
    }
    if (method === undefined) {
      throw new InvalidDIDString("Invalid DID string, missing method name");
    }
    if (methodId === undefined) {
      throw new InvalidDIDString("Invalid DID string, missing method ID");
    }

    return new DID(schema, method, methodId);
  }

  static getSchemaFromString(text: string): string | undefined {
    const split = text.split(":");
    return split.at(0);
  }

  static getMethodFromString(text: string): string | undefined {
    const split = text.split(":");
    return split.at(1);
  }

  static getMethodIdFromString(text: string): string {
    const split = text.split(":");
    return split.slice(2).join(":");
  }
}
