import { JsonString, Message } from "../models";
import { Credential, CredentialRequestOptions } from "../models/Credential";
export default interface Pollux {
  parseCredential: (
    base64UrlBuffer: Uint8Array,
    options?: { message: Message; [name: string]: any }
  ) => Credential;
  processCredentialRequest(
    offer: Message,
    options: CredentialRequestOptions
  ): Promise<string>;
}
/*
public protocol Pollux {
    func parseCredential(data: Data) -> Credential
    func restoreCredential(restorationIdentifier: String, credentialData: Data) -> Credential
    func restoreFromStorableCredential(storableCredential: StorableCredential) ->  Credential
}*/
