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
  private manager: ConnectionsManager;
  private events: Map<ListenerKey, Set<EventCallback>> = new Map();
  private cancellable?: CancellableTask<void>;

  constructor(manager: ConnectionsManager) {
    this.manager = manager;
  }

  public addListener(eventName: ListenerKey, callback: EventCallback): number {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const callbacks = this.events.get(eventName)!;
    callbacks.add(callback);
    return callbacks.size - 1;
  }

  public removeListener(eventName: ListenerKey, callback: EventCallback): void {
    const callbacks = this.events.get(eventName);
    if (!callbacks) return;
    callbacks.delete(callback);
  }

  public emitMessage(messages: Message[]): void {
    const callbacks = this.events.get(ListenerKey.MESSAGE);
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
    this.cancellable = undefined;
  }

  async sendMessage(message: Message): Promise<Message | undefined> {
    return this.manager.sendMessage(message);
  }
}
