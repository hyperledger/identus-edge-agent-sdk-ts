import { uuid } from "@stablelib/uuid";

import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { CredentialBody } from "../types";
import { parseCredentialAttachments, parseCredentialBody } from "../../helpers/ProtocolHelpers";

export class RequestCredential {
  public static type = ProtocolType.DidcommRequestCredential;

  constructor(
    public body: CredentialBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to?: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      RequestCredential.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(fromMessage: Message): RequestCredential {
    if (
      fromMessage.piuri !== ProtocolType.DidcommRequestCredential ||
      !fromMessage.from
    ) {
      throw new AgentError.InvalidRequestCredentialMessageError(
        "Invalid request credential message error."
      );
    }
    const credentialBody = parseCredentialBody(fromMessage);

    return new RequestCredential(
      credentialBody,
      fromMessage.attachments,
      fromMessage.from,
      fromMessage.to,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static build<T>(
    fromDID: DID,
    toDID: DID,
    thid?: string,
    credentials: Map<string, T> = new Map()
  ): RequestCredential {
    const { formats, attachments } = parseCredentialAttachments(credentials);

    return new RequestCredential(
      { formats },
      attachments,
      fromDID,
      toDID,
      thid
    );
  }
}
