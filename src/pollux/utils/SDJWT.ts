import { SDJwtVcInstance, SdJwtVcPayload, } from '@sd-jwt/sd-jwt-vc';
import { Disclosure } from '@sd-jwt/utils'
import type { DisclosureFrame, Extensible, PresentationFrame } from '@sd-jwt/types';
import { JWTCore } from "./jwt/JWTCore";
import { SDJWTCredential } from '../models/SDJWTVerifiableCredential';
import * as Domain from '../../domain';
import { getClaimsSync } from '@sd-jwt/decode';
import { defaultHashConfig } from './jwt/config';

export class SDJWT extends JWTCore {
  async decode(jws: string) {
    return SDJWTCredential.fromJWS(jws);
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
    //TODO: OAS needs to migrate to VC Data model for SDJWT
    if (jwtObject.issuer && jwtObject.issuer !== issuerDID.toString()) {
      throw new Error("Invalid issuer");
    }
    const kidHeader = jwtObject.core.jwt?.header?.kid;
    if (!kidHeader) {
      //Try verifying using any of the keys
      for (const verificationMethod of verificationMethods) {
        const pk: Domain.PublicKey | undefined = this.getPKInstance(verificationMethod)
        if (pk && pk.canVerify()) {
          const sdjwt = new SDJwtVcInstance(this.getPKConfig(pk));
          try {
            await sdjwt.verify(
              options.jws,
              options.requiredClaimKeys,
              options.requiredKeyBindings ?? false
            );
            return true;
          } catch (err) {
            console.log(err)
          }
        }
      }
    } else {
      const verificationMethod = verificationMethods.find((v) => v.id === kidHeader);
      if (verificationMethod) {
        const pk: Domain.PublicKey | undefined = this.getPKInstance(verificationMethod)
        if (pk && pk.canVerify()) {
          const sdjwt = new SDJwtVcInstance(this.getPKConfig(pk));
          try {
            await sdjwt.verify(
              options.jws,
              options.requiredClaimKeys,
              options.requiredKeyBindings ?? false
            );
            return true;
          } catch (err) {
            console.log(err)
          }
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
    kid?: string | undefined

  }): Promise<string> {
    const config = this.getSKConfig(options.privateKey)
    const sdjwt = new SDJwtVcInstance({
      ...config,
      hashAlg: config.hasherAlg.toLocaleLowerCase(),
      signAlg: config.signAlg.toLocaleLowerCase()
    });
    return sdjwt.issue(
      options.payload,
      options.disclosureFrame,
      options.kid ? { header: { kid: options.kid } } : undefined
    )
  }

  async createPresentationFor<E extends Extensible>(options: {
    jws: string,
    privateKey: Domain.PrivateKey,
    presentationFrame?: PresentationFrame<E>
  }) {
    const sdjwt = new SDJwtVcInstance(this.getSKConfig(options.privateKey));
    return sdjwt.present<E>(options.jws, options.presentationFrame)
  }


  async reveal(
    disclosedPayload: Record<string, unknown>,
    disclosures: Disclosure[]
  ) {
    const config = defaultHashConfig
    return getClaimsSync(
      disclosedPayload,
      disclosures,
      config.hasherSync
    )
  }

}