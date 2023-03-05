import {default as PlutoInterface} from '../domain/buildingBlocks/Pluto';
import {DID, PrivateKey} from '../domain/models';
import {DIDPair} from '../domain/models/DIDPair';
import {Mediator} from '../domain/models/Mediator';
import {Message} from '../domain/models/Message';
import {PeerDID} from '../domain/models/PeerDID';
import {PrismDIDInfo} from '../domain/models/PrismDIDInfo';
import {VerifiableCredential} from '../domain/models/VerifiableCredential';
import Connection from './Connection';
import * as fs from 'fs';
import {ConnectionParams} from '../domain/models/Connection';
import {v4 as uuidv4} from 'uuid';

type DatabaseMethod = {
  [key: string]: string;
}

type SqData = {
  tableName: string;
  createTableMethod: string;
  methods: DatabaseMethod[];
}

export default class Pluto extends Connection implements PlutoInterface {
  readonly sqData: SqData[];
  constructor(connection: ConnectionParams) {
    super(connection);
    this.sqData = this.sqFilesToUTF8;
  }

  private get sqFilesToUTF8() {
    const METHODS_REGEX = /^[^:\n]+:\s*(.*(?:\n(?!$).*)*)/gm;
    const TABLE_CREATION_REGEX = /CREATE TABLE[\s\S]*?\n\n/;
    const METHOD_REGEX = /\b\w+(?=:)/;
    const INSERT_FIELDS_REGEX = /\(([^\s,]+)(,\s*[^\s,]+)*\)/;

    const files = fs.readdirSync(__dirname + "/data");
    return files.map(filename => {
      const fileData = fs.readFileSync(`${__dirname}/data/${filename}`).toString("utf-8");
      const methods: DatabaseMethod[] = [];
      let methodMatch: RegExpMatchArray | null;
      while ((methodMatch = METHODS_REGEX.exec(fileData)) !== null) {
        let methodName = methodMatch[0].match(METHOD_REGEX) ?? "no-match";
        let methodMatching = methodMatch[1];
        if (new RegExp(INSERT_FIELDS_REGEX).test(methodMatching)) {
          const insertFields = methodMatching.match(INSERT_FIELDS_REGEX);
          const fieldsToInsert = insertFields ? insertFields[0].slice(1, -1).split(', ') : [];
          methodMatching = methodMatching.replace("?", `(${fieldsToInsert.map(_ => `?`).join(', ')})`);
        }

        methods.push({[methodName[0]]: methodMatching});
      }
      const createTableMatch = fileData?.match(TABLE_CREATION_REGEX) ?? [];
      const createTableMethod = createTableMatch[0]?.replace('AS Int', '') ?? "";
      return {
        tableName: filename.replace('.sq', ''),
        createTableMethod,
        methods

      } as SqData;
    });
  }

  private transformResponseToObject(values:any, columns:any) {
    let object: {[key: string]: string | number | null} = {};
    for (let key in columns) {
      object[columns[key]] = values[key]
    }
    return object;
  }

  private execAsOne<param>(query:string, params?:(string | number | null)[] | {[key: string]: string}): param | null {
    // @ts-ignore
    let result = this.database?.exec(query, params) as any;

    return this.transformResponseToObject(result[0].values[0], result[0].columns) as unknown as param
  }

  private execAsMany<param>(query:string, params?:(string | number | null)[] | {[key: string]: string}): param[] {
    // @ts-ignore
    let result = this.database?.exec(query, params) as any;
    if(!result.length) {
      return [];
    }
    return result[0].values.map((values:any) => this.transformResponseToObject(values, result[0].columns));
  }

  getMethod(tableName: string, name: string): string {
    const methods = this.sqData.find(item => item.tableName === tableName)?.methods ?? [];
    const method = methods.find(item => item[name]);
    if (method) {
      return method[name];
    } else {
      throw new Error(`Method: ${name}, not found in table ${tableName}`);
    }
  }

  async start(): Promise<any> {
    await this.connect();
    this.sqData.forEach(item => {
      this.connected && this.database?.run(item.createTableMethod);
    });
  }

  storePrismDID(did: DID, keyPathIndex: number, alias?: string | undefined) {
    const insert = this.getMethod('DID', 'insert');
    return this.database?.run(insert, [did.toString(), did.method, did.methodId, did.schema, alias ?? ""]);
  }

  storePeerDID(did: DID, privateKeys: PrivateKey[]) {
    const insertPeerDid = this.getMethod('DIDPeer', 'insert');
    const insertPrivateKeys = this.getMethod('PrivateKey', 'insert');
    this.database?.run(insertPeerDid, [did.toString(), did.method, did.methodId, did.schema, null]);
    privateKeys.forEach((privateKey) => this.database?.run(insertPrivateKeys, [uuidv4(), privateKey.keyCurve.curve, privateKey.value.toString(), privateKey.keyCurve?.index ?? 0, did.methodId]));
  }

  storeDIDPair(host: DID, receiver: DID, name: string) {
    const insert = this.getMethod('DIDPair', 'insert');
    this.database?.run(insert, [`${host}${receiver}`, name, host.toString(), receiver.toString()])
  }

  storeMessage(message: Message) {
    const insert = this.getMethod('Message', 'insert');
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
    ])
  }

  storeMessages(messages: Message[]) {
    messages.forEach(this.storeMessage.bind(this));
  }

  storePrivateKeys(privateKey: PrivateKey, did: DID, keyPathIndex: number, metaId: string | null) {
    const insert = this.getMethod('PrivateKey', 'insert');
    this.database?.run(insert, [
        metaId ?? uuidv4(),
        privateKey.keyCurve.curve.toString(),
        privateKey.value.toString(),
        keyPathIndex??0,
        did.methodId
    ])
  }

  storeMediator(mediator: DID, host: DID, routing: DID) {
    const insert = this.getMethod('Mediator', 'insert');
    this.database?.run(insert, [
        uuidv4(),
        mediator.methodId,
        host.methodId,
        routing.methodId,
    ])
  }

  storeCredential(credential: VerifiableCredential) {
    const insert = this.getMethod('VerifiableCredential', 'insert');
    this.database?.run(insert, [
       uuidv4(),
       credential.credentialType,
       credential.expirationDate,
       credential.issuanceDate,
       JSON.stringify(credential),
       credential.issuer.toString(),
    ])
  }

  getAllPrismDIDs(): PrismDIDInfo[] {
    const fetch = this.getMethod('DID', 'fetchAllPrismDID');
    try {
      return this.execAsMany<PrismDIDInfo>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getDIDInfoByDID(did: DID): PrismDIDInfo | null {
    const fetch = this.getMethod('DID', 'fetchDIDInfoByDID');
    try {
      return this.database?.exec(fetch) as unknown as PrismDIDInfo || null;
    } catch (error) {
      throw error;
    }
  }

  getDIDInfoByAlias(alias: string): PrismDIDInfo[] {
    const fetch = this.getMethod('DID', 'fetchDIDInfoByAlias');
    try {
      return this.execAsMany<PrismDIDInfo>(fetch, [alias]);
    } catch (error) {
      throw error;
    }
  }

  getPrismDIDKeyPathIndex(did: DID): number | null {
    const fetch = this.getMethod('DID', 'fetchKeyPathIndexByDID');
    try {
      const result = this.execAsOne<{keyPathIndex: number}>(fetch, [
        did.methodId
      ])
      return result?.keyPathIndex ?? null;
    } catch (error) {
      throw error;
    }
  }

  getPrismLastKeyPathIndex(): number {
    const fetch = this.getMethod('PrivateKey', 'fetchLastkeyPathIndex');
    try {
      const result = this.execAsOne<{keyPathIndex: number}>(fetch);
      return result?.keyPathIndex ?? 0;
    } catch (error) {
      throw error;
    }
  }

  getAllPeerDIDs(): PeerDID[] {
    const fetch = this.getMethod('DIDPair', 'fetchAllDIDPairs');
    try {
      return this.execAsMany<PeerDID>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getDIDPrivateKeysByDID(did: DID): PrivateKey[] | null {
    const fetch = this.getMethod('PrivateKey', 'fetchPrivateKeyByDID');
    try {
      // Not sure if is implemented correctly.
      return  this.execAsMany<PrivateKey>(fetch, [did.toString()])
    } catch (error) {
      throw error
    }
  }

  getDIDPrivateKeyByID(id: string): PrivateKey | null {
    const fetch = this.getMethod('PrivateKey', 'fetchPrivateKeyByID');
    try {
      return this.execAsOne<PrivateKey>(fetch, [id]);
    } catch (error) {
      throw error;
    }
  }

  getAllDidPairs(): DIDPair[] {
    const fetch = this.getMethod('DIDPair', 'fetchAllDIDPairs');
    try {
      return this.execAsMany<DIDPair>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getPairByDID(did: DID): DIDPair | null {
    const fetch = this.getMethod('DIDPair', 'fetchDIDPairByDID');
    try {
      return this.execAsOne<DIDPair>(fetch, [did.toString()]);
    } catch (error) {
      throw error;
    }
  }

  getPairByName(name: string): DIDPair | null {
    const fetch = this.getMethod('DIDPair', 'fetchDIDPairByName');
    try {
      return this.execAsOne<DIDPair>(fetch, [name]);
    } catch (error) {
      throw error;
    }
  }

  getAllMessages(): Message[] {
    const fetch = this.getMethod('Message', 'fetchAllMessages')
    try {
      return this.execAsMany(fetch) as Message[];
    } catch (error) {
      throw error;
    }
  }

  getAllMessagesByDID(did: DID): Message[] {
    const fetch = this.getMethod('Message', 'fetchAllMessagesFromTo')
    try {
      return this.execAsMany<Message>(fetch, {
        ":from": did.toString(),
        ":to": did.toString(),
      });
    } catch (error) {
      throw error
    }
  }

  getAllMessagesSent(): Message[] {
    const fetch = this.getMethod('Message', 'fetchAllSentMessages')
    try {
      return this.execAsMany<Message>(fetch);
    } catch (error) {
      throw error
    }
  }

  getAllMessagesReceived(): Message[] {
    const fetch = this.getMethod('Message', 'fetchAllReceivedMessages')
    try {
      return this.execAsMany<Message>(fetch);
    } catch (error) {
      throw error
    }
  }

  getAllMessagesSentTo(did: DID): Message[] {
    const fetch = this.getMethod('Message', 'fetchAllMessagesSentTo')
    try {
      return this.execAsMany<Message>(fetch, {
        ":to": did.toString(),
      });
    } catch (error) {
      throw error
    }
  }

  getAllMessagesReceivedFrom(did: DID): Message[] {
    const fetch = this.getMethod('Message', 'fetchAllMessagesReceivedFrom')
    try {
      return this.execAsMany<Message>(fetch, [did.toString()]);
    } catch (error) {
      throw error
    }
  }

  getAllMessagesOfType(type: string, relatedWithDID?: DID): Message[] {
    const fetch = this.getMethod('Message', 'fetchAllMessagesOfType')
    try {
      return this.execAsMany<Message>(fetch, {
        ":type": type,
        ':from': relatedWithDID?.toString()??"", // required in query
        ':to': relatedWithDID?.toString()??"", // required in query
      });
    } catch (error) {
      throw error
    }
  }

  getAllMessagesByFromToDID(from: DID, to: DID): Message[] {
    const fetch = this.getMethod('Message', 'fetchAllMessagesFromTo')
    try {
      return this.execAsMany<Message>(fetch, {
        ":from": from.toString(),
        ":to": to.toString(),
      });
    } catch (error) {
      throw error
    }
  }

  getMessage(id: string): Message | null {
    const fetch = this.getMethod('Message', 'fetchMessageById')
    try {
      return this.execAsOne<Message>(fetch, [id]);
    } catch (error) {
      throw error;
    }
  }

  getAllMediators(): Mediator[] {
    const fetch = this.getMethod('Mediator', 'fetchAllMediators')
    try {
      return this.execAsMany<Mediator>(fetch);
    } catch (error) {
      throw error;
    }
  }

  getAllCredentials(): VerifiableCredential[] {
    const fetch = this.getMethod('VerifiableCredential', 'fetchAllCredentials')
    try {
      // not sure if the implementation is correct
      return this.execAsMany<VerifiableCredential>(fetch);
    } catch (error) {
      throw error;
    }
  }

}
