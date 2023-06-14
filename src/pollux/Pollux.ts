import Castor from "../domain/buildingBlocks/Castor";
import { default as PolluxInterface } from "../domain/buildingBlocks/Pollux";
import { InvalidJWTString } from "../domain/models/errors/Pollux";
import { VerifiableCredential } from "../domain/models/VerifiableCredential";
import { base64url } from "multiformats/bases/base64";
import { JWTCredential } from "./models/JWTCredential";
import { AnoncredsLoader } from "./AnoncredsLoader";

export default class Pollux implements PolluxInterface {
  private castor: Castor;
  private _anoncreds: AnoncredsLoader;

  constructor(castor: Castor) {
    this.castor = castor;
    this._anoncreds = AnoncredsLoader.getInstance();
  }

  // TODO - should anoncreds be exposed or hidden through abstraction?
  get anoncreds() {
    return this._anoncreds;
  }

  parseVerifiableCredential(jwtString: string): VerifiableCredential {
    const parts = jwtString.split(".");
    const credentialString = parts.at(1);

    if (parts.length != 3 || credentialString === undefined)
      throw new InvalidJWTString();

    const base64Data = base64url.baseDecode(credentialString);
    const jsonString = Buffer.from(base64Data).toString();
    const dataValue = JSON.parse(jsonString);
    const jwtCredential = new JWTCredential(jwtString, dataValue);

    return jwtCredential.makeVerifiableCredential();
  }
}
