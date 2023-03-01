import Mercury from "../domain/buildingBlocks/Mercury";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import { MediationHandler } from "./mediation/types/MediationHandler";
import { Mediator, Message } from "../domain";

export class ConnectionManager implements ConnectionManager {
  static NUMBER_OF_MESSAGES = 10;

  constructor(
    mercury: Mercury,
    castor: Castor,
    pluto: Pluto,
    mediationHandler: MediationHandler
  ) {}

  async startMediator(): Promise<void> {
    throw new Error("Not implemented");
  }

  async registerMediator(): Promise<Mediator | undefined> {
    throw new Error("Not implemented");
  }

  async sendMessage(message: Message): Promise<Message | undefined> {
    throw new Error("Not implemented");
  }

  async awaitMessages(): Promise<Array<Message>> {
    throw new Error("Not implemented");
  }
}
