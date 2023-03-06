import { uuid } from "@stablelib/uuid";

export class AttachmentHeader {
  constructor(readonly children: string) {}
}

export class AttachmentJws {
  constructor(
    readonly header: AttachmentHeader,
    readonly protectedStr: string,
    readonly signature: string
  ) {}
}

export class AttachmentJwsData {
  constructor(readonly base64: string, readonly jws: AttachmentJws) {}
}

export class AttachmentBase64 {
  constructor(readonly base64: string) {}
}

export class AttachmentLinkData {
  constructor(readonly links: string[], readonly hash: string) {}
}

export class AttachmentJsonData {
  constructor(readonly data: string) {}
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
    public readonly data: AttachmentData,
    public readonly mediaType?: string,
    public readonly id: string = uuid(),
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
    return new AttachmentDescriptor(attachment, mediaType, id);
  }
}
