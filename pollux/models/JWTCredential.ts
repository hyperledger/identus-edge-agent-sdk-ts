import { JWTVerifiablePayload, VerifiableCredential } from "../../domain";

export class JWTCredential {
  private jwtVerifiableCredential: JWTVerifiablePayload;

  constructor(public id: string, fromJson: any) {
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
  }

  makeVerifiableCredential(): VerifiableCredential {
    return this.jwtVerifiableCredential;
  }
}
