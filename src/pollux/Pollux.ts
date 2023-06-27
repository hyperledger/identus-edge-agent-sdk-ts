import Castor from "../domain/buildingBlocks/Castor";
import { default as PolluxInterface } from "../domain/buildingBlocks/Pollux";
import { InvalidJWTString } from "../domain/models/errors/Pollux";
import { base64url } from "multiformats/bases/base64";
import { JWTCredential } from "./models/JWTCredential";
import { AnoncredsLoader } from "./AnoncredsLoader";
import {
  Credential,
  StorableCredential,
  VerifiableCredential,
  VerifiableCredentialProperties,
} from "../domain/models/Credential";
import { AttachmentDescriptor, Curve, JsonString } from "../domain";
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

  parseCredential(
    jsonEncoded: JsonString,
    options: { [name: string]: string } = {}
  ) {
    const jsonParsed = JSON.parse(jsonEncoded);

    const isVerifiableCredential = jsonParsed.vc !== undefined;
    if (isVerifiableCredential) {
      const id = options.id;
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
