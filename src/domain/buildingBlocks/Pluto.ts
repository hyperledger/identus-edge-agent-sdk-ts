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
  /**
   * Store the AnonCreds Credential Metadata referencing its linkSecret name
   */
  storeCredentialMetadata(
    metadata: Anoncreds.CredentialRequestMeta,
    linkSecret: Anoncreds.LinkSecret
  ): Promise<void>;

  /**
   * Fetch the AnonCreds Credential Metadata by its linkSecret name
   */
  fetchCredentialMetadata(
    linkSecretName: string
  ): Promise<Anoncreds.CredentialRequestMeta | null>;

  /**
   * Pluto initialise function
   */
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
   * Store a mediator information.
   */
  storeMediator(mediator: DID, host: DID, routing: DID): Promise<void>;

  /**
   * Store a Credential into the Database
   */
  storeCredential(credential: Credential): Promise<void>;

  /**
   * Retrieve DID information for a given DID.
   */
  getDIDInfoByDID(did: DID): Promise<PrismDIDInfo | null>;

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
   * Retrieve all stored mediators.
   */
  getAllMediators(): Promise<Array<Mediator>>;

  /**
   * Retrieve all the stored credentials
   */
  getAllCredentials(): Promise<Array<Credential>>;

  /**
   * Retrieve the anoncreds stored link secret by its name
   */
  getLinkSecret(linkSecretName?: string): Promise<Anoncreds.LinkSecret | null>;

  /**
   * Store a new anoncreds linkSecret
   */
  storeLinkSecret(
    linkSecret: Anoncreds.LinkSecret,
    linkSecretName: string
  ): Promise<void>;
}
