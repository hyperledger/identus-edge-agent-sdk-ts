import { SDJwtVcInstance, SdJwtVcPayload, } from '@sd-jwt/sd-jwt-vc';
import type { DisclosureFrame, Extensible, PresentationFrame } from '@sd-jwt/types';
import { JWTCore } from "./jwt/JWTCore";
import { SDJWTCredential } from '../models/SDJWTVerifiableCredential';
import * as Domain from '../../domain';

export class SDJWT extends JWTCore {
    async decode(jws: string) {
      return Domain.JWT.decode(jws);
    }

    createDisclosureFrameFor<T extends Extensible>(config: DisclosureFrame<T>): DisclosureFrame<T> {
      return config;
    }

    async verify(options: {
      issuerDID: Domain.DID,
      jws: string,
      requiredClaimKeys?: string[],
      requiredKeyBindings?: boolean
    }): Promise<boolean> {
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
            const pk = this.getPKInstance(verificationMethod)
            if (pk?.canVerify()) {
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

    async sign<E extends Extensible>(options: {
      issuerDID: Domain.DID,
      privateKey: Domain.PrivateKey,
      payload: SdJwtVcPayload,
      disclosureFrame: DisclosureFrame<E>
    }): Promise<string> {
        const sdjwt = new SDJwtVcInstance(this.getSKConfig(options.privateKey));
        return sdjwt.issue(options.payload, options.disclosureFrame)
    }

    async createPresentationFor<E extends Extensible>(options: {
      jws: string,
      privateKey: Domain.PrivateKey,
      frame?: PresentationFrame<E> | undefined
    }) {
      const sdjwt = new SDJwtVcInstance(this.getSKConfig(options.privateKey));
      return sdjwt.present<E>(options.jws, options.frame)
    }

}