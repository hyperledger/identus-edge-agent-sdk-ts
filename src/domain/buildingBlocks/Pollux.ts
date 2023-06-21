import { VerifiableCredential } from "../models/VerifiableCredential";

export interface Pollux {
  parseVerifiableCredential: (jwtString: string) => VerifiableCredential;
}
