import Mercury from "../domain/buildingBlocks/Mercury";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import { MediationHandler } from "./mediation/types/MediationHandler";
import { Mediator, Message, DID } from "../domain";

export class ConnectionManager implements ConnectionManager {
  static NUMBER_OF_MESSAGES = 10;

  constructor(
    protected mercury: Mercury,
    protected castor: Castor,
    protected pluto: Pluto,
    public mediationHandler: MediationHandler
  ) {}

  async startMediator(): Promise<void> {
    throw new Error("Not implemented");
  }

  async registerMediator(hostDID: DID): Promise<Mediator | undefined> {
    throw new Error("Not implemented");
  }

  async sendMessage(message: Message): Promise<Message | undefined> {
    throw new Error("Not implemented");
  }

  async awaitMessages(): Promise<Array<Message>> {
    throw new Error("Not implemented");
  }
}
