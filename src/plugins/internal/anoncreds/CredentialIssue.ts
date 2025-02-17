import * as Domain from "../../../domain";
import { Payload } from "../../../domain/protocols/Payload";
import { AnonCredsCredential } from "../../../pollux/models/AnonCredsVerifiableCredential";
import { expect } from "../../../utils";
import { GetLinkSecret } from "./GetLinkSecret";
import { FetchCredentialDefinition } from "./FetchCredentialDefinition";
import type { Context } from "./index";
import * as Types from "./types";
import { Plugins } from "../../../plugins";

export interface Args {
  /**
   * Credential Payload received
   */
  data: any;
  /**
   * Unique identifer for Credential Offer flow
   */
  thid?: string;
}

export class CredentialIssue extends Plugins.Task<Args> {
  async run(ctx: Context) {
    const thid = expect(this.args.thid, "Thread ID is required");
    const metadata = await ctx.Pluto.getCredentialMetadata(thid);

    if (!metadata?.isType(Domain.CredentialType.AnonCreds)) {
      throw new Error("Invalid credential metadata");
    }

    const linkSecret = await ctx.run(new GetLinkSecret());
    const credentialJson = JSON.parse(this.getCredentialString());
    const credentialDefinition = await ctx.run(new FetchCredentialDefinition({ uri: credentialJson.cred_def_id }));

    const credential = await ctx.Anoncreds.processCredential(
      credentialDefinition,
      credentialJson,
      metadata.toJSON() as Types.CredentialMetadata,
      linkSecret.secret
    );

    const wrapCredential = new AnonCredsCredential(credential);
    return Payload.make("credential", wrapCredential);
  }

  private getCredentialString(): string {
    if (typeof this.args.data === "string") {
      return this.args.data;
    }

    if (
      this.args.data instanceof Buffer
      || this.args.data instanceof Uint8Array
    ) {
      return Buffer.from(this.args.data).toString();
    }

    return JSON.stringify(this.args.data);
  }
}
