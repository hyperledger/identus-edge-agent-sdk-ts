import { expect } from "chai";
import * as Domain from "../../src/domain";
import { randomUUID } from "crypto";
import { MessageDirection } from "../../src/domain";
import { CredentialType } from "../../src/domain";
import { Secp256k1PrivateKey } from "../../src/apollo/utils/Secp256k1PrivateKey";
import { X25519PrivateKey } from "../../src/apollo/utils/X25519PrivateKey";
import { Ed25519PrivateKey } from "../../src/apollo/utils/Ed25519PrivateKey";
import { JWTCredential } from "../../src/pollux/models/JWTVerifiableCredential";

import { Apollo } from "../../src";
import { Pluto } from "../../src/pluto/Pluto";
// import { PlutoInMemory } from "./PlutoInMemory";

class TestStore implements Pluto.Store {
  private store = new Map<string, any[]>();

  async query<T>(table: string, selector: Partial<T>[]): Promise<T[]> {
    const items = this.get(table);

    const filtered = items.filter(item => {
      if (selector.length === 0) return true;

      const match = selector.some(query => this.match(query, item));
      return match;
    });

    return filtered;
  }

  async insert(table: string, model: any): Promise<string | { uuid: string; }> {
    const items = this.get(table);
    const uuid = (items.length + 1).toString();
    items.push({ ...model, uuid });

    return uuid;
  }

  private get(key: string) {
    const current = this.store.get(key);

    if (!current) {
      this.store.set(key, []);
    }

    return this.store.get(key)!;
  }

  private match(query: Record<string, any>, item: any) {
    const keys = Object.keys(query);
    const match = keys.every(key => item[key] == query[key]);
    return match;
  }
}

const testCtor = () => {
  const driver = new TestStore();
  const apollo = new Apollo();
  const pluto = new Pluto(driver, apollo);

  return pluto;
};

// const inMemCtor = () => new PlutoInMemory();

const PlutoCtors: (() => Domain.Pluto)[] = [
  // inMemCtor,
  testCtor
];

describe.each(PlutoCtors)("Pluto", (ctor) => {
  let instance: Domain.Pluto;

  beforeEach(async () => {
    instance = ctor();
    await instance.start();
  });

  describe("getAllPeerDIDs", () => {
    [
      Ed25519PrivateKey,
      X25519PrivateKey,
      // TODO - can secp256 be a peerDID, it's not handled in PeerDIDCreate.ts?
      // Secp256k1PrivateKey
    ].forEach((keyClass) => {
      test(`${keyClass.name}`, async () => {
        const peerDid = Domain.DID.fromString("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19");
        const raw = Buffer.from(
          "76735a33485f497970546b7978646f466272346f657447746f53496363782d614330365f474f53577a7273",
          "hex"
        );
        const privateKey = keyClass.from.Buffer(raw);

        await instance.storePeerDID(peerDid, [privateKey]);

        const result = await instance.getAllPeerDIDs();

        expect(result).to.be.an("array").to.have.length(1);

        const resultPeerDID = result[0];
        // expect(resultPeerDID).to.be.instanceOf(PeerDID);
        expect(resultPeerDID.did.toString()).to.equal(peerDid.toString());
        expect(resultPeerDID.privateKeys).to.be.an("array").to.have.length(1);

        const resultPrivateKey = resultPeerDID.privateKeys[0];
        expect(resultPrivateKey)
          .to.have.property("keyCurve")
          .to.deep.equal({ curve: privateKey.curve });
        expect(resultPrivateKey).to.have.property("value").to.deep.eq(raw);
      });
    });
  });

  describe("getDIDPrivateKeysByDID", () => {
    [Ed25519PrivateKey, X25519PrivateKey, Secp256k1PrivateKey].forEach(
      (keyClass) => {
        test(`${keyClass.name} returned from DB`, async function () {
          const prismDid = Domain.DID.fromString(
            "did:prism:dadsa:1231321dhsauda23847"
          );
          const keyPathIndex = 11;
          const privateKey = keyClass.from.String(
            "01011010011101010100011000100010"
          );

          await instance.storePrismDID(prismDid, privateKey);

          const result = await instance.getDIDPrivateKeysByDID(prismDid);
          const resultKey = result.at(0)!;

          // expect(resultKey).to.be.instanceOf(keyClass);
          // TODO: we can't test instanceof here because Pluto is now external implementation
          // We can do something like this, but maybe it's better to remove it altogether:
          // expect(resultKey.constructor.name).to.be(keyClass.name);
          expect(resultKey.raw).to.eql(privateKey.raw);
          expect(resultKey.curve).to.equal(privateKey.curve);
          expect(resultKey.index).to.equal(privateKey.index);
          expect(resultKey.size).to.equal(privateKey.size);
          expect(resultKey.type).to.equal(privateKey.type);
        });
      }
    );
  });

  /*
    describe("getDIDPrivateKeyByID", () => {
      [Ed25519PrivateKey, X25519PrivateKey, Secp256k1PrivateKey].forEach(
        (keyClass) => {
          test(`${keyClass.name} returned from DB`, async function () {
            const prismDid = Domain.DID.fromString(
              "did:prism:dadsa:1231321dhsauda23847"
            );
            const keyPathIndex = 11;
            const privateKey = keyClass.from.String(
              "01011010011101010100011000100010"
            );
            const privateKeyId = "001";
  
            await instance.storePrismDID(
              prismDid,
              keyPathIndex,
              privateKey,
              privateKeyId
            );
  
            const result = await instance.getDIDPrivateKeyByID(privateKeyId);
  
            // expect(result).to.be.instanceOf(keyClass);
            expect(result?.raw).to.eql(privateKey.raw);
            expect(result?.curve).to.equal(privateKey.curve);
            expect(result?.index).to.equal(privateKey.index);
            expect(result?.size).to.equal(privateKey.size);
            expect(result?.type).to.equal(privateKey.type);
          });
        }
      );
    });
  //*/

  // describe.only("storePrivateKeys", () => {});

  it("should store prism DID", async function () {
    const did = Domain.DID.fromString(
      "did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx"
    );
    const keyPathIndex = 0;
    const alias = "Did test";
    const privateKey: Domain.PrivateKey = new Secp256k1PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );
    await instance.storePrismDID(did, privateKey, alias);
  });

  it("should store message", async function () {
    const messageId = randomUUID();
    const message = {
      piuri: "test a",
      from: Domain.DID.fromString("did:prism:100"),
      thid: "test",
      body: "Message",
      createdTime: "2000000",
      ack: ["Some string", "saodkas"],
      id: messageId,
      expiresTimePlus: "1000",
      attachments: [],
      to: Domain.DID.fromString("did:prism:200"),
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
      from: Domain.DID.fromString("did:prism:100"),
      thid: "test",
      body: "Message",
      createdTime: "2000000",
      ack: ["Some string", "saodkas"],
      id: messageId,
      expiresTimePlus: "1000",
      attachments: [],
      to: Domain.DID.fromString("did:prism:200"),
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
    const privateKey: Domain.PrivateKey = new Secp256k1PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );
    const did = Domain.DID.fromString("did:prism:123");
    await instance.storePrivateKey(privateKey);
  });

  it("should store mediator", async function () {
    const mediatorDID = Domain.DID.fromString("did:prism:123");
    const hostDID = Domain.DID.fromString("did:prism:321");
    const routingDID = Domain.DID.fromString("did:prism:432");
    const mediator: Domain.Mediator = { hostDID, mediatorDID, routingDID };

    await instance.storeMediator(mediator);
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
      issuer: new Domain.DID(
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
    const did = Domain.DID.fromString(
      "did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx"
    );
    const keyPathIndex = 0;
    const alias = "Did test";

    const privateKey: Domain.PrivateKey = new X25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    await instance.storePrismDID(did, privateKey, alias);

    const dids = await instance.getAllPrismDIDs();

    expect(dids).not.empty;
  });

  it("should get DID info by DID", async function () {
    const did = Domain.DID.fromString(
      "did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx"
    );
    const alias = "Did test";

    const privateKey: Domain.PrivateKey = new X25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    await instance.storePrismDID(did, privateKey, alias);

    const result = await instance.getDIDInfoByDID(did);

    expect(result?.did.toString()).equals(did.toString());
  });

  it("should get DID info by alias", async function () {
    const did = Domain.DID.fromString("did:prism:dadsa:asdpijasiopdj");
    const alias = "Did test";
    const privateKey: Domain.PrivateKey = new X25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    await instance.storePrismDID(did, privateKey, alias);

    const result = await instance.getDIDInfoByAlias(alias);
    expect(!!result.find((item) => item.alias === alias)).true;
  });

  /*
    it("should get prism DID key path index", async function () {
      const did = Domain.DID.fromString("did:prism:dadsa:1231321dhsauda23847");
      const keyPathIndex = 10;
      const alias = "Did test";
  
      const privateKey: Domain.PrivateKey = new X25519PrivateKey(
        Buffer.from("01011010011101010100011000100010")
      );
  
      await instance.storePrismDID(did, keyPathIndex, privateKey, null, alias);
  
      const result = await instance.getPrismDIDKeyPathIndex(did);
      expect(result).equals(keyPathIndex);
    });
  //*/

  it("should get prism last key path index", async function () {
    const did = Domain.DID.fromString("did:prism:dadsa:92jsadn1");
    const alias = "Did test";

    const privateKey: Domain.PrivateKey = new X25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );
    await instance.storePrismDID(did, privateKey, alias);

    const result = await instance.getPrismLastKeyPathIndex();
    expect(result).equals(0);
  });
  //
  it("should get all peer DIDs", async function () {
    const peerDid = Domain.DID.fromString("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19");
    const privateKey1: Domain.PrivateKey = new Ed25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );
    const privateKey2: Domain.PrivateKey = new Ed25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    const prismDid = Domain.DID.fromString("did:prism:dadsa:1231321dhsauda23847");
    const keyPathIndex = 11;
    const alias = "Did test";

    const prismPrivateKey: Domain.PrivateKey = new Secp256k1PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    await instance.storePrismDID(prismDid, prismPrivateKey, alias);
    await instance.storePeerDID(peerDid, [privateKey1, privateKey2]);

    const dids = await instance.getAllPeerDIDs();
    expect(dids.length).equals(1);
    expect(dids[0].privateKeys.length).equals(2);
  });

  it("should get DID private keys by DID", async function () {
    const peerDid = Domain.DID.fromString("did:peer:3i21d");
    const privateKey: Domain.PrivateKey = new Ed25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    await instance.storePeerDID(peerDid, [privateKey]);
    const result = await instance.getDIDPrivateKeysByDID(peerDid);
    expect(
      !!result?.find(
        (item) => item.value.toString() === privateKey.value.toString()
      )
    ).true;
  });


  /*
    it("should get DID private key by ID", async function () {
      const id = randomUUID();
      const peerDid = Domain.DID.fromString("did:prism:3i21d");
      const privateKey: Domain.PrivateKey = new Ed25519PrivateKey(
        Buffer.from("01011010011101010100011000100010")
      );
  
      await instance.storePrismDID(peerDid, 10, privateKey, id);
      const data = await instance.getDIDPrivateKeyByID(id);
      expect(data?.value.toString()).equals(privateKey.value.toString());
    });
  //*/

  it("should get all did pairs", async function () {
    const host = Domain.DID.fromString("did:prism:123");
    const receiver = Domain.DID.fromString("did:prism:321");
    const name = "test";

    const privateKey: Domain.PrivateKey = new Ed25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    await instance.storePrismDID(host, privateKey);
    await instance.storePrismDID(receiver, privateKey);

    await instance.storeDIDPair(host, receiver, name);
    const dids = await instance.getAllDidPairs();
    expect(dids).not.empty;
  });

  it("should get pair by DID", async function () {
    const host = Domain.DID.fromString("did:prism:123");
    const receiver = Domain.DID.fromString("did:prism:321");
    const name = "test";

    const privateKey: Domain.PrivateKey = new Ed25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    await instance.storePrismDID(host, privateKey);
    await instance.storePrismDID(receiver, privateKey);

    await instance.storeDIDPair(host, receiver, name);
    const data = await instance.getPairByDID(host);
    expect(data).not.null;
    expect(data?.name).equals(name);
    expect(data?.host.toString()).equals(host.toString());
  });

  it("should get pair by name", async function () {
    const host = Domain.DID.fromString("did:prism:123");
    const receiver = Domain.DID.fromString("did:prism:321");
    const name = "test";

    const privateKey: Domain.PrivateKey = new Ed25519PrivateKey(
      Buffer.from("01011010011101010100011000100010")
    );

    await instance.storePrismDID(host, privateKey);
    await instance.storePrismDID(receiver, privateKey);

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
      to: Domain.DID.fromString("did:prism:123"),
      from: Domain.DID.fromString("did:prism:321"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "",
      ack: ["test"],
      body: "Message",
      createdTime: new Date().toISOString(),
      attachments: [],
      piuri: "qwerty",
      extraHeaders: ["x-extra-header"],
      expiresTimePlus: new Date().toISOString(),
    });
    const messages = await instance.getAllMessages();
    expect(messages).not.empty;
  });

  /*
    it("should get all messages by DID", async function () {
      const myDid = Domain.DID.fromString("did:prism:123");
      const testDid1 = Domain.DID.fromString("did:prism:321");
      const testDid2 = Domain.DID.fromString("did:prism:abc");
  
      const message1 = {
        id: randomUUID(),
        thid: "",
        to: myDid,
        from: testDid1,
        direction: MessageDirection.RECEIVED,
        fromPrior: "",
        ack: ["test"],
        body: "Message received",
        createdTime: new Date().toISOString(),
        attachments: [],
        piuri: "",
        extraHeaders: ["x-extra-header"],
        expiresTimePlus: new Date().toISOString(),
      };
      const message2 = {
        id: randomUUID(),
        thid: "",
        to: testDid2,
        from: myDid,
        direction: MessageDirection.SENT,
        fromPrior: "",
        ack: ["test"],
        body: "Message sent",
        createdTime: new Date().toISOString(),
        attachments: [],
        piuri: "",
        extraHeaders: ["x-extra-header"],
        expiresTimePlus: new Date().toISOString(),
      };
      await instance.storeMessage(message1);
      await instance.storeMessage(message2);
  
      const messages = await instance.getAllMessagesByDID(myDid);
  
      expect(messages.length).to.equal(2);
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
  //*/

  it("should get message", async function () {
    const to = Domain.DID.fromString("did:prism:123");
    const from = Domain.DID.fromString("did:prism:321");

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
    const mediator = Domain.DID.fromString("did:prism:123");
    const host = Domain.DID.fromString("did:prism:321");
    const routing = Domain.DID.fromString("did:prism:432");
    const mediatorPrivateKey: Domain.PrivateKey = new X25519PrivateKey(
      Buffer.from(
        "76735a33485f497970546b7978646f466272346f657447746f53496363782d614330365f474f53577a7273",
        "hex"
      )
    );
    const hostPrivateKey: Domain.PrivateKey = new X25519PrivateKey(
      Buffer.from(
        "76735a33485f497970546b7978646f466272346f657447746f53496363782d614330365f474f53577a7273",
        "hex"
      )
    );
    const routingPrivateKey: Domain.PrivateKey = new X25519PrivateKey(
      Buffer.from(
        "76735a33485f497970546b7978646f466272346f657447746f53496363782d614330365f474f53577a7273",
        "hex"
      )
    );
    await instance.storePrismDID(mediator, mediatorPrivateKey, "Mediator");
    await instance.storePrismDID(host, hostPrivateKey, "Host");
    await instance.storePrismDID(routing, routingPrivateKey, "Routing");
    await instance.storeMediator({
      mediatorDID: mediator,
      hostDID: host,
      routingDID: routing
    });

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
      issuer: new Domain.DID(
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

  /*
    test(`Calling storePrismDID twice with the same did [reported bug]`, async function () {
      const prismDid = Domain.DID.fromString("did:prism:dadsa:1231321dhsauda23847");
      const keyPathIndex = 11;
      const privateKey = Secp256k1PrivateKey.from.String(
        "01011010011101010100011000100010"
      );
      const privateKeyId = "001";
  
      await instance.storePrismDID(
        prismDid,
        keyPathIndex,
        privateKey,
        privateKeyId
      );
      // second call
      await instance.storePrismDID(
        prismDid,
        keyPathIndex,
        privateKey,
        privateKeyId
      );
  
      const result = await instance.getDIDPrivateKeyByID(privateKeyId);
  
      expect(result?.raw).to.eql(privateKey.raw);
      expect(result?.curve).to.equal(privateKey.curve);
      expect(result?.index).to.equal(privateKey.index);
      expect(result?.size).to.equal(privateKey.size);
      expect(result?.type).to.equal(privateKey.type);
    });
  //*/
});