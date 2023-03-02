import { ProtocolType } from "../ProtocolTypes";

class Attribute {
  constructor(
    public name: string,
    public value: string,
    public mimeType?: string
  ) {}
}

export class CredentialPreview {
  public type = ProtocolType.DidcommCredentialPreview;

  constructor(public attributes: Attribute[]) {}
}

export function createCredentialPreviewAttribute(
  name: string,
  value: string,
  mimeType?: string
): Attribute {
  return new Attribute(name, value, mimeType);
}
