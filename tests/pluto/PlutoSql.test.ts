import Pluto from '../../pluto/Pluto';
import {Curve, DID, getKeyCurveByNameAndIndex, PrivateKey} from '../../domain';
import {MessageDirection} from '../../domain/models/Message';
import {v4 as uuidv4} from 'uuid';
import {expect} from 'chai';
import {CredentialType} from '../../domain/models/VerifiableCredential';

describe('Pluto tests', () => {
  it('should start successfully', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });

    await instance.start();
  });

  it('should store prism DID', async function () {
    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const did = DID.fromString("did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx");
    const keyPathIndex = 0;
    const alias = "Did test";
    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);
  });

  it('should store message', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const messageId = uuidv4();
    const message = {
      piuri: "test a",
      from: DID.fromString("did:prism:100"),
      thid: 'test',
      body: "Message",
      createdTime: "2000000",
      ack: ["Some string", "saodkas"],
      id: messageId,
      expiresTimePlus: "1000",
      attachments: [],
      to: DID.fromString("did:prism:200"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "sdomasd",
      extraHeaders: ['askdpaks']
    };

    instance.storeMessage(message);
    const values = await instance.getAllMessages();
    const value = await instance.getMessage(values[0].id);
    expect(value?.from?.toString()).equal(message.from.toString());
  });

  it('should store messages', async function () {
    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const messageId = uuidv4();

    const message = {
      piuri: "test a",
      from: DID.fromString("did:prism:100"),
      thid: 'test',
      body: "Message",
      createdTime: "2000000",
      ack: ["Some string", "saodkas"],
      id: messageId,
      expiresTimePlus: "1000",
      attachments: [],
      to: DID.fromString("did:prism:200"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "sdomasd",
      extraHeaders: ['askdpaks']
    };
    instance.storeMessages(Array(10).fill("_").map(() => message));
    const values = await instance.getAllMessages();

    expect(values.length).equals(10);
  });
  //
  it('should store private keys', async function () {
    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    const did = DID.fromString("did:prism:123");
    instance.storePrivateKeys(privateKey, did, 0, null);
  });

  it('should store mediator', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const mediator = DID.fromString("did:prism:123");
    const host = DID.fromString("did:prism:321");
    const routing = DID.fromString("did:prism:432");
    instance.storeMediator(mediator, host, routing);

  });

  it('should store credential', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    instance.storeCredential({
      id: "",
      credentialType: CredentialType.JWT,
      context: ["test0", "test1"],
      type: ['auth'],
      credentialSceham: {
        id: uuidv4(),
        type: "decode_jwt"
      }, // Issue: Naming looks odd, I guess credentialSchema? .
      credentialSubject: "",
      credentialStatus: {
        id: uuidv4(),
        type: "test"
      },
      refreshService: {
        id: uuidv4(),
        type: "test"
      },
      evidence: {
        id: uuidv4(),
        type: "test"
      },
      termsOfUse: {
        id: uuidv4(),
        type: "test"
      },
      issuer: DID.fromString("did:prism:123"),
      issuanceDate: new Date().toDateString(),
      expirationDate: new Date().toDateString(),
      validFrom: {
        id: uuidv4(),
        type: "test"
      },
      validUntil: {
        id: uuidv4(),
        type: "test"
      },
      proof: "",
      aud: ["test0", 'test1'],
    });
  });

  it('should get all prism DIDs', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const did = DID.fromString("did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx");
    const keyPathIndex = 0;
    const alias = "Did test";

    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const dids = await instance.getAllPrismDIDs();
    expect(dids).not.empty;
  });

  it('should get DID info by DID', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const did = DID.fromString("did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx");
    const keyPathIndex = 0;
    const alias = "Did test";

    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const result = await instance.getDIDInfoByDID(did);
    expect(result?.did.toString()).equals(did.toString());
  });

  it('should get DID info by alias', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const did = DID.fromString("did:prism:dadsa:asdpijasiopdj");
    const keyPathIndex = 0;
    const alias = "Did test";
    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const result = await instance.getDIDInfoByAlias(alias);
    expect(!!result.find(item => item.alias === alias)).true;
  });

  it('should get prism DID key path index', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const did = DID.fromString("did:prism:dadsa:1231321dhsauda23847");
    const keyPathIndex = 10;
    const alias = "Did test";

    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const result = instance.getPrismDIDKeyPathIndex(did);
    expect(result).equals(keyPathIndex);
  });

  it('should get prism last key path index', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const did = DID.fromString("did:prism:dadsa:92jsadn1");
    const keyPathIndex = 11;
    const alias = "Did test";

    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const result = instance.getPrismLastKeyPathIndex();
    expect(result).equals(keyPathIndex);
  });
  //
  it('should get all peer DIDs', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const peerDid = DID.fromString("did:peer:3i21d");
    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    const prismDid = DID.fromString("did:prism:dadsa:1231321dhsauda23847");
    const keyPathIndex = 11;
    const alias = "Did test";

    const prismPrivateKey: PrivateKey = {
      value: "some key",
      keyCurve: getKeyCurveByNameAndIndex(Curve.SECP256K1),
    };

    instance.storePrismDID(prismDid, keyPathIndex, prismPrivateKey, null, alias);

    instance.storePeerDID(peerDid, [privateKey]);
    const dids = await instance.getAllPeerDIDs();
    expect(dids.length).equals(1);
  });

  it('should get DID private keys by DID', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const peerDid = DID.fromString("did:peer:3i21d");
    await instance.start();
    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    instance.storePeerDID(peerDid, [privateKey]);
    const result = await instance.getDIDPrivateKeysByDID(peerDid);

    expect(!!result?.find(item => item.value === privateKey.value)).true;
  });
  //
  it('should get DID private key by ID', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const peerDid = DID.fromString("did:peer:3i21d");
    const privateKey: PrivateKey = {
      value: "some value",
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    instance.storePeerDID(peerDid, [privateKey]);
    // Question: Should we implement getAllPrivateKeys() method?
    const result = instance.database?.exec("SELECT id FROM PrivateKey;") as any;
    const privateKeyResult = await instance.getDIDPrivateKeyByID(result[0].values[0][0]);
    expect(privateKeyResult?.keyCurve.curve).equals(Curve.ED25519);
  });

  it('should get all did pairs', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const host = DID.fromString("did:prism:123");
    const receiver = DID.fromString("did:prism:321");
    const name = "test";
    instance.storeDIDPair(host, receiver, name);
    const dids = await instance.getAllDidPairs();
    expect(dids).not.empty;
  });

  it('should get pair by DID', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const host = DID.fromString("did:prism:123");
    const receiver = DID.fromString("did:prism:321");
    const name = "test";
    instance.storeDIDPair(host, receiver, name);
    const result = await instance.getPairByDID(host);
    expect(result?.host.toString()).equals(host.toString());
  });

  it('should get pair by name', async function () {
    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    const host = DID.fromString("did:prism:123");
    const receiver = DID.fromString("did:prism:321");
    const name = "test";
    instance.storeDIDPair(host, receiver, name);
    const result = await instance.getPairByName(name);
    expect(result?.name).equals(name);
  });

  it('should get all messages', async function () {
    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();
    instance.storeMessage({
      id: uuidv4(),
      thid: "",
      to: DID.fromString("did:prism:123"),
      from: DID.fromString("did:prism:321"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    });
    const messages = instance.getAllMessages();
    expect(messages).not.empty;
  });

  it('should get all messages by DID', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.start();
    instance.storeMessage({
      id: uuidv4(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    });
    const messages = instance.getAllMessagesByDID(from);
    expect(messages).not.empty;
  });

  it('should get all messages sent', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.start();
    instance.storeMessage({
      id: uuidv4(),
      thid: "",
      to,
      from,
      direction: MessageDirection.SENT,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    });
    const messages = instance.getAllMessagesSent();
    expect(messages).not.empty;
  });

  it('should get all messages received', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.start();
    instance.storeMessage({
      id: uuidv4(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    });
    const messages = instance.getAllMessagesReceived();
    expect(messages).not.empty;
  });

  it('should get all messages sent to', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.start();
    instance.storeMessage({
      id: uuidv4(),
      thid: "",
      to,
      from,
      direction: MessageDirection.SENT,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    });
    const messages = instance.getAllMessagesSentTo(to);
    expect(messages).not.empty;
  });

  it('should get all messages received from', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.start();
    instance.storeMessage({
      id: uuidv4(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    });
    const messages = instance.getAllMessagesReceivedFrom(from);
    expect(messages).not.empty;
  });

  it('should get all messages of type', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.start();
    const message = {
      id: uuidv4(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "type-example",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    };
    instance.storeMessage(message);
    const messages = instance.getAllMessagesOfType(message.piuri, to);
    expect(messages).not.empty;
  });
  //
  it('should get all messages by from to DID', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.start();

    const message = {
      id: uuidv4(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "type-example",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    };
    instance.storeMessage(message);
    const result = await instance.getAllMessagesByFromToDID(message.from, message.to);
    expect(result[0].body).equal(message.body);
  });

  it('should get message', async function () {

    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.start();

    const message = {
      id: uuidv4(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toDateString(),
      attachments: [],
      piuri: "type-example",
      extraHeaders: ['x-extra-header'],
      expiresTimePlus: new Date().toString(),
    };
    instance.storeMessage(message);
    const messages = await instance.getAllMessages();

    const result = await instance.getMessage(messages[0].id);
    expect(result?.body).equal(message.body);
  });

  it('should get all mediators', async function () {


    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();

    const mediator = DID.fromString("did:prism:123");
    const host = DID.fromString("did:prism:321");
    const routing = DID.fromString("did:prism:432");
    const mediatorPrivateKey: PrivateKey = {
      value: "mediator test",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    const hostPrivateKey: PrivateKey = {
      value: "host test",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    const routingPrivateKey: PrivateKey = {
      value: "routing test",
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    instance.storePrismDID(mediator, 10, mediatorPrivateKey, null, "Mediator");
    instance.storePrismDID(host, 11, hostPrivateKey, null, "Host");
    instance.storePrismDID(routing, 12, routingPrivateKey, null, "Routing");

    instance.storeMediator(mediator, host, routing);

    const data = instance.getAllMediators();
    expect(data).not.empty;
  });

  it('should get all credentials', async function () {


    const instance = new Pluto({
      type: 'sql',
      wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist/sql-wasm.wasm`
    });
    await instance.start();

    instance.storeCredential({
      id: "",
      credentialType: CredentialType.JWT,
      context: ["test0", "test1"],
      type: ['auth'],
      credentialSceham: {
        id: uuidv4(),
        type: "decode_jwt"
      }, // Question: Naming looks odd, I guess credentialSchema? .
      credentialSubject: "",
      credentialStatus: {
        id: uuidv4(),
        type: "test"
      },
      refreshService: {
        id: uuidv4(),
        type: "test"
      },
      evidence: {
        id: uuidv4(),
        type: "test"
      },
      termsOfUse: {
        id: uuidv4(),
        type: "test"
      },
      issuer: DID.fromString("did:prism:123"),
      issuanceDate: new Date().toDateString(),
      expirationDate: new Date().toDateString(),
      validFrom: {
        id: uuidv4(),
        type: "test"
      },
      validUntil: {
        id: uuidv4(),
        type: "test"
      },
      proof: "",
      aud: ["test0", 'test1'],
    });

    const data = instance.getAllCredentials();
    expect(data).not.empty;
  });
});