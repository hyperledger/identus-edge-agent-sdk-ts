import { DID } from "./DID";
import { v4 as uuidv4 } from "uuid";
import { AttachmentDescriptor } from "./MessageAttachment";

export enum MessageDirection {
  SENT = 0,
  RECEIVED = 1,
}

export class Message {
  constructor(
    public readonly body: string,
    public readonly id: string = uuidv4(),
    public readonly piuri: string,
    public readonly from?: DID,
    public readonly to?: DID,
    public readonly attachments: AttachmentDescriptor[] = [],
    public readonly thid?: string,
    public readonly extraHeaders: string[] = [],
    public readonly createdTime: string = Date.now().toString(),
    public readonly expiresTimePlus: string = (
      Date.now() +
      1 * 24 * 60 * 60 * 1000
    ).toString(),
    public readonly ack: string[] = [],
    public readonly direction: MessageDirection = MessageDirection.RECEIVED,
    public readonly fromPrior?: string,
    public readonly pthid?: string
  ) {}
}
