import * as Domain from "../domain";
import * as Models from "./models";
import { PeerDID } from "../peer-did/PeerDID";
import { repositoryFactory } from "./repositories";

/**
 * Pluto implementation
 * 
 * Structure:
 * - Pluto class is an orchestration layer
 * - Repositories handle mapping Domain <-> Storable Models
 * - Models suggest db structure
 * - Store abstracts db implementation
 * 
 * Pluto:
 * - always handles Domain classes
 * - manage relationships
 * - handle logic and concepts
 * - throw known Errors
 * - naming convention
 *   - (get/store) (Domain name Pluralized) ie getCredentials
 * 
 * Models:
 * - naming convention
 *   - alias for optional names
 *   - name for required identifiers
 *   - dataJson for JSON.stringified objects
 * 
 * Store:
 * - simplified interface
 * - crud interactions
 * - only use Models
 * 
 * 
 * Future:
 *  - versioning
 *  - migrations
 */
export namespace Pluto {
  export interface Store {
    /**
     * Run a query to fetch data from the Store
     * 
     * @param name Model name
     * @param selector either an object or array of objects with matchable properties
     * 
     * properties within an object will be AND'ed
     * different objects will be OR'd
     * 
     * @example
     * search for a model in TableOne with uuid and name
     * ```ts
     *   store.query("TableOne", { uuid: "1", name: "eg" })
     * ```
     * @example
     * search for models in TableOne with uuid of 1 or 2
     * ```ts
     *   store.query("TableOne", [{ uuid: "1" }, { uuid: "2" }])
     * ```
     * @example
     * search for all models in TableOne
     * ```ts
     *   store.query("TableOne", [])
     * ```
     * 
     * @returns relevant Models
     */
    query<T>(name: string, selector: Partial<T>[]): Promise<T[]>;

    /**
     * Persist new data in the Store.
     * 
     * Should return UUID of newly saved data as either:
     *   - standalone string
     *   - inside an object
     * 
     * @param name Model name
     * @param model object to save
     * @return {string | { uuid: string }} UUID value
     */
    insert(name: string, model: any): Promise<string | { uuid: string; }>;

    // update (table: string, model: Partial<T>): Promise<boolean>;
    // delete (table: string, id: string): Promise<boolean>;
  }
}

export class Pluto implements Domain.Pluto {
  private Repositories: ReturnType<typeof repositoryFactory>;

  constructor(
    private readonly store: Pluto.Store,
    private readonly keyRestoration: Domain.KeyRestoration
  ) {
    this.Repositories = repositoryFactory(store, keyRestoration);
  }

  async start(): Promise<void> {}


  async getAllCredentials(): Promise<Domain.Credential[]> {
    return this.Repositories.Credentials.get();
  }

  async storeCredential(credential: Domain.Credential): Promise<void> {
    await this.Repositories.Credentials.save(credential);
  }


  /** Credential Metadata **/

  async storeCredentialMetadata(metadata: Domain.CredentialMetadata): Promise<void> {
    await this.Repositories.CredentialMetadata.save(metadata);
  }

  async getCredentialMetadata(name: string): Promise<Domain.CredentialMetadata | undefined> {
    return await this.Repositories.CredentialMetadata.find({ name });
  }


  /** LinkSecret **/

  // TODO domain linksecret
  async getLinkSecret(name?: string): Promise<string | null> {
    const linkSecret = await this.Repositories.LinkSecrets.find({ alias: name });
    return linkSecret?.secret ?? null;
  }

  async storeLinkSecret(secret: string, name: string): Promise<void> {
    await this.Repositories.LinkSecrets.save({ name, secret });
  }


  /** PrivateKeys **/

  async storePrivateKeys(privateKey: Domain.PrivateKey): Promise<void> {
    await this.Repositories.Keys.save(privateKey);
  }

  async getDIDPrivateKeysByDID(did: Domain.DID): Promise<Domain.PrivateKey[]> {
    const didId = await this.getDIDUUID(did);
    const links = await this.Repositories.DIDKeyLinks.getModels({ didId });
    const keys = await this.Repositories.Keys.get(links.map(x => ({ uuid: x.keyId })));

    return keys;
  }

  private async getDIDUUID(did: Domain.DID): Promise<string> {
    if (typeof did.uuid === "string") return did.uuid;

    const result = await this.Repositories.DIDs.find(did);

    if (!result) {
      throw new Error("DID not found");
    }

    return result.uuid;
  }


  /** DIDs **/

  async storePrismDID(did: Domain.DID, privateKey: Domain.PrivateKey, alias?: string): Promise<void> {
    const didModel = await this.Repositories.DIDs.save(did, alias);
    const storedKey = await this.Repositories.Keys.save(privateKey);

    await this.Repositories.DIDKeyLinks.insert({
      alias,
      didId: didModel.uuid,
      keyId: storedKey.uuid
    });
  }

  // Q: can we remove DIDInfo - replace with PrismDID?
  async getPrismDID(didId: string) {
    const links = await this.Repositories.DIDKeyLinks.getModels({ didId });
    const link = this.onlyOne(links);
    const dids = await this.Repositories.DIDs.getModels({ uuid: link.didId });
    const did = this.onlyOne(dids);
    const key = await this.Repositories.Keys.byId(link.keyId);

    return new Domain.PrismDIDInfo(this.Repositories.DIDs.toDomain(did), key?.index, did.alias);
  }

  async getAllPrismDIDs(): Promise<Domain.PrismDIDInfo[]> {
    const dids = await this.Repositories.DIDs.getModels({ method: "prism" });
    const results = Promise.all(dids.map(x => this.getPrismDID(x.uuid)));

    return results;
  }

  async getDIDInfoByDID(did: Domain.DID): Promise<Domain.PrismDIDInfo | null> {
    const didId = await this.getDIDUUID(did);

    try {
      return this.getPrismDID(didId);
    }
    catch {
      return null;
    }
  }

  async getDIDInfoByAlias(alias: string): Promise<Domain.PrismDIDInfo[]> {
    const dids = await this.Repositories.DIDs.getModels({ alias });
    const results = Promise.all(dids.map(x => this.getPrismDID(x.uuid)));

    return results;
  }

  // Q: does this belong in Pluto? 
  // A: no move to Agent
  async getPrismLastKeyPathIndex(): Promise<number> {
    const dids = await this.Repositories.DIDs.getModels({ method: "prism" });
    const links = await this.Repositories.DIDKeyLinks.getModels(dids.map(x => ({ didId: x.uuid })));
    const keys = await this.Repositories.Keys.getModels(links.map(x => ({ uuid: x.keyId })));
    const indexes = keys.map(x => x.index ?? 0);
    const keyPathIndex = Math.max(0, ...indexes);

    return keyPathIndex;
  }

  async storePeerDID(did: Domain.DID, privateKeys: Domain.PrivateKey[]): Promise<void> {
    const storedDid = await this.Repositories.DIDs.save(did);
    const storedKeys = await Promise.all(privateKeys.map(x => this.Repositories.Keys.save(x)));

    await Promise.all(
      storedKeys.map(x => this.Repositories.DIDKeyLinks.insert({ didId: storedDid.uuid, keyId: x.uuid }))
    );
  }

  async getAllPeerDIDs(): Promise<PeerDID[]> {
    const allDids = await this.Repositories.DIDs.get({ method: "peer" });
    const allLinks = await this.Repositories.DIDKeyLinks.getModels(allDids.map(x => ({ didId: x.uuid })));
    const allKeys = await this.Repositories.Keys.get(allLinks.map(x => ({ uuid: x.keyId })));

    const peerDids = allDids.map(did => {
      const keyIds = allLinks.filter(x => x.didId === did.uuid).map(x => x.keyId);
      const keys = allKeys.filter(x => keyIds.includes(x.uuid));

      const peerDid = new PeerDID(
        did,
        // TODO: remove this when PeerDIDs are updated to use PrivateKey
        keys.map(x => ({
          keyCurve: Domain.getKeyCurveByNameAndIndex(x.curve, x.index),
          value: x.getEncoded()
        }))
      );

      return peerDid;
    });

    return peerDids;
  }


  /** Messages **/

  async storeMessage(message: Domain.Message): Promise<void> {
    await this.Repositories.Messages.save(message);
  }

  async storeMessages(messages: Domain.Message[]): Promise<void> {
    await Promise.all(messages.map(x => this.Repositories.Messages.save(x)));
  }

  async getMessage(id: string): Promise<Domain.Message | null> {
    return await this.Repositories.Messages.find({ id }) ?? null;
  }

  async getAllMessages(): Promise<Domain.Message[]> {
    return this.Repositories.Messages.get();
  }


  /** DID Pairs **/

  async storeDIDPair(host: Domain.DID, receiver: Domain.DID, alias: string): Promise<void> {
    const hostDID = await this.Repositories.DIDs.save(host);
    const targetDID = await this.Repositories.DIDs.save(receiver);

    await this.Repositories.DIDLinks.insert({
      alias,
      role: Models.DIDLink.role.pair,
      hostId: hostDID.uuid,
      targetId: targetDID.uuid
    });
  }

  async getAllDidPairs(): Promise<Domain.DIDPair[]> {
    const links = await this.Repositories.DIDLinks.getModels({ role: Models.DIDLink.role.pair });
    const didPairs = await Promise.all(links.map(x => this.mapDIDPairToDomain(x)));
    const filtered = didPairs.filter((x): x is Domain.DIDPair => x != null);

    return filtered;
  }

  async getPairByDID(did: Domain.DID): Promise<Domain.DIDPair | null> {
    const didId = await this.getDIDUUID(did);
    const links = await this.Repositories.DIDLinks.getModels([
      { role: Models.DIDLink.role.pair, hostId: didId },
      { role: Models.DIDLink.role.pair, targetId: didId }
    ]);

    // ?? this seems presumptuous? couldnt hostDID be re-used?
    const link = this.onlyOne(links);
    const didPair = this.mapDIDPairToDomain(link);

    return didPair;
  }

  async getPairByName(alias: string): Promise<Domain.DIDPair | null> {
    const links = await this.Repositories.DIDLinks.getModels({ alias, role: Models.DIDLink.role.pair });
    const link = this.onlyOne(links);
    const didPair = this.mapDIDPairToDomain(link);

    return didPair;
  }

  private async mapDIDPairToDomain(link: Models.DIDLink): Promise<Domain.DIDPair | null> {
    const hostDID = await this.Repositories.DIDs.byId(link.hostId);
    const targetDID = await this.Repositories.DIDs.byId(link.targetId);
    const alias = link.alias ?? "";

    if (!hostDID || !targetDID) {
      return null;
    }

    const didPair = new Domain.DIDPair(hostDID, targetDID, alias);
    return didPair;
  }


  /** Mediators **/

  async getAllMediators(): Promise<Domain.Mediator[]> {
    const links = await this.Repositories.DIDLinks.getModels([
      { role: Models.DIDLink.role.mediator },
      { role: Models.DIDLink.role.routing },
    ]);
    const hostIds = links.map(x => x.hostId).filter((x, i, s) => s.indexOf(x) === i);

    const result = await Promise.all(
      hostIds.map(async hostId => {
        const mediatorLink = links.find(x => x.hostId === hostId && x.role === Models.DIDLink.role.mediator);
        const routingLink = links.find(x => x.hostId === hostId && x.role === Models.DIDLink.role.routing);

        if (!mediatorLink || !routingLink) {
          throw new Error();
        }

        const hostDID = await this.Repositories.DIDs.byId(hostId);
        const mediatorDID = await this.Repositories.DIDs.byId(mediatorLink.targetId);
        const routingDID = await this.Repositories.DIDs.byId(routingLink.targetId);

        if (!hostDID || !mediatorDID || !routingDID) {
          throw new Error();
        }

        const domain: Domain.Mediator = { hostDID, mediatorDID, routingDID };
        return domain;
      })
    );

    return result;
  }

  // Q: Mediator type instead of 3 dids 
  async storeMediator(mediator: Domain.DID, host: Domain.DID, routing: Domain.DID): Promise<void> {
    const hostDID = await this.Repositories.DIDs.save(host);
    const mediatorDID = await this.Repositories.DIDs.save(mediator);
    const routingDID = await this.Repositories.DIDs.save(routing);

    await this.Repositories.DIDLinks.insert({
      role: Models.DIDLink.role.mediator,
      hostId: hostDID.uuid,
      targetId: mediatorDID.uuid
    });

    await this.Repositories.DIDLinks.insert({
      role: Models.DIDLink.role.routing,
      hostId: hostDID.uuid,
      targetId: routingDID.uuid
    });
  }

  private onlyOne<T>(arr: T[]): T {
    const item = arr.at(0);
    if (!item || arr.length !== 1) throw new Error("something wrong");

    return item;
  }
}