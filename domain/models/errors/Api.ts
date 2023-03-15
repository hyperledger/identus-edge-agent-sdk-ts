export class InvalidRequestPath extends Error {
  constructor(path: string) {
    super(`Invalid request ${path}, must start with slash.`);
  }
}
