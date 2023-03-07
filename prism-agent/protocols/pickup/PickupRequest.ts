import { DID, Message } from "../../../domain";
import { ProtocolType } from "../ProtocolTypes";
import { PickupRequestBody } from "../types";

export class PickupReceived {
  public static type: ProtocolType.PickupRequest;

  constructor(
    public body: PickupRequestBody,
    public from: DID,
    public to: DID
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify({
      to: this.to,
      from: this.from,
      body: {
        recipientKey: this.body.recipientKey || null,
        limit: this.body.limit,
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
