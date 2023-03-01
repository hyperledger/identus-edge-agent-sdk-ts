import Apollo from "../domain/buildingBlocks/Apollo";
import {
  Service as DIDDocumentService,
  ServiceEndpoint as DIDDocumentServiceEndpoint,
  Seed,
  Signature,
  DID,
  Curve,
} from "../domain";
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
import { AgentError } from "../domain/models/Errors";
import { connect } from "http2";

enum AgentState {
  STOPPED,
  STARTING,
  RUNNING,
  STOPPING,
}

export default class Agent {
  private state: AgentState = AgentState.STOPPED;

  constructor(
    private apollo: Apollo,
    private castor: Castor,
    private pluto: Pluto,
    private mercury: Mercury,
    private mediationHandler: MediationHandler,
    private connectionManager: ConnectionManager = new ConnectionManager(
      mercury,
      castor,
      pluto,
      mediationHandler
    ),
    private seed: Seed = apollo.createRandomSeed().seed,
    private api: Api = new ApiImpl()
  ) {}

  static instanceFromConnectionManager(
    apollo: Apollo,
    castor: Castor,
    pluto: Pluto,
    mercury: Mercury,
    connectionManager: ConnectionManager,
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
    keyPathIndex: NullableType<number>,
    alias: NullableType<string>,
    services: DIDDocumentService[] = []
  ): Promise<DID> {
    const index = keyPathIndex
      ? keyPathIndex
      : this.pluto.getPrismLastKeyPathIndex();
    const keyPair = this.apollo.createKeyPairFromKeyCurve(this.seed, {
      curve: Curve.SECP256K1,
      index: index,
    });
    const did = await this.castor.createPrismDID(keyPair.publicKey, services);
    this.pluto.storePrivateKeys(keyPair.privateKey, did, index, null);
    this.pluto.storePrismDID(did, index, alias);
    return did;
  }

  async createNewPeerDID(
    services: DIDDocumentService[] = [],
    updateMediator: boolean = true
  ): Promise<DID> {
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
