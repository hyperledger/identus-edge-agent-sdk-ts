import { VerifiableCredential } from "../../domain/models/VerifiableCredential";
import { OutOfBandInvitation } from "../protocols/invitation/v2/OutOfBandInvitation";
import {
  Service as DIDDocumentService,
  Signature,
  DID,
  Message,
} from "../../domain";
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
