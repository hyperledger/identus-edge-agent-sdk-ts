import * as Domain from "../../domain";
import Mercury from "../../mercury";
import {
  AgentOptions,
  EventCallback,
  InvitationType,
  ListenerKey,
  PrismOnboardingInvitation,
  MediatorHandler,
} from "../types";

import { AgentBackup } from "../Agent.Backup";
import { ConnectionsManager } from "../connectionsManager/ConnectionsManager";
import { OutOfBandInvitation } from "../protocols/invitation/v2/OutOfBandInvitation";
import { OfferCredential } from "../protocols/issueCredential/OfferCredential";
import { RequestCredential } from "../protocols/issueCredential/RequestCredential";
import { IssueCredential } from "../protocols/issueCredential/IssueCredential";
import { Presentation } from "../protocols/proofPresentation/Presentation";
import { RequestPresentation } from "../protocols/proofPresentation/RequestPresentation";
import { DIDCommWrapper } from "../../mercury/didcomm/Wrapper";
import { PublicMediatorStore } from "../mediator/PlutoMediatorStore";
import { BasicMediatorHandler } from "../mediator/BasicMediatorHandler";
import { CreatePeerDID } from "./CreatePeerDID";
import { CreatePresentationRequest } from "./CreatePresentationRequest";
import { HandleIssueCredential } from "./HandleIssueCredential";
import { HandleOfferCredential } from "./HandleOfferCredential";
import { HandlePresentation } from "./HandlePresentation";
import { CreatePresentation } from "./CreatePresentation";
import { ProtocolType } from "../protocols/ProtocolTypes";
import Pollux from "../../pollux";
import Apollo from "../../apollo";
import Castor from "../../castor";
import * as DIDfns from "../didFunctions";
import { Task } from "../../utils/tasks";
import { DIDCommContext } from "./Context";
import { FetchApi } from "../helpers/FetchApi";
import { ParsePrismInvitation } from "./ParsePrismInvitation";
import { ParseInvitation } from "./ParseInvitation";
import { HandleOOBInvitation } from "./HandleOOBInvitation";
import { Startable } from "../../utils/startable";
import { notNil } from "../../utils";

/**
 * Edge agent implementation
 *
 * @export
 * @class Agent
 * @typedef {Agent}
 */
export default class DIDCommAgent implements Startable.Controller {
  public state = Startable.State.STOPPED;
  public backup: AgentBackup;
  public readonly pollux: Pollux;


  /**
   * Creates an instance of Agent.
   *
   * @constructor
   * @param {MediatorHandler} mediationHandler
   * @param {ConnectionsManager} connectionManager
   */
  constructor(
    public readonly apollo: Domain.Apollo,
    public readonly castor: Domain.Castor,
    public readonly pluto: Domain.Pluto,
    public readonly mercury: Domain.Mercury,
    public readonly mediationHandler: MediatorHandler,
    public readonly connectionManager: ConnectionsManager,
    public readonly seed: Domain.Seed = apollo.createRandomSeed().seed,
    public readonly api: Domain.Api = new FetchApi(),
    options?: AgentOptions
  ) {
    this.pollux = new Pollux(apollo, castor);
    this.backup = new AgentBackup(this);
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
    options?: AgentOptions;
  }): DIDCommAgent {
    const mediatorDID = Domain.DID.from(params.mediatorDID);
    const pluto = params.pluto;

    const api = params.api ?? new FetchApi();
    const apollo = params.apollo ?? new Apollo();
    const castor = params.castor ?? new Castor(apollo);
    const didcomm = new DIDCommWrapper(apollo, castor, pluto);
    const mercury = params.mercury ?? new Mercury(castor, didcomm, api);
    const store = new PublicMediatorStore(pluto);
    const handler = new BasicMediatorHandler(mediatorDID, mercury, store);
    const pollux = new Pollux(apollo, castor);
    const seed = params.seed ?? apollo.createRandomSeed().seed;

    const manager = new ConnectionsManager(
      castor,
      mercury,
      pluto,
      pollux,
      handler,
      [],
      params.options
    );

    const agent = new DIDCommAgent(
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

  start(): Promise<Startable.State> {
    return Startable.start(this, async () => {
      try {
        this.state = Startable.State.STARTING;
        await this.pluto.start();
        await this.pollux.start();
        await this.connectionManager.startMediator();
      }
      catch (e) {
        if (e instanceof Domain.AgentError.NoMediatorAvailableError) {
          const hostDID = await this.createNewPeerDID([], false);
          await this.connectionManager.registerMediator(hostDID);
        }
        else {
          throw e;
        }
      }

      if (this.connectionManager.mediationHandler.mediator !== undefined) {
        await this.connectionManager.startFetchingMessages(5);
      }
      else {
        throw new Domain.AgentError.MediationRequestFailedError("Mediation failed");
      }

      const storedLinkSecret = await this.pluto.getLinkSecret();
      if (storedLinkSecret == null) {
        const secret = this.pollux.anoncreds.createLinksecret();
        const linkSecret = new Domain.LinkSecret(secret);
        await this.pluto.storeLinkSecret(linkSecret);
      }
    });
  }

  /**
   * Asyncronously stop the agent and dependencies
   *
   * @returns {Promise<void>}
   */
  stop(): Promise<Startable.State> {
    return Startable.stop(this, async () => {
      await this.connectionManager.stopAllEvents();
      await this.connectionManager.stopFetchingMessages();
      await this.pollux.stop();

      if (notNil(this.pluto.stop)) {
        await this.pluto.stop();
      }
    });
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

  // get mediationHandler() {
  //   return this.connectionManager.mediationHandler;
  // }

  /**
   * Get current mediator DID if available or null
   *
   * @public
   * @readonly
   * @type {DID}
   */
  get currentMediatorDID() {
    return this.mediationHandler.mediator?.mediatorDID;
  }

  private runTask<T>(task: Task<T>) {
    const ctx = new DIDCommContext({
      ConnectionManager: this.connectionManager,
      MediationHandler: this.mediationHandler,
      Mercury: this.mercury,
      Api: this.api,
      Apollo: this.apollo,
      Castor: this.castor,
      Pluto: this.pluto,
      Pollux: this.pollux,
      Seed: this.seed,
    });

    return ctx.run(task);
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
    const task = new DIDfns.CreatePrismDID({ alias, services, keyPathIndex });
    return this.runTask(task);
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
    const task = new CreatePeerDID({ services, updateMediator });
    return this.runTask(task);
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
    const task = new DIDfns.SignWithDID({ did, message });
    return this.runTask(task);
  }

  /**
   * Asyncronously parse an invitation from a valid json string
   *
   * @async
   * @param {string} str
   * @returns {Promise<InvitationType>}
   */
  async parseInvitation(str: string): Promise<InvitationType> {
    const task = new ParseInvitation({ value: str });
    return this.runTask(task);
  }

  /**
   * Handle an invitation to create a connection
   * 
   * @async
   * @param {InvitationType} invitation - an OOB or PrismOnboarding invitation
   * @returns {Promise<void>}
   */
  async acceptInvitation(invitation: InvitationType, optionalAlias?: string): Promise<void> {
    if (invitation.type === ProtocolType.Didcomminvitation) {
      return this.acceptDIDCommInvitation(invitation, optionalAlias);
    }

    if (invitation instanceof PrismOnboardingInvitation) {
      return this.acceptPrismOnboardingInvitation(invitation);
    }

    throw new Domain.AgentError.InvitationIsInvalidError();
  }

  /**
   * Asyncronously parse a prismOnboarding invitation from a string
   *
   * @async
   * @param {string} str
   * @returns {Promise<PrismOnboardingInvitation>}
   */
  async parsePrismInvitation(str: string): Promise<PrismOnboardingInvitation> {
    const task = new ParsePrismInvitation({ value: str });
    return this.runTask(task);
  }

  /**
   * Asyncronously accept an onboarding invitation, used to onboard the current DID in the Cloud Agent.
   *
   * @async
   * @param {PrismOnboardingInvitation} invitation
   * @returns {Promise<void>}
   */
  private async acceptPrismOnboardingInvitation(invitation: PrismOnboardingInvitation): Promise<void> {
    if (!invitation.from) {
      throw new Domain.AgentError.UnknownInvitationTypeError();
    }

    const response = await this.api.request(
      "POST",
      invitation.onboardEndpoint,
      new Map(),
      new Map(),
      {
        did: invitation.from.toString(),
      }
    );

    if (response.httpStatus != 200) {
      throw new Domain.AgentError.FailedToOnboardError();
    }
  }

  /**
   * Asyncronously parse an out of band invitation from a URI as the oob come in format of valid URL
   *
   * @async
   * @param {URL} url
   * @returns {Promise<OutOfBandInvitation>}
   */
  async parseOOBInvitation(url: URL): Promise<OutOfBandInvitation> {
    const task = new ParseInvitation({ value: url });
    const result = await this.runTask(task);

    if (result instanceof OutOfBandInvitation) {
      return result;
    }

    throw new Domain.AgentError.UnknownInvitationTypeError();
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
    invitation: OutOfBandInvitation,
    alias?: string
  ): Promise<void> {
    const task = new HandleOOBInvitation({ invitation, alias });
    return this.runTask(task);
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
   * 
   * @param credential 
   * @returns 
   */
  isCredentialRevoked(credential: Domain.Credential) {
    return this.pollux.isCredentialRevoked(credential);
  }

  /**
   * This method can be used by holders in order to disclose the value of a Credential
   * JWT are just encoded plainText
   * Anoncreds will really need to be disclosed as the fields are encoded.
   *
   * @param {Credential} credential
   * @returns {AttributeType}
   */
  async revealCredentialFields(credential: Domain.Credential, fields: string[], linkSecret: string) {
    return this.pollux.revealCredentialFields(credential, fields, linkSecret);
  }

  /**
   * Asyncronously get all verifiable credentials
   *
   * @returns {Promise<Credential[]>}
   */
  verifiableCredentials(): Promise<Domain.Credential[]> {
    return this.pluto.getAllCredentials();
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
    const task = new HandleOfferCredential({ offer });
    return this.runTask(task);
  }

  /**
   * Extract the verifiableCredential object from the Issue credential message asyncronously
   *
   * @async
   * @param {IssueCredential} message
   * @returns {Promise<VerifiableCredential>}
   */
  async processIssuedCredentialMessage(
    issueCredential: IssueCredential
  ): Promise<Domain.Credential> {
    const task = new HandleIssueCredential({ issueCredential });
    return this.runTask(task);
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
    const task = new CreatePresentation({ request, credential });
    return this.runTask(task);
  }

  /**
   * Initiate a PresentationRequest from the SDK, to create oob Verification Requests
   * @param {Domain.CredentialType} type 
   * @param {Domain.DID} toDID 
   * @param {ProofTypes[]} proofTypes[]
   * @returns 
   * 
   * 1. Example use-case: Send a Presentation Request for a JWT credential issued by a specific issuer
   * ```ts
   *  agent.initiatePresentationRequest(
   *    Domain.CredentialType.JWT,
   *    toDID,
   *    { issuer: Domain.DID.fromString("did:peer:12345"), claims: {}}
   * );
   * ```
   * 
   * 2. Example use-case: Send a Presentation Request for a JWT credential issued by a specific issuer and specific claims
   * ```ts
   *  agent.initiatePresentationRequest(
   *    Domain.CredentialType.JWT,
   *    toDID,
   *    { issuer: Domain.DID.fromString("did:peer:12345"), claims: {email: {type: 'string', pattern:'email@email.com'}}}
   * );
   * ```
   */
  async initiatePresentationRequest<T extends Domain.CredentialType = Domain.CredentialType.JWT>(type: T, toDID: Domain.DID, presentationClaims: Domain.PresentationClaims<T>): Promise<RequestPresentation> {
    const task = new CreatePresentationRequest({ type, toDID, claims: presentationClaims });
    const requestPresentation = await this.runTask(task);
    const requestPresentationMessage = requestPresentation.makeMessage();
    await this.connectionManager.sendMessage(requestPresentationMessage);

    return requestPresentation;
  }

  /**
   * Initiate the Presentation and presentationSubmission
   * @param presentation 
   */
  async handlePresentation(presentation: Presentation): Promise<boolean> {
    const task = new HandlePresentation({ presentation });
    return this.runTask(task);
  }
}
