import { uuid } from "@stablelib/uuid";
import * as Domain from "../../domain";
import { expect, isNil, notNil } from "../../utils";
import { Task } from "../../utils/tasks";
import { CancellableTask } from "../helpers/Task";
import { DIDCommContext } from "./Context";
import { ProtocolType } from "../protocols/ProtocolTypes";
import { PickupRequest } from "../protocols/pickup/PickupRequest";

/**
 * Handle the setup of fetching messages from the Mediator
 */

interface Args {
  period?: number;
  useSockets?: boolean;
}

export class StartFetchingMessages extends Task<void, Args> {
  async run(ctx: DIDCommContext) {
    // check we're not already fetching messages
    if (notNil(ctx.Jobs.fetchMessages) || isNil(ctx.Connections.mediator)) {
      return;
    }

    const socketService = await this.getSocketService(ctx);

    if (socketService) {
      const socket = new WebSocket(socketService.serviceEndpoint.uri);
      const connection = ctx.Connections.mediator;
      const mediator = connection.asMediator();
      const message = new Domain.Message(
        JSON.stringify({ live_delivery: true }),
        uuid(),
        ProtocolType.LiveDeliveryChange,
        mediator.hostDID,
        mediator.mediatorDID,
      );

      connection.useLiveMode(socket);

      socket.addEventListener("open", async () => {
        // ? connection.send
        const packedMessage = await ctx.Mercury.packMessage(message);
        socket.send(packedMessage);
        // ? supposed to ack message
      });

      socket.addEventListener("message", async (event) => {
        const message = await ctx.Mercury.unpackMessage(event.data);
        connection.receive(message, ctx);
      });
    }
    else {
      const period = this.args.period ?? 5000;

      ctx.Jobs.fetchMessages = new CancellableTask(async () => {
        const connection = expect(ctx.Connections.mediator, Domain.AgentError.NoMediatorAvailableError);
        const mediator = expect(connection.asMediator());

        const pickupRequest = new PickupRequest(
          { limit: 10 },
          mediator.hostDID,
          mediator.mediatorDID
        );

        await connection.send(pickupRequest.makeMessage(), ctx);
      }, period);
    }
  }

  private async getSocketService(ctx: DIDCommContext) {
    const mediator = ctx.Connections.mediator;

    if (this.args.useSockets && mediator) {
      const resolvedMediator = await ctx.Castor.resolveDID(mediator.uri);
      const socketService = resolvedMediator.services.find(service =>
        service.serviceEndpoint.uri.startsWith("ws://")
        || service.serviceEndpoint.uri.startsWith("wss://")
      );

      return socketService;
    }

    return null;
  }
}
