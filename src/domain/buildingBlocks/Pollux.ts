import { OfferCredential } from "../../prism-agent/protocols/issueCredential/OfferCredential";
import { RequestCredential } from "../../prism-agent/protocols/issueCredential/RequestCredential";
import { JsonString } from "../models";
import { Credential, StorableCredential } from "../models/Credential";
export default interface Pollux {
  parseCredential: (
    jsonEncoded: JsonString,
    options?: { [name: string]: string }
  ) => Credential;
  prepareRequestCredentialWithIssuer(
    offer: OfferCredential,
    options?: { [name: string]: string }
  ): Promise<RequestCredential>;
  restoreCredential: (
    restorationIdentifier: string,
    credentialData: Uint8Array
  ) => Credential;
  restoreFromStorableCredential: (
    storableCredential: StorableCredential
  ) => Credential;
}
/*
public protocol Pollux {
    func parseCredential(data: Data) -> Credential
    func restoreCredential(restorationIdentifier: String, credentialData: Data) -> Credential
    func restoreFromStorableCredential(storableCredential: StorableCredential) ->  Credential
}*/
