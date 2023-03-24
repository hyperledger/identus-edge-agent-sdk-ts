import Castor from "../domain/buildingBlocks/Castor";
import { default as PolluxInterface } from "../domain/buildingBlocks/Pollux";
import { InvalidJWTString } from "../domain/models/errors/Pollux";
import { VerifiableCredential } from "../domain/models/VerifiableCredential";
import { base64url } from "multiformats/bases/base64";

import { JWTCredential } from "./models/JWTCredential";

export default class Pollux implements PolluxInterface {
  private castor: Castor;

  constructor(castor: Castor) {
    this.castor = castor;
  }

  parseVerifiableCredential(jwtString: string): VerifiableCredential {
    const parts = jwtString.split(".");

    if (parts.length != 3) throw new InvalidJWTString();

    parts.splice(0, 1);

    const credentialString = parts[0];

    const base64Data = base64url.baseDecode(credentialString);
    const jsonString = Buffer.from(base64Data).toString();

    const dataValue = JSON.parse(jsonString);

    const jwtCredential = new JWTCredential(jwtString, dataValue);

    return jwtCredential.makeVerifiableCredential();
  }
}
