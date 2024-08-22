import * as didResolver from "did-resolver";
import { base64url } from "multiformats/bases/base64";
import { base58btc } from 'multiformats/bases/base58';
import { Castor, AlsoKnownAs, Controller, VerificationMethods, Services, PublicKey, PrivateKey, Signer, Hasher, Verifier, Curve, Apollo, KeyProperties, KeyTypes } from "../../../domain";
import { defaultHashConfig, defaultSaltGen } from "./config";
import { VerificationKeyType } from "../../../castor/types";


/**
 * JWTCore
 * Wraps signing and verifying functionality with all our supported algorithms
 * Works for both secp256k1(ECDSA) and ed25519(EdDSA)
 */
export abstract class JWTCore {
    constructor(
      public readonly apollo: Apollo, 
      public readonly castor: Castor
    ) {}

    public async resolve(did: string): Promise<didResolver.DIDResolutionResult> {
        const resolved = await this.castor.resolveDID(did);
        const alsoKnownAs = resolved.coreProperties.find(
            (prop): prop is AlsoKnownAs => prop instanceof AlsoKnownAs
        );
        const controller = resolved.coreProperties.find(
            (prop): prop is Controller => prop instanceof Controller
        );
        const verificationMethods = resolved.coreProperties.find(
            (prop): prop is VerificationMethods => prop instanceof VerificationMethods
        );
        const service = resolved.coreProperties.find(
            (prop): prop is Services => prop instanceof Services
        );
        return {
            didResolutionMetadata: { contentType: "application/did+ld+json" },
            didDocumentMetadata: {},
            didDocument: {
                id: resolved.id.toString(),
                alsoKnownAs: alsoKnownAs && alsoKnownAs.values,
                controller:
                    controller && controller.values
                        ? controller.values.map((v) => v.toString())
                        : [],
                verificationMethod:
                    verificationMethods && verificationMethods.values
                        ? verificationMethods.values.map((vm) => {
                            if (vm.publicKeyMultibase) {
                                return {
                                    id: vm.id,
                                    type: vm.type === Curve.SECP256K1 ? "EcdsaSecp256k1VerificationKey2019" : vm.type === Curve.ED25519 ? 'Ed25519VerificationKey2020' : 'unknown',
                                    controller: vm.controller,
                                    publicKeyMultibase: vm.publicKeyMultibase,
                                };
                            }
                            if (vm.publicKeyJwk) {
                                return {
                                    id: vm.id,
                                    type: "JsonWebKey2020",
                                    controller: vm.controller,
                                    publicKeyJwk: vm.publicKeyJwk,
                                };
                            }
                            throw new Error("Invalid KeyType");
                        })
                        : [],
                service:
                    service?.values?.reduce<didResolver.Service[]>((acc, service) => {
                        const type = service.type.at(0);
                        if (type === undefined) return acc;
                        return acc.concat({
                            id: service.id,
                            type: type,
                            serviceEndpoint: service.serviceEndpoint,
                        });
                    }, []) ?? [],
            },
        };
    }

    // Function to convert DER signature to raw signature


    protected getSKConfig(privateKey: PrivateKey): { signAlg: string, signer: Signer, hasher: Hasher, hasherAlg: string } {
        return {
            signAlg: privateKey.alg,
            signer: async (data) => {
                if (!privateKey.isSignable()) {
                    throw new Error("Cannot sign with this key");
                }
                const signature = privateKey.sign(Buffer.from(data));
                const signatureEncoded = base64url.baseEncode(signature)
                return signatureEncoded
            },
            ...defaultHashConfig,
            ...defaultSaltGen
        };
    }

    protected getPKInstance(verificationMethod: didResolver.VerificationMethod) {
        if (verificationMethod.publicKeyMultibase) {
            const decoded = base58btc.decode(verificationMethod.publicKeyMultibase);
            let pk: PublicKey | undefined = undefined
            if (verificationMethod.type === VerificationKeyType.EcdsaSecp256k1VerificationKey2019) {
                pk = this.apollo.createPublicKey({
                    [KeyProperties.curve]: Curve.SECP256K1,
                    [KeyProperties.type]: KeyTypes.EC,
                    [KeyProperties.rawKey]: decoded
                })
            } else if (verificationMethod.type === VerificationKeyType.Ed25519VerificationKey2018 ||
                verificationMethod.type === VerificationKeyType.Ed25519VerificationKey2020) {
                pk = this.apollo.createPublicKey({
                    [KeyProperties.curve]: Curve.ED25519,
                    [KeyProperties.type]: KeyTypes.EC,
                    [KeyProperties.rawKey]: decoded
                })
            }
            return pk
        }
        throw new Error("Not supported")
    }

    protected getPKConfig(publicKey: PublicKey): { signAlg: string, verifier: Verifier, hasher: Hasher, hasherAlg: string } {
        return {
            signAlg: publicKey.alg,
            verifier: async (data, signatureEncoded) => {
                if (!publicKey.canVerify()) {
                    throw new Error("Cannot verify with this key");
                }
                const signature = Buffer.from(base64url.baseDecode(signatureEncoded))
                return publicKey.verify(Buffer.from(data), signature)
            },
            ...defaultHashConfig,
            ...defaultSaltGen
        }
    }

}