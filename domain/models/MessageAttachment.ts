
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


export type AttachmentData = AttachmentJsonData | AttachmentLinkData | AttachmentBase64 | AttachmentJwsData | AttachmentJws | AttachmentHeader

export class AttachmentDescriptor {
  constructor(
    public readonly id: string,
    public readonly mediaType: string | null = null,
    public readonly data: AttachmentData,
    public readonly filename: Array<string> | null,
    public readonly format: string | null = null,
    public readonly lastModTime: string | null = null,
    public readonly byteCount: number | null = null,
    public readonly description: string | null = null
  ) { }
}
