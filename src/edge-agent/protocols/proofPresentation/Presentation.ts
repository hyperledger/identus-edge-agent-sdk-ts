import { uuid } from "@stablelib/uuid";

import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { parsePresentationMessage } from "../../helpers/ProtocolHelpers";
import { ProtocolType } from "../ProtocolTypes";
import { PresentationBody } from "../types";
import { RequestPresentation } from "./RequestPresentation";

export class Presentation {
  public static type = ProtocolType.DidcommPresentation;

  constructor(
    public body: PresentationBody,
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
      Presentation.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(fromMessage: Message): Presentation {
    if (
      fromMessage.piuri !== ProtocolType.DidcommPresentation ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      throw new AgentError.InvalidPresentationMessageError();
    }
    const issueCredentialBody = parsePresentationMessage(fromMessage);

    return new Presentation(
      issueCredentialBody,
      fromMessage.attachments,
      fromMessage.from,
      fromMessage.to,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static makePresentationFromRequest(message: Message): Presentation {
    const request = RequestPresentation.fromMessage(message);
    const presentationBody = parsePresentationMessage(message);

    return new Presentation(
      presentationBody,
      request.attachments,
      request.to,
      request.from,
      message.id
    );
  }
}
