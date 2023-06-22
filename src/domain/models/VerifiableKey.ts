export abstract class VerifiableKey {
  abstract verify(message: Buffer, signature: Buffer): boolean;
}
