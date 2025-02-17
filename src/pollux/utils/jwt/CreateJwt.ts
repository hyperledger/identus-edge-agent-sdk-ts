import { Signer, createJWT } from "did-jwt";
import { base58btc } from "multiformats/bases/base58";
import { base64url } from "multiformats/bases/base64";
import * as Domain from "../../../domain";
import { asJsonObj, expect, notNil } from "../../../utils";
import { Task } from "../../../utils/tasks";

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
  privateKey?: Domain.PrivateKey;
}

export class CreateJWT extends Task<string, Args> {
  async run(ctx: Task.Context) {
    const privateKey = await this.getPrivateKey(ctx);

    if (!privateKey.isSignable()) {
      throw new Error("Key is not signable");
    }

    const kid = await this.getSigningKid(ctx, this.args.did, privateKey);

    const signer: Signer = async (data: any) => {
      const signature = privateKey.sign(Buffer.from(data));
      const encoded = base64url.baseEncode(signature);
      return encoded;
    };

    const jwt = await createJWT(
      this.args.payload,
      { issuer: this.args.did.toString(), signer },
      {
        kid,
        alg: privateKey.alg,
        ...asJsonObj(this.args.header)
      }
    );

    return jwt;
  }

  private async getPrivateKey(ctx: Task.Context) {
    if (notNil(this.args.privateKey)) {
      return this.args.privateKey;
    }

    const keys = await ctx.Pluto.getDIDPrivateKeysByDID(this.args.did);
    const privateKey = expect(
      keys.find(x => x.curve === Domain.Curve.SECP256K1),
      "key not found"
    );

    return privateKey;
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
