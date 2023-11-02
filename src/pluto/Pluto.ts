import * as Domain from "../domain";
import { JWTCredential, JWTVerifiableCredentialRecoveryId } from "../pollux/models/JWTVerifiableCredential";

namespace _Pluto {
  // Stored - must have an id coming out of storage
  export type Stored<T extends Domain.Pluto.Storable> = Omit<T, "_id"> & {
    id: string;
  };

  // Query object - use properties from the stored Type
  // AND object properties
  // OR different objects
  export type Query<T> = Partial<T> | Partial<T>[];


  /** Storables **/

  export interface Credential extends Domain.Pluto.Storable {
    recoveryId: string;
    credentialData: string;
    issuer?: string;
    subject?: string;
    credentialCreated?: string;
    credentialUpdated?: string;
    credentialSchema?: string;
    validUntil?: string;
    revoked?: boolean;
    availableClaims?: string[];
  }

  // Q: is this Anoncreds only or could this be extended in future?
  export interface CredentialMetadata extends Domain.Pluto.Storable {
    name: string;
    // if Anoncreds only we shouldn't need to query any other data than `name` - so just stringify for ease
    dataJson: string;
  }

  export interface DID extends Domain.Pluto.Storable {
    schema: string;
    method: string;
    methodId: string;
  }

  export interface LinkSecret extends Domain.Pluto.Storable {
    name: string;
    value: string;
  }

  export interface Message extends Domain.Pluto.Storable {
    // dataJson = JSON.stringify(message);
    // createdTime = message.createdTime;
    // from = message.from?.toString() ?? "";
    // thid = message.thid;
    // to = message.to?.toString() ?? "";
    // type = message.piuri ?? null;
    // isReceived = message.direction;

  }

  export interface PrivateKey extends Domain.Pluto.Storable {
    raw: Uint8Array;
    curve: string;
    index?: number;
  }


  /** Links **/

  // define the link between DIDs and PrivateKeys
  // many to many
  export interface linkDIDPrivateKey extends Domain.Pluto.Storable {
    didId: string;
    keyId: string;
  }

  export interface linkedDIDPrivateKey {
    linkId: string;
    did: DID;
    privateKey: PrivateKey;
  }

  export interface linkDIDPair extends Domain.Pluto.Storable {
    name: string;
    hostId: string;
    targetId: string;
  }

  export interface linkMediatorDIDs extends Domain.Pluto.Storable {
    hostId: string;
    routingId: string;
    mediatorId: string;
  }

  // "linked" returns the underlying Models instead of the link item
  // allows for less db calls
  export interface linkedMediatorDIDs {
    linkId: string;
    hostDID: DID;
    routingDID: DID;
    mediatorDID: DID;
  }

  /**
   * StorageDriver handles low level storable types
   * Allows us to:
   *   - implement Pluto with our logic and error handling
   *   - condense functions ie (storePrismDid + storePeerDid > storeDID)
   *   - create separation between Domain and Storage types
   *      Pluto always has Domain Type
   *      StorableDriver always has "Storable" Type (json object with id)
   *     ? do we need storage details (id, etc) to persist? (for updates etc?)
   * 
   * lesser breaking update (Pluto interface can keep same Types as current)
   * 
   * ??? Pluto Repository Pattern ???
   *    ??? doesn't have to be enforced with Interface, can just be useful helper 
   * 
   * 
   * Notes:
   * - formalize fn naming convention
   *   (get/store) (Domain name Pluralized) ie getCredentials
   * 
   *   StorageDriver only handle multiple, saves on making two functions for saving any type
   *     all Gets return arrays based on Query object
   *     all Stores take arrays and return arrays
   *     ? should order be important ?
   * 
   * - define LinkTable structure
   *   - getters return underlying items not link model
   * 
   * Pluto can handle syntactic sugar
   *   - accept 1 or multiple items
   *   - handle logic and concepts
   * ? should every data type have normalized functions, getOne, getMany, store, etc ?
   *   
   */
  export interface StorageDriver {
    getCredentials(query?: Query<Credential>): Promise<Stored<Credential>[]>;
    storeCredentials(credentials: Credential[]): Promise<Stored<Credential>[]>;


    getCredentialMetadata(query?: Query<CredentialMetadata>): Promise<CredentialMetadata[]>;
    storeCredentialMetadata(meta: CredentialMetadata): Promise<Stored<CredentialMetadata>>;


    getLinkSecret(query?: Query<LinkSecret>): Promise<Stored<LinkSecret>>;
    storeLinkSecret(linkSecret: LinkSecret): Promise<Stored<LinkSecret>>;


    getMessages(query?: Query<Message>): Promise<Stored<Message>[]>;
    storeMessages(messages: Message[]): Promise<Stored<Message>[]>;


    getDIDs(query?: Query<DID>): Promise<Stored<DID>[]>;
    storeDIDs(dids: DID[]): Promise<Stored<DID>[]>;


    getPrivateKeys(query?: Query<PrivateKey>): Promise<Stored<PrivateKey>[]>;
    storePrivateKeys(keys: PrivateKey[]): Promise<Stored<PrivateKey>[]>;

    // Mediators are just 3 DIDs?
    // also stored in memory of BasicMediationHandler
    // MediatorDID = Mediator
    // Host = CloudAgent
    // Routing = identifier returned from Mediator 
    linkMediatorDIDs(link: linkMediatorDIDs): Promise<Stored<linkMediatorDIDs>>;

    getLinkedMediatorDIDs(query?: Query<linkMediatorDIDs>): Promise<linkedMediatorDIDs[]>;

    // DIDPair is just two DIDs that have been linked (because of DIDComm connection etc)
    // DIDPair - has a name, is it necessary?
    linkDIDPair(link: linkDIDPair): Promise<Stored<linkDIDPair>>;

    linkDIDPrivateKey(link: linkDIDPrivateKey): Promise<Stored<linkDIDPrivateKey>>;

    getLinkedDIDPrivateKey(query?: Query<linkDIDPrivateKey>): Promise<linkedDIDPrivateKey[]>;
  }
}


/**
 * Pluto keeps Domain types and allows user to handle storage
 */
export class Pluto implements Domain.Pluto {
  constructor(private readonly driver: _Pluto.StorageDriver) {}

  start(): Promise<void> {
    throw new Error("Method not implemented.");
  }


  /** Credentials **/

  async getAllCredentials(): Promise<Domain.Credential[]> {
    const credentials = await this.driver.getCredentials();

    return credentials.map(x => this.mapCredentialToDomain(x));
  }

  async storeCredential(credential: Domain.Credential): Promise<void> {
    if (credential.isStorable()) {
      this.driver.storeCredentials([credential.toStorable()]);
    }

    throw new Domain.PlutoError.UnknownCredentialTypeError();
  }

  private mapCredentialToDomain(stored: _Pluto.Stored<_Pluto.Credential>): Domain.Credential {
    switch (stored.recoveryId) {
      case JWTVerifiableCredentialRecoveryId:
        const cred = JWTCredential.fromJWT(stored, stored.credentialData);
        cred._id = stored.id;

        return cred;
      // etc
    }

    throw new Error("unmatched");
  }


  /** Credential Metadata **/

  // TODO: either this shouldn't be called linkSecret as we use Message.thid, or we should fix what we pass in
  async storeCredentialMetadata(metadata: Domain.Anoncreds.CredentialRequestMeta, linkSecretName: string): Promise<void> {
    this.driver.storeCredentialMetadata({
      name: linkSecretName,
      dataJson: JSON.stringify(metadata),
    });
  }

  // Q: this shouldn't be linkSecretName - its the Message.thid
  // Q: name change - fetch doesn't align, should be get
  async fetchCredentialMetadata(linkSecretName: string): Promise<Domain.Anoncreds.CredentialRequestMeta | null> {
    const stored = await this.driver.getCredentialMetadata({ name: linkSecretName });
    const item = this.onlyOne(stored);
    const json = JSON.parse(item.dataJson);

    // Q: valdate parse
    return json as Domain.Anoncreds.CredentialRequestMeta;
  }


  /** LinkSecret **/

  async getLinkSecret(name?: string): Promise<string | null> {
    const item = await this.driver.getLinkSecret({ name });

    return item?.value ?? null;
  }

  async storeLinkSecret(linkSecret: string, linkSecretName: string): Promise<void> {
    this.driver.storeLinkSecret({
      name: linkSecretName,
      value: linkSecret
    });
  }


  /** PrivateKeys **/

  storePrivateKeys(privateKey: Domain.PrivateKey): Promise<void> {
    if (privateKey.isStorable()) {
      this.driver.storePrivateKeys([this.mapPrivateKeyToStorable(privateKey)]);
    }

    // throw some Domain.PlutoError
    throw new Error();
  }

  getDIDPrivateKeysByDID(did: Domain.DID): Promise<Domain.PrivateKey[]> {
    throw new Error("Method not implemented.");
  }

  private mapPrivateKeyToStorable(key: Domain.PrivateKey): _Pluto.PrivateKey {
    return {
      _id: key._id,
      curve: key.curve,
      raw: key.raw,
      index: Number.parseInt(key.index),
    };
  }


  /** DIDs **/

  async storePrismDID(did: Domain.DID, keyPathIndex: number, privateKey: Domain.PrivateKey, metaId: string | null, alias?: string): Promise<void> {
    const storedDids = await this.driver.storeDIDs([did]);
    const storedKeys = await this.driver.storePrivateKeys([this.mapPrivateKeyToStorable(privateKey)]);

    const storedDid = this.onlyOne(storedDids);
    const storedKey = this.onlyOne(storedKeys);

    await this.driver.linkDIDPrivateKey({
      didId: storedDid.id,
      keyId: storedKey.id
    });
  }

  async getPrismDID(didId: string) {
    const links = await this.driver.getLinkDIDPrivateKey({ didId });
    const link = this.onlyOne(links);

    const foundDids = await this.driver.getDIDs({ _id: didId });
    const didItem = this.onlyOne(foundDids);

    const foundKeys = await this.driver.getPrivateKeys({ _id: link.keyId });
    const key = this.onlyOne(foundKeys);

    const did = new Domain.DID(didItem.schema, didItem.method, didItem.methodId);
    did._id = didItem.id;

    return new Domain.PrismDIDInfo(did, key.index);
  }

  // Q: Domain.PeerDID
  async storePeerDID(peerDID: Domain.PeerDID): Promise<void> {
    const storedDids = await this.driver.storeDIDs([peerDID.did]);

    // Q: why is peerDID.privateKey not a PrivateKey?
    // const mapped = peerDID.privateKeys.map(x => this.mapPrivateKeyToStorable(x));
    // const stored = await this.driver.storePrivateKeys(mapped);
    const stored = await this.driver.storePrivateKeys(
      peerDID.privateKeys.map(x => ({
        curve: x.keyCurve.curve,
        index: x.keyCurve.index,
        raw: x.value,
      }))
    );

    stored.forEach(x => this.driver.linkDIDPrivateKey({
      didId: this.onlyOne(storedDids).id,
      keyId: x.id
    }));
  }

  async getAllPeerDIDs(): Promise<Domain.PeerDID[]> {
    const storedDids = await this.driver.getDIDs({ method: "peer" });
    const links = await this.driver.getLinkedDIDPrivateKey(storedDids.map(x => ({ _id: x.id })));

    const peerDids = storedDids.map(did => {
      const keys = links.filter(x => x.did._id === did.id).map(x => x.privateKey);

      const peerDid = new Domain.PeerDID(
        new Domain.DID(did.schema, did.method, did.methodId),
        keys.map(x => ({
          keyCurve: Domain.getKeyCurveByNameAndIndex(x.curve, x.index),
          value: x.raw
        }))
      );

      return peerDid;
    });

    return peerDids;
  }


  async storeDIDPair(host: Domain.DID, receiver: Domain.DID, name: string): Promise<void> {
    const stored = await this.driver.storeDIDs([host, receiver]);

    this.driver.linkDIDPair({
      name,
      hostId: stored.at(0)?.id!,
      targetId: stored.at(1)?.id!
    });
  }


  // Q: can we remove DIDInfo - replace with PrismDID?
  getDIDInfoByDID(did: Domain.DID): Promise<Domain.PrismDIDInfo | null> {
    throw new Error("Method not implemented.");
  }

  // Q: does this belong in Pluto?
  getPrismLastKeyPathIndex(): Promise<number> {
    throw new Error("Method not implemented.");
  }


  /** Messages **/

  storeMessages(messages: Domain.Message | Domain.Message[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getMessage(id: string): Promise<Domain.Message | null> {
    // Q: is Message.id ok to be DB.id ?
    const stored = await this.driver.getMessages({ _id: id });
    const item = this.onlyOne(stored);

    return this.mapMessageToDomain(item);
  }

  async getAllMessages(): Promise<Domain.Message[]> {
    const stored = await this.driver.getMessages();

    return stored.map(x => this.mapMessageToDomain(x));
  }

  private mapMessageToDomain(msg: _Pluto.Stored<_Pluto.Message>): Domain.Message {
    // TODO:
    return msg as any;
  }


  /** Mediators **/

  async getAllMediators(): Promise<Domain.Mediator[]> {
    const stored = await this.driver.getLinkedMediatorDIDs();

    return stored.map<Domain.Mediator>(x => ({
      hostDID: new Domain.DID(x.hostDID.schema, x.hostDID.method, x.hostDID.methodId),
      mediatorDID: new Domain.DID(x.mediatorDID.schema, x.mediatorDID.method, x.mediatorDID.methodId),
      routingDID: new Domain.DID(x.routingDID.schema, x.routingDID.method, x.routingDID.methodId),
    }));
  }

  // Q: Mediator type instead of 3 dids 
  async storeMediator(mediator: Domain.DID, host: Domain.DID, routing: Domain.DID): Promise<void> {
    const stored = await this.driver.storeDIDs([mediator, host, routing]);

    this.driver.linkMediatorDIDs({
      mediatorId: stored.at(0)?.id!,
      hostId: stored.at(1)?.id!,
      routingId: stored.at(2)?.id!
    });
  }

  private onlyOne<T>(arr: T[]): T {
    const item = arr.at(0);
    if (!item || arr.length !== 1) throw new Error("something wrong");

    return item;
  }
}