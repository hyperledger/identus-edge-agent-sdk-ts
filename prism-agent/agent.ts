import Apollo from "../domain/buildingBlocks/Apollo";
import { Service as DIDDocumentService, Seed, Signature, DID } from "../domain";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import Mercury from "../domain/buildingBlocks/Mercury";
import { MediationHandler } from "./mediation/types/MediationHandler";
import { Api } from "./helpers/Api";
import { ApiImpl } from "./helpers/ApiImpl";
import { ConnectionManager } from "./ConnectionManager";
import { NullableType } from "../domain/models/NullableType";
import {
  InvitationType,
  OutOfBandInvitation,
  PrismOnboardingInvitation,
} from "./types";

enum AgentState {
  STOPPED,
  STARTING,
  RUNNING,
  STOPPING,
}

export default class Agent {
  private state: AgentState = AgentState.STOPPED;

  private seed: Seed;
  private apollo: Apollo;
  private castor: Castor;
  private pluto: Pluto;
  private mercury: Mercury;
  private api: Api;
  private connectionsManager: ConnectionManager;

  static instanceFromMediationHandler(
    apollo: Apollo,
    castor: Castor,
    pluto: Pluto,
    mercury: Mercury,
    mediationHandler: MediationHandler,
    seed?: Seed,
    api?: Api
  ): Agent {
    const connectionManager = new ConnectionManager(
      mercury,
      castor,
      pluto,
      mediationHandler
    );
    return new Agent(
      apollo,
      castor,
      pluto,
      mercury,
      connectionManager,
      seed,
      api
    );
  }

  constructor(
    apollo: Apollo,
    castor: Castor,
    pluto: Pluto,
    mercury: Mercury,
    connectionManager: ConnectionManager,
    seed?: Seed,
    api?: Api
  ) {
    this.apollo = apollo;
    this.castor = castor;
    this.pluto = pluto;
    this.mercury = mercury;
    this.seed = seed ? seed : apollo.createRandomSeed().seed;
    this.api = api ? api : new ApiImpl();
    this.connectionsManager = connectionManager;
  }

  async start(): Promise<AgentState> {
    throw new Error("Not implemented");
  }

  async createNewPrismDID(
    keyPathIndex: NullableType<number>,
    alias: NullableType<string>,
    services: DIDDocumentService[] = []
  ) {
    throw new Error("Not implemented");
  }

  async createNewPeerDID(
    services: DIDDocumentService[] = [],
    updateMediator: boolean = true
  ) {
    throw new Error("Not implemented");
  }

  async parseInvitation(str: string): Promise<InvitationType> {
    throw new Error("Not implemented");
  }
  async acceptInvitation(invitation: PrismOnboardingInvitation): Promise<void> {
    throw new Error("Not implemented");
  }
  async signWith(did: DID, message: Uint8Array): Promise<Signature> {
    throw new Error("Not implemented");
  }
  async parsePrismInvitation(str: string): Promise<PrismOnboardingInvitation> {
    throw new Error("Not implemented");
  }
  async parseOOBInvitation(str: string): Promise<OutOfBandInvitation> {
    throw new Error("Not implemented");
  }
}
