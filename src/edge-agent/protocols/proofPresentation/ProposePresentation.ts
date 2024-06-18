import { uuid } from "@stablelib/uuid";

import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { parseProposePresentationMessage } from "../../helpers/ProtocolHelpers";
import { ProtocolType } from "../ProtocolTypes";
import { ProposePresentationBody } from "../types";
import { RequestPresentation } from "./RequestPresentation";

export class ProposePresentation {
  public static type = ProtocolType.DidcommProposePresentation;
  public body: ProposePresentationBody;
  constructor(
    body: ProposePresentationBody,
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

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      ProposePresentation.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(fromMessage: Message): ProposePresentation {
    if (
      fromMessage.piuri !== ProtocolType.DidcommProposePresentation ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      throw new AgentError.InvalidProposePresentationMessageError();
    }

    const requestPresentationBody = parseProposePresentationMessage(fromMessage);

    return new ProposePresentation(
      requestPresentationBody,
      fromMessage.attachments,
      fromMessage.from,
      fromMessage.to,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static makeProposalFromRequest(message: Message): ProposePresentation {
    const request = RequestPresentation.fromMessage(message);
    const proposePresentationBody = parseProposePresentationMessage(message);

    return new ProposePresentation(
      proposePresentationBody,
      request.attachments,
      request.to,
      request.from,
      message.id
    );
  }
}
