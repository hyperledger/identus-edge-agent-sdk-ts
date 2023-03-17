import { DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolHelpers } from "../../helpers/ProtocolHelpers";
import { ProtocolType } from "../ProtocolTypes";
import { BasicMessageBody } from "../types";

export class BasicMessage {
  public static type = ProtocolType.DidcommBasicMessage;

  constructor(
    public body: BasicMessageBody,
    public from: DID,
    public to: DID
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(body, undefined, BasicMessage.type, this.from, this.to);
  }

  static fromMessage(fromMessage: Message): BasicMessage {
    if (
      fromMessage.piuri !== ProtocolType.DidcommBasicMessage ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      throw new AgentError.InvalidBasicMEssageBodyError(
        "Invalid BasicMessage body error."
      );
    }
    const type = fromMessage.piuri as ProtocolType;

    const proposeCredentialBody =
      ProtocolHelpers.safeParseBody<BasicMessageBody>(fromMessage.body, type);

    const fromDID = fromMessage.from;
    const toDID = fromMessage.to;

    return new BasicMessage(proposeCredentialBody, fromDID, toDID);
  }
}
