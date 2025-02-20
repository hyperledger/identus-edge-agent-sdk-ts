import * as Domain from "../../domain";
import { expect, notNil } from "../../utils";
import { Task } from "../../utils/tasks";
import { Connection } from "../connections";
import { DIDCommConnection } from "../connections/didcomm";
import { DIDCommContext } from "./Context";

interface Args {
  message: Domain.Message;
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
    const from = expect(this.args.message.from?.toString());
    const defaultConn = new DIDCommConnection(uri, from);
    const response = await defaultConn.send(this.args.message, ctx);
    return response;
  }
}
