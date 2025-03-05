import { DID, Message } from "../../../domain";
import { ProtocolType } from "../ProtocolTypes";

/**
 * Specification:
 * https://didcomm.org/basicmessage/2.0/
 */

export interface BasicMessageBody {
  // content of the user intended message
  content: string;
}

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
}
