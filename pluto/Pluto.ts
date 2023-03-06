import {default as PlutoInterface} from '../domain/buildingBlocks/Pluto';
import {DID, PrivateKey} from '../domain/models';
import {DIDPair} from '../domain/models/DIDPair';
import {Mediator} from '../domain/models/Mediator';
import {Message} from '../domain/models/Message';
import {PeerDID} from '../domain/models/PeerDID';
import {PrismDIDInfo} from '../domain/models/PrismDIDInfo';
import {VerifiableCredential} from '../domain/models/VerifiableCredential';
import Connection from './Connection';
import {ConnectionParams} from '../domain/models/Connection';
import {v4 as uuidv4} from 'uuid';
import DIDQueries, {DIDQueriesTypes} from './queries/DID';
import DIDPairQueries, {DIDPairQueriesTypes} from './queries/DIDPair';
import MediatorQueries, {MediatorQueriesTypes} from './queries/Mediator';
import MessageQueries, {MessageQueriesTypes} from './queries/Message';
import PrivateKeyQueries, {PrivateKeyQueriesTypes} from './queries/PrivateKey';
import VerifiableCredentialQueries, {VerifiableCredentialQueriesTypes} from './queries/VerifiableCredential';

type TableName = "DID" | "DIDPair" | "Mediator" | "Message" | "PrivateKey" | "VerifiableCredential";
type MethodType<tablename> =
    tablename extends "DID" ? DIDQueriesTypes :
        tablename extends "DIDPair" ? DIDPairQueriesTypes :
            tablename extends "Mediator" ? MediatorQueriesTypes :
                tablename extends "Message" ? MessageQueriesTypes :
                    tablename extends "PrivateKey" ? PrivateKeyQueriesTypes :
                        tablename extends "VerifiableCredential" ? VerifiableCredentialQueriesTypes : null;

export default class Pluto extends Connection implements PlutoInterface {
  constructor(connection: ConnectionParams) {
    super(connection);
  }

  getMethod<tablename>(tableName: TableName, method: MethodType<tablename>): string {
    let _method: string | null = null;
    switch (tableName) {
      case 'DID':
        _method = DIDQueries[method as DIDQueriesTypes];
        break;
      case 'DIDPair':
        _method = DIDPairQueries[method as DIDPairQueriesTypes];
        break;
      case 'Mediator':
        _method = MediatorQueries[method as MediatorQueriesTypes];
        break;
      case 'Message':
        _method = MessageQueries[method as MessageQueriesTypes];
        break;
      case 'PrivateKey':
        _method = PrivateKeyQueries[method as PrivateKeyQueriesTypes];
        break;
      case 'VerifiableCredential':
        _method = VerifiableCredentialQueries[method as VerifiableCredentialQueriesTypes];
        break;
    }
    if (_method === null) {
      throw new Error("Method not found");
    }
    return _method;
  }

  async start(): Promise<any> {
    await this.connect();
    const methods = [DIDQueries, DIDPairQueries, MediatorQueries, MessageQueries, PrivateKeyQueries, VerifiableCredentialQueries];
    methods.forEach(item => {
      this.connected && this.database?.run(item.createTable);
    });
  }

  storePrismDID(did: DID, keyPathIndex: number, alias?: string | undefined) {
    const insert = this.getMethod<"DID">('DID', 'insert');
    return this.database?.run(insert, [did.toString(), did.method, did.methodId, did.schema, alias ?? ""]);
  }

  storePeerDID(did: DID, privateKeys: PrivateKey[]) {
    const insertPeerDid = this.getMethod<"DID">('DID', 'insert');
    const insertPrivateKeys = this.getMethod<"PrivateKey">('PrivateKey', 'insert');
    this.database?.run(insertPeerDid, [did.toString(), did.method, did.methodId, did.schema, null]);
    privateKeys.forEach((privateKey) => this.database?.run(insertPrivateKeys, [uuidv4(), privateKey.keyCurve.curve, privateKey.value.toString(), privateKey.keyCurve?.index ?? 0, did.methodId]));
  }

  storeDIDPair(host: DID, receiver: DID, name: string) {
    const insert = this.getMethod<"DIDPair">('DIDPair', 'insert');
    this.database?.run(insert, [`${host}${receiver}`, name, host.toString(), receiver.toString()]);
  }

  storeMessage(message: Message) {
    const insert = this.getMethod<"Message">('Message', 'insert');
    const id = uuidv4();
    this.database?.run(insert, [
      id,
      message.createdTime,
      JSON.stringify(message),
      message.from?.toString() ?? null,
      message?.thid ?? null,
      message.to?.toString() ?? null,
      message.piuri,
      message.direction
    ]);
  }

  storeMessages(messages: Message[]) {
    messages.forEach(this.storeMessage.bind(this));
  }

  storePrivateKeys(privateKey: PrivateKey, did: DID, keyPathIndex: number, metaId: string | null) {
    const insert = this.getMethod<"PrivateKey">('PrivateKey', 'insert');
    this.database?.run(insert, [
      metaId ?? uuidv4(),
      privateKey.keyCurve.curve.toString(),
      privateKey.value.toString(),
      keyPathIndex ?? 0,
      did.methodId
    ]);
  }

  storeMediator(mediator: DID, host: DID, routing: DID) {
    const insert = this.getMethod<"Mediator">('Mediator', 'insert');
    this.database?.run(insert, [
      uuidv4(),
      mediator.methodId,
      host.methodId,
      routing.methodId,
    ]);
  }

  storeCredential(credential: VerifiableCredential) {
    const insert = this.getMethod<"VerifiableCredential">('VerifiableCredential', 'insert');
    this.database?.run(insert, [
      uuidv4(),
      credential.credentialType,
      credential.expirationDate,
      credential.issuanceDate,
      JSON.stringify(credential),
      credential.issuer.toString(),
    ]);
  }

  getAllPrismDIDs(): PrismDIDInfo[] {
    const fetch = this.getMethod<"DID">('DID', 'fetchAllPrismDID');
    try {
      return this.execAsMany<PrismDIDInfo>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getDIDInfoByDID(did: DID): PrismDIDInfo | null {
    const fetch = this.getMethod<"DID">('DID', 'fetchDIDInfoByDID');
    try {
      return this.execAsOne<PrismDIDInfo>(fetch, [did.toString()]);
    } catch (error) {
      throw error;
    }
  }

  getDIDInfoByAlias(alias: string): PrismDIDInfo[] {
    const fetch = this.getMethod<"DID">('DID', 'fetchDIDInfoByAlias');
    try {
      return this.execAsMany<PrismDIDInfo>(fetch, [alias]);
    } catch (error) {
      throw error;
    }
  }

  getPrismDIDKeyPathIndex(did: DID): number | null {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchKeyPathIndexByDID');
    try {
      const result = this.execAsOne<{ keyPathIndex: number }>(fetch, [
        did.methodId
      ]);
      return result?.keyPathIndex ?? null;
    } catch (error) {
      throw error;
    }
  }

  getPrismLastKeyPathIndex(): number {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchLastkeyPathIndex');
    try {
      const result = this.execAsOne<{ keyPathIndex: number }>(fetch);
      return result?.keyPathIndex ?? 0;
    } catch (error) {
      throw error;
    }
  }

  getAllPeerDIDs(): PeerDID[] {
    const fetch = this.getMethod<"DIDPair">('DIDPair', 'fetchAllDIDPairs');
    try {
      return this.execAsMany<PeerDID>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getDIDPrivateKeysByDID(did: DID): PrivateKey[] | null {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchPrivateKeyByDID');
    try {
      /*
      * Issue:
      *  The query expects didId as the parameter, which should be DID.methodId instead of did.toString()
      * */
      return this.execAsMany<PrivateKey>(fetch, [did.toString()]);
    } catch (error) {
      throw error;
    }
  }

  getDIDPrivateKeyByID(id: string): PrivateKey | null {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchPrivateKeyByID');
    try {
      return this.execAsOne<PrivateKey>(fetch, [id]);
    } catch (error) {
      throw error;
    }
  }

  getAllDidPairs(): DIDPair[] {
    const fetch = this.getMethod<"DIDPair">('DIDPair', 'fetchAllDIDPairs');
    try {
      return this.execAsMany<DIDPair>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getPairByDID(did: DID): DIDPair | null {
    const fetch = this.getMethod<"DIDPair">('DIDPair', 'fetchDIDPairByDID');
    try {
      return this.execAsOne<DIDPair>(fetch, [did.toString()]);
    } catch (error) {
      throw error;
    }
  }

  getPairByName(name: string): DIDPair | null {
    const fetch = this.getMethod<"DIDPair">("DIDPair", 'fetchDIDPairByName');
    try {
      return this.execAsOne<DIDPair>(fetch, [name]);
    } catch (error) {
      throw error;
    }
  }

  getAllMessages(): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessages');
    try {
      return this.execAsMany(fetch) as Message[];
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesByDID(did: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesFromTo');
    try {
      return this.execAsMany<Message>(fetch, {
        ":from": did.toString(),
        ":to": did.toString(),
      });
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesSent(): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllSentMessages');
    try {
      return this.execAsMany<Message>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesReceived(): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllReceivedMessages');
    try {
      return this.execAsMany<Message>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesSentTo(did: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesSentTo');
    try {
      return this.execAsMany<Message>(fetch, {
        ":to": did.toString(),
      });
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesReceivedFrom(did: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesReceivedFrom');
    try {
      return this.execAsMany<Message>(fetch, [did.toString()]);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesOfType(type: string, relatedWithDID?: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesOfType');
    try {
      return this.execAsMany<Message>(fetch, {
        ":type": type,
        ':from': relatedWithDID?.toString() ?? "", // required in query
        ':to': relatedWithDID?.toString() ?? "", // required in query
      });
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesByFromToDID(from: DID, to: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesFromTo');
    try {
      return this.execAsMany<Message>(fetch, {
        ":from": from.toString(),
        ":to": to.toString(),
      });
    } catch (error) {
      throw error;
    }
  }

  getMessage(id: string): Message | null {
    const fetch = this.getMethod<"Message">('Message', 'fetchMessageById');
    try {
      return this.execAsOne<Message>(fetch, [id]);
    } catch (error) {
      throw error;
    }
  }

  getAllMediators(): Mediator[] {
    const fetch = this.getMethod<"Mediator">('Mediator', 'fetchAllMediators');
    try {
      return this.execAsMany<Mediator>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getAllCredentials(): VerifiableCredential[] {
    const fetch = this.getMethod<"VerifiableCredential">('VerifiableCredential', 'fetchAllCredentials');
    try {
      // not sure if the implementation is correct
      return this.execAsMany<VerifiableCredential>(fetch);
    } catch (error) {
      throw error;
    }
  }

  private transformResponseToObject(values: any, columns: any) {
    let object: { [key: string]: string | number | null } = {};
    for (let key in columns) {
      object[columns[key]] = values[key];
    }
    return object;
  }

  private execAsOne<param>(query: string, params?: (string | number | null)[] | { [key: string]: string }): param | null {
    // @ts-ignore
    let result = this.database?.exec(query, params) as any;
    if (!result.length) {
      return null;
    }
    return this.transformResponseToObject(result[0].values[0], result[0].columns) as unknown as param;
  }

  private execAsMany<param>(query: string, params?: (string | number | null)[] | { [key: string]: string }): param[] {
    // @ts-ignore
    let result = this.database?.exec(query, params) as any;
    if (!result.length) {
      return [];
    }
    return result[0].values.map((values: any) => this.transformResponseToObject(values, result[0].columns));
  }

}
