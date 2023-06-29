import Castor from "../domain/buildingBlocks/Castor";
import { default as PolluxInterface } from "../domain/buildingBlocks/Pollux";
import { InvalidJWTString } from "../domain/models/errors/Pollux";
import { base64url } from "multiformats/bases/base64";
import { JWTCredential } from "./models/JWTCredential";
import { AnoncredsLoader } from "./AnoncredsLoader";
import {
  Credential,
  CredentialRequestOptions,
  StorableCredential,
  VerifiableCredential,
  VerifiableCredentialProperties,
} from "../domain/models/Credential";
import {
  AttachmentDescriptor,
  CredentialType,
  Curve,
  DID,
  JsonString,
  KeyPair,
  Message,
} from "../domain";
import { OfferCredential } from "../prism-agent/protocols/issueCredential/OfferCredential";
import { RequestCredential } from "../prism-agent/protocols/issueCredential/RequestCredential";
import Pluto from "../domain/buildingBlocks/Pluto";
import Apollo from "../domain/buildingBlocks/Apollo";
import { JWT } from "../apollo/utils/jwt/JWT";

export default class Pollux implements PolluxInterface {
  private _anoncreds: AnoncredsLoader;

  constructor(
    private castor: Castor,
    private pluto: Pluto,
    private apollo: Apollo
  ) {
    this._anoncreds = AnoncredsLoader.getInstance();
  }

  // TODO - should anoncreds be exposed or hidden through abstraction?
  get anoncreds() {
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
    base64UrlBuffer: Uint8Array,
    options?: { message: Message; [name: string]: any }
  ) {
    if (!options?.message) {
      throw new InvalidJWTString();
    }
    const format = this.extractCredentialFormatFromMessage(options?.message);
    if (format === CredentialType.JWT) {
      const jwtString = Buffer.from(base64UrlBuffer).toString();
      const parts = jwtString.split(".");
      const credentialString = parts.at(1);

      if (parts.length != 3 || credentialString === undefined)
        throw new InvalidJWTString();

      const base64Data = base64url.baseDecode(credentialString);
      const jsonString = Buffer.from(base64Data).toString();
      const jsonParsed = JSON.parse(jsonString);

      const id = jwtString;
      if (!id) {
        throw new Error("The original JWTString needs to be sent as props");
      }

      const { iss, sub } = jsonParsed;
      if (!iss || !sub) {
        throw new Error("Wrong credential");
      }

      if (!id) {
        throw new Error("Wrong credential id");
      }

      const credential = new VerifiableCredential(iss, sub);

      credential.properties.set(VerifiableCredentialProperties.iss, iss);
      credential.properties.set(VerifiableCredentialProperties.sub, sub);
      credential.properties.set(VerifiableCredentialProperties.jti, id);

      credential.properties.set(
        VerifiableCredentialProperties.vc,
        jsonParsed.vc
      );

      if (jsonParsed.nbf) {
        credential.properties.set(
          VerifiableCredentialProperties.nbf,
          jsonParsed.nbf
        );
      }

      if (jsonParsed.exp) {
        credential.properties.set(
          VerifiableCredentialProperties.exp,
          jsonParsed.exp
        );
      }

      if (jsonParsed.aud) {
        credential.properties.set(
          VerifiableCredentialProperties.aud,
          jsonParsed.aud
        );
      }

      return credential;
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
