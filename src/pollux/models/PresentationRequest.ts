import { Anoncreds, CredentialType, PresentationDefinitionRequest } from "../../domain";

interface JWTJson {
  options: {
    challenge: string;
    domain: string;
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
export class PresentationRequest<T = unknown> {
  /**
   * @constructor
   * @param type - CredentialType the json is related to
   * @param json - the raw value
   */
  constructor(type: CredentialType.PRESENTATION_EXCHANGE_DEFINITIONS, json: PresentationDefinitionRequest);
  constructor(type: CredentialType.AnonCreds, json: Anoncreds.PresentationRequest);
  constructor(type: CredentialType.JWT, json: JWTJson);
  constructor(
    private readonly type: CredentialType,
    private readonly json: T
  ) { }

  /**
   * Type guard that the instance is for the given CredentialType
   * 
   * @param type 
   * @returns {boolean}
   */
  isType(type: CredentialType.PRESENTATION_EXCHANGE_DEFINITIONS): this is PresentationRequest<PresentationDefinitionRequest>;
  isType(type: CredentialType.AnonCreds): this is PresentationRequest<Anoncreds.PresentationRequest>;
  isType(type: CredentialType.JWT): this is PresentationRequest<JWTJson>;
  isType(target: CredentialType) {
    return this.type === target;
  }

  /**
   * Get the raw PresentationRequest JSON
   * 
   * @returns JSON
   */
  toJSON(): T {
    return this.json;
  }
}
