import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';

import Agent from "../../src/edge-agent/didcomm/Agent";
import Mercury from "../../src/mercury/Mercury";
import Apollo from "../../src/apollo/Apollo";
import * as Fixtures from "../fixtures";
import {
  Api,
  AttachmentDescriptor,
  Credential,
  CredentialMetadata,
  CredentialType,
  DID,
  LinkSecret,
  Message,
  Seed,
  StorableCredential,
} from "../../src/domain/models";
import { DIDCommProtocol } from "../../src/mercury/DIDCommProtocol";
import { Castor as CastorType } from "../../src/domain/buildingBlocks/Castor";
import { OfferCredential } from "../../src/edge-agent/protocols/issueCredential/OfferCredential";
import { ProtocolType } from "../../src/edge-agent/protocols/ProtocolTypes";
import { CredentialPreview } from "../../src/edge-agent/protocols/issueCredential/CredentialPreview";
import { RequestCredential } from "../../src/edge-agent/protocols/issueCredential/RequestCredential";
import { IssueCredential } from "../../src/edge-agent/protocols/issueCredential/IssueCredential";
import { base64url } from "multiformats/bases/base64";
import { RequestPresentation } from "../../src/edge-agent/protocols/proofPresentation/RequestPresentation";
import { Presentation } from "../../src/edge-agent/protocols/proofPresentation/Presentation";
import { AnonCredsCredential } from "../../src/pollux/models/AnonCredsVerifiableCredential";
import InMemoryStore from "../fixtures/inmemory";
import { ApiResponse, Pluto as IPluto, JWT } from "../../src/domain";
import { Pluto } from "../../src/pluto/Pluto";
import { Castor, Store } from "../../src";
import { randomUUID } from "crypto";
import AnoncredsModule from "../../src/plugins/internal/anoncreds";


let agent: Agent;
let pluto: IPluto;
let castor: CastorType;
let store: Pluto.Store;
let api: Api;


describe("Agent Tests", () => {
  afterEach(async () => {
    await agent.stop();
  });

  beforeEach(async () => {
    vi.useFakeTimers();
    vi.mock('isows', () => ({
      WebSocket: vi.fn(() => ({
        addEventListener: vi.fn(),
        send: vi.fn(),
        close: vi.fn(),
      })),
    }));

    const apollo: Apollo = new Apollo();
    castor = new Castor(apollo);
    api = {
      request: async () => new ApiResponse<any>(new Uint8Array(), 200),
    };
    const didProtocol: DIDCommProtocol = {
      packEncrypted: async () => "",
      unpack: async () => new Message("{}", undefined, "TypeofMessage"),
    };
    store = new Store({
      name: 'test' + randomUUID(),
      storage: InMemoryStore,
      password: Buffer.from("demoapp").toString("hex")
    });

    pluto = new Pluto(store, apollo);
    const mercury = new Mercury(castor, didProtocol, api);
    const seed: Seed = {
      value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
    };

    agent = Agent.initialize({
      mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      apollo,
      castor,
      pluto,
      mercury,
      seed,
      api,
    });

    agent.plugins.register(AnoncredsModule);
  });

  describe("Anoncreds", () => {
    beforeEach(async () => {
      // await agent.start();
    });

    describe("prepareRequestCredentialWithIssuer", () => {
      const credentialPreview: CredentialPreview = {
        type: ProtocolType.DidcommCredentialPreview,
        attributes: [
          {
            name: "name",
            value: "javi",
            mimeType: "text",
          },
        ],
      };
      const mypeerDID = new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const validPeerDID = DID.fromString(
        `did:peer:2.Ez6LSoHkfN1Y4nK9RCjx7vopWsLrMGNFNgTNZgoCNQrTzmb1n.Vz6MknRZmapV7uYZQuZez9n9N3tQotjRN18UGS68Vcfo6gR4h.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vZXhhbXBsZS5jb20vZW5kcG9pbnQiLCJyIjpbImRpZDpleGFtcGxlOnNvbWVtZWRpYXRvciNzb21la2V5Il0sImEiOltdfX0`
      );

      const createOffer = (credType: CredentialType) => {
        const credentialMap = new Map();
        if (credType === CredentialType.JWT) {
          credentialMap.set(
            CredentialType.JWT,
            Fixtures.Credentials.JWT.credentialPayload
          );
        } else if (credType === CredentialType.AnonCreds) {
          credentialMap.set(credType, Fixtures.Credentials.Anoncreds.credentialOffer);
        } else if (credType === CredentialType.SDJWT) {
          credentialMap.set(
            CredentialType.SDJWT,
            Fixtures.Credentials.SDJWT.credentialPayloadEncoded
          );
        }

        return OfferCredential.build(
          credentialPreview,
          mypeerDID,
          validPeerDID,
          "threadID123456",
          credentialMap
        );
      };

      it("Should throw when linkSecret is not found - Anoncreds", () => {
        const offer = createOffer(CredentialType.AnonCreds);
        vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(null);
        const sut = agent.prepareRequestCredentialWithIssuer(offer);

        expect(sut).rejects.toThrow("-1: Invalid attachment format");
      });

      it("Should create a credential request from a valid didcomm CredentialOffer Message", async () => {
        const linkSecret = Fixtures.Credentials.Anoncreds.linkSecret;

        vi.spyOn(api, "request").mockResolvedValue(new ApiResponse(Fixtures.Credentials.Anoncreds.credentialDefinition, 200));
        vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(linkSecret);
        vi.spyOn(pluto, "storeCredentialMetadata").mockResolvedValue();

        const offer = Fixtures.Credentials.Anoncreds.credentialOfferMessage;
        const requestCredential = await agent.prepareRequestCredentialWithIssuer(offer);

        expect(requestCredential).to.be.instanceOf(RequestCredential);
        expect(requestCredential.to?.toString()).to.equal(
          offer.from?.toString()
        );
        expect(requestCredential.from.toString()).to.equal(
          offer.to?.toString()
        );

        expect(requestCredential.body.formats).to.be.an("array");
        expect(requestCredential.body.formats).to.have.length(1);
        // expect(requestCredential.body.formats[0].format).to.equal(credType);

        const foundAttachment = requestCredential.attachments.find(
          ({ id }) => id === requestCredential.body.formats[0].attach_id
        );

        expect(foundAttachment).to.not.be.undefined;
        expect(foundAttachment?.format).to.equal("anoncreds/credential-request@v1.0");
      });
    });

    describe("processIssuedCredentialMessage", () => {
      const base64Data = base64url.baseEncode(
        Buffer.from(JSON.stringify(Fixtures.Credentials.Anoncreds.credentialIssued))
      );



      it("no attachment - throws", () => {
        const issueCredential = new IssueCredential(
          { formats: [] },
          [],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to")
        );

        const result = agent.processIssuedCredentialMessage(issueCredential);

        expect(result).rejects.toThrow("-1: Invalid attachment");
      });

      it("Pluto.getCredentialMetadata returns nullish - throws", async () => {
        vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(null);
        vi.spyOn(pluto, "getCredentialMetadata").mockResolvedValue(null);

        const issueCredential = new IssueCredential(
          { formats: [{ attach_id: "attach_id", format: CredentialType.AnonCreds }] },
          [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, "anoncreds/credential@v1.0")],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "thid"
        );

        const result = agent.processIssuedCredentialMessage(issueCredential);

        expect(result).rejects.toThrow("Invalid credential metadata");
      });

      it("Should be able to parse a creential and convert it into a storable object from a valid didcomm CredentialIssue Message", async () => {
        vi.spyOn(pluto, "storeCredential").mockResolvedValue();
        vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(Fixtures.Credentials.Anoncreds.linkSecret);
        vi.spyOn(api, "request").mockResolvedValue(new ApiResponse(Fixtures.Credentials.Anoncreds.credentialDefinition, 200));

        const stubGetCredentialMetadata = vi.spyOn(pluto, "getCredentialMetadata").mockResolvedValue(
          new CredentialMetadata(CredentialType.AnonCreds, "mock", Fixtures.Credentials.Anoncreds.credentialRequestMeta)
        );

        const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
        const encoded = Buffer.from(JSON.stringify(payload));
        const base64Data = base64url.baseEncode(encoded);

        const issueCredential = new IssueCredential(
          { formats: [{ attach_id: "attach_id", format: CredentialType.AnonCreds }] },
          [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, "anoncreds/credential@v1.0")],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "thid"
        );

        const result = await agent.processIssuedCredentialMessage(issueCredential);

        expect(result).to.be.an.instanceOf(Credential);
        expect(result.isStorable()).to.be.true;

        const storable = (result as any as StorableCredential).toStorable();
        expect(storable).not.to.be.undefined;
        expect(stubGetCredentialMetadata).toHaveBeenCalledWith(issueCredential.thid);
      });
    });


    describe("createPresentationForRequestProof", () => {
      const didFrom = DID.from("did:peer:2.Ez6LSfhufN8b8EufbxPNRh88YYvjpf7uuVfa3tMG4nKeFK2wX.Vz6Mkf2USnehnAgu263PfyTDsB7KhjuR64wMa3Y4XLHi3KuQS.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovLzE5Mi4xNjguMS4xNjU6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ");
      const didTo = DID.from("did:peer:2.Ez6LSjNzhLeoBEL67PHWSq6X7A7YFuQpcqs13g3cYJTRFyhpu.Vz6MkemtLC5RN1bwBopgZVgXpRRXoigbZjKQt8NHEiJR1eAQ1.SeyJyIjpbXSwicyI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5emFYUXRjSEpwYzIwdGJXVmthV0YwYjNJdVlYUmhiR0Z3Y21semJTNXBieUlzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJhIjpbXSwidCI6ImRtIn0");

      test("AnoncredsCredential + AnoncredsPresentationRequest - returns Presentation", async () => {
        vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(Fixtures.Credentials.Anoncreds.linkSecret);
        vi.spyOn(api, "request")
          .mockResolvedValueOnce(new ApiResponse(Fixtures.Credentials.Anoncreds.schema, 200))
          .mockResolvedValueOnce(new ApiResponse(Fixtures.Credentials.Anoncreds.credentialDefinition, 200));

        const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
        const attachment = new AttachmentDescriptor(Fixtures.PresentationRequests.AnoncredsAttachment.data, "attach_1", undefined, undefined, "anoncreds/proof-request@v1.0");
        const request = new RequestPresentation(
          { proofTypes: [] },
          [attachment],
          didFrom,
          didTo
        );

        const result = await agent.createPresentationForRequestProof(request, credential);

        expect(result).to.be.instanceOf(Presentation);
        expect(result).to.have.property("attachments")
          .to.be.an("array")
          .to.have.length(1);
        const attached = result.attachments[0];
        // TODO: what should this be?
        // expect(attached).to.have.property("mediaType", CredentialType.JWT);
        expect(attached).to.have.property("data");
        expect(attached.data).to.have.property("base64").to.be.a("string");

        // expect(result).to.have.property("body");
        // expect(result.body).to.have.property("comment", request.body.comment);
        // expect(result.body).to.have.property("goalCode", request.body.goalCode);

        expect(result).to.have.property("from", request.to);
        expect(result).to.have.property("to", request.from);
        // expect(result).to.have.property("thid", request.thid);
      });

    });
    //*/
  });
});
