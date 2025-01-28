export interface KeyCurve {
  curve: Curve;
  index?: number;
}

export enum Curve {
  X25519 = "X25519",
  ED25519 = "Ed25519",
  SECP256K1 = "secp256k1",
}

export function getKeyCurveByNameAndIndex(
  name: string,
  index?: number
): KeyCurve {
  switch (name) {
    case Curve.X25519:
      return { curve: Curve.X25519 };
    case Curve.ED25519:
      return { curve: Curve.ED25519 };
    case Curve.SECP256K1:
    default:
      return { curve: Curve.SECP256K1, index };
  }
}
