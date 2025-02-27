import * as Domain from "../../../domain";
import { Task, expect } from "../../../utils";
import { DIDCommContext } from "../../didcomm/Context";
import { MediationGrant } from "../../protocols/mediation/MediationGrant";
import { Connection } from "../Connection";

/**
 * Mediation Granted
 * add a new mediator connection 
 * and store for future use
 */

interface Args {
  message: Domain.Message;
}

export class MediateGrant extends Task<void, Args> {
  async run(ctx: DIDCommContext) {
    const grantMessage = MediationGrant.fromMessage(this.args.message);
    const uri = expect(this.args.message.from);
    const msgTo = expect(this.args.message.to);
    const connection = expect(ctx.Connections.find(uri.toString()));
    const mediator: Domain.Mediator = {
      hostDID: Domain.DID.from(msgTo),
      mediatorDID: Domain.DID.from(uri),
      routingDID: Domain.DID.from(grantMessage.body.routing_did),
    };

    connection.state = Connection.State.GRANTED;
    await ctx.Pluto.storeMediator(mediator);

    ctx.logger.info(`Mediation Granted: ${uri}`);
  }
}
