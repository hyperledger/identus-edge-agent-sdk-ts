export default class ConnectionError extends Error {
  constructor(message: string) {
    super(message || "Connection error occurred");
  }
}
