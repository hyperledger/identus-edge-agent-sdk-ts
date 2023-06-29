import { CredentialType, Message } from "../models";
import { Credential, CredentialRequestOptions } from "../models/Credential";
export interface Pollux {
  parseCredential: (
    credentialBuffer: Uint8Array,
    options?: { type: CredentialType; [name: string]: any }
  ) => Credential;
  processCredentialRequest(
    offer: Message,
    options: CredentialRequestOptions
  ): Promise<string>;
}
