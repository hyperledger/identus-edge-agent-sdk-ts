import { AnonCredsCredential } from "../../pollux/models/AnonCredsVerifiableCredential";
import { PresentationRequest } from "../../pollux/models/PresentationRequest";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { AttachmentFormats, CredentialType, DID, LinkSecret, PresentationClaims, PresentationDefinitionRequest, PresentationOptions, PresentationSubmission, PrivateKey } from "../models";
import { Credential, CredentialRequestOptions } from "../models/Credential";
import type * as Anoncreds from "anoncreds-wasm";
import { SDJWTCredential } from "../../pollux/models/SDJWTVerifiableCredential";

export type CredentialRequestTuple<
  T1 = Anoncreds.CredentialRequestType,
  T2 = Anoncreds.CredentialRequestMetadataType
> = [T1, T2];



export type CredentialOfferJWTBasePayload = {
  options: {
    challenge: string;
    domain: string;
  }
}

export type CredentialOfferPayloads = {
  [CredentialType.AnonCreds]: Anoncreds.CredentialOfferType;
  [CredentialType.JWT]: CredentialOfferJWTBasePayload;
  [CredentialType.SDJWT]: CredentialOfferJWTBasePayload;

  [CredentialType.Unknown]: unknown;
  [CredentialType.W3C]: unknown;
};

export type CredentialOfferTypes =
  CredentialType.AnonCreds |
  CredentialType.JWT |
  CredentialType.SDJWT;

export type ProcessedCredentialOfferPayloads = {
  [CredentialType.AnonCreds]: CredentialRequestTuple;
  [CredentialType.JWT]: string;
  [CredentialType.SDJWT]: string;
  [CredentialType.Unknown]: unknown;
  [CredentialType.W3C]: unknown;
};


/**
 * Pollux
 * handle Credential related tasks
 */
export interface Pollux {

  revealCredentialFields: (credential: Credential, fields: string[], linkSecret?: string) => Promise<{
    [name: string]: any
  }>;

  isCredentialRevoked: (credential: Credential) => Promise<boolean>;

  parseCredential: (
    credentialBuffer: Uint8Array,
    options?: { type: CredentialType;[name: string]: any; }
  ) => Promise<Credential>;

  processCredentialOffer<
    Types extends CredentialOfferTypes
  >(
    offer: CredentialOfferPayloads[Types],
    options: CredentialRequestOptions
  ): Promise<ProcessedCredentialOfferPayloads[Types]>;

  createPresentationSubmission(
    presentationDefinition: PresentationDefinitionRequest<CredentialType.JWT>,
    credential: Credential,
    privateKey: PrivateKey
  ): Promise<PresentationSubmission<CredentialType.JWT>>
  createPresentationSubmission(
    presentationDefinition: PresentationDefinitionRequest<CredentialType.AnonCreds>,
    credential: Credential,
    privateKey: LinkSecret
  ): Promise<PresentationSubmission<CredentialType.AnonCreds>>

  /**
   * Process a PresentationSubmission, resolve the issuer did and verify the credential and the holder signature
   * @param {PresentationSubmission} submission 
   * @param {Credential} credential 
   * @param options - object containing necessary metadata
   * @returns {boolean} true if the submission is valid or false if it is not
   */
  verifyPresentationSubmission(
    presentationSubmission: PresentationSubmission<CredentialType.JWT>,
    options?: Pollux.verifyPresentationSubmission.options.JWT
  ): Promise<boolean>
  verifyPresentationSubmission(
    presentationSubmission: PresentationSubmission<CredentialType.AnonCreds>,
    options?: Pollux.verifyPresentationSubmission.options.Anoncreds
  ): Promise<boolean>
  verifyPresentationSubmission(
    presentationSubmission: PresentationSubmission,
    options?: Pollux.verifyPresentationSubmission.options.JWT | Pollux.verifyPresentationSubmission.options.Anoncreds
  ): Promise<boolean>

  /**
   * Creates a PresentationDefinitionRequest object for oob Verifications
   * @param {CredentialType} type 
   * @param {ProofTypes} proofs 
   * @param {PresentationOptions} options 
   */
  createPresentationDefinitionRequest<T extends CredentialType = CredentialType.JWT>(
    type: T,
    claims: PresentationClaims<T>,
    options: PresentationOptions
  ): Promise<PresentationDefinitionRequest<T>>



  /**
   * Process a PresentationRequest with Credential to create a Presentation.
   * 
   * @param {PresentationRequest} presentationRequest
   * @param {Credential} credential 
   * @param options - object containing necessary metadata
   * @returns dependent on the CredentialType 
   * @throws
   */
  createPresentationProof(presentationRequest: PresentationRequest<AttachmentFormats.AnonCreds>, credential: AnonCredsCredential, options: Pollux.createPresentationProof.options.Anoncreds): Promise<string>;
  createPresentationProof(presentationRequest: PresentationRequest<AttachmentFormats.JWT>, credential: JWTCredential, options: Pollux.createPresentationProof.options.JWT): Promise<string>;
  createPresentationProof(presentationRequest: PresentationRequest<AttachmentFormats.SDJWT>, credential: SDJWTCredential, options: Pollux.createPresentationProof.options.SDJWT): Promise<string>;
  createPresentationProof(presentationRequest: PresentationRequest<any>, credential: Credential, options?: Record<string, any>): Promise<any>;
}

export namespace Pollux {
  export namespace verifyPresentationSubmission {
    export type options = options.Anoncreds | options.JWT | options.SDJWT;
    export namespace options {
      export interface Anoncreds {
        [name: string | number | symbol]: any;
        presentationDefinitionRequest: PresentationDefinitionRequest<CredentialType.AnonCreds>,
      }
      export interface JWT {
        presentationDefinitionRequest: PresentationDefinitionRequest<CredentialType.JWT>,
        challenge?: string,
        domain?: string
      }
      export interface SDJWT {
        issuer: DID,
        presentationDefinitionRequest: PresentationDefinitionRequest<CredentialType.SDJWT>,
        requiredClaims?: string[]
      }
    }
  }
  export namespace createPresentationProof {
    export type options = options.Anoncreds | options.JWT | options.SDJWT;
    export namespace options {
      export interface Anoncreds {
        linkSecret: LinkSecret;
      }
      export interface JWT {
        did: DID;
        privateKey: PrivateKey;
      }
      export interface SDJWT {
        privateKey: PrivateKey;
        presentationFrame: Record<string, boolean>
      }
    }
  }
}
