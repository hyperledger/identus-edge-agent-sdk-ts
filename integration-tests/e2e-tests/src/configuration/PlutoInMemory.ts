import { Domain, PeerDID } from "@atala/prism-wallet-sdk"

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
  _didStorage: Record<string, DIDRecord> = {}
  _keyStorage: Record<string, Array<KeyRecord>> = {}
  _didPairStorage: Array<DIDPairRecord> = []
  _messageStorage: Array<MessageRecord> = []
  _mediatorStorage: Array<MediatorRecord> = []
  _credentialStorage: Array<CredentialRecord> = []
  _linkSecrets: Record<string, string> = {}
  _requestMetadata: Record<string, Domain.Anoncreds.CredentialRequestMeta> = {}

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
    alias?: string
  ) {
    const didStr = did.toString()
    await this.storePrivateKeys(
      privateKey,
      did,
      keyPathIndex,
      privateKeyMetaId
    )
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
        message.direction === Domain.MessageDirection.SENT
          ? "sent"
          : "received",
    })
  }

  async storeMessages(messages: Array<Domain.Message>) {
    messages.forEach((message) => this.storeMessage(message))
  }

  async storePrivateKeys(
    privateKey: Domain.PrivateKey,
    did: Domain.DID,
    keyPathIndex: number,
    metaId: string | null
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
    routing: Domain.DID
  ) {
    this._mediatorStorage.push({
      mediatorDID: mediator,
      hostDID: host,
      routingDID: routing,
    })
  }

  async storeCredential(credential: Domain.Credential) {
    this._credentialStorage.push(credential)
  }

  async getAllPrismDIDs(): Promise<Domain.PrismDIDInfo[]> {
    return Object.values(this._didStorage)
      .filter((didRecord) => didRecord.did.method === "prism")
      .map((didRecord) => {
        const keyRecord = this._keyStorage[didRecord.did.toString()][0]
        return new Domain.PrismDIDInfo(
          didRecord.did,
          keyRecord.keyPathIndex || 0,
          didRecord.alias
        )
      })
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
      didRecord.alias
    )
  }

  async getDIDInfoByAlias(alias: string): Promise<Domain.PrismDIDInfo[]> {
    return Object.values(this._didStorage)
      .filter((didRecord) => didRecord.alias === alias)
      .map((didRecord) => {
        const keyRecord = this._keyStorage[didRecord.did.toString()][0]
        return new Domain.PrismDIDInfo(
          didRecord.did,
          keyRecord.keyPathIndex || 0,
          didRecord.alias
        )
      })
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
      (didInfo) => didInfo.keyPathIndex
    )

    if (allKeyPathIndexes.length === 0) {
      return 0
    }

    return Math.max(...allKeyPathIndexes)
  }

  async getAllPeerDIDs() {
    const allPeerDIDs = Object.values(this._didStorage).filter(
      (didRecord) => didRecord.did.method === "peer"
    )

    const allPeerDIDsWithKeys = allPeerDIDs.map((didRecord) => {
      const keyRecords = this._keyStorage[didRecord.did.toString()]

      const privateKeysForPeerDID = keyRecords.map((key) => ({
        keyCurve: Domain.getKeyCurveByNameAndIndex(
          key.privateKey.curve,
          key.keyPathIndex
        ),
        value: key.privateKey.value,
      }))

      return new PeerDID(didRecord.did, privateKeysForPeerDID)
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
      (keyRecord) => keyRecord.privateKeyMetaId === id
    )

    return keyRecord?.privateKey ?? null
  }

  async getAllDidPairs() {
    // TODO: it seems it's not used anywhere
    return this._didPairStorage
  }

  async getPairByDID(did: Domain.DID): Promise<Domain.DIDPair | null> {
    return (
      this._didPairStorage.find(
        (pair) => pair.host.toString() === did.toString()
      ) || null
    )
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
          messageRecord.message.to?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message)
  }

  async getAllMessagesSent() {
    return this._messageStorage
      .filter((messageRecord) => messageRecord.sourceType === "sent")
      .map((messageRecord) => messageRecord.message)
  }

  async getAllMessagesReceived(): Promise<Array<Domain.Message>> {
    return this._messageStorage
      .filter((messageRecord) => messageRecord.sourceType === "received")
      .map((messageRecord) => messageRecord.message)
  }

  async getAllMessagesSentTo(did: Domain.DID) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.to?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message)
  }

  async getAllMessagesReceivedFrom(did: Domain.DID) {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === did.toString()
      )
      .map((messageRecord) => messageRecord.message)
  }

  async getAllMessagesOfType(
    type: string,
    relatedWithDID?: Domain.DID
  ): Promise<Array<Domain.Message>> {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.piuri === type &&
          (!relatedWithDID ||
            messageRecord.message.from?.toString() ===
              relatedWithDID.toString() ||
            messageRecord.message.to?.toString() === relatedWithDID.toString())
      )
      .map((messageRecord) => messageRecord.message)
  }

  async getAllMessagesByFromToDID(
    from: Domain.DID,
    to: Domain.DID
  ): Promise<Array<Domain.Message>> {
    return this._messageStorage
      .filter(
        (messageRecord) =>
          messageRecord.message.from?.toString() === from.toString() &&
          messageRecord.message.to?.toString() === to.toString()
      )
      .map((messageRecord) => messageRecord.message)
  }

  async getMessage(id: string): Promise<Domain.Message | null> {
    const messageRecord = this._messageStorage.find(
      (messageRecord) => messageRecord.message.id === id
    )

    if (!messageRecord) {
      return null
    }

    return messageRecord.message
  }

  async getAllMediators(): Promise<Array<Domain.Mediator>> {
    return this._mediatorStorage
  }

  async getAllCredentials(): Promise<Array<Domain.Credential>> {
    return this._credentialStorage
  }

  async storeCredentialMetadata(
    metadata: Domain.Anoncreds.CredentialRequestMeta
  ): Promise<void> {
    this._requestMetadata[metadata.link_secret_name] = metadata
  }

  async fetchCredentialMetadata(
    linkSecretName: string
  ): Promise<Domain.Anoncreds.CredentialRequestMeta | null> {
    return this._requestMetadata[linkSecretName]
  }

  async getLinkSecret(
    linkSecretName: string = "default"
  ): Promise<string | null> {
    return this._linkSecrets[linkSecretName] ?? null
  }

  async storeLinkSecret(
    linkSecret: string,
    linkSecretName: string
  ): Promise<void> {
    this._linkSecrets[linkSecretName] = linkSecret
  }
}
