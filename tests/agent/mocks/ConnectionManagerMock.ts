import {
  AgentCredentials,
  AgentOptions,
  ConnectionsManager as ConnectionsManagerClass,
  EventCallback,
  MediatorHandler,
} from "../../../src/prism-agent/types";
import { Castor } from "../../../src/domain/buildingBlocks/Castor";
import { Mercury } from "../../../src/domain/buildingBlocks/Mercury";
import { Pluto } from "../../../src/domain/buildingBlocks/Pluto";
import { DIDPair } from "../../../src/domain/models/DIDPair";
import { CancellableTask } from "../../../src/prism-agent/helpers/Task";
import { DID, Mediator, Message, Pollux } from "../../../src/domain";
import { AgentMessageEvents } from "../../../src/prism-agent/Agent.MessageEvents";
import { ConnectionsManager } from "../../../src";



type ConnectionMockConstructor = {
  castor: Castor,
  mercury: Mercury,
  pluto: Pluto,
  agentCredentials: AgentCredentials,
  mediationHandler: MediatorHandler,
  pairings?: DIDPair[],
  options?: AgentOptions
}


export class ConnectionsManagerMock implements ConnectionsManagerClass {
  private manager: ConnectionsManagerClass;
  public options?: AgentOptions

  constructor(
    params: ConnectionMockConstructor
  ) {
    const { castor, mercury, pluto, agentCredentials, options } = params

    this.castor = castor;
    this.mercury = mercury;
    this.pluto = pluto;
    this.agentCredentials = agentCredentials;
    this.options = options;

    const connManager = new ConnectionsManager(
      this.castor,
      this.mercury,
      this.pluto,
      this.agentCredentials,
      this.mediationHandler,
      [],
      options
    )
    this.manager = connManager;
    this.mediationHandler = this.manager.mediationHandler;
  }

  static buildMock(params: Partial<ConnectionMockConstructor>): ConnectionsManagerMock {
    const mediationHandler: MediatorHandler = {
      registerMessagesAsRead: async () => { },
      updateKeyListWithDIDs: async () => { },
      mediator: {
        mediatorDID: new DID(
          "did",
          "peer",
          "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
        ),
        hostDID: new DID(
          "did",
          "peer",
          "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
        ),
        routingDID: new DID(
          "did",
          "peer",
          "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
        ),
      },
      mediatorDID: new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      ),
      bootRegisteredMediator: function (): Promise<Mediator | undefined> {
        throw new Error("Mock bootRegisteredMediator Function not implemented.");
      },
      achieveMediation: function (host: DID): Promise<Mediator> {
        throw new Error("Mock achieveMediation Function not implemented.");
      },
      pickupUnreadMessages: function (limit: number): Promise<{ attachmentId: string; message: Message; }[]> {
        throw new Error("Mock pickupUnreadMessages Function not implemented.");
      },
      listenUnreadMessages: function (signal: AbortSignal, serviceEndpointUri: string, onMessage: (messages: { attachmentId: string; message: Message; }[]) => void | Promise<void>): void {
        throw new Error("Function not implemented.");
      }
    };

    params.mediationHandler = mediationHandler;

    return new ConnectionsManagerMock(
      params as ConnectionMockConstructor
    )
  }

  get withWebsocketsExperiment() {
    return this.options?.experiments?.liveMode === true
  }

  processMessages(messages: { attachmentId: string; message: Message; }[]): Promise<void> {
    return this.manager.processMessages(messages)
  }

  events = new AgentMessageEvents();
  castor: Castor;
  mercury: Mercury;
  pluto: Pluto;
  agentCredentials: AgentCredentials;
  mediationHandler: MediatorHandler = {
    registerMessagesAsRead: () => { },
    updateKeyListWithDIDs: () => { },
    mediator: {
      mediatorDID: new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
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
  async startFetchingMessages() {
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
