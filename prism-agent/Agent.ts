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
import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import { RequestCredential } from "./protocols/issueCredential/RequestCredential";
import { default as PolluxType } from "../domain/buildingBlocks/Pollux";
import Pollux from "../pollux/Pollux";
import { IssueCredential } from "./protocols/issueCredential/IssueCredential";
import { Presentation } from "./protocols/proofPresentation/Presentation";
import { RequestPresentation } from "./protocols/proofPresentation/RequestPresentation";

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
    AgentInvitationsClass
{
  public state: AgentState = AgentState.STOPPED;
  public get currentMediatorDID() {
    return this.mediationHandler.mediator?.mediatorDID;
  }
  private agentCredentials: AgentCredentials;
  private agentDIDHigherFunctions: AgentDIDHigherFunctions;
  private agentInvitations: AgentInvitations;
  private apollo: Apollo;
  private castor: Castor;
  private pluto: Pluto;
  private mercury: Mercury;
  private mediationHandler: MediatorHandler;
  private connectionManager;
  private seed: Seed;
  private api: Api;

  constructor(
    apollo: Apollo,
    castor: Castor,
    pluto: Pluto,
    mercury: Mercury,
    mediationHandler: MediatorHandler,
    connectionManager: ConnectionsManager,
    seed: Seed = apollo.createRandomSeed().seed,
    api: Api = new ApiImpl()
  ) {
    this.apollo = apollo;
    this.castor = castor;
    this.pluto = pluto;
    this.mercury = mercury;
    this.mediationHandler = mediationHandler;
    this.seed = seed;
    this.api = api;

    this.connectionManager =
      connectionManager ||
      new ConnectionsManager(castor, mercury, pluto, mediationHandler, []);

    const pollux = new Pollux(castor);
    this.agentCredentials = new AgentCredentials(
      apollo,
      castor,
      pluto,
      pollux,
      seed
    );
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
        const hostDID = await this.createNewPeerDID([], false);
        await this.connectionManager.registerMediator(hostDID);
      } else throw e;
    }
    if (this.connectionManager.mediationHandler.mediator !== undefined) {
      this.connectionManager.startFetchingMessages(5);
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
    this.connectionManager.stopFetchingMessages();
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
    this.connectionManager.startFetchingMessages(iterationPeriod);
  }

  stopFetchingMessages(): void {
    this.connectionManager.stopFetchingMessages();
  }

  sendMessage(message: Message): Promise<Message | undefined> {
    return this.connectionManager.sendMessage(message);
  }

  verifiableCredentials(): Promise<VerifiableCredential[]> {
    return this.agentCredentials.verifiableCredentials();
  }

  addListener(eventName: ListenerKey, callback: EventCallback): void {
    return this.connectionManager.events.addListener(eventName, callback);
  }

  removeListener(eventName: ListenerKey, callback: EventCallback): void {
    return this.connectionManager.events.removeListener(eventName, callback);
  }

  async prepareRequestCredentialWithIssuer(
    offer: OfferCredential
  ): Promise<RequestCredential> {
    return this.agentCredentials.prepareRequestCredentialWithIssuer(offer);
  }

  async processIssuedCredentialMessage(
    message: IssueCredential
  ): Promise<VerifiableCredential> {
    return this.agentCredentials.processIssuedCredentialMessage(message);
  }

  async createPresentationForRequestProof(
    request: RequestPresentation,
    credential: VerifiableCredential
  ): Promise<Presentation> {
    return this.agentCredentials.createPresentationForRequestProof(
      request,
      credential
    );
  }
}
