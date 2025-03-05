import { describe, expect, beforeEach, it } from 'vitest';
import { Apollo, Castor, Domain, Secp256k1PrivateKey, Secp256k1PublicKey } from "../../src";
import { Task } from '../../src/utils';
import { FromJWK } from '../../src/pollux/utils/jwt/FromJWK';
import { ApolloError, Curve, JWK, PolluxError, PrivateKey, PublicKey } from '../../src/domain';

describe("Pollux - JWT FromJWK", async () => {
    let ctx: Task.Context<{
        Apollo: Domain.Apollo;
    }>;
    let apollo: Domain.Apollo;
    let castor: Domain.Castor;

    beforeEach(() => {
        apollo = new Apollo();
        castor = new Castor(apollo);
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
                await expect(sut).rejects.toThrow("20: Required property x+y or d is missing in EC JWK");
            });

            it("Should throw an error if only one coordinate coordinate is present", async () => {
                const sut = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        x: "poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM",
                    }
                }).run(ctx);
                await expect(sut).rejects.toThrow("19: Missing JWK Parameter: y");

                const sut2 = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        y: "M6WTO1raVf2TNHO7t0IpiurajRo6k12HbJvNa2L-8sA",
                    }
                }).run(ctx);
                await expect(sut2).rejects.toThrow("19: Missing JWK Parameter: x");
            });

            it("Should throw an error if d is present but invalid", async () => {
                const sut = new FromJWK({
                    jwk: {
                        kty: "EC",
                        crv: Curve.SECP256K1,
                        d: "adsasdasdadsadsasd",
                    }
                }).run(ctx);
                await expect(sut).rejects.toThrow("19: Invalid JWK Parameter, not base64url encoded: d");
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
                await expect(sut).rejects.toThrow(PolluxError.InvalidJWKParameters);
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
            it("Should throw an error if the curve is not supported", async () => {
                const sut = new FromJWK({
                    jwk: {
                        ...fixTures[Curve.ED25519].public,
                        crv: "wrong curve",
                        x: undefined
                    } as any
                }).run(ctx);
                await expect(sut).rejects.toThrow("16: Invalid key curve: wrong curve. Valid options are: X25519, Ed25519, secp256k1")
            });

            const supportedCurves = [Curve.ED25519, Curve.X25519];
            const fixTures: Record<string, { private: JWK.OKP, public: JWK.OKP }> = {
                [Curve.ED25519]: {
                    private: {
                        "kty": "OKP",
                        "d": "c3sPtGX-Jy4Ayi1RUz27UIS4ztWSEfJdQ3etgsjBl5M",
                        "crv": "Ed25519",
                        "x": "j7J_Y6I6Qg0RRFmBw5kJhxj9IsYrLw57c0NTeh5WNiI",
                        "alg": "EdDSA"
                    },
                    public: {
                        "kty": "OKP",
                        "crv": "Ed25519",
                        "x": "j7J_Y6I6Qg0RRFmBw5kJhxj9IsYrLw57c0NTeh5WNiI",
                        "alg": "EdDSA"
                    }
                },
                [Curve.X25519]: {
                    private: {
                        "kty": "OKP",
                        "d": "jZ52YidJvBz6GUroCIvasKSIAUrfp5Nk59zaM8biVIw",
                        "crv": "X25519",
                        "x": "eKj9zIA32kZc9jwSGnix2i8aiJo-ovrB8FeJkFwpMBE",
                        "alg": "EdDSA"
                    },
                    public: {
                        "kty": "OKP",
                        "crv": "X25519",
                        "x": "eKj9zIA32kZc9jwSGnix2i8aiJo-ovrB8FeJkFwpMBE",
                        "alg": "EdDSA"
                    }
                }
            }

            supportedCurves.forEach(curve => {
                describe(`${curve} curve`, () => {
                    it(`${curve} Should throw an error if x is missing`, async () => {
                        const sut = new FromJWK({
                            jwk: {
                                ...fixTures[curve].public,
                                x: undefined
                            } as any
                        }).run(ctx);
                        await expect(sut).rejects.toThrow("19: Missing JWK Parameter x")
                    })

                    it(`${curve} Should throw an error if x is not encoded with base64url`, async () => {
                        const sut = new FromJWK({
                            jwk: {
                                ...fixTures[curve].public,
                                x: 'no'
                            } as any
                        }).run(ctx);
                        await expect(sut).rejects.toThrow("19: Invalid JWK Parameter, not base64url encoded: x")
                    })
                    it(`${curve} Should throw an error if d property is not encoded with base64url`, async () => {
                        const sut = new FromJWK({
                            jwk: {
                                ...fixTures[curve].private,
                                d: 'no'
                            } as any
                        }).run(ctx);
                        await expect(sut).rejects.toThrow("19: Invalid JWK Parameter, not base64url encoded: d")
                    })
                    it(`${curve} Should return a keyPair if x and d are present`, async () => {
                        const sut = await new FromJWK({
                            jwk: fixTures[curve].private
                        }).run(ctx);

                        expect(sut).toHaveProperty("privateKey");
                        expect(sut).toHaveProperty("publicKey");
                        expect(sut).toHaveProperty("curve");
                        expect((sut as Domain.KeyPair).privateKey).to.be.an.instanceOf(PrivateKey);
                        expect((sut as Domain.KeyPair).publicKey).to.be.an.instanceOf(PublicKey);
                        expect(sut.curve).to.eq(curve)
                    })
                    it(`${curve} Should return a public key if x is present`, async () => {
                        const sut = await new FromJWK({
                            jwk: fixTures[curve].public
                        }).run(ctx);

                        expect(sut).to.be.an.instanceOf(PublicKey);
                        expect(sut).toHaveProperty("curve");
                        expect(sut.curve).to.eq(curve)
                    })
                });
            });
        });
    });

})
