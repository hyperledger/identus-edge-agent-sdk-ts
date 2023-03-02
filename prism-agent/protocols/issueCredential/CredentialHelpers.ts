import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { CredentialFormat } from "./CredentialFormat";

interface ParsedCredentialType {
  formats: CredentialFormat[];
  attachments: AttachmentDescriptor[];
}

export class CredentialHelpers {
  private static parseCredentialsReduceInit: ParsedCredentialType = {
    formats: [],
    attachments: [],
  };

  static parseCredentials<T>(
    credentials: Map<string, T>
  ): ParsedCredentialType {
    const credentialsArray: Array<[string, T]> = Array.from(credentials);
    return credentialsArray.reduce(
      ({ formats, attachments }, [key, credential]) => {
        const attachment = AttachmentDescriptor.build(credential);
        const format = new CredentialFormat(attachment.id, key);
        return {
          formats: [...formats, format],
          attachments: [...attachments, attachment],
        };
      },
      CredentialHelpers.parseCredentialsReduceInit
    );
  }
}
