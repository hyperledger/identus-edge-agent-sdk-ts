import { uuid } from "@stablelib/uuid";

import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { parseRequestPresentationMessage } from "../../helpers/ProtocolHelpers";
import { ProtocolType } from "../ProtocolTypes";
import { RequestPresentationBody } from "../types";
import { ProposePresentation } from "./ProposePresentation";

export class RequestPresentation {
  public static type = ProtocolType.DidcommRequestPresentation;
  public body: RequestPresentationBody;

  constructor(
    body: RequestPresentationBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {
    this.body = {
      willConfirm: body.willConfirm !== undefined ? body.willConfirm : false,
      proofTypes: body.proofTypes,
      goalCode: body.goalCode,
      comment: body.comment,
    };
  }

  get decodedAttachments() {
    return this.attachments.map((attachment) => attachment.payload);
  }

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      RequestPresentation.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(fromMessage: Message): RequestPresentation {
    if (
      fromMessage.piuri !== ProtocolType.DidcommRequestPresentation ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      throw new AgentError.InvalidRequestPresentationMessageError();
    }
    const requestPresentationBody = parseRequestPresentationMessage(fromMessage);

    return new RequestPresentation(
      requestPresentationBody,
      fromMessage.attachments,
      fromMessage.from,
      fromMessage.to,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static makeRequestFromProposal(message: Message): RequestPresentation {
    const request = ProposePresentation.fromMessage(message);
    const requestPresentationBody = parseRequestPresentationMessage(message);

    return new RequestPresentation(
      requestPresentationBody,
      request.attachments,
      request.to,
      request.from,
      message.id
    );
  }
}
