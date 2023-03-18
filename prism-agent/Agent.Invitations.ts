import { OutOfBandInvitation } from "./protocols/invitation/v2/OutOfBandInvitation";
import {
  AgentDIDHigherFunctions,
  AgentInvitations as AgentInvitationsClass,
  InvitationType,
  PrismOnboardingInvitation,
} from "./types";
import {
  Service as DIDDocumentService,
  Service,
  ServiceEndpoint as DIDDocumentServiceEndpoint,
  ServiceEndpoint,
} from "../domain";
import { AgentError } from "../domain/models/Errors";
import {
  findProtocolTypeByValue,
  ProtocolType,
} from "./protocols/ProtocolTypes";
import { Api } from "../domain/models/Api";
import { ConnectionsManager } from "./connectionsManager/ConnectionsManager";
import { DIDCommConnectionRunner } from "./protocols/connection/DIDCommConnectionRunner";
import Pluto from "../domain/buildingBlocks/Pluto";
import { DIDCommInvitationRunner } from "./protocols/invitation/v2/DIDCommInvitationRunner";

export class AgentInvitations implements AgentInvitationsClass {
  constructor(
    private pluto: Pluto,
    private api: Api,
    private agentDIDHigherFunctions: AgentDIDHigherFunctions,
    private connection: ConnectionsManager
  ) {}

  async parseInvitation(str: string): Promise<InvitationType> {
    const json = JSON.parse(str);
    const typeString = findProtocolTypeByValue(json.type);

    switch (typeString) {
      case ProtocolType.PrismOnboarding:
        return this.parsePrismInvitation(str);
      case ProtocolType.Didcomminvitation:
        return this.parseOOBInvitation(new URL(str));
    }

    throw new AgentError.UnknownInvitationTypeError();
  }

  async acceptDIDCommInvitation(invitation: OutOfBandInvitation) {
    if (!this.connection.mediationHandler.mediator) {
      throw new AgentError.NoMediatorAvailableError();
    }
    debugger;
    const ownDID = await this.agentDIDHigherFunctions.createNewPeerDID(
      [
        new Service(
          "#didcomm-1",
          ["DIDCommMessasing"],
          new ServiceEndpoint(
            this.connection.mediationHandler.mediator.routingDID.toString()
          )
        ),
      ],
      true
    );

    const pair = await new DIDCommConnectionRunner(
      invitation,
      this.pluto,
      ownDID,
      this.connection
    ).run();

    await this.connection.addConnection(pair);
  }

  async acceptInvitation(invitation: PrismOnboardingInvitation): Promise<void> {
    if (!invitation.from) {
      throw new AgentError.UnknownInvitationTypeError();
    }
    interface SendDID {
      did: string;
    }
    const body: SendDID = {
      did: invitation.from.toString(),
    };
    const response = await this.api.request(
      "POST",
      invitation.onboardEndpoint,
      new Map(),
      new Map(),
      body
    );
    if (response.httpStatus != 200) {
      throw new AgentError.FailedToOnboardError();
    }
  }

  async parsePrismInvitation(str: string): Promise<PrismOnboardingInvitation> {
    try {
      const prismOnboarding =
        OutOfBandInvitation.parsePrismOnboardingInvitationFromJson(str);
      const url = prismOnboarding.onboardEndpoint;
      const services: DIDDocumentService[] = [
        new DIDDocumentService(
          "#didcomm-1",
          ["DIDCommMessaging"],
          new DIDDocumentServiceEndpoint(url, ["DIDCommMessaging"])
        ),
      ];
      const updateMediator = true;
      const did = await this.agentDIDHigherFunctions.createNewPeerDID(
        services,
        updateMediator
      );
      prismOnboarding.from = did;
      return prismOnboarding;
    } catch (e) {
      if (e instanceof Error) {
        throw new AgentError.UnknownInvitationTypeError(e.message);
      } else {
        throw e;
      }
    }
  }

  async parseOOBInvitation(str: URL): Promise<OutOfBandInvitation> {
    return new DIDCommInvitationRunner(str).run();
  }
}
