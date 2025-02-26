import { Domain } from "../../..";
import { expect, Task } from "../../../utils";

import { base64url } from "multiformats/bases/base64";
import { ApolloError, Curve, JWK, KeyPair, KeyProperties, KeyTypes, PolluxError, PrivateKey, PublicKey } from "../../../domain";

export interface Args {
    jwk: Domain.JWK;
}

export class FromJWK extends Task<Domain.PublicKey | Domain.KeyPair, Args> {

    private isECJWK(jwk: JWK): jwk is JWK.EC {
        if (jwk.kty !== "EC") {
            return false;
        }
        return true;
    }

    private isOKPJWK(jwk: JWK): jwk is JWK.OKP {
        if (jwk.kty !== "OKP") {
            return false;
        }
        return true;
    }


    private decodeJWKParameter(
        coordinate: 'x' | 'y' | 'd',
        jwk: JWK.EC | JWK.OKP
    ): Uint8Array {
        if (!jwk[coordinate]) {
            throw new PolluxError.InvalidJWKParameters(coordinate, `Missing JWK Parameter`);
        }
        const coordinateValue = jwk[coordinate];
        try {
            if (typeof coordinateValue !== 'string') {
                throw new PolluxError.InvalidJWKParameters(coordinate, `Invalid JWK Parameter, not string`);
            }
            const decoded = base64url.baseDecode(coordinateValue);
            return new Uint8Array(decoded);
        } catch (err) {
            throw new PolluxError.InvalidJWKParameters(coordinate, `Invalid JWK Parameter, not base64url encoded`);
        }
    }


    private isSupportedCurve(crv: string): void {
        const keys = Object.values(Curve);
        if (!keys.includes(crv as Curve)) {
            throw new ApolloError.InvalidKeyCurve(crv);
        }
    }

    private fromJWKEC(apollo: Domain.Apollo, jwk: JWK.EC): KeyPair | PrivateKey | PublicKey {
        const crv = expect(jwk.crv, new PolluxError.InvalidJWKParameters(['crv'], 'Missing JWK Parameter'));
        this.isSupportedCurve(crv);

        const withCoordinates =
            jwk.x !== undefined ||
            jwk.y !== undefined;

        const keyType = crv === Curve.X25519 ? KeyTypes.Curve25519 : KeyTypes.EC;
        if (withCoordinates) {
            const decodedX = this.decodeJWKParameter('x', jwk);
            const decodedY = this.decodeJWKParameter('y', jwk);

            if (crv === Curve.SECP256K1) {
                let pk: PublicKey;
                let sk: PrivateKey;

                pk = apollo.createPublicKey({
                    [KeyProperties.curve]: crv,
                    [KeyProperties.type]: keyType,
                    [KeyProperties.curvePointX]: decodedX,
                    [KeyProperties.curvePointY]: decodedY
                });

                if (jwk.d !== undefined) {
                    const decodedD = this.decodeJWKParameter('d', jwk);
                    sk = apollo.createPrivateKey({
                        [KeyProperties.curve]: crv,
                        [KeyProperties.type]: keyType,
                        [KeyProperties.rawKey]: decodedD
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

            throw new ApolloError.InvalidKeyCurve(crv, [Curve.SECP256K1]);
        }

        if (jwk.d !== undefined) {
            const decodedD = this.decodeJWKParameter('d', jwk);
            return apollo.createPrivateKey({
                [KeyProperties.curve]: crv,
                [KeyProperties.type]: keyType,
                [KeyProperties.rawKey]: decodedD
            })
        }

        throw new PolluxError.InvalidJWK('Required property x+y or d is missing in EC JWK');
    }

    private fromJWKOKP(apollo: Domain.Apollo, jwk: JWK.OKP): KeyPair | PublicKey {
        const crv = expect(jwk.crv, new PolluxError.InvalidJWKParameters(['crv']));
        this.isSupportedCurve(crv);

        expect(jwk.x, new PolluxError.InvalidJWKParameters(['x'], 'Missing JWK Parameter x'));

        const keyType = crv === Curve.X25519 ? KeyTypes.Curve25519 : KeyTypes.EC;

        const pk = apollo.createPublicKey({
            [KeyProperties.curve]: crv,
            [KeyProperties.type]: keyType,
            [KeyProperties.rawKey]: this.decodeJWKParameter('x', jwk)
        });

        if (jwk.d !== undefined) {
            const sk = apollo.createPrivateKey({
                [KeyProperties.curve]: crv,
                [KeyProperties.type]: keyType,
                [KeyProperties.rawKey]: this.decodeJWKParameter('d', jwk)
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
        const kty = expect(jwk.kty, new PolluxError.InvalidJWKParameters(['kty'], 'Missing JWK Parameter kty'));
        const isEC = this.isECJWK(jwk);
        const isOKP = this.isOKPJWK(jwk);
        if (isEC) {
            return this.fromJWKEC(ctx.Apollo, jwk);
        }
        if (isOKP) {
            return this.fromJWKOKP(ctx.Apollo, jwk);
        }
        throw new ApolloError.InvalidKeyType(kty, [KeyTypes.EC]);
    }

}