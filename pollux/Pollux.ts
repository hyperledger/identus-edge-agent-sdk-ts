import Castor from "../domain/buildingBlocks/Castor";
import { default as PolluxInterface } from "../domain/buildingBlocks/Pollux";
import { DID } from "../domain";
import {
  InvalidCredentialError,
  InvalidJWTString,
} from "../domain/models/errors/Pollux";
import {
  CredentialType,
  VerifiableCredential,
  VerifiableCredentialTypeContainer,
} from "../domain/models/VerifiableCredential";
import { base64, base64url } from "multiformats/bases/base64";
export default class Pollux implements PolluxInterface {
  private castor: Castor;

  constructor(castor: Castor) {
    this.castor = castor;
  }

  parseVerifiableCredential(jwtString: string): VerifiableCredential {
    const parts = jwtString.split(".");

    if (parts.length != 3) throw new InvalidJWTString();

    const credentialString = parts[2];
    const base64Data = base64url.baseDecode(credentialString);
    const jsonString = Buffer.from(base64Data).toString();

    const dataValue = JSON.parse(jsonString);
    debugger;

    throw new InvalidCredentialError();
  }

  private parseCredential(value: string): object {
    try {
      const verifiableCredential = JSON.parse(value);

      if (
        typeof verifiableCredential === "object" &&
        verifiableCredential !== null
      ) {
        return verifiableCredential;
      }
    } catch (e) {
      throw new InvalidCredentialError();
    }

    throw new InvalidCredentialError();
  }

  private parseCredentialType(credential: object): CredentialType {
    if ("type" in credential && Array.isArray(credential.type)) {
      const type = credential.type[0];

      if (type === CredentialType.JWT) return CredentialType.JWT;

      if (type === CredentialType.W3C) return CredentialType.W3C;
    }

    return CredentialType.Unknown;
  }

  private parseJWTCredential(
    val: any,
    jwtString: string
  ): VerifiableCredential {
    return {
      id: jwtString,
      aud: val.aud,
      context: val.context,
      credentialSubject: val.credentialSubject,
      credentialType: CredentialType.JWT,
      evidence: this.parseVerifiableCredentialTypeContainer(val.evidence),
      expirationDate: val.expirationDate,
      issuanceDate: val.issuanceDate,
      issuer: this.parseDID(val.issuer),
      refreshService: this.parseVerifiableCredentialTypeContainer(
        val.refreshService
      ),
      termsOfUse: this.parseVerifiableCredentialTypeContainer(val.termsOfUse),
      type: val.type,
      validFrom: this.parseVerifiableCredentialTypeContainer(val.validFrom),
      validUntil: this.parseVerifiableCredentialTypeContainer(val.validUntil),
      credentialSchema: this.parseVerifiableCredentialTypeContainer(
        val.credentialSchema
      ),
      credentialStatus: this.parseVerifiableCredentialTypeContainer(
        val.credentialStatus
      ),
      proof: val.proof,
    };
  }

  private parseW3CCredential(val: any) {
    return {
      id: val.id,
      aud: val.aud,
      context: val.context,
      credentialSubject: val.credentialSubject,
      credentialType: CredentialType.W3C,
      evidence: this.parseVerifiableCredentialTypeContainer(val.evidence),
      expirationDate: val.expirationDate,
      issuanceDate: val.issuanceDate,
      issuer: this.parseDID(val.issuer),
      refreshService: this.parseVerifiableCredentialTypeContainer(
        val.refreshService
      ),
      termsOfUse: this.parseVerifiableCredentialTypeContainer(val.termsOfUse),
      type: val.type,
      validFrom: this.parseVerifiableCredentialTypeContainer(val.validFrom),
      validUntil: this.parseVerifiableCredentialTypeContainer(val.validUntil),
      credentialSchema: this.parseVerifiableCredentialTypeContainer(
        val.credentialSchema
      ),
      credentialStatus: this.parseVerifiableCredentialTypeContainer(
        val.credentialStatus
      ),
      proof: val.proof,
    };
  }

  private parseDID(value: unknown) {
    if (
      typeof value === "object" &&
      value !== null &&
      "schema" in value &&
      typeof value.schema === "string" &&
      "method" in value &&
      typeof value.method === "string" &&
      "methodId" in value &&
      typeof value.methodId === "string"
    ) {
      return new DID(value.schema, value.method, value.methodId);
    }

    throw new InvalidCredentialError();
  }

  private parseVerifiableCredentialTypeContainer(value: unknown) {
    if (
      typeof value === "object" &&
      value !== null &&
      "id" in value &&
      typeof value.id === "string" &&
      "type" in value &&
      typeof value.type === "string"
    ) {
      return new VerifiableCredentialTypeContainer(value.id, value.type);
    }

    throw new InvalidCredentialError();
  }
}
