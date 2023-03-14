import {DID, PrivateKey} from "../models";
import {DIDPair} from "../models/DIDPair";
import {Mediator} from "../models/Mediator";
import {Message} from "../models/Message";
import {PeerDID} from "../models/PeerDID";
import {PrismDIDInfo} from "../models/PrismDIDInfo";
import {VerifiableCredential} from "../models/VerifiableCredential";
import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {CockroachConnectionOptions} from 'typeorm/driver/cockroachdb/CockroachConnectionOptions';
import {SqliteConnectionOptions} from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import {SqlServerConnectionOptions} from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import {SapConnectionOptions} from 'typeorm/driver/sap/SapConnectionOptions';
import {OracleConnectionOptions} from 'typeorm/driver/oracle/OracleConnectionOptions';
import {CordovaConnectionOptions} from 'typeorm/driver/cordova/CordovaConnectionOptions';
import {NativescriptConnectionOptions} from 'typeorm/driver/nativescript/NativescriptConnectionOptions';
import {ReactNativeConnectionOptions} from 'typeorm/driver/react-native/ReactNativeConnectionOptions';
import {SqljsConnectionOptions} from 'typeorm/driver/sqljs/SqljsConnectionOptions';
import {MongoConnectionOptions} from 'typeorm/driver/mongodb/MongoConnectionOptions';
import {AuroraMysqlConnectionOptions} from 'typeorm/driver/aurora-mysql/AuroraMysqlConnectionOptions';
import {AuroraPostgresConnectionOptions} from 'typeorm/driver/aurora-postgres/AuroraPostgresConnectionOptions';
import {ExpoConnectionOptions} from 'typeorm/driver/expo/ExpoConnectionOptions';
import {BetterSqlite3ConnectionOptions} from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions';
import {CapacitorConnectionOptions} from 'typeorm/driver/capacitor/CapacitorConnectionOptions';
import {SpannerConnectionOptions} from 'typeorm/driver/spanner/SpannerConnectionOptions';

type IgnoreProps = "entries" | "entityPrefix" | "metadataTableName";
export type PlutoConnectionProps =
    Omit<MysqlConnectionOptions, IgnoreProps>
    | Omit<PostgresConnectionOptions, IgnoreProps>
    | Omit<CockroachConnectionOptions, IgnoreProps>
    | Omit<SqliteConnectionOptions, IgnoreProps>
    | Omit<SqlServerConnectionOptions, IgnoreProps>
    | Omit<SapConnectionOptions, IgnoreProps>
    | Omit<OracleConnectionOptions, IgnoreProps>
    | Omit<CordovaConnectionOptions, IgnoreProps>
    | Omit<NativescriptConnectionOptions, IgnoreProps>
    | Omit<ReactNativeConnectionOptions, IgnoreProps>
    | Omit<SqljsConnectionOptions, IgnoreProps>
    | Omit<MongoConnectionOptions, IgnoreProps>
    | Omit<AuroraMysqlConnectionOptions, IgnoreProps>
    | Omit<AuroraPostgresConnectionOptions, IgnoreProps>
    | Omit<ExpoConnectionOptions, IgnoreProps>
    | Omit<BetterSqlite3ConnectionOptions, IgnoreProps>
    | Omit<CapacitorConnectionOptions, IgnoreProps>
    | Omit<SpannerConnectionOptions, IgnoreProps>;

export default interface Pluto {
  start(): Promise<void>;

  storePrismDID(did: DID, keyPathIndex: number, privateKey: PrivateKey, privateKeyMetaId: string | null, alias?: string): Promise<void>;

  storePeerDID(did: DID, privateKeys: Array<PrivateKey>): Promise<void>;

  storeDIDPair(host: DID, receiver: DID, name: string): Promise<void>;

  storeMessage(message: Message): Promise<void>;

  storeMessages(messages: Array<Message>): Promise<void>;

  storePrivateKeys(
      privateKey: PrivateKey,
      did: DID,
      keyPathIndex: number,
      metaId: string | null
  ): Promise<void>;

  storeMediator(mediator: DID, host: DID, routing: DID): Promise<void>;

  storeCredential(credential: VerifiableCredential): Promise<void>;

  getAllPrismDIDs(): Promise<PrismDIDInfo[]>;

  getDIDInfoByDID(did: DID): Promise<PrismDIDInfo | null>;

  getDIDInfoByAlias(alias: string): Promise<PrismDIDInfo[]>;

  getPrismDIDKeyPathIndex(did: DID): Promise<number | null>;

  getPrismLastKeyPathIndex(): Promise<number>;

  getAllPeerDIDs(): Promise<Array<PeerDID>>;

  getDIDPrivateKeysByDID(did: DID): Promise<Array<PrivateKey> | null>;

  getDIDPrivateKeyByID(id: string): Promise<PrivateKey | null>;

  getAllDidPairs(): Promise<Array<DIDPair>>;

  getPairByDID(did: DID): Promise<DIDPair | null>;

  getPairByName(name: string): Promise<DIDPair | null>;

  getAllMessages(): Promise<Array<Message>>;

  getAllMessagesByDID(did: DID): Promise<Array<Message>>;

  getAllMessagesSent(): Promise<Array<Message>>;

  getAllMessagesReceived(): Promise<Array<Message>>;

  getAllMessagesSentTo(did: DID): Promise<Array<Message>>;

  getAllMessagesReceivedFrom(did: DID): Promise<Array<Message>>;

  getAllMessagesOfType(type: string, relatedWithDID?: DID): Promise<Array<Message>>;

  getAllMessagesByFromToDID(from: DID, to: DID): Promise<Array<Message>>;

  getMessage(id: string): Promise<Message | null>;

  getAllMediators(): Promise<Array<Mediator>>;

  getAllCredentials(): Promise<Array<VerifiableCredential>>;
}
