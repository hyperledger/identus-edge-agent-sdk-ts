import "reflect-metadata";
import {
  DID,
  getKeyCurveByNameAndIndex,
  Mediator,
  Message,
  PeerDID,
  PrivateKey,
} from "../domain";
import { PrismDIDInfo } from "../domain/models/PrismDIDInfo";
import { Pluto as PlutoInterface } from "../domain/buildingBlocks/Pluto";
import { DIDPair } from "../domain/models/DIDPair";
import {
  Credential,
  JWTVerifiableCredentialRecoveryId,
  JWTCredential,
} from "../domain/models";
import * as entities from "./entities";
import Did from "./entities/DID";

import { DataSource, Like, Repository } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { CockroachConnectionOptions } from "typeorm/driver/cockroachdb/CockroachConnectionOptions";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";
import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";
import { SapConnectionOptions } from "typeorm/driver/sap/SapConnectionOptions";
import { OracleConnectionOptions } from "typeorm/driver/oracle/OracleConnectionOptions";
import { CordovaConnectionOptions } from "typeorm/driver/cordova/CordovaConnectionOptions";
import { NativescriptConnectionOptions } from "typeorm/driver/nativescript/NativescriptConnectionOptions";
import { SqljsConnectionOptions } from "typeorm/driver/sqljs/SqljsConnectionOptions";
import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions";
import { AuroraMysqlConnectionOptions } from "typeorm/driver/aurora-mysql/AuroraMysqlConnectionOptions";
import { AuroraPostgresConnectionOptions } from "typeorm/driver/aurora-postgres/AuroraPostgresConnectionOptions";
import { ExpoConnectionOptions } from "typeorm/driver/expo/ExpoConnectionOptions";
import { BetterSqlite3ConnectionOptions } from "typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions";
import { CapacitorConnectionOptions } from "typeorm/driver/capacitor/CapacitorConnectionOptions";
import { SpannerConnectionOptions } from "typeorm/driver/spanner/SpannerConnectionOptions";
import LinkSecret from "./entities/LinkSecret";
import { Anoncreds } from "../pollux/models/Anoncreds";

type IgnoreProps = "entries" | "entityPrefix" | "metadataTableName";
export type PlutoConnectionProps =
  | Omit<MysqlConnectionOptions, IgnoreProps>
  | Omit<PostgresConnectionOptions, IgnoreProps>
  | Omit<CockroachConnectionOptions, IgnoreProps>
  | Omit<SqliteConnectionOptions, IgnoreProps>
  | Omit<SqlServerConnectionOptions, IgnoreProps>
  | Omit<SapConnectionOptions, IgnoreProps>
  | Omit<OracleConnectionOptions, IgnoreProps>
  | Omit<CordovaConnectionOptions, IgnoreProps>
  | Omit<NativescriptConnectionOptions, IgnoreProps>
  | Omit<SqljsConnectionOptions, IgnoreProps>
  | Omit<MongoConnectionOptions, IgnoreProps>
  | Omit<AuroraMysqlConnectionOptions, IgnoreProps>
  | Omit<AuroraPostgresConnectionOptions, IgnoreProps>
  | Omit<ExpoConnectionOptions, IgnoreProps>
  | Omit<BetterSqlite3ConnectionOptions, IgnoreProps>
  | Omit<CapacitorConnectionOptions, IgnoreProps>
  | Omit<SpannerConnectionOptions, IgnoreProps>;

/**
 * Our example implementation of storage interface PlutoInterface used
 * as storage layer to store anything required by this edge agent,
 * keyPairs, credentials, connections, and data it needs
 *
 * @export
 * @class Pluto
 * @typedef {Pluto}
 */
export default class Pluto implements PlutoInterface {
  dataSource: DataSource;
  wasmUrl: string =
    typeof window !== "undefined"
      ? `https://sql.js.org`
      : `node_modules/sql.js`;

  /**
   * Creates an instance of Pluto.
   *
   * @constructor
   * @param {PlutoConnectionProps} connection
   */
  constructor(connection: PlutoConnectionProps) {
    const presetSqlJSConfig =
      connection.type === "sqljs"
        ? {
          location: "pluto",
          useLocalForage: typeof window !== "undefined",
          sqlJsConfig: {
            locateFile: (file: string) => `${this.wasmUrl}/dist/${file}`,
          },
        }
        : {};
    this.dataSource = new DataSource({
      ...presetSqlJSConfig,
      ...connection,
      entities: Object.values(entities),
      synchronize: true,
    });
  }

  private static transformMessageDBToInterface(
    item: entities.Message
  ): Message {
    const jsonData = JSON.parse(item.dataJson);
    return {
      from: DID.fromString(item.from),
      to: DID.fromString(item.to),
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
   * Asyncronously Starts an instance of the Database connection
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

  /**
   * Asyncronously Store a PrismDID by providing the DID, the privateKey, its keyPath index and an optional alias
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
    did: DID,
    keyPathIndex: number,
    privateKey: PrivateKey,
    privateKeyMetaId: string | null,
    alias?: string
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
      privateKeyMetaId
    );
  }

  /**
   * Asyncronously Store a peerDID just by providing the DID and an array of its privateKeys
   *
   * @async
   * @param {DID} did
   * @param {PrivateKey[]} privateKeys
   * @returns {*}
   */
  async storePeerDID(did: DID, privateKeys: PrivateKey[]) {
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
          privateKey.keyCurve?.index ?? 0,
          null
        )
      )
    );
  }

  /**
   * Asyncronously Store a DIDPair, a didcomm connection basically between 2 dids
   *
   * @async
   * @param {DID} host
   * @param {DID} receiver
   * @param {string} name
   * @returns {*}
   */
  async storeDIDPair(host: DID, receiver: DID, name: string) {
    const didPairEntity = new entities.DIDPair();
    didPairEntity.id = `${host.toString()}${receiver.toString()}`;
    didPairEntity.name = name;
    didPairEntity.hostDID = host.toString();
    didPairEntity.receiverDID = receiver.toString();

    await this.dataSource.manager.save(didPairEntity);
  }

  /**
   * Asyncronously Store a didcomm Message
   *
   * @async
   * @param {Message} message
   * @returns {*}
   */
  async storeMessage(message: Message) {
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
   * Asyncronously Store an array of messages
   *
   * @async
   * @param {Message[]} messages
   * @returns {*}
   */
  async storeMessages(messages: Message[]) {
    await Promise.all(messages.map(this.storeMessage.bind(this)));
  }

  /**
   * Asyncronously store a did's privateKeys by prividing the privateKey and its keyPath index and the actual did
   *
   * @async
   * @param {PrivateKey} privateKey
   * @param {DID} did
   * @param {number} keyPathIndex
   * @param {(string | null)} metaId
   * @returns {*}
   */
  async storePrivateKeys(
    privateKey: PrivateKey,
    did: DID,
    keyPathIndex: number,
    metaId: string | null
  ) {
    const privateKeysEntity = new entities.PrivateKey();
    metaId && (privateKeysEntity.id = metaId); // question: Where should I store metaId
    privateKeysEntity.curve = privateKey.keyCurve.curve;
    privateKeysEntity.privateKey = Buffer.from(privateKey.value).toString();
    privateKeysEntity.keyPathIndex = keyPathIndex ?? 0;
    privateKeysEntity.didId = did.toString();
    await this.dataSource.manager.save(privateKeysEntity);
  }

  /**
   * Asyncronously Store the mediator
   *
   * @async
   * @param {DID} mediator
   * @param {DID} host
   * @param {DID} routing
   * @returns {*}
   */
  async storeMediator(mediator: DID, host: DID, routing: DID) {
    const mediatorEntity = new entities.Mediator();
    mediatorEntity.mediatorDidId = mediator.toString();
    mediatorEntity.hostDidId = host.toString();
    mediatorEntity.routingDidId = routing.toString();
    await this.dataSource.manager.save(mediatorEntity);
  }

  /**
   * Asyncronously fetch all prismDIDS
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
        did: DID.fromString(item.did),
        alias: item.alias,
        keyPathIndex: item.keyPathIndex,
      })) as PrismDIDInfo[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously get DID information by providing a DID instance
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getDIDInfoByDID(did: DID) {
    const didRepository = this.dataSource.manager.getRepository("did");
    try {
      const didResponse: (Did & Record<"keyPathIndex", number>) | undefined =
        await didRepository
          .createQueryBuilder("did")
          .innerJoin(
            "private_key",
            "private_key",
            "did.did = private_key.didId"
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
        did: DID.fromString(didResponse?.did ?? ""),
        alias: didResponse.alias,
        keyPathIndex: didResponse.keyPathIndex,
      } as PrismDIDInfo;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously get the DID information by providing an Alias
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
            "did.did = private_key.didId"
          )
          .select(["did.*", "private_key.keyPathIndex"])
          .where("did.alias = :alias", { alias })
          .getRawMany();
      if (!didResponse) {
        return [];
      }
      return didResponse.map(
        (item) => ({
          did: DID.fromString(item.did),
          alias: item.alias,
          keyPathIndex: item.private_key_keyPathIndex,
        } as PrismDIDInfo)
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously Get a PrismDID key path index by providing a did instance
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getPrismDIDKeyPathIndex(did: DID) {
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
   * Asyncronously fetch all peerDIDs
   *
   * @async
   * @returns {unknown}
   */
  async getAllPeerDIDs() {
    const didRepository: Repository<entities.DID> =
      this.dataSource.manager.getRepository("did");
    const privateKeysRepository =
      this.dataSource.manager.getRepository("private_key");
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
        })
      );

      return didsWithKeys.map((item) => ({
        did: DID.fromString(item.did),
        privateKeys: item.privateKeys.map((key) => ({
          keyCurve: getKeyCurveByNameAndIndex(key.curve, key.keyPathIndex),
          value: Buffer.from(key.privateKey),
        })),
      })) as PeerDID[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously get a dids privateKey by providing its instance
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getDIDPrivateKeysByDID(did: DID): Promise<PrivateKey[]> {
    const repository = this.dataSource.manager.getRepository("private_key");
    try {
      const didString = did.toString();
      const data = await repository.findBy({
        didId: Like(`${didString}%`),
      });
      return data.map((item) => ({
        keyCurve: getKeyCurveByNameAndIndex(item.curve),
        value: Buffer.from(item.privateKey),
      })) as PrivateKey[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously get a dids private key by providing its ID
   *
   * @async
   * @param {string} id
   * @returns {unknown}
   */
  async getDIDPrivateKeyByID(id: string) {
    const repository = this.dataSource.manager.getRepository("private_key");

    try {
      const data = await repository.findOne({
        where: {
          id,
        },
      });
      if (!data) {
        return null;
      }
      return {
        keyCurve: getKeyCurveByNameAndIndex(data.curve),
        value: Buffer.from(data.privateKey),
      } as PrivateKey;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously get did pairs, also known as didcomm connections
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
        host: DID.fromString(didPair.hostDID),
        name: didPair.name,
        receiver: DID.fromString(didPair.receiverDID),
      })) as DIDPair[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously get a didPair by providing one of the connected dids
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getPairByDID(did: DID) {
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
        host: DID.fromString(data.hostDID),
        name: data.name,
        receiver: DID.fromString(data.receiverDID),
      } as DIDPair;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously fetch a did pair by its name
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
        host: DID.fromString(data.hostDID),
        name: data.name,
        receiver: DID.fromString(data.receiverDID),
      } as DIDPair;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  /**
   * Asyncronously fetch all the messages
   *
   * @async
   * @returns {unknown}
   */
  async getAllMessages() {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find();

    return data.map(Pluto.transformMessageDBToInterface);
  }

  /**
   * Asyncronously fetch all the messages from this DID
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getAllMessagesByDID(did: DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        from: did.toString(),
      },
    });

    return data.map(Pluto.transformMessageDBToInterface);
  }

  /**
   * Asyncronously fetch all sent messages
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
    return data.map(Pluto.transformMessageDBToInterface);
  }

  /**
   * Asyncronously fetch all received messages
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
    return data.map(Pluto.transformMessageDBToInterface);
  }

  /**
   * Asyncronously fetch all the messages that have been sent to a specific DID
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getAllMessagesSentTo(did: DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        to: did.toString(),
      },
    });
    return data.map(Pluto.transformMessageDBToInterface);
  }

  /**
   * GEt all the Messages received on a specific DID
   *
   * @async
   * @param {DID} did
   * @returns {unknown}
   */
  async getAllMessagesReceivedFrom(did: DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        from: did.toString(),
      },
    });
    return data.map(Pluto.transformMessageDBToInterface);
  }

  /**
   * Asyncronously fetch all the messages by specifying the message type, and optionally if they are related to a DID
   *
   * @async
   * @param {string} type
   * @param {?DID} [relatedWithDID]
   * @returns {unknown}
   */
  async getAllMessagesOfType(type: string, relatedWithDID?: DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository
      .createQueryBuilder("message")
      .where("message.type = :type", { type })
      .andWhere(
        ":relatedWithDID IS NULL OR :relatedWithDID IN (message.from, message.to)",
        { relatedWithDID: relatedWithDID?.toString() ?? null }
      )
      .getMany();

    return data.map(Pluto.transformMessageDBToInterface);
  }

  /**
   * Asyncronously fetch all the messages by from or to
   *
   * @async
   * @param {DID} from
   * @param {DID} to
   * @returns {unknown}
   */
  async getAllMessagesByFromToDID(from: DID, to: DID) {
    const repository: Repository<entities.Message> =
      this.dataSource.manager.getRepository("message");
    const data = await repository.find({
      where: {
        from: from.toString(),
        to: to.toString(),
      },
    });
    return data.map(Pluto.transformMessageDBToInterface);
  }

  /**
   * Asyncronously get a message by ID
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
    return Pluto.transformMessageDBToInterface(data);
  }

  /**
   * Asyncronously fetch all the mediators
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
      mediatorDID: DID.fromString(item.mediatorDidId),
      hostDID: DID.fromString(item.hostDidId),
      routingDID: DID.fromString(item.routingDidId),
    })) as Mediator[];
  }

  async getAllCredentials(): Promise<Credential[]> {
    const credentialRepo =
      this.dataSource.manager.getRepository<entities.Credential>("credential");
    const credentials = await credentialRepo.find();

    return credentials.map<Credential>((credentialEntity) => {
      switch (credentialEntity.recoveryId) {
        case JWTVerifiableCredentialRecoveryId:
          const jwtString = Buffer.from(credentialEntity.credentialData, "hex").toString();
          const jwtObj = JSON.parse(jwtString);

          // TODO - remember credentialEntity.id (db id)
          return JWTCredential.fromJWT(jwtObj, jwtString);
        default:
          throw new Error("not implemented");
      }
    });
  }

  async storeCredential(credential: Credential) {
    if (!credential.isStorable()) {
      throw new Error("Credential is not Storable");
    }

    const storable = credential.toStorable();
    const credentialEntity = new entities.Credential();

    credentialEntity.credentialData = Buffer.from(storable.credentialData).toString("hex");
    credentialEntity.recoveryId = storable.recoveryId;
    credentialEntity.issuer = storable.issuer;
    credentialEntity.subject = storable.subject;
    credentialEntity.credentialCreated = storable.credentialCreated;
    credentialEntity.credentialUpdated = storable.credentialUpdated;
    credentialEntity.credentialSchema = storable.credentialSchema;
    credentialEntity.validUntil = storable.validUntil;
    credentialEntity.revoked = storable.revoked ? 1 : 0;

    const storedCredential = await this.dataSource.manager.save(
      credentialEntity
    );

    for (const claim in storable.availableClaims) {
      const claimEntity = new entities.AvailableClaims();
      claimEntity.claim = claim;
      claimEntity.credentialId = storedCredential.id;

      await this.dataSource.manager.save(claimEntity);
    }
  }

  async getLinkSecret(): Promise<Anoncreds.LinkSecret | null> {
    const repo = this.dataSource.manager.getRepository<LinkSecret>("linksecret");
    const result = await repo.find();

    return result.at(0)?.id ?? null;
  }

  async storeLinkSecret(linkSecret: Anoncreds.LinkSecret): Promise<void> {
    const entity = new entities.LinkSecret();
    entity.id = linkSecret;

    await this.dataSource.manager.save(entity);
  }
}
