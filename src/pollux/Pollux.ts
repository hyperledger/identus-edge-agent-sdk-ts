import { uuid } from "@stablelib/uuid";

import { Castor } from "../domain/buildingBlocks/Castor";
import { Pollux as IPollux, PresentationOptions } from "../domain/buildingBlocks/Pollux";
import { InvalidJWTString } from "../domain/models/errors/Pollux";
import { base64url, base64 } from "multiformats/bases/base64";
import { AnoncredsLoader } from "./AnoncredsLoader";
import {
  AttachmentDescriptor,
  CredentialRequestOptions,
  CredentialType,
  Message,
  AttachmentBase64,
  Api,
  PolluxError,
  Credential,
  PresentationDefinitionRequest,
  InputConstraints,
  InputField,
  InputLimitDisclosure,
  InputDescriptor,
  JWT_FORMAT,
  PrivateKey,
  PresentationSubmission,
  DescriptorItem,
  Authentication,
  CastorError,
  ProofTypesEnum,
  ProofPurpose,
  SubmissionDescriptorFormat,
} from "../domain";
import { AnonCredsCredential } from "./models/AnonCredsVerifiableCredential";

import { JWTCredential } from "./models/JWTVerifiableCredential";
import { JWT } from "../apollo/utils/jwt/JWT";
import { Anoncreds } from "../domain/models/Anoncreds";
import { ApiImpl } from "../prism-agent/helpers/ApiImpl";
import { PresentationRequest } from "./models/PresentationRequest";
import { ProofTypes } from "../prism-agent/protocols/types";
import { Secp256k1PrivateKey } from "../apollo/utils/Secp256k1PrivateKey";
import { DescriptorPath } from "./utils/DescriptorPath";

/**
 * Implementation of Pollux
 *
 * @export
 * @class Pollux
 * @typedef {Pollux}
 */
export default class Pollux implements IPollux {
  private _anoncreds: AnoncredsLoader | undefined;

  constructor(
    private castor: Castor,
    private api: Api = new ApiImpl(),
    private jwt = new JWT(castor)
  ) { }

  async createPresentationSubmission(
    presentationDefinition: PresentationDefinitionRequest,
    challenge: string,
    credential: Credential,
    privateKey: PrivateKey
  ): Promise<PresentationSubmission> {
    if (credential instanceof JWTCredential) {
      if (!(privateKey instanceof Secp256k1PrivateKey)) {
        throw new CastorError.InvalidKeyError()
      }

      const descriptorItems: DescriptorItem[] = presentationDefinition.inputDescriptors.map(
        (inputDescriptor) => {
          if (inputDescriptor.format && (!inputDescriptor.format.jwt || !inputDescriptor.format.jwt?.jwt_vp || !inputDescriptor.format.jwt?.jwt_vc)) {
            //TODO: Improive error
            throw new Error("Invalid format")
          }
          return {
            id: inputDescriptor.id,
            format: "jwt_vc",
            path: "$.verifiableCredential[0]"
          }
        });

      const subject = credential.subject;
      const didDocument = await this.castor.resolveDID(subject);
      const authenticationKey = didDocument.coreProperties.find((key) => {
        return key instanceof Authentication
      });

      if (!authenticationKey) {
        throw new CastorError.InvalidKeyError()
      }

      const verificationMethod = (authenticationKey as Authentication).verificationMethods.at(0)?.id;
      if (!verificationMethod) {
        throw new CastorError.InvalidKeyError()
      }

      if (!privateKey.isSignable()) {
        throw new Error("Cannot sign the proof challenge with this key.")
      }

      const jws = await this.jwt.sign(subject, privateKey, {
        aud: 'N/A',
        nonce: Buffer.from(privateKey.sign(Buffer.from(challenge))).toString('hex'),
        vp: {
          "@context": ["https://www.w3.org/2018/presentations/v1"],
          type: ["VerifiablePresentation"],
        },
      })

      const presentationSubmission: PresentationSubmission = {
        presentation_submission: {
          id: uuid(),
          definition_id: presentationDefinition.id,
          descriptor_map: descriptorItems
        },
        verifiable_credential: [
          {
            vc: credential.vc,
            proof: {
              type: ProofTypesEnum.JsonWebSignature2020,
              created: Date().toString(),
              proofPurpose: ProofPurpose.AUTHENTTICATION,
              verificationMethod: verificationMethod,
              jws: credential.id
            }
          }
        ],
        proof: {
          type: ProofTypesEnum.JsonWebSignature2020,
          proofPurpose: ProofPurpose.AUTHENTTICATION,
          verificationMethod: subject,
          jws: jws
        }
      }
      return presentationSubmission
    } else {
      throw new PolluxError.CredsentialTypeNotSupported()
    }
  }

  parsePresentationSubmission(data: any): data is PresentationSubmission {
    //Validate object
    if (typeof data !== "object") {
      return false;
    }

    const {
      presentation_submission,
      verifiable_credential,
      proof
    } = data;

    //Validate required fields
    if (!presentation_submission || (typeof presentation_submission !== "object")) {
      return false;
    }

    if (!verifiable_credential ||
      !Array.isArray(verifiable_credential)
    ) {
      return false;
    }

    if (!proof || (typeof proof !== "object")) {
      return false;
    }

    const {
      type,
      proofPurpose,
      verificationMethod,
      jws
    } = proof;

    //Validate proof types
    if (
      !type || (typeof type !== "string") ||
      !verificationMethod || (typeof verificationMethod !== "string") ||
      !jws || (typeof jws !== "string") ||
      !proofPurpose || (typeof proofPurpose !== "string") || proofPurpose !== ProofPurpose.AUTHENTTICATION
    ) {
      return false
    }

    return true;
  }

  async createPresentationDefinitionRequest(
    type: CredentialType,
    proofs: ProofTypes[],
    options: PresentationOptions
  ): Promise<PresentationDefinitionRequest> {
    if (type !== CredentialType.JWT) {
      throw new PolluxError.CredsentialTypeNotSupported()
    }

    const jwtOptions = options.jwt;
    if (!jwtOptions) {
      //TODO: improve erorr handling
      throw new Error("Required field options jwt is undefined")
    }

    if (!jwtOptions.jwtAlg &&
      !jwtOptions.jwtVcAlg &&
      !jwtOptions.jwtVpAlg) {
      throw new PolluxError.InvalidJWTPresentationDefinitionError("Presentation options didn't include jwtAlg, jwtVcAlg or jwtVpAlg, one of them is required.")
    }

    const paths =
      proofs.reduce<string[]>((all, proof) => {
        return [
          ...all,
          ...(proof.requiredFields ?? []),
          //...(proof.trustIssuers ?? [])
        ]
      }, []);

    const constaints: InputConstraints = {
      fields: paths.map((path) => {
        const inputField: InputField = {
          path: [
            `$.vc.credentialSubject.${path}`
          ],
          id: uuid(),
          optional: false
        }
        return inputField
      }),
      limitDisclosure: InputLimitDisclosure.REQUIRED
    };

    constaints.fields.push({
      path: ["$.vc.issuer"],
      id: uuid(),
      optional: false
    })

    const inputDescriptor: InputDescriptor = {
      id: uuid(),
      name: options.name,
      purpose: options.purpose,
      constraints: constaints
    }

    const format: JWT_FORMAT = {
      jwt_vc: {
        alg: jwtOptions.jwtVcAlg ?? []
      },
      jwt_vp: {
        alg: jwtOptions.jwtVpAlg ?? []
      }
    }

    const presentationDefinitionRequest: PresentationDefinitionRequest = {
      id: uuid(),
      inputDescriptors: [
        inputDescriptor
      ],
      format: {
        jwt: format
      }
    }

    return presentationDefinitionRequest
  }

  async verifyPresentationSubmission(presentationSubmission: any): Promise<boolean> {
    const isValidPresentationSubmission = this.parsePresentationSubmission(presentationSubmission);
    if (!isValidPresentationSubmission) {
      throw new Error("Invalid presentationSubmission object")
    }

    if (!presentationSubmission.proof ||
      !presentationSubmission.proof.jws) {
      throw new Error("Invalid presentationSubmission object, signed jws is required")
    }

    const descriptorMapper = new DescriptorPath(presentationSubmission);
    const descriptorMaps = presentationSubmission.presentation_submission.descriptor_map;

    //Validate all the descriptor items
    for (let descriptorItem of descriptorMaps) {

      if (descriptorItem.format === SubmissionDescriptorFormat.JWT_VC) {
        const [credentialObject] = descriptorMapper.getValue(descriptorItem.path);
        if (!credentialObject || !credentialObject.vc || !credentialObject.proof || !credentialObject.proof.jws) {
          throw new Error("Invalid Credential Object");
        }
        const vc = credentialObject.vc;
        const proof = credentialObject.proof;
        const jws = proof.jws;

        const isPrismJWTCredentialType = vc.type !== undefined &&
          Array.isArray(vc.type) &&
          vc.type.includes(CredentialType.JWT);

        if (!isPrismJWTCredentialType) {
          throw new Error("Invalid JWT Credential only prism/jwt is supported for jwt_vc");
        }

        const issuer = vc.issuer;
        const credentialValid = await this.jwt.verify(issuer, jws);
        if (!credentialValid) {
          return false
        }
      } else {
        debugger;
      }
    }

    //Get the proof on the root of the submission, this should contain a challenge signed by the user, a verificationMethod, and a keyPurpose
    //To verify, we grab the subject's did, and resolve it using castor to extract the correct "keyPurpose key".
    //We instanciate the key using Apollo or something and verify the challenge signature using Apollo.
    return true;
  }

  async start() {
    this._anoncreds = await AnoncredsLoader.getInstance();
  }

  // TODO: should anoncreds hidden through abstraction
  get anoncreds() {
    if (this._anoncreds === undefined) {
      throw new Error("Pollux - Anoncreds not loaded");
    }

    return this._anoncreds;
  }

  // TODO: does this function belong in Pollux, can we move to Message?
  public extractCredentialFormatFromMessage(message: Message) {
    const [attachment] = message.attachments;
    if (!attachment) {
      throw new Error("Required Attachment");
    }

    if (
      attachment.format === CredentialType.ANONCREDS_PROOF_REQUEST ||
      attachment.format === CredentialType.ANONCREDS_OFFER ||
      attachment.format === CredentialType.ANONCREDS_ISSUE ||
      attachment.format === CredentialType.ANONCREDS_REQUEST
    ) {
      return CredentialType.AnonCreds;
    }

    if (attachment.format === CredentialType.JWT) {
      return CredentialType.JWT;
    }

    return CredentialType.Unknown;
  }

  async processJWTCredential(
    offer: Message,
    options: CredentialRequestOptions = {}
  ) {
    const { did, keyPair } = options;
    if (!did) {
      throw new Error("Required did ");
    }

    if (!keyPair) {
      throw new Error("Required keyPair ");
    }

    const domainChallenge = this.extractDomainChallenge(offer.attachments);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const challenge = domainChallenge.challenge!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const domain = domainChallenge.domain!;

    const signedJWT = await this.jwt.sign(did, keyPair.privateKey.value, {
      aud: domain,
      nonce: challenge,
      vp: {
        "@context": ["https://www.w3.org/2018/presentations/v1"],
        type: ["VerifiablePresentation"],
      },
    });

    return signedJWT;
  }

  /**
   * handle the retrieval of a Credential Definition
   * 
   * @param credentialDefinitionId 
   * @returns 
   */
  private async fetchCredentialDefinition(
    credentialDefinitionId: string
  ): Promise<Anoncreds.CredentialDefinition> {
    const response = await this.api.request<Anoncreds.CredentialDefinition>(
      "get",
      credentialDefinitionId,
      new Map(),
      new Map(),
      null
    );

    return response.body;
  }

  /**
   * handle the retrieval of a Schema definition
   * 
   * @param {string} schemaURI - URI used to retrieve the Schema definition
   * @returns 
   */
  private async fetchSchema(schemaURI: string): Promise<any> {
    const response = await this.api.request<Anoncreds.Schema>(
      "get",
      schemaURI,
      new Map(),
      new Map(),
      null
    );

    return response.body;
  }

  private extractAttachment(body: any, attachments: AttachmentDescriptor[]) {
    const [attachment] = attachments;
    if (!attachment) {
      throw new Error("Attachment not found");
    }

    return JSON.parse(
      Buffer.from(
        base64.baseDecode((attachment.data as AttachmentBase64).base64)
      ).toString()
    );
  }

  private isAnonCredsBody(body: any): body is Anoncreds.CredentialOffer {
    const {
      cred_def_id,
      schema_id,
      key_correctness_proof,
      nonce,
      method_name,
    } = body;

    if (!cred_def_id || typeof cred_def_id !== "string") return false;
    if (!schema_id || typeof schema_id !== "string") return false;
    if (!nonce || typeof nonce !== "string") return false;
    if (!key_correctness_proof) return false;

    const { c, xr_cap, xz_cap } = key_correctness_proof;

    if (!c || !xr_cap || !xz_cap) return false;
    if (
      typeof c !== "string" ||
      !Array.isArray(xr_cap) ||
      typeof xz_cap !== "string"
    )
      return false;

    if (
      xr_cap.length <= 0 ||
      xr_cap.find(
        ([first, second]) =>
          typeof first !== "string" || typeof second !== "string"
      )
    )
      return false;

    if (method_name && typeof method_name !== "string") return false;

    return true;
  }

  async processAnonCredsCredential(
    offer: Message,
    options: CredentialRequestOptions
  ) {
    const linkSecret = options.linkSecret;
    if (!linkSecret) {
      throw new Error("Link Secret is not available.");
    }

    const body = JSON.parse(offer.body);

    const credentialOfferBody = this.extractAttachment(body, offer.attachments);

    const isAnonCredsBody = this.isAnonCredsBody(credentialOfferBody);
    if (!isAnonCredsBody) {
      throw new Error("Invalid AnonCreds offer body");
    }

    const { cred_def_id } = credentialOfferBody;
    const credentialDefinition =
      await this.fetchCredentialDefinition(cred_def_id);

    return this.anoncreds.createCredentialRequest(
      credentialOfferBody,
      credentialDefinition,
      linkSecret.secret,
      linkSecret.name
    );
  }

  async parseCredential(
    credentialBuffer: Uint8Array,
    options?: {
      type: CredentialType;
      linkSecret?: string;
      credentialMetadata?: Anoncreds.CredentialRequestMeta;
      [name: string]: any;
    }
  ) {
    const credentialType = options?.type || CredentialType.Unknown;
    const credentialString = Buffer.from(credentialBuffer).toString();

    if (credentialType === CredentialType.JWT) {
      const parts = credentialString.split(".");

      if (parts.length != 3 || parts.at(1) === undefined) {
        throw new InvalidJWTString();
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const jwtCredentialString = parts.at(1)!;
      const base64Data = base64url.baseDecode(jwtCredentialString);
      const jsonString = Buffer.from(base64Data).toString();
      const jsonParsed = JSON.parse(jsonString);

      return JWTCredential.fromJWT(jsonParsed, credentialString);
    }

    if (credentialType === CredentialType.AnonCreds) {
      if (options?.linkSecret === undefined) {
        throw new Error("LinkSecret is required");
      }
      if (options?.credentialMetadata === undefined) {
        throw new Error("Invalid credential metadata");
      }

      const linkSecret = options.linkSecret;
      const credentialMetadata = options.credentialMetadata;

      const credentialIssued = JSON.parse(
        credentialString
      ) as Anoncreds.CredentialIssued;

      const credentialDefinition = await this.fetchCredentialDefinition(
        credentialIssued.cred_def_id
      );

      const credential = this.anoncreds.processCredential(
        credentialDefinition,
        credentialIssued,
        credentialMetadata,
        linkSecret
      );

      return new AnonCredsCredential(credential);
    }

    throw new Error("Not implemented");
  }

  private extractDomainChallenge(attachments: AttachmentDescriptor[]) {
    return attachments.reduce(
      (_, attachment: any) => ({
        challenge: attachment?.data?.data?.options?.challenge,
        domain: attachment?.data?.data?.options?.domain,
      }),
      { challenge: undefined, domain: undefined } as {
        challenge?: string;
        domain?: string;
      }
    );
  }

  createPresentationProof(presentationRequest: PresentationRequest, credential: AnonCredsCredential, options: IPollux.createPresentationProof.options.Anoncreds): Promise<Anoncreds.Presentation>;
  createPresentationProof(presentationRequest: PresentationRequest, credential: JWTCredential, options: IPollux.createPresentationProof.options.JWT): Promise<string>;
  async createPresentationProof(
    presentationRequest: PresentationRequest,
    credential: Credential,
    options: IPollux.createPresentationProof.options
  ) {
    if (
      credential instanceof AnonCredsCredential
      && presentationRequest.isType(CredentialType.AnonCreds)
      && "linkSecret" in options
    ) {
      const schema = await this.fetchSchema(credential.schemaId);
      const schemas = { [credential.schemaId]: schema };
      const credentialDefinition = await this.fetchCredentialDefinition(credential.credentialDefinitionId);
      const credDefs = { [credential.credentialDefinitionId]: credentialDefinition };

      const result = this.anoncreds.createPresentation(
        presentationRequest.toJSON(),
        schemas,
        credDefs,
        credential.toJSON(),
        options.linkSecret.secret
      );

      return result;
    }

    if (
      credential instanceof JWTCredential
      && presentationRequest.isType(CredentialType.JWT)
      && "did" in options
      && "privateKey" in options
    ) {
      const presReqJson = presentationRequest.toJSON();
      const signedJWT = await this.jwt.sign(options.did, options.privateKey, {
        iss: options.did.toString(),
        aud: presReqJson.options.domain,
        nonce: presReqJson.options.challenge,
        vp: credential.presentation()
      });

      return signedJWT;
    }

    throw new PolluxError.InvalidPresentationProofArgs();
  }
}
