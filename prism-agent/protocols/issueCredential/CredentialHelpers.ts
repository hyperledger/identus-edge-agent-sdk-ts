import { AttachmentDescriptor } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { CredentialFormat } from "./CredentialFormat";
import { CredentialPreview } from "./CredentialPreview";
export interface CredentialBody {
  formats: CredentialFormat[];
  goalCode?: string;
  comment?: string;
}

export interface IssueCredentialBody extends CredentialBody {
  moreAvailable?: string;
  replacementId?: string;
}

export interface OfferCredentialBody extends CredentialBody {
  credentialPreview: CredentialPreview;
  replacementId?: string;
  multipleAvailable?: string;
}
export interface ProposeCredentialBody extends CredentialBody {
  credentialPreview: CredentialPreview;
}

export type CredentialBodyTypes =
  | IssueCredentialBody
  | OfferCredentialBody
  | ProposeCredentialBody
  | CredentialBody;

export interface ParsedCredentialFormat {
  body: CredentialBodyTypes;
}

export function isProposeCredentialBody(
  body: any
): body is ProposeCredentialBody {
  return (
    typeof body === "object" &&
    "formats" in body &&
    Array.isArray(body.formats) &&
    (body.goalCode === undefined || typeof body.goalCode === "string") &&
    (body.comment === undefined || typeof body.comment === "string") &&
    typeof body.credentialPreview === "object"
  );
}

export function isOfferCredentialBody(body: any): body is OfferCredentialBody {
  return (
    typeof body === "object" &&
    "formats" in body &&
    Array.isArray(body.formats) &&
    (body.goalCode === undefined || typeof body.goalCode === "string") &&
    (body.comment === undefined || typeof body.comment === "string") &&
    typeof body.credentialPreview === "object" &&
    (body.replacementId === undefined ||
      typeof body.replacementId === "string") &&
    (body.multipleAvailable === undefined ||
      typeof body.multipleAvailable === "string")
  );
}

export function isIssueCredentialBody(body: any): body is IssueCredentialBody {
  return (
    typeof body === "object" &&
    "formats" in body &&
    Array.isArray(body.formats) &&
    (body.goalCode === undefined || typeof body.goalCode === "string") &&
    (body.comment === undefined || typeof body.comment === "string") &&
    (body.moreAvailable === undefined ||
      typeof body.moreAvailable === "string") &&
    (body.replacementId === undefined || typeof body.replacementId === "string")
  );
}

export function isCredentialBody(body: any): body is CredentialBody {
  return (
    typeof body === "object" &&
    "formats" in body &&
    Array.isArray(body.formats) &&
    (body.goalCode === undefined || typeof body.goalCode === "string") &&
    (body.comment === undefined || typeof body.comment === "string")
  );
}

export class CredentialHelpers {
  static parseCredentials<T>(credentials: Map<string, T>) {
    const initialValue = {
      formats: [] as CredentialFormat[],
      attachments: [] as AttachmentDescriptor[],
    };
    const credentialsArray: Array<[string, T]> = Array.from(credentials);
    return credentialsArray.reduce(
      ({ formats, attachments }, [key, credential]) => {
        const attachment = AttachmentDescriptor.build(credential);
        const format: CredentialFormat = {
          attachId: attachment.id,
          format: key,
        };
        return {
          formats: [...formats, format],
          attachments: [...attachments, attachment],
        };
      },
      initialValue
    );
  }

  static getFormatFromJsonObject(object: CredentialFormat): CredentialFormat {
    if (!object.attachId || !object.format) {
      throw new AgentError.InvalidCredentialFormats();
    }
    return {
      attachId: object.attachId,
      format: object.format,
    };
  }

  static safeParseBody<T extends CredentialBodyTypes>(body: string): T {
    try {
      const parsed: ParsedCredentialFormat = JSON.parse(body);
      if (!parsed.body) {
        throw new AgentError.InvalidCredentialBodyError();
      }

      const { formats = [], goalCode, comment } = parsed.body;
      if (!formats || !Array.isArray(formats)) {
        throw new AgentError.InvalidCredentialFormats();
      }

      const credentialFormats = formats.map((format) =>
        this.getFormatFromJsonObject(format)
      );

      if (isProposeCredentialBody(parsed.body)) {
        if (!parsed.body.credentialPreview) {
          throw new AgentError.InvalidProposeCredentialBodyError(
            "Undefined credentialPreview"
          );
        }
        return {
          formats: credentialFormats,
          credentialPreview: parsed.body.credentialPreview,
          goalCode,
          comment,
        } as T;
      } else if (isOfferCredentialBody(parsed.body)) {
        if (!parsed.body.credentialPreview) {
          throw new AgentError.InvalidOfferCredentialBodyError(
            "Undefined credentialPreview"
          );
        }
        return {
          formats: credentialFormats,
          credentialPreview: parsed.body.credentialPreview,
          replacementId: parsed.body.replacementId,
          multipleAvailable: parsed.body.multipleAvailable,
          goalCode,
          comment,
        } as T;
      } else if (isIssueCredentialBody(parsed.body)) {
        if (parsed.body.replacementId && typeof parsed.body !== "string") {
          throw new AgentError.InvalidIssueCredentialBodyError(
            "Invalid replacementId, should be a string"
          );
        }
        return {
          formats: credentialFormats,
          replacementId: parsed.body.replacementId,
          moreAvailable: parsed.body.moreAvailable,
          goalCode,
          comment,
        } as T;
      } else if (isCredentialBody(parsed.body)) {
        return {
          formats: credentialFormats,
          goalCode,
          comment,
        } as T;
      }

      throw new AgentError.InvalidCredentialBodyError();
    } catch (e) {
      if (e instanceof Error) {
        throw new AgentError.InvalidCredentialBodyError(e.message);
      } else {
        throw e;
      }
    }
  }
}
