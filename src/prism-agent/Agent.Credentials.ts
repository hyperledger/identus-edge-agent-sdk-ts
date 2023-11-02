import { JWT } from "../apollo/utils/jwt/JWT";
import {
  AttachmentBase64,
  AttachmentDescriptor,
  AttachmentJsonData,
  Curve,
  Seed,
  Credential,
  DID,
  CredentialType,
  CredentialIssueOptions,
} from "../domain";
import { Apollo } from "../domain/buildingBlocks/Apollo";
import { Castor } from "../domain/buildingBlocks/Castor";
import { Pluto } from "../domain/buildingBlocks/Pluto";
import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import {
  createRequestCredentialBody,
  RequestCredential,
} from "./protocols/issueCredential/RequestCredential";
import { AgentCredentials as AgentCredentialsClass } from "./types";
import { base64 } from "multiformats/bases/base64";
import { IssueCredential } from "./protocols/issueCredential/IssueCredential";
import { Pollux } from "../domain/buildingBlocks/Pollux";
import {
  createPresentationBody,
  Presentation,
} from "./protocols/proofPresentation/Presentation";
import { RequestPresentation } from "./protocols/proofPresentation/RequestPresentation";
import { AgentError } from "../domain/models/Errors";
import {
  KeyProperties,
  KeyTypes,
} from "../domain/models";

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
      parseOpts.linkSecret = (await this.pluto.getLinkSecret()) || undefined;
      const credentialMetadata = await this.pluto.fetchCredentialMetadata(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        issueCredential.thid!
      );
      if (!credentialMetadata) {
        throw new Error("Invalid credential Metadata");
      }
      parseOpts.credentialMetadata = credentialMetadata;
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
        await this.pollux.processAnonCredsCredential(message, {
          linkSecret: linkSecret,
          // TODO: why are we using `offer.thid` here? and below (line 135)
          linkSecretName: offer.thid,
        });
      credRequestBuffer = JSON.stringify(credentialRequest);

      await this.pluto.storeCredentialMetadata(
        credentialRequestMetadata,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        offer.thid!
      );
    } else if (credentialType === CredentialType.JWT) {
      const keyIndex = (await this.pluto.getPrismLastKeyPathIndex()) || 0;
      const privateKey = await this.apollo.createPrivateKey({
        [KeyProperties.curve]: Curve.SECP256K1,
        [KeyProperties.index]: keyIndex,
        [KeyProperties.type]: KeyTypes.EC,
        [KeyProperties.seed]: this.seed.value,
      });

      const did = await this.castor.createPrismDID(privateKey.publicKey());

      await this.pluto.storePrismDID(
        did,
        keyIndex,
        privateKey,
        null,
        did.toString()
      );

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
        //TODO confirm what is the format that backend expects us to send AnonCreds VS JWT
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
   * @param {RequestPresentation} request
   * @param {VerifiableCredential} credential
   * @returns {Promise<Presentation>}
   */
  async createPresentationForRequestProof(
    request: RequestPresentation,
    credential: Credential
  ): Promise<Presentation> {
    const requestData = request.attachments.find(
      (attachment) =>
        attachment &&
        attachment.data &&
        (attachment.data as AttachmentJsonData).data
    );
    if (!requestData) {
      throw new AgentError.OfferDoesntProvideEnoughInformation();
    }
    //TODO: Improve attributes in Request & AttachmentData
    const data = requestData.data as any;
    const jsonObject = data.data;

    const options = jsonObject.options;

    const challenge = options.challenge;
    const domain = options.domain;
    const subjectDID = DID.fromString(credential.subject);

    if (!subjectDID) {
      throw new Error("Credential subject not found");
    }

    const prismPrivateKeys =
      await this.pluto.getDIDPrivateKeysByDID(subjectDID);
    const prismPrivateKey = prismPrivateKeys.at(0);

    if (prismPrivateKey === undefined) {
      throw new Error("DID PrivateKeys not found");
    }

    const didInfo = await this.pluto.getDIDInfoByDID(subjectDID);
    if (!didInfo) {
      throw new Error("DID not found");
    }

    if (!credential.isProvable()) {
      throw new Error("Credential is not Provable");
    }

    const credentialPresentation = credential.presentation();

    const jwt = new JWT(this.castor);

    const signedJWT = await jwt.sign(didInfo.did, prismPrivateKey, {
      iss: didInfo.did.toString(),
      aud: domain,
      nonce: challenge,
      vp: credentialPresentation,
    });

    const base64JWT = base64.baseEncode(Buffer.from(signedJWT));
    const presentationBody = createPresentationBody(
      request.body.goalCode,
      request.body.comment
    );

    const presentation = new Presentation(
      presentationBody,
      [
        new AttachmentDescriptor(
          {
            base64: base64JWT,
          },
          "prism/jwt"
        ),
      ],
      request.to,
      request.from,
      request.thid
    );

    return presentation;
  }
}
