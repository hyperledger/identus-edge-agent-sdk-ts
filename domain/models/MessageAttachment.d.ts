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
type AttachmentData = AttachmentJsonData | AttachmentLinkData | AttachmentBase64 | AttachmentJwsData | AttachmentJws | AttachmentHeader;
export declare class AttachmentDescriptor {
    readonly id: string;
    readonly mediaType: string | null;
    readonly data: AttachmentData;
    readonly filename: Array<string> | null;
    readonly format: String | null;
    readonly lastModTime: string | null;
    readonly byteCount: Number | null;
    readonly deascription: string | null;
    constructor(id: string, mediaType: string | null, data: AttachmentData, filename: Array<string> | null, format?: String | null, lastModTime?: string | null, byteCount?: Number | null, deascription?: string | null);
}
export {};
