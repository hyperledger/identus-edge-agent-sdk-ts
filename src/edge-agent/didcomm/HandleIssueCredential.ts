import * as Domain from "../../domain";
import { expect } from "../../utils";
import { Task } from "../../utils/tasks";
import { IssueCredential } from "../protocols/issueCredential/IssueCredential";
import { DIDCommContext } from "./Context";

/**
 * Extract the verifiableCredential object from the Issue credential message asyncronously
 */

interface Args {
  issueCredential: IssueCredential;
}

export class HandleIssueCredential extends Task<Domain.Credential, Args> {
  async run(ctx: DIDCommContext) {
    const { issueCredential } = this.args;
    const attachment = expect(issueCredential.attachments.at(0), "Invalid attachment");
    const result = await ctx.Pollux.handle(
      "credential-issue",
      attachment.format,
      {
        data: attachment.payload,
        thid: issueCredential.thid
      }
    );

    const credential = result.pid === "credential"
      ? result.data
      : null;

    if (credential instanceof Domain.Credential) {
      await ctx.Pluto.storeCredential(credential);
      return credential;
    }

    throw new Error("invalid Credential issued");
  }
}
