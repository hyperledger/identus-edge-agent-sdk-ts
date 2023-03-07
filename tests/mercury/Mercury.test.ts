import chai from "chai";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import Castor from "../../castor/Castor";
import { DID, Message, Service, ServiceEndpoint } from "../../domain";
import { MercuryError } from "../../domain/models/Errors";
import { DIDCommProtocol } from "../../mercury/DIDCommProtocol";
import Mercury from "../../mercury/Mercury";

chai.use(SinonChai);
const expect = chai.expect;

describe("Mercury", () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  })

  const makeTestContext = () => {
    const castor: Pick<Castor, "resolveDID"> = {
      resolveDID: async (did: string) => ({ id: DID.fromString(did), coreProperties: [] })
    };
    const httpManager = { postEncrypted: async () => new Uint8Array() };
    const didProtocol: DIDCommProtocol = {
      packEncrypted: async () => "",
      unpack: async () => new Message("", "", undefined, [], "")
    };
    const mercury = new Mercury(castor as any, didProtocol, httpManager);

    return { castor, httpManager, didProtocol, mercury };
  };

  describe("PackMessage", () => {
    it("should call DIDCommProtocol.packEncrypted with [message, message.to, message.from]", () => {
      const ctx = makeTestContext();
      const fromDid = DID.fromString("test:did:from");
      const toDid = DID.fromString("test:did:to");
      const message = new Message("", "", undefined, [], "", [], "", "", [], fromDid, toDid);

      sandbox.stub(ctx.didProtocol, "packEncrypted");
      ctx.mercury.packMessage(message);

      expect(ctx.didProtocol.packEncrypted).to.have.been.calledWith(message, toDid, fromDid);
    });

    describe("Errors", () => {
      it("should throw error when Messsage.to is not a DID", () => {
        const ctx = makeTestContext();
        const message = {} as any;

        expect(() => ctx.mercury.packMessage(message)).to.throw(MercuryError.NoRecipientDIDSetError);
      });

      it("should throw error when Messsage.from is not a DID", () => {
        const ctx = makeTestContext();
        const message = { to: DID.fromString("test:did:to") } as any;

        expect(() => ctx.mercury.packMessage(message)).to.throw(MercuryError.NoSenderDIDSetError);
      });
    });
  });

  describe("UnpackMessage", () => {
    it("should call DIDCommProtocol.unpack with [message]", () => {
      const ctx = makeTestContext();
      const messageString = "someMessageString"

      sandbox.stub(ctx.didProtocol, "unpack");
      ctx.mercury.unpackMessage(messageString);

      expect(ctx.didProtocol.unpack).to.have.been.calledWith(messageString);
    });
  });

  describe("SendMessage", () => {
    it("should call HttpManager.postEncrypted with [ServiceEndpoint.uri, packedMessage]", () => {
      const ctx = makeTestContext();
      const fromDid = DID.fromString("test:did:from");
      const toDid = DID.fromString("test:did:to");
      const message = new Message("", "", undefined, [], "", [], "", "", [], fromDid, toDid);
      const endpoint = new ServiceEndpoint("testUri");
      const service = new Service("testService", [], endpoint);
      const packedMessage = "qwerty";

      ctx.castor.resolveDID = async () => ({
        id: toDid,
        coreProperties: [service]
      });

      ctx.didProtocol.packEncrypted = async () => packedMessage;

      sandbox.stub(ctx.castor, "resolveDID");
      sandbox.stub(ctx.httpManager, "postEncrypted");

      try {
        ctx.mercury.sendMessage(message);

        expect(ctx.castor.resolveDID).to.have.been.calledWith(toDid);
        expect(ctx.httpManager.postEncrypted).to.have.been.called(endpoint.uri, packedMessage);
      }
      catch {
        // should never be here
      }
    });

    describe("Errors", () => {
      it("should throw error when Messsage.to is not a DID", async () => {
        const ctx = makeTestContext();
        const message = {} as any;

        try {
          await ctx.mercury.sendMessage(message);
        }
        catch (thrownError) {
          expect(thrownError).to.be.instanceOf(MercuryError.NoRecipientDIDSetError);
        }
      });

      it("should throw error when Messsage.to has no valid Service", async () => {
        const ctx = makeTestContext();
        const fromDid = DID.fromString("test:did:from");
        const toDid = DID.fromString("test:did:to");
        const message = new Message("", "", undefined, [], "", [], "", "", [], fromDid, toDid);

        try {
          await ctx.mercury.sendMessage(message);
        }
        catch (thrownError) {
          expect(thrownError).to.be.instanceOf(MercuryError.NoValidServiceFoundError);
        }
      });
    });
  });

  describe("SendMessageParseMessage", () => {
    it("passes the result of sendMessage to unpackMessage", async () => {
      const ctx = makeTestContext();
      const message = new Message("", "", undefined, [], "input");
      const returnedMessage = "returnedMessage";
      const unpackedMessage = new Message("", "", undefined, [], "output")
      const encoded = new TextEncoder().encode(returnedMessage);

      sandbox.stub(ctx.mercury, "sendMessage").callsFake(async () => encoded);
      sandbox.stub(ctx.mercury, "unpackMessage").callsFake(async () => unpackedMessage);

      const result = await ctx.mercury.sendMessageParseMessage(message);
      expect(ctx.mercury.sendMessage).to.have.been.calledWith(message);
      expect(ctx.mercury.unpackMessage).to.have.been.calledWith(returnedMessage);
      expect(result).to.equal(unpackedMessage);
    });
  });
});