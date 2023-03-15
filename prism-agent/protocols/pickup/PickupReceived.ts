import { DID, Message } from "../../../domain";
import { ProtocolType } from "../ProtocolTypes";
import { PickupReceivedBody } from "../types";

export class PickupReceived {
  public static type: ProtocolType.PickupRequest;

  constructor(
    public body: PickupReceivedBody,
    public from: DID,
    public to: DID
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify({
      to: this.to,
      from: this.from,
      body: {
        messageIdList: this.body.messageIdList || [],
      },
    });
    return new Message(
      body,
      undefined,
      PickupReceived.type,
      this.from,
      this.to
    );
  }
}
