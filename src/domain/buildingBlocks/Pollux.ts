import { CredentialType, Message } from "../models";
import { Anoncreds } from "../models/Anoncreds";
import { Credential, CredentialRequestOptions } from "../models/Credential";

type CredentialRequestTuple<
  T1 = Anoncreds.CredentialRequest,
  T2 = Anoncreds.CredentialRequestMeta
> = [T1, T2];

export interface Pollux {
  parseCredential: (
    credentialBuffer: Uint8Array,
    options?: { type: CredentialType; [name: string]: any }
  ) => Promise<Credential>;
  processJWTCredential(
    offer: Message,
    options: CredentialRequestOptions
  ): Promise<string>;
  processAnonCredsCredential(
    offer: Message,
    options: CredentialRequestOptions
  ): Promise<CredentialRequestTuple>;
  extractCredentialFormatFromMessage(message: Message): CredentialType;
}
