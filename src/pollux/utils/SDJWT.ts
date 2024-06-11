import { SDJwtVcInstance, } from '@sd-jwt/sd-jwt-vc';
import type { DisclosureFrame, Extensible, PresentationFrame } from '@sd-jwt/types';
import { JWTCore } from "./jwt/JWTCore";
import { JWTInstanceType, JWTSignOptions, JWTVerifyOptions } from "./jwt/types";
import { JWTObject, PublicKey, PrivateKey } from '../../domain';
import { decodeJWS } from './decodeJWS';
import { SDJWTCredential } from '../models/SDJWTVerifiableCredential';


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
        for (const verificationMethod of verificationMethods) {
            const pk: PublicKey | undefined = this.getPKInstance(verificationMethod)
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