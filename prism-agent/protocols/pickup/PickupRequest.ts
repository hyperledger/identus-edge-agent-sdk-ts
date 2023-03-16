import { DID, Message } from "../../../domain";
import { ProtocolType } from "../ProtocolTypes";
import { PickupRequestBody } from "../types";

export class PickupRequest {
  public static type = ProtocolType.PickupRequest;

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

    return new Message(body, undefined, PickupRequest.type, this.from, this.to);
  }
}
