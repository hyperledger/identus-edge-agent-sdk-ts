import { uuid } from "@stablelib/uuid";

import { ProtocolType } from "../ProtocolTypes";
import { DID, Message } from "../../../domain";

export class MediationRequest {
  public static type = ProtocolType.DidcommMediationRequest;

  public from: DID;
  public to: DID;
  public id: string;

  constructor(from: DID, to: DID, id: string = uuid()) {
    this.id = id;
    this.from = from;
    this.to = to;
  }

  makeMessage(): Message {
     const message = new Message(
      "{}",
      this.id,
      MediationRequest.type,
      this.from,
      this.to
    );
    return message;
  }
}
