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

  static fromString(text: string): DID {
    return new DID(
      DID.getSchemaFromString(text),
      DID.getMethodFromString(text),
      DID.getMethodIdFromString(text)
    );
  }

  static getSchemaFromString(text: string): string {
    const split = text.split(":");
    return split[0];
  }

  static getMethodFromString(text: string): string {
    const split = text.split(":");
    return split[1];
  }

  static getMethodIdFromString(text: string): string {
    const split = text.split(":");
    return split.slice(2).join(":");
  }
}
