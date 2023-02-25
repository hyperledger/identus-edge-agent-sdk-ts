import Castor from '../domain/buildingBlocks/Castor'
import { default as PolluxInterface } from '../domain/buildingBlocks/Pollux'
import { VerifiableCredential } from '../domain/models/VerifiableCredential'

export default class Pollux implements PolluxInterface {
  private castor: Castor

  constructor(castor: Castor) {
    this.castor = castor
  }

  parseVerifiableCredential(jwtString: string): VerifiableCredential {
    throw new Error('Not implemented')
  }
}
