import Hashing from "hash.js";
import { base64url } from "multiformats/bases/base64";
import { SDJWTVCConfig, SDJwtVcInstance, SdJwtVcPayload, } from '@sd-jwt/sd-jwt-vc';
import { Disclosure } from '@sd-jwt/utils';
import { decodeSdJwtSync, getClaimsSync } from '@sd-jwt/decode';
import type { DisclosureFrame, Extensible, PresentationFrame } from '@sd-jwt/types';
import * as Domain from '../../../domain';
import { SDJWTCredential } from '../../models/SDJWTVerifiableCredential';
import { Task, notNil } from "../../../utils";
import { ResolveDID } from "./ResolveDID";
import { PKInstance } from "./PKInstance";

export const defaultHashConfig = {
  hasherAlg: 'SHA256',
  hasher: (data: string | Uint8Array, alg: string) => {
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

export class SDJWT extends Task.Runner {
  clone() {
    return new SDJWT();
  }

  decode(jws: string) {
    return decodeSdJwtSync(jws, defaultHashConfig.hasher);
  }

  async sign<E extends Extensible>(options: {
    issuerDID: Domain.DID,
    privateKey: Domain.PrivateKey,
    payload: SdJwtVcPayload,
    disclosureFrame: DisclosureFrame<E>
    kid?: string | undefined

  }): Promise<string> {
    const config = this.getSKConfig(options.privateKey)
    const sdjwt = new SDJwtVcInstance(config);
    return sdjwt.issue(
      options.payload,
      options.disclosureFrame,
      options.kid ? { header: { kid: options.kid } } : undefined
    )
  }

  async verify(options: {
    issuerDID: Domain.DID,
    jws: string,
    requiredClaimKeys?: string[],
    requiredKeyBindings?: boolean;
  }): Promise<boolean> {
    const { issuerDID, jws } = options;
    const resolved = await this.runTask(new ResolveDID({ did: issuerDID.toString() }));
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
    const methods = notNil(kidHeader)
      ? verificationMethods.filter(x => x.id === kidHeader)
      : verificationMethods;

    //Try verifying using any of the keys
    for (const verificationMethod of methods) {
      const pk = await this.runTask(new PKInstance({ verificationMethod }));

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
      hashAlg: defaultHashConfig.hasherAlg.toLocaleLowerCase(),
      hasher: defaultHashConfig.hasher,
      signAlg: publicKey.alg.toLocaleLowerCase(),
      verifier: async (data: any, signatureEncoded: any) => {
        if (!publicKey.canVerify()) {
          throw new Error("Cannot verify with this key");
        }
        const signature = Buffer.from(base64url.baseDecode(signatureEncoded));
        return publicKey.verify(Buffer.from(data), signature);
      },
      saltGenerator: this.saltGenerator
    };
  }


  private saltGenerator(length: number): string {
    function randomBytes(bytes: Uint8Array): Uint8Array {
      if (crypto && typeof crypto.getRandomValues === 'function') {
        return crypto.getRandomValues(bytes);
      }
      throw new Error('crypto.getRandomValues must be defined');
    }
    if (length <= 0) {
      return '';
    }
    const array = randomBytes(new Uint8Array(length / 2));
    const salt = Array.from(array, (byte) =>
      byte.toString(16).padStart(2, '0'),
    ).join('');
    return salt;
  }

  protected getSKConfig(privateKey: Domain.PrivateKey): SDJWTVCConfig {
    return {
      hashAlg: defaultHashConfig.hasherAlg.toLocaleLowerCase(),
      hasher: defaultHashConfig.hasher,
      signAlg: privateKey.alg.toLocaleLowerCase(),
      signer: async (data: any) => {
        if (!privateKey.isSignable()) {
          throw new Error("Cannot sign with this key");
        }
        const signature = privateKey.sign(Buffer.from(data));
        const signatureEncoded = base64url.baseEncode(signature);
        return signatureEncoded;
      },
      saltGenerator: this.saltGenerator
    };
  }
}
