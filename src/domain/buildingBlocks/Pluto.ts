import { CredentialMetadata, DID, LinkSecret } from "../models";
import { DIDPair } from "../models/DIDPair";
import { PrivateKey } from "../models";
import { Mediator } from "../models/Mediator";
import { Message } from "../models/Message";
import { PrismDIDInfo } from "../models/PrismDIDInfo";
import { Credential } from "../models/Credential";
import { PeerDID } from "../../peer-did/PeerDID";

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
    uuid?: string;
  }
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
  start(): Promise<void>;

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
   * Store a PRISM DID and its private key with given metadata.
   */
  storePrismDID(
    did: DID,
    privateKey: PrivateKey,
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
  storeMediator(mediator: Mediator): Promise<void>;

  /**
   * Store a Credential into the Database
   */
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
}
