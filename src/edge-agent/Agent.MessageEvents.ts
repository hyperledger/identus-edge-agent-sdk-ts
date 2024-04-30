import {
  AgentMessageEvents as AgentMessageEventsClass,
  EventCallback,
  ListenerKey,
} from "./types";

/**
 * An extension for the Edge agent that gives it capability of
 * creating listeners for specific events and also emitting or notifying any listener available with the
 * new event.
 *
 * @export
 * @class AgentMessageEvents
 * @typedef {AgentMessageEvents}
 */
export class AgentMessageEvents implements AgentMessageEventsClass {
  private events: Map<ListenerKey, Set<EventCallback>> = new Map();

  /**
   * Just adds a new event listener by passing the event name and the callback function we want
   * to be notified at
   *
   * @public
   * @param {ListenerKey} eventName
   * @param {EventCallback} callback
   * @returns {number}
   */
  public addListener(eventName: ListenerKey, callback: EventCallback): number {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const callbacks = this.events.get(eventName)!;
    callbacks.add(callback);
    return callbacks.size - 1;
  }

  /**
   * Remove an existing event listener, used when the Agent is
   * stopping to make sure no memory leaks are produced
   *
   * @public
   * @param {ListenerKey} eventName
   * @param {EventCallback} callback
   */
  public removeListener(eventName: ListenerKey, callback: EventCallback): void {
    const callbacks = this.events.get(eventName);
    if (!callbacks) return;
    callbacks.delete(callback);
  }

  /**
   * Emit some data to all the listeners of a specific event
   *
   * @public
   * @param {ListenerKey} eventName
   * @param {*} data
   */
  public emit(eventName: ListenerKey, data: any): void {
    const callbacks = this.events.get(eventName);
    if (!callbacks) return;
    for (const callback of callbacks) {
      callback(data);
    }
  }
}
