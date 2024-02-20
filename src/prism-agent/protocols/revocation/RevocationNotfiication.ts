import { DID, Message } from "../../../domain";
import { ProtocolType } from "../ProtocolTypes";
import { PrismRevocationBody } from "../types";

export class RevocationNotification {
    public static type = ProtocolType.PrismRevocation;

    constructor(
        public body: PrismRevocationBody,
        public from: DID,
        public to: DID
    ) { }

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
}