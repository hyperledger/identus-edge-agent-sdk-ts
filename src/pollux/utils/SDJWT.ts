import Hashing from "hash.js";
import { base64url } from "multiformats/bases/base64";
import { SDJWTVCConfig, SDJwtVcInstance, } from '@sd-jwt/sd-jwt-vc';
import { Disclosure } from '@sd-jwt/utils';
import { decodeSdJwtSync, getClaimsSync } from '@sd-jwt/decode';
import type { Extensible, PresentationFrame } from '@sd-jwt/types';
import { JWTCore } from "./jwt/JWTCore";
import { SDJWTCredential } from '../models/SDJWTVerifiableCredential';
import * as Domain from '../../domain';

export const defaultHashConfig = {
  hasherAlg: 'SHA256',
  hasher: (data: string | Uint8Array, alg: string) => {
    //TODO: We consider hashing as uppercase without slash but our dependencies use it with lowercase and -
    const safeAlg = alg.replace(/-/gmi, "").toUpperCase();
    if (safeAlg === 'SHA256') {
      return Uint8Array.from(Hashing.sha256().update(data).digest());
    }
    if (safeAlg === 'SHA512') {
      return Uint8Array.from(Hashing.sha512().update(data).digest());
    }
    throw new Error(`Invalid Hashing Algorithm. Valid options are: 'SHA256', 'SHA512'`);
  }
};

export class SDJWT extends JWTCore {
  decode(jws: string) {
    return decodeSdJwtSync(jws, defaultHashConfig.hasher);
  }

  async verify(options: {
    issuerDID: Domain.DID,
    jws: string,
    requiredClaimKeys?: string[],
    requiredKeyBindings?: boolean;
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
        const pk: Domain.PublicKey | undefined = this.getPKInstance(verificationMethod);
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
            console.log(err);
          }
        }
      }
    } else {
      const verificationMethod = verificationMethods.find((v) => v.id === kidHeader);
      if (verificationMethod) {
        const pk: Domain.PublicKey | undefined = this.getPKInstance(verificationMethod);
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
            console.log(err);
          }
        }
      }
    }
    return false;
  }

  async createPresentationFor<E extends Extensible>(options: {
    jws: string,
    privateKey: Domain.PrivateKey,
    presentationFrame?: PresentationFrame<E>;
  }) {
    const sdjwt = new SDJwtVcInstance(this.getSKConfig(options.privateKey));
    return sdjwt.present<E>(options.jws, options.presentationFrame);
  }

  async reveal(
    disclosedPayload: Record<string, unknown>,
    disclosures: Disclosure[]
  ) {
    return getClaimsSync(
      disclosedPayload,
      disclosures,
      defaultHashConfig.hasher
    );
  }

  private getPKConfig(publicKey: Domain.PublicKey): SDJWTVCConfig {
    return {
      hashAlg: defaultHashConfig.hasherAlg,
      hasher: defaultHashConfig.hasher,
      signAlg: publicKey.alg,
      verifier: async (data: any, signatureEncoded: any) => {
        if (!publicKey.canVerify()) {
          throw new Error("Cannot verify with this key");
        }
        const signature = Buffer.from(base64url.baseDecode(signatureEncoded));
        return publicKey.verify(Buffer.from(data), signature);
      },
    };
  }

  protected getSKConfig(privateKey: Domain.PrivateKey): SDJWTVCConfig {
    return {
      hashAlg: defaultHashConfig.hasherAlg,
      hasher: defaultHashConfig.hasher,
      signAlg: privateKey.alg,
      signer: async (data: any) => {
        if (!privateKey.isSignable()) {
          throw new Error("Cannot sign with this key");
        }
        const signature = privateKey.sign(Buffer.from(data));
        const signatureEncoded = base64url.baseEncode(signature);
        return signatureEncoded;
      },
    };
  }
}
