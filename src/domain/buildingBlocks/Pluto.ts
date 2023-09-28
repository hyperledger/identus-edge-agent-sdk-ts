import { DID } from "../models";
import { DIDPair } from "../models/DIDPair";
import { PrivateKey } from "../models";
import { Mediator } from "../models/Mediator";
import { Message } from "../models/Message";
import { PeerDID } from "../models/PeerDID";
import { PrismDIDInfo } from "../models/PrismDIDInfo";
import { Credential } from "../models/Credential";
import { Anoncreds } from "../models/Anoncreds";

/**
 * Pluto is a storage interface describing storage requirements of the edge agents
 * which will be implemented using this SDK. Implement this interface using your
 * preferred underlying storage technology, most appropriate for your use case.
 *
 */
export interface Pluto {
  storeCredentialMetadata(
    metadata: Anoncreds.CredentialRequestMeta,
    linkSecret: Anoncreds.LinkSecret
  ): Promise<void>;

  fetchCredentialMetadata(
    linkSecretName: string
  ): Promise<Anoncreds.CredentialRequestMeta | null>;

  start(): Promise<void>;

  /**
   * Store a PRISM DID and its private key with given metadata.
   */
  storePrismDID(
    did: DID,
    keyPathIndex: number,
    privateKey: PrivateKey,
    privateKeyMetaId: string | null,
    alias?: string
  ): Promise<void>;

  /**
   * Store a Peer DID and an array of its privateKeys.
   */
  storePeerDID(did: DID, privateKeys: Array<PrivateKey>): Promise<void>;

  /**
   * Store a named pair of DIDs representing a DIDComm connection.
   */
  storeDIDPair(host: DID, receiver: DID, name: string): Promise<void>;

  /**
   * Store a DIDComm message.
   */
  storeMessage(message: Message): Promise<void>;

  /**
   * Store an array of DIDComm messages
   */
  storeMessages(messages: Array<Message>): Promise<void>;

  /**
   * Store a list of private keys with its metadata and a reference to the DID it belongs to.
   */
  storePrivateKeys(
    privateKey: PrivateKey,
    did: DID,
    keyPathIndex: number,
    metaId: string | null
  ): Promise<void>;

  /**
   * Store a mediator information.
   */
  storeMediator(mediator: DID, host: DID, routing: DID): Promise<void>;

  storeCredential(credential: Credential): Promise<void>;

  /**
   * Retrieve all stored PRISM DIDs.
   */
  getAllPrismDIDs(): Promise<PrismDIDInfo[]>;

  /**
   * Retrieve DID information for a given DID.
   */
  getDIDInfoByDID(did: DID): Promise<PrismDIDInfo | null>;

  /**
   * Retrieve DID information for a given DID alias.
   */
  getDIDInfoByAlias(alias: string): Promise<PrismDIDInfo[]>;

  /**
   * Retrieve a PRISM DID key path index for a given DID.
   */
  getPrismDIDKeyPathIndex(did: DID): Promise<number | null>;

  /**
   * Get the last used PRISM key path index.
   */
  getPrismLastKeyPathIndex(): Promise<number>;

  /**
   * Retrieve all stored Peer DIDs.
   */
  getAllPeerDIDs(): Promise<Array<PeerDID>>;

  /**
   * Retrieve available private keys for a given DID.
   */
  getDIDPrivateKeysByDID(did: DID): Promise<Array<PrivateKey>>;

  /**
   * Retrieve private key for a given key ID.
   */
  getDIDPrivateKeyByID(id: string): Promise<PrivateKey | null>;

  /**
   * Retrieve all stored DID pairs (DIDComm connections).
   */
  getAllDidPairs(): Promise<Array<DIDPair>>;

  /**
   * Retrieve a DID pair containing a given DID as either host or receiver.
   */
  getPairByDID(did: DID): Promise<DIDPair | null>;

  /**
   * Retrieve a DID pair by a given pair name.
   */
  getPairByName(name: string): Promise<DIDPair | null>;

  /**
   * Retrieve all stored DIDComm messages.
   */
  getAllMessages(): Promise<Array<Message>>;

  /**
   * Retrieve all stored DIDComm messages, received from or sent to a given DID
   */
  getAllMessagesByDID(did: DID): Promise<Array<Message>>;

  /**
   * Retrieve all stored, sent DIDComm messages.
   */
  getAllMessagesSent(): Promise<Array<Message>>;

  /**
   * Retrieve all stored, received DIDComm messages.
   */
  getAllMessagesReceived(): Promise<Array<Message>>;

  /**
   * Retrieve all stored DIDComm messages, sent to a given DID.
   */
  getAllMessagesSentTo(did: DID): Promise<Array<Message>>;

  /**
   * Retrieve all stored DIDComm messages, received from a given DID.
   */
  getAllMessagesReceivedFrom(did: DID): Promise<Array<Message>>;

  /**
   * Retrieve all stored DIDComm messages with given message type, and
   * optionally, related to a given DID. "Related" means that message should
   * contain a given DID in either "from" or "to" field.
   */
  getAllMessagesOfType(
    type: string,
    relatedWithDID?: DID
  ): Promise<Array<Message>>;

  /**
   * Retrieve all DIDComm messages containing given "from" AND "to" DIDs.
   */
  getAllMessagesByFromToDID(from: DID, to: DID): Promise<Array<Message>>;

  /**
   * Retrieve a DIDComm message by ID.
   */
  getMessage(id: string): Promise<Message | null>;

  /**
   * Retrieve all stored mediators.
   */
  getAllMediators(): Promise<Array<Mediator>>;

  getAllCredentials(): Promise<Array<Credential>>;

  getLinkSecret(linkSecretName?: string): Promise<Anoncreds.LinkSecret | null>;

  storeLinkSecret(
    linkSecret: Anoncreds.LinkSecret,
    linkSecretName: string
  ): Promise<void>;
}
