import { AttachmentFormats, CredentialType, PresentationDefinitionRequest } from "../../domain";
import type * as Anoncreds from "anoncreds-wasm";
import type { PresentationFrame } from '@sd-jwt/types';

export interface JWTJson {
  options: {
    challenge: string;
    domain: string;
  };
  presentation_definition: {
    id: string;
  };
}

export type SDJWTJson = {
  options?: {
    presentationFrame?: PresentationFrame<any>
  };
  presentation_definition: {
    id: string;
  };
}

/**
 * Wrapper for Presentation Requests for different Credential Types
 * 
 * @class PresentationRequest
 * @typedef {PresentationRequest}
 */
export class PresentationRequest<
  Type extends AttachmentFormats = AttachmentFormats.JWT,
  Body = Type extends AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS ? PresentationDefinitionRequest<CredentialType.JWT> :
  Type extends AttachmentFormats.AnonCreds ? Anoncreds.PresentationRequestType :
  Type extends AttachmentFormats.JWT ? JWTJson :
  Type extends AttachmentFormats.SDJWT ? SDJWTJson : unknown
> {
  /**
   * @constructor
   * @param type - CredentialType the json is related to
   * @param json - the raw value
   */
  constructor(
    private readonly type: Type,
    private readonly json: Body
  ) { }

  /**
   * Type guard that the instance is for the given CredentialType
   * 
   * @param target
   * @returns {boolean}
   */
  isType(type: AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS): this is PresentationRequest<AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS, PresentationDefinitionRequest<CredentialType.JWT>>;
  isType(type: AttachmentFormats.AnonCreds): this is PresentationRequest<AttachmentFormats.AnonCreds, Anoncreds.PresentationRequestType>;
  isType(type: AttachmentFormats.JWT): this is PresentationRequest<AttachmentFormats.JWT, JWTJson>;
  isType(type: AttachmentFormats.SDJWT): this is PresentationRequest<AttachmentFormats.SDJWT, SDJWTJson>;
  isType(target: AttachmentFormats) {
    return this.type === target;
  }

  /**
   * Get the raw PresentationRequest JSON
   * 
   * @returns JSON
   */
  toJSON() {
    return this.json;
  }
}