import { Domain } from "@input-output-hk/atala-prism-wallet-sdk"

interface DIDRecord {
  did: Domain.DID;
  alias?: string;
}
interface KeyRecord {
  did: Domain.DID;
  keyPathIndex?: number;
  privateKey: Domain.PrivateKey;
  privateKeyMetaId?: string;
}
type DIDPairRecord = Domain.DIDPair;
interface MessageRecord {
  sourceType: "sent" | "received";
  message: Domain.Message;
}
type MediatorRecord = Domain.Mediator;
type CredentialRecord = Domain.Credential;

export class PlutoInMemory implements Domain.Pluto {
<<<<<<< HEAD
  _didStorage: Record<string, DIDRecord> = {};
  _keyStorage: Record<string, Array<KeyRecord>> = {};
  _didPairStorage: Array<DIDPairRecord> = [];
  _messageStorage: Array<MessageRecord> = [];
  _mediatorStorage: Array<MediatorRecord> = [];
  _credentialStorage: Array<CredentialRecord> = [];
  _linkSecrets: Record<string, string> = {};
  _requestMetadata: Record<string, Domain.Anoncreds.CredentialRequestMeta> = {};
=======
  _didStorage: Record<string, DIDRecord> = {}
  _keyStorage: Record<string, Array<KeyRecord>> = {}
  _didPairStorage: Array<DIDPairRecord> = []
  _messageStorage: Array<MessageRecord> = []
  _mediatorStorage: Array<MediatorRecord> = []
  _credentialStorage: Array<CredentialRecord> = []
>>>>>>> 0d64801a (test: refactor and add new scenarios)

  /**
   * no async setup for in-memory implementation
   */
  async start() {}

  async destroy() {
    this._didStorage = {}
    this._keyStorage = {}
    this._didPairStorage = []
    this._messageStorage = []
    this._mediatorStorage = []
    this._credentialStorage = []
  }

  async storePrismDID(
    did: Domain.DID,
    keyPathIndex: number,
    privateKey: Domain.PrivateKey,
    privateKeyMetaId: string | null,
<<<<<<< HEAD
    alias?: string
=======
    alias?: string,
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  ) {
    const didStr = did.toString()
    await this.storePrivateKeys(
      privateKey,
      did,
      keyPathIndex,
<<<<<<< HEAD
      privateKeyMetaId
    );
=======
      privateKeyMetaId,
    )
>>>>>>> 0d64801a (test: refactor and add new scenarios)
    this._didStorage[didStr] = {
      did,
      alias,
    }
  }

  async storePeerDID(did: Domain.DID, privateKeys: Array<Domain.PrivateKey>) {
    const didStr = did.toString()
    this._keyStorage[didStr] = privateKeys.map((privateKey) => ({
      did,
      privateKey,
      keyPathIndex: undefined,
      privateKeyMetaId: undefined,
    }))
    this._didStorage[didStr] = {
      did,
      alias: undefined,
    }
  }

  async storeDIDPair(host: Domain.DID, receiver: Domain.DID, name: string) {
    this._didPairStorage.push({ host, receiver, name })
  }

  async storeMessage(message: Domain.Message) {
    this._messageStorage.push({
      message,
      sourceType:
<<<<<<< HEAD
        message.direction === Domain.MessageDirection.SENT
          ? "sent"
          : "received",
    });
=======
          message.direction === Domain.MessageDirection.SENT
            ? "sent"
            : "received",
    })
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async storeMessages(messages: Array<Domain.Message>) {
    messages.forEach((message) => this.storeMessage(message))
  }

  async storePrivateKeys(
    privateKey: Domain.PrivateKey,
    did: Domain.DID,
    keyPathIndex: number,
<<<<<<< HEAD
    metaId: string | null
=======
    metaId: string | null,
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  ) {
    const didStr = did.toString()

    if (!this._keyStorage[didStr]) {
      this._keyStorage[didStr] = []
    }

    this._keyStorage[didStr].push({
      did,
      privateKey,
      keyPathIndex,
      privateKeyMetaId: metaId || undefined,
    })
  }

  async storeMediator(
    mediator: Domain.DID,
    host: Domain.DID,
<<<<<<< HEAD
    routing: Domain.DID
=======
    routing: Domain.DID,
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  ) {
    this._mediatorStorage.push({
      mediatorDID: mediator,
      hostDID: host,
      routingDID: routing,
    })
  }

<<<<<<< HEAD
  async storeCredential(credential: Domain.Credential) {
    this._credentialStorage.push(credential);
=======
  async storeCredential(credential: Domain.VerifiableCredential) {
    this._credentialStorage.push(credential)
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getAllPrismDIDs(): Promise<Domain.PrismDIDInfo[]> {
    return Object.values(this._didStorage)
      .filter((didRecord) => didRecord.did.method === "prism")
      .map((didRecord) => {
<<<<<<< HEAD
        const keyRecord = this._keyStorage[didRecord.did.toString()][0];
        return new Domain.PrismDIDInfo(
          didRecord.did,
          keyRecord.keyPathIndex || 0,
          didRecord.alias
        );
      });
=======
        const keyRecord = this._keyStorage[didRecord.did.toString()][0]
        return new Domain.PrismDIDInfo(
          didRecord.did,
          keyRecord.keyPathIndex || 0,
          didRecord.alias,
        )
      })
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getDIDInfoByDID(did: Domain.DID): Promise<Domain.PrismDIDInfo | null> {
    const didRecord = this._didStorage[did.toString()]

    if (!didRecord) {
      return null
    }

    const keyRecord = this._keyStorage[didRecord.did.toString()][0]
    return new Domain.PrismDIDInfo(
      didRecord.did,
      keyRecord.keyPathIndex || 0,
<<<<<<< HEAD
      didRecord.alias
    );
=======
      didRecord.alias,
    )
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getDIDInfoByAlias(alias: string): Promise<Domain.PrismDIDInfo[]> {
    return Object.values(this._didStorage)
      .filter((didRecord) => didRecord.alias === alias)
      .map((didRecord) => {
<<<<<<< HEAD
        const keyRecord = this._keyStorage[didRecord.did.toString()][0];
        return new Domain.PrismDIDInfo(
          didRecord.did,
          keyRecord.keyPathIndex || 0,
          didRecord.alias
        );
      });
=======
        const keyRecord = this._keyStorage[didRecord.did.toString()][0]
        return new Domain.PrismDIDInfo(
          didRecord.did,
          keyRecord.keyPathIndex || 0,
          didRecord.alias,
        )
      })
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getPrismDIDKeyPathIndex(did: Domain.DID): Promise<number | null> {
    const didRecord = this._didStorage[did.toString()]

    if (!didRecord) {
      return null
    }

    const keyRecord = this._keyStorage[didRecord.did.toString()][0]
    return keyRecord.keyPathIndex || 0
  }

  async getPrismLastKeyPathIndex(): Promise<number> {
    const allPrismDIDs = await this.getAllPrismDIDs()
    const allKeyPathIndexes = allPrismDIDs.map(
<<<<<<< HEAD
      (didInfo) => didInfo.keyPathIndex
    );
=======
      (didInfo) => didInfo.keyPathIndex,
    )
>>>>>>> 0d64801a (test: refactor and add new scenarios)

    if (allKeyPathIndexes.length === 0) {
      return 0
    }

    return Math.max(...allKeyPathIndexes)
  }

  async getAllPeerDIDs() {
    const allPeerDIDs = Object.values(this._didStorage).filter(
<<<<<<< HEAD
      (didRecord) => didRecord.did.method === "peer"
    );
=======
      (didRecord) => didRecord.did.method === "peer",
    )
>>>>>>> 0d64801a (test: refactor and add new scenarios)

    const allPeerDIDsWithKeys = allPeerDIDs.map((didRecord) => {
      const keyRecords = this._keyStorage[didRecord.did.toString()]

      const privateKeysForPeerDID = keyRecords.map((key) => ({
        keyCurve: Domain.getKeyCurveByNameAndIndex(
          key.privateKey.curve,
<<<<<<< HEAD
          key.keyPathIndex
=======
          key.keyPathIndex,
>>>>>>> 0d64801a (test: refactor and add new scenarios)
        ),
        value: key.privateKey.value,
      }))

      return new Domain.PeerDID(didRecord.did, privateKeysForPeerDID)
    })

    return allPeerDIDsWithKeys
  }
  async getDIDPrivateKeysByDID(did: Domain.DID) {
    const didStr = did.toString()
    const keyRecords = this._keyStorage[didStr]

    if (!keyRecords) {
      return []
    }

    return keyRecords.map((keyRecord) => keyRecord.privateKey)
  }

  async getDIDPrivateKeyByID(id: string): Promise<Domain.PrivateKey | null> {
    // TODO: it seems it's not used anywhere
    const allKeys = Object.values(this._keyStorage).flat()
    const keyRecord = allKeys.find(
<<<<<<< HEAD
      (keyRecord) => keyRecord.privateKeyMetaId === id
    );
=======
      (keyRecord) => keyRecord.privateKeyMetaId === id,
    )
>>>>>>> 0d64801a (test: refactor and add new scenarios)

    return keyRecord?.privateKey ?? null
  }

  async getAllDidPairs() {
    // TODO: it seems it's not used anywhere
    return this._didPairStorage
  }

  async getPairByDID(did: Domain.DID): Promise<Domain.DIDPair | null> {
    return (
      this._didPairStorage.find(
<<<<<<< HEAD
        (pair) => pair.host.toString() === did.toString()
      ) || null
    );
=======
        (pair) => pair.host.toString() === did.toString(),
      ) || null
    )
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getPairByName(name: string) {
    return this._didPairStorage.find((pair) => pair.name === name) || null
  }

  async getAllMessages() {
    return this._messageStorage.map((messageRecord) => messageRecord.message)
  }

  async getAllMessagesByDID(did: Domain.DID): Promise<Array<Domain.Message>> {
    // get all messages where either from or to is equal did
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === did.toString() ||
<<<<<<< HEAD
          messageRecord.message.to?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message);
=======
                messageRecord.message.to?.toString() === did.toString(),
      )
      .map((messageRecord) => messageRecord.message)
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getAllMessagesSent() {
    return this._messageStorage
      .filter((messageRecord) => messageRecord.sourceType === "sent")
<<<<<<< HEAD
      .map((messageRecord) => messageRecord.message);
=======
      .map((messageRecord) => messageRecord.message)
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getAllMessagesReceived(): Promise<Array<Domain.Message>> {
    return this._messageStorage
      .filter((messageRecord) => messageRecord.sourceType === "received")
<<<<<<< HEAD
      .map((messageRecord) => messageRecord.message);
=======
      .map((messageRecord) => messageRecord.message)
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getAllMessagesSentTo(did: Domain.DID) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
<<<<<<< HEAD
          messageRecord.message.to?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message);
=======
          messageRecord.message.to?.toString() === did.toString(),
      )
      .map((messageRecord) => messageRecord.message)
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getAllMessagesReceivedFrom(did: Domain.DID) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
<<<<<<< HEAD
          messageRecord.message.from?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message);
=======
          messageRecord.message.from?.toString() === did.toString(),
      )
      .map((messageRecord) => messageRecord.message)
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getAllMessagesOfType(
    type: string,
<<<<<<< HEAD
    relatedWithDID?: Domain.DID
=======
    relatedWithDID?: Domain.DID,
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  ): Promise<Array<Domain.Message>> {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.piuri === type &&
<<<<<<< HEAD
          (!relatedWithDID ||
            messageRecord.message.from?.toString() ===
              relatedWithDID.toString() ||
            messageRecord.message.to?.toString() === relatedWithDID.toString())
      )
      .map((messageRecord) => messageRecord.message);
=======
                (!relatedWithDID ||
                    messageRecord.message.from?.toString() ===
                    relatedWithDID.toString() ||
                    messageRecord.message.to?.toString() === relatedWithDID.toString()),
      )
      .map((messageRecord) => messageRecord.message)
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getAllMessagesByFromToDID(
    from: Domain.DID,
<<<<<<< HEAD
    to: Domain.DID
=======
    to: Domain.DID,
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  ): Promise<Array<Domain.Message>> {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === from.toString() &&
<<<<<<< HEAD
          messageRecord.message.to?.toString() === to.toString()
      )
      .map((messageRecord) => messageRecord.message);
=======
                messageRecord.message.to?.toString() === to.toString(),
      )
      .map((messageRecord) => messageRecord.message)
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async getMessage(id: string): Promise<Domain.Message | null> {
    const messageRecord = this._messageStorage.find(
<<<<<<< HEAD
      (messageRecord) => messageRecord.message.id === id
    );
=======
      (messageRecord) => messageRecord.message.id === id,
    )
>>>>>>> 0d64801a (test: refactor and add new scenarios)

    if (!messageRecord) {
      return null
    }

    return messageRecord.message
  }

  async getAllMediators(): Promise<Array<Domain.Mediator>> {
    return this._mediatorStorage
  }

<<<<<<< HEAD
  async getAllCredentials(): Promise<Array<Domain.Credential>> {
    return this._credentialStorage;
=======
  async getAllCredentials(): Promise<Array<Domain.VerifiableCredential>> {
    return this._credentialStorage
>>>>>>> 0d64801a (test: refactor and add new scenarios)
  }

  async storeCredentialMetadata(
    metadata: Domain.Anoncreds.CredentialRequestMeta
  ): Promise<void> {
    this._requestMetadata[metadata.link_secret_name] = metadata;
  }

  async fetchCredentialMetadata(
    linkSecretName: string
  ): Promise<Domain.Anoncreds.CredentialRequestMeta | null> {
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
