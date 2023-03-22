import { VerifiableCredential } from "../../domain";
export class JWTCredential {
  private jwtVerifiableCredential: VerifiableCredential;

  constructor(private id: string, fromJson: any) {
    /**
     * Parse and validate the JWT
     */
  }
}
