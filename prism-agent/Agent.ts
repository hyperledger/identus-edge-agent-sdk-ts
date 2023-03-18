import Apollo from "../domain/buildingBlocks/Apollo";
import {
  DID,
  Message,
  Seed,
  Service as DIDDocumentService,
  ServiceEndpoint as DIDDocumentServiceEndpoint,
  Signature,
} from "../domain";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import Mercury from "../domain/buildingBlocks/Mercury";
import { Api } from "../domain/models/Api";
import { ApiImpl } from "./helpers/ApiImpl";

import { AgentError } from "../domain/models/Errors";
import {
  AgentCredentials as AgentCredentialsClass,
  AgentDIDHigherFunctions as AgentDIDHigherFunctionsClass,
  AgentInvitations as AgentInvitationsClass,
  AgentMessageEvents as AgentMessageEventsClass,
  EventCallback,
  InvitationType,
  ListenerKey,
  MediatorHandler,
  PrismOnboardingInvitation,
} from "./types";
import { OutOfBandInvitation } from "./protocols/invitation/v2/OutOfBandInvitation";
import { VerifiableCredential } from "../domain/models/VerifiableCredential";
import { AgentCredentials } from "./Agent.Credentials";
import { AgentDIDHigherFunctions } from "./Agent.DIDHigherFunctions";
import { AgentInvitations } from "./Agent.Invitations";
import { ConnectionsManager } from "./connectionsManager/ConnectionsManager";
import { AgentMessageEvents } from "./Agent.MessageEvents";
import { ProtocolType } from "./protocols/ProtocolTypes";
import { BasicMessage } from "./protocols/other/BasicMessage";

enum AgentState {
  STOPPED = "stopped",
  STARTING = "starting",
  RUNNING = "running",
  STOPPING = "stopping",
}

export default class Agent
  implements
    AgentCredentialsClass,
    AgentDIDHigherFunctionsClass,
    AgentInvitationsClass,
    AgentMessageEventsClass
{
  public state: AgentState = AgentState.STOPPED;
  public get currentMediatorDID() {
    return this.mediationHandler.mediator?.mediatorDID;
  }
  private agentCredentials: AgentCredentials;
  private agentDIDHigherFunctions: AgentDIDHigherFunctions;
  private agentInvitations: AgentInvitations;
  private agentMessageEvents: AgentMessageEvents;

  constructor(
    protected apollo: Apollo,
    protected castor: Castor,
    protected pluto: Pluto,
    protected mercury: Mercury,
    public mediationHandler: MediatorHandler,
    protected connectionManager = new ConnectionsManager(
      castor,
      mercury,
      pluto,
      mediationHandler
    ),
    protected seed: Seed = apollo.createRandomSeed().seed,
    protected api: Api = new ApiImpl()
  ) {
    this.agentCredentials = new AgentCredentials(pluto);
    this.agentDIDHigherFunctions = new AgentDIDHigherFunctions(
      apollo,
      castor,
      pluto,
      connectionManager,
      mediationHandler,
      seed
    );
    this.agentInvitations = new AgentInvitations(
      this.pluto,
      this.api,
      this.agentDIDHigherFunctions,
      this.connectionManager
    );
    this.agentMessageEvents = new AgentMessageEvents(connectionManager);
  }

  static instanceFromConnectionManager(
    apollo: Apollo,
    castor: Castor,
    pluto: Pluto,
    mercury: Mercury,
    connectionManager: ConnectionsManager,
    seed?: Seed,
    api?: Api
  ) {
    return new Agent(
      apollo,
      castor,
      pluto,
      mercury,
      connectionManager.mediationHandler,
      connectionManager,
      seed ? seed : apollo.createRandomSeed().seed,
      api ? api : new ApiImpl()
    );
  }

  async start(): Promise<AgentState> {
    if (this.state !== AgentState.STOPPED) {
      return this.state;
    }
    this.state = AgentState.STARTING;
    try {
      await this.pluto.start();
      await this.connectionManager.startMediator();
    } catch (e) {
      if (e instanceof AgentError.NoMediatorAvailableError) {
        const hostDID = await this.createNewPeerDID(
          [
            new DIDDocumentService(
              "#didcomm-1",
              ["DIDCommMessaging"],
              new DIDDocumentServiceEndpoint(
                this.connectionManager.mediationHandler.mediatorDID.toString()
              )
            ),
          ],
          false
        );
        await this.connectionManager.registerMediator(hostDID);
      } else throw e;
    }
    if (this.connectionManager.mediationHandler.mediator !== undefined) {
      this.agentMessageEvents.startFetchingMessages(300);
      this.state = AgentState.RUNNING;
    } else {
      throw new AgentError.MediationRequestFailedError("Mediation failed");
    }
    return this.state;
  }

  async stop(): Promise<void> {
    if (this.state !== AgentState.RUNNING) {
      return;
    }
    this.state = AgentState.STOPPING;
    this.connectionManager.stopAllEvents();
    this.agentMessageEvents.stopFetchingMessages();
    this.state = AgentState.STOPPED;
  }

  async createNewPrismDID(
    alias: string,
    services: DIDDocumentService[] = [],
    keyPathIndex?: number
  ): Promise<DID> {
    return this.agentDIDHigherFunctions.createNewPrismDID(
      alias,
      services,
      keyPathIndex
    );
  }

  async createNewPeerDID(
    services: DIDDocumentService[] = [],
    updateMediator = true
  ): Promise<DID> {
    return this.agentDIDHigherFunctions.createNewPeerDID(
      services,
      updateMediator
    );
  }

  async parseInvitation(str: string): Promise<InvitationType> {
    return this.agentInvitations.parseInvitation(str);
  }

  async acceptInvitation(invitation: PrismOnboardingInvitation): Promise<void> {
    return this.agentInvitations.acceptInvitation(invitation);
  }

  async signWith(did: DID, message: Uint8Array): Promise<Signature> {
    return this.agentDIDHigherFunctions.signWith(did, message);
  }

  async parsePrismInvitation(str: string): Promise<PrismOnboardingInvitation> {
    return this.agentInvitations.parsePrismInvitation(str);
  }

  async parseOOBInvitation(str: URL): Promise<OutOfBandInvitation> {
    return this.agentInvitations.parseOOBInvitation(str);
  }

  async acceptDIDCommInvitation(
    invitation: OutOfBandInvitation
  ): Promise<void> {
    return this.agentInvitations.acceptDIDCommInvitation(invitation);
  }

  startFetchingMessages(iterationPeriod: number): void {
    this.agentMessageEvents.startFetchingMessages(iterationPeriod);
  }

  stopFetchingMessages(): void {
    this.agentMessageEvents.stopFetchingMessages();
  }

  sendMessage(message: Message): Promise<Message | undefined> {
    return this.agentMessageEvents.sendMessage(message);
  }

  verifiableCredentials(): Promise<VerifiableCredential[]> {
    return this.agentCredentials.verifiableCredentials();
  }

  addListener(eventName: ListenerKey, callback: EventCallback): number {
    return this.agentMessageEvents.addListener(eventName, callback);
  }

  removeListener(eventName: ListenerKey, callback: EventCallback): void {
    return this.agentMessageEvents.removeListener(eventName, callback);
  }
}
