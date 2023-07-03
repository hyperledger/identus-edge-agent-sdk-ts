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
import { base64, base64url } from "multiformats/bases/base64";
import { IssueCredential } from "./protocols/issueCredential/IssueCredential";
import { Pollux } from "../domain/buildingBlocks/Pollux";
import {
  createPresentationBody,
  Presentation,
} from "./protocols/proofPresentation/Presentation";
import { RequestPresentation } from "./protocols/proofPresentation/RequestPresentation";
import { AgentError } from "../domain/models/Errors";

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
  ) { }

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
    message: IssueCredential
  ): Promise<Credential> {
    const attachment = message.attachments.at(0)?.data;

    if (!attachment) {
      throw new Error("No attachment");
    }

    const jwtData = base64url.baseDecode(
      (attachment as AttachmentBase64).base64
    );

    const credential = this.pollux.parseCredential(jwtData, {
      type: CredentialType.JWT,
    });

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
    const keyIndex = (await this.pluto.getPrismLastKeyPathIndex()) || 0;
    const keyPair = await this.apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.SECP256K1,
        index: keyIndex,
      },
      this.seed
    );
    const did = await this.castor.createPrismDID(keyPair.publicKey);

    await this.pluto.storePrismDID(
      did,
      keyIndex,
      {
        keyCurve: keyPair.privateKey.keyCurve,
        value: Buffer.from(base64url.baseEncode(keyPair.privateKey.value)),
      },
      null,
      did.toString()
    );

    const message = offer.makeMessage();
    const credBuffer = await this.pollux.processCredentialRequest(message, {
      did: did,
      keyPair: keyPair,
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
            base64: base64.baseEncode(Buffer.from(credBuffer)),
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

    const prismPrivateKeys = await this.pluto.getDIDPrivateKeysByDID(
      subjectDID
    );
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

    const signedJWT = await jwt.sign(
      didInfo.did,
      base64url.baseDecode(Buffer.from(prismPrivateKey.value).toString()),
      {
        iss: didInfo.did.toString(),
        aud: domain,
        nonce: challenge,
        vp: credentialPresentation,
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
