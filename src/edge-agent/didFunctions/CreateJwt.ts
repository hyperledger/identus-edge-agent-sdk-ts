import { base58btc } from "multiformats/bases/base58";
import * as Domain from "../../domain";
import { expect } from "../../utils";
import { Task } from "../../utils/tasks";

/**
 * Asyncronously sign with a DID
 *
 * @async
 * @param {DID} did
 * @param payload
 * @param header
 * @returns {string}
 */

interface Args {
  did: Domain.DID;
  payload: Partial<Domain.JWT.Payload>;
  header?: Partial<Domain.JWT.Header>;
}

export class CreateJWT extends Task<string, Args> {
  async run(ctx: Task.Context) {
    const keys = await ctx.Pluto.getDIDPrivateKeysByDID(this.args.did);
    const secpKey = expect(
      keys.find(x => x.curve === Domain.Curve.SECP256K1),
      "key not found"
    );

    const kid = await this.getSigningKid(ctx, this.args.did, secpKey);

    const jwt = await Domain.JWT.sign(
      this.args.did,
      secpKey,
      this.args.payload,
      { ...this.args.header, kid }
    );

    return jwt;
  }

  /**
   * try to match the privateKey with a dids verificationMethod
   * returning the relevant key id
   * 
   * @param did 
   * @param privateKey 
   * @returns {string} kid (key identifier)
   */
  private async getSigningKid(ctx: Task.Context, did: Domain.DID, privateKey: Domain.PrivateKey) {
    const pubKey = privateKey.publicKey();
    const encoded = base58btc.encode(pubKey.to.Buffer());
    const document = await ctx.Castor.resolveDID(did.toString());

    const signingKey = document.verificationMethods.find(key => {
      // TODO improve key identification
      return key.publicKeyMultibase === encoded && key.id.includes("#authentication");
    });

    return signingKey?.id;
  }
}
