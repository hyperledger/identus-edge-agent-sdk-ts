import { OutOfBandInvitation } from "../protocols/invitation/v2/OutOfBandInvitation";
import {
  DID,
  Mediator,
  Message,
  Service as DIDDocumentService,
  Signature,
  Credential,
  CredentialType,
  PresentationClaims,
  KeyPair,
  PublicKey,
} from "../../domain";
import { DIDPair } from "../../domain/models/DIDPair";
import { Castor } from "../../domain/buildingBlocks/Castor";
import { Mercury } from "../../domain/buildingBlocks/Mercury";
import { Pluto } from "../../domain/buildingBlocks/Pluto";
import { CancellableTask } from "../helpers/Task";
import { OfferCredential } from "../protocols/issueCredential/OfferCredential";
import { RequestCredential } from "../protocols/issueCredential/RequestCredential";
import { IssueCredential } from "../protocols/issueCredential/IssueCredential";
import { RequestPresentation } from "../protocols/proofPresentation/RequestPresentation";
import { Presentation } from "../protocols/proofPresentation/Presentation";

interface InvitationInterface {
  type: InvitationTypes;
  from?: DID;
}

export enum InvitationTypes {
  OUTOFBAND,
  PRISM_ONBOARD,
}


export type AgentOptions = {
  experiments?: {
    liveMode?: boolean
  }
}

export type InvitationType = PrismOnboardingInvitation | OutOfBandInvitation;

export class PrismOnboardingInvitation implements InvitationInterface {
  public type: InvitationTypes = InvitationTypes.PRISM_ONBOARD;

  constructor(
    public onboardEndpoint: string,
    public from?: DID,
    type?: InvitationTypes
  ) {
    if (type) {
      this.type = type;
    }
  }
}


export interface AgentCredentials {
  revealCredentialFields: (credential: Credential, fields: string[], linkSecret: string) => Promise<{
    [name: string]: any
  }>;
  isCredentialRevoked: (credential: Credential) => Promise<boolean>;



  prepareRequestCredentialWithIssuer(
    offer: OfferCredential
  ): Promise<RequestCredential>;
  processIssuedCredentialMessage(message: IssueCredential): Promise<Credential>;

  verifiableCredentials(): Promise<Credential[]>;

  initiatePresentationRequest(type: CredentialType.JWT, toDID: DID, claims: PresentationClaims): Promise<RequestPresentation>;

  initiatePresentationRequest(type: CredentialType.AnonCreds, toDID: DID, claims: PresentationClaims<CredentialType.AnonCreds>): Promise<RequestPresentation>;


  createPresentationForRequestProof(
    request: RequestPresentation,
    credential: Credential
  ): Promise<Presentation>;

  handlePresentation(presentation: Presentation): Promise<boolean>
}

export interface AgentDIDHigherFunctions {
  signWith(did: DID, message: Uint8Array): Promise<Signature>;

  createNewPeerDID(
    services: DIDDocumentService[],
    updateMediator: boolean
  ): Promise<DID>;

  createNewPrismDID(
    alias: string,
    services: DIDDocumentService[],
    keyPathIndex?: number,
    issuingKeys?: (PublicKey | KeyPair)[]
  ): Promise<DID>;
}

export interface AgentInvitations {
  acceptDIDCommInvitation(invitation: OutOfBandInvitation, optionalAlias?: string): Promise<void>;

  parseInvitation(str: string): Promise<InvitationType>;

  acceptInvitation(invitation: PrismOnboardingInvitation, optionalAlias?: string): Promise<void>;

  parsePrismInvitation(str: string): Promise<PrismOnboardingInvitation>;

  parseOOBInvitation(str: URL): Promise<OutOfBandInvitation>;
}

type MessageEventArg = Message[];
type ConnectionEventArg = DIDPair;
type RevokeEventArg = Credential;
export type EventCallback = (arg: MessageEventArg | ConnectionEventArg | RevokeEventArg) => void;
export type EventPickupCallback = (messages: {
  attachmentId: string;
  message: Message;
}[]) => void;



export enum ListenerKey {
  "MESSAGE" = "message",
  "CONNECTION" = "connection",
  "REVOKE" = "revoke"
}

export interface AgentMessageEvents {
  addListener(eventName: ListenerKey, callback: EventCallback): void;
  removeListener(eventName: ListenerKey, callback: EventCallback): void;
  emit(eventName: ListenerKey | string, data: any): void;
  // startFetchingMessages(iterationPeriod: number): void;
  // stopFetchingMessages(): void;
  // sendMessage(message: Message): Promise<Message | undefined>;
}

export interface ConnectionsManager {
  castor: Castor;
  mercury: Mercury;
  pluto: Pluto;
  agentCredentials: AgentCredentials;
  mediationHandler: MediatorHandler;
  pairings: DIDPair[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cancellables: CancellableTask<any>[];
  withWebsocketsExperiment: boolean;
  stopAllEvents(): void;
  addConnection(paired: DIDPair): Promise<void>;
  removeConnection(pair: DIDPair): Promise<void>;
  awaitMessageResponse(id: string): Promise<Message | undefined>;
  processMessages(messages: {
    attachmentId: string;
    message: Message;
  }[]): Promise<void>;
  sendMessage(message: Message): Promise<Message | undefined>;
  startMediator(): Promise<void>;
  registerMediator(hostDID: DID): Promise<void>;
}

export interface MediatorStore {
  storeMediator(mediator: Mediator): Promise<void>;

  getAllMediators(): Promise<Mediator[]>;
}

export abstract class MediatorHandler {
  abstract mediatorDID: DID;

  abstract mediator?: Mediator;

  abstract bootRegisteredMediator(): Promise<Mediator | undefined>;

  abstract achieveMediation(host: DID): Promise<Mediator>;

  abstract updateKeyListWithDIDs(dids: DID[]): Promise<void>;

  abstract pickupUnreadMessages(
    limit: number
  ): Promise<Array<{ attachmentId: string; message: Message }>>;

  abstract registerMessagesAsRead(ids: string[]): Promise<void>;

  abstract listenUnreadMessages(
    signal: AbortSignal,
    serviceEndpointUri: string,
    onMessage: (messages: {
      attachmentId: string;
      message: Message;
    }[]) => void | Promise<void>
  ): void
}
