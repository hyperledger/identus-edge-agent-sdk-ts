import { VerifiableCredential } from "../models/VerifiableCredential";
import Castor from "./Castor";


export default interface Pollux {
  parseVerifiableCredential: (jwtString: string) => VerifiableCredential
}
