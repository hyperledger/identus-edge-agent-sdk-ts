import * as Domain from "../../domain";
import { expect, notNil } from "../../utils";
import { Task } from "../../utils/tasks";
import { Connection } from "../connections";
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
    ctx.logger.info(`Connection not found - defaulting to DIDComm`);
    const response = await ctx.Mercury.sendMessageParseMessage(this.args.message);
    return response;
  }
}
