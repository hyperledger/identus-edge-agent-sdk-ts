import { uuid } from "@stablelib/uuid";
import {
  AttachmentBase64,
  AttachmentDescriptor,
  DID,
  Message,
} from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { CredentialFormat } from "./CredentialFormat";
import { CredentialHelpers, IssueCredentialBody } from "./CredentialHelpers";
import { RequestCredential } from "./RequestCredential";
import { base64url } from "multiformats/bases/base64";

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
    const body = JSON.stringify(this);
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
      if (attachment.data instanceof AttachmentBase64) {
        const base64UrlEncodedAttachment = base64url.baseEncode(
          Buffer.from(attachment.data.base64)
        );
        attachments.push(base64UrlEncodedAttachment);
      }
      return attachments;
    }, initialValue);
  }

  static fromMessage(fromMessage: Message): IssueCredential {
    if (
      fromMessage.piuri !== ProtocolType.DidcommIssueCredential ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      new AgentError.InvalidIssueCredentialMessageError(
        "Invalid issue credential message error."
      );
    }
    const issueCredentialBody =
      CredentialHelpers.safeParseBody<IssueCredentialBody>(
        fromMessage.body,
        this.type
      );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const fromDID = fromMessage.from!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const toDID = fromMessage.to!;

    return new IssueCredential(
      issueCredentialBody,
      fromMessage.attachments,
      fromDID,
      toDID,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static makeIssueFromRequestCredential(msg: Message): IssueCredential {
    const request = RequestCredential.fromMessage(msg);
    return new IssueCredential(
      createIssueCredentialBody(
        request.body.formats,
        request.body.goalCode,
        request.body.comment
      ),
      request.attachments,
      request.to,
      request.from,
      msg.id
    );
  }

  static build<T>(
    fromDID: DID,
    toDID: DID,
    thid?: string,
    credentials: Map<string, T> = new Map()
  ): IssueCredential {
    const { formats, attachments } =
      CredentialHelpers.parseCredentials(credentials);

    const issueCredentialBody = createIssueCredentialBody(formats);
    return new IssueCredential(
      issueCredentialBody,
      attachments,
      fromDID,
      toDID,
      thid
    );
  }
}

export function createIssueCredentialBody(
  formats: CredentialFormat[],
  goalCode?: string,
  comment?: string,
  replacementId?: string,
  moreAvailable?: string
) {
  return {
    formats,
    goalCode,
    comment,
    replacementId,
    moreAvailable,
  };
}
