import type { CredentialRequestMetadataType } from "anoncreds-wasm";
import * as Domain from "../../../domain";
import { Pollux } from "../../types";
import { AnonCredsCredential } from "../../models/AnonCredsVerifiableCredential";
import { ACContext } from "./Plugin";
import { expect } from "../../../utils";

export interface Args {
  /**
   * Credential Payload received
   */
  value: unknown;
  /**
   * Unique identifer for Credential Offer flow
   */
  thid?: string;
}

export class ParseCredential extends Pollux.ParseCredential<Args> {
  async run(ctx: ACContext) {
    const thid = expect(this.args.thid, "Thread ID is required");
    const metadata = await ctx.Pluto.getCredentialMetadata(thid);

    if (!metadata?.isType(Domain.CredentialType.AnonCreds)) {
      throw new Error("Invalid credential metadata");
    }

    const storedSecret = await ctx.Pluto.getLinkSecret();
    const linkSecret = expect(storedSecret?.secret, "LinkSecret is required");

    const credentialIssued = JSON.parse(this.getCredentialString());
    const credentialDefinition = await ctx.fetchCredentialDefinition(credentialIssued.cred_def_id);

    const credential = ctx.Anoncreds.processCredential(
      credentialDefinition,
      credentialIssued,
      metadata.toJSON() as CredentialRequestMetadataType,
      linkSecret
    );

    return new AnonCredsCredential(credential);
  }

  private getCredentialString(): string {
    if (typeof this.args.value === "string") {
      return this.args.value;
    }

    if (
      this.args.value instanceof Buffer
      || this.args.value instanceof Uint8Array
    ) {
      return Buffer.from(this.args.value).toString();
    }

    return JSON.stringify(this.args.value);
  }
}
