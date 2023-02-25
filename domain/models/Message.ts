import { DID } from "./DID";
import { v4 as uuidv4 } from 'uuid';
import { AttachmentDescriptor } from "./MessageAttachment";



export enum MessageDirection {
  SENT = 0,
  RECEIVED = 1,
  }


  export class Message {
    constructor(
      public readonly piuri: string,
      public readonly id: string = uuidv4(),
      public readonly direction: MessageDirection = MessageDirection.RECEIVED,
      public readonly ack: string[] = [],
      public readonly body: string,
      public readonly extraHeaders: string[] = [],
      public readonly createdTime: string = Date.now().toString(),
      public readonly expiresTimePlus: string = (Date.now() + 1 * 24 * 60 * 60 * 1000).toString(),
      public readonly attachments: AttachmentDescriptor[] = [],
      public readonly from?: DID,
      public readonly to?: DID,
      public readonly fromPrior?: string,
      public readonly thid?: string,
      public readonly pthid?: string,
    ) {}
  }
