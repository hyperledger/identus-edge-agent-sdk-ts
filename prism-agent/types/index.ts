import { VerifiableCredential } from "../../domain/models/VerifiableCredential";
import { OutOfBandInvitation } from "../protocols/invitation/v2/OutOfBandInvitation";
import {
  Service as DIDDocumentService,
  Signature,
  DID,
  Message,
} from "../../domain";
import { DIDPair } from "../../domain/models/DIDPair";
import Castor from "../../domain/buildingBlocks/Castor";
import Mercury from "../../domain/buildingBlocks/Mercury";
import Pluto from "../../domain/buildingBlocks/Pluto";
import { MediatorHandler } from "../mediator/MediatorHandler";
interface InvitationInterface {
  type: InvitationTypes;
  from?: DID;
}

export enum InvitationTypes {
  OUTOFBAND,
  PRISM_ONBOARD,
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
  verifiableCredentials(): VerifiableCredential[];
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
    keyPathIndex?: number
  ): Promise<DID>;
}

export interface AgentInvitations {
  parseInvitation(str: string): Promise<InvitationType>;
  acceptInvitation(invitation: PrismOnboardingInvitation): Promise<void>;
  parsePrismInvitation(str: string): Promise<PrismOnboardingInvitation>;
  parseOOBInvitation(str: string): Promise<OutOfBandInvitation>;
}

export interface AgentMessageEvents {
  startFetchingMessages(iterationPeriod: number): void;
  stopFetchingMessages(): void;
  handleMessagesEvents(): Promise<Message>;
  handleReceivedMessagesEvents(): Promise<Message>;
  sendMessage(message: Message): Promise<Message>;
}

export interface ConnectionsManager {
  castor: Castor;
  mercury: Mercury;
  pluto: Pluto;
  mediationHandler: MediatorHandler;
  pairings: DIDPair[];
  addConnection(paired: DIDPair): Promise<void>;
  removeConnection(pair: DIDPair): Promise<void>;
  awaitMessages(): Promise<Array<Message>>;
  awaitMessageResponse(id: string): Promise<Message | undefined>;
  sendMessage(message: Message): Promise<Message | undefined>;
  startMediator(): Promise<void>;
  registerMediator(hostDID: DID): Promise<void>;
}
