import { Curve, JWK } from "../../../domain";
import { expect } from "../../../utils";


export function isECJWK(jwk: JWK): jwk is JWK.EC {
    const kty = expect(jwk.kty);
    const crv = expect(jwk.crv);
    if (kty !== "EC") {
        return false;
    }
    if (crv !== Curve.SECP256K1 && crv !== Curve.ED25519 && crv !== Curve.X25519) {
        return false;
    }
    return true;
}

export function isOKPJWK(jwk: JWK): jwk is JWK.OKP {
    throw new Error("Not Supported");
}