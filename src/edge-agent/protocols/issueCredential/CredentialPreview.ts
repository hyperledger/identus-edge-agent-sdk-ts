import { ProtocolType } from "../ProtocolTypes";

export interface Attribute {
  name: string;
  value: string;
  mimeType?: string;
}

export interface CredentialPreview {
  type: ProtocolType.DidcommCredentialPreview;
  attributes: Attribute[];
}

export function createCredentialPreviewAttribute(
  name: string,
  value: string,
  mimeType?: string
): Attribute {
  return {
    name,
    value,
    mimeType,
  };
}
