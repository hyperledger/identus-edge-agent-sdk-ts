import { Castor } from "../domain/buildingBlocks/Castor";
import { Pollux as PolluxInterface } from "../domain/buildingBlocks/Pollux";
import { InvalidJWTString } from "../domain/models/errors/Pollux";
import { base64url } from "multiformats/bases/base64";
import { AnoncredsLoader } from "./AnoncredsLoader";
import { CredentialRequestOptions } from "../domain/models/Credential";
import {
  AttachmentDescriptor,
  CredentialType,
  JWTCredential,
  Message,
} from "../domain";
import { JWT } from "../apollo/utils/jwt/JWT";

/**
 * Implementation of PolluxInterface and responsible of handling credential related tasks
 *
 * @export
 * @class Pollux
 * @typedef {Pollux}
 */
export default class Pollux implements PolluxInterface {
  private _anoncreds: AnoncredsLoader | undefined;

  constructor(private castor: Castor) { }

  async start() {
    this._anoncreds = await AnoncredsLoader.getInstance();
  }

  // TODO - should anoncreds be exposed or hidden through abstraction?
  get anoncreds() {
    if (this._anoncreds === undefined) {
      throw new Error("Pollux - Anoncreds not loaded");
    }

    return this._anoncreds;
  }

  //TODO: Match the correct format with whatever backend is sending us
  private extractCredentialFormatFromMessage(message: Message) {
    const body = JSON.parse(message.body);
    const formats = body.formats;
    if (!formats || !Array.isArray(formats) || formats.length <= 0) {
      return CredentialType.Unknown;
    }
    const [format] = formats;
    if (!format) {
      return CredentialType.Unknown;
    }
    if (format === CredentialType.JWT) {
      return CredentialType.JWT;
    }
    if (format === CredentialType.AnonCreds) {
      return CredentialType.AnonCreds;
    }

    return CredentialType.Unknown;
  }

  private async processJWTCredential(
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
    const jwt = new JWT(this.castor);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const challenge = domainChallenge.challenge!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const domain = domainChallenge.domain!;

    const signedJWT = await jwt.sign(did, keyPair.privateKey.value, {
      aud: domain,
      nonce: challenge,
      vp: {
        "@context": ["https://www.w3.org/2018/presentations/v1"],
        type: ["VerifiablePresentation"],
      },
    });

    return signedJWT;
  }

  async processCredentialRequest(
    offer: Message,
    options: CredentialRequestOptions = {}
  ): Promise<string> {
    const format = this.extractCredentialFormatFromMessage(offer);
    if (format === CredentialType.JWT) {
      return this.processJWTCredential(offer, options);
    } else if (format === CredentialType.AnonCreds) {
      throw new Error("Not implemented");
    }

    throw new Error("wrong credential format");
  }

  parseCredential(
    credentialBuffer: Uint8Array,
    options?: { type: CredentialType;[name: string]: any }
  ) {
    if (!options?.type) {
      throw new InvalidJWTString();
    }

    if (options?.type === CredentialType.JWT) {
      const jwtString = Buffer.from(credentialBuffer).toString();
      const parts = jwtString.split(".");
      const credentialString = parts.at(1);

      if (parts.length != 3 || credentialString === undefined)
        throw new InvalidJWTString();

      const base64Data = base64url.baseDecode(credentialString);
      const jsonString = Buffer.from(base64Data).toString();
      const jsonParsed = JSON.parse(jsonString);

      return JWTCredential.fromJWT(jsonParsed, jwtString);
    } else {
      throw new Error("Not implemented");
    }
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
}
