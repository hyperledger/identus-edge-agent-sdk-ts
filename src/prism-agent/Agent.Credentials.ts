import { JWT } from "../apollo/utils/jwt/JWT";
import {
  AttachmentBase64,
  AttachmentDescriptor,
  AttachmentJsonData,
  Curve,
  Seed,
} from "../domain";
import { Apollo } from "../domain/buildingBlocks/Apollo";
import { Castor } from "../domain/buildingBlocks/Castor";
import { Pluto } from "../domain/buildingBlocks/Pluto";
import { VerifiableCredential } from "../domain/models/VerifiableCredential";
import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import {
  createRequestCredentialBody,
  RequestCredential,
} from "./protocols/issueCredential/RequestCredential";
import { AgentCredentials as AgentCredentialsClass } from "./types";
import { base64, base64url } from "multiformats/bases/base64";
import { IssueCredential } from "./protocols/issueCredential/IssueCredential";
import { Pollux } from "../domain/buildingBlocks/Pollux";
import {
  createPresentationBody,
  Presentation,
} from "./protocols/proofPresentation/Presentation";
import { RequestPresentation } from "./protocols/proofPresentation/RequestPresentation";
import { AgentError } from "../domain/models/Errors";
import { KeyTypes } from "../domain/models";

/**
 * An extension for the Edge agents that groups all the tasks and flows related to credentials
 * those incluse processing, parsing and signing credential requests that will be then send to an Agent or received from an agent
 *
 * @interface
 * @class AgentCredentials
 * @typedef {AgentCredentials}
 */
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

  /**
   * Asyncronously get all the stored verifiableCredentials
   *
   * @async
   * @returns {Promise<VerifiableCredential[]>}
   */
  async verifiableCredentials(): Promise<VerifiableCredential[]> {
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
    message: IssueCredential
  ): Promise<VerifiableCredential> {
    const attachment = message.attachments.at(0)?.data;

    if (!attachment) {
      throw new Error("No attachment");
    }

    const jwtData = base64url.baseDecode(
      (attachment as AttachmentBase64).base64
    );

    const credential = this.pollux.parseVerifiableCredential(
      Buffer.from(jwtData).toString()
    );

    await this.pluto.storeCredential(credential);

    return credential;
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
    const keyIndex = (await this.pluto.getPrismLastKeyPathIndex()) || 0;

    const privateKey = this.apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.SECP256K1,
      seed: Buffer.from(this.seed.value).toString("hex"),
    });

    const publicKey = privateKey.publicKey();

    const did = await this.castor.createPrismDID(publicKey);

    await this.pluto.storePrismDID(
      did,
      keyIndex,
      privateKey,
      null,
      did.toString()
    );
    const attachment = this.extractDomainChallenge(offer.attachments);

    const jwt = new JWT(this.castor);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const challenge = attachment.challenge!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const domain = attachment.domain!;
    const signedJWT = await jwt.sign(did, privateKey.value, {
      aud: domain,
      nonce: challenge,
      vp: {
        "@context": ["https://www.w3.org/2018/presentations/v1"],
        type: ["VerifiablePresentation"],
      },
    });
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
    const requestCredential = new RequestCredential(
      requestCredentialBody,
      [
        new AttachmentDescriptor(
          {
            base64: base64.baseEncode(Buffer.from(signedJWT)),
          },
          "prism/jwt"
        ),
      ],
      from,
      to,
      thid
    );
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
    credential: VerifiableCredential
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
    const subjectDID = credential.subject;
    if (!subjectDID) {
      throw new Error("Credential subject not found");
    }

    const prismPrivateKeys = await this.pluto.getDIDPrivateKeysByDID(
      subjectDID
    );
    const prismPrivateKey = prismPrivateKeys.at(0);

    if (prismPrivateKey === undefined) {
      throw new Error("DID PrivateKeys not found");
    }

    const jwt = new JWT(this.castor);
    //TODO: type safe this
    const originalJWTString = (credential as any).originalJWTString;

    const didInfo = await this.pluto.getDIDInfoByDID(subjectDID);
    if (!didInfo) {
      throw new Error("DID not found");
    }

    const signedJWT = await jwt.sign(
      didInfo.did,
      prismPrivateKey,
      {
        iss: didInfo.did.toString(),
        aud: domain,
        nonce: challenge,
        vp: {
          "@context": ["https://www.w3.org/2018/presentations/v1"],
          type: ["VerifiablePresentation"],
          verifiableCredential: [originalJWTString],
        },
      }
    );

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
