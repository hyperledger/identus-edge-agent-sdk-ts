import { SDJwtVcInstance, } from '@sd-jwt/sd-jwt-vc';
import type { DisclosureFrame, Extensible, PresentationFrame } from '@sd-jwt/types';
import { JWTCore } from "./jwt/JWTCore";
import { JWTInstanceType, JWTSignOptions, JWTVerifyOptions } from "./jwt/types";
import { JWTObject, Castor, PublicKey, PrivateKey, Apollo } from '../../domain';
import { decodeJWS } from './decodeJWS';
import { SDJWTCredential } from '../models/SDJWTVerifiableCredential';
import { base58btc } from 'multiformats/bases/base58';
import { Secp256k1PublicKey } from '../../apollo/utils/Secp256k1PublicKey';
import { Ed25519PublicKey } from '../../apollo/utils/Ed25519PublicKey';
import { X25519PublicKey } from '../../apollo/utils/X25519PublicKey';
import { VerificationKeyType } from '../../castor/types';


export class SDJWT extends JWTCore<JWTInstanceType.SDJWT> {
    public type = JWTInstanceType.SDJWT;

    async decode(jws: string): Promise<JWTObject> {
        return decodeJWS(jws)
    }

    public createDisclosureFrameFor<T extends Extensible>(config: DisclosureFrame<T>): DisclosureFrame<T> {
        return config;
    }

    async verify(options: JWTVerifyOptions<JWTInstanceType.SDJWT>): Promise<boolean> {
        const { issuerDID, jws } = options;
        const resolved = await this.resolve(issuerDID.toString());
        const verificationMethods = resolved.didDocument?.verificationMethod;
        if (!verificationMethods) {
            throw new Error("Invalid did document");
        }
        const jwtObject = await SDJWTCredential.fromJWS(jws);
        if (jwtObject.issuer !== issuerDID.toString()) {
            throw new Error("Invalid issuer");
        }
        for (let verificationMethod of verificationMethods) {
            let pk: PublicKey | undefined = this.getPKInstance(verificationMethod)
            if (pk && pk.canVerify()) {
                const sdjwt = new SDJwtVcInstance(this.getPKConfig(pk));
                try {
                    await sdjwt.verify(
                        options.jws,
                        options.requiredClaimKeys,
                        !!options.requiredKeyBindings ?? false
                    );
                    return true;
                } catch (err) {
                    console.log(err)
                }
            }
        }

        return false;
    }

    async sign<E extends Extensible>(options: JWTSignOptions<JWTInstanceType.SDJWT, E>): Promise<string> {
        const sdjwt = new SDJwtVcInstance(this.getSKConfig(options.privateKey));
        return sdjwt.issue(options.payload, options.disclosureFrame)
    }

    async createPresentationFor<E extends Extensible>(
        options: {
            jws: string,
            privateKey: PrivateKey,
            frame?: PresentationFrame<E> | undefined
        }
    ) {
        const sdjwt = new SDJwtVcInstance(
            this.getSKConfig(options.privateKey)
        );
        return sdjwt.present<E>(options.jws, options.frame)
    }

}