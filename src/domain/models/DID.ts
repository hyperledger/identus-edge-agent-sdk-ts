import { Pluto } from "../buildingBlocks/Pluto";
import { InvalidDIDString } from "./errors/Castor";

export class DID implements Pluto.Storable {
  public readonly uuid: string;
  public readonly schema: string;
  public readonly method: string;
  public readonly methodId: string;

  constructor(schema: string, method: string, methodId: string) {
    this.schema = schema;
    this.method = method;
    this.methodId = methodId;
    this.uuid = this.toString();
  }

  toString() {
    return `${this.schema}:${this.method}:${this.methodId}`;
  }

  /**
   * parse value into a DID
   * @param {DID | string} value - some representation of a DID
   * @returns {DID}
   */
  static from(value: DID | string | unknown): DID {
    if (value instanceof DID) {
      return value;
    }

    if (typeof value === "string") {
      return DID.fromString(value);
    }

    if (
      typeof value === "object" && value !== null
      && "method" in value && typeof value.method === "string"
      && "methodId" in value && typeof value.methodId === "string"
      && "schema" in value && typeof value.schema === "string"
    ) {
      return new DID(value.schema, value.method, value.methodId);
    }

    throw new Error("Invalid DID value");
  }

  static fromString(text: string): DID {
    const schema = DID.getSchemaFromString(text);
    const method = DID.getMethodFromString(text);
    const methodId = DID.getMethodIdFromString(text);

    if (schema === undefined) {
      throw new InvalidDIDString("Invalid DID string, missing schema");
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
