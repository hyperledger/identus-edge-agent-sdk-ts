import * as Domain from "../domain";
import { PeerDID } from "../peer-did/PeerDID";
import { AnonCredsCredential, AnonCredsRecoveryId } from "../pollux/models/AnonCredsVerifiableCredential";
import { JWTCredential, JWTVerifiableCredentialRecoveryId } from "../pollux/models/JWTVerifiableCredential";

export namespace Pluto {
  // Stored - must have an id coming out of storage
  export type Stored<T extends Domain.Pluto.Storable> = Omit<T, "uuid"> & Required<Domain.Pluto.Storable>;


  // Query object - use properties from the stored Type
  // AND object properties
  // OR different objects
  export type Query<T extends Domain.Pluto.Storable> = Partial<Stored<T>> | Partial<Stored<T>>[];


  /** Storables **/

  export interface Credential extends Domain.Pluto.Storable {
    recoveryId: string;
    dataJson: string;

    issuer?: string;
    subject?: string;
    credentialCreated?: string;
    credentialUpdated?: string;
    credentialSchema?: string;
    validUntil?: string;
    revoked?: boolean;
    // availableClaims?: string[];
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
    alias?: string;
  }

  // uses Keys instead
  // export interface LinkSecret extends Domain.Pluto.Storable {
  //   name: string;
  //   value: string;
  // }

  export interface Message extends Domain.Pluto.Storable {
    dataJson: string;

    id: string;
    createdTime: number;
    thid?: string;
    piuri: string;
    // Q: these are DIDs - should we normalize?
    from?: string;
    to?: string;
    isReceived: number;
  }

  export interface StorableKey extends Domain.Pluto.Storable, Domain.StorableKey {
    name?: string;
    // curve: string; - handled by restorationId
  }


  /** Relationships **/

  // define the relationship between DIDs and Keys
  // many to many
  export interface linkDIDKey extends Domain.Pluto.Storable {
    didId: string;
    keyId: string;
  }

  export interface linkedDIDKey {
    linkId: string;
    did: Stored<DID>;
    key: Stored<StorableKey>;
  }

  // DIDPair or DIDs?
  export interface linkDIDPair extends Domain.Pluto.Storable {
    hostId: string;
    targetId: string;
    alias?: string;
  }

  export interface linkedDIDPair {
    linkId: string;
    hostDID: Stored<DID>;
    targetDID: Stored<DID>;
    alias?: string;
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
    hostDID: Stored<DID>;
    routingDID: Stored<DID>;
    mediatorDID: Stored<DID>;
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
   *   - (get/store) (Domain name Pluralized) ie getCredentials
   * 
   * - formalize property naming convention
   *   - dataJson always used for JSON.stringified objects
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


    getMessages(query?: Query<Message>): Promise<Stored<Message>[]>;
    storeMessages(messages: Message[]): Promise<Stored<Message>[]>;


    getDIDs(query?: Query<DID>): Promise<Stored<DID>[]>;
    storeDIDs(dids: DID[]): Promise<Stored<DID>[]>;


    getKeys(query?: Query<StorableKey>): Promise<Stored<StorableKey>[]>;
    storeKeys(keys: StorableKey[]): Promise<Stored<StorableKey>[]>;

    // Mediators are just 3 DIDs?
    // also stored in memory of BasicMediationHandler
    linkMediatorDIDs(link: linkMediatorDIDs): Promise<Stored<linkMediatorDIDs>>;
    getLinkedMediatorDIDs(query?: Query<linkMediatorDIDs>): Promise<linkedMediatorDIDs[]>;


    // DIDPair is just two DIDs that have been linked (because of DIDComm connection etc)
    // DIDPair - has a name, is it necessary?
    linkDIDs(link: linkDIDPair): Promise<Stored<linkDIDPair>>;
    getLinkedDIDs(query?: Query<linkDIDPair>): Promise<linkedDIDPair[]>;


    linkDIDKey(link: linkDIDKey): Promise<Stored<linkDIDKey>>;
    getLinkedDIDKey(query?: Query<linkDIDKey>): Promise<linkedDIDKey[]>;
  }
}


/**
 * Pluto keeps Domain types and allows user to handle storage
 */
export class Pluto implements Domain.Pluto {
  constructor(
    private readonly driver: Pluto.StorageDriver,
    private readonly keyRestoration: Domain.KeyRestoration
  ) {}

  async start(): Promise<void> {
    // throw new Error("Method not implemented.");
  }


  /** Credentials **/

  async getAllCredentials(): Promise<Domain.Credential[]> {
    const result = await this.driver.getCredentials();
    const credentials = result.map(x => this.mapCredentialToDomain(x));

    return credentials;
  }

  async storeCredential(credential: Domain.Credential): Promise<void> {
    const item = this.mapCredentialToStorable(credential);
    this.driver.storeCredentials([item]);
  }

  private mapCredentialToStorable(credential: Domain.Credential): Pluto.Credential {
    if (!credential.isStorable()) {
      throw new Domain.PlutoError.CredentialNotStorable();
    }

    const item = credential.toStorable();

    return {
      uuid: credential.uuid,
      recoveryId: credential.recoveryId,
      dataJson: item.credentialData,

      issuer: item.issuer,
      subject: item.subject,
      credentialCreated: item.credentialCreated,
      credentialUpdated: item.credentialUpdated,
      credentialSchema: item.credentialSchema,
      validUntil: item.validUntil,
      revoked: item.revoked
    };
  }

  private mapCredentialToDomain(stored: Pluto.Stored<Pluto.Credential>): Domain.Credential {
    switch (stored.recoveryId) {
      case JWTVerifiableCredentialRecoveryId: {
        const credential = JWTCredential.fromJWT(stored, stored.dataJson);
        credential.uuid = stored.uuid;

        return credential;
      }
      case AnonCredsRecoveryId: {
        const json = JSON.parse(stored.dataJson);
        const credential = new AnonCredsCredential(json);
        credential.uuid = stored.uuid;

        return credential;
      }
    }

    throw new Domain.PlutoError.UnknownCredentialTypeError();
  }


  /** Credential Metadata **/

  async storeCredentialMetadata(metadata: Domain.Anoncreds.CredentialRequestMeta, alias: string): Promise<void> {
    this.driver.storeCredentialMetadata({
      name: alias,
      dataJson: JSON.stringify(metadata),
    });
  }

  // Q: name change - fetch doesn't align, should be get
  async fetchCredentialMetadata(name: string): Promise<Domain.Anoncreds.CredentialRequestMeta | null> {
    const stored = await this.driver.getCredentialMetadata({ name });
    const item = this.onlyOne(stored);
    const json = JSON.parse(item.dataJson);

    // TODO: validate
    return json as Domain.Anoncreds.CredentialRequestMeta;
  }


  /** LinkSecret **/

  async getLinkSecret(name?: string): Promise<string | null> {
    const items = await this.driver.getKeys({ recoveryId: "linkSecret", name });
    const item = this.onlyOne(items);

    const value = Buffer.from(item.raw).toString();
    return value;
  }

  async storeLinkSecret(secret: string, name: string): Promise<void> {
    this.driver.storeKeys([{
      recoveryId: "linkSecret",
      raw: Buffer.from(secret),
      name: name
    }]);
  }


  /** PrivateKeys **/

  async storePrivateKeys(privateKey: Domain.PrivateKey): Promise<void> {
    const item = this.mapPrivateKeyToStorable(privateKey);
    await this.driver.storeKeys([item]);
  }

  async getDIDPrivateKeysByDID(did: Domain.DID): Promise<Domain.PrivateKey[]> {
    const didId = await this.getDIDUUID(did);
    const result = await this.driver.getLinkedDIDKey({ didId });
    const keys = result.map(x => this.keyRestoration.restorePrivateKey(x.key));

    return keys;
  }

  private async getDIDUUID(did: Domain.DID): Promise<string> {
    if (typeof did.uuid === "string") return did.uuid;

    const result = await this.driver.getDIDs(did);
    const item = this.onlyOne(result);

    return item.uuid;
  }

  private mapPrivateKeyToStorable(key: Domain.PrivateKey): Pluto.StorableKey {
    if (!key.isStorable()) {
      throw new Domain.PlutoError.PrivateKeyNotStorable();
    }

    return {
      uuid: key.uuid,
      recoveryId: key.recoveryId,
      raw: key.raw,
      index: key.index
    };
  }

  private mapKeyToDomain(item: Pluto.StorableKey): Domain.Key {
    return this.keyRestoration.restorePrivateKey(item);
  }


  /** DIDs **/

  async storePrismDID(
    did: Domain.DID,
    // TODO
    keyPathIndex: number,
    privateKey: Domain.PrivateKey,
    metaId: string | null,
    alias?: string
  ): Promise<void> {
    const storedDids = await this.driver.storeDIDs([{ ...did, alias }]);
    const storedKeys = await this.driver.storeKeys([this.mapPrivateKeyToStorable(privateKey)]);

    const storedDid = this.onlyOne(storedDids);
    const storedKey = this.onlyOne(storedKeys);

    did.uuid = storedDid.uuid;
    privateKey.uuid = storedKey.uuid;

    await this.driver.linkDIDKey({
      didId: storedDid.uuid,
      keyId: storedKey.uuid
    });
  }

  async getPrismDID(didId: string) {
    const links = await this.driver.getLinkedDIDKey({ didId });
    const link = this.onlyOne(links);
    const did = this.mapDIDToDomain(link.did);

    return new Domain.PrismDIDInfo(did, link.key.index, link.did.alias);
  }

  async getAllPrismDIDs(): Promise<Domain.PrismDIDInfo[]> {
    const storedDids = await this.driver.getDIDs({ method: "prism" });
    const links = await this.driver.getLinkedDIDKey(storedDids.map(x => ({ uuid: x.uuid })));

    const prismDids = storedDids.map(item => {
      const link = links.find(x => x.did.uuid === item.uuid);
      const did = this.mapDIDToDomain(item);

      return new Domain.PrismDIDInfo(did, link?.key.index, item.alias);
    });

    return prismDids;
  }

  // Q: can we remove DIDInfo - replace with PrismDID?
  async getDIDInfoByDID(did: Domain.DID): Promise<Domain.PrismDIDInfo | null> {
    const didId = await this.getDIDUUID(did);
    const links = await this.driver.getLinkedDIDKey({ didId });

    if (links.length > 0) {
      const index = this.getLatestIndex(links);
      const alias = links.at(0)?.did.alias;
      const didInfo = new Domain.PrismDIDInfo(did, index, alias);

      return didInfo;
    }

    return null;
  }

  async getDIDInfoByAlias(alias: string): Promise<Domain.PrismDIDInfo[]> {
    const dids = await this.driver.getDIDs({ alias });
    const links = await this.driver.getLinkedDIDKey(
      dids.map(x => ({ didId: x.uuid }))
    );

    const didInfos = dids.map(did => {
      const filtered = links.filter(x => x.did.uuid === did.uuid);
      const index = this.getLatestIndex(filtered);
      const didInfo = new Domain.PrismDIDInfo(this.mapDIDToDomain(did), index, alias);

      return didInfo;
    }, []);

    return didInfos;
  }

  // Q: does this belong in Pluto?
  async getPrismLastKeyPathIndex(): Promise<number> {
    const dids = await this.driver.getDIDs({ method: "prism" });
    const links = await this.driver.getLinkedDIDKey(
      dids.map(x => ({ didId: x.uuid }))
    );
    const keyPathIndex = this.getLatestIndex(links);

    return keyPathIndex;
  }

  private getLatestIndex(links: Pluto.linkedDIDKey[]): number {
    const indexes = links.map(x => x.key.index ?? 0);
    const keyPathIndex = Math.max(0, ...indexes);

    return keyPathIndex;
  }

  // private mapToPrismDID(): Domain.PrismDIDInfo {}

  // Q: Domain.PeerDID
  async storePeerDID(did: Domain.DID, privateKeys: Domain.PrivateKey[]): Promise<void> {
    const storedDids = await this.driver.storeDIDs([did]);
    const storedDid = this.onlyOne(storedDids);
    const storedKeys = await this.driver.storeKeys(
      privateKeys.map(x => this.mapPrivateKeyToStorable(x))
    );

    storedKeys.forEach(x => this.driver.linkDIDKey({
      didId: storedDid.uuid,
      keyId: x.uuid
    }));
  }

  async getAllPeerDIDs(): Promise<PeerDID[]> {
    const storedDids = await this.driver.getDIDs({ method: "peer" });
    const links = await this.driver.getLinkedDIDKey(storedDids.map(x => ({ didId: x.uuid })));

    const peerDids = storedDids.map(did => {
      const keys = links.filter(x => x.did.uuid === did.uuid).map(x => x.key);

      const domainKeys = keys.map(x => this.mapKeyToDomain(x))
        .filter((x): x is Domain.PrivateKey => x instanceof Domain.PrivateKey);

      const peerDid = new PeerDID(
        this.mapDIDToDomain(did),
        // TODO: remove this when PeerDIDs are updated to use PrivateKey
        domainKeys.map(x => ({
          keyCurve: Domain.getKeyCurveByNameAndIndex(x.curve, x.index),
          value: x.getEncoded()
        }))
      );

      return peerDid;
    });

    return peerDids;
  }


  async storeDIDPair(host: Domain.DID, receiver: Domain.DID, name: string): Promise<void> {
    const stored = await this.driver.storeDIDs([host, receiver]);

    this.driver.linkDIDs({
      alias: name,
      hostId: stored.at(0)?.uuid!,
      targetId: stored.at(1)?.uuid!
    });
  }

  async getAllDidPairs(): Promise<Domain.DIDPair[]> {
    const items = await this.driver.getLinkedDIDs();
    const didPairs = items.map(x => this.mapDIDPairToDomain(x));

    return didPairs;
  }

  async getPairByDID(did: Domain.DID): Promise<Domain.DIDPair | null> {
    const didId = await this.getDIDUUID(did);
    const items = await this.driver.getLinkedDIDs([{ hostId: didId }, { targetId: didId }]);
    const item = this.onlyOne(items);
    const didPair = this.mapDIDPairToDomain(item);

    return didPair;
  }

  async getPairByName(alias: string): Promise<Domain.DIDPair | null> {
    // const didId = await this.getDIDUUID(did);
    const items = await this.driver.getLinkedDIDs({ alias });
    const item = this.onlyOne(items);
    const didPair = this.mapDIDPairToDomain(item);

    return didPair;
  }

  private mapDIDPairToDomain(item: Pluto.linkedDIDPair): Domain.DIDPair {
    const didPair = new Domain.DIDPair(
      this.mapDIDToDomain(item.hostDID),
      this.mapDIDToDomain(item.targetDID),
      item.alias ?? ""
    );

    return didPair;
  }


  private mapDIDToDomain(item: Pluto.Stored<Pluto.DID>): Domain.DID {
    const did = Domain.DID.from(item);
    did.uuid = item.uuid;

    return did;
  }

  private mapDIDToStorable(did: Domain.DID): Pluto.DID {
    return {
      uuid: did.uuid,
      method: did.method,
      methodId: did.methodId,
      schema: did.schema,
    };
  }


  /** Messages **/
  async storeMessage(message: Domain.Message): Promise<void> {
    return await this.storeMessages([message]);
  }

  async storeMessages(messages: Domain.Message[]): Promise<void> {
    await this.driver.storeMessages(messages.map(x => this.mapMessageToStorable(x)));
  }

  async getMessage(id: string): Promise<Domain.Message | null> {
    const stored = await this.driver.getMessages({ id });
    const item = this.onlyOne(stored);

    return this.mapMessageToDomain(item);
  }

  async getAllMessages(): Promise<Domain.Message[]> {
    const stored = await this.driver.getMessages();
    const mapped = stored.map(x => this.mapMessageToDomain(x));
    return mapped;
  }

  private mapMessageToDomain(item: Pluto.Stored<Pluto.Message>): Domain.Message {
    const msg = Domain.Message.fromJson(item.dataJson);
    msg.uuid = item.uuid;
    return msg;
  }

  private mapMessageToStorable(msg: Domain.Message): Pluto.Message {
    const msgJson = {
      id: msg.id,
      body: msg.body,
      piuri: msg.piuri,
      from: msg.from?.toString(),
      to: msg.to?.toString(),
      thid: msg.thid,
      pthid: msg.pthid,
      createdTime: Number(msg.createdTime),
      expiresTime: Number(msg.expiresTimePlus),
      attachments: msg.attachments,
      ack: msg.ack,
      direction: msg.direction,
      extraHeaders: msg.extraHeaders,
      fromPrior: msg.fromPrior,
    };

    return {
      uuid: msg.uuid,
      dataJson: JSON.stringify(msgJson),
      id: msg.id,
      createdTime: Number(msg.createdTime),
      from: msg.from?.toString(),
      isReceived: msg.direction,
      thid: msg.thid,
      to: msg.to?.toString(),
      piuri: msg.piuri,
    };
  }


  /** Mediators **/

  async getAllMediators(): Promise<Domain.Mediator[]> {
    const stored = await this.driver.getLinkedMediatorDIDs();

    return stored.map<Domain.Mediator>(x => ({
      hostDID: Domain.DID.from(x.hostDID),
      mediatorDID: Domain.DID.from(x.mediatorDID),
      routingDID: Domain.DID.from(x.routingDID),
    }));
  }

  // Q: Mediator type instead of 3 dids 
  async storeMediator(mediator: Domain.DID, host: Domain.DID, routing: Domain.DID): Promise<void> {
    const stored = await this.driver.storeDIDs([mediator, host, routing]);

    this.driver.linkMediatorDIDs({
      mediatorId: stored.at(0)?.uuid!,
      hostId: stored.at(1)?.uuid!,
      routingId: stored.at(2)?.uuid!
    });
  }

  private onlyOne<T>(arr: T[]): T {
    const item = arr.at(0);
    if (!item || arr.length !== 1) throw new Error("something wrong");

    return item;
  }
}