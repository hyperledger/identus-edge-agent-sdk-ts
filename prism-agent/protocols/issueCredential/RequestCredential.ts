import { uuid } from "@stablelib/uuid";

import { AttachmentDescriptor, DID } from "../../../domain";
import { CredentialFormat } from "./CredentialFormat";
import { CredentialHelpers } from "./CredentialHelpers";

class RequestCredentialBody {
  constructor(
    public formats: CredentialFormat[],
    public goalCode?: string,
    public comment?: string
  ) {}
}

export class RequestCredential {
  constructor(
    public body: RequestCredentialBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  static fromMessage(fromMessage: Message): RequestCredential {
    throw new Error("Not implemented")
  }

  static makeRequestFromOfferCredential(offer: )


  static build<T>(
    fromDID: DID,
    toDID: DID,
    thid?: string,
    credentials: Map<string, T> = new Map()
  ): RequestCredential {
    const { formats, attachments } =
      CredentialHelpers.parseCredentials(credentials);
    const requestCredentialBody = createRequestCredentialBody(formats);
    return new RequestCredential(
      requestCredentialBody,
      attachments,
      fromDID,
      toDID,
      thid
    );
  }
}

export function createRequestCredentialBody(
  formats: CredentialFormat[],
  goalCode?: string,
  comment?: string
): RequestCredentialBody {
  return new RequestCredentialBody(formats, goalCode, comment);
}
