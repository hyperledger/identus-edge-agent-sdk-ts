import { Message } from "../domain";
import Pluto from "../domain/buildingBlocks/Pluto";
import { ConnectionsManager } from "./connectionsManager/ConnectionsManager";
import { CancellableTask } from "./helpers/Task";
import { AgentMessageEvents as AgentMessageEventsClass } from "./types";

export class AgentMessageEvents implements AgentMessageEventsClass {
  public cancellable?: CancellableTask<any>;

  constructor(private manager: ConnectionsManager, private pluto: Pluto) {}
  /**
   *
   * when the class starts, it should start listening for new messages
   */
  startFetchingMessages(iterationPeriod: number): void {
    if (this.cancellable) {
      return;
    }
    //TODO: Fetch messages each 5 seconds, is this enough
    const timeInterval = Math.max(iterationPeriod, 5) * 1000;
    this.cancellable = new CancellableTask(async () => {
      return this.manager.awaitMessages();
    }, timeInterval);
  }

  stopFetchingMessages(): void {
    this.cancellable?.cancel();
  }

  async handleMessagesEvents(): Promise<Message[]> {
    return this.pluto.getAllMessages();
  }

  async handleReceivedMessagesEvents(): Promise<Message[]> {
    return this.pluto.getAllMessagesReceived();
  }

  async sendMessage(message: Message): Promise<Message | undefined> {
    return this.manager.sendMessage(message);
  }
}
