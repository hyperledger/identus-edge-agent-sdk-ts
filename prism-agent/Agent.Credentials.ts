import { JWT } from "../apollo/utils/jwt/JWT";
import {
  AttachmentBase64,
  AttachmentDescriptor,
  AttachmentJsonData,
  Curve,
  DID,
  Seed,
} from "../domain";
import Apollo from "../domain/buildingBlocks/Apollo";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import { VerifiableCredential } from "../domain/models/VerifiableCredential";
import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import {
  createRequestCredentialBody,
  RequestCredential,
} from "./protocols/issueCredential/RequestCredential";
import { AgentCredentials as AgentCredentialsClass } from "./types";
import { base64, base64url } from "multiformats/bases/base64";
import { IssueCredential } from "./protocols/issueCredential/IssueCredential";
import Pollux from "../domain/buildingBlocks/Pollux";
import { Presentation } from "./protocols/proofPresentation/Presentation";
import { RequestPresentation } from "./protocols/proofPresentation/RequestPresentation";
import { AgentError } from "../domain/models/Errors";
export class AgentCredentials implements AgentCredentialsClass {
  constructor(
    protected apollo: Apollo,
    protected castor: Castor,
    protected pluto: Pluto,
    protected pollux: Pollux,
    protected seed: Seed
  ) {}

  async verifiableCredentials(): Promise<VerifiableCredential[]> {
    return await this.pluto.getAllCredentials();
  }

  async processIssuedCredentialMessage(
    message: IssueCredential
  ): Promise<VerifiableCredential> {
    const attachment = message.attachments && message.attachments[0].data;
    if (!attachment) {
      throw new Error("No attachment");
    }
    const jwtData = base64url.baseDecode(
      (attachment as AttachmentBase64).base64
    );

    const credential = this.pollux.parseVerifiableCredential(
      Buffer.from(jwtData).toString()
    );
    debugger;
    await this.pluto.storeCredential(credential);
    debugger;
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
    debugger;
    await this.pluto.storePrismDID(
      did,
      keyIndex,
      keyPair.privateKey,
      null,
      did.toString()
    );
    debugger;
    const attachment = this.extractDomainChallenge(offer.attachments);

    const jwt = new JWT(this.castor);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const challenge = attachment.challenge!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const domain = attachment.domain!;
    const signedJWT = await jwt.sign(did, keyPair.privateKey.value, {
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
    debugger;
    if (!requestData) {
      throw new AgentError.OfferDoesntProvideEnoughInformation();
    }
    //TODO: Improve attributes in Request & AttachmentData
    const data = requestData.data as any;
    const jsonObject = data.data;

    const options = jsonObject.options;

    const challenge = options.challenge;
    const domain = options.domain;
    debugger;
    const subjectDID = credential.subject;
    if (!subjectDID) {
      throw new Error("Credential subject not found");
    }

    const prismPrivateKey = await this.pluto.getDIDPrivateKeysByDID(subjectDID);
    debugger;
    throw new Error("Not implemented");
  }
}
