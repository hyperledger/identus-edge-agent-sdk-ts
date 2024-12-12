import * as Domain from "../../domain";
import { AnonCredsCredential } from "../../pollux/models/AnonCredsVerifiableCredential";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { SDJWTCredential } from "../../pollux/models/SDJWTVerifiableCredential";
import { Task, JsonObj, asJsonObj, expect, isObject, notNil } from "../../utils";

interface Args {
  credential: Domain.Credential;
  fields: string[];
}

export class RevealCredentialFields extends Task<{}, Args> {
  async run(ctx: Task.Context): Promise<{}> {
    if (this.args.credential instanceof JWTCredential) {
      return this.runJWT();
    }

    if (this.args.credential instanceof SDJWTCredential) {
      return this.runSDJWT(ctx);
    }

    if (this.args.credential instanceof AnonCredsCredential) {
      return this.runAnoncreds(ctx);
    }

    throw new Error("unhandled credential");
  }

  async runJWT() {
    const claim = expect(this.args.credential.claims.at(0), "Invalid Claims");
    return claim;
  }

  async runSDJWT(ctx: Task.Context) {
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

  async runAnoncreds(ctx: Task.Context) {
    const credential = this.args.credential;

    const revealed = this.args.fields.reduce((acc, field) => {
      const claim = credential.claims.find(x => isObject(x[field]));
      return notNil(claim) ? { ...acc, [field]: claim[field].raw } : acc;
    }, {});

    return revealed;
  }
}
