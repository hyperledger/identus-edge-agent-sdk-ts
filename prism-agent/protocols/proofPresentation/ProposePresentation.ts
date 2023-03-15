import { uuid } from "@stablelib/uuid";

import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolHelpers } from "../../helpers/ProtocolHelpers";
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

    const type = fromMessage.piuri as ProtocolType;
    const requestPresentationBody =
      ProtocolHelpers.safeParseBody<ProposePresentationBody>(
        fromMessage.body,
        type
      );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const fromDID = fromMessage.from!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const toDID = fromMessage.to!;

    return new ProposePresentation(
      requestPresentationBody,
      fromMessage.attachments,
      fromDID,
      toDID,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static makeProposalFromRequest(message: Message): ProposePresentation {
    const request = RequestPresentation.fromMessage(message);

    const type = message.piuri as ProtocolType;
    const proposePresentationBody =
      ProtocolHelpers.safeParseBody<ProposePresentationBody>(
        message.body,
        type
      );

    return new ProposePresentation(
      proposePresentationBody,
      request.attachments,
      request.to,
      request.from,
      message.id
    );
  }
}
