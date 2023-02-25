
import {default as PlutoInterface} from '../domain/buildingBlocks/Pluto'
import { DID, PrivateKey } from '../domain/models';
import { DIDPair } from '../domain/models/DIDPair';
import { Mediator } from '../domain/models/Mediator';
import { Message } from '../domain/models/Message';
import { PeerDID } from '../domain/models/PeerDID';
import { PrismDIDInfo } from '../domain/models/PrismDIDInfo';
import { VerifiableCredential } from '../domain/models/VerifiableCredential';

export default class Pluto implements PlutoInterface {
  start(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  storePrismDID(did: DID, keyPathIndex: Number, alias?: string | undefined) {
    throw new Error('Method not implemented.');
  }
  storePeerDID(did: DID, privateKeys: PrivateKey[]) {
    throw new Error('Method not implemented.');
  }
  storeDIDPair(host: DID, receiver: DID, name: string) {
    throw new Error('Method not implemented.');
  }
  storeMessage(message: Message) {
    throw new Error('Method not implemented.');
  }
  storeMessages(messages: Message[]) {
    throw new Error('Method not implemented.');
  }
  storePrivateKeys(privateKey: PrivateKey, did: DID, keyPathIndex: Number, metaId: string | null) {
    throw new Error('Method not implemented.');
  }
  storeMediator(mediator: DID, host: DID, routing: DID) {
    throw new Error('Method not implemented.');
  }
  storeCredential(credential: VerifiableCredential) {
    throw new Error('Method not implemented.');
  }
  getAllPrismDIDs(): PrismDIDInfo[] {
    throw new Error('Method not implemented.');
  }
  getDIDInfoByDID(did: DID): PrismDIDInfo | null {
    throw new Error('Method not implemented.');
  }
  getDIDInfoByAlias(alias: string): PrismDIDInfo[] {
    throw new Error('Method not implemented.');
  }
  getPrismDIDKeyPathIndex(did: DID): Number | null {
    throw new Error('Method not implemented.');
  }
  getPrismLastKeyPathIndex(): Number {
    throw new Error('Method not implemented.');
  }
  getAllPeerDIDs(): PeerDID[] {
    throw new Error('Method not implemented.');
  }
  getDIDPrivateKeysByDID(did: DID): PrivateKey[] | null {
    throw new Error('Method not implemented.');
  }
  getDIDPrivateKeyByID(id: string): PrivateKey | null {
    throw new Error('Method not implemented.');
  }
  getAllDidPairs(): DIDPair[] {
    throw new Error('Method not implemented.');
  }
  getPairByDID(did: DID): DIDPair | null {
    throw new Error('Method not implemented.');
  }
  getPairByName(name: string): DIDPair | null {
    throw new Error('Method not implemented.');
  }
  getAllMessages(): Message[] {
    throw new Error('Method not implemented.');
  }
  getAllMessagesByDID(did: DID): Message[] {
    throw new Error('Method not implemented.');
  }
  getAllMessagesSent(): Message[] {
    throw new Error('Method not implemented.');
  }
  getAllMessagesReceived(): Message[] {
    throw new Error('Method not implemented.');
  }
  getAllMessagesSentTo(did: DID): Message[] {
    throw new Error('Method not implemented.');
  }
  getAllMessagesReceivedFrom(did: DID): Message[] {
    throw new Error('Method not implemented.');
  }
  getAllMessagesOfType(type: string, relatedWithDID?: DID | undefined): Message[] {
    throw new Error('Method not implemented.');
  }
  getAllMessagesByFromToDID(from: DID, to: DID): Message[] {
    throw new Error('Method not implemented.');
  }
  getMessage(id: string): Message | null {
    throw new Error('Method not implemented.');
  }
  getAllMediators(): Mediator[] {
    throw new Error('Method not implemented.');
  }
  getAllCredentials(): VerifiableCredential[] {
    throw new Error('Method not implemented.');
  }

}
