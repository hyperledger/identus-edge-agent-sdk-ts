import { Pollux } from "../../../types";
import { JsonObj, asJsonObj } from "../../../../utils";
import { SDJWTContext } from './Plugin';

export class RevealCredentialFields extends Pollux.RevealCredentialFields {
  async run(ctx: SDJWTContext) {
    const credential = this.args.credential;
    let disclosedClaims: JsonObj = {};

    for (const computed of credential.claims) {
      const disclosed = Object.values(computed);
      const decoded = ctx.SDJWT.decode(credential.id);
      const revealed = await ctx.SDJWT.reveal(decoded.jwt.payload, disclosed);
      const disclosedClaim = asJsonObj(revealed);
      disclosedClaims = { ...disclosedClaims, ...disclosedClaim };
    }

    return disclosedClaims;
  }
}
