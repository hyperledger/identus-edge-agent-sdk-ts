import { Message } from "../domain";
import Pluto from "../domain/buildingBlocks/Pluto";
import { ConnectionsManager } from "./connectionsManager/ConnectionsManager";
import { AgentMessageEvents as AgentMessageEventsClass } from "./types";

export class AgentMessageEvents implements AgentMessageEventsClass {
  private messageStreamTask?: AbortController;

  constructor(private manager: ConnectionsManager, private pluto: Pluto) {}

  /**
   *
   * when the class starts, it should start listening for new messages
   */
  startFetchingMessages(iterationPeriod: number): void {
    if (this.messageStreamTask) {
      return;
    }
    //TODO: Fetch messages each 5 seconds, is this enough
    const timeInterval = Math.max(iterationPeriod, 5) * 1000;
    this.createTask<void>(timeInterval);
  }

  createTask<T>(interval: number): Promise<T> {
    let timeout: NodeJS.Timeout;
    return new Promise((_, reject) => {
      this.messageStreamTask = new AbortController();
      this.messageStreamTask.signal.addEventListener("abort", () => {
        if (timeout) clearTimeout(timeout);
        this.messageStreamTask = undefined;
        return reject(new Error("Aborted"));
      });
      // eslint-disable-next-line no-constant-condition
      while (true) {
        try {
          timeout = setTimeout(async () => {
            await this.manager.awaitMessages();
          }, interval);
        } catch (err) {
          console.log(err);
        }
      }
    });
  }

  stopFetchingMessages(): void {
    this.messageStreamTask?.abort();
  }

  async handleMessagesEvents(): Promise<Message> {
    throw new Error("Method not implemented.");
  }
  handleReceivedMessagesEvents(): Promise<Message> {
    throw new Error("Method not implemented.");
  }
  sendMessage(message: Message): Promise<Message> {
    throw new Error("Method not implemented.");
  }
}
