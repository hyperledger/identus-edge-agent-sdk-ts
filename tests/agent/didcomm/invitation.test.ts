import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import SinonChai from "sinon-chai";
import UUIDLib from "@stablelib/uuid";
import Agent from "../../../src/edge-agent/didcomm/Agent";
import { AttachmentDescriptor, DID, Message, Seed } from "../../../src/domain";
import { HandshakeRequest, OutOfBandInvitation, ProtocolType } from "../../../src";
import { InvitationIsInvalidError } from "../../../src/domain/models/errors/Agent";
import { mockPluto } from "../../fixtures/inmemory/factory";
chai.use(SinonChai);
chai.use(chaiAsPromised);



describe("Agent", () => {
  let agent: Agent;

  afterEach(async () => {
    await agent.stop();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    const pluto = mockPluto();
    const seed: Seed = {
      value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
    };

    agent = Agent.initialize({
      mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      pluto,
      seed,
    });

    vi.spyOn(agent.connectionManager, "sendMessage").mockResolvedValue(undefined);
    vi.spyOn(agent.connectionManager, "startMediator").mockResolvedValue();
    vi.spyOn(agent.connectionManager, "startFetchingMessages").mockResolvedValue();
    (agent.mediationHandler as any).mediator = {
      hostDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      routingDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
    };

    await agent.start();
  });

  describe("parseInvitation", () => {
    const makeOOB = (attachments: any[] = []) => ({
      id: "f96e3699-591c-4ae7-b5e6-6efe6d26255b",
      type: "https://didcomm.org/out-of-band/2.0/invitation",
      from: "did:peer:2.Ez6LSfsKMe8vSSWkYdZCpn4YViPERfdGAhdLAGHgx2LGJwfmA.Vz6Mkpw1kSabBMzkA3v59tQFnh3FtkKy6xLhLxd9S6BAoaBg2.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMzc6ODA4MC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",
      body: {
        goal_code: "issue-vc",
        goal: "Test OOB",
        accept: ["didcomm/v2"],
      },
      created_time: 1724851139,
      expires_time: 9924851439,
      attachments: attachments.map((x, i) => ({
        id: `${i}0cdc90c-9a99-4cda-87fe-4f4b2595112a`,
        media_type: "application/json",
        data: { json: x },
      })),
    });

    const encodeB64 = (value: any) => Buffer.from(JSON.stringify(value)).toString("base64");

    it("invitation - returns OutOfBandInvitation", async () => {
      const oob = makeOOB();
      const url = `https://my.domain.com/path?_oob=${encodeB64(oob)}`;

      const result = await agent.parseInvitation(url);

      expect(result).to.be.instanceOf(OutOfBandInvitation);
      const cast = result as OutOfBandInvitation;
      expect(cast.type).to.eq(ProtocolType.Didcomminvitation);
      expect(cast.attachments).to.have.length(0);
      expect(cast.attachments).to.deep.eq(oob.attachments);
      expect(cast.body).to.deep.eq(oob.body);
      expect(cast.from).to.eq(oob.from);
      expect(cast.expiration).to.eq(oob.expires_time);
      expect(cast.isExpired).to.eq(false);
    });

    it("invitation URL - returns OutOfBandInvitation", async () => {
      const oob = makeOOB();
      const url = `https://my.domain.com/path?_oob=${encodeB64(oob)}`;

      const result = await agent.parseInvitation(new URL(url) as any);

      expect(result).to.be.instanceOf(OutOfBandInvitation);
    });

    it("Invitation expired - throws", () => {
      const oob = makeOOB();
      oob.expires_time = (Date.now() / 1000) - 10;
      const url = `https://my.domain.com/path?_oob=${encodeB64(oob)}`;

      expect(agent.parseInvitation(url))
        .to.eventually.be.rejectedWith(InvitationIsInvalidError);
    });

    it("Credential Offer Attachment - returns OutOfBandInvitation with attachment", async () => {
      const offer = {
        id: "655e9a2c-48ed-459b-b3da-6b3686655564",
        type: "https://didcomm.org/issue-credential/3.0/offer-credential",
        body: {
          goal_code: "Offer Credential",
          credential_preview: {
            type: "https://didcomm.org/issue-credential/3.0/credential-credential",
            body: {
              attributes: [{ name: "familyName", value: "Wonderland" }],
            },
          },
        },
        attachments: [
          {
            id: "8404678b-9a36-4989-af1d-0f445347e0e3",
            media_type: "application/json",
            data: {
              json: {
                options: {
                  challenge: "ad0f43ad-8538-41d4-9cb8-20967bc685bc",
                  domain: "domain",
                },
                presentation_definition: {
                  id: "748efa58-2bce-440d-921f-2520a8446663",
                  input_descriptors: [],
                  format: {
                    jwt: {
                      alg: ["ES256K"],
                      proof_type: [],
                    },
                  },
                },
              },
            },
            format: "prism/jwt",
          },
        ],
        thid: "f96e3699-591c-4ae7-b5e6-6efe6d26255b",
        from: "did:peer:2.Ez6LSfsKMe8vSSWkYdZCpn4YViPERfdGAhdLAGHgx2LGJwfmA.Vz6Mkpw1kSabBMzkA3v59tQFnh3FtkKy6xLhLxd9S6BAoaBg2.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMzc6ODA4MC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",
      };

      const oob = makeOOB([offer]);
      const url = `https://my.domain.com/path?_oob=${encodeB64(oob)}`;

      const result = await agent.parseInvitation(url);

      expect(result).to.be.instanceOf(OutOfBandInvitation);
      const cast = result as OutOfBandInvitation;
      expect(cast.type).to.eq(ProtocolType.Didcomminvitation);
      expect(cast.body).to.deep.eq(oob.body);
      expect(cast.from).to.eq(oob.from);
      expect(cast.expiration).to.eq(oob.expires_time);
      expect(cast.isExpired).to.eq(false);
      expect(cast.attachments).to.have.length(1);

      const attached = cast.attachments.at(0)!;
      expect(attached).to.be.instanceOf(AttachmentDescriptor);
      expect(attached.id).to.eq(oob.attachments.at(0)?.id);
      expect(attached.mediaType).to.eq(oob.attachments.at(0)?.media_type);
      expect(attached.payload).to.deep.eq(offer);
    });
  });

  describe("acceptInvitation", () => {
    test("OutOfBandInvitation - creates Connection", async () => {
      const did = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const stubStoreDID = vi.spyOn(agent.pluto, "storeDID").mockResolvedValue();
      const stubCreateDID = vi.spyOn(agent.castor, "createPeerDID").mockResolvedValue(did);
      const stubSendMessage = vi.spyOn(agent.connectionManager, "sendMessage").mockResolvedValue(null as any);
      const stubAddConnection = vi.spyOn(agent.connectionManager, "addConnection").mockResolvedValue();
      vi.spyOn(agent.mediationHandler, "updateKeyListWithDIDs").mockResolvedValue();
      vi.spyOn(UUIDLib, "uuid").mockResolvedValue("123456-123456-12356-123456");

      const oob = new OutOfBandInvitation(
        {},
        "did:peer:2.Ez6LSfsKMe8vSSWkYdZCpn4YViPERfdGAhdLAGHgx2LGJwfmA.Vz6Mkpw1kSabBMzkA3v59tQFnh3FtkKy6xLhLxd9S6BAoaBg2.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMzc6ODA4MC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",
        "f96e3699-591c-4ae7-b5e6-6efe6d26255b",
        [],
        9924851439
      );

      await agent.acceptInvitation(oob);

      expect(stubCreateDID).toHaveBeenCalledOnce;
      expect(stubStoreDID).toHaveBeenCalledOnce;
      expect(stubAddConnection).toHaveBeenCalledOnce;
      expect(stubSendMessage).toHaveBeenCalledWith(
        HandshakeRequest.fromOutOfBand(oob, did).makeMessage()
      );
    });

    test("Connectionless Credential Offer - stores Credential Offer", async () => {
      const did = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const stubStoreDID = vi.spyOn(agent.pluto, "storeDID").mockResolvedValue();
      const stubCreateDID = vi.spyOn(agent.castor, "createPeerDID").mockResolvedValue(did);
      const stubSendMessage = vi.spyOn(agent.mercury, "sendMessage").mockResolvedValue(null as any);
      const stubAddConnection = vi.spyOn(agent.connectionManager, "addConnection").mockResolvedValue();
      // const stubStoreMessage = vi.spyOn(agent.pluto, "storeMessage").mockResolvedValue();
      const stubStoreMessage = vi.fn();
      vi.spyOn(agent.pluto, "storeMessage").mockImplementation(stubStoreMessage);

      const offer = {
        id: "655e9a2c-48ed-459b-b3da-6b3686655564",
        type: "https://didcomm.org/issue-credential/3.0/offer-credential",
        body: {
          goal_code: "Offer Credential",
          credential_preview: {
            type: "https://didcomm.org/issue-credential/3.0/credential-credential",
            body: {
              attributes: [{ name: "familyName", value: "Wonderland" }],
            },
          },
        },
        attachments: [
          {
            id: "8404678b-9a36-4989-af1d-0f445347e0e3",
            media_type: "application/json",
            data: {
              json: {
                options: {
                  challenge: "ad0f43ad-8538-41d4-9cb8-20967bc685bc",
                  domain: "domain",
                },
                presentation_definition: {
                  id: "748efa58-2bce-440d-921f-2520a8446663",
                  input_descriptors: [],
                  format: {
                    jwt: {
                      alg: ["ES256K"],
                      proof_type: [],
                    },
                  },
                },
              },
            },
            format: "prism/jwt",
          },
        ],
        thid: "f96e3699-591c-4ae7-b5e6-6efe6d26255b",
        from: "did:peer:2.Ez6LSfsKMe8vSSWkYdZCpn4YViPERfdGAhdLAGHgx2LGJwfmA.Vz6Mkpw1kSabBMzkA3v59tQFnh3FtkKy6xLhLxd9S6BAoaBg2.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMzc6ODA4MC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",
      };
      const attached = AttachmentDescriptor.build({ json: offer });
      const oob = new OutOfBandInvitation(
        {},
        "did:peer:2.Ez6LSfsKMe8vSSWkYdZCpn4YViPERfdGAhdLAGHgx2LGJwfmA.Vz6Mkpw1kSabBMzkA3v59tQFnh3FtkKy6xLhLxd9S6BAoaBg2.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMzc6ODA4MC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",
        "f96e3699-591c-4ae7-b5e6-6efe6d26255b",
        [attached],
        9924851439
      );

      await agent.acceptInvitation(oob);

      expect(stubCreateDID).not.toHaveBeenCalled;
      expect(stubStoreDID).not.toHaveBeenCalled;
      expect(stubAddConnection).not.toHaveBeenCalled;
      expect(stubSendMessage).not.toHaveBeenCalled;
      expect(stubStoreMessage).toHaveBeenCalled;
      const storedMsg = stubStoreMessage.mock.lastCall?.at(0)!;
      // const storedMsg = stubStoreMessage.args.at(0)?.at(0)!;
      expect(storedMsg.id).to.deep.eq(offer.id);
      expect(storedMsg.body).to.deep.eq(offer.body);
      expect(storedMsg.piuri).to.deep.eq(offer.type);
      expect(storedMsg.thid).to.deep.eq(offer.thid);
      expect(storedMsg.from?.toString()).to.deep.eq(offer.from);
      expect(storedMsg.to?.toString()).to.eq(did.toString());

      expect(storedMsg.attachments).to.have.length(1);
      const storedAttach = storedMsg.attachments.at(0)!;
      expect(storedAttach.id).to.eq(offer.attachments[0].id);
      expect(storedAttach.format).to.eq(offer.attachments[0].format);
      // expect(storedAttach.mediaType).to.eq(offer.attachments[0].media_type);
      expect(storedAttach.data).to.deep.eq(offer.attachments[0].data);
    });
  });
});
