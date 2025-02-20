import * as Domain from "../../../domain";
import { Task, expect } from "../../../utils";
import { DIDCommContext } from "../../didcomm/Context";
import { Connection } from "../Connection";

/**
 * Mediation Granted
 * add a new mediator connection 
 * and store for future use
 * 
 * Specification:
 * https://didcomm.org/coordinate-mediation/2.0/
 */

interface Args {
  message: Domain.Message;
}

export class MediateGrant extends Task<void, Args> {
  async run(ctx: DIDCommContext) {
    const uri = expect(this.args.message.from);
    const msgTo = expect(this.args.message.to);
    const routingDID = expect(this.args.message.body.routing_did, "routing_did not available on message body");
    const connection = expect(ctx.Connections.mediator);
    const mediator: Domain.Mediator = {
      hostDID: Domain.DID.from(msgTo),
      mediatorDID: Domain.DID.from(uri),
      routingDID: Domain.DID.from(routingDID),
    };

    connection.routingDID = routingDID;
    connection.state = Connection.State.GRANTED;
    await ctx.Pluto.storeMediator(mediator);

    ctx.logger.info(`Mediation Granted: ${uri}`);
  }
}
