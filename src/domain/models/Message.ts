/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";
import { DID } from "./DID";
import {
  AttachmentBase64,
  AttachmentData,
  AttachmentDescriptor,
  AttachmentJsonData,
} from "./MessageAttachment";
import { AgentError } from "./Errors";
import { JsonString } from ".";
import { Pluto } from "../buildingBlocks/Pluto";
import { isObject } from "../../utils";

export enum MessageDirection {
  SENT = 0,
  RECEIVED = 1,
}

export class Message implements Pluto.Storable {
  public readonly uuid = Pluto.makeUUID();

  constructor(
    public readonly body: string,
    public readonly id: string = uuidv4(),
    public readonly piuri: string,
    public readonly from?: DID,
    public readonly to?: DID,
    public readonly attachments: AttachmentDescriptor[] = [],
    public readonly thid?: string,
    public readonly extraHeaders: Record<string, any> = {},
    // Q: why is this a string?
    public readonly createdTime: string = Date.now().toString(),
    public readonly expiresTimePlus: string = (
      createdTime +
      1 * 24 * 60 * 60
    ).toString(),
    public readonly ack: string[] = [],
    public direction: MessageDirection = MessageDirection.RECEIVED,
    public readonly fromPrior?: string,
    public readonly pthid?: string
  ) {}

  static fromJson(jsonString: JsonString): Message {
    const messageObj = JSON.parse(jsonString);
    if (!messageObj.body || typeof messageObj.body !== "string") {
      throw new AgentError.InvalidMessageError("undefined or wrong body");
    }
    if (!messageObj.piuri || typeof messageObj.piuri !== "string") {
      throw new AgentError.InvalidMessageError("undefined or wrong piuri");
    }
    if (messageObj.attachments && !Array.isArray(messageObj.attachments)) {
      throw new AgentError.InvalidMessageError("undefined or wrong piuri");
    }

    if (
      (messageObj.ack && !Array.isArray(messageObj.ack)) ||
      messageObj.ack.find((val: any) => typeof val !== "string")
    ) {
      throw new AgentError.InvalidMessageError("undefined or wrong ack");
    }
    if (
      messageObj.direction &&
      messageObj.direction !== MessageDirection.RECEIVED &&
      messageObj.direction !== MessageDirection.SENT
    ) {
      throw new AgentError.InvalidMessageError("undefined or wrong direction");
    }

    const attachments: AttachmentDescriptor[] = messageObj.attachments
      .filter((attachment: any) => {
        if (
          this.isBase64Attachment(attachment.data) ||
          this.isJsonAttachment(attachment.data)
        ) {
          return true;
        }
        throw new AgentError.UnsupportedAttachmentType();
      })
      .map((attachment: any) => {
        return new AttachmentDescriptor(
          attachment.data,
          attachment.mediaType,
          attachment.id,
          attachment.filename,
          attachment.format,
          attachment.lastModTime,
          attachment.byteCount,
          attachment.description
        );
      });

    const body = messageObj.body;
    const id = messageObj.id || undefined;
    const piuri = messageObj.piuri;
    const thid = messageObj.thid;
    const extraHeaders = isObject(messageObj.extraHeaders) ? messageObj.extraHeaders : {};
    // ??? update this when no longer strings
    const createdTime = messageObj.createdTime?.toString();
    const expiredTimePlus = messageObj.expiredTimePlus?.toString();
    const ack = messageObj.ack;
    const direction = messageObj.direction;
    const fromPrior = messageObj.fromPrior;
    const pthid = messageObj.pthid;

    const fromDID = messageObj.from
      ? DID.fromString(messageObj.from)
      : undefined;
    const toDID = messageObj.to ? DID.fromString(messageObj.to) : undefined;

    return new Message(
      body,
      id,
      piuri,
      fromDID,
      toDID,
      attachments,
      thid,
      extraHeaders,
      createdTime,
      expiredTimePlus,
      ack,
      direction,
      fromPrior,
      pthid
    );
  }

  static isBase64Attachment(data: any): data is AttachmentBase64 {
    return data.base64 !== undefined && data.jws === undefined;
  }

  static isJsonAttachment(data: any): data is AttachmentJsonData {
    return data.data !== undefined;
  }
}

export namespace Message {
  export namespace Attachment {
    /**
     * Get the presumed JSON from the attachment
     * 
     * @param {AttachmentDescriptor} attachment 
     * @returns 
     */
    export const extractJSON = (attachment: AttachmentDescriptor) => {
      if (isBase64(attachment.data)) {
        const decoded = Buffer.from(attachment.data.base64, "base64").toString();
        const json = JSON.parse(decoded);

        return json;
      }

      if (isJson(attachment.data)) {
        // TODO wrong Types - attachment has already been parsed from string to json (by didcomm lib?)
        return typeof attachment.data.data === "object"
          ? attachment.data.data
          : JSON.parse(attachment.data.data);
      }

      // TODO better error
      throw new Error("Unhandled attachment");
    };

    const isBase64 = (data: AttachmentData): data is AttachmentBase64 => {
      return "base64" in data;
    };

    const isJson = (data: AttachmentData): data is AttachmentJsonData => {
      // ?? why do we mutate json -> data in didcomm Wrapper
      return "data" in data;
    };
  }
}
