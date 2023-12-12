/**
 * WARNING: Do not  use this pluto implementation, its inMemory and totally unprotected.
 * Look for other community inspired projects like "@pluto-encrypted/database"
 */
import * as SDK from "@atala/prism-wallet-sdk";

export default class PlutoInMemory {
  constructor() {
    this._didStorage = {};
    this._keyStorage = {};
    this._didPairStorage = [];
    this._messageStorage = [];
    this._mediatorStorage = [];
    this._credentialStorage = [];
    this._linkSecrets = {};
    this._requestMetadata = {};
  }

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
    did,
    keyPathIndex,
    privateKey,
    privateKeyMetaId,
    alias
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

  async storePeerDID(did, privateKeys) {
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

  async storeDIDPair(host, receiver, name) {
    this._didPairStorage.push({ host, receiver, name });
  }

  async storeMessage(message) {
    this._messageStorage.push({
      message,
      sourceType:
        message.direction === SDK.Domain.MessageDirection.SENT ? "sent" : "received",
    });
  }

  async storeMessages(messages) {
    messages.forEach((message) => this.storeMessage(message));
  }

  async storePrivateKeys(privateKey, did, keyPathIndex, metaId) {
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

  async storeMediator(mediator, host, routing) {
    this._mediatorStorage.push({
      mediatorDID: mediator,
      hostDID: host,
      routingDID: routing,
    });
  }

  async storeCredential(credential) {
    this._credentialStorage.push(credential);
  }

  async getAllPrismDIDs() {
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

  async getDIDInfoByDID(did) {
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

  async getDIDInfoByAlias(alias) {
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

  async getPrismDIDKeyPathIndex(did) {
    const didRecord = this._didStorage[did.toString()];

    if (!didRecord) {
      return null;
    }

    const keyRecord = this._keyStorage[didRecord.did.toString()][0];
    return keyRecord.keyPathIndex || 0;
  }

  async getPrismLastKeyPathIndex() {
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

  async getDIDPrivateKeysByDID(did) {
    const didStr = did.toString();
    const keyRecords = this._keyStorage[didStr];

    if (!keyRecords) {
      return [];
    }

    return keyRecords.map((keyRecord) => keyRecord.privateKey);
  }

  async getDIDPrivateKeyByID(id) {
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

  async getPairByDID(did) {
    return (
      this._didPairStorage.find(
        (pair) => pair.host.toString() === did.toString()
      ) || null
    );
  }

  async getPairByName(name) {
    return this._didPairStorage.find((pair) => pair.name === name) || null;
  }

  async getAllMessages() {
    return this._messageStorage.map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesByDID(did) {
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

  async getAllMessagesReceived() {
    return this._messageStorage
      .filter((messageRecord) => messageRecord.sourceType === "received")
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesSentTo(did) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.to?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesReceivedFrom(did) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message);
  }

  async getAllMessagesOfType(type, relatedWithDID) {
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

  async getAllMessagesByFromToDID(from, to) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === from.toString() &&
          messageRecord.message.to?.toString() === to.toString()
      )
      .map((messageRecord) => messageRecord.message);
  }

  async getMessage(id) {
    const messageRecord = this._messageStorage.find(
      (messageRecord) => messageRecord.message.id === id
    );

    if (!messageRecord) {
      return null;
    }

    return messageRecord.message;
  }

  async getAllMediators() {
    return this._mediatorStorage;
  }

  async getAllCredentials() {
    return this._credentialStorage;
  }

  async storeCredentialMetadata(metadata) {
    this._requestMetadata[metadata.link_secret_name] = metadata;
  }

  async fetchCredentialMetadata(linkSecretName) {
    return this._requestMetadata[linkSecretName];
  }

  async getLinkSecret(linkSecretName = "default") {
    return this._linkSecrets[linkSecretName] ?? null;
  }

  async storeLinkSecret(linkSecret, linkSecretName) {
    this._linkSecrets[linkSecretName] = linkSecret;
  }
}
