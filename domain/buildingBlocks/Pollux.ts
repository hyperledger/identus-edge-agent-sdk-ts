import { VerifiableCredential } from "../models/VerifiableCredential";

export default interface Pollux {
  parseVerifiableCredential: (jwtString: string) => VerifiableCredential;
}
