import { uuid } from "@stablelib/uuid";
import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { CredentialFormat } from "./CredentialFormat";
import { CredentialPreview } from "./CredentialPreview";
import { ProposeCredentialBody } from "../types";
import { parseCredentialAttachments, parseProposeCredentialMessage } from "../../helpers/ProtocolHelpers";

export class ProposeCredential {
  public static type = ProtocolType.DidcommProposeCredential;

  constructor(
    public body: ProposeCredentialBody,
    public attachments: AttachmentDescriptor[],
    public from?: DID,
    public to?: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      ProposeCredential.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(fromMessage: Message): ProposeCredential {
    if (
      fromMessage.piuri !== ProtocolType.DidcommProposeCredential ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      throw new AgentError.InvalidProposedCredentialMessageError(
        "Invalid proposed credential message error."
      );
    }
    const proposeCredentialBody = parseProposeCredentialMessage(fromMessage);

    return new ProposeCredential(
      proposeCredentialBody,
      fromMessage.attachments,
      fromMessage.from,
      fromMessage.to,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static build<T>(
    credentialPreview: CredentialPreview,
    fromDID: DID,
    toDID: DID,
    thid?: string,
    credentials: Map<string, T> = new Map()
  ) {
    const { formats, attachments } = parseCredentialAttachments(credentials);
    const proposeCredentialBody = createProposeCredentialBody(
      credentialPreview,
      formats
    );

    return new ProposeCredential(
      proposeCredentialBody,
      attachments,
      fromDID,
      toDID,
      thid
    );
  }
}

export function createProposeCredentialBody(
  credentialPreview: CredentialPreview,
  formats: CredentialFormat[],
  goalCode?: string,
  comment?: string
): ProposeCredentialBody {
  return {
    formats,
    credential_preview: credentialPreview,
    goalCode,
    comment,
  };
}
