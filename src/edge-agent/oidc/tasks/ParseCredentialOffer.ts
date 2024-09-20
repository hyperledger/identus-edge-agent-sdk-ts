import { Task } from "../../../utils/tasks";
import { asJsonObj, isObject, isString, notNil, validate } from "../../../utils";
import { OIDC } from "../types";
import { InvalidOffer } from "../errors";

/**
 * attempt to extract a Credential Offer from the given value
 * 
 * @link https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-offer
 */

interface Args {
  value: unknown;
}

export class ParseCredentialOffer extends Task<OIDC.CredentialOffer, Args> {
  async run(ctx: Task.Context) {
    try {
      const json = await this.extractJson(ctx);
      validate(json, OIDC.CredentialOffer);

      return json;
    }
    catch (e) {
      const msg = e instanceof Error ? e.message : "";
      throw new InvalidOffer(msg);
    }
  }

  private async extractJson(ctx: Task.Context) {
    if (isObject(this.args.value)) {
      return this.args.value;
    }

    if (isString(this.args.value)) {
      const url = new URL(this.args.value);
      const offerParam = url.searchParams.get("credential_offer");
      const uriParam = url.searchParams.get("credential_offer_uri");

      if (notNil(offerParam) && notNil(uriParam)) {
        throw new Error("`credential_offer` and `credential_offer_uri` must not both be present");
      }

      if (notNil(uriParam)) {
        const response = await ctx.Api.request("GET", uriParam);
        return response.body;
      }

      const json = asJsonObj(offerParam);
      return json;
    }

    throw new Error("Unknown value");
  }
}
