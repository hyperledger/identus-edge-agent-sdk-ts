import { DID, NullableType, PrivateKey } from "../models";
import { DIDPair } from "../models/DIDPair";
import { Mediator } from "../models/Mediator";
import { Message } from "../models/Message";
import { PeerDID } from "../models/PeerDID";
import { PrismDIDInfo } from "../models/PrismDIDInfo";
import { VerifiableCredential } from "../models/VerifiableCredential";

export default interface Pluto {
  start(): Promise<any>;

  storePrismDID(
    did: DID,
    keyPathIndex: number,
    alias?: NullableType<string>
  ): any;

  storePeerDID(did: DID, privateKeys: Array<PrivateKey>): any;

  storeDIDPair(host: DID, receiver: DID, name: string): any;

  storeMessage(message: Message): any;

  storeMessages(messages: Array<Message>): any;

  storePrivateKeys(
    privateKey: PrivateKey,
    did: DID,
    keyPathIndex: number,
    metaId: string | null
  ): any;

  storeMediator(mediator: DID, host: DID, routing: DID): any;

  storeCredential(credential: VerifiableCredential): any;

  getAllPrismDIDs(): Array<PrismDIDInfo>;

  getDIDInfoByDID(did: DID): PrismDIDInfo | null;

  getDIDInfoByAlias(alias: string): Array<PrismDIDInfo>;

  getPrismDIDKeyPathIndex(did: DID): number | null;

  getPrismLastKeyPathIndex(): number;

  getAllPeerDIDs(): Array<PeerDID>;

  getDIDPrivateKeysByDID(did: DID): Array<PrivateKey> | null;

  getDIDPrivateKeyByID(id: string): PrivateKey | null;

  getAllDidPairs(): Array<DIDPair>;

  getPairByDID(did: DID): DIDPair | null;

  getPairByName(name: string): DIDPair | null;

  getAllMessages(): Array<Message>;

  getAllMessagesByDID(did: DID): Array<Message>;

  getAllMessagesSent(): Array<Message>;

  getAllMessagesReceived(): Array<Message>;

  getAllMessagesSentTo(did: DID): Array<Message>;

  getAllMessagesReceivedFrom(did: DID): Array<Message>;

  getAllMessagesOfType(type: string, relatedWithDID?: DID): Array<Message>;

  getAllMessagesByFromToDID(from: DID, to: DID): Array<Message>;

  getMessage(id: string): Message | null;

  getAllMediators(): Array<Mediator>;

  getAllCredentials(): Array<VerifiableCredential>;
}
