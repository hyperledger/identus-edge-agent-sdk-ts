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
import {default as PlutoInterface} from '../domain/buildingBlocks/Pluto';
import {Buffer} from 'buffer';

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
  privateKey: Buffer;
  keyPathIndex: number;
  didId: string;
}

export default class Pluto extends Connection implements PlutoInterface {

  constructor(connection: ConnectionParams) {
    super(connection);
  }

  private static transformCredentialToVerifiableCredentialInterface(result: CredentialDBResult): VerifiableCredential {
    const json = JSON.parse(result.verifiableCredentialJson) as VerifiableCredential;
    return {
      ...json,
      // override
      id: result.id,
      issuer: DID.fromString(result.issuerDIDId),
    };
  }

  private static transformPrivateKeyToPrivateKeyInterface(result: PrivateKeyDBResult): PrivateKey {
    return {
      value: Buffer.from(result.privateKey),
      keyCurve: getKeyCurveByNameAndIndex(result.curve)
    };
  }

  private static transformToMessageInterface(result: { id: string, createdTime: string, dataJson: string, from: string, thid: string, to: string, type: string, isReceived: string }) {
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

  getAllPrismDIDs(): PrismDIDInfo[] | Promise<PrismDIDInfo[]> {
    const fetch = this.getMethod<"DID">('DID', 'fetchAllPrismDID');
    return this.execAsMany<PrismDIDInfo>(fetch);
  }

  getDIDInfoByDID(did: DID): PrismDIDInfo | null | Promise<PrismDIDInfo | null> {
    const fetch = this.getMethod<"DID">('DID', 'fetchDIDInfoByDID');
    return this.execAsOne<PrismDIDInfo>(fetch, [did.toString()]);
  }

  getDIDInfoByAlias(alias: string): PrismDIDInfo[] | Promise<PrismDIDInfo[]> {
    const fetch = this.getMethod<"DID">('DID', 'fetchDIDInfoByAlias');
    return this.execAsMany<PrismDIDInfo>(fetch, [alias]);
  }

  getPrismDIDKeyPathIndex(did: DID): number | null | Promise<number | null> {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchKeyPathIndexByDID');
    const result = this.execAsOne<{ keyPathIndex: number } | null>(fetch, [
      did.toString()
    ]);
    if (result instanceof Promise) {
      return new Promise((resolve, reject) => {
        result.then(value => resolve(value?.keyPathIndex ?? null)).catch(reject);
      });
    }
    return result?.keyPathIndex ?? null;
  }

  getPrismLastKeyPathIndex(): number | Promise<number> {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchLastkeyPathIndex');
    const result = this.execAsOne<{ keyPathIndex: number }>(fetch);
    if (result instanceof Promise) {
      return new Promise((resolve, reject) => {
        result.then(value => resolve(value?.keyPathIndex ?? 0)).catch(reject);
      });
    }

    return result?.keyPathIndex ?? 0;
  }

  getAllPeerDIDs(): PeerDID[] | Promise<PeerDID[]> {
    const fetch = this.getMethod<"DID">('DID', 'fetchAllPeerDID');
    return this.execAsMany<PeerDID>(fetch);
  }

  getDIDPrivateKeysByDID(did: DID): Array<PrivateKey> | Promise<Array<PrivateKey>> | null {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchPrivateKeyByDID');
    if (this.type === 'sqlite') {
      const data = this.execAsMany<PrivateKeyDBResult>(fetch, [did.toString()]) as Promise<Array<PrivateKeyDBResult>>;
      return new Promise((resolve, reject) => {
        data
            .then((dbData) => {
              resolve(dbData.map(Pluto.transformPrivateKeyToPrivateKeyInterface));
            })
            .catch((error) => {
              reject(error);
            });
      });
    } else {
      const data = this.execAsMany<PrivateKeyDBResult>(fetch, [did.toString()]) as PrivateKeyDBResult[];
      return data.map(Pluto.transformPrivateKeyToPrivateKeyInterface);
    }
  }

  getDIDPrivateKeyByID(id: string): PrivateKey | null | Promise<PrivateKey | null> {
    const fetch = this.getMethod<"PrivateKey">('PrivateKey', 'fetchPrivateKeyByID');
    const result = this.execAsOne<{
      id: string,
      curve: Curve,
      privateKey: Buffer,
      keyPathIndex: number,
      didId: string
    }>(fetch, [id]);
    if (result instanceof Promise) {
      return new Promise((resolve, reject) => {
        result.then(value => {
          if (!value) {
            return resolve(null);
          }
          resolve({
            keyCurve: {
              curve: value.curve,
            },
            value: Buffer.from(value.privateKey),
          });
        }).catch(reject);
      });
    }

    if (!result) {
      return result;
    }
    return {
      keyCurve: {
        curve: result.curve,
      },
      value: result.privateKey,
    };
  }

  getAllDidPairs(): DIDPair[] | Promise<DIDPair[]> {
    const fetch = this.getMethod<"DIDPair">('DIDPair', 'fetchAllDIDPairs');
    return this.execAsMany<DIDPair>(fetch);
  }

  getPairByDID(did: DID): DIDPair | null | Promise<DIDPair | null> {
    const fetch = this.getMethod<"DIDPair">('DIDPair', 'fetchDIDPairByDID');
    const result = this.execAsOne<{
      id: string;
      name: string;
      hostDID: string;
      receiverDID: string;
    }>(fetch, [did.toString()]);
    if (result instanceof Promise) {
      return new Promise((resolve, reject) => {
        result.then((value) => {

          if (!value) {
            return resolve(null);
          }
          resolve({
            host: DID.fromString(value.hostDID),
            receiver: DID.fromString(value.receiverDID),
            name: value.name
          });
        }).catch(reject);
      });
    }
    if (!result) {
      return null;
    }
    return {
      host: DID.fromString(result.hostDID),
      receiver: DID.fromString(result.receiverDID),
      name: result.name
    };
  }

  getPairByName(name: string): DIDPair | null | Promise<DIDPair | null> {
    const fetch = this.getMethod<"DIDPair">("DIDPair", 'fetchDIDPairByName');
    return this.execAsOne<DIDPair>(fetch, [name]);
  }

  getAllMessages(): Promise<Message[]> | Message[] {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessages');
    const data = this.execAsMany<MessageDBResult>(fetch);
    if (Array.isArray(data)) {
      return data.map(Pluto.transformToMessageInterface);
    } else {
      return new Promise((resolve, reject) => {
        data.then(dbData => dbData.map(Pluto.transformToMessageInterface)).catch(reject);
      });
    }

  }

  getAllMessagesByDID(did: DID): Message[] | Promise<Message[]> {
    // Question: This method is not implemented in Kotlin, is it missing or just not wanted anymore?
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesReceivedFrom');
    const data = this.execAsMany<MessageDBResult>(fetch, [did.toString()]);
    if (Array.isArray(data)) {
      return data.map(Pluto.transformToMessageInterface);
    } else {
      return new Promise((resolve, reject) => {
        data.then(dbData => dbData.map(Pluto.transformToMessageInterface)).catch(reject);
      });
    }
  }

  getAllMessagesSent(): Message[] | Promise<Message[]> {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllSentMessages');
    const data = this.execAsMany<MessageDBResult>(fetch);
    if (Array.isArray(data)) {
      return data.map(Pluto.transformToMessageInterface);
    } else {
      return new Promise((resolve, reject) => {
        data
            .then((dbData) => resolve(dbData.map(Pluto.transformToMessageInterface)))
            .catch(error => reject(error));
      });
    }
  }

  getAllMessagesReceived(): Message[] | Promise<Message[]> {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllReceivedMessages');
    const data = this.execAsMany<MessageDBResult>(fetch);
    if (Array.isArray(data)) {
      return data.map(Pluto.transformToMessageInterface);
    } else {
      return new Promise((resolve, reject) => {
        data
            .then(dbData => dbData.map(Pluto.transformToMessageInterface))
            .catch(error => reject(error));
      });
    }
  }

  getAllMessagesSentTo(did: DID): Message[] | Promise<Message[]> {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesSentTo');
    const data = this.execAsMany<MessageDBResult>(fetch, [did.toString()]);
    if (Array.isArray(data)) {
      return data.map(Pluto.transformToMessageInterface);
    } else {
      return new Promise((resolve, reject) => {
        data.then(dbData => dbData.map(Pluto.transformToMessageInterface)).catch(error => reject(error));
      });
    }
  }

  getAllMessagesReceivedFrom(did: DID): Message[] | Promise<Message[]> {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesReceivedFrom');
    const data = this.execAsMany<MessageDBResult>(fetch, [did.toString()]);
    if (Array.isArray(data)) {
      return data.map(Pluto.transformToMessageInterface);
    } else {
      return new Promise((resolve, reject) => {
        data
            .then(dbData => resolve(dbData.map(Pluto.transformToMessageInterface)))
            .catch(error => reject(error));
      });
    }
  }

  getAllMessagesOfType(type: string, relatedWithDID?: DID): Message[] | Promise<Message[]> {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesOfType');
    const data = this.execAsMany<MessageDBResult>(fetch, {
      ":type": type,
      ':relatedWithDID': relatedWithDID?.toString() ?? null,
    });
    if (Array.isArray(data)) {
      return data.map(Pluto.transformToMessageInterface);
    } else {
      return new Promise((resolve, reject) => {
        data.then((dbData) => {
          resolve(dbData.map(Pluto.transformToMessageInterface));
        }).catch(error => reject(error));
      });
    }
  }

  getAllMessagesByFromToDID(from: DID, to: DID): Message[] | Promise<Message[]> {
    const fetch = this.getMethod<"Message">('Message', 'fetchAllMessagesFromTo');
    const data = this.execAsMany<MessageDBResult>(fetch, {
      ":from": from.toString(),
      ":to": to.toString(),
    });
    if (Array.isArray(data)) {
      return data.map(Pluto.transformToMessageInterface);
    } else {
      return new Promise((resolve, reject) => {
        data.then((dbData) => {
          resolve(dbData.map(Pluto.transformToMessageInterface));
        }).catch(error => reject(error));
      });
    }
  }

  getMessage(id: string): Message | null | Promise<Message | null> {
    const fetch = this.getMethod<"Message">('Message', 'fetchMessageById');
    const result = this.execAsOne<MessageDBResult>(fetch, [id]);
    if (result instanceof Promise) {
      return new Promise((resolve, reject) => {
        result.then((value) => {
          if (!value) {
            return resolve(value);
          }

          resolve(Pluto.transformToMessageInterface(value));
        }).catch(reject);
      });
    }
    if (!result) {
      return null;
    }
    return Pluto.transformToMessageInterface(result);
  }

  getAllMediators(): Mediator[] | Promise<Mediator[]> {
    const fetch = this.getMethod<"Mediator">('Mediator', 'fetchAllMediators');
    return this.execAsMany<Mediator>(fetch);
  }

  getAllCredentials(): VerifiableCredential[] | Promise<VerifiableCredential[]> {
    const fetch = this.getMethod<"VerifiableCredential">('VerifiableCredential', 'fetchAllCredentials');
    const data = this.execAsMany<CredentialDBResult>(fetch);
    if (Array.isArray(data)) {
      return data.map(Pluto.transformCredentialToVerifiableCredentialInterface);
    } else {
      return new Promise((resolve, reject) => {
        data.then((dbData) => {
          resolve(dbData.map(Pluto.transformCredentialToVerifiableCredentialInterface));
        }).catch(error => reject(error));
      });
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
}
