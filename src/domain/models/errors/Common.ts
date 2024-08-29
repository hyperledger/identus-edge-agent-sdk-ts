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

export class ValidationError extends SDKError {
  constructor(public readonly errors?: string[]) {
    const msg = errors?.join(" | ");
    super(-1, msg ?? "Validation failed");
  }
}
