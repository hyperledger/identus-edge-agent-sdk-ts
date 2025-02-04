export enum Curve {
  X25519 = "X25519",
  ED25519 = "Ed25519",
  SECP256K1 = "secp256k1",
}

export function isCurve(curve: string, curveEnum: Curve): boolean {
  return curve === curveEnum ||
    // For backwards compatibility
    curve === 'Secp256k1';
}
