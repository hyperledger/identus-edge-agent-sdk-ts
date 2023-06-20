import { Castor } from "../domain/buildingBlocks/Castor";
import { Pollux as PolluxInterface } from "../domain/buildingBlocks/Pollux";
import { InvalidJWTString } from "../domain/models/errors/Pollux";
import { VerifiableCredential } from "../domain/models/VerifiableCredential";
import { base64url } from "multiformats/bases/base64";

import { JWTCredential } from "./models/JWTCredential";

/**
 * Implementation of PolluxInterface and responsible of handling credential related tasks
 *
 * @export
 * @class Pollux
 * @typedef {Pollux}
 */
export default class Pollux implements PolluxInterface {
  private castor: Castor;

  /**
   * Creates an instance of Pollux.
   *
   * @constructor
   * @param {Castor} castor
   */
  constructor(castor: Castor) {
    this.castor = castor;
  }

  /**
   * Parses a verifiable credential in Json format as a string into an instance of a VerifiableCredential
   *
   * @param {string} jwtString
   * @returns {VerifiableCredential}
   */
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
