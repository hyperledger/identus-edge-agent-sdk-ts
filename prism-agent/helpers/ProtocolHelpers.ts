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
  PresentationBody,
  RequestPresentationBody,
  ProposePresentationBody,
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

  private static isPresentationBody(
    type: ProtocolType,
    body: any
  ): body is PresentationBody {
    return type === ProtocolType.DidcommPresentation;
  }

  private static isRequestPresentationBody(
    type: ProtocolType,
    body: any
  ): body is RequestPresentationBody {
    return type === ProtocolType.DidcommRequestPresentation;
  }

  private static isProposePresentationBody(
    type: ProtocolType,
    body: any
  ): body is ProposePresentationBody {
    return type === ProtocolType.DidcommProposePresentation;
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

  //TODO: Improve this function to remove code that is almost equal
  //Would propose to move each validation to its own class + reuse from here what is needed
  static safeParseBody<T>(body: string, type: ProtocolType): T {
    let parsed: T;
    try {
      parsed = JSON.parse(body);
    } catch (err) {
      throw new AgentError.UnknownCredentialBodyError();
    }

    if (
      this.isProposePresentationBody(type, parsed) ||
      this.isRequestPresentationBody(type, parsed)
    ) {
      const PresentationError = this.isProposePresentationBody(type, parsed)
        ? AgentError.InvalidProposePresentationBodyError
        : AgentError.InvalidPresentationBodyError;

      if (parsed.goalCode && typeof parsed.goalCode !== "string") {
        throw new PresentationError("Invalid goalCode");
      }
      if (parsed.comment && typeof parsed.comment !== "string") {
        throw new PresentationError("Invalid comment");
      }
      if (parsed.willConfirm && typeof parsed.willConfirm !== "boolean") {
        throw new PresentationError("Invalid willConfirm");
      }
      if (parsed.proofTypes) {
        if (
          !Array.isArray(parsed.proofTypes) ||
          parsed.proofTypes.find((proofType: any) => {
            if (!proofType.schema || typeof proofType.schema !== "string") {
              return true;
            }
            if (
              proofType.requiredFields &&
              (!Array.isArray(proofType.requiredFields) ||
                proofType.requiredFields.find(
                  (field: any) => typeof field !== "string"
                ))
            ) {
              return true;
            }
            if (
              proofType.trustIssuers &&
              (!Array.isArray(proofType.trustIssuers) ||
                proofType.trustIssuers.find(
                  (field: any) => typeof field !== "string"
                ))
            ) {
              return true;
            }
            return false;
          })
        ) {
          throw new PresentationError("Invalid proofTypes");
        }
      }

      return {
        comment: parsed.comment,
        goalCode: parsed.goalCode,
        willConfirm:
          parsed.willConfirm !== undefined ? parsed.willConfirm : false,
        proofTypes: parsed.proofTypes,
      } as T;
    }

    if (this.isPresentationBody(type, parsed)) {
      if (parsed.goalCode && typeof parsed.goalCode !== "string") {
        throw new AgentError.InvalidPresentationBodyError("Invalid goalCode");
      }
      if (parsed.comment && typeof parsed.comment !== "string") {
        throw new AgentError.InvalidPresentationBodyError("Invalid comment");
      }
      return {
        comment: parsed.comment,
        goalCode: parsed.goalCode,
      } as T;
    }

    if (this.isMediationGrantBody(type, parsed)) {
      const { routingDid } = parsed;
      if (!routingDid) {
        throw new AgentError.InvalidMediationGrantBodyError(
          "Undefined routingDid"
        );
      }
      return {
        routingDid: routingDid,
      } as T;
    }

    if (this.isOfferCredentialBody(type, parsed)) {
      const { formats = [], goalCode, comment } = parsed || {};
      if (!Object.keys(parsed).length) {
        throw new AgentError.InvalidOfferCredentialBodyError(
          "Invalid Offer CredentialBody Error"
        );
      }
      if (!formats || !Array.isArray(formats)) {
        throw new AgentError.InvalidCredentialFormats();
      }
      if (!parsed.credentialPreview) {
        throw new AgentError.InvalidOfferCredentialBodyError(
          "Undefined credentialPreview"
        );
      }
      return {
        formats: formats.map((format) => this.getFormatFromJsonObject(format)),
        credentialPreview: parsed.credentialPreview,
        replacementId: parsed.replacementId,
        multipleAvailable: parsed.multipleAvailable,
        goalCode,
        comment,
      } as T;
    }

    if (this.isIssueCredentialBody(type, parsed)) {
      const { formats = [], goalCode, comment } = parsed || {};
      if (!Object.keys(parsed).length) {
        throw new AgentError.InvalidIssueCredentialBodyError(
          "Invalid Issue CredentialBody Error"
        );
      }
      if (!formats || !Array.isArray(formats)) {
        throw new AgentError.InvalidCredentialFormats();
      }
      if (parsed.replacementId && typeof parsed !== "string") {
        throw new AgentError.InvalidIssueCredentialBodyError(
          "Invalid replacementId, should be a string"
        );
      }
      return {
        formats: formats.map((format) => this.getFormatFromJsonObject(format)),
        replacementId: parsed.replacementId,
        moreAvailable: parsed.moreAvailable,
        goalCode,
        comment,
      } as T;
    }

    if (this.isProposeCredentialBody(type, parsed)) {
      const { formats = [], goalCode, comment } = parsed || {};
      if (!Object.keys(parsed).length) {
        throw new AgentError.InvalidProposeCredentialBodyError(
          "Invalid Propose CredentialBody Error"
        );
      }
      if (!formats || !Array.isArray(formats)) {
        throw new AgentError.InvalidCredentialFormats();
      }
      if (!parsed.credentialPreview) {
        throw new AgentError.InvalidProposeCredentialBodyError(
          "Undefined credentialPreview"
        );
      }
      return {
        formats: formats.map((format) => this.getFormatFromJsonObject(format)),
        credentialPreview: parsed.credentialPreview,
        goalCode,
        comment,
      } as T;
    }

    if (this.isCredentialBody(type, parsed)) {
      const { formats = [], goalCode, comment } = parsed || {};
      if (!Object.keys(parsed).length) {
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
