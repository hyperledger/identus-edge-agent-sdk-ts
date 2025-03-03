import * as Domain from "../../domain";
import { expect, notNil } from "../../utils";
import { Task } from "../../utils/tasks";
import { Connection } from "../connections";
import { DIDCommConnection } from "../connections/didcomm";
import { DIDCommContext } from "./Context";

/**
 * attempt to deliver a Message across a Connection
 * 
 * attempt to find the Connection for the Message.to
 * in ctx.Connections
 */

interface Args {
  /**
   * Message to be delivered
   */
  message: Domain.Message;
  /**
   * Connection to use
   */
  connection?: Connection;
}

export class Send extends Task<Domain.Message | undefined, Args> {
  async run(ctx: DIDCommContext) {
    const uri = expect(this.args.message.to?.toString());
    const connection = this.args.connection ?? ctx.Connections.find(uri);

    if (notNil(connection)) {
      const response = await connection.send(this.args.message, ctx);
      return response;
    }

    // default to DIDComm
    ctx.logger.info(`Connection not found - defaulting to DIDComm`);
    const host = expect(this.args.message.from?.toString());
    const tmpConn = new DIDCommConnection(uri, host);
    const response = await tmpConn.send(this.args.message, ctx);
    return response;
  }
}
