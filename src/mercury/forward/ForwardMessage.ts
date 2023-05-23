import { uuid } from "@stablelib/uuid";
import { AttachmentDescriptor, DID, Message } from "../../domain";

export interface ForwardMessageBody {
  next: string;
}

export class ForwardMessage {
  public static type = "https://didcomm.org/routing/2.0/forward";

  constructor(
    public body: ForwardMessageBody,
    public from: DID,
    public to: DID,
    public encryptedMessage: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    const attachment = new AttachmentDescriptor(
      { data: this.encryptedMessage },
      "application/json"
    );
    return new Message(body, this.id, ForwardMessage.type, this.from, this.to, [
      attachment,
    ]);
  }
}
