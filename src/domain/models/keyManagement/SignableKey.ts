export abstract class SignableKey {
  abstract sign(message: Buffer): Buffer;
}
