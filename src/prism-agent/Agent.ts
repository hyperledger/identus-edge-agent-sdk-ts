import { Apollo } from "../domain/buildingBlocks/Apollo";
import {
  DID,
  Message,
  Seed,
  Service as DIDDocumentService,
  Signature,
  Credential,
} from "../domain";
import { Castor } from "../domain/buildingBlocks/Castor";
import { Pluto } from "../domain/buildingBlocks/Pluto";
import { Mercury } from "../domain/buildingBlocks/Mercury";
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
import { AgentCredentials } from "./Agent.Credentials";
import { AgentDIDHigherFunctions } from "./Agent.DIDHigherFunctions";
import { AgentInvitations } from "./Agent.Invitations";
import { ConnectionsManager } from "./connectionsManager/ConnectionsManager";
import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import { RequestCredential } from "./protocols/issueCredential/RequestCredential";
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

/**
 * Edge agent implementation
 *
 * @export
 * @class Agent
 * @typedef {Agent}
 */
export default class Agent
  implements
    AgentCredentialsClass,
    AgentDIDHigherFunctionsClass,
    AgentInvitationsClass
{
  /**
   * Agent state
   *
   * @public
   * @type {AgentState}
   */
  public state: AgentState = AgentState.STOPPED;

  private agentCredentials: AgentCredentials;
  private agentDIDHigherFunctions: AgentDIDHigherFunctions;
  private agentInvitations: AgentInvitations;
  private apollo: Apollo;
  private castor: Castor;
  private pluto: Pluto;
  private pollux: Pollux;
  private mercury: Mercury;
  private mediationHandler: MediatorHandler;
  private connectionManager;
  private seed: Seed;
  private api: Api;

  /**
   * Creates an instance of Agent.
   *
   * @constructor
   * @param {Apollo} apollo
   * @param {Castor} castor
   * @param {Pluto} pluto
   * @param {Mercury} mercury
   * @param {MediatorHandler} mediationHandler
   * @param {ConnectionsManager} connectionManager
   * @param {Seed} [seed=apollo.createRandomSeed().seed]
   * @param {Api} [api=new ApiImpl()]
   */
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
    this.pollux = new Pollux(castor);

    this.connectionManager =
      connectionManager ||
      new ConnectionsManager(castor, mercury, pluto, mediationHandler, []);

    this.agentCredentials = new AgentCredentials(
      apollo,
      castor,
      pluto,
      this.pollux,
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

  /**
   * Get current mediator DID if available or null
   *
   * @public
   * @readonly
   * @type {DID}
   */
  public get currentMediatorDID() {
    return this.mediationHandler.mediator?.mediatorDID;
  }

  /**
   * Mainly for testing porposed but instanciating the Agne tfrom a ConnectionManager directly
   *
   * @static
   * @param {Apollo} apollo
   * @param {Castor} castor
   * @param {Pluto} pluto
   * @param {Mercury} mercury
   * @param {ConnectionsManager} connectionManager
   * @param {?Seed} [seed]
   * @param {?Api} [api]
   * @returns {Agent}
   */
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

  /**
   * Asyncronously start the agent
   *
   * @async
   * @returns {Promise<AgentState>}
   */
  async start(): Promise<AgentState> {
    if (this.state !== AgentState.STOPPED) {
      return this.state;
    }
    this.state = AgentState.STARTING;
    try {
      await this.pluto.start();
      await this.pollux.start();
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

    //#if _ANONCREDS
    const storedLinkSecret = await this.pluto.getLinkSecret();

    if (storedLinkSecret == null) {
      const linkSecret = this.pollux.anoncreds.createLinksecret();
      await this.pluto.storeLinkSecret(linkSecret);
    }
    //#endif

    return this.state;
  }

  /**
   * Asyncronously stop the agent and any side task that is running
   *
   * @async
   * @returns {Promise<void>}
   */
  async stop(): Promise<void> {
    if (this.state !== AgentState.RUNNING) {
      return;
    }
    this.state = AgentState.STOPPING;
    this.connectionManager.stopAllEvents();
    this.connectionManager.stopFetchingMessages();
    this.state = AgentState.STOPPED;
  }

  /**
   * Asyncronously create a new PrismDID
   *
   * @async
   * @param {string} alias
   * @param {DIDDocumentService[]} [services=[]]
   * @param {?number} [keyPathIndex]
   * @returns {Promise<DID>}
   */
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

  /**
   * Asyncronously Create a new PeerDID
   *
   * @async
   * @param {DIDDocumentService[]} [services=[]]
   * @param {boolean} [updateMediator=true]
   * @returns {Promise<DID>}
   */
  async createNewPeerDID(
    services: DIDDocumentService[] = [],
    updateMediator = true
  ): Promise<DID> {
    return this.agentDIDHigherFunctions.createNewPeerDID(
      services,
      updateMediator
    );
  }

  /**
   * Asyncronously parse an invitation from a valid json string
   *
   * @async
   * @param {string} str
   * @returns {Promise<InvitationType>}
   */
  async parseInvitation(str: string): Promise<InvitationType> {
    return this.agentInvitations.parseInvitation(str);
  }

  /**
   * Asyncronously accept a prism onboarding invitation, used to onboard the current did in a prism agent.
   *
   * @async
   * @param {PrismOnboardingInvitation} invitation
   * @returns {Promise<void>}
   */
  async acceptInvitation(invitation: PrismOnboardingInvitation): Promise<void> {
    return this.agentInvitations.acceptInvitation(invitation);
  }

  /**
   * Asyncronously sign a message with a DID
   *
   * @async
   * @param {DID} did
   * @param {Uint8Array} message
   * @returns {Promise<Signature>}
   */
  async signWith(did: DID, message: Uint8Array): Promise<Signature> {
    return this.agentDIDHigherFunctions.signWith(did, message);
  }

  /**
   * Asyncronously parse a prismOnboarding invitation from a string
   *
   * @async
   * @param {string} str
   * @returns {Promise<PrismOnboardingInvitation>}
   */
  async parsePrismInvitation(str: string): Promise<PrismOnboardingInvitation> {
    return this.agentInvitations.parsePrismInvitation(str);
  }

  /**
   * Asyncronously parse an out of band invitation from a URI as the oob come in format of valid URL
   *
   * @async
   * @param {URL} str
   * @returns {Promise<OutOfBandInvitation>}
   */
  async parseOOBInvitation(str: URL): Promise<OutOfBandInvitation> {
    return this.agentInvitations.parseOOBInvitation(str);
  }

  /**
   * Asyncronously accept a didcomm v2 invitation, will create a pair between the Agent
   *  its connecting with and the current owner's did
   *
   * @async
   * @param {OutOfBandInvitation} invitation
   * @returns {*}
   */
  async acceptDIDCommInvitation(
    invitation: OutOfBandInvitation
  ): Promise<void> {
    return this.agentInvitations.acceptDIDCommInvitation(invitation);
  }

  /**
   * Start fetching for new messages in such way that it can be stopped at any point in time without causing memory leaks
   *
   * @param {number} iterationPeriod
   */
  startFetchingMessages(iterationPeriod: number): void {
    this.connectionManager.startFetchingMessages(iterationPeriod);
  }

  /**
   * Stops fetching messages
   */
  stopFetchingMessages(): void {
    this.connectionManager.stopFetchingMessages();
  }

  /**
   * Asyncronously send a didcomm Message
   *
   * @param {Message} message
   * @returns {Promise<Message | undefined>}
   */
  sendMessage(message: Message): Promise<Message | undefined> {
    return this.connectionManager.sendMessage(message);
  }

  /**
   * Asyncronously get all verifiable credentials
   *
   * @returns {Promise<VerifiableCredential[]>}
   */
  verifiableCredentials(): Promise<Credential[]> {
    return this.agentCredentials.verifiableCredentials();
  }

  /**
   * Add an event listener to get notified from an Event "MESSAGE"
   *
   * @param {ListenerKey} eventName
   * @param {EventCallback} callback
   */
  addListener(eventName: ListenerKey, callback: EventCallback): void {
    return this.connectionManager.events.addListener(eventName, callback);
  }

  /**
   * Remove event listener, used by stop procedure
   * @date 20/06/2023 - 14:31:30
   *
   * @param {ListenerKey} eventName
   * @param {EventCallback} callback
   */
  removeListener(eventName: ListenerKey, callback: EventCallback): void {
    return this.connectionManager.events.removeListener(eventName, callback);
  }

  /**
   * Asyncronously prepare a request credential message from a valid offerCredential for now supporting w3c verifiable credentials offers.
   *
   * @async
   * @param {OfferCredential} offer
   * @returns {Promise<RequestCredential>}
   */
  async prepareRequestCredentialWithIssuer(
    offer: OfferCredential
  ): Promise<RequestCredential> {
    return this.agentCredentials.prepareRequestCredentialWithIssuer(offer);
  }

  /**
   * Extract the verifiableCredential object from the Issue credential message asyncronously
   *
   * @async
   * @param {IssueCredential} message
   * @returns {Promise<VerifiableCredential>}
   */
  async processIssuedCredentialMessage(
    message: IssueCredential
  ): Promise<Credential> {
    return this.agentCredentials.processIssuedCredentialMessage(message);
  }

  /**
   * Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
   * This is used when the verified requests a specific verifiable credential, this will create the actual
   * instance of the presentation which we can share with the verifier.
   *
   * @async
   * @param {RequestPresentation} request
   * @param {VerifiableCredential} credential
   * @returns {Promise<Presentation>}
   */
  async createPresentationForRequestProof(
    request: RequestPresentation,
    credential: Credential
  ): Promise<Presentation> {
    return this.agentCredentials.createPresentationForRequestProof(
      request,
      credential
    );
  }
}
