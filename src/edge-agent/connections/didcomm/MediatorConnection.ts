import * as Domain from "../../../domain";
import { notNil } from "../../../utils";
import { Connection } from "../Connection";
import { DIDCommConnection } from "./DIDCommConnection";

export class MediatorConnection extends DIDCommConnection {
  private socket: WebSocket | undefined;

  constructor(
    public readonly uri: string,
    public readonly host: string,
    public routingDID?: string,
  ) {
    super(uri, host);
  }

  get liveMode(): boolean {
    return notNil(this.socket);
  }

  asMediator(): Domain.Mediator {
    return {
      hostDID: Domain.DID.from(this.host),
      mediatorDID: Domain.DID.from(this.uri),
      routingDID: Domain.DID.from(this.routingDID ?? this.uri)
    };
  }

  async close() {
    this.socket?.close();
    this.state = Connection.State.CLOSED;
  }

  async useLiveMode(socket: WebSocket) {
    this.socket = socket;
  }
}
