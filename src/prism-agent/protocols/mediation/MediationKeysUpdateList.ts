import { uuid } from "@stablelib/uuid";
import { DID, Message } from "../../../domain";

import { ProtocolType } from "../ProtocolTypes";
import { MediationKeysUpdateListBody } from "../types";

export class MediationKeysUpdateList {
  public static type = ProtocolType.DidcommMediationKeysUpdate;

  public body: MediationKeysUpdateListBody;
  public from: DID;
  public to: DID;
  public id: string;

  constructor(from: DID, to: DID, recipientDids: DID[], id: string = uuid()) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.body = {
      updates: recipientDids.map((did) => ({
        recipient_did: did.toString(),
        action: "add",
      })),
    };
  }

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      MediationKeysUpdateList.type,
      this.from,
      this.to
    );
  }
}
