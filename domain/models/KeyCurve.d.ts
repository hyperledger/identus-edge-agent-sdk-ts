export interface KeyCurve {
    curve: Curve;
    index?: number;
}
export declare enum Curve {
    X25519 = "X25519",
    ED25519 = "Ed25519",
    SECP256K1 = "secp256k1"
}
export declare function getKeyCurveByNameAndIndex(name: string, index?: number): KeyCurve;
