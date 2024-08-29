export class SDKError extends Error {
  constructor(code: number, message: string) {
    super(`${code}: ${message}`);
    this.name = this.constructor.name;
  }
}

export class UnknownError extends SDKError {
  constructor() { super(-1, "Something went wrong"); }
}

export class ExpectError extends SDKError {
  constructor(msg?: string) { super(-1, msg ?? "value should exist"); }
}
