import {DID, PrivateKey} from "../models";
import {DIDPair} from "../models/DIDPair";
import {Mediator} from "../models/Mediator";
import {Message} from "../models/Message";
import {PeerDID} from "../models/PeerDID";
import {PrismDIDInfo} from "../models/PrismDIDInfo";
import {VerifiableCredential} from "../models/VerifiableCredential";

export default interface Pluto {
  start(): Promise<void>;

  storePrismDID(did: DID, keyPathIndex: number, privateKey: PrivateKey, privateKeyMetaId: string | null, alias?: string): void;

  storePeerDID(did: DID, privateKeys: Array<PrivateKey>): void;

  storeDIDPair(host: DID, receiver: DID, name: string): void;

  storeMessage(message: Message): void;

  storeMessages(messages: Array<Message>): void;

  storePrivateKeys(
      privateKey: PrivateKey,
      did: DID,
      keyPathIndex: number,
      metaId: string | null
  ): void;

  storeMediator(mediator: DID, host: DID, routing: DID): void;

  storeCredential(credential: VerifiableCredential): void;

  getAllPrismDIDs(): Array<PrismDIDInfo> | Promise<Array<PrismDIDInfo>>;

  getDIDInfoByDID(did: DID): PrismDIDInfo | null | Promise<PrismDIDInfo | null>;

  getDIDInfoByAlias(alias: string): Array<PrismDIDInfo> | Promise<Array<PrismDIDInfo>>;

  getPrismDIDKeyPathIndex(did: DID): number | null | Promise<number | null>;

  getPrismLastKeyPathIndex(): number | Promise<number>;

  getAllPeerDIDs(): Array<PeerDID> | Promise<Array<PeerDID>>;

  getDIDPrivateKeysByDID(did: DID): Array<PrivateKey> | null | Promise<Array<PrivateKey>>;

  getDIDPrivateKeyByID(id: string): PrivateKey | null | Promise<PrivateKey | null>;

  getAllDidPairs(): Array<DIDPair> | Promise<Array<DIDPair>>;

  getPairByDID(did: DID): DIDPair | null | Promise<DIDPair | null>;

  getPairByName(name: string): DIDPair | null | Promise<DIDPair | null>;

  getAllMessages(): Array<Message> | Promise<Array<Message>>;

  getAllMessagesByDID(did: DID): Array<Message> | Promise<Array<Message>>;

  getAllMessagesSent(): Array<Message> | Promise<Array<Message>>;

  getAllMessagesReceived(): Array<Message> | Promise<Array<Message>>;

  getAllMessagesSentTo(did: DID): Array<Message> | Promise<Array<Message>>;

  getAllMessagesReceivedFrom(did: DID): Array<Message> | Promise<Array<Message>>;

  getAllMessagesOfType(type: string, relatedWithDID?: DID): Array<Message> | Promise<Array<Message>>;

  getAllMessagesByFromToDID(from: DID, to: DID): Array<Message> | Promise<Array<Message>>;

  getMessage(id: string): Message | null | Promise<Message | null>;

  getAllMediators(): Array<Mediator> | Promise<Array<Mediator>>;

  getAllCredentials(): Array<VerifiableCredential> | Promise<Array<VerifiableCredential>>;
}
