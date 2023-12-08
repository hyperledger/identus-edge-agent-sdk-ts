/**
 * WARNING: Do not  use this pluto implementation, its inMemory and totally unprotected.
 * Look for other community inspired projects like "@pluto-encrypted/database"
 */
import * as SDK from "@atala/prism-wallet-sdk";

interface DIDRecord {
  did: SDK.Domain.DID;
  alias?: string;
}
interface KeyRecord {
  did: SDK.Domain.DID;
  keyPathIndex?: number;
  privateKey: SDK.Domain.PrivateKey;
  privateKeyMetaId?: string;
}
type DIDPairRecord = SDK.Domain.DIDPair;
interface MessageRecord {
  sourceType: "sent" | "received";
  message: SDK.Domain.Message;
}
type MediatorRecord = SDK.Domain.Mediator;
type CredentialRecord = SDK.Domain.Credential;

export class PlutoInMemory implements SDK.Domain.Pluto {
  _didStorage: Record<string, DIDRecord> = {};
  _keyStorage: Record<string, Array<KeyRecord>> = {};
  _didPairStorage: Array<DIDPairRecord> = [];
  _messageStorage: Array<MessageRecord> = [];
  _mediatorStorage: Array<MediatorRecord> = [];
  _credentialStorage: Array<CredentialRecord> = [];
  _linkSecrets: Record<string, string> = {};
  _requestMetadata: Record<string, SDK.Domain.Anoncreds.CredentialRequestMeta> = {};

  /**
   * no async setup for in-memory implementation
   */
  async start() { }

  async destroy() {
    this._didStorage = {};
    this._keyStorage = {};
    this._didPairStorage = [];
    this._messageStorage = [];
    this._mediatorStorage = [];
    this._credentialStorage = [];
  }

  async storePrismDID(
    did: SDK.Domain.DID,
    keyPathIndex: number,
    privateKey: SDK.Domain.PrivateKey,
    privateKeyMetaId: string | null,
    alias?: string
  ) {
    const didStr = did.toString();
    await this.storePrivateKeys(
      privateKey,
      did,
      keyPathIndex,
      privateKeyMetaId
    );
    this._didStorage[didStr] = {
      did,
      alias,
    };
  }

  async storePeerDID(did: SDK.Domain.DID, privateKeys: Array<SDK.Domain.PrivateKey>) {
    const didStr = did.toString();
    this._keyStorage[didStr] = privateKeys.map((privateKey) => ({
      did,
      privateKey,
      keyPathIndex: undefined,
      privateKeyMetaId: undefined,
    }));
    this._didStorage[didStr] = {
      did,
      alias: undefined,
    };
  }

  async storeDIDPair(host: SDK.Domain.DID, receiver: SDK.Domain.DID, name: string) {
    this._didPairStorage.push({ host, receiver, name });
  }

  async storeMessage(message: SDK.Domain.Message) {
    this._messageStorage.push({
      message,
      sourceType:
        message.direction === SDK.Domain.MessageDirection.SENT
          ? "sent"
          : "received",
    });
  }

  async storeMessages(messages: Array<SDK.Domain.Message>) {
    messages.forEach((message) => this.storeMessage(message));
  }

  async storePrivateKeys(
    privateKey: SDK.Domain.PrivateKey,
    did: SDK.Domain.DID,
    keyPathIndex: number,
    metaId: string | null
  ) {
    const didStr = did.toString();

    if (!this._keyStorage[didStr]) {
      this._keyStorage[didStr] = [];
    }

    this._keyStorage[didStr].push({
      did,
      privateKey,
      keyPathIndex,
      privateKeyMetaId: metaId || undefined,
    });
  }

  async storeMediator(
    mediator: SDK.Domain.DID,
    host: SDK.Domain.DID,
    routing: SDK.Domain.DID
  ) {
    this._mediatorStorage.push({
      mediatorDID: mediator,
      hostDID: host,
      routingDID: routing,
    });
  }

  async storeCredential(credential: SDK.Domain.Credential) {
    this._credentialStorage.push(credential);
  }

  async getAllPrismDIDs(): Promise<SDK.Domain.PrismDIDInfo[]> {
    return Object.values(this._didStorage)
      .filter((didRecord) => didRecord.did.method === "prism")
      .map((didRecord) => {
        const keyRecord = this._keyStorage[didRecord.did.toString()][0];
        return new SDK.Domain.PrismDIDInfo(
          didRecord.did,
          keyRecord.keyPathIndex || 0,
          didRecord.alias
        );
      });
  }

  async getDIDInfoByDID(did: SDK.Domain.DID): Promise<SDK.Domain.PrismDIDInfo | null> {
    const didRecord = this._didStorage[did.toString()];

    if (!didRecord) {
      return null;
    }

    const keyRecord = this._keyStorage[didRecord.did.toString()][0];
    return new SDK.Domain.PrismDIDInfo(
      didRecord.did,
      keyRecord.keyPathIndex || 0,
      didRecord.alias
    );
  }

  async getDIDInfoByAlias(alias: string): Promise<SDK.Domain.PrismDIDInfo[]> {
    return Object.values(this._didStorage)
      .filter((didRecord) => didRecord.alias === alias)
      .map((didRecord) => {
        const keyRecord = this._keyStorage[didRecord.did.toString()][0];
        return new SDK.Domain.PrismDIDInfo(
          didRecord.did,
          keyRecord.keyPathIndex || 0,
          didRecord.alias
        );
      });
  }

  async getPrismDIDKeyPathIndex(did: SDK.Domain.DID): Promise<number | null> {
    const didRecord = this._didStorage[did.toString()];

    if (!didRecord) {
      return null;
    }

    const keyRecord = this._keyStorage[didRecord.did.toString()][0];
    return keyRecord.keyPathIndex || 0;
  }

  async getPrismLastKeyPathIndex(): Promise<number> {
    const allPrismDIDs = await this.getAllPrismDIDs();
    const allKeyPathIndexes = allPrismDIDs.map(
      (didInfo) => didInfo.keyPathIndex
    );

    if (allKeyPathIndexes.length === 0) {
      return 0;
    }

    return Math.max(...allKeyPathIndexes);
  }

  async getAllPeerDIDs() {
    const allPeerDIDs = Object.values(this._didStorage).filter(
      (didRecord) => didRecord.did.method === "peer"
    );

    const allPeerDIDsWithKeys = allPeerDIDs.map((didRecord) => {
      const keyRecords = this._keyStorage[didRecord.did.toString()];

      const privateKeysForPeerDID = keyRecords.map((key) => ({
        keyCurve: SDK.Domain.getKeyCurveByNameAndIndex(
          key.privateKey.curve,
          key.keyPathIndex
        ),
        value: key.privateKey.getEncoded(),
      }));

      return new SDK.Domain.PeerDID(didRecord.did, privateKeysForPeerDID);
    });

    return allPeerDIDsWithKeys;
  }
  async getDIDPrivateKeysByDID(did: SDK.Domain.DID) {
    const didStr = did.toString();
    const keyRecords = this._keyStorage[didStr];

    if (!keyRecords) {
      return [];
    }

    return keyRecords.map((keyRecord) => keyRecord.privateKey);
  }

  async getDIDPrivateKeyByID(id: string): Promise<SDK.Domain.PrivateKey | null> {
    // TODO: it seems it's not used anywhere
    const allKeys = Object.values(this._keyStorage).flat();
    const keyRecord = allKeys.find(
      (keyRecord) => keyRecord.privateKeyMetaId === id
    );

    return keyRecord?.privateKey ?? null;
  }

  async getAllDidPairs() {
    // TODO: it seems it's not used anywhere
    return this._didPairStorage;
  }

  async getPairByDID(did: SDK.Domain.DID): Promise<SDK.Domain.DIDPair | null> {
    return (
      this._didPairStorage.find(
        (pair) => pair.host.toString() === did.toString()
      ) || null
    );
  }

  async getPairByName(name: string) {
    return this._didPairStorage.find((pair) => pair.name === name) || null;
  }

  async getAllMessages() {
    return this._messageStorage.map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesByDID(did: SDK.Domain.DID): Promise<Array<SDK.Domain.Message>> {
    // get all messages where either from or to is equal did
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === did.toString() ||
          messageRecord.message.to?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesSent() {
    return this._messageStorage
      .filter((messageRecord) => messageRecord.sourceType === "sent")
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesReceived(): Promise<Array<SDK.Domain.Message>> {
    return this._messageStorage
      .filter((messageRecord) => messageRecord.sourceType === "received")
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesSentTo(did: SDK.Domain.DID) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.to?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesReceivedFrom(did: SDK.Domain.DID) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesOfType(
    type: string,
    relatedWithDID?: SDK.Domain.DID
  ): Promise<Array<SDK.Domain.Message>> {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.piuri === type &&
          (!relatedWithDID ||
            messageRecord.message.from?.toString() ===
            relatedWithDID.toString() ||
            messageRecord.message.to?.toString() === relatedWithDID.toString())
      )
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesByFromToDID(
    from: SDK.Domain.DID,
    to: SDK.Domain.DID
  ): Promise<Array<SDK.Domain.Message>> {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === from.toString() &&
          messageRecord.message.to?.toString() === to.toString()
      )
      .map((messageRecord) => messageRecord.message);
  }

  async getMessage(id: string): Promise<SDK.Domain.Message | null> {
    const messageRecord = this._messageStorage.find(
      (messageRecord) => messageRecord.message.id === id
    );

    if (!messageRecord) {
      return null;
    }

    return messageRecord.message;
  }

  async getAllMediators(): Promise<Array<SDK.Domain.Mediator>> {
    return this._mediatorStorage;
  }

  async getAllCredentials(): Promise<Array<SDK.Domain.Credential>> {
    return this._credentialStorage;
  }

  async storeCredentialMetadata(
    metadata: SDK.Domain.Anoncreds.CredentialRequestMeta
  ): Promise<void> {
    this._requestMetadata[metadata.link_secret_name] = metadata;
  }

  async fetchCredentialMetadata(
    linkSecretName: string
  ): Promise<SDK.Domain.Anoncreds.CredentialRequestMeta | null> {
    return this._requestMetadata[linkSecretName];
  }

  async getLinkSecret(
    linkSecretName: string = "default"
  ): Promise<string | null> {
    return this._linkSecrets[linkSecretName] ?? null;
  }

  async storeLinkSecret(
    linkSecret: string,
    linkSecretName: string
  ): Promise<void> {
    this._linkSecrets[linkSecretName] = linkSecret;
  }
}
