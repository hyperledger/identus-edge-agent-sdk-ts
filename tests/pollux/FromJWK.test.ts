import { describe, expect, beforeEach, vi, it } from 'vitest';
import { Apollo, Castor, Domain, Secp256k1KeyPair, Secp256k1PrivateKey, Secp256k1PublicKey } from "../../src";
import { Task } from '../../src/utils';
import { FromJWK } from '../../src/pollux/utils/jwt/FromJWK';
import { ApolloError, Curve } from '../../src/domain';

describe("Pollux - JWT FromJWK", async () => {
    let ctx: Task.Context<{
        Apollo: Domain.Apollo;
    }>;
    let apollo: Domain.Apollo;
    let castor: Domain.Castor;
    let plutoMock: Domain.Pluto;

    beforeEach(() => {
        apollo = new Apollo();
        castor = new Castor(apollo);
        plutoMock = { getDIDPrivateKeysByDID: vi.fn() } as any;
        ctx = Task.Context.make({
            Apollo: apollo,
        });
    });


    describe("fromJWK", () => {

        it("Should throw an error if the key type is not EC or OKP", async () => {
            const sut = new FromJWK({
                jwk: {
                    kty: "oct",
                    k: "1234567890"
                }
            }).run(ctx);
            await expect(sut).rejects.toThrow(ApolloError.InvalidKeyType);
        });

        describe("EC Key type with secp256k1 curve", async () => {

            it("Should throw an error if both coordinates and d are missing", async () => {
                const sut = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                    }
                }).run(ctx);
                await expect(sut).rejects.toThrow("19: Missing or invalid JWK parameters: d, x and y");
            });

            it("Should throw an error if only one coordinate coordinate is present", async () => {
                const sut = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        x: "poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM",
                    }
                }).run(ctx);
                await expect(sut).rejects.toThrow("19: Missing or invalid JWK parameter: y");

                const sut2 = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        y: "M6WTO1raVf2TNHO7t0IpiurajRo6k12HbJvNa2L-8sA",
                    }
                }).run(ctx);
                await expect(sut2).rejects.toThrow("19: Missing or invalid JWK parameter: x");
            });

            it("Should throw an error if d is present but invalid", async () => {
                const sut = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        d: "adsasdasdadsadsasd",
                    }
                }).run(ctx);
                await expect(sut).rejects.toThrow("19: Missing or invalid JWK parameter: d");
            });

            it("Should throw an error if d is present but curve is unsupported", async () => {
                const sut = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: "wrong curve",
                        d: "adsasdasdadsadsasd",
                    }
                }).run(ctx);
                await expect(sut).rejects.toThrow(ApolloError.InvalidKeyCurve)
            });

            it("Should throw an error if coordinate encoding is not valid", async () => {
                const sut = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        //Should be base64url encoded
                        x: "1234567890",
                        y: "1234567890"
                    }
                }).run(ctx);
                await expect(sut).rejects.toThrow(ApolloError.InvalidECParameters);
            });

            it("Should not allow restoring from coordinates for non secp256k1 curves", async () => {
                const sut = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.ED25519,
                        x: "poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM",
                        y: "M6WTO1raVf2TNHO7t0IpiurajRo6k12HbJvNa2L-8sA",
                    }
                }).run(ctx);
                await expect(sut).rejects.toThrow("16: Invalid key curve: Ed25519. Valid options are: secp256k1")
            });

            it("Should allow to recover a public key from x and y coordinates", async () => {
                const sut = await new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        x: "poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM",
                        y: "M6WTO1raVf2TNHO7t0IpiurajRo6k12HbJvNa2L-8sA",
                    }
                }).run(ctx);
                expect(sut).to.be.an.instanceOf(Secp256k1PublicKey);
            });

            it("Should allow to recover a keyPair key from x and y coordinates and d private key", async () => {
                const sut = await new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        d: "ZLc6z-hpXb7RjPEve9rf-v44ElZJ-NQ5r0lqY-NpCuA",
                        x: "wYMtiI5wJqztx6ywMtm9ns8Pnlsq7_ZMj_gJh9DXiL0",
                        y: "g2p7eYiPxPMlZHQE95uV91gnwCMnOozpctwOPWzTCsM",
                    }
                }).run(ctx);

                expect(sut).toHaveProperty("privateKey");
                expect(sut).toHaveProperty("publicKey");

                expect((sut as Domain.KeyPair).privateKey).to.be.an.instanceOf(Secp256k1PrivateKey);
                expect((sut as Domain.KeyPair).publicKey).to.be.an.instanceOf(Secp256k1PublicKey);
            });

        });


        describe("OKP Key type", async () => {
            it("Should throw an error if the curve is not supported");

            const supportedCurves = [Curve.ED25519, Curve.X25519, Curve.SECP256K1];

            supportedCurves.forEach(curve => {
                describe(`${curve} curve`, () => {
                    it("Should throw an error if x is not encoded with base64url")
                    it("Should throw an error if d property is not encoded with base64url")
                    it("Should return a keyPair if x and d are present")
                    it("Should return a public key if x is present")
                });
            });
        });
    });

})
