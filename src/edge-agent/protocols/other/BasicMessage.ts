import { DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { parseBasicMessageBody } from "../../helpers/ProtocolHelpers";
import { ProtocolType } from "../ProtocolTypes";
import { BasicMessageBody } from "../types";

export class BasicMessage {
  public static type = ProtocolType.DidcommBasicMessage;

  constructor(
    public body: BasicMessageBody,
    public from: DID,
    public to: DID,
    public thid?: string,
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      undefined,
      BasicMessage.type,
      this.from,
      this.to,
      [],
      this.thid
    );
  }

  static fromMessage(fromMessage: Message): BasicMessage {
    if (
      fromMessage.piuri !== ProtocolType.DidcommBasicMessage ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      throw new AgentError.InvalidBasicMessageBodyError(
        "Invalid BasicMessage body error."
      );
    }

    const proposeCredentialBody = parseBasicMessageBody(fromMessage);

    return new BasicMessage(proposeCredentialBody, fromMessage.from, fromMessage.to);
  }
}
