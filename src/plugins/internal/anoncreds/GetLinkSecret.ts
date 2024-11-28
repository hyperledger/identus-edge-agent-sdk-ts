import { LinkSecret } from "../../../domain";
import { Task, notNil } from "../../../utils";
import type { Context } from "./index";

/**
 * Retrieve a LinkSecret for use with Anoncreds operations
 * should return the LinkSecret from storage
 * or a newly created one if none found
 */
export class GetLinkSecret extends Task<LinkSecret> {
  async run(ctx: Context) {
    const linkSecret = await ctx.Pluto.getLinkSecret();

    if (notNil(linkSecret)) {
      return linkSecret;
    }

    const secret = await ctx.Anoncreds.createLinksecret();
    const wrapLinkSecret = new LinkSecret(secret);
    await ctx.Pluto.storeLinkSecret(wrapLinkSecret);
    return wrapLinkSecret;
  }
}
