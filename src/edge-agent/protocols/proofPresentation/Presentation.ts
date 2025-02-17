import { uuid } from "@stablelib/uuid";
import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { isString, notNil } from "../../../utils";

/**
 * Specification:
 * https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#presentation
 */

export interface PresentationBody {
  // optional field that indicates the goal of the message sender
  goal_code?: string;
  // a field that provides some human readable information about this presentation
  comment?: string;
}

export class Presentation {
  public static type = ProtocolType.DidcommPresentation;

  constructor(
    public body: PresentationBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {
    this.validate();
  }

  private validate() {
    if (notNil(this.body.goal_code) && !isString(this.body.goal_code)) {
      throw new AgentError.InvalidPresentationBodyError("Invalid goalCode");
    }

    if (notNil(this.body.comment) && !isString(this.body.comment)) {
      throw new AgentError.InvalidPresentationBodyError("Invalid comment");
    }
  }

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

    return new Presentation(
      fromMessage.body,
      fromMessage.attachments,
      fromMessage.from,
      fromMessage.to,
      fromMessage.thid,
      fromMessage.id
    );
  }
}
