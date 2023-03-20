import { off } from "process";
import { JWT } from "../apollo/utils/jwt/JWT";
import { AttachmentDescriptor, Curve, DID, Seed } from "../domain";
import Apollo from "../domain/buildingBlocks/Apollo";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import { AgentError } from "../domain/models/Errors";
import { VerifiableCredential } from "../domain/models/VerifiableCredential";
import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import {
  createRequestCredentialBody,
  RequestCredential,
} from "./protocols/issueCredential/RequestCredential";
import { AgentCredentials as AgentCredentialsClass } from "./types";

export class AgentCredentials implements AgentCredentialsClass {
  constructor(
    protected apollo: Apollo,
    protected castor: Castor,
    protected pluto: Pluto,
    protected seed: Seed
  ) {}

  async verifiableCredentials(): Promise<VerifiableCredential[]> {
    return await this.pluto.getAllCredentials();
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

    debugger;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const from = offer.to!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const to = offer.from!;
    const thid = offer.thid;

    return new RequestCredential(
      requestCredentialBody,
      [
        new AttachmentDescriptor(
          {
            data: signedJWT,
          },
          "prism/jwt"
        ),
      ],
      from,
      to,
      thid
    );
  }
}
