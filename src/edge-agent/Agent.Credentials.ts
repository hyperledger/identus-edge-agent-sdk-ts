import { base64 } from "multiformats/bases/base64";

import {
  AgentError,
  Apollo,
  AttachmentDescriptor,
  Castor,
  Credential,
  CredentialType,
  CredentialIssueOptions,
  Curve,
  DID,
  KeyProperties,
  KeyTypes,
  Seed,
  Message,
  Pluto,
  Pollux,
  CredentialMetadata,
  PresentationOptions,
  Mercury,
  PresentationDefinitionRequest,
  PresentationClaims,
  AttachmentFormats,
  PolluxError,
  curveToAlg,
} from "../domain";

import { AnonCredsCredential } from "../pollux/models/AnonCredsVerifiableCredential";
import { JWTCredential } from "../pollux/models/JWTVerifiableCredential";
import { PresentationRequest } from "../pollux/models/PresentationRequest";

import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import { createRequestCredentialBody, RequestCredential } from "./protocols/issueCredential/RequestCredential";
import { IssueCredential } from "./protocols/issueCredential/IssueCredential";
import { Presentation } from "./protocols/proofPresentation/Presentation";
import { RequestPresentation } from "./protocols/proofPresentation/RequestPresentation";

import { AgentCredentials as AgentCredentialsClass, AgentDIDHigherFunctions } from "./types";
import { PrismKeyPathIndexTask } from "./Agent.PrismKeyPathIndexTask";
import { uuid } from "@stablelib/uuid";
import { ProtocolType } from "./protocols/ProtocolTypes";
import { validatePresentationClaims } from "../pollux/utils/claims";
import { SDJWTCredential } from "../pollux/models/SDJWTVerifiableCredential";

export class AgentCredentials implements AgentCredentialsClass {
  /**
   * Creates an instance of AgentCredentials.
   *
   * @constructor
   * @param {Apollo} apollo
   * @param {Castor} castor
   * @param {Pluto} pluto
   * @param {Pollux} pollux
   * @param {Seed} seed
   */
  constructor(
    protected apollo: Apollo,
    protected castor: Castor,
    protected pluto: Pluto,
    protected pollux: Pollux,
    protected seed: Seed,
    protected mercury: Mercury,
    protected agentDIDHigherFunctions: AgentDIDHigherFunctions
  ) { }





  private createPresentationDefinitionRequest<Type extends CredentialType = CredentialType.JWT>(
    type: Type,
    definition: PresentationDefinitionRequest<Type>,
    from: DID,
    to: DID
  ) {
    const attachmentFormat = type === CredentialType.JWT ?
      AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS :
      AttachmentFormats.ANONCREDS_PROOF_REQUEST;

    return new RequestPresentation(
      {
        proofTypes: [],
      },
      [
        AttachmentDescriptor.build(
          definition,
          uuid(),
          'application/json',
          undefined,
          attachmentFormat
        )
      ],
      from,
      to,
      uuid()
    );
  }

  async initiatePresentationRequest(
    type: CredentialType,
    toDID: DID,
    claims: PresentationClaims<CredentialType>
  ): Promise<RequestPresentation> {
    const didDocument = await this.castor.resolveDID(toDID.toString());
    const newPeerDID = await this.agentDIDHigherFunctions.createNewPeerDID(
      didDocument.services,
      true
    );

    if (type === CredentialType.AnonCreds) {
      if (!validatePresentationClaims(claims, CredentialType.AnonCreds)) {
        throw new PolluxError.InvalidPresentationDefinitionError("Anoncreds Claims are invalid");
      }

      const presentationDefinitionRequest = await this.pollux.createPresentationDefinitionRequest(
        type,
        claims,
        new PresentationOptions({}, CredentialType.AnonCreds)
      );

      return this.createPresentationDefinitionRequest<CredentialType.AnonCreds>(
        type,
        presentationDefinitionRequest,
        newPeerDID,
        toDID
      );
    }

    if (type === CredentialType.JWT) {
      if (!validatePresentationClaims(claims, CredentialType.JWT)) {
        throw new PolluxError.InvalidPresentationDefinitionError("JWT Claims are invalid");
      }
      const presentationDefinitionRequest = await this.pollux.createPresentationDefinitionRequest<CredentialType.JWT>(
        type,
        claims,
        new PresentationOptions({
          jwt: {
            jwtAlg: [curveToAlg(Curve.SECP256K1)]
          },
          challenge: "Sign this text " + uuid(),
          domain: 'N/A'
        })
      );
      return this.createPresentationDefinitionRequest<CredentialType.JWT>(
        type,
        presentationDefinitionRequest,
        newPeerDID,
        toDID
      );
    }

    throw new PolluxError.CredentialTypeNotSupported();
  }

  async verifiableCredentials(): Promise<Credential[]> {
    return await this.pluto.getAllCredentials();
  }

  /**
   * Extract the verifiableCredential object from the Issue credential message asyncronously
   *
   * @async
   * @param {IssueCredential} message
   * @returns {Promise<VerifiableCredential>}
   */
  async processIssuedCredentialMessage(
    issueCredential: IssueCredential
  ): Promise<Credential> {
    const message = issueCredential.makeMessage()
    const credentialType = message.credentialFormat;
    const attachment = message.attachments.at(0);

    if (!attachment) {
      throw new Error("No attachment");
    }

    if (!issueCredential.thid) {
      throw new Error("No thid");
    }

    const parseOpts: CredentialIssueOptions = {
      type: credentialType,
    };


    const payload = typeof attachment.payload === 'string' ? attachment.payload : JSON.stringify(attachment.payload);
    const credData = Uint8Array.from(Buffer.from(payload));

    if (credentialType === CredentialType.AnonCreds) {
      const linkSecret = await this.pluto.getLinkSecret();

      parseOpts.linkSecret = linkSecret?.secret;

      const credentialMetadata = await this.pluto.getCredentialMetadata(
        issueCredential.thid
      );

      if (!credentialMetadata || !credentialMetadata.isType(CredentialType.AnonCreds)) {
        throw new Error("Invalid credential Metadata");
      }

      parseOpts.credentialMetadata = credentialMetadata.toJSON();
    }

    const credential: Credential = await this.pollux.parseCredential(credData, parseOpts);

    await this.pluto.storeCredential(credential);

    return credential;
  }



  /**
   * Asyncronously prepare a request credential message from a valid offerCredential for now supporting w3c verifiable credentials offers.
   *
   * @async
   * @param {OfferCredential} offer
   * @returns {Promise<RequestCredential>}
   */
  async prepareRequestCredentialWithIssuer(
    offer: OfferCredential
  ): Promise<RequestCredential> {
    const attachment = offer.attachments.at(0);
    if (!attachment) {
      throw new Error("Invalid attachment")
    }

    const credentialType = offer.makeMessage().credentialFormat;
    const payload = attachment.payload
    let credRequestBuffer: string;

    const requestCredentialBody = createRequestCredentialBody(
      [],
      offer.body.goalCode,
      offer.body.comment
    );

    const from = offer.to;
    const to = offer.from;
    if (!from) {
      throw new Error("Missing from");
    }
    if (!to) {
      throw new Error("Missing to");
    }
    const thid = offer.thid;
    const credentialFormat =
      credentialType === CredentialType.AnonCreds ? AttachmentFormats.ANONCREDS_REQUEST :
        credentialType === CredentialType.JWT ? CredentialType.JWT :
          credentialType === CredentialType.SDJWT ? CredentialType.SDJWT :
            CredentialType.Unknown;

    if (credentialType === CredentialType.AnonCreds) {
      const metaname = offer.thid;
      if (!metaname) {
        throw new Error("Missing offer.thid");
      }

      const linkSecret = await this.pluto.getLinkSecret();
      if (!linkSecret) {
        throw new Error("No linkSecret available.");
      }

      const [credentialRequest, credentialRequestMetadata] =
        await this.pollux.processCredentialOffer<CredentialType.AnonCreds>(payload, { linkSecret });

      credRequestBuffer = JSON.stringify(credentialRequest);

      const metadata = new CredentialMetadata(CredentialType.AnonCreds, metaname, credentialRequestMetadata);

      await this.pluto.storeCredentialMetadata(metadata);
    } else if (credentialType === CredentialType.JWT) {
      const getIndexTask = new PrismKeyPathIndexTask(this.pluto);
      const privateKey = await this.apollo.createPrivateKey({
        [KeyProperties.curve]: Curve.SECP256K1,
        [KeyProperties.index]: await getIndexTask.run(),
        [KeyProperties.type]: KeyTypes.EC,
        [KeyProperties.seed]: Buffer.from(this.seed.value).toString("hex"),
      });

      const did = await this.castor.createPrismDID(privateKey.publicKey());

      await this.pluto.storeDID(did, privateKey);

      credRequestBuffer = await this.pollux.processCredentialOffer<CredentialType.JWT>(payload, {
        did: did,
        keyPair: {
          curve: Curve.SECP256K1,
          privateKey: privateKey,
          publicKey: privateKey.publicKey(),
        },
      });
    } else if (credentialType === CredentialType.SDJWT) {

      const getIndexTask = new PrismKeyPathIndexTask(this.pluto);
      const masterSk = await this.apollo.createPrivateKey({
        [KeyProperties.curve]: Curve.SECP256K1,
        [KeyProperties.index]: await getIndexTask.run(),
        [KeyProperties.type]: KeyTypes.EC,
        [KeyProperties.seed]: Buffer.from(this.seed.value).toString("hex"),
      });

      const issSK = await this.apollo.createPrivateKey({
        [KeyProperties.curve]: Curve.ED25519,
        [KeyProperties.index]: await getIndexTask.run(),
        [KeyProperties.type]: KeyTypes.EC,
        [KeyProperties.seed]: Buffer.from(this.seed.value).toString("hex"),
      });

      const did = await this.castor.createPrismDID(
        masterSk.publicKey(),
        [],
        [
          issSK.publicKey()
        ]
      );

      await this.pluto.storeDID(did, [masterSk, issSK]);

      credRequestBuffer = await this.pollux.processCredentialOffer<CredentialType.SDJWT>(payload, {
        did: did,
        sdJWT: true,
        keyPair: {
          curve: Curve.SECP256K1,
          privateKey: masterSk,
          publicKey: masterSk.publicKey(),
        },
      });
    } else {
      throw new AgentError.InvalidCredentialFormats();
    }


    const attachments = [
      new AttachmentDescriptor(
        {
          base64: base64.baseEncode(Buffer.from(credRequestBuffer)),
        },
        credentialFormat,
        undefined,
        undefined,
        // TODO: confirm what is the format that backend expects us to send AnonCreds VS JWT
        credentialFormat
      ),
    ];

    const requestCredential = new RequestCredential(
      requestCredentialBody,
      attachments,
      from,
      to,
      thid
    );

    attachments.forEach((attachment) => {
      requestCredential.body.formats.push({
        attach_id: attachment.id,
        format: `${credentialFormat}`,
      });
    });

    return requestCredential;
  }

  private async getPresentationDefinitionByThid<Type extends CredentialType = CredentialType.JWT>(thid: string): Promise<PresentationDefinitionRequest<Type>> {
    const allMessages = (await this.pluto.getAllMessages());
    const message = allMessages.find((message) => {
      return message.thid === thid && message.piuri === ProtocolType.DidcommRequestPresentation;
    });
    if (message) {
      const attachment = message.attachments.at(0);
      if (!attachment) {
        throw new AgentError.UnsupportedAttachmentType("Invalid presentation message, attachment missing");
      }
      const presentationDefinitionRequest = Message.Attachment.extractJSON(attachment);
      return presentationDefinitionRequest;
    }
    throw new AgentError.UnsupportedAttachmentType("Cannot find any message with that threadID");
  }

  async handlePresentation<Type extends CredentialType = CredentialType.JWT>(presentation: Presentation): Promise<boolean> {
    const attachment = presentation.attachments.at(0);
    if (!attachment) {
      throw new AgentError.UnsupportedAttachmentType("Invalid presentation message, attachment missing");
    }
    if (!presentation.thid) {
      throw new AgentError.UnsupportedAttachmentType("Cannot find any message with that threadID");
    }
    const presentationSubmission = JSON.parse(attachment.payload)
    const presentationDefinitionRequest = await this.getPresentationDefinitionByThid<Type>(presentation.thid);
    const options = {
      presentationDefinitionRequest
    };
    const verified = await this.pollux.verifyPresentationSubmission(
      presentationSubmission,
      options
    );
    return verified;
  }

  /**
   * Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
   * This is used when the verified requests a specific verifiable credential, this will create the actual
   * instance of the presentation which we can share with the verifier.
   *
   * @async
   * @param {RequestPresentation} message
   * @param {VerifiableCredential} credential
   * @returns {Promise<Presentation>}
   */
  async createPresentationForRequestProof(
    message: RequestPresentation,
    credential: Credential
  ): Promise<Presentation> {
    const attachment = message.attachments.at(0);
    if (!attachment) {
      throw new AgentError.OfferDoesntProvideEnoughInformation();
    }
    const attachmentFormat = attachment.format ?? 'unknown';
    const presentationRequest = this.parseProofRequest(attachment);
    const proof = attachmentFormat === AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS ?
      await this.handlePresentationDefinitionRequest(presentationRequest, credential) :
      await this.handlePresentationRequest(presentationRequest, credential);

    const presentationAttachment = AttachmentDescriptor.build(
      proof,
      uuid(),
      'application/json',
      undefined,
      AttachmentFormats.ANONCREDS_PROOF
    );
    const presentation = new Presentation(
      {
        comment: message.body.comment,
        goalCode: message.body.goalCode
      },
      [
        presentationAttachment,
      ],
      message.to,
      message.from,
      message.thid ?? message.id
    );
    return presentation;
  }


  /**
   * This method can be used by holders in order to disclose the value of a Credential
   * JWT are just encoded plainText
   * Anoncreds will really need to be disclosed as the fields are encoded.
   *
   * @param {Credential} credential
   * @returns {AttributeType}
   */
  async revealCredentialFields(credential: Credential, fields: string[], linkSecret: string) {
    return this.pollux.revealCredentialFields(credential, fields, linkSecret);
  }


  /**
   * match the Proof request to return relevant PresentationRequest.
   * Proof Request comes from a Message Attachment.
   * 
   * @param {AttachmentDescriptor} data - presentation proof request
   * @returns {PresentationRequest}
   * @throws
   */
  private parseProofRequest(attachment: AttachmentDescriptor) {
    const data = Message.Attachment.extractJSON(attachment);
    if (attachment.format === AttachmentFormats.ANONCREDS_PROOF_REQUEST) {
      return new PresentationRequest(AttachmentFormats.AnonCreds, data);
    }
    if (attachment.format === CredentialType.JWT) {
      return new PresentationRequest(AttachmentFormats.JWT, data);
    }
    if (attachment.format === CredentialType.SDJWT) {
      return new PresentationRequest(AttachmentFormats.SDJWT, data);
    }
    if (attachment.format === AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS) {
      return new PresentationRequest(AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS, data);
    }
    throw new Error("Unsupported Proof Request");
  }

  private async handlePresentationDefinitionRequest(
    request: PresentationRequest<any>,
    credential: Credential,
  ): Promise<string> {
    if (request.isType(AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS)) {
      if (credential instanceof JWTCredential) {
        const privateKeys = await this.pluto.getDIDPrivateKeysByDID(DID.fromString(credential.subject));
        const privateKey = privateKeys.at(0);
        if (!privateKey) {
          throw new Error("Undefined privatekey from credential subject.");
        }
        if (!request.isType(AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS)) {
          throw new Error("Undefined privatekey from credential subject.");
        }
        const presentationSubmission = await this.pollux.createPresentationSubmission(
          request.toJSON(),
          credential,
          privateKey
        );
        return JSON.stringify(presentationSubmission);
      }
    }
    if (request.isType(AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS)) {
      if (credential instanceof AnonCredsCredential) {
        const storedLinkSecret = await this.pluto.getLinkSecret();
        if (!storedLinkSecret) {
          throw new Error("Link secret not found.");
        }

        const req = request.toJSON()
        const presentationSubmission = await this.pollux.createPresentationSubmission(
          req as any,
          credential,
          storedLinkSecret
        );
        return JSON.stringify(presentationSubmission);
      }
    }

    throw new Error("Not implemented");
  }

  private async handlePresentationRequest(
    request: PresentationRequest<any>,
    credential: Credential
  ): Promise<string> {
    if (credential instanceof SDJWTCredential && request.isType(AttachmentFormats.SDJWT)) {
      if (!credential.isProvable()) {
        throw new Error("Credential is not Provable");
      }
      const subjectDID = DID.from(credential.subject);
      const prismPrivateKeys = await this.pluto.getDIDPrivateKeysByDID(subjectDID);
      const prismPrivateKey = prismPrivateKeys.find((key) => key.curve === Curve.ED25519)
      if (prismPrivateKey === undefined) {
        throw new AgentError.CannotFindDIDPrivateKey();
      }
      const signedJWT = await this.pollux.createPresentationProof(request, credential, {
        did: subjectDID,
        privateKey: prismPrivateKey
      });
      return signedJWT;
    }
    if (credential instanceof AnonCredsCredential && request.isType(AttachmentFormats.AnonCreds)) {
      const linkSecret = await this.pluto.getLinkSecret();
      if (!linkSecret) {
        throw new AgentError.CannotFindLinkSecret();
      }
      const presentation = await this.pollux.createPresentationProof(request, credential, { linkSecret });
      return presentation;
    }
    if (credential instanceof JWTCredential && request.isType(AttachmentFormats.JWT)) {
      if (!credential.isProvable()) {
        throw new Error("Credential is not Provable");
      }
      const subjectDID = DID.from(credential.subject);
      const prismPrivateKeys = await this.pluto.getDIDPrivateKeysByDID(subjectDID);
      const prismPrivateKey = prismPrivateKeys.find((key) => key.curve === Curve.SECP256K1)
      if (prismPrivateKey === undefined) {
        throw new AgentError.CannotFindDIDPrivateKey();
      }
      const signedJWT = await this.pollux.createPresentationProof(request, credential, {
        did: subjectDID,
        privateKey: prismPrivateKey
      });
      return signedJWT;
    }

    throw new AgentError.UnhandledPresentationRequest();
  }

  async isCredentialRevoked(credential: Credential): Promise<boolean> {
    return this.pollux.isCredentialRevoked(credential)
  }

}
