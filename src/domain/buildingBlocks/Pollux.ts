import { AnonCredsCredential } from "../../pollux/models/AnonCredsVerifiableCredential";
import { PresentationRequest } from "../../pollux/models/PresentationRequest";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { CredentialType, DID, Message, PrivateKey } from "../models";
import { Anoncreds } from "../models/Anoncreds";
import { Credential, CredentialRequestOptions } from "../models/Credential";

type CredentialRequestTuple<
  T1 = Anoncreds.CredentialRequest,
  T2 = Anoncreds.CredentialRequestMeta
> = [T1, T2];

/**
 * Pollux
 * handle Credential related tasks
 */
export interface Pollux {
  parseCredential: (
    credentialBuffer: Uint8Array,
    options?: { type: CredentialType;[name: string]: any; }
  ) => Promise<Credential>;
  processJWTCredential(
    offer: Message,
    options: CredentialRequestOptions
  ): Promise<string>;
  processAnonCredsCredential(
    offer: Message,
    options: CredentialRequestOptions
  ): Promise<CredentialRequestTuple>;
  extractCredentialFormatFromMessage(message: Message): CredentialType;


  /**
   * Process a PresentationRequest with Credential to create a Presentation.
   * 
   * @param {PresentationRequest} presentationRequest
   * @param {Credential} credential 
   * @param options - object containing necessary metadata
   * @returns dependent on the CredentialType 
   * @throws
   */
  createPresentationProof(presentationRequest: PresentationRequest, credential: AnonCredsCredential, options: Pollux.createPresentationProof.options.Anoncreds): Promise<Anoncreds.Presentation>;
  createPresentationProof(presentationRequest: PresentationRequest, credential: JWTCredential, options: Pollux.createPresentationProof.options.JWT): Promise<string>;
  createPresentationProof(presentationRequest: PresentationRequest, credential: Credential, options?: Record<string, any>): Promise<any>;
}

export namespace Pollux {
  // createPresentationProof function
  export namespace createPresentationProof {
    // options parameter
    export type options = options.Anoncreds | options.JWT;

    export namespace options {
      export interface Anoncreds {
        linkSecret: string;
      }

      export interface JWT {
        did: DID;
        privateKey: PrivateKey;
      }
    }
  }
}
