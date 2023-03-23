import { JWT } from "../apollo/utils/jwt/JWT";
import {
  AttachmentBase64,
  AttachmentDescriptor,
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

    await this.pluto.storeCredential(credential);

    return credential;
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

    await this.pluto.storePrismDID(
      did,
      keyIndex,
      keyPair.privateKey,
      `offer${offer.id}`
    );

    const attachment = offer.attachments.reduce(
      (_, attachment: any) => ({
        challenge: attachment.data.data.options.challenge,
        domain: attachment.data.data.options.domain,
      }),
      { challenge: undefined, domain: undefined } as {
        challenge?: string;
        domain?: string;
      }
    );
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
}
