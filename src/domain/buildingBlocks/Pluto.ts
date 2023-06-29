import { DID, PrivateKey } from "../models";
import { StorableCredential } from "../models/Credential";
import { DIDPair } from "../models/DIDPair";
import { Mediator } from "../models/Mediator";
import { Message } from "../models/Message";
import { PeerDID } from "../models/PeerDID";
import { PrismDIDInfo } from "../models/PrismDIDInfo";
import { Credential } from "../models/Credential";

export default interface Pluto {
  start(): Promise<void>;

  storePrismDID(
    did: DID,
    keyPathIndex: number,
    privateKey: PrivateKey,
    privateKeyMetaId: string | null,
    alias?: string
  ): Promise<void>;

  storePeerDID(did: DID, privateKeys: Array<PrivateKey>): Promise<void>;

  storeDIDPair(host: DID, receiver: DID, name: string): Promise<void>;

  storeMessage(message: Message): Promise<void>;

  storeMessages(messages: Array<Message>): Promise<void>;

  storePrivateKeys(
    privateKey: PrivateKey,
    did: DID,
    keyPathIndex: number,
    metaId: string | null
  ): Promise<void>;

  storeMediator(mediator: DID, host: DID, routing: DID): Promise<void>;

  storeCredential(credential: Credential): Promise<void>;

  getAllPrismDIDs(): Promise<PrismDIDInfo[]>;

  getDIDInfoByDID(did: DID): Promise<PrismDIDInfo | null>;

  getDIDInfoByAlias(alias: string): Promise<PrismDIDInfo[]>;

  getPrismDIDKeyPathIndex(did: DID): Promise<number | null>;

  getPrismLastKeyPathIndex(): Promise<number>;

  getAllPeerDIDs(): Promise<Array<PeerDID>>;

  getDIDPrivateKeysByDID(did: DID): Promise<Array<PrivateKey>>;

  getDIDPrivateKeyByID(id: string): Promise<PrivateKey | null>;

  getAllDidPairs(): Promise<Array<DIDPair>>;

  getPairByDID(did: DID): Promise<DIDPair | null>;

  getPairByName(name: string): Promise<DIDPair | null>;

  getAllMessages(): Promise<Array<Message>>;

  getAllMessagesByDID(did: DID): Promise<Array<Message>>;

  getAllMessagesSent(): Promise<Array<Message>>;

  getAllMessagesReceived(): Promise<Array<Message>>;

  getAllMessagesSentTo(did: DID): Promise<Array<Message>>;

  getAllMessagesReceivedFrom(did: DID): Promise<Array<Message>>;

  getAllMessagesOfType(
    type: string,
    relatedWithDID?: DID
  ): Promise<Array<Message>>;

  getAllMessagesByFromToDID(from: DID, to: DID): Promise<Array<Message>>;

  getMessage(id: string): Promise<Message | null>;

  getAllMediators(): Promise<Array<Mediator>>;

  getAllCredentials(): Promise<Array<Credential>>;
}
