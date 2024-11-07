import { CredentialMetadata, DID, LinkSecret, PrismDID } from "../models";
import { DIDPair } from "../models/DIDPair";
import { PrivateKey } from "../models";
import { Mediator } from "../models/Mediator";
import { Message } from "../models/Message";
import { Credential } from "../models/Credential";
import { PeerDID } from "../../peer-did/PeerDID";
import { uuid } from "@stablelib/uuid";
import { Arrayable } from "../../utils";
import * as Backup from "../backup";

export namespace Pluto {
  /**
   * Storable
   * define properties a Domain object must implement to be compatible with Pluto
   */
  export interface Storable {
    /**
     * Universally Unique Identifier.
     * should be unique across all items.
     */
    uuid: string;
  }

  export const makeUUID = (): string => {
    return uuid();
  };
}

/**
 * Pluto is a storage interface describing storage requirements of the edge agents
 * which will be implemented using this SDK. Implement this interface using your
 * preferred underlying storage technology, most appropriate for your use case.
 */
export interface Pluto {
  /**
   * Pluto initialise function
   */
  start(options?: any): Promise<void>;

  /**
   * create a Backup object from the stored data
   */
  backup(): Promise<Backup.Schema>;

  /**
   * load the given data into the store
   * @param backup 
   */
  restore(backup: Backup.Schema): Promise<void>;

  /**
   * Store the Credential Metadata
   */
  storeCredentialMetadata(metadata: CredentialMetadata): Promise<void>;

  /**
   * Fetch the Credential Metadata by its name
   * @param name 
   */
  getCredentialMetadata(name: string): Promise<CredentialMetadata | null>;

  /**
   * Store a DID
   * with optional private key(s) and alias
   */
  storeDID(did: DID, keys?: Arrayable<PrivateKey>, alias?: string): Promise<void>;

  /**
   * Store a PRISM DID and its private key with given metadata.
   * @deprecated use storeDID instead
   */
  storePrismDID(did: DID, privateKey: PrivateKey, alias?: string): Promise<void>;

  /**
   * Store a Peer DID and an array of its privateKeys.
   * @deprecated use storeDID instead
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
  storePrivateKey(privateKey: PrivateKey): Promise<void>;

  /**
   * Store a mediator information.
   */
  storeMediator(mediator: Mediator): Promise<void>;

  /**
   * Store a Credential into the Database
   */
  storeCredential(credential: Credential): Promise<void>;

  /**
   * Retrieve all stored PRISM DIDs.
   */
  getAllPrismDIDs(): Promise<PrismDID[]>;

  /**
   * Retrieve all stored Peer DIDs.
   */
  getAllPeerDIDs(): Promise<Array<PeerDID>>;

  /**
   * Retrieve available private keys for a given DID.
   */
  getDIDPrivateKeysByDID(did: DID): Promise<Array<PrivateKey>>;

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
   * Retrieve a DIDComm message by ID.
   */
  getMessage(id: string): Promise<Message | null>;

  /**
   * Retrieve all stored mediators.
   */
  getAllMediators(): Promise<Array<Mediator>>;

  /**
   * Retrieve all the stored credentials
   */
  getAllCredentials(): Promise<Array<Credential>>;

  /**
   * Retrieve the stored link secret by its name
   */
  getLinkSecret(name?: string): Promise<LinkSecret | null>;

  /**
   * Store a new linkSecret
   */
  storeLinkSecret(linkSecret: LinkSecret): Promise<void>;

  /**
   * Revoke a Credential
   */
  revokeCredential(credential: Credential): Promise<void>;

  /**
   * Delete a previously stored messages
   */
  deleteMessage(uuid: string): Promise<void>;
}
