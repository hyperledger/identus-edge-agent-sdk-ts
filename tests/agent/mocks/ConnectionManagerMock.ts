import {
  ConnectionsManager as ConnectionsManagerClass,
  MediatorHandler,
} from "../../../src/prism-agent/types";
import { Castor } from "../../../src/domain/buildingBlocks/Castor";
import { Mercury } from "../../../src/domain/buildingBlocks/Mercury";
import { Pluto } from "../../../src/domain/buildingBlocks/Pluto";
import { DIDPair } from "../../../src/domain/models/DIDPair";
import { CancellableTask } from "../../../src/prism-agent/helpers/Task";
import { DID, Message } from "../../../src/domain";
import { AgentMessageEvents } from "../../../src/prism-agent/Agent.MessageEvents";

export class ConnectionsManagerMock implements ConnectionsManagerClass {
  events = new AgentMessageEvents();
  castor: Castor;
  mercury: Mercury;
  pluto: Pluto;
  mediationHandler: MediatorHandler = {
    updateKeyListWithDIDs: () => { },
    mediator: {
      mediatorDID: new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      ),
    },
  } as any;
  pairings: DIDPair[];
  cancellables: CancellableTask<any>[];
  findIndex(pair: DIDPair) {
    return this.pairings.findIndex(
      (pairing) =>
        pair.host === pairing.host &&
        pair.name === pairing.name &&
        pair.receiver === pairing.receiver
    );
  }
  stopFetchingMessages() {
    return;
  }
  startFetchingMessages() {
    return;
  }
  stopAllEvents(): void {
    return;
  }
  addConnection(paired: DIDPair): Promise<void> {
    return Promise.resolve();
  }
  removeConnection(pair: DIDPair): Promise<void> {
    return Promise.resolve();
  }
  awaitMessages(): Promise<Message[]> {
    return Promise.resolve([]);
  }
  awaitMessageResponse(id: string): Promise<Message | undefined> {
    return Promise.resolve(undefined);
  }
  sendMessage(message: Message): Promise<Message | undefined> {
    return Promise.resolve(undefined);
  }
  startMediator(): Promise<void> {
    return Promise.resolve();
  }
  registerMediator(hostDID: DID): Promise<void> {
    return Promise.resolve();
  }
}
