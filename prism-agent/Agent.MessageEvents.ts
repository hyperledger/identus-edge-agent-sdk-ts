import { Message } from "../domain";
import Pluto from "../domain/buildingBlocks/Pluto";
import { ConnectionsManager } from "./connectionsManager/ConnectionsManager";
import { CancellableTask } from "./helpers/Task";
import {
  AgentMessageEvents as AgentMessageEventsClass,
  EventCallback,
  ListenerKey,
} from "./types";

export class AgentMessageEvents implements AgentMessageEventsClass {
  private readonly EVENT_KEY = "message";

  public cancellable?: CancellableTask<void>;

  private events: Map<ListenerKey, EventCallback[]> = new Map();

  constructor(private manager: ConnectionsManager, private pluto: Pluto) {}

  public onMessage(callback: EventCallback): void {
    if (!this.events.has(this.EVENT_KEY)) {
      this.events.set(this.EVENT_KEY, []);
    }
    const callbacks = this.events.get(this.EVENT_KEY);
    if (callbacks) {
      callbacks.push(callback);
    }
  }

  public emitMessage(messages: Message[]): void {
    const callbacks = this.events.get(this.EVENT_KEY);
    if (!callbacks) return;
    for (const callback of callbacks) {
      callback(messages);
    }
  }

  startFetchingMessages(iterationPeriod: number): void {
    if (this.cancellable) {
      return;
    }
    const timeInterval = Math.max(iterationPeriod, 5) * 1000;
    this.cancellable = new CancellableTask(async () => {
      const unreadMessages = await this.manager.awaitMessages();
      if (unreadMessages.length) {
        this.emitMessage(unreadMessages);
      }
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
