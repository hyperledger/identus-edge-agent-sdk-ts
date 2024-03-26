import * as Domain from "../domain";

import Apollo from "../apollo";
import Castor from "../castor";
import Mercury from "../mercury";
import Pollux from "../pollux";

import { ApiImpl } from "./helpers/ApiImpl";

import {
  AgentCredentials as AgentCredentialsClass,
  AgentDIDHigherFunctions as AgentDIDHigherFunctionsClass,
  AgentInvitations as AgentInvitationsClass,
  AgentOptions,
  EventCallback,
  InvitationType,
  ListenerKey,
  MediatorHandler,
  PrismOnboardingInvitation,
} from "./types";

import { AgentCredentials } from "./Agent.Credentials";
import { AgentDIDHigherFunctions } from "./Agent.DIDHigherFunctions";
import { AgentInvitations } from "./Agent.Invitations";
import { ConnectionsManager } from "./connectionsManager/ConnectionsManager";
import { OutOfBandInvitation } from "./protocols/invitation/v2/OutOfBandInvitation";
import { OfferCredential } from "./protocols/issueCredential/OfferCredential";
import { RequestCredential } from "./protocols/issueCredential/RequestCredential";
import { IssueCredential } from "./protocols/issueCredential/IssueCredential";
import { Presentation } from "./protocols/proofPresentation/Presentation";
import { RequestPresentation } from "./protocols/proofPresentation/RequestPresentation";
import { DIDCommWrapper } from "../mercury/didcomm/Wrapper";
import { PublicMediatorStore } from "./mediator/PlutoMediatorStore";
import { BasicMediatorHandler } from "./mediator/BasicMediatorHandler";
import { ProofTypes } from "./protocols/types";

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
  AgentInvitationsClass {
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

  private pollux: Pollux;


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
    public readonly apollo: Domain.Apollo,
    public readonly castor: Domain.Castor,
    public readonly pluto: Domain.Pluto,
    public readonly mercury: Domain.Mercury,
    public readonly mediationHandler: MediatorHandler,
    public readonly connectionManager: ConnectionsManager,
    public readonly seed: Domain.Seed = apollo.createRandomSeed().seed,
    public readonly api: Domain.Api = new ApiImpl(),
    options?: AgentOptions
  ) {

    this.pollux = new Pollux(castor);
    this.agentDIDHigherFunctions = new AgentDIDHigherFunctions(
      apollo,
      castor,
      pluto,
      mediationHandler,
      seed
    );

    this.agentCredentials = new AgentCredentials(
      apollo,
      castor,
      pluto,
      this.pollux,
      seed,
      mercury,
      this.agentDIDHigherFunctions
    );

    this.connectionManager =
      connectionManager ||
      new ConnectionsManager(
        castor,
        mercury,
        pluto,
        this.agentCredentials,
        mediationHandler,
        [],
        options
      );

    this.agentInvitations = new AgentInvitations(
      this.pluto,
      this.api,
      this.agentDIDHigherFunctions,
      this.connectionManager
    );
  }

  /**
   * Convenience initializer for Agent
   * allowing default instantiation, omitting all but the absolute necessary parameters
   * 
   * @param {Object} params - dependencies object
   * @param {DID | string} params.mediatorDID - did of the mediator to be used
   * @param {Pluto} params.pluto - storage implementation
   * @param {Api} [params.api]
   * @param {Apollo} [params.apollo]
   * @param {Castor} [params.castor]
   * @param {Mercury} [params.mercury]
   * @param {Seed} [params.seed]
   * @returns {Agent}
   */
  static initialize(params: {
    mediatorDID: Domain.DID | string;
    pluto: Domain.Pluto;
    api?: Domain.Api;
    apollo?: Domain.Apollo;
    castor?: Domain.Castor;
    mercury?: Domain.Mercury;
    seed?: Domain.Seed;
    options?: AgentOptions
  }): Agent {
    const mediatorDID = Domain.DID.from(params.mediatorDID);
    const pluto = params.pluto;

    const api = params.api ?? new ApiImpl();
    const apollo = params.apollo ?? new Apollo();
    const castor = params.castor ?? new Castor(apollo);

    const didcomm = new DIDCommWrapper(apollo, castor, pluto);
    const mercury = params.mercury ?? new Mercury(castor, didcomm, api);

    const store = new PublicMediatorStore(pluto);
    const handler = new BasicMediatorHandler(mediatorDID, mercury, store);
    const pollux = new Pollux(castor);
    const seed = params.seed ?? apollo.createRandomSeed().seed;

    const agentCredentials = new AgentCredentials(
      apollo,
      castor,
      pluto,
      pollux,
      seed,
      mercury,
      new AgentDIDHigherFunctions(
        apollo,
        castor,
        pluto,
        handler,
        seed
      )
    )

    const manager = new ConnectionsManager(castor, mercury, pluto, agentCredentials, handler, [], params.options);

    const agent = new Agent(
      apollo,
      castor,
      pluto,
      mercury,
      handler,
      manager,
      seed,
      api,
      params.options
    );

    return agent;
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
   * Mainly for testing purposes but instantiating the Agent from a ConnectionManager directly
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
    apollo: Domain.Apollo,
    castor: Domain.Castor,
    pluto: Domain.Pluto,
    mercury: Domain.Mercury,
    connectionManager: ConnectionsManager,
    seed?: Domain.Seed,
    api?: Domain.Api,
    options?: AgentOptions
  ) {
    return new Agent(
      apollo,
      castor,
      pluto,
      mercury,
      connectionManager.mediationHandler,
      connectionManager,
      seed ? seed : apollo.createRandomSeed().seed,
      api ? api : new ApiImpl(),
      options
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
      if (e instanceof Domain.AgentError.NoMediatorAvailableError) {
        const hostDID = await this.createNewPeerDID([], false);

        await this.connectionManager.registerMediator(hostDID);

      } else throw e;
    }

    if (this.connectionManager.mediationHandler.mediator !== undefined) {
      await this.connectionManager.startFetchingMessages(5);
      this.state = AgentState.RUNNING;

    } else {
      throw new Domain.AgentError.MediationRequestFailedError("Mediation failed");

    }

    const storedLinkSecret = await this.pluto.getLinkSecret();
    if (storedLinkSecret == null) {
      const secret = this.pollux.anoncreds.createLinksecret();
      const linkSecret = new Domain.LinkSecret(secret);

      await this.pluto.storeLinkSecret(linkSecret);
    }

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
    services: Domain.Service[] = [],
    keyPathIndex?: number
  ): Promise<Domain.DID> {
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
    services: Domain.Service[] = [],
    updateMediator = true
  ): Promise<Domain.DID> {
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
   * Handle an invitation to create a connection
   * 
   * @async
   * @param {InvitationType} invitation - an OOB or PrismOnboarding invitation
   * @returns {Promise<void>}
   */
  async acceptInvitation(invitation: InvitationType): Promise<void> {
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
  async signWith(did: Domain.DID, message: Uint8Array): Promise<Domain.Signature> {
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
   * @deprecated - use `acceptInvitation`
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
  async startFetchingMessages(iterationPeriod: number): Promise<void> {
    return this.connectionManager.startFetchingMessages(iterationPeriod);
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
  sendMessage(message: Domain.Message): Promise<Domain.Message | undefined> {
    return this.connectionManager.sendMessage(message);
  }

  /**
   * Asyncronously get all verifiable credentials
   *
   * @returns {Promise<Credential[]>}
   */
  verifiableCredentials(): Promise<Domain.Credential[]> {
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
  ): Promise<Domain.Credential> {
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
    credential: Domain.Credential
  ): Promise<Presentation> {
    return this.agentCredentials.createPresentationForRequestProof(
      request,
      credential
    );
  }


  /**
   * Initiate a PresentationRequest from the SDK, to create oob Verification Requests
   * @param {Domain.CredentialType} type 
   * @param {Domain.DID} toDID 
   * @param {ProofTypes[]} proofTypes[]
   * @returns 
   */
  async initiatePresentationRequest(type: Domain.CredentialType, toDID: Domain.DID, proofTypes: ProofTypes[]): Promise<RequestPresentation> {
    const requestPresentation = await this.agentCredentials.initiatePresentationRequest(
      type,
      toDID,
      proofTypes
    );

    const requestPresentationMessage = requestPresentation.makeMessage()
    await this.connectionManager.sendMessage(requestPresentationMessage);

    return requestPresentation
  }

  /**
   * Initiate the Presentation and presentationSubmission
   * @param presentation 
   */
  async handlePresentation(presentation: Presentation): Promise<Boolean> {
    return this.agentCredentials.handlePresentation(presentation)
  }

}
