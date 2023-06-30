import Pluto from "../../src/pluto/Pluto";
import {
  Curve,
  DID,
  getKeyCurveByNameAndIndex,
  JWTCredential,
  PrivateKey,
} from "../../src/domain";
import { expect } from "chai";
import { randomUUID } from "crypto";
import { MessageDirection } from "../../src/domain";
import { CredentialType } from "../../src/domain";

describe("Pluto tests", () => {
  let instance: Pluto;

  beforeEach(async () => {
    instance = new Pluto({
      type: "sqlite",
      dropSchema: true,
      database: "pluto.db",
      logger: "debug",
      synchronize: true,
    });
    await instance.start();
  });

  it("should store prism DID", async function () {
    const did = DID.fromString(
      "did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx"
    );
    const keyPathIndex = 0;
    const alias = "Did test";
    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    await instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);
  });

  it("should store message", async function () {
    const messageId = randomUUID();
    const message = {
      piuri: "test a",
      from: DID.fromString("did:prism:100"),
      thid: "test",
      body: "Message",
      createdTime: "2000000",
      ack: ["Some string", "saodkas"],
      id: messageId,
      expiresTimePlus: "1000",
      attachments: [],
      to: DID.fromString("did:prism:200"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "sdomasd",
      extraHeaders: ["askdpaks"],
    };

    await instance.storeMessage(message);
    const values = await instance.getAllMessages();
    const value = await instance.getMessage(values[0].id);
    expect(value?.from?.toString()).equal(message.from.toString());
  });

  it("should store messages", async function () {
    const messageId = randomUUID();

    const message = {
      piuri: "test a",
      from: DID.fromString("did:prism:100"),
      thid: "test",
      body: "Message",
      createdTime: "2000000",
      ack: ["Some string", "saodkas"],
      id: messageId,
      expiresTimePlus: "1000",
      attachments: [],
      to: DID.fromString("did:prism:200"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "sdomasd",
      extraHeaders: ["askdpaks"],
    };
    await instance.storeMessages(
      Array(10)
        .fill("_")
        .map(() => message)
    );
    const values = await instance.getAllMessages();

    expect(values.length).equals(10);
  });
  //
  it("should store private keys", async function () {
    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    const did = DID.fromString("did:prism:123");
    await instance.storePrivateKeys(privateKey, did, 0, null);
  });

  it("should store mediator", async function () {
    const mediator = DID.fromString("did:prism:123");
    const host = DID.fromString("did:prism:321");
    const routing = DID.fromString("did:prism:432");

    await instance.storeMediator(mediator, host, routing);
  });

  it("should store credential", async function () {
    const jwtParts = [
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6Imp3dCJ9",
      "18bn-r7uRWAG4FCFBjxemKvFYPCAoJTOHaHthuXh5nM",
    ];
    const jwtString = jwtParts.join(".");
    const vc: any = {
      id: jwtString,
      credentialType: CredentialType.JWT,
      type: [CredentialType.JWT],
      aud: ["aud"],
      context: ["context"],
      credentialSubject: { whatever: "credSubject" },
      evidence: {
        id: "evidenceId",
        type: "evidenceType",
      },
      expirationDate: new Date().toISOString(),
      issuanceDate: new Date().toISOString(),
      issuer: new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      ),
      refreshService: {
        id: "refreshServiceId",
        type: "refreshServiceType",
      },
      termsOfUse: {
        id: "termsOfUseId",
        type: "termsOfUseType",
      },
      validFrom: {
        id: "validFromId",
        type: "validFromType",
      },
      validUntil: {
        id: "validUntilId",
        type: "validUntilType",
      },
      credentialSchema: {
        id: "credentialSchemaId",
        type: "credentialSchemaType",
      },
      credentialStatus: {
        id: "credentialStatusId",
        type: "credentialStatusType",
      },
      proof: "proof",
    };

    const jwtPayload: any = {
      id: "123",
      iss: "did:peer:2.issuer",
      nbf: 1680615608435,
      sub: "did:peer:2.sub",
      exp: 1680615608435,
      aud: ["aud-json"],
      vc: vc,
    };

    const credential = new JWTCredential(
      jwtPayload.iss,
      vc,
      jwtString,
      jwtPayload.nbf,
      jwtPayload.sub,
      jwtPayload.exp,
      jwtPayload.aud,
      jwtString
    );

    await instance.storeCredential(credential);
  });

  it("should get all prism DIDs", async function () {
    const did = DID.fromString(
      "did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx"
    );
    const keyPathIndex = 0;
    const alias = "Did test";

    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    await instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const dids = await instance.getAllPrismDIDs();
    expect(dids).not.empty;
  });

  it("should get DID info by DID", async function () {
    const did = DID.fromString(
      "did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx"
    );
    const keyPathIndex = 0;
    const alias = "Did test";

    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    await instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const result = await instance.getDIDInfoByDID(did);

    expect(result?.did.toString()).equals(did.toString());
  });

  it("should get DID info by alias", async function () {
    const did = DID.fromString("did:prism:dadsa:asdpijasiopdj");
    const keyPathIndex = 0;
    const alias = "Did test";
    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    await instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const result = await instance.getDIDInfoByAlias(alias);
    expect(!!result.find((item) => item.alias === alias)).true;
  });

  it("should get prism DID key path index", async function () {
    const did = DID.fromString("did:prism:dadsa:1231321dhsauda23847");
    const keyPathIndex = 10;
    const alias = "Did test";

    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };

    await instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const result = await instance.getPrismDIDKeyPathIndex(did);
    expect(result).equals(keyPathIndex);
  });

  it("should get prism last key path index", async function () {
    const did = DID.fromString("did:prism:dadsa:92jsadn1");
    const keyPathIndex = 11;
    const alias = "Did test";

    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    await instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);

    const result = await instance.getPrismLastKeyPathIndex();
    expect(result).equals(keyPathIndex);
  });
  //
  it("should get all peer DIDs", async function () {
    const peerDid = DID.fromString("did:peer:3i21d");
    const privateKey1: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };
    const privateKey2: PrivateKey = {
      value: Buffer.from("value test"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    const prismDid = DID.fromString("did:prism:dadsa:1231321dhsauda23847");
    const keyPathIndex = 11;
    const alias = "Did test";

    const prismPrivateKey: PrivateKey = {
      value: Buffer.from("some key"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.SECP256K1),
    };

    await instance.storePrismDID(
      prismDid,
      keyPathIndex,
      prismPrivateKey,
      null,
      alias
    );

    await instance.storePeerDID(peerDid, [privateKey1, privateKey2]);
    const dids = await instance.getAllPeerDIDs();
    expect(dids.length).equals(1);
    expect(dids[0].privateKeys.length).equals(2);
  });

  it("should get DID private keys by DID", async function () {
    const peerDid = DID.fromString("did:peer:3i21d");
    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    await instance.storePeerDID(peerDid, [privateKey]);
    const result = await instance.getDIDPrivateKeysByDID(peerDid);
    expect(
      !!result?.find(
        (item) => item.value.toString() === privateKey.value.toString()
      )
    ).true;
  });
  //
  it("should get DID private key by ID", async function () {
    const id = randomUUID();
    const peerDid = DID.fromString("did:prism:3i21d");
    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    await instance.storePrismDID(peerDid, 10, privateKey, id);
    const data = await instance.getDIDPrivateKeyByID(id);
    expect(data?.value.toString()).equals(privateKey.value.toString());
  });

  it("should get all did pairs", async function () {
    const host = DID.fromString("did:prism:123");
    const receiver = DID.fromString("did:prism:321");
    const name = "test";

    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    await instance.storePrismDID(host, 10, privateKey, null);
    await instance.storePrismDID(receiver, 12, privateKey, null);

    await instance.storeDIDPair(host, receiver, name);
    const dids = await instance.getAllDidPairs();
    expect(dids).not.empty;
  });

  it("should get pair by DID", async function () {
    const host = DID.fromString("did:prism:123");
    const receiver = DID.fromString("did:prism:321");
    const name = "test";

    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    await instance.storePrismDID(host, 10, privateKey, null);
    await instance.storePrismDID(receiver, 12, privateKey, null);

    await instance.storeDIDPair(host, receiver, name);
    const data = await instance.getPairByDID(host);
    expect(data).not.null;
    expect(data?.name).equals(name);
    expect(data?.host.toString()).equals(host.toString());
  });

  it("should get pair by name", async function () {
    const host = DID.fromString("did:prism:123");
    const receiver = DID.fromString("did:prism:321");
    const name = "test";

    const privateKey: PrivateKey = {
      value: Buffer.from("some value"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.ED25519),
    };

    await instance.storePrismDID(host, 10, privateKey, null);
    await instance.storePrismDID(receiver, 12, privateKey, null);

    await instance.storeDIDPair(host, receiver, name);
    const data = await instance.getPairByName(name);
    expect(data).not.null;
    expect(data?.name).equals(name);
  });
  //
  it("should get all messages", async function () {
    await instance.storeMessage({
      id: randomUUID(),
      thid: "",
      to: DID.fromString("did:prism:123"),
      from: DID.fromString("did:prism:321"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    });
    const messages = await instance.getAllMessages();
    expect(messages).not.empty;
  });

  it("should get all messages by DID", async function () {
    const message = {
      id: randomUUID(),
      thid: "",
      to: DID.fromString("did:prism:123"),
      from: DID.fromString("did:prism:321"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    };
    await instance.storeMessage(message);
    const messages = await instance.getAllMessagesByDID(message.from);
    expect(messages).not.empty;
  });

  it("should get all messages sent", async function () {
    const message = {
      id: randomUUID(),
      thid: "",
      to: DID.fromString("did:prism:123"),
      from: DID.fromString("did:prism:321"),
      direction: MessageDirection.SENT,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    };
    await instance.storeMessage(message);
    const messages = await instance.getAllMessagesSent();
    expect(messages).not.empty;
  });
  //
  it("should get all messages received", async function () {
    const message = {
      id: randomUUID(),
      thid: "",
      to: DID.fromString("did:prism:123"),
      from: DID.fromString("did:prism:321"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    };
    await instance.storeMessage(message);
    const messages = await instance.getAllMessagesReceived();
    expect(messages).not.empty;
  });
  //
  it("should get all messages sent to", async function () {
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.storeMessage({
      id: randomUUID(),
      thid: "",
      to,
      from,
      direction: MessageDirection.SENT,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    });
    const messages = await instance.getAllMessagesSentTo(to);
    expect(messages).not.empty;
  });
  //
  it("should get all messages received from", async function () {
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    await instance.storeMessage({
      id: randomUUID(),
      thid: "",
      to,
      from,
      direction: MessageDirection.SENT,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    });
    const messages = await instance.getAllMessagesReceivedFrom(from);
    expect(messages).not.empty;
  });
  //
  it("should get all messages of type", async function () {
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");
    const message = {
      id: randomUUID(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "type-example",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    };
    await instance.storeMessage(message);
    const messages = await instance.getAllMessagesOfType(message.piuri, to);
    expect(messages).not.empty;
  });
  //
  it("should get all messages by from to DID", async function () {
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");

    const message = {
      id: randomUUID(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "type-example",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    };
    await instance.storeMessage(message);
    const result = await instance.getAllMessagesByFromToDID(
      message.from,
      message.to
    );

    expect(result[0].body).equal(message.body);
  });

  it("should get message", async function () {
    const to = DID.fromString("did:prism:123");
    const from = DID.fromString("did:prism:321");

    const message = {
      id: randomUUID(),
      thid: "",
      to,
      from,
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "type-example",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    };
    await instance.storeMessage(message);
    const messages = await instance.getAllMessages();

    const result = await instance.getMessage(messages[0].id);
    expect(result?.body).equal(message.body);
  });
  //
  it("should get all mediators", async function () {
    const mediator = DID.fromString("did:prism:123");
    const host = DID.fromString("did:prism:321");
    const routing = DID.fromString("did:prism:432");
    const mediatorPrivateKey: PrivateKey = {
      value: Buffer.from("mediator test"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    const hostPrivateKey: PrivateKey = {
      value: Buffer.from("host test"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    const routingPrivateKey: PrivateKey = {
      value: Buffer.from("routing test"),
      keyCurve: getKeyCurveByNameAndIndex(Curve.X25519),
    };
    await instance.storePrismDID(
      mediator,
      10,
      mediatorPrivateKey,
      null,
      "Mediator"
    );
    await instance.storePrismDID(host, 11, hostPrivateKey, null, "Host");
    await instance.storePrismDID(
      routing,
      12,
      routingPrivateKey,
      null,
      "Routing"
    );

    await instance.storeMediator(mediator, host, routing);

    const data = await instance.getAllMediators();
    expect(data).not.empty;
  });

  it("should get all credentials", async function () {
    const jwtParts = [
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6Imp3dCJ9",
      "18bn-r7uRWAG4FCFBjxemKvFYPCAoJTOHaHthuXh5nM",
    ];
    const jwtString = jwtParts.join(".");
    const vc: any = {
      id: jwtString,
      credentialType: CredentialType.JWT,
      type: [CredentialType.JWT],
      aud: ["aud"],
      context: ["context"],
      credentialSubject: { whatever: "credSubject" },
      evidence: {
        id: "evidenceId",
        type: "evidenceType",
      },
      expirationDate: new Date().toISOString(),
      issuanceDate: new Date().toISOString(),
      issuer: new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      ),
      refreshService: {
        id: "refreshServiceId",
        type: "refreshServiceType",
      },
      termsOfUse: {
        id: "termsOfUseId",
        type: "termsOfUseType",
      },
      validFrom: {
        id: "validFromId",
        type: "validFromType",
      },
      validUntil: {
        id: "validUntilId",
        type: "validUntilType",
      },
      credentialSchema: {
        id: "credentialSchemaId",
        type: "credentialSchemaType",
      },
      credentialStatus: {
        id: "credentialStatusId",
        type: "credentialStatusType",
      },
      proof: "proof",
    };

    const jwtPayload: any = {
      id: "123",
      iss: "did:peer:2.issuer",
      nbf: 1680615608435,
      sub: "did:peer:2.sub",
      exp: 1680615608435,
      aud: ["aud-json"],
      vc: vc,
    };

    const credential = new JWTCredential(
      jwtPayload.iss,
      vc,
      jwtString,
      jwtPayload.nbf,
      jwtPayload.sub,
      jwtPayload.exp,
      jwtPayload.aud,
      jwtString
    );

    await instance.storeCredential(credential);

    const data = await instance.getAllCredentials();
    expect(data).not.empty;
  });
});
