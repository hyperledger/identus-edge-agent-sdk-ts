/* eslint-disable @typescript-eslint/no-explicit-any */
import { AttachmentDescriptor } from "../../domain";
import { AgentError } from "../../domain/models/Errors";
import { ProtocolType } from "../protocols/ProtocolTypes";
import { CredentialFormat } from "../protocols/issueCredential/CredentialFormat";
import {
  ProposeCredentialBody,
  OfferCredentialBody,
  IssueCredentialBody,
  CredentialBody,
  MediationGrantBody,
  ParsedCredentialFormat,
} from "../protocols/types";

export class ProtocolHelpers {
  private static isProposeCredentialBody(
    type: ProtocolType,
    body: any
  ): body is ProposeCredentialBody {
    return type === ProtocolType.DidcommProposeCredential;
  }

  private static isOfferCredentialBody(
    type: ProtocolType,
    body: any
  ): body is OfferCredentialBody {
    return type === ProtocolType.DidcommOfferCredential;
  }

  private static isIssueCredentialBody(
    type: ProtocolType,
    body: any
  ): body is IssueCredentialBody {
    return type === ProtocolType.DidcommIssueCredential;
  }

  private static isCredentialBody(
    type: ProtocolType,
    body: any
  ): body is CredentialBody {
    return type === ProtocolType.DidcommRequestCredential;
  }

  private static isMediationGrantBody(
    type: ProtocolType,
    body: any
  ): body is MediationGrantBody {
    return type === ProtocolType.DidcommMediationGrant;
  }

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

  static safeParseBody<T>(body: string, type: ProtocolType): T {
    let parsed: ParsedCredentialFormat<T>;
    try {
      parsed = JSON.parse(body);
    } catch (err) {
      throw new AgentError.UnknownCredentialBodyError();
    }

    if (this.isMediationGrantBody(type, parsed.body)) {
      const { routingDid } = parsed.body;
      if (!routingDid) {
        throw new AgentError.InvalidMediationGrantBodyError(
          "Undefined routingDid"
        );
      }
      return {
        routingDid: routingDid,
      } as T;
    }

    if (this.isOfferCredentialBody(type, parsed.body)) {
      const { formats = [], goalCode, comment } = parsed.body || {};
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
    }

    if (this.isIssueCredentialBody(type, parsed.body)) {
      const { formats = [], goalCode, comment } = parsed.body || {};
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
    }

    if (this.isProposeCredentialBody(type, parsed.body)) {
      const { formats = [], goalCode, comment } = parsed.body || {};
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
    }

    if (this.isCredentialBody(type, parsed.body)) {
      const { formats = [], goalCode, comment } = parsed.body || {};
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
