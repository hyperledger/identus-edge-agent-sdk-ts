import {
  AgentMessageEvents as AgentMessageEventsClass,
  EventCallback,
  ListenerKey,
} from "./types";

export class AgentMessageEvents implements AgentMessageEventsClass {
  private events: Map<ListenerKey, Set<EventCallback>> = new Map();

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

  public emit(eventName: ListenerKey, data: any): void {
    const callbacks = this.events.get(eventName);
    if (!callbacks) return;
    for (const callback of callbacks) {
      callback(data);
    }
  }
}
