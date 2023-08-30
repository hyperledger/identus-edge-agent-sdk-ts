import "reflect-metadata";
import { DataSource, DataSourceOptions, Like, Repository } from "typeorm";
import * as entities from "./entities";
import { Apollo, Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import Did from "./entities/DID";

/**
 * Our example implementation of storage interface PlutoInterface used
 * as storage layer to store anything required by this edge agent,
 * keyPairs, credentials, connections, and data it needs
 *
 * @export
 * @class PlutoSqlite
 * @typedef {PlutoSqlite}
 */
export class PlutoSqlite implements Domain.Pluto {
  dataSource: DataSource;
  // {dropSchema?: string, logger?: "debug" | "advanced-console" }
  constructor(dataSourceOptions?: Partial<DataSourceOptions>) {
    this.dataSource = new DataSource({
      type: "sqlite",
      database: "pluto.db",
      synchronize: true,
      logging: true,
      entities: Object.values(entities),
      //
      dropSchema: dataSourceOptions?.dropSchema,
      logger: dataSourceOptions?.logger,
    });
  }

  private static transformMessageDBToInterface(
    item: entities.Message,
  ): Domain.Message {
    const jsonData = JSON.parse(item.dataJson);

    return {
      from: Domain.DID.fromString(item.from),
      to: Domain.DID.fromString(item.to),
      thid: item.thid,
      direction: item.isReceived,
      piuri: jsonData.piuri,
      id: item.id,
      expiresTimePlus: jsonData.expiresTimePlus,
      extraHeaders: jsonData.extraHeaders,
      createdTime: jsonData.createdTime,
      body: jsonData.body,
      ack: jsonData.ack,
      attachments: jsonData.attachments,
      fromPrior: jsonData.fromPrior,
      pthid: jsonData.pthid,
    };
  }

  /**
   * Asynchronously starts an instance of the Database connection
   *
   * @async
   * @returns {*}
   */
  async start() {
    if (this.dataSource.isInitialized) {
      throw new Error("Database is already initialised");
    }

    try {
      await this.dataSource.initialize();
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async destroy() {
    await this.dataSource.destroy();
  }

  /**
   * Asynchronously Store a PrismDID by providing the DID, the privateKey, its keyPath index and an optional alias
   *
   * @async
   * @param {DID} did
   * @param {number} keyPathIndex
   * @param {PrivateKey} privateKey
   * @param {(string | null)} privateKeyMetaId
   * @param {?string} [alias]
   * @returns {*}
   */
  async storePrismDID(
    did: Domain.DID,
    keyPathIndex: number,
    privateKey: Domain.PrivateKey,
    privateKeyMetaId: string | null,
    alias?: string,
  ) {
    const didEntity = new entities.DID();
    didEntity.did = did.toString();
    didEntity.method = did.method;
    didEntity.methodId = did.methodId;
    didEntity.schema = did.schema;
    didEntity.alias = alias ?? "";

    await this.dataSource.manager.save(didEntity);

    await this.storePrivateKeys(
      privateKey,
      did,
      keyPathIndex,
      privateKeyMetaId,
    );
  }

  /**
   * Asynchronously Store a peerDID just by providing the DID and an array of its privateKeys
   *
   * @async
   * @param {DID} did
   * @param {PrivateKey[]} privateKeys
   * @returns {*}
   */
  async storePeerDID(did: Domain.DID, privateKeys: Domain.PrivateKey[]) {
    const didEntity = new entities.DID();
    didEntity.did = did.toString();
    didEntity.method = did.method;
    didEntity.methodId = did.methodId;
    didEntity.schema = did.schema;
    didEntity.alias = null;
    await this.dataSource.manager.save(didEntity);
    await Promise.all(
      privateKeys.map((privateKey) =>
        this.storePrivateKeys(
          privateKey,
          did,
          privateKey.getProperty(Domain.KeyProperties.index)
            ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              parseInt(privateKey.getProperty(Domain.KeyProperties.index)!)
            : 0,
          null,
        ),
      ),
    );
  }

  /**
   * Asynchronously Store a DIDPair, a DIDComm connection basically between 2 DIDs
   *
   * @async
   * @param {DID} host
   * @param {DID} receiver
   * @param {string} name
   * @returns {*}
   */
  async storeDIDPair(host: Domain.DID, receiver: Domain.DID, name: string) {
    const didPairEntity = new entities.DIDPair();
    didPairEntity.id = `${host.toString()}${receiver.toString()}`;
    didPairEntity.name = name;
    didPairEntity.hostDID = host.toString();
    didPairEntity.receiverDID = receiver.toString();

    await this.dataSource.manager.save(didPairEntity);
  }

  /**
   * Asynchronously Store a DIDComm Message
   *
   * @async
   * @param {Message} message
   * @returns {*}
   */
  async storeMessage(message: Domain.Message) {
    const messageEntity = new entities.Message();
    messageEntity.createdTime = message.createdTime;
    messageEntity.dataJson = JSON.stringify(message);
    messageEntity.from = message.from?.toString() ?? "";
    messageEntity.thid = message.thid;
    messageEntity.to = message.to?.toString() ?? "";
    messageEntity.type = message.piuri ?? null;
    messageEntity.isReceived = message.direction;
    await this.dataSource.manager.save(messageEntity);
  }

  /**
   * Asynchronously store an array of messages
   *
   * @async
   * @param {Message[]} messages
   * @returns {*}
   */
  async storeMessages(messages: Domain.Message[]) {
    await Promise.all(messages.map(this.storeMessage.bind(this)));
  }

  /**
   * Asynchronously store a DID's privateKeys by providing the privateKey and its keyPath index and the actual did
   *
   * @async
   * @param {PrivateKey} privateKey
   * @param {DID} did
   * @param {number} keyPathIndex
   * @param {(string | null)} metaId
   * @returns {*}
   */
  async storePrivateKeys(
    privateKey: Domain.PrivateKey,
    did: Domain.DID,
    keyPathIndex: number,
    metaId: string | null,
  ) {
    const privateKeysEntity = new entities.PrivateKey();

    if (typeof metaId === "string") {
      // question: Where should I store metaId
      privateKeysEntity.id = metaId;
    }

    privateKeysEntity.curve = privateKey.curve;
    privateKeysEntity.privateKey = privateKey.to.Hex();
    privateKeysEntity.keyPathIndex = keyPathIndex ?? 0;
    privateKeysEntity.didId = did.toString();

    await this.dataSource.manager.save(privateKeysEntity);
  }

  /**
   * Asynchronously store the mediator
   *
   * @async
   * @param {DID} mediator
   * @param {DID} host
   * @param {DID} routing
   * @returns {*}
   */
  async storeMediator(
    mediator: Domain.DID,
    host: Domain.DID,
    routing: Domain.DID,
  ) {
    const mediatorEntity = new entities.Mediator();
    mediatorEntity.mediatorDidId = mediator.toString();
    mediatorEntity.hostDidId = host.toString();
    mediatorEntity.routingDidId = routing.toString();
    await this.dataSource.manager.save(mediatorEntity);
  }

  /**
   * Asynchronously fetch all PRISM DIDs
   *
   * @async
   * @returns {unknown}
   */
  async getAllPrismDIDs() {
    const didRepository = this.dataSource.manager.getRepository("did");
    try {
      const dids: (Did & Record<"keyPathIndex", number>)[] = await didRepository
        .createQueryBuilder("did")
        .innerJoin("private_key", "private_key", "did.did = private_key.didId")
        .select("did.*, private_key.keyPathIndex")
        .where("did.method = :method", { method: "prism" })
        .getRawMany();
      return dids.map((item) => ({
        did: Domain.DID.fromString(item.did),
        alias: item.alias,
        keyPathIndex: item.keyPathIndex,
      })) as Domain.PrismDIDInfo[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously get DID information by providing a DID instance
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getDIDInfoByDID(did: Domain.DID) {
    const didRepository = this.dataSource.manager.getRepository("did");
    try {
      const didResponse: (Did & Record<"keyPathIndex", number>) | undefined =
        await didRepository
          .createQueryBuilder("did")
          .innerJoin(
            "private_key",
            "private_key",
            "did.did = private_key.didId",
          )
          .select("did.*, privateKey.keyPathIndex", "keyPathIndex")
          .from((subQuery) => {
            return subQuery
              .select("pk.didId", "didId")
              .addSelect("pk.keyPathIndex", "keyPathIndex")
              .from("private_key", "pk")
              .where("pk.didId LIKE :didId", { didId: did.toString() + "%" });
          }, "privateKey")
          .where("did.did LIKE :didId", { didId: did.toString() + "%" })
          .getRawOne();
      if (!didResponse) {
        return null;
      }
      return {
        did: Domain.DID.fromString(didResponse?.did ?? ""),
        alias: didResponse.alias,
        keyPathIndex: didResponse.keyPathIndex,
      } as Domain.PrismDIDInfo;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously get the DID information by providing an Alias
   *
   * @async
   * @param {string} alias
   * @returns {unknown}
   */
  async getDIDInfoByAlias(alias: string) {
    const didRepository = this.dataSource.manager.getRepository("did");
    try {
      const didResponse: (Did & Record<"private_key_keyPathIndex", number>)[] =
        await didRepository
          .createQueryBuilder("did")
          .innerJoin(
            "private_key",
            "private_key",
            "did.did = private_key.didId",
          )
          .select(["did.*", "private_key.keyPathIndex"])
          .where("did.alias = :alias", { alias })
          .getRawMany();
      if (!didResponse) {
        return [];
      }
      return didResponse.map(
        (item) =>
          ({
            did: Domain.DID.fromString(item.did),
            alias: item.alias,
            keyPathIndex: item.private_key_keyPathIndex,
          }) as Domain.PrismDIDInfo,
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously get a PrismDID key path index by providing a did instance
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getPrismDIDKeyPathIndex(did: Domain.DID) {
    const repository = this.dataSource.manager.getRepository("private_key");
    try {
      const data = await repository.findOne({
        where: {
          didId: did.toString(),
        },
        select: {
          keyPathIndex: true,
        },
      });
      return data?.keyPathIndex ?? null;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Get the last Prism keyPath index
   *
   * @async
   * @returns {unknown}
   */
  async getPrismLastKeyPathIndex() {
    const repository = this.dataSource.manager.getRepository("private_key");
    try {
      const data = await repository
        .createQueryBuilder("private_key")
        .select("private_key.keyPathIndex")
        .where((qb) => {
          const subQuery = qb
            .subQuery()
            .select("did.did")
            .from(Did, "did")
            .where("did.method = :method", { method: "prism" })
            .getQuery();
          return `private_key.didId IN ${subQuery}`;
        })
        .orderBy("private_key.keyPathIndex", "DESC")
        .limit(1)
        .getOne();
      return data?.keyPathIndex ?? 0;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously fetch all Peer DIDs
   *
   * @async
   * @returns {unknown}
   */
  async getAllPeerDIDs(): Promise<Domain.PeerDID[]> {
    const didRepository: Repository<entities.DID> =
      this.dataSource.manager.getRepository("did");
    const privateKeysRepository =
      this.dataSource.manager.getRepository<entities.PrivateKey>("private_key");
    /*
     * This method is overcomplicated, dids should have relations.
     * */
    try {
      const dids = await didRepository.find({
        where: {
          method: "peer",
        },
      });

      const didsWithKeys = await Promise.all(
        dids.map(async (item) => {
          return {
            ...item,
            privateKeys: await privateKeysRepository.find({
              where: {
                didId: item.did,
              },
            }),
          };
        }),
      );

      const peerDIDs = didsWithKeys.map((item) => {
        const privateKeys = item.privateKeys.map((key) => ({
          keyCurve: Domain.getKeyCurveByNameAndIndex(
            key.curve,
            key.keyPathIndex,
          ),
          value: Buffer.from(key.privateKey, "hex"),
        }));

        return new Domain.PeerDID(Domain.DID.fromString(item.did), privateKeys);
      });

      return peerDIDs;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously get a DID's privateKey by providing its instance
   *
   * @async
   * @param {DID} did
   * @returns {PrivateKey[]}
   */
  async getDIDPrivateKeysByDID(did: Domain.DID): Promise<Domain.PrivateKey[]> {
    const repository =
      this.dataSource.manager.getRepository<entities.PrivateKey>("private_key");
    const data = await repository.findBy({ didId: Like(`${did.toString()}%`) });

    return data.map((item) => this.mapToPrivateKey(item));
  }

  private mapToPrivateKey(entity: entities.PrivateKey): Domain.PrivateKey {
    switch (entity.curve) {
      case Domain.Curve.SECP256K1:
        return Apollo.Secp256k1PrivateKey.from.Hex(entity.privateKey);
      case Domain.Curve.ED25519:
        return Apollo.Ed25519PrivateKey.from.Hex(entity.privateKey);
      case Domain.Curve.X25519:
        return Apollo.X25519PrivateKey.from.Hex(entity.privateKey);
    }

    throw new Error("Key Curve not recognised");
  }

  /**
   * Asynchronously get a DID's private key by providing its ID
   *
   * @async
   * @param {string} id
   * @returns {unknown}
   */
  async getDIDPrivateKeyByID(id: string) {
    const repository =
      this.dataSource.manager.getRepository<entities.PrivateKey>("private_key");

    try {
      const data = await repository.findOne({
        where: { id },
      });

      if (!data) {
        return null;
      }

      return this.mapToPrivateKey(data);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously get did pairs, also known as DIDComm connections
   *
   * @async
   * @returns {unknown}
   */
  async getAllDidPairs() {
    const repository = this.dataSource.manager.getRepository("did_pair");
    try {
      const data = await repository.find({
        relationLoadStrategy: "join",
      });
      return data.map((didPair) => ({
        host: Domain.DID.fromString(didPair.hostDID),
        name: didPair.name,
        receiver: Domain.DID.fromString(didPair.receiverDID),
      })) as Domain.DIDPair[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously get a didPair by providing one of the connected DIDs
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getPairByDID(did: Domain.DID) {
    const repository = this.dataSource.manager.getRepository("did_pair");
    try {
      const data = await repository.findOne({
        where: {
          hostDID: did.toString(),
        },
        relationLoadStrategy: "join",
      });
      if (!data) {
        return null;
      }
      return {
        host: Domain.DID.fromString(data.hostDID),
        name: data.name,
        receiver: Domain.DID.fromString(data.receiverDID),
      } as Domain.DIDPair;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously fetch a did pair by its name
   *
   * @async
   * @param {string} name
   * @returns {unknown}
   */
  async getPairByName(name: string) {
    const repository = this.dataSource.manager.getRepository("did_pair");
    try {
      const data = await repository.findOne({
        where: {
          name: name,
        },
        relationLoadStrategy: "join",
      });
      if (!data) {
        return null;
      }
      return {
        host: Domain.DID.fromString(data.hostDID),
        name: data.name,
        receiver: Domain.DID.fromString(data.receiverDID),
      } as Domain.DIDPair;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asynchronously fetch all the messages
   *
   * @async
   * @returns {unknown}
   */
  async getAllMessages() {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find();

    return data.map(PlutoSqlite.transformMessageDBToInterface);
  }

  /**
   * Asynchronously fetch all messages received from or sent to a given DID
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getAllMessagesByDID(did: Domain.DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: [
        {
          from: did.toString(),
        },
        {
          to: did.toString(),
        },
      ],
    });

    return data.map(PlutoSqlite.transformMessageDBToInterface);
  }

  /**
   * Asynchronously fetch all sent messages
   *
   * @async
   * @returns {unknown}
   */
  async getAllMessagesSent() {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        isReceived: 0,
      },
    });
    return data.map(PlutoSqlite.transformMessageDBToInterface);
  }

  /**
   * Asynchronously fetch all received messages
   *
   * @async
   * @returns {unknown}
   */
  async getAllMessagesReceived() {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        isReceived: 1,
      },
    });
    return data.map(PlutoSqlite.transformMessageDBToInterface);
  }

  /**
   * Asynchronously fetch all the messages that have been sent to a specific DID
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getAllMessagesSentTo(did: Domain.DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        to: did.toString(),
      },
    });
    return data.map(PlutoSqlite.transformMessageDBToInterface);
  }

  /**
   * Get all messages received from a specific DID
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getAllMessagesReceivedFrom(did: Domain.DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        from: did.toString(),
      },
    });
    return data.map(PlutoSqlite.transformMessageDBToInterface);
  }

  /**
   * Asynchronously fetch all messages by specifying the message type, and optionally if they are related to a DID
   *
   * @async
   * @param {string} type
   * @param {?DID} [relatedWithDID]
   * @returns {unknown}
   */
  async getAllMessagesOfType(type: string, relatedWithDID?: Domain.DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository
      .createQueryBuilder("message")
      .where("message.type = :type", { type })
      .andWhere(
        ":relatedWithDID IS NULL OR :relatedWithDID IN (message.from, message.to)",
        { relatedWithDID: relatedWithDID?.toString() ?? null },
      )
      .getMany();

    return data.map(PlutoSqlite.transformMessageDBToInterface);
  }

  /**
   * Asynchronously fetch all the messages containing given from AND to DIDs
   *
   * @async
   * @param {DID} from
   * @param {DID} to
   * @returns {unknown}
   */
  async getAllMessagesByFromToDID(from: Domain.DID, to: Domain.DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        from: from.toString(),
        to: to.toString(),
      },
    });
    return data.map(PlutoSqlite.transformMessageDBToInterface);
  }

  /**
   * Asynchronously get a message by ID
   *
   * @async
   * @param {string} id
   * @returns {unknown}
   */
  async getMessage(id: string) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.findOne({
      where: {
        id,
      },
    });
    if (!data) {
      return null;
    }
    return PlutoSqlite.transformMessageDBToInterface(data);
  }

  /**
   * Asynchronously fetch all stored mediators
   *
   * @async
   * @returns {unknown}
   */
  async getAllMediators() {
    const repository: Repository<entities.Mediator> =
      this.dataSource.manager.getRepository("mediator");
    const data = await repository.find({
      relationLoadStrategy: "join",
    });
    return data.map((item) => ({
      id: item.id,
      mediatorDID: Domain.DID.fromString(item.mediatorDidId),
      hostDID: Domain.DID.fromString(item.hostDidId),
      routingDID: Domain.DID.fromString(item.routingDidId),
    })) as Domain.Mediator[];
  }

  /**
   * Asynchronously get all stored credentials
   *
   * @async
   * @returns {unknown}
   */
  async getAllCredentials() {
    const repository: Repository<entities.VerifiableCredential> =
      this.dataSource.manager.getRepository("verifiable_credential");
    const data = await repository.find();
    return data.map((credential) => {
      const json = JSON.parse(credential.verifiableCredentialJson);
      return {
        ...json,
        id: credential.id,
        issuer: Domain.DID.fromString(credential.issuerDIDId),
        subject: Domain.DID.fromString(json.subject),
      };
    }) as Domain.VerifiableCredential[];
  }

  /**
   * Asynchronously store a Verifiable Credential
   *
   * @async
   * @param {VerifiableCredential} credential
   * @returns {*}
   */
  async storeCredential(credential: Domain.VerifiableCredential) {
    const verifiableCredentialEntity = new entities.VerifiableCredential();
    verifiableCredentialEntity.credentialType = credential.credentialType;
    verifiableCredentialEntity.expirationDate = credential.expirationDate;
    verifiableCredentialEntity.issuanceDate = credential.issuanceDate;
    verifiableCredentialEntity.verifiableCredentialJson = JSON.stringify({
      ...credential,
      subject: credential.subject?.toString(),
    });
    verifiableCredentialEntity.issuerDIDId = credential.issuer.toString();

    await this.dataSource.manager.save(verifiableCredentialEntity);
  }
}
