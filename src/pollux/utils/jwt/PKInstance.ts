import type * as DIDResolver from "did-resolver";
import { base58btc } from 'multiformats/bases/base58';
import * as Domain from "../../../domain";
import { Task } from "../../../utils";
// TODO importing from Castor
import { VerificationKeyType } from "../../../castor/types";
import { FromJWK } from "./FromJWK";
export interface Args {
  verificationMethod: DIDResolver.VerificationMethod;
}

type VerificationMethodKeys = "id" | "type" | "controller";
type MultibaseVerificationMethod = Pick<
  DIDResolver.VerificationMethod,
  VerificationMethodKeys
> & {
  publicKeyMultibase: string;
};

type JWKVerificationMethod = Pick<
  DIDResolver.VerificationMethod,
  VerificationMethodKeys
> & {
  publicKeyJwk: Domain.JWK;
};

export class PKInstance extends Task<Domain.PublicKey | undefined, Args> {

  private isMultibaseVerificationMethod(verificationMethod: DIDResolver.VerificationMethod): verificationMethod is MultibaseVerificationMethod {
    return verificationMethod.publicKeyMultibase !== undefined &&
      typeof verificationMethod.publicKeyMultibase === 'string';
  }

  private isJWKVerificationMethod(verificationMethod: DIDResolver.VerificationMethod): verificationMethod is JWKVerificationMethod {
    const validStructure = verificationMethod.publicKeyJwk !== undefined &&
      typeof verificationMethod.publicKeyJwk === 'object';

    if (!validStructure) {
      return false;
    }

    const kty = verificationMethod.publicKeyJwk?.kty;
    const crv = verificationMethod.publicKeyJwk?.crv;
    const x = verificationMethod.publicKeyJwk?.x;
    const y = verificationMethod.publicKeyJwk?.y;
    const d = verificationMethod.publicKeyJwk?.d;

    if (crv === undefined) {
      return false;
    }

    if (kty === 'EC') {
      if (x === undefined && y === undefined && d === undefined) {
        return false;
      }
      if ((typeof x !== 'string' && typeof y !== 'string') || typeof d !== 'string') {
        return false;
      }
      return true;
    }

    if (kty === 'OKP') {
      if (x === undefined) {
        return false;
      }
      if (typeof x !== 'string') {
        return false;
      }
      if (d !== undefined && typeof d !== 'string') {
        return false;
      }
      return true;
    }

    return false;
  }

  async run(ctx: Task.Context) {
    const verificationMethod = this.args.verificationMethod;
    let pk: Domain.PublicKey | undefined = undefined;

    if (this.isMultibaseVerificationMethod(verificationMethod)) {
      const decoded = base58btc.decode(verificationMethod.publicKeyMultibase);
      if (verificationMethod.type === VerificationKeyType.EcdsaSecp256k1VerificationKey2019) {
        pk = ctx.Apollo.createPublicKey({
          [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
          [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
          [Domain.KeyProperties.rawKey]: decoded
        });
      } else if (verificationMethod.type === VerificationKeyType.Ed25519VerificationKey2018 ||
        verificationMethod.type === VerificationKeyType.Ed25519VerificationKey2020) {
        pk = ctx.Apollo.createPublicKey({
          [Domain.KeyProperties.curve]: Domain.Curve.ED25519,
          [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
          [Domain.KeyProperties.rawKey]: decoded
        });
      }
      return pk;
    }

    if (this.isJWKVerificationMethod(verificationMethod)) {
      const keyPair = await ctx.run(
        new FromJWK({ jwk: verificationMethod.publicKeyJwk })
      );
      if (keyPair instanceof Domain.KeyPair) {
        pk = keyPair.publicKey;
      } else {
        pk = keyPair;
      }
      return pk;
    }

    throw new Error("Not supported");
  }
}
