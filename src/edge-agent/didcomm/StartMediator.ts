import * as Domain from "../../domain";
import { CreatePeerDID } from "./CreatePeerDID";
import { DIDCommContext } from "./Context";
import { Task } from "../../utils/tasks";
import { expect } from "../../utils";
import { MediationRequest } from "../protocols/mediation/MediationRequest";
import { Connection } from "../connections";
import { MediatorConnection } from "../connections/didcomm";

/**
 * Handle existing mediator logic
 * either reconnects existing mediator
 * or tries to establish new connection
 * 
 * currently hard limits to a single mediator
 */

interface Args {
  mediatorDID: Domain.DID;
}

export class StartMediator extends Task<void, Args> {
  async run(ctx: DIDCommContext) {
    try {
      // re-establish known connection
      const mediators = await ctx.Pluto.getAllMediators();
      // [ ] enable multiple mediators https://github.com/hyperledger-identus/sdk-ts/issues/393
      const mediator = expect(mediators.slice(0, 1).at(0), Domain.AgentError.NoMediatorAvailableError);
      const connection = new MediatorConnection(
        mediator.mediatorDID.toString(),
        mediator.hostDID.toString(),
        mediator.routingDID.toString(),
      );
      connection.state = Connection.State.UNKNOWN;
      ctx.Connections.addMediator(connection);
    }
    catch (e) {
      // if that fails create a new mediator connection
      if (e instanceof Domain.AgentError.NoMediatorAvailableError) {
        await this.achieveMediation(ctx);
      }
      else throw e;
    }
  }

  /**
   * Asyncronously achieve mediation by specifying the HOST DID, this will
   * exchange the mediation protocol messages between the user and the mediator until established
   *
   * @async
   * @param {DID} host
   * @returns {Promise<Mediator>}
   */
  private async achieveMediation(ctx: DIDCommContext) {
    const host = await ctx.run(
      new CreatePeerDID({ services: [], updateMediator: false })
    );

    const connection = new MediatorConnection(this.args.mediatorDID.toString(), host.toString());
    connection.state = Connection.State.REQUESTED;
    ctx.Connections.addMediator(connection);
    const mediationRequest = new MediationRequest(host, this.args.mediatorDID);
    await connection.send(mediationRequest.makeMessage(), ctx);
  }
}
