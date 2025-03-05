import * as Domain from "../../domain";
import { DIDCommContext } from "../didcomm/Context";

/**
 * Define the structure of a Connection
 */
export interface Connection {
  /**
   * unique identifer for the connection
   */
  uri: string;
  /**
   * current condition of the connection
   */
  state: Connection.State;
  // ? convert Message to Protocol
  /**
   * handle delivering a Message to the connected entity
   */
  send: (message: Domain.Message, ctx: DIDCommContext) => Promise<Domain.Message | undefined>;
  /**
   * called when a Message is received from this connection
   */
  receive: (message: any, ctx: DIDCommContext) => Promise<void>;
  /**
   * handle any desired teardown
   */
  close?: () => Promise<void>;
}

export namespace Connection {
  export enum State {
    // no interactions
    UNKNOWN = 0,
    // newly created but not negotiated
    NEW = 1,
    // request has been sent
    REQUESTED = 2,
    // request has been denied
    DENIED = 3,
    // request has been granted
    GRANTED = 4,
    // closed
    CLOSED = 5,
    // communication failing
    BROKEN = 6,
  }
}
