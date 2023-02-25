import { DID } from "./DID";
import { AttachmentDescriptor } from "./MessageAttachment";
export declare enum MessageDirection {
    SENT = 0,
    RECEIVED = 1
}
export declare class Message {
    readonly piuri: string;
    readonly id: string;
    readonly direction: MessageDirection;
    readonly ack: string[];
    readonly body: string;
    readonly extraHeaders: string[];
    readonly createdTime: string;
    readonly expiresTimePlus: string;
    readonly attachments: AttachmentDescriptor[];
    readonly from?: DID | undefined;
    readonly to?: DID | undefined;
    readonly fromPrior?: string | undefined;
    readonly thid?: string | undefined;
    readonly pthid?: string | undefined;
    constructor(piuri: string, id: string, direction: MessageDirection, ack: string[], body: string, extraHeaders?: string[], createdTime?: string, expiresTimePlus?: string, attachments?: AttachmentDescriptor[], from?: DID | undefined, to?: DID | undefined, fromPrior?: string | undefined, thid?: string | undefined, pthid?: string | undefined);
}
