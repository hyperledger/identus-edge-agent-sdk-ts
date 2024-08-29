import * as Domain from "../../domain";
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
    const message = issueCredential.makeMessage();
    const credentialType = message.credentialFormat;
    const attachment = message.attachments.at(0);

    if (!attachment) {
      throw new Error("No attachment");
    }

    if (!issueCredential.thid) {
      throw new Error("No thid");
    }

    const parseOpts: Domain.CredentialIssueOptions = {
      type: credentialType,
    };

    const payload = typeof attachment.payload === 'string' ? attachment.payload : JSON.stringify(attachment.payload);
    const credData = Uint8Array.from(Buffer.from(payload));

    if (credentialType === Domain.CredentialType.AnonCreds) {
      const linkSecret = await ctx.Pluto.getLinkSecret();
      parseOpts.linkSecret = linkSecret?.secret;

      const credentialMetadata = await ctx.Pluto.getCredentialMetadata(
        issueCredential.thid
      );

      if (!credentialMetadata || !credentialMetadata.isType(Domain.CredentialType.AnonCreds)) {
        throw new Error("Invalid credential Metadata");
      }

      parseOpts.credentialMetadata = credentialMetadata.toJSON();
    }

    const credential = await ctx.Pollux.parseCredential(credData, parseOpts);

    await ctx.Pluto.storeCredential(credential);

    return credential;
  }
}
