import { Nil, isString } from "../../utils";
import { Connection } from "./Connection";
import { MediatorConnection } from "./didcomm";

/**
 * ConnectionsManager is responsible for handling Connections and Mediators
 * 
 * Mediators are a Connection where we periodically fetch messages from
 *
 * @class ConnectionsManager
 * @typedef {ConnectionsManager}
 */
export class ConnectionsManager {
  private readonly connections: Connection[] = [];
  private readonly mediators = new Set<string>();

  // ?? tmp hack around only one mediator
  get mediator(): MediatorConnection | Nil {
    const mediator: string = this.mediators.values().next().value;
    const connection = this.find(mediator);

    if (connection instanceof MediatorConnection) {
      return connection;
    }

    return null;
  }

  /**
   * close all active connections
   */
  async stop() {
    for (const connection of this.connections) {
      await connection.close?.();
    }
  }

  /**
   * add a Connection
   *
   * @async
   * @param {DIDPair} paired
   * @returns {Promise<void>}
   */
  add<T extends Connection>(connection: T): void {
    this.connections.push(connection);
  }

  /**
   * add a Connection and mark it as a Mediator
   * @param mediator 
   */
  addMediator<T extends Connection>(mediator: T): void {
    this.add(mediator);
    this.mediators.add(mediator.uri);
  }

  /**
   * Remove a Connection
   * this but just means the connection will be removed from the current storage
   *
   * @async
   * @param {DIDPair} pair
   * @returns {Promise<void>}
   */
  async remove(connection: Connection | string): Promise<void> {
    const uri = isString(connection) ? connection : connection.uri;
    const index = this.connections.findIndex(x => x.uri === uri);

    if (index !== -1) {
      this.mediators.delete(uri);
      this.connections.splice(index, 1);
    }
  }

  /**
   * Search for a Connection by it's unique identifier
   * 
   * @param uri 
   * @returns 
   */
  find(uri: string): Connection | undefined {
    const connection = this.connections.find(x => x.uri === uri);
    return connection;
  }
}
