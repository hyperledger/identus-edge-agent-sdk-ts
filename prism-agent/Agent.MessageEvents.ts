import { Message } from "../domain";
import { AgentMessageEvents as AgentMessageEventsClass } from "./types";

export class AgentMessageEvents implements AgentMessageEventsClass {
  startFetchingMessages(iterationPeriod: number): void {
    throw new Error("Method not implemented.");
  }
  stopFetchingMessages(): void {
    throw new Error("Method not implemented.");
  }
  handleMessagesEvents(): Promise<Message> {
    throw new Error("Method not implemented.");
  }
  handleReceivedMessagesEvents(): Promise<Message> {
    throw new Error("Method not implemented.");
  }
  sendMessage(message: Message): Promise<Message> {
    throw new Error("Method not implemented.");
  }
}
