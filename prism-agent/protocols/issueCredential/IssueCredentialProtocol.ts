/* eslint-disable no-case-declarations */
import { Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ConnectionsManager } from "../../types";
import { ProtocolType } from "../ProtocolTypes";
import { IssueCredential } from "./IssueCredential";
import { OfferCredential } from "./OfferCredential";
import { ProposeCredential } from "./ProposeCredential";
import { RequestCredential } from "./RequestCredential";

export class IssueCredentialProtocol {
  public static Stage = {
    propose: "propose",
    offer: "offer",
    request: "request",
    completed: "completed",
    refused: "refused",
  } as const;
  private propose?: ProposeCredential;
  private offer?: OfferCredential;
  private request?: RequestCredential;
  private _stage: keyof typeof IssueCredentialProtocol.Stage;

  constructor(message: Message, public connector: ConnectionsManager) {
    const type = message.piuri;
    switch (type) {
      case ProtocolType.DidcommProposeCredential:
        this._stage = IssueCredentialProtocol.Stage.propose;
        this.propose = ProposeCredential.fromMessage(message);
        break;

      case ProtocolType.DidcommOfferCredential:
        this._stage = IssueCredentialProtocol.Stage.offer;
        this.offer = OfferCredential.fromMessage(message);
        break;

      case ProtocolType.DidcommRequestCredential:
        this._stage = IssueCredentialProtocol.Stage.request;
        this.request = RequestCredential.fromMessage(message);
        break;

      default:
        throw new AgentError.InvalidStepError();
    }
  }

  async nextStage(): Promise<void> {
    switch (this.stage) {
      case IssueCredentialProtocol.Stage.propose:
        if (!this.propose) {
          this._stage = IssueCredentialProtocol.Stage.refused;
          return;
        }
        const offer = OfferCredential.makeOfferFromProposedCredential(
          this.propose
        );
        const message = offer.makeMessage();
        await this.connector.sendMessage(message);
        this.offer = offer;
        this._stage = IssueCredentialProtocol.Stage.offer;
        break;
      case IssueCredentialProtocol.Stage.offer:
        if (!this.offer) {
          this._stage = IssueCredentialProtocol.Stage.refused;
          return;
        }
        const request = RequestCredential.makeRequestFromOfferCredential(
          this.offer
        );
        const requestMessage = request.makeMessage();

        await this.connector.sendMessage(requestMessage);
        this.request = request;
        this._stage = IssueCredentialProtocol.Stage.request;
        break;
      case IssueCredentialProtocol.Stage.request:
      case IssueCredentialProtocol.Stage.completed:
      case IssueCredentialProtocol.Stage.refused:
        break;
    }

    const messageId = this.getLastMessageId();
    if (!messageId) {
      return;
    }

    const response = await this.connector.awaitMessageResponse(messageId);

    switch (response?.piuri) {
      case OfferCredential.type:
        this.offer = OfferCredential.fromMessage(response);
        this._stage = IssueCredentialProtocol.Stage.offer;
        break;
      case RequestCredential.type:
        this.request = RequestCredential.fromMessage(response);
        this._stage = IssueCredentialProtocol.Stage.request;
        break;
      case IssueCredential.type:
        this._stage = IssueCredentialProtocol.Stage.completed;
        break;
    }
  }

  public get stage(): keyof typeof IssueCredentialProtocol.Stage {
    return this._stage;
  }

  private getLastMessageId(): string | undefined {
    switch (this._stage) {
      case IssueCredentialProtocol.Stage.propose:
        return this.propose?.id;
      case IssueCredentialProtocol.Stage.offer:
        return this.offer?.id;
      case IssueCredentialProtocol.Stage.request:
        return this.request?.id;
      default:
        return undefined;
    }
  }
}
