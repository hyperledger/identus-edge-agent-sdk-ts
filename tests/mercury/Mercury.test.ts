/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import {
  Api,
  DID,
  DIDDocument,
  HttpResponse,
  KeyPair,
  Message,
  PublicKey,
  Service,
  ServiceEndpoint,
  Services,
} from "../../domain";
import * as Domain from "../../domain";
import { MercuryError } from "../../domain/models/Errors";
import { DIDCommProtocol } from "../../mercury/DIDCommProtocol";
import Mercury from "../../mercury/Mercury";
import Castor from "../../domain/buildingBlocks/Castor";
chai.use(SinonChai);
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Mercury", () => {
  let sandbox: sinon.SinonSandbox;
  let ctx: {
    castor: Castor;
    httpManager: Api;
    didProtocol: DIDCommProtocol;
    mercury: Mercury;
  };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  const makeTestContext = (message?: Message) => {
    const castor: Castor = {
      parseDID(did: string): DID {
        throw new Error("Method not implemented.");
      },
      createPrismDID(
        masterPublicKey: PublicKey,
        services?: Service[] | undefined
      ): Promise<DID> {
        throw new Error("Method not implemented.");
      },
      createPeerDID(keyPairs: KeyPair[], services: Service[]): Promise<DID> {
        throw new Error("Method not implemented.");
      },
      resolveDID(did: string): Promise<DIDDocument> {
        throw new Error("Method not implemented.");
      },
      verifySignature(
        did: DID,
        challenge: Uint8Array,
        signature: Uint8Array
      ): Promise<boolean> {
        throw new Error("Method not implemented.");
      },
      getEcnumbasis(did: DID, keyPair: KeyPair): string {
        throw new Error("Method not implemented.");
      },
    };
    const httpManager: Api = {
      request: async () => new HttpResponse<any>(new Uint8Array(), 200),
    };
    const didProtocol: DIDCommProtocol = {
      packEncrypted: async () => "",
      unpack: async () =>
        message || new Message("{}", undefined, "TypeofMessage"),
    };
    const mercury = new Mercury(castor, didProtocol, httpManager);
    mercury.castor = castor;
    return { castor, httpManager, didProtocol, mercury };
  };

  describe("PackMessage", () => {
    it("should call DIDCommProtocol.packEncrypted with [message, message.to, message.from]", () => {
      const fromDid = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      );
      const toDid = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      );
      const message = new Message(
        "{}",
        undefined,
        "TypeofMessage",
        fromDid,
        toDid,
        []
      );
      const ctx = makeTestContext(message);

      sandbox.stub(ctx.didProtocol, "packEncrypted");
      ctx.mercury.packMessage(message);

      expect(ctx.didProtocol.packEncrypted).to.have.been.calledWith(
        message,
        toDid,
        fromDid
      );
    });

    describe("Errors", () => {
      it("should throw error when Messsage.to is not a DID", () => {
        const message = {} as any;
        const ctx = makeTestContext(message);

        expect(() => ctx.mercury.packMessage(message)).to.throw(
          MercuryError.NoRecipientDIDSetError
        );
      });

      it("should throw error when Messsage.from is not a DID", () => {
        const message = { to: DID.fromString("test:did:to") } as any;
        const ctx = makeTestContext(message);
        expect(() => ctx.mercury.packMessage(message)).to.throw(
          MercuryError.NoSenderDIDSetError
        );
      });
    });
  });

  describe("UnpackMessage", () => {
    it("should call DIDCommProtocol.unpack with [message]", () => {
      const ctx = makeTestContext();
      const messageString = "someMessageString";

      sandbox.stub(ctx.didProtocol, "unpack");
      ctx.mercury.unpackMessage(messageString);

      expect(ctx.didProtocol.unpack).to.have.been.calledWith(messageString);
    });
  });

  describe("SendMessage", () => {
    let fromDID;
    let toDID;

    beforeEach(() => {
      ctx = makeTestContext();
      fromDID = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      );
      toDID = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      );

      sandbox.stub(ctx.castor, "parseDID").returns(fromDID);
      sandbox
        .stub(ctx.httpManager, "request")
        .resolves(new HttpResponse<any>({}, 200));
    });

    it("should call HttpManager.postEncrypted with [ServiceEndpoint.uri, packedMessage]", async () => {
      const packedMessage = "qwerty";
      const message = new Message(
        "{}",
        undefined,
        "DIDCommMessaging",
        fromDID,
        toDID
      );

      const endpoint = new ServiceEndpoint("testUri");
      const services = new Services([
        new Service("testService", ["DIDCommMessaging"], endpoint),
      ]);
      sandbox
        .stub(ctx.castor, "resolveDID")
        .resolves(new Domain.DIDDocument(toDID, [services]));
      sandbox.stub(ctx.didProtocol, "packEncrypted").resolves(packedMessage);

      await ctx.mercury.sendMessage(message);

      expect(ctx.didProtocol.packEncrypted).to.have.been.calledWith(
        message,
        toDID,
        fromDID
      );
      expect(ctx.mercury.castor.resolveDID).to.have.been.calledWith(
        toDID.toString()
      );
      expect(ctx.mercury.api.request).to.have.been.calledWith(
        "POST",
        endpoint.uri,
        new Map(),
        new Map([["Content-type", "application/didcomm-encrypted+json"]]),
        packedMessage
      );
    });

    describe("Errors", () => {
      it("should throw error when Messsage.to is not a DID", async () => {
        const message = {} as any;

        expect(ctx.mercury.sendMessage(message)).to.eventually.be.rejectedWith(
          MercuryError.NoRecipientDIDSetError
        );
      });

      it("should throw error when Messsage.to has no valid Service", async () => {
        const message = new Message(
          "{}",
          undefined,
          "TypeofMessage",
          toDID,
          fromDID
        );

        sandbox
          .stub(ctx.castor, "resolveDID")
          .resolves(new Domain.DIDDocument(toDID, []));

        expect(ctx.mercury.sendMessage(message)).to.eventually.be.rejectedWith(
          MercuryError.NoValidServiceFoundError
        );
      });
    });
  });

  describe("SendMessageParseMessage", () => {
    it("passes the result of sendMessage to unpackMessage", async () => {
      const ctx = makeTestContext();
      const message = new Message("{}", undefined, "TypeofMessage");
      const returnedMessage = { message: "returnedMessage" };
      const unpackedMessage = new Message("{}", undefined, "TypeofMessage");

      sandbox
        .stub(ctx.mercury, "sendMessage")
        .callsFake(async () => returnedMessage);
      sandbox
        .stub(ctx.mercury, "unpackMessage")
        .callsFake(async () => unpackedMessage);

      const result = await ctx.mercury.sendMessageParseMessage(message);
      const jsonMessage = JSON.stringify(returnedMessage);
      expect(ctx.mercury.sendMessage).to.have.been.calledWith(message);
      expect(ctx.mercury.unpackMessage).to.have.been.calledWith(jsonMessage);
      expect(result).to.equal(unpackedMessage);
    });
  });
});
