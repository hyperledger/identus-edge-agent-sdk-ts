import { uuid } from "@stablelib/uuid";

export interface AttachmentHeader {
  readonly children: string;
}

export interface AttachmentJws {
  readonly header: AttachmentHeader;
  readonly protectedStr: string;
  readonly signature: string;
}

export interface AttachmentJwsData {
  readonly base64: string;
  readonly jws: AttachmentJws;
}

export interface AttachmentBase64 {
  readonly base64: string;
}

export interface AttachmentLinkData {
  readonly links: string[];
  readonly hash: string;
}

export interface AttachmentJsonData {
  readonly data: string;
}

type AttachmentData =
  | AttachmentJsonData
  | AttachmentLinkData
  | AttachmentBase64
  | AttachmentJwsData
  | AttachmentJws
  | AttachmentHeader;

export class AttachmentDescriptor {
  constructor(
    public readonly id: string,
    public readonly data: AttachmentData,
    public readonly mediaType?: string,
    public readonly filename?: Array<string>,
    public readonly format?: string,
    public readonly lastModTime?: string,
    public readonly byteCount?: number,
    public readonly deascription?: string
  ) {}

  static build<T>(
    payload: T,
    id: string = uuid(),
    mediaType = "application/json"
  ): AttachmentDescriptor {
    const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
    const attachment: AttachmentBase64 = {
      base64: encoded,
    };
    return new AttachmentDescriptor(id, attachment, mediaType);
  }
}
