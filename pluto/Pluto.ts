import {default as PlutoInterface} from '../domain/buildingBlocks/Pluto';
import {Curve, DID, getKeyCurveByNameAndIndex, PrivateKey} from '../domain/models';
import {DIDPair} from '../domain/models/DIDPair';
import {Mediator} from '../domain/models/Mediator';
import {Message, MessageDirection} from '../domain/models/Message';
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
import {AttachmentDescriptor} from '../domain/models/MessageAttachment';

type TableName = "DID" | "DIDPair" | "Mediator" | "Message" | "PrivateKey" | "VerifiableCredential";
type MethodType<tablename> =
    tablename extends "DID" ? DIDQueriesTypes :
        tablename extends "DIDPair" ? DIDPairQueriesTypes :
            tablename extends "Mediator" ? MediatorQueriesTypes :
                tablename extends "Message" ? MessageQueriesTypes :
                    tablename extends "PrivateKey" ? PrivateKeyQueriesTypes :
                        tablename extends "VerifiableCredential" ? VerifiableCredentialQueriesTypes : null;

type MessageDBResult = { id: string, createdTime: string, dataJson: string, from: string, thid: string, to: string, type: string, isReceived: string };
type CredentialDBResult = {
  id: string;
  credentialType: string;
  expirationDate: string;
  issuanceDate: string;
  verifiableCredentialJson: string;
  issuerDIDId: string;
}
type PrivateKeyDBResult = {
  id: string;
  curve: string;
  privateKey: string;
  keyPathIndex: number;
  didId: string;
}

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

  storePrismDID(did: DID, keyPathIndex: number, privateKey: PrivateKey, privateKeyMetaId: string | null, alias?: string) {
    const insert = this.getMethod<"DID">('DID', 'insert');
    const result = this.database?.run(insert, [did.toString(), did.method, did.methodId, did.schema, alias ?? ""]);
    this.storePrivateKeys(privateKey, did, keyPathIndex, privateKeyMetaId);
    return result;
  }

  storePeerDID(did: DID, privateKeys: PrivateKey[]) {
    const insertPeerDid = this.getMethod<"DID">('DID', 'insert');
    const insertPrivateKeys = this.getMethod<"PrivateKey">('PrivateKey', 'insert');
    this.database?.run(insertPeerDid, [did.toString(), did.method, did.methodId, did.schema, null]);
    privateKeys.forEach((privateKey) => this.database?.run(insertPrivateKeys, [uuidv4(), privateKey.keyCurve.curve, privateKey.value.toString(), privateKey.keyCurve?.index ?? 0, did.toString()]));
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
      message.piuri ?? null, // Question: What does piuri mean? Isn't supposed to be called "type" instead?
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
      did.toString()
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
        did.toString()
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
    const fetch = this.getMethod<"DID">('DID', 'fetchAllPeerDID');
    try {
      return this.execAsMany<PeerDID>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getDIDPrivateKeysByDID(did: DID): PrivateKey[] | null {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchPrivateKeyByDID');
    try {
      return this.execAsMany<PrivateKeyDBResult>(fetch, [did.toString()]).map(this.transformPrivateKeyToPrivateKeyInterface);
    } catch (error) {
      throw error;
    }
  }

  getDIDPrivateKeyByID(id: string): PrivateKey | null {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchPrivateKeyByID');
    try {
      const result = this.execAsOne<{
        id: string,
        curve: Curve,
        privateKey: string,
        keyPathIndex: number,
        didId: string
      }>(fetch, [id]);
      if (!result) {
        return result;
      }
      return {
        keyCurve: {
          curve: result.curve,
        },
        value: result.privateKey,
      };
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
      const result = this.execAsOne<{
        id: string;
        name: string;
        hostDID: string;
        receiverDID: string;
      }>(fetch, [did.toString()]);
      if (!result) {
        return null;
      }
      return {
        host: DID.fromString(result.hostDID),
        receiver: DID.fromString(result.receiverDID),
        name: result.name
      };
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
      return this.execAsMany<MessageDBResult>(fetch).map(this.transformToMessageInterface);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesByDID(did: DID): Message[] {
    // Question: This method is not implemented in Kotlin, is it missing or just not wanted anymore?
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesReceivedFrom');
    try {
      return this.execAsMany<MessageDBResult>(fetch, [did.toString()]).map(this.transformToMessageInterface);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesSent(): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllSentMessages');
    try {
      return this.execAsMany<MessageDBResult>(fetch).map(this.transformToMessageInterface);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesReceived(): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllReceivedMessages');
    try {
      return this.execAsMany<MessageDBResult>(fetch).map(this.transformToMessageInterface);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesSentTo(did: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesSentTo');
    try {
      return this.execAsMany<MessageDBResult>(fetch, [did.toString()]).map(this.transformToMessageInterface);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesReceivedFrom(did: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesReceivedFrom');
    try {
      return this.execAsMany<MessageDBResult>(fetch, [did.toString()]).map(this.transformToMessageInterface);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesOfType(type: string, relatedWithDID?: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesOfType');
    // Issue: This method, implements a useless case relatedWithDID parameter, which is expected to be both, the ":from" and ":to" fields.
    //        Unable to write a test scenario for this usecase, where :from and :to is the same DID.
    const method = relatedWithDID ? fetch : fetch.replace("AND \`from\` = :from", "").replace("AND \`to\` = :to;", "");
    try {
      return this.execAsMany<MessageDBResult>(method, {
        ":type": type,
        ':from': relatedWithDID?.toString() ?? null, // required in query
        ':to': relatedWithDID?.toString() ?? null, // required in query
      }).map(this.transformToMessageInterface);
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesByFromToDID(from: DID, to: DID): Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesFromTo');
    try {
      return this.execAsMany<MessageDBResult>(fetch, {
        ":from": from.toString(),
        ":to": to.toString(),
      }).map(this.transformToMessageInterface);
    } catch (error) {
      throw error;
    }
  }

  getMessage(id: string): Message | null {
    const fetch = this.getMethod<"Message">('Message', 'fetchMessageById');
    try {
      const result = this.execAsOne<MessageDBResult>(fetch, [id]);
      if (!result) {
        return null;
      }
      return this.transformToMessageInterface(result);
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
      return this.execAsMany<CredentialDBResult>(fetch).map(this.transformCredentialToVerifiableCredentialInterface);
    } catch (error) {
      throw error;
    }
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

  private transformCredentialToVerifiableCredentialInterface(result: CredentialDBResult): VerifiableCredential {
    const json = JSON.parse(result.verifiableCredentialJson) as VerifiableCredential;
    return {
      ...json,
      // override
      id: result.id,
      issuer: DID.fromString(result.issuerDIDId),
    };
  }

  private transformPrivateKeyToPrivateKeyInterface(result: PrivateKeyDBResult): PrivateKey {
    return {
      value: result.privateKey,
      keyCurve: getKeyCurveByNameAndIndex(result.curve)
    };
  }

  private transformToMessageInterface(result: { id: string, createdTime: string, dataJson: string, from: string, thid: string, to: string, type: string, isReceived: string }) {
    const data = JSON.parse(result.dataJson);
    return {
      piuri: result.type,
      id: result.id,
      direction: result.isReceived ? MessageDirection.RECEIVED : MessageDirection.SENT,
      ack: data.ack,
      body: data.body,
      extraHeaders: data.extraHeaders as unknown as string[],
      createdTime: result.createdTime,
      expiresTimePlus: data.expiresTimePlus,
      attachments: data.attachments as unknown as AttachmentDescriptor[],
      from: DID.fromString(result.from),
      to: DID.fromString(result.to),
      fromPrior: data.fromPrior,
      thid: result.thid,
      pthid: data.pthid,
    } as Message;
  }

  private transformResponseToObject(values: any, columns: any) {
    let object: { [key: string]: string | number | null } = {};
    for (let key in columns) {
      object[columns[key]] = values[key];
    }
    return object;
  }

  private execAsOne<param>(query: string, params?: (string | number | null)[] | { [key: string]: (string | null | number) }): param | null {
    // @ts-ignore
    let result = this.database?.exec(query, params) as any;
    if (!result.length) {
      return null;
    }
    return this.transformResponseToObject(result[0].values[0], result[0].columns) as unknown as param;
  }

  private execAsMany<param>(query: string, params?: (string | number | null)[] | { [key: string]: (string | null | number) }): param[] {
    // @ts-ignore
    let result = this.database?.exec(query, params) as any;
    if (!result.length) {
      return [];
    }
    return result[0].values.map((values: any) => this.transformResponseToObject(values, result[0].columns));
  }

}
