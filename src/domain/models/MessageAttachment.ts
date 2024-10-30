import { uuid } from "@stablelib/uuid";
import { base64url } from "multiformats/bases/base64";
import { Message } from "..";
export interface AttachmentHeader {
  children: string;
}

export interface AttachmentJws {
  header: AttachmentHeader;
  protectedStr: string;
  signature: string;
}

export interface AttachmentJwsData {
  base64: string;
  jws: AttachmentJws;
}

export interface AttachmentBase64 {
  base64: string;
}

export interface AttachmentLinkData {
  links: string[];
  hash: string;
}

export type AttachmentJsonData = {
  json: any;
} | {
  data: any
}

export type AttachmentData =
  | AttachmentJsonData
  | AttachmentLinkData
  | AttachmentBase64
  | AttachmentJwsData
  | AttachmentJws
  | AttachmentHeader;

export class AttachmentDescriptor {
  constructor(
    public readonly data: AttachmentData,
    public readonly mediaType?: string,
    public readonly id: string = uuid(),
    public readonly filename?: Array<string>,
    public readonly format?: string,
    public readonly lastModTime?: string,
    public readonly byteCount?: number,
    public readonly description?: string
  ) { }

  get payload() {
    return Message.Attachment.extractJSON(this)
  }

  static build<T>(
    payload: T,
    id: string = uuid(),
    mediaType = "application/json",
    filename?: Array<string>,
    format?: string,
    lastModTime?: string,
    byteCount?: number,
    description?: string

  ): AttachmentDescriptor {
    if (typeof payload === "string") {
      const encoded = base64url.baseEncode(Uint8Array.from(Buffer.from(payload)));
      const attachment: AttachmentBase64 = {
        base64: encoded,
      };
      return new AttachmentDescriptor(
        attachment,
        mediaType,
        id,
        filename,
        format,
        lastModTime,
        byteCount,
        description
      );
    }
    const attachment = payload as AttachmentJsonData
    return new AttachmentDescriptor(
      attachment,
      mediaType,
      id,
      filename,
      format,
      lastModTime,
      byteCount,
      description
    );
  }
}

export enum AttachmentFormats {
  ANONCREDS_OFFER = "anoncreds/credential-offer@v1.0",
  ANONCREDS_REQUEST = "anoncreds/credential-request@v1.0",
  ANONCREDS_ISSUE = "anoncreds/credential@v1.0",
  ANONCREDS_PROOF_REQUEST = "anoncreds/proof-request@v1.0",
  ANONCREDS_PROOF = "anoncreds/proof@v1.0",
  PRESENTATION_EXCHANGE_DEFINITIONS = "dif/presentation-exchange/definitions@v1.0",
  PRESENTATION_EXCHANGE_SUBMISSION = "dif/presentation-exchange/submission@v1.0",
  JWT = "prism/jwt",
  SDJWT = "vc+sd-jwt",
  AnonCreds = "AnonCreds",
}

