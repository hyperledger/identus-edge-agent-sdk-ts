import { AttachmentDescriptor } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import {
  InvalidCredentialBodyError,
  InvalidIssueCredentialBodyError,
  InvalidOfferCredentialBodyError,
  InvalidProposeCredentialBodyError,
  InvalidRequestCredentialBodyError,
} from "../../../domain/models/errors/Agent";
import { ProtocolType } from "../ProtocolTypes";
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

type CredentialBodyErrors =
  | InvalidCredentialBodyError
  | InvalidIssueCredentialBodyError
  | InvalidRequestCredentialBodyError
  | InvalidProposeCredentialBodyError
  | InvalidOfferCredentialBodyError;

export interface ParsedCredentialFormat<T> {
  body: T;
}

export function isProposeCredentialBody(
  type: ProtocolType,
  body: any
): body is ProposeCredentialBody {
  return type === ProtocolType.DidcommProposeCredential;
}

export function isOfferCredentialBody(
  type: ProtocolType,
  body: any
): body is OfferCredentialBody {
  return type === ProtocolType.DidcommOfferCredential;
}

export function isIssueCredentialBody(
  type: ProtocolType,
  body: any
): body is IssueCredentialBody {
  return type === ProtocolType.DidcommIssueCredential;
}

export function isCredentialBody(
  type: ProtocolType,
  body: any
): body is CredentialBody {
  return type === ProtocolType.DidcommRequestCredential;
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

  static safeParseBody<T extends CredentialBodyTypes>(
    body: string,
    type: ProtocolType
  ): T {
    let parsed: ParsedCredentialFormat<T>;
    try {
      parsed = JSON.parse(body);
    } catch (err) {
      throw new AgentError.UnknownCredentialBodyError();
    }

    const { formats = [], goalCode, comment } = parsed.body || {};

    if (isOfferCredentialBody(type, parsed.body)) {
      if (!Object.keys(parsed.body).length) {
        throw new AgentError.InvalidOfferCredentialBodyError(
          "Invalid Offer CredentialBody Error"
        );
      }
      if (!formats || !Array.isArray(formats)) {
        throw new AgentError.InvalidCredentialFormats();
      }
      if (!parsed.body.credentialPreview) {
        throw new AgentError.InvalidOfferCredentialBodyError(
          "Undefined credentialPreview"
        );
      }
      return {
        formats: formats.map((format) => this.getFormatFromJsonObject(format)),
        credentialPreview: parsed.body.credentialPreview,
        replacementId: parsed.body.replacementId,
        multipleAvailable: parsed.body.multipleAvailable,
        goalCode,
        comment,
      } as T;
    } else if (isIssueCredentialBody(type, parsed.body)) {
      if (!Object.keys(parsed.body).length) {
        throw new AgentError.InvalidIssueCredentialBodyError(
          "Invalid Issue CredentialBody Error"
        );
      }
      if (!formats || !Array.isArray(formats)) {
        throw new AgentError.InvalidCredentialFormats();
      }
      if (parsed.body.replacementId && typeof parsed.body !== "string") {
        throw new AgentError.InvalidIssueCredentialBodyError(
          "Invalid replacementId, should be a string"
        );
      }
      return {
        formats: formats.map((format) => this.getFormatFromJsonObject(format)),
        replacementId: parsed.body.replacementId,
        moreAvailable: parsed.body.moreAvailable,
        goalCode,
        comment,
      } as T;
    } else if (isProposeCredentialBody(type, parsed.body)) {
      if (!Object.keys(parsed.body).length) {
        throw new AgentError.InvalidProposeCredentialBodyError(
          "Invalid Propose CredentialBody Error"
        );
      }
      if (!formats || !Array.isArray(formats)) {
        throw new AgentError.InvalidCredentialFormats();
      }
      if (!parsed.body.credentialPreview) {
        throw new AgentError.InvalidProposeCredentialBodyError(
          "Undefined credentialPreview"
        );
      }
      return {
        formats: formats.map((format) => this.getFormatFromJsonObject(format)),
        credentialPreview: parsed.body.credentialPreview,
        goalCode,
        comment,
      } as T;
    } else if (isCredentialBody(type, parsed.body)) {
      if (!Object.keys(parsed.body).length) {
        throw new AgentError.InvalidCredentialBodyError(
          "Invalid CredentialBody Error"
        );
      }
      if (!formats || !Array.isArray(formats)) {
        throw new AgentError.InvalidCredentialFormats();
      }
      return {
        formats: formats.map((format) => this.getFormatFromJsonObject(format)),
        goalCode,
        comment,
      } as T;
    }

    throw new AgentError.UnknownCredentialBodyError();
  }
}
