import { uuid } from "@stablelib/uuid";
import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { CredentialFormat } from "./CredentialFormat";
import { CredentialHelpers } from "./CredentialHelpers";

class IssueCredentialBody {
  constructor(
    public goalCode?: string,
    public comment?: string,
    public replacementId?: string,
    public moreAvailable?: string,
    public formats: CredentialFormat[] = []
  ) {}
}

export class IssueCredential {
  constructor(
    public body: IssueCredentialBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    throw new Error("Not implemented");
  }

  getCredentialStrings(): string[] {
    throw new Error("Not implemented");
  }

  static fromMessage(fromMessage: Message): IssueCredential {
    throw new Error("Not implemented");
  }

  static makeIssueFromRequestCredential(msg: Message): IssueCredential {
    throw new Error("Not implemented");
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
  formats: CredentialFormat[] = [],
  goalCode?: string,
  comment?: string,
  replacementId?: string,
  moreAvailable?: string
) {
  return new IssueCredentialBody(
    goalCode,
    comment,
    replacementId,
    moreAvailable,
    formats
  );
}
