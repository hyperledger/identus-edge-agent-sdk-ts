import Castor from '../domain/buildingBlocks/Castor';
import { default as PolluxInterface } from '../domain/buildingBlocks/Pollux';
import { VerifiableCredential } from '../domain/models/VerifiableCredential';
export default class Pollux implements PolluxInterface {
    private castor;
    constructor(castor: Castor);
    parseVerifiableCredential(jwtString: string): VerifiableCredential;
}
