export enum Curve {
  X25519 = "X25519",
  ED25519 = "Ed25519",
  SECP256K1 = "secp256k1",
}

export function isCurve(curve: string, curveEnum: Curve): boolean {
  if (curve === curveEnum) {
    return true;
  }
  if (curve.toLocaleLowerCase() === curveEnum.toLocaleLowerCase()) {
    return true;
  }
  return false;
}
