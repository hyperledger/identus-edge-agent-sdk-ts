
export class SomethingWentWrongError extends Error {
  constructor(message?: string) {
    super(message);
  }
}
