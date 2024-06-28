/* eslint-disable @typescript-eslint/no-explicit-any */
import { DID } from "./DID";
import {
  AttachmentBase64,
  AttachmentData,
  AttachmentDescriptor,
  AttachmentFormats,
  AttachmentJsonData,
} from "./MessageAttachment";
import { AgentError } from "./Errors";
import { CredentialType, JsonString } from ".";
import { Pluto } from "../buildingBlocks/Pluto";
import { JsonObj, asJsonObj, isArray, isNil, isObject, isString, notEmptyString, notNil } from "../../utils";
import { base64, base64url } from "multiformats/bases/base64";

export enum MessageDirection {
  SENT = 0,
  RECEIVED = 1,
}

export class Message implements Pluto.Storable {
  public uuid: string;
  public readonly body: JsonObj;

  constructor(
    body: string | JsonObj,
    public readonly id: string = Pluto.makeUUID(),
    public readonly piuri: string,
    public readonly from?: DID,
    public readonly to?: DID,
    public readonly attachments: AttachmentDescriptor[] = [],
    public readonly thid?: string,
    public readonly extraHeaders: JsonObj = {},
    public readonly createdTime: number = Math.floor(Date.now() / 1000),
    public readonly expiresTimePlus: number = (createdTime + 1 * 24 * 60 * 60),
    public readonly ack: string[] = [],
    public direction: MessageDirection = MessageDirection.RECEIVED,
    public readonly fromPrior?: string,
    public readonly pthid?: string
  ) {
    this.uuid = Pluto.makeUUID();
    this.body = asJsonObj(body);
  }

  get credentialFormat() {
    const [attachment] = this.attachments;
    if (!attachment) {
      throw new Error("Required Attachment");
    }

    const format = this.body.formats?.find((format: any) => format.attach_id === attachment.id)?.format ?? attachment.format;
    if (
      format === AttachmentFormats.AnonCreds ||
      format === AttachmentFormats.ANONCREDS_PROOF_REQUEST ||
      format === AttachmentFormats.ANONCREDS_OFFER ||
      format === AttachmentFormats.ANONCREDS_ISSUE ||
      format === AttachmentFormats.ANONCREDS_REQUEST
    ) {
      return CredentialType.AnonCreds;
    }
    if (format === CredentialType.JWT) {
      return CredentialType.JWT;
    }
    if (format === CredentialType.SDJWT) {
      return CredentialType.SDJWT;
    }
    return CredentialType.Unknown;
  }

  static fromJson(jsonString: JsonString | any): Message {
    const messageObj = typeof jsonString === "object" ? jsonString : JSON.parse(jsonString);

    if (!isString(messageObj.body) && !isObject(messageObj.body)) {
      throw new AgentError.InvalidMessageError("undefined or wrong body");
    }

    const body = asJsonObj(messageObj.body);

    if (isNil(messageObj.piuri) || !isString(messageObj.piuri)) {
      throw new AgentError.InvalidMessageError("undefined or wrong piuri");
    }

    if (notNil(messageObj.attachments) && !isArray(messageObj.attachments)) {
      throw new AgentError.InvalidMessageError("undefined or wrong attachments");
    }

    if (
      (notNil(messageObj.ack) && !isArray(messageObj.ack)) ||
      messageObj.ack.some((x: any) => !isString(x))
    ) {
      throw new AgentError.InvalidMessageError("undefined or wrong ack");
    }

    if (
      notNil(messageObj.direction) &&
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

    const id = messageObj.id || undefined;
    const piuri = messageObj.piuri;
    const thid = messageObj.thid;
    const extraHeaders = asJsonObj(messageObj.extra_headers ?? messageObj.extraHeaders);
    const createdVal = (messageObj.created_time ?? messageObj.createdTime);
    const createdTime = notEmptyString(createdVal) ? Number(createdVal) : createdVal;
    const expiresVal = (messageObj.expires_time ?? messageObj.expires_time_plus ?? messageObj.expiredTimePlus);
    const expiresTimePlus = notEmptyString(expiresVal) ? Number(expiresVal) : expiresVal;
    const ack = messageObj.ack;
    const direction = messageObj.direction;
    const fromPrior = messageObj.from_prior ?? messageObj.fromPrior;
    const pthid = messageObj.pthid;

    const fromDID = messageObj.from ?
      messageObj.from instanceof DID ? messageObj.from :
        DID.fromString(messageObj.from) : undefined;

    const toDID = messageObj.to ?
      messageObj.to instanceof DID ? messageObj.to :
        DID.fromString(messageObj.to) : undefined;

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
      expiresTimePlus,
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

const decodeBase64 = (data: string) => {
  try {
    return base64.baseDecode(data);
  } catch (err) {
    return base64url.baseDecode(data);
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
        const decoded = Buffer.from(decodeBase64(attachment.data.base64)).toString();
        try {
          return JSON.parse(decoded);
        } catch (err) {
          return decoded;
        }
      }

      if (isJson(attachment.data)) {
        const decoded = attachment.data.data;
        return typeof decoded === "object"
          ? decoded
          : JSON.parse(decoded);
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
