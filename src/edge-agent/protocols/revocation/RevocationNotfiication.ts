import { DID, Message } from "../../../domain";
import { isNil, isString } from "../../../utils";
import { ProtocolType } from "../ProtocolTypes";
import { PrismRevocationBody } from "../types";

export class RevocationNotification {
  public static type = ProtocolType.PrismRevocation;

  constructor(
    public body: PrismRevocationBody,
    public from: DID,
    public to: DID
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    const message = new Message(
      body,
      undefined,
      RevocationNotification.type,
      this.from,
      this.to
    );
    return message;
  }

  static fromMessage(message: Message): RevocationNotification {
    if (!message.from || !message.to) {
      throw new Error("Invalid RevocationNotificationMessage (from or to) are undefined or invalid.");
    }

    if (isNil(message.body.issueCredentialProtocolThreadId) || !isString(message.body.issueCredentialProtocolThreadId)) {
      throw new Error("Invalid PrismRevocation message");
    }

    return new RevocationNotification(
      message.body as PrismRevocationBody,
      message.from,
      message.to
    );
  }
}
