import { base64 } from "multiformats/bases/base64";

import {
  AgentError,
  Apollo,
  AttachmentBase64,
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
  CredentialMetadata
} from "../domain";

import { AnonCredsCredential } from "../pollux/models/AnonCredsVerifiableCredential";
import { JWTCredential } from "../pollux/models/JWTVerifiableCredential";
import { PresentationRequest } from "../pollux/models/PresentationRequest";

import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import { createRequestCredentialBody, RequestCredential } from "./protocols/issueCredential/RequestCredential";
import { IssueCredential } from "./protocols/issueCredential/IssueCredential";
import { Presentation } from "./protocols/proofPresentation/Presentation";
import { RequestPresentation } from "./protocols/proofPresentation/RequestPresentation";

import { AgentCredentials as AgentCredentialsClass } from "./types";
import { PrismKeyPathIndexTask } from "./Agent.PrismKeyPathIndexTask";

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
    protected seed: Seed
  ) {}

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
    const credentialType = this.pollux.extractCredentialFormatFromMessage(
      issueCredential.makeMessage()
    );
    const attachment = issueCredential.attachments.at(0)?.data;

    if (!attachment) {
      throw new Error("No attachment");
    }

    const credData = base64.baseDecode((attachment as AttachmentBase64).base64);

    const parseOpts: CredentialIssueOptions = {
      type: credentialType,
    };

    if (credentialType === CredentialType.AnonCreds) {
      const linkSecret = await this.pluto.getLinkSecret();

      parseOpts.linkSecret = linkSecret?.secret;

      const credentialMetadata = await this.pluto.getCredentialMetadata(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        issueCredential.thid!
      );

      if (!credentialMetadata || !credentialMetadata.isType(CredentialType.AnonCreds)) {
        throw new Error("Invalid credential Metadata");
      }

      parseOpts.credentialMetadata = credentialMetadata.toJSON();
    }

    const credential = await this.pollux.parseCredential(credData, parseOpts);

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
    const message = offer.makeMessage();
    const credentialType =
      this.pollux.extractCredentialFormatFromMessage(message);

    let credRequestBuffer: string;

    if (credentialType === CredentialType.AnonCreds) {
      const linkSecret = await this.pluto.getLinkSecret();
      if (!linkSecret) {
        throw new Error("No linkSecret available.");
      }

      const [credentialRequest, credentialRequestMetadata] =
        await this.pollux.processAnonCredsCredential(message, { linkSecret });

      credRequestBuffer = JSON.stringify(credentialRequest);

      // TODO can we fallback here? would need another identifier
      const metaname = offer.thid;

      if (!metaname) {
        throw new Error("Missing offer.thid");
      }

      const metadata = new CredentialMetadata(CredentialType.AnonCreds, metaname, credentialRequestMetadata);

      await this.pluto.storeCredentialMetadata(metadata);
    } else if (credentialType === CredentialType.JWT) {
      // ?? duplicated Agent.DIDHigherFunctions.createNewPrismDID
      const getIndexTask = new PrismKeyPathIndexTask(this.pluto);
      const keyIndex = await getIndexTask.run();
      const privateKey = await this.apollo.createPrivateKey({
        [KeyProperties.curve]: Curve.SECP256K1,
        [KeyProperties.index]: keyIndex,
        [KeyProperties.type]: KeyTypes.EC,
        [KeyProperties.seed]: this.seed.value,
      });

      const did = await this.castor.createPrismDID(privateKey.publicKey());

      await this.pluto.storePrismDID(did, privateKey);

      credRequestBuffer = await this.pollux.processJWTCredential(message, {
        did: did,
        keyPair: {
          curve: Curve.SECP256K1,
          privateKey: privateKey,
          publicKey: privateKey.publicKey(),
        },
      });
    } else {
      throw new AgentError.InvalidCredentialFormats();
    }

    const requestCredentialBody = createRequestCredentialBody(
      offer.body.formats,
      offer.body.goalCode,
      offer.body.comment
    );

    // TODO: remove assertions
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const from = offer.to!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const to = offer.from!;
    const thid = offer.thid;

    const credentialFormat =
      credentialType === CredentialType.AnonCreds
        ? "anoncreds/credential-request@v1.0"
        : credentialType === CredentialType.JWT
          ? "prism/jwt"
          : CredentialType.Unknown;

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
        format: credentialFormat,
      });
    });

    return requestCredential;
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

    // ?? is this technically correct?, could there be multiple attachments requiring proof?
    // if so could need multiple Credentials...
    // validation: there needs to be at least one...
    const attachment = message.attachments.at(0);

    if (!attachment) {
      throw new AgentError.OfferDoesntProvideEnoughInformation();
    }

    const presentationRequest = this.parseProofRequest(attachment);
    const proof = await this.handlePresentationRequest(presentationRequest, credential);
    const base64Encoded = base64.baseEncode(Buffer.from(proof));

    const presentation = new Presentation(
      {
        comment: message.body.comment,
        goalCode: message.body.goalCode
      },
      [
        new AttachmentDescriptor({ base64: base64Encoded }),
      ],
      message.to,
      message.from,
      message.thid
    );

    return presentation;
  }

  /**
   * match the Proof request to return relevant PresentationRequest.
   * Proof Request comes from a Message Attachment.
   * 
   * @param {AttachmentDescriptor} data - presentation proof request
   * @returns {PresentationRequest}
   * @throws
   */
  private parseProofRequest(attachment: AttachmentDescriptor): PresentationRequest {
    const data = Message.Attachment.extractJSON(attachment);

    if (attachment.format === "anoncreds/proof-request@v1.0") {
      return new PresentationRequest(CredentialType.AnonCreds, data);
    }

    if (attachment.format === "prism/jwt") {
      return new PresentationRequest(CredentialType.JWT, data);
    }

    throw new Error("Unsupported Proof Request");
  }

  private async handlePresentationRequest(
    request: PresentationRequest,
    credential: Credential
  ): Promise<string> {
    if (credential instanceof AnonCredsCredential && request.isType(CredentialType.AnonCreds)) {
      const linkSecret = await this.pluto.getLinkSecret();
      if (!linkSecret) {
        throw new AgentError.CannotFindLinkSecret();
      }

      const presentation = await this.pollux.createPresentationProof(request, credential, { linkSecret });

      return JSON.stringify(presentation);
    }

    if (credential instanceof JWTCredential && request.isType(CredentialType.JWT)) {
      if (!credential.isProvable()) {
        throw new Error("Credential is not Provable");
      }

      const subjectDID = DID.from(credential.subject);
      const prismPrivateKeys = await this.pluto.getDIDPrivateKeysByDID(subjectDID);
      const prismPrivateKey = prismPrivateKeys.at(0);

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
}
