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

export class PKInstance extends Task<Domain.PublicKey | undefined, Args> {
  async run(ctx: Task.Context) {
    const verificationMethod = this.args.verificationMethod;
    let pk: Domain.PublicKey | undefined = undefined;

    if (verificationMethod.publicKeyMultibase) {
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

    if (verificationMethod.publicKeyJwk) {
      const keyPair = await ctx.run(
        new FromJWK({ jwk: verificationMethod.publicKeyJwk as Domain.JWK })
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
