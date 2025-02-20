import * as Domain from "../../../domain";
import { Ctor, Task, notNil } from "../../../utils";
import { ProtocolType } from "../../protocols/ProtocolTypes";
import { Connection } from "../Connection";
import { MediateDeny } from "../didcomm/MediateDeny";
import { MediateGrant } from "../didcomm/MediateGrant";
import { PickupDelivery } from "../didcomm/PickupDelivery";
import { PickupStatus } from "../didcomm/PickupStatus";
import { ProblemReport } from "../didcomm/ProblemReport";

export class DIDCommConnection implements Connection {
  public readonly type = "DIDComm";
  public readonly tasks = new Map<string, Ctor<Task<any>>>();
  public state = Connection.State.NEW;

  constructor(
    public readonly uri: string,
    public readonly host: string,
    public readonly alias?: string
  ) {
    this.tasks
      .set(ProtocolType.DidcommMediationGrant, MediateGrant)
      .set(ProtocolType.DidcommMediationDeny, MediateDeny)
      .set(ProtocolType.PickupStatus, PickupStatus)
      .set(ProtocolType.PickupDelivery, PickupDelivery)
      .set(ProtocolType.ProblemReporting, ProblemReport);
  }

  async send(msg: Domain.Message, ctx: Task.Context) {
    msg.direction = Domain.MessageDirection.SENT;
    // filter which messages we want stored
    const ignorePluto = [ProtocolType.PickupRequest, ProtocolType.DidcommMediationKeysUpdate];
    const shouldStore = ignorePluto.every(x => x !== msg.piuri);

    if (shouldStore) {
      await ctx.Pluto.storeMessage(msg);
    }

    ctx.logger.debug("DIDComm Send", msg);
    const response = await ctx.Mercury.sendMessageParseMessage(msg);

    return this.receive(response, ctx);
  }

  async receive(msg: Domain.Message | undefined, ctx: Task.Context) {
    // find the relevant task - enable handling of unmatched
    const taskCtor = this.tasks.get(msg?.piuri ?? "unknown");

    if (notNil(taskCtor)) {
      const result = await ctx.run(new taskCtor({ message: msg }));
      return result;
    }

    ctx.logger.debug("DIDComm Receive - no task found", msg);
    return undefined;
  }
}
