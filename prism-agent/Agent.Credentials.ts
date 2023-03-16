import Pluto from "../domain/buildingBlocks/Pluto";
import {VerifiableCredential} from "../domain/models/VerifiableCredential";
import {AgentCredentials as AgentCredentialsClass} from "./types";

export class AgentCredentials implements AgentCredentialsClass {
  constructor(protected pluto: Pluto) {
  }

  async verifiableCredentials(): Promise<VerifiableCredential[]> {
    return await this.pluto.getAllCredentials();
  }
}
