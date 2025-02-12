import { uuid } from "@stablelib/uuid";
import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { base64url } from "multiformats/bases/base64";
import { isNil } from "../../../utils";

/**
 * Specification:
 * https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#issue-credential
 */

export interface IssueCredentialBody {
  // optional field that provides human readable information about the issued credential
  comment?: string;
  // optional field that provides an identifier used to manage credential replacement
  replacement_id?: string;
}

export class IssueCredential {
  public static type = ProtocolType.DidcommIssueCredential;

  constructor(
    public body: IssueCredentialBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      IssueCredential.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  getCredentialStrings(): string[] {
    const initialValue: string[] = [];
    return this.attachments.reduce((attachments, attachment) => {
      if (Message.isBase64Attachment(attachment.data)) {
        const base64UrlEncodedAttachment = base64url.baseEncode(
          Buffer.from(attachment.data.base64)
        );
        attachments.push(base64UrlEncodedAttachment);
      }
      return attachments;
    }, initialValue);
  }

  static fromMessage(msg: Message): IssueCredential {
    if (
      msg.piuri !== ProtocolType.DidcommIssueCredential
      || isNil(msg.from)
      || isNil(msg.to)
    ) {
      throw new AgentError.InvalidIssueCredentialMessageError(
        "Invalid issue credential message error."
      );
    }

    return new IssueCredential(
      msg.body,
      msg.attachments,
      msg.from,
      msg.to,
      msg.thid,
      msg.id
    );
  }
}
