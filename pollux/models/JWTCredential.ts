import {
  CredentialType,
  DID,
  JWTVerifiablePayload,
  VerifiableCredential,
} from "../../domain";
import { InvalidCredentialError } from "../../domain/models/errors/Pollux";

export class JWTCredential {
  private jwtVerifiableCredential: JWTVerifiablePayload;

  constructor(public id: string, fromJson: any) {
    /**
     * Parse and validate the JWT
     */
    debugger;
    this.jwtVerifiableCredential = new JWTVerifiablePayload(
      fromJson.iss,
      fromJson.vc,
      id,
      fromJson.nbf,
      fromJson.sub,
      fromJson.exp,
      fromJson.aud,
      id
    );
    // this.jwtVerifiableCredential = {
    //   id: id,
    //   aud: fromJson.aud,
    //   context: fromJson.context,
    //   credentialSubject: fromJson.credentialSubject,
    //   credentialType: CredentialType.JWT,
    //   evidence: this.parseVerifiableCredentialTypeContainer(fromJson.evidence),
    //   expirationDate: fromJson.expirationDate,
    //   issuanceDate: fromJson.issuanceDate,
    //   issuer: DID.fromString(fromJson.issuer),
    //   refreshService: this.parseVerifiableCredentialTypeContainer(
    //     fromJson.refreshService
    //   ),
    //   termsOfUse: this.parseVerifiableCredentialTypeContainer(
    //     fromJson.termsOfUse
    //   ),
    //   type: fromJson.type,
    //   validFrom: this.parseVerifiableCredentialTypeContainer(
    //     fromJson.validFrom
    //   ),
    //   validUntil: this.parseVerifiableCredentialTypeContainer(
    //     fromJson.validUntil
    //   ),
    //   credentialSchema: this.parseVerifiableCredentialTypeContainer(
    //     fromJson.credentialSchema
    //   ),
    //   credentialStatus: this.parseVerifiableCredentialTypeContainer(
    //     fromJson.credentialStatus
    //   ),
    //   proof: fromJson.proof,
    // };
  }

  makeVerifiableCredential(): VerifiableCredential {
    return this.jwtVerifiableCredential;
  }
}
