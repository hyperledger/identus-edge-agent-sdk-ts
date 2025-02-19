import { Domain } from "../../..";
import { expect, Task } from "../../../utils";

import { base64url } from "multiformats/bases/base64";
import { ApolloError, Curve, JWK, KeyPair, KeyProperties, KeyTypes, PrivateKey, PublicKey } from "../../../domain";
import { InvalidECParameters } from "../../../domain/models/errors/Apollo";


export function isECJWK(jwk: JWK): jwk is JWK.EC {
    if (jwk.kty !== "EC") {
        return false;
    }
    return true;
}

export function isOKPJWK(jwk: JWK): jwk is JWK.OKP {
    if (jwk.kty !== "OKP") {
        return false;
    }
    return true;
}


export function decodeJWKECParameter(coordinate: 'x' | 'y' | 'd', jwk: JWK.EC): Uint8Array {
    if (!jwk[coordinate]) {
        throw new InvalidECParameters(coordinate);
    }
    const coordinateValue = jwk[coordinate]!;
    try {
        const decoded = base64url.baseDecode(coordinateValue);
        return new Uint8Array(decoded);
    } catch (err) {
        throw new InvalidECParameters(coordinate);
    }
}



export interface Args {
    jwk: Domain.JWK;
}


export class FromJWK extends Task<Domain.PublicKey | Domain.KeyPair, Args> {

    private fromJWKEC(apollo: Domain.Apollo, jwk: JWK.EC): KeyPair | PrivateKey | PublicKey {
        const crv = expect(jwk.crv);
        const withCoordinates =
            jwk.x !== undefined ||
            jwk.y !== undefined;

        if (withCoordinates) {
            const decodedX = decodeJWKECParameter('x', jwk);
            const decodedY = decodeJWKECParameter('y', jwk);

            if (crv === Curve.SECP256K1) {
                let pk: PublicKey;
                let sk: PrivateKey;

                pk = apollo.createPublicKey({
                    [KeyProperties.curve]: Curve.SECP256K1,
                    [KeyProperties.type]: KeyTypes.EC,
                    [KeyProperties.curvePointX]: decodedX,
                    [KeyProperties.curvePointY]: decodedY
                });

                if (jwk.d !== undefined) {
                    const decodedD = decodeJWKECParameter('d', jwk);
                    sk = apollo.createPrivateKey({
                        [KeyProperties.curve]: Curve.SECP256K1,
                        [KeyProperties.type]: KeyTypes.EC,
                        [KeyProperties.rawKey]: decodedD
                    });

                    const keypair: Domain.KeyPair = {
                        privateKey: sk,
                        publicKey: pk,
                        curve: Curve.SECP256K1
                    }
                    return keypair;
                }
                return pk;
            }

            throw new ApolloError.InvalidKeyCurve(crv, [Curve.SECP256K1]);
        }

        if (jwk.d !== undefined) {
            if (crv !== Curve.SECP256K1 && crv !== Curve.ED25519 && crv !== Curve.X25519) {
                throw new ApolloError.InvalidKeyCurve();
            }
            const decodedD = decodeJWKECParameter('d', jwk);
            return apollo.createPrivateKey({
                [KeyProperties.curve]: Curve.SECP256K1,
                [KeyProperties.type]: KeyTypes.EC,
                [KeyProperties.rawKey]: decodedD
            })
        }

        throw new ApolloError.InvalidECParameters(['d', 'x and y']);
    }

    private fromJWKOKP(apollo: Domain.Apollo, jwk: JWK.OKP): KeyPair | PublicKey {
        const crv = expect(jwk.crv);
        const x = expect(jwk.d);

        if (crv !== Curve.SECP256K1 && crv !== Curve.ED25519 && crv !== Curve.X25519) {
            throw new ApolloError.InvalidKeyCurve();
        }

        const pk = apollo.createPublicKey({
            [KeyProperties.curve]: crv,
            [KeyProperties.type]: KeyTypes.OKP,
            [KeyProperties.rawKey]: base64url.baseDecode(x)
        });

        if (jwk.d !== undefined) {
            const sk = apollo.createPrivateKey({
                [KeyProperties.curve]: crv,
                [KeyProperties.type]: KeyTypes.OKP,
                [KeyProperties.rawKey]: base64url.baseDecode(jwk.d)
            });
            const keypair: Domain.KeyPair = {
                privateKey: sk,
                publicKey: pk,
                curve: crv
            }
            return keypair;
        }
        return pk;
    }

    async run(ctx: Task.Context): Promise<Domain.PublicKey | Domain.KeyPair> {
        const jwk = this.args.jwk;
        const kty = expect(jwk.kty);
        const isEC = isECJWK(jwk);
        const isOKP = isOKPJWK(jwk);

        if (isEC) {
            return this.fromJWKEC(ctx.Apollo, jwk);
        }
        if (isOKP) {
            return this.fromJWKOKP(ctx.Apollo, jwk);
        }
        throw new ApolloError.InvalidKeyType(kty, [KeyTypes.EC, KeyTypes.OKP]);
    }

}