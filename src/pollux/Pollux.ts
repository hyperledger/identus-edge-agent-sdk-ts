import { uuid } from "@stablelib/uuid";
import { base58btc } from "multiformats/bases/base58";
import type * as Anoncreds from "anoncreds-wasm";
import { decodeSdJwtSync, getClaimsSync } from '@sd-jwt/decode';
import * as  jsonld from 'jsonld';
import { Castor } from "../domain/buildingBlocks/Castor";
import { CredentialOfferPayloads, CredentialOfferTypes, Pollux as IPollux, ProcessedCredentialOfferPayloads } from "../domain/buildingBlocks/Pollux";
import { base64, base64url } from "multiformats/bases/base64";
import { AnoncredsLoader } from "./AnoncredsLoader";
import * as pako from 'pako';
import wasmBuffer from "jwe-wasm/jwe_rust_bg.wasm";
import type { PresentationFrame } from '@sd-jwt/types';

import {
  CredentialRequestOptions,
  CredentialType,
  Api,
  PolluxError,
  Credential,
  PresentationDefinitionRequest,
  InputConstraints,
  InputField,
  InputLimitDisclosure,
  InputDescriptor,
  PrivateKey,
  PresentationSubmission,
  DescriptorItem,
  CastorError,
  DefinitionFormat,
  PresentationClaims,
  DID,
  DescriptorItemFormat,
  JWTVerifiablePresentationProperties,
  AttachmentFormats,
  PresentationOptions as PresentationOptionsType,
  AnoncredsPresentationOptions,
  JWTPresentationOptions,
  LinkSecret,
  JWTPresentationSubmission,
  AnoncredsPresentationSubmission,
  Apollo,
  JWTRevocationStatus,
  RevocationType,
  JWTStatusListResponse,
  Curve,
  KeyProperties,
  KeyTypes,
  JWTProofType,
  CredentialStatusType,
  SDJWPresentationOptions,
  JWTPayload,
  PresentationJWTOptions,
} from "../domain";
import { AnonCredsCredential } from "./models/AnonCredsVerifiableCredential";
import { JWTCredential } from "./models/JWTVerifiableCredential";
import { FetchApi } from "../edge-agent/helpers/FetchApi";
import { PresentationRequest } from "./models/PresentationRequest";
import { DescriptorPath } from "./utils/DescriptorPath";
import { JWT as JWTClass } from "./utils/JWT";
import { InvalidVerifyCredentialError, InvalidVerifyFormatError } from "../domain/models/errors/Pollux";
import { isPresentationDefinitionRequestType, parsePresentationSubmission, validatePresentationClaims } from "./utils/claims";
import { SDJWT as SDJWTClass } from "./utils/SDJWT";
import { SDJWTCredential } from "./models/SDJWTVerifiableCredential";
import { JsonLd, RemoteDocument } from "jsonld/jsonld-spec";
import { VerificationKeyType } from "../castor/types";
import { revocationJsonldDocuments } from "../domain/models/revocation";
import { Bitstring } from "./utils/Bitstring";
import { defaultHashConfig } from "./utils/jwt/config";
import { Startable } from "../domain/protocols/Startable";

/**
 * Implementation of Pollux
 *
 * @export
 * @class Pollux
 * @typedef {Pollux}
 */
export default class Pollux extends Startable.Controller implements IPollux {
  private _anoncreds: AnoncredsLoader | undefined;
  private _jwe: typeof import("jwe-wasm") | undefined;
  private _pako = pako;

  constructor(
    private apollo: Apollo,
    private castor: Castor,
    private api: Api = new FetchApi(),
    private JWT = new JWTClass(apollo, castor),
    private SDJWT = new SDJWTClass(apollo, castor)
  ) {
    super();
  }

  get anoncreds() {
    if (this._anoncreds === undefined) {
      throw new Error("Pollux - Anoncreds not loaded");
    }
    return this._anoncreds;
  }

  get jwe() {
    if (this._jwe === undefined) {
      throw new Error("Pollux - JWE not loaded");
    }
    return this._jwe;
  }

  protected async _start() {
    this._anoncreds = await AnoncredsLoader.getInstance();
    this._jwe ??= await import("jwe-wasm").then(async module => {
      const wasmInstance = module.initSync({ module: wasmBuffer });
      await module.default(wasmInstance);
      return module;
    });
  }

  protected async _stop() {}

  async revealCredentialFields(
    credential: Credential,
    fields: string[],
    linkSecret?: string
  ) {
    const type = credential.credentialType;
    if (credential instanceof AnonCredsCredential) {
      if (!linkSecret) {
        throw new PolluxError.InvalidCredentialError("Link secret is required when revealing anoncreds fields");
      }
      const disclosedFields: { [K in keyof Credential['claims'][number]]: any } = {};
      const availableFields = fields.filter((field) =>
        credential.claims.find((claim) =>
          Object.keys(claim).includes(field)) !== undefined
      );

      for (const field of availableFields) {
        disclosedFields[field] = {
          name: field,
          restrictions: {
            cred_def_id: credential.credentialDefinitionId
          }
        };
      }

      const credentialDefinitionUrl = credential.credentialDefinitionId.replace("host.docker.internal", "localhost");
      const schemaUrl = credential.schemaId.replace("host.docker.internal", "localhost");
      const presentationRequest = this.anoncreds.createPresentationRequest(
        "self-disclose",
        "1.0.0",
        disclosedFields,
        {}
      );
      const presentation = this.anoncreds.createPresentation(
        presentationRequest,
        {
          [credential.schemaId]: await this.fetchSchema(schemaUrl)
        },
        {
          [credential.credentialDefinitionId]: await this.fetchCredentialDefinition(credentialDefinitionUrl)
        },
        credential.toJSON(),
        linkSecret
      );
      const revealedFields: { [K in keyof Credential['claims'][number]]: any } = {};
      for (const field of Object.keys(presentation.requested_proof.revealed_attrs)) {
        revealedFields[field] = presentation.requested_proof.revealed_attrs[field].raw;
      }
      return revealedFields;
    } else if (type === CredentialType.SDJWT) {
      const { hasherSync } = defaultHashConfig;
      let disclosedClaims: Record<string, any> = {};
      for (const computed of credential.claims) {
        const disclosed = Object.values(computed);
        const decoded = decodeSdJwtSync(credential.id, hasherSync);
        const disclosedClaim = getClaimsSync<typeof disclosedClaims>(decoded.jwt.payload, disclosed, hasherSync);
        disclosedClaims = { ...disclosedClaims, ...disclosedClaim };
      }
      return disclosedClaims;

    } else {
      const claim = credential.claims.at(0);
      if (!claim) {
        throw new PolluxError.InvalidCredentialError("Invalid claims");
      }
      return claim;
    }
  }

  private extractVerificationStatusFromResponse(credentialStatus: any) {
    if (credentialStatus && credentialStatus.type === RevocationType.StatusList2021) {
      return true;
    }
    return false;
  }

  private extractVerificationStatusFromCredential(credentialStatus: any): credentialStatus is JWTRevocationStatus {
    if (credentialStatus && credentialStatus.type === CredentialStatusType.StatusList2021Entry) {
      return true;
    }
    return false;
  }

  private extractEncodedList(body: JWTStatusListResponse): Uint8Array {
    try {
      const encodedList = Buffer.from(body.credentialSubject.encodedList, 'base64');

      return this._pako.ungzip(Uint8Array.from(encodedList));
    } catch (err) {
      throw new PolluxError.InvalidRevocationStatusResponse(`Couldn't ungzip base64 encoded list, err: ${(err as Error).message}`);
    }
  }

  private async encode(data: any) {
    const customLoader = async (url: any) => {
      const cached = (revocationJsonldDocuments as any)[url];
      // istanbul ignore else
      if (cached) {
        const doc: RemoteDocument = {
          documentUrl: url,
          document: cached
        };
        return doc;
      }
      // The above ignores are justified because we are mocking the API calls
      // And always using the catched jsonLD documents for statusProof..
      // istanbul ignore next
      const response = await this.api.request<JsonLd>("GET", url);
      const doc: RemoteDocument = {
        documentUrl: url,
        document: response.body
      };
      // istanbul ignore next
      return doc;
    };

    const canonised = await jsonld.canonize(data, {
      algorithm: 'URDNA2015',
      format: 'application/n-quads',
      documentLoader: customLoader,
    });
    return Buffer.from(canonised);

  }

  private async verifyRevocationProof(
    revocation: JWTStatusListResponse,
    statusListIndex: number
  ): Promise<boolean> {
    try {
      const proofObject = revocation.proof ?? {};
      const { verificationMethod } = proofObject;
      const proofType = proofObject.type;
      const base64VerificationMethod = verificationMethod.split(",").at(1);
      if (!base64VerificationMethod) {
        throw new PolluxError.InvalidRevocationStatusResponse(`CredentialStatus proof invalid verificationMethod`);
      }
      const decodedVerificationMethodBuffer = base64.baseDecode(base64VerificationMethod);
      const decodedVerificationValue = Buffer.from(decodedVerificationMethodBuffer).toString();
      const decodedVerificationMethod = JSON.parse(decodedVerificationValue);

      if (proofType === JWTProofType.EcdsaSecp256k1Signature2019) {
        const { publicKeyJwk } = decodedVerificationMethod;
        const verificationMethodType = decodedVerificationMethod.type;
        if (!publicKeyJwk) {
          throw new PolluxError.InvalidCredentialStatus("No public jwk provided");
        }
        if (verificationMethodType !== VerificationKeyType.EcdsaSecp256k1VerificationKey2019) {
          throw new PolluxError.InvalidCredentialStatus(`Only ${VerificationKeyType.EcdsaSecp256k1VerificationKey2019} is supported`);
        }
        const curve = decodedVerificationMethod.publicKeyJwk.crv;
        const kty = decodedVerificationMethod.publicKeyJwk.kty;
        if (kty !== KeyTypes.EC) {
          throw new PolluxError.RevocationError(`Invalid JWK kty: ${kty}, should be ${KeyTypes.EC}`);
        }
        if (curve !== Curve.SECP256K1.toLocaleLowerCase()) {
          throw new PolluxError.RevocationError(`Invalid JWK crv: ${curve}, should be ${Curve.SECP256K1.toLocaleLowerCase()}`);
        }
        const { x, y } = decodedVerificationMethod.publicKeyJwk;
        const pk = this.apollo.createPublicKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.curvePointX]: Buffer.from(base64url.baseDecode(x)),
          [KeyProperties.curvePointY]: Buffer.from(base64url.baseDecode(y))
        });
        if (!pk.canVerify()) {
          throw new PolluxError.InvalidRevocationStatusResponse(`CredentialStatus proof invalid verifying key`);
        }
        const jwsArray = proofObject.jws.split(".");
        if (jwsArray.length !== 3) {
          throw new PolluxError.InvalidJWTString("Credential status jwt is invalid");
        }
        const { proof, ...cleanedPayload } = revocation;
        const payload = { ...cleanedPayload };
        const encoded = await this.encode(payload);
        const signature = Buffer.from(base64url.baseDecode(jwsArray[2]));
        const signaturePayload = Buffer.from(`${jwsArray[0]}.${encoded.toString()}`);
        const isSignatureValid = pk.verify(signaturePayload, signature);
        if (!isSignatureValid) {
          throw new PolluxError.InvalidRevocationStatusResponse(`CredentialStatus invalid signature`);
        }
        const statusListDecoded = this.extractEncodedList(revocation);
        const bitstring = new Bitstring({ buffer: statusListDecoded });
        return bitstring.get(statusListIndex);
      }
      throw new PolluxError.InvalidRevocationStatusResponse(`CredentialStatus proof type not supported`);
    } catch (err) {
      if (err instanceof PolluxError.InvalidRevocationStatusResponse) {
        throw err;
      } else {
        throw new PolluxError.InvalidRevocationStatusResponse(`Err ${(err as Error).message}`);
      }
    }
  }

  // istanbul ignore next
  // mocked during tests
  private async fetchRevocationRegistry(revocationStatus: JWTRevocationStatus) {
    // istanbul ignore next
    const response = await this.api.request<JWTStatusListResponse>(
      "GET",
      revocationStatus.statusListCredential,
    );
    // istanbul ignore next
    if (response.httpStatus !== 200) {
      throw new PolluxError.InvalidRevocationStatusResponse(`CredentialStatus response status code ${response.httpStatus}`);
    }
    // istanbul ignore next
    return response.body;
  }

  async isCredentialRevoked(credential: Credential): Promise<boolean> {

    if (credential instanceof JWTCredential) {
      if (!this.extractVerificationStatusFromCredential(credential.credentialStatus)) {
        if (credential.credentialStatus) {
          throw new PolluxError.CredentialRevocationTypeInvalid(
            `CredentialStatus revocation type not supported`
          );
        } else {
          //Credential is non revocable
          return false;
        }
      }
      const revocationStatus = credential.credentialStatus;
      const response = await this.fetchRevocationRegistry(revocationStatus);
      if (!this.extractVerificationStatusFromResponse(response.credentialSubject)) {
        throw new PolluxError.CredentialRevocationTypeInvalid(
          `CredentialStatus response revocation type not supported`
        );
      }
      return this.verifyRevocationProof(response, revocationStatus.statusListIndex);
    }
    throw new PolluxError.CredentialTypeNotSupported("Only JWT Credential are supported");
  }


  private isPresentationDefinitionRequestType
    <Type extends CredentialType = CredentialType.JWT>(
      request: PresentationDefinitionRequest<Type>,
      type: Type,
    ): request is PresentationDefinitionRequest<Type> {
    return isPresentationDefinitionRequestType(request, type);
  }

  private getDescriptorItems(inputDescriptors: InputDescriptor[], credential: Credential): DescriptorItem[] {
    const isJWT = credential instanceof JWTCredential;
    return inputDescriptors.map(
      (inputDescriptor) => {
        if (inputDescriptor.format &&
          (!inputDescriptor.format.jwt || !inputDescriptor.format.jwt.alg) &&
          (!inputDescriptor.format.sdjwt || !inputDescriptor.format.sdjwt.alg)
        ) {
          throw new PolluxError.InvalidDescriptorFormatError();
        }
        return isJWT ? {
          id: inputDescriptor.id,
          format: DescriptorItemFormat.JWT_VP,
          path: "$.verifiablePresentation[0]",
          path_nested: {
            id: inputDescriptor.id,
            format: DescriptorItemFormat.JWT_VC,
            path: "$.vp.verifiableCredential[0]",
          }
        } : {
          id: inputDescriptor.id,
          format: DescriptorItemFormat.SDJWT,
          path: "$.verifiablePresentation[0]",
        };
      });
  }

  private async createJWTPresentationSubmission(
    presentationDefinitionRequest: any,
    credential: Credential,
    privateKey: PrivateKey,
    options?: {
      presentationFrame?: PresentationFrame<any>,
      domain?: string,
      challenge?: string;
    }
  ): Promise<PresentationSubmission<CredentialType.JWT | CredentialType.SDJWT>> {

    const { presentation_definition } = presentationDefinitionRequest;
    const inputDescriptors = presentation_definition.input_descriptors ?? [];
    if (credential instanceof JWTCredential) {
      if (
        !this.isPresentationDefinitionRequestType(presentationDefinitionRequest, CredentialType.JWT)
      ) {
        throw new Error("PresentationDefinition didn't match credential type");
      }
    } else if (credential instanceof SDJWTCredential) {
      if (
        !this.isPresentationDefinitionRequestType(presentationDefinitionRequest, CredentialType.SDJWT)
      ) {
        throw new Error("PresentationDefinition didn't match credential type");
      }
    }

    const descriptorItems: DescriptorItem[] = this.getDescriptorItems(inputDescriptors, credential);
    if (!privateKey.isSignable()) {
      throw new CastorError.InvalidKeyError("Cannot sign the proof challenge with this key.");
    }
    if (!credential.isProvable()) {
      throw new PolluxError.InvalidCredentialError("Cannot create proofs with this type of credential.");
    }

    const disclosedFields = await this.revealCredentialFields(credential, ['subject', 'sub']);
    const subject = disclosedFields['subject'] || disclosedFields['sub'] || credential.subject;
    const issuerDID = DID.fromString(subject);
    const kid = await this.getSigningKid(issuerDID, privateKey);
    let jws: string;
    const nbf = Date.parse(new Date().toISOString());

    if (credential instanceof JWTCredential) {
      const payload: Partial<JWTPayload> = {
        iss: subject,
        nbf: nbf,
        vp: credential.presentation(),
      };

      const challenge = options && "challenge" in options && options?.challenge;
      const domain = options && "domain" in options && options?.domain;

      if (domain && typeof domain === "string") {
        payload.aud = domain;
      }

      if (challenge && typeof challenge === "string") {
        payload.nonce = challenge;
      }

      jws = await this.JWT.sign({
        issuerDID,
        privateKey,
        payload,
        header: { kid }
      });

    } else if (credential instanceof SDJWTCredential) {

      const presentationFrame = options && "presentationFrame" in options ?
        options.presentationFrame :
        undefined;

      jws = await this.SDJWT.createPresentationFor<any>({
        jws: credential.id,
        privateKey,
        presentationFrame: presentationFrame
      });

    } else {
      throw new PolluxError.InvalidCredentialError("Expected JWT or SDJWT credential");
    }

    const presentationSubmission: PresentationSubmission = {
      presentation_submission: {
        id: uuid(),
        definition_id: presentation_definition.id,
        descriptor_map: descriptorItems
      },
      verifiablePresentation: [
        jws
      ]
    };

    return presentationSubmission;
  }

  private async createAnoncredsPresentationSubmission(
    presentationDefinitionRequest: PresentationDefinitionRequest<CredentialType.AnonCreds>,
    credential: AnonCredsCredential,
    linkSecret: LinkSecret
  ): Promise<PresentationSubmission<CredentialType.AnonCreds>> {
    const credentialDefinitionUrl = credential.credentialDefinitionId.replace("host.docker.internal", "localhost");
    const schemaUrl = credential.schemaId.replace("host.docker.internal", "localhost");
    const credentialSchema = await this.fetchSchema(schemaUrl);
    const credentialDefinition = await this.fetchCredentialDefinition(credentialDefinitionUrl);
    const schemas = { [credential.schemaId]: credentialSchema };
    const credDefs = { [credential.credentialDefinitionId]: credentialDefinition };
    return this.anoncreds.createPresentation(
      presentationDefinitionRequest,
      schemas,
      credDefs,
      credential.toJSON(),
      linkSecret.secret
    );
  }

  async createPresentationSubmission<
    Type extends CredentialType = CredentialType.JWT
  >(
    presentationDefinitionRequest: PresentationDefinitionRequest<Type>,
    credential: Credential,
    privateKey?: PrivateKey | LinkSecret,
    options?: {
      presentationFrame?: PresentationFrame<any>,
      domain?: string,
      challenge?: string;
    }

  ): Promise<PresentationSubmission<Type>> {
    if (
      this.isPresentationDefinitionRequestType<CredentialType.JWT>(presentationDefinitionRequest, CredentialType.JWT) ||
      this.isPresentationDefinitionRequestType<CredentialType.SDJWT>(presentationDefinitionRequest, CredentialType.SDJWT)
    ) {
      if (!privateKey || !(privateKey instanceof PrivateKey)) {
        throw new CastorError.InvalidKeyError("Required a valid private key for a JWT Presentation submission");
      }
      return this.createJWTPresentationSubmission(
        presentationDefinitionRequest,
        credential,
        privateKey,
        options
      );
    }

    if (this.isPresentationDefinitionRequestType<CredentialType.AnonCreds>(
      presentationDefinitionRequest, CredentialType.AnonCreds)
    ) {

      if (!(credential instanceof AnonCredsCredential)) {
        throw new CastorError.InvalidKeyError("Required a valid Anoncreds Credential for Anoncreds Presentation submission");
      }

      if (!privateKey || !(privateKey instanceof LinkSecret)) {
        throw new CastorError.InvalidKeyError("Required a valid link secret for a Anoncreds Presentation submission");
      }

      return this.createAnoncredsPresentationSubmission(
        presentationDefinitionRequest,
        credential,
        privateKey
      );
    }

    throw new PolluxError.InvalidPresentationDefinitionError();
  }


  private parsePresentationSubmission<
    Type extends CredentialType = CredentialType.JWT
  >(data: any, type: Type): data is PresentationSubmission<Type> {
    return parsePresentationSubmission(this.anoncreds, data, type);
  }


  private validatePresentationDefinitionOptions(
    type: CredentialType,
    options: JWTPresentationOptions | SDJWPresentationOptions | AnoncredsPresentationOptions
  ) {
    let jwtOptions: PresentationJWTOptions;

    if (type === CredentialType.JWT) {
      if (!(options instanceof JWTPresentationOptions) || !options.jwt) {
        throw new PolluxError.InvalidPresentationDefinitionError("Required field options jwt or sdjwt is undefined");
      }
      jwtOptions = options.jwt;
      if (!jwtOptions) {
        throw new PolluxError.InvalidPresentationDefinitionError("Required field options jwt is undefined");
      }

      if (!jwtOptions.jwtAlg) {
        throw new PolluxError.InvalidPresentationDefinitionError("Presentation options didn't include jwtAlg, jwtVcAlg or jwtVpAlg, one of them is required.");
      }
    } else {
      if (!(options instanceof SDJWPresentationOptions) || !options.sdjwt) {
        throw new PolluxError.InvalidPresentationDefinitionError("Required field options jwt or sdjwt is undefined");
      }
      jwtOptions = options.sdjwt;
      if (!jwtOptions) {
        throw new PolluxError.InvalidPresentationDefinitionError("Required field options jwt is undefined");
      }

      if (!jwtOptions.jwtAlg) {
        throw new PolluxError.InvalidPresentationDefinitionError("Presentation options didn't include jwtAlg, jwtVcAlg or jwtVpAlg, one of them is required.");
      }
    }
    return jwtOptions;
  }
  async createPresentationDefinitionRequest<Type extends CredentialType = CredentialType.JWT>(
    type: Type,
    presentationClaims: PresentationClaims<Type>,
    presentationOptions: PresentationOptionsType
  ): Promise<PresentationDefinitionRequest<Type>> {
    const options = presentationOptions.options;

    if (type === CredentialType.JWT || type === CredentialType.SDJWT) {
      const jwtOptions = this.validatePresentationDefinitionOptions(
        type,
        options
      );
      if (!(options instanceof JWTPresentationOptions) && !(options instanceof SDJWPresentationOptions)) {
        throw new PolluxError.InvalidPresentationDefinitionError("Options must be JWTPresentationOptions or SDJWPresentationOptions for JWT");
      }

      if (
        !validatePresentationClaims(presentationClaims, CredentialType.JWT) ||
        !validatePresentationClaims(presentationClaims, CredentialType.SDJWT)
      ) {
        throw new PolluxError.InvalidPresentationDefinitionError("Presentation claims are invalid.");
      }

      const paths = Object.keys(presentationClaims.claims);
      const constaints: InputConstraints = {
        fields: paths.map((path) => {
          const inputField: InputField = {
            path: [
              `$.vc.credentialSubject.${path}`,
              `$.credentialSubject.${path}`,
              `$.${path}`
            ],
            id: uuid(),
            optional: false,
            filter: presentationClaims.claims[path],
            name: path
          };
          return inputField;
        }),
        limit_disclosure: InputLimitDisclosure.REQUIRED
      };

      if (presentationClaims.issuer) {
        constaints.fields.push({
          path: ["$.vc.issuer", "$.issuer", "$.iss", "$.vc.iss"],
          id: uuid(),
          optional: false,
          name: "issuer",
          filter: {
            type: "string",
            pattern: presentationClaims.issuer
          }
        });
      }

      const key = type === CredentialType.JWT ? 'jwt' : 'sdjwt';
      const format: DefinitionFormat = {
        [key]: {
          alg: jwtOptions.jwtAlg ?? []
        },
      };
      const inputDescriptor: InputDescriptor = {
        id: uuid(),
        name: options.name,
        purpose: options.purpose,
        constraints: constaints,
        format: format
      };

      const presentationDefinitionOptions = options instanceof JWTPresentationOptions ?
        {
          challenge: options.challenge,
          domain: options.domain
        } : {

        };
      const presentationDefinitionRequest: PresentationDefinitionRequest<typeof type> = {
        presentation_definition: {
          id: uuid(),
          input_descriptors: [
            inputDescriptor
          ],
          format: format,
        },
        options: presentationDefinitionOptions
      };
      return presentationDefinitionRequest;
    }

    if (type === CredentialType.AnonCreds) {
      if (!(options instanceof AnoncredsPresentationOptions)) {
        throw new PolluxError.InvalidPresentationDefinitionError("Required field options is undefined, should be AnoncredsPresentationOptions");
      }

      if (!validatePresentationClaims(presentationClaims, CredentialType.AnonCreds)) {
        throw new PolluxError.InvalidPresentationDefinitionError("Presentation claims are invalid for anoncreds.");
      }

      const claims = presentationClaims;
      const predicatePaths = Object.keys(claims.predicates ?? {});

      const requestedPredicates: Anoncreds.RequestedPredicates =
        predicatePaths.reduce<Anoncreds.RequestedPredicates>((all, predicateName, i) => {
          const claimPredicate = (claims.predicates ?? {})[predicateName];

          const pType = claimPredicate.$gt ? '>' :
            claimPredicate.$gte ? '>=' :
              claimPredicate.$lt ? '<' :
                claimPredicate.$lte ? '<=' :
                  undefined;

          const pValue = claimPredicate.$gt ? claimPredicate.$gt :
            claimPredicate.$gte ? claimPredicate.$gte :
              claimPredicate.$lt ? claimPredicate.$lt :
                claimPredicate.$lte ? claimPredicate.$lte :
                  undefined;

          if (!pType || !pValue) {
            throw new Error("TODO improve, should return valid ptype");
          }

          const predicate: Anoncreds.RequestedPredicates[
            keyof Anoncreds.RequestedPredicates
          ] = {
            name: claimPredicate.name,
            p_type: pType,
            p_value: pValue
          };
          return {
            ...all,
            [`${claimPredicate.name}${i > 0 ? '_' + i : ''}`]: predicate
          };
        }, {});

      const presentationDefinitionRequest: PresentationDefinitionRequest<CredentialType.AnonCreds> = {
        nonce: this.anoncreds.createNonce(),
        name: "anoncreds_presentation_request",
        version: "0.1",
        requested_attributes: claims.attributes ?? {},
        requested_predicates: requestedPredicates
      };

      return presentationDefinitionRequest;
    }

    throw new PolluxError.CredentialTypeNotSupported();

  }

  private validPresentationSubmissionOptions<
    Response extends IPollux.verifyPresentationSubmission.options,
    Type extends CredentialType = CredentialType.JWT
  >(
    options: any,
    type: Type
  ): options is Response {

    if (type === CredentialType.JWT) {
      return options &&
        options.presentationDefinitionRequest &&
        typeof options.presentationDefinitionRequest === "object" &&
        typeof options.presentationDefinitionRequest.options === "object" ?
        true :
        false;
    }

    if (type === CredentialType.AnonCreds) {
      return true;
    }

    if (type === CredentialType.SDJWT) {
      return options && options.presentationDefinitionRequest && typeof options.presentationDefinitionRequest === "object" ? true : false;
    }

    return false;
  }

  private validateInputDescriptor(
    vc: any,
    descriptorMapper: DescriptorPath,
    inputDescriptor: InputDescriptor | undefined
  ) {
    if (inputDescriptor) {
      const constraints = inputDescriptor.constraints;
      const fields = constraints.fields;
      if (constraints.limit_disclosure === InputLimitDisclosure.REQUIRED) {
        for (const field of fields) {
          const paths = [
            ...field.path
          ];
          const optional = field.optional;
          if (!optional) {
            let validClaim = false;
            let reason = null;
            while (paths.length && !validClaim) {
              const [path] = paths.splice(0, 1);
              if (path) {
                const fieldInVC = descriptorMapper.getValue(path);
                if (field.filter && fieldInVC !== null) {
                  const filter = field.filter;
                  if (filter.pattern) {
                    const pattern = new RegExp(filter.pattern);
                    if (pattern.test(fieldInVC) || fieldInVC === filter.pattern) {
                      validClaim = true;
                    } else {
                      reason = `Expected the ${path} field to be "${filter.pattern}" but got "${fieldInVC}"`;
                    }
                  } else if (filter.enum) {
                    if (filter.enum.includes(fieldInVC)) {
                      validClaim = true;
                    } else {
                      reason = `Expected the ${path} field to be one of ${filter.enum.join(", ")} but got ${fieldInVC}`;
                    }
                    validClaim = filter.enum.includes(fieldInVC);
                  } else if (filter.const && fieldInVC === filter.pattern) {
                    if (fieldInVC === filter.const) {
                      validClaim = true;
                    } else {
                      reason = `Expected the ${path} field to be "${filter.const}" but got "${fieldInVC}"`;
                    }
                    validClaim = fieldInVC === filter.const;
                  }
                } else if (!reason) {
                  reason = `Expected one of the paths ${field.path.join(", ")} to exist.`;
                }
              } else {
                reason = `Expected one of the paths ${field.path.join(", ")} to exist.`;
              }
            }
            if (!validClaim) {
              throw new InvalidVerifyCredentialError(vc, `Invalid Claim: ${reason || 'paths are not found or have unexpected value'}`);
            }
          }
        }
      }
    }
  }

  private verifyPresentationSubmissionJWT(presentationSubmission: JWTPresentationSubmission, options: IPollux.verifyPresentationSubmission.options.JWT): Promise<boolean>;
  private verifyPresentationSubmissionJWT(presentationSubmission: JWTPresentationSubmission, options: IPollux.verifyPresentationSubmission.options.SDJWT): Promise<boolean>;
  private async verifyPresentationSubmissionJWT(
    presentationSubmission: JWTPresentationSubmission,
    options: IPollux.verifyPresentationSubmission.options.JWT | IPollux.verifyPresentationSubmission.options.SDJWT
  ): Promise<boolean> {
    const presentationDefinitionRequest = options.presentationDefinitionRequest;
    const inputDescriptors = presentationDefinitionRequest.presentation_definition.input_descriptors;
    const presentationSubmissionMapper = new DescriptorPath(presentationSubmission);
    const descriptorMaps = presentationSubmission.presentation_submission.descriptor_map;
    for (const descriptorItem of descriptorMaps) {

      if (descriptorItem.format === DescriptorItemFormat.JWT_VP || descriptorItem.format === DescriptorItemFormat.SDJWT) {
        const jws = presentationSubmissionMapper.getValue(descriptorItem.path);
        if (!jws) {
          throw new InvalidVerifyFormatError(`Invalid Submission, ${descriptorItem.path} not found in submission`);
        }
        const isSDJWT = descriptorItem.format === DescriptorItemFormat.SDJWT;

        const presentation = isSDJWT ?
          SDJWTCredential.fromJWS(jws) :
          JWTCredential.fromJWS(jws);

        const issuer = presentation.issuer;
        const presentationDefinitionOptions = options.presentationDefinitionRequest;

        if ("challenge" in presentationDefinitionOptions && "domain" in presentationDefinitionOptions) {
          const challenge = presentationDefinitionOptions?.challenge;
          if (challenge && challenge !== '') {
            const nonce = presentation.getProperty(JWTVerifiablePresentationProperties.nonce);
            if (!nonce || typeof nonce !== "string") {
              throw new InvalidVerifyCredentialError(jws, `Invalid Submission, ${descriptorItem.path} does not contain a nonce in its payload with a valid signature for '${challenge}'`);
            }
            if (nonce !== challenge) {
              throw new InvalidVerifyCredentialError(jws, `Invalid Submission, ${descriptorItem.path} does not contain valid signature for '${challenge}'`);
            }
          }
        }

        const credType = presentation.credentialType;

        if (credType !== CredentialType.JWT && credType !== CredentialType.SDJWT) {
          throw new InvalidVerifyCredentialError(jws, "Invalid JWT Credential only jwt or sdjwt is supported for jwt submission");
        }

        let credentialValid: boolean;

        if (descriptorItem.format === DescriptorItemFormat.JWT_VP) {
          credentialValid = await this.JWT.verify({
            issuerDID: issuer,
            jws
          });

          if (!credentialValid) {
            throw new InvalidVerifyCredentialError(jws, "Invalid Holder Presentation JWS Signature");
          }
        } else {
          const requiredClaims = "requiredClaims" in options && Array.isArray(options.requiredClaims) ?
            options.requiredClaims :
            [];
          credentialValid = await this.SDJWT.verify({
            issuerDID: issuer,
            jws,
            requiredClaimKeys: requiredClaims
          });

        }


        let vc: string;
        let verifiableCredentialPropsMapper: DescriptorPath;
        const verifiablePresentation = presentation;

        if (descriptorItem.format === DescriptorItemFormat.JWT_VP) {

          const nestedPath = descriptorItem.path_nested;
          if (!nestedPath) {
            throw new InvalidVerifyFormatError(
              `Invalid Submission, ${descriptorItem.path} of format ${DescriptorItemFormat.JWT_VP} must provide a nested_path with ${DescriptorItemFormat.JWT_VC} for JWT`
            );
          }
          const verifiableCredentialMapper = new DescriptorPath(verifiablePresentation);
          vc = verifiableCredentialMapper.getValue(nestedPath!.path);
          if (!vc) {
            throw new InvalidVerifyCredentialError(jws, "Invalid Verifiable Presentation payload, cannot find vc");
          }
          const verifiableCredential = JWTCredential.fromJWS(vc);
          try {
            const isRevoked = await this.isCredentialRevoked(verifiableCredential);
            if (isRevoked) {
              throw new InvalidVerifyCredentialError(vc, "Invalid Verifiable Presentation, credential is revoked");
            }
          } catch (err) {
            throw new InvalidVerifyCredentialError(vc, `Invalid Verifiable Presentation, could not verify if the credential is revoked, reason: ${(err as Error).message}`);
          }

          if (verifiableCredential.subject !== issuer) {
            throw new InvalidVerifyCredentialError(vc, "Invalid Verifiable Presentation payload, the credential has been issued to another holder");
          }

          const verifiableCredentialValid = await this.JWT.verify({
            holderDID: verifiableCredential.subject ? DID.fromString(verifiableCredential.subject) : undefined,
            issuerDID: verifiableCredential.issuer,
            jws: verifiableCredential.id
          });
          if (!verifiableCredentialValid) {
            throw new InvalidVerifyCredentialError(vc, "Invalid Presentation Credential JWS Signature");
          }
          verifiableCredentialPropsMapper = new DescriptorPath(verifiableCredential);
        } else {

          const sdjwtPresentation = presentation as SDJWTCredential;
          const claims = await this.SDJWT.reveal(
            sdjwtPresentation.core.jwt?.payload ?? {},
            sdjwtPresentation.core.disclosures ?? [],
          );
          verifiableCredentialPropsMapper = new DescriptorPath(claims);
          vc = presentation.id;
        }
        const inputDescriptor = inputDescriptors.find((inputDescriptor) => inputDescriptor.id === descriptorItem.id);
        this.validateInputDescriptor(
          vc,
          verifiableCredentialPropsMapper,
          inputDescriptor
        );
        return true;
      }
      throw new InvalidVerifyFormatError(
        `Invalid Submission, ${descriptorItem.path} expected to have format ${DescriptorItemFormat.JWT_VP}`
      );
    }
    return false;
  }


  private async verifyPresentationSubmissionAnoncreds(
    presentationSubmission: AnoncredsPresentationSubmission,
    options: IPollux.verifyPresentationSubmission.options.Anoncreds
  ): Promise<boolean> {
    const [identifier] = presentationSubmission.identifiers;
    const { schema_id, cred_def_id } = identifier;

    const credentialDefinitionUrl = cred_def_id.replace("host.docker.internal", "localhost");
    const schemaUrl = schema_id.replace("host.docker.internal", "localhost");

    const credentialDefinition =
      await this.fetchCredentialDefinition(credentialDefinitionUrl);

    const credentialSchema =
      await this.fetchSchema(schemaUrl);

    const schemas_dict = new Map<string, Anoncreds.CredentialSchemaType>();
    const definitions_dict = new Map<string, Anoncreds.CredentialDefinitionType>();

    definitions_dict.set(cred_def_id, credentialDefinition);
    schemas_dict.set(schema_id, credentialSchema);


    return this.anoncreds.verifyPresentation(
      presentationSubmission,
      options.presentationDefinitionRequest,
      Object.fromEntries(schemas_dict),
      Object.fromEntries(definitions_dict)
    );
  }

  verifyPresentationSubmission(presentationSubmission: PresentationSubmission<CredentialType.AnonCreds>, options: IPollux.verifyPresentationSubmission.options.Anoncreds): Promise<boolean>;
  verifyPresentationSubmission(presentationSubmission: PresentationSubmission<CredentialType.JWT>, options: IPollux.verifyPresentationSubmission.options.JWT): Promise<boolean>;
  verifyPresentationSubmission(presentationSubmission: PresentationSubmission<CredentialType.SDJWT>, options: IPollux.verifyPresentationSubmission.options.SDJWT): Promise<boolean>;
  async verifyPresentationSubmission(
    presentationSubmission: any,
    options?: IPollux.verifyPresentationSubmission.options
  ): Promise<boolean> {

    const isValidPresentationJWTSubmission = this.parsePresentationSubmission<CredentialType.JWT>(
      presentationSubmission, CredentialType.JWT
    );
    if (isValidPresentationJWTSubmission && this.validPresentationSubmissionOptions<
      IPollux.verifyPresentationSubmission.options.JWT,
      CredentialType.JWT
    >(options, CredentialType.JWT)) {
      return this.verifyPresentationSubmissionJWT(presentationSubmission, options);
    }

    const isValidPresentationSDJWTSubmission = this.parsePresentationSubmission<CredentialType.SDJWT>(
      presentationSubmission, CredentialType.SDJWT
    );
    if (isValidPresentationSDJWTSubmission && this.validPresentationSubmissionOptions<
      IPollux.verifyPresentationSubmission.options.SDJWT,
      CredentialType.SDJWT
    >(options, CredentialType.SDJWT)) {
      return this.verifyPresentationSubmissionJWT(presentationSubmission, options);
    }

    const isValidPresentationAnoncredsSubmission = this.parsePresentationSubmission<CredentialType.AnonCreds>(presentationSubmission, CredentialType.AnonCreds);
    if (isValidPresentationAnoncredsSubmission) {
      const validAnoncredsPresentationSubmissionOptions = this.validPresentationSubmissionOptions<
        IPollux.verifyPresentationSubmission.options.Anoncreds,
        CredentialType.AnonCreds
      >(options, CredentialType.AnonCreds);
      if (!validAnoncredsPresentationSubmissionOptions) {
        throw new InvalidVerifyFormatError('VerifyPresentationSubmission options are invalid');
      }
      return this.verifyPresentationSubmissionAnoncreds(presentationSubmission, options);
    }

    throw new InvalidVerifyFormatError(
      `Invalid Submission, only JWT, SDJWT or Anoncreds are supported`
    );
  }

  private isOfferPayload<Type extends CredentialType>(offer: any, type: Type): offer is CredentialOfferPayloads[CredentialType.JWT] {
    if (type === CredentialType.JWT) {
      if (!offer || !offer.options) {
        return false;
      }
      const options = offer.options;
      if (!options.challenge || typeof options.challenge !== "string") {
        return false;
      }
      if (!options.domain || typeof options.domain !== "string") {
        return false;
      }
      return true;
    }
    if (type === CredentialType.SDJWT) {
      if (!offer.options) {
        return false;
      }
      const options = offer.options;
      if (!options.challenge || typeof options.challenge !== "string") {
        return false;
      }
      if (!options.domain || typeof options.domain !== "string") {
        return false;
      }
      return true;
    }
    if (type === CredentialType.AnonCreds) {
      if (!offer.cred_def_id || typeof offer.cred_def_id !== 'string') {
        return false;
      }
      if (!offer.nonce || typeof offer.nonce !== 'string') {
        return false;
      }
      if (!offer.schema_id || typeof offer.schema_id !== 'string') {
        return false;
      }
      if (!offer.key_correctness_proof ||
        !offer.key_correctness_proof.c || typeof offer.key_correctness_proof.c !== 'string' ||
        !offer.key_correctness_proof.xz_cap || typeof offer.key_correctness_proof.xz_cap !== 'string' ||
        !offer.key_correctness_proof.xr_cap || !Array.isArray(offer.key_correctness_proof.xr_cap)) {
        return false;
      }
      return true;
    }
    return true;
  }

  async processCredentialOffer<
    Types extends CredentialOfferTypes
  >(
    offer: CredentialOfferPayloads[Types],
    options: CredentialRequestOptions
  ): Promise<ProcessedCredentialOfferPayloads[Types]> {
    if (this.isOfferPayload<CredentialType.SDJWT>(offer, CredentialType.SDJWT) && options.sdJWT) {
      const { did, keyPair } = options;
      if (!did) {
        throw new Error("Required did ");
      }
      if (!keyPair) {
        throw new Error("Required keyPair ");
      }
      const kid = await this.getSigningKid(did, keyPair.privateKey);
      const challenge = offer.options.challenge;
      const domain = offer.options.domain;
      const signedJWT = await this.JWT.sign({
        issuerDID: did,
        privateKey: keyPair.privateKey,
        payload: {
          aud: domain,
          nonce: challenge,
          vp: {
            "@context": ["https://www.w3.org/2018/presentations/v1"],
            type: ["VerifiablePresentation"],
          },
        },
        header: { kid }
      });
      return signedJWT as ProcessedCredentialOfferPayloads[Types];
    }
    if (this.isOfferPayload<CredentialType.JWT>(offer, CredentialType.JWT)) {
      const { did, keyPair } = options;
      if (!did) {
        throw new Error("Required did ");
      }
      if (!keyPair) {
        throw new Error("Required keyPair ");
      }

      const kid = await this.getSigningKid(did, keyPair.privateKey);
      const challenge = offer.options.challenge;
      const domain = offer.options.domain;

      const signedJWT = await this.JWT.sign({
        issuerDID: did,
        privateKey: keyPair.privateKey,
        payload: {
          aud: [domain],
          nonce: challenge,
          vp: {
            "@context": ["https://www.w3.org/2018/presentations/v1"],
            type: ["VerifiablePresentation"],
          },
        },
        header: { kid }
      });

      return signedJWT as ProcessedCredentialOfferPayloads[Types];
    }

    if (this.isOfferPayload<CredentialType.AnonCreds>(offer, CredentialType.AnonCreds)) {
      const linkSecret = options.linkSecret;
      if (!linkSecret) {
        throw new Error("Link Secret is not available.");
      }
      const { cred_def_id } = offer;
      const credentialDefinition =
        await this.fetchCredentialDefinition(cred_def_id);
      return this.anoncreds.createCredentialRequest(
        offer,
        credentialDefinition,
        linkSecret.secret,
        linkSecret.name
      ) as ProcessedCredentialOfferPayloads[Types];
    }

    throw new Error("Not implemented");
  }

  /**
   * handle the retrieval of a Credential Definition
   * 
   * @param credentialDefinitionId 
   * @returns 
   */
  private async fetchCredentialDefinition(
    credentialDefinitionId: string
  ): Promise<Anoncreds.CredentialDefinitionType> {
    const response = await this.api.request<Anoncreds.CredentialDefinitionType>(
      "GET",
      credentialDefinitionId,
    );

    return response.body;
  }

  /**
   * handle the retrieval of a Schema definition
   * 
   * @param {string} schemaURI - URI used to retrieve the Schema definition
   * @returns 
   */
  private async fetchSchema(schemaURI: string): Promise<Anoncreds.CredentialSchemaType> {
    const response = await this.api.request<Anoncreds.CredentialSchemaType>(
      "GET",
      schemaURI
    );

    return response.body;
  }

  async parseCredential(
    credentialBuffer: Uint8Array,
    options?: {
      type: CredentialType;
      linkSecret?: string;
      credentialMetadata?: Anoncreds.CredentialRequestMetadataType;
      [name: string]: any;
    }
  ) {
    const credentialType = options?.type || CredentialType.Unknown;
    const credentialString = Buffer.from(credentialBuffer).toString();

    if (credentialType === CredentialType.JWT) {
      return JWTCredential.fromJWS(credentialString);
    }

    if (credentialType === CredentialType.SDJWT) {
      return SDJWTCredential.fromJWS(credentialString);
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
      ) as Anoncreds.CredentialType;

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

  async createPresentationProof(
    presentationRequest: PresentationRequest<any>,
    credential: Credential,
    options: IPollux.createPresentationProof.options
  ) {
    if (
      credential instanceof AnonCredsCredential
      && presentationRequest.isType(AttachmentFormats.AnonCreds)
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

      return JSON.stringify(result);
    }

    if (
      credential instanceof JWTCredential
      && presentationRequest.isType(AttachmentFormats.JWT)
      && "did" in options
      && "privateKey" in options
    ) {
      const jwtPresentationRequest = presentationRequest;
      const presReqJson = jwtPresentationRequest.toJSON();
      const presReqOptions = presReqJson.options;
      const kid = await this.getSigningKid(options.did, options.privateKey);

      const signedJWT = await this.JWT.sign({
        issuerDID: options.did,
        privateKey: options.privateKey,
        payload: {
          iss: options.did.toString(),
          aud: presReqOptions.domain,
          nonce: presReqOptions.challenge,
          vp: credential.presentation()
        },
        header: { kid }
      });

      return signedJWT;
    }

    if (
      credential instanceof SDJWTCredential
      && presentationRequest.isType(AttachmentFormats.SDJWT)
      && "privateKey" in options

    ) {
      const presentationFrame = "presentationFrame" in options ?
        options.presentationFrame :
        {};
      const presentationJWS = await this.SDJWT.createPresentationFor<any>(
        {
          jws: credential.id,
          presentationFrame,
          privateKey: options.privateKey
        }
      );
      return presentationJWS;
    }

    throw new PolluxError.InvalidPresentationProofArgs();
  }


  /**
   * try to match the privateKey with a dids verificationMethod
   * returning the relevant key id
   * 
   * @param did 
   * @param privateKey 
   * @returns {string} kid (key identifier)
   * // ??? replaced by CreateJWT task
   */
  private async getSigningKid(did: DID, privateKey: PrivateKey) {
    const pubKey = privateKey.publicKey();
    const encoded = base58btc.encode(Uint8Array.from(pubKey.to.Buffer()));
    const document = await this.castor.resolveDID(did.toString());

    const signingKey = document.verificationMethods.find(key => {
      return key.publicKeyMultibase === encoded;
    });

    return signingKey?.id;
  }
}
