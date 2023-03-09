import Apollo from "../domain/buildingBlocks/Apollo";
import {
  Service as DIDDocumentService,
  ServiceEndpoint as DIDDocumentServiceEndpoint,
  Seed,
  Signature,
  DID,
} from "../domain";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import Mercury from "../domain/buildingBlocks/Mercury";
import { Api } from "./helpers/Api";
import { ApiImpl } from "./helpers/ApiImpl";

import { AgentError } from "../domain/models/Errors";
import {
  AgentInvitations as AgentInvitationsClass,
  AgentCredentials as AgentCredentialsClass,
  AgentDIDHigherFunctions as AgentDIDHigherFunctionsClass,
  InvitationType,
  PrismOnboardingInvitation,
} from "./types";
import { OutOfBandInvitation } from "./protocols/invitation/v2/OutOfBandInvitation";
import { VerifiableCredential } from "../domain/models/VerifiableCredential";
import { AgentCredentials } from "./Agent.Credentials";
import { AgentDIDHigherFunctions } from "./Agent.DIDHigherFunctions";
import { AgentInvitations } from "./Agent.Invitations";
import { MediatorHandler } from "./mediator/MediatorHandler";
import { ConnectionsManager as ConnectionsManagerClass } from "./types";
import { ConnectionsManager } from "./connectionsManager/ConnectionsManager";
enum AgentState {
  STOPPED,
  STARTING,
  RUNNING,
  STOPPING,
}

export default class Agent
  implements
    AgentCredentialsClass,
    AgentDIDHigherFunctionsClass,
    AgentInvitationsClass
{
  private agentCredentials: AgentCredentials;
  private agentDIDHigherFunctions: AgentDIDHigherFunctions;
  private agentInvitations: AgentInvitations;

  private state: AgentState = AgentState.STOPPED;

  constructor(
    protected apollo: Apollo,
    protected castor: Castor,
    protected pluto: Pluto,
    protected mercury: Mercury,
    protected mediationHandler: MediatorHandler,
    protected connectionManager: ConnectionsManagerClass = new ConnectionsManager(
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
      seed
    );
    this.agentInvitations = new AgentInvitations(
      this.api,
      this.agentDIDHigherFunctions
    );
  }

  verifiableCredentials(): VerifiableCredential[] {
    return this.agentCredentials.verifiableCredentials();
  }

  static instanceFromConnectionManager(
    apollo: Apollo,
    castor: Castor,
    pluto: Pluto,
    mercury: Mercury,
    connectionManager: ConnectionsManagerClass,
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
      this.state = AgentState.RUNNING;
    } else {
      throw new AgentError.MediationRequestFailedError();
    }
    return this.state;
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
  async parseOOBInvitation(str: string): Promise<OutOfBandInvitation> {
    return this.agentInvitations.parseOOBInvitation(str);
  }
}
