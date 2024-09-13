import * as Domain from "../../domain";
import {
  PrismDerivationPath,
  PRISM_WALLET_PURPOSE,
  PRISM_DID_METHOD,
  AUTHENTICATION_KEY,
  ISSUING_KEY,
  PrismDerivationPathSchema
} from "../../domain/models/derivation/schemas/PrismDerivation";
import { Task } from "../../utils/tasks";
import { PrismKeyPathIndexTask } from "./PrismKeyPathIndex";

/**
 * Handle the creation of a PrismDID
 * 
 * Calculate and use the latest Prism DID KeyPathIndex.
 * Create the relevant PrivateKeys.
 * Store the PrismDID plus Keys in Pluto
 */

interface Args {
  alias: string;
  services: Domain.Service[];
  keyPathIndex?: number;
}

export class CreatePrismDID extends Task<Domain.DID, Args> {
  async run(ctx: Task.Context) {
    const getIndexTask = new PrismKeyPathIndexTask({ index: this.args.keyPathIndex });
    const index = await ctx.run(getIndexTask);

    const authenticationDerivation = new PrismDerivationPath([
      PRISM_WALLET_PURPOSE,
      PRISM_DID_METHOD,
      0,
      AUTHENTICATION_KEY,
      index
    ]);

    const issuingDerivation = new PrismDerivationPath([
      PRISM_WALLET_PURPOSE,
      PRISM_DID_METHOD,
      0,
      ISSUING_KEY,
      index
    ]);

    const seedHex = Buffer.from(ctx.Seed.value).toString("hex");

    const sk = ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
      [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
      [Domain.KeyProperties.seed]: seedHex,
      [Domain.KeyProperties.derivationPath]: authenticationDerivation.toString(),
      [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });

    const edSk = ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
      [Domain.KeyProperties.curve]: Domain.Curve.ED25519,
      [Domain.KeyProperties.seed]: seedHex,
      [Domain.KeyProperties.derivationPath]: issuingDerivation.toString(),
      [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });

    const did = await ctx.Castor.createPrismDID(
      sk.publicKey(),
      this.args.services,
      [edSk.publicKey()]
    );

    await ctx.Pluto.storeDID(did, [sk, edSk], this.args.alias);

    return did;
  }
}
