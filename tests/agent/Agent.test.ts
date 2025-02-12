import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import * as UUIDLib from "@stablelib/uuid";

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
  Message,
  Seed,
  Service,
  ServiceEndpoint,
  StorableCredential,
} from "../../src/domain/models";
import { DIDCommProtocol } from "../../src/mercury/DIDCommProtocol";
import { Castor as CastorType } from "../../src/domain/buildingBlocks/Castor";
import { AgentError } from "../../src/domain/models/Errors";
import { HandshakeRequest } from "../../src/edge-agent/protocols/connection/HandshakeRequest";
import { OfferCredential } from "../../src/edge-agent/protocols/issueCredential/OfferCredential";
import { ProtocolType } from "../../src/edge-agent/protocols/ProtocolTypes";
import { CredentialPreview } from "../../src/edge-agent/protocols/issueCredential/CredentialPreview";
import { RequestCredential } from "../../src/edge-agent/protocols/issueCredential/RequestCredential";
import { IssueCredential } from "../../src/edge-agent/protocols/issueCredential/IssueCredential";
import { base64url } from "multiformats/bases/base64";
import { RequestPresentation } from "../../src/edge-agent/protocols/proofPresentation/RequestPresentation";
import { Presentation } from "../../src/edge-agent/protocols/proofPresentation/Presentation";
import { JWTCredential } from "../../src/pollux/models/JWTVerifiableCredential";
import { AnonCredsCredential } from "../../src/pollux/models/AnonCredsVerifiableCredential";
import InMemoryStore from "../fixtures/inmemory";
import { ApiResponse, Pluto as IPluto, JWT } from "../../src/domain";
import { Pluto } from "../../src/pluto/Pluto";
import { RevocationNotification } from "../../src/edge-agent/protocols/revocation/RevocationNotfiication";
import { Castor, SDJWTCredential, Store } from "../../src";
import { randomUUID } from "crypto";
import { DIF } from '../../src/plugins/internal/dif/types';

chai.use(SinonChai);
chai.use(chaiAsPromised);

let agent: Agent;
let apollo: Apollo;
let pluto: IPluto;
let castor: CastorType;
let sandbox: sinon.SinonSandbox;
let store: Pluto.Store;
let api: Api;


describe("Agent Tests", () => {
  afterEach(async () => {
    vi.useRealTimers();

    await agent.stop();
    sandbox.restore();
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
    sandbox = sinon.createSandbox();
    apollo = new Apollo();
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
    // const polluxInstance = new Pollux(apollo, castor);
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
    });

    sandbox.stub(agent.connectionManager, "startMediator").resolves();
    sandbox.stub(agent.connectionManager, "startFetchingMessages").resolves();
    (agent.mediationHandler as any).mediator = {
      hostDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      routingDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
    };

    // instanceFromConnectionManager(
    //   apollo,
    //   castor,
    //   pluto,
    //   mercury,
    //   connectionsManager,
    //   seed,
    //   undefined,
    //   {
    //     experiments: {
    //       liveMode: false
    //     }
    //   }
    // );

    // await polluxInstance.start();

    // pollux = agent.pollux;
  });

  describe("Integration Tests", () => {
    beforeEach(async () => {
      await agent.start();
    });


    it("As a developer when a peerDID is created and we have specified to updateKeyList the services are correctly added and updateKeyList is called correctly.", async () => {
      const storePeerDID = sandbox.stub(pluto, "storeDID").resolves();
      const updateKeyList = sandbox.stub(agent.mediationHandler, "updateKeyListWithDIDs");
      const createPeerDID = sandbox.stub(castor, "createPeerDID");

      const peerDID = await agent.createNewPeerDID([], true);

      expect(createPeerDID.callCount).to.be.equal(1);
      expect(storePeerDID.callCount).to.be.equal(1);
      expect(storePeerDID.callCount).to.be.equal(1);

      expect(agent.currentMediatorDID).not.equals(null);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mediatorDID = agent.currentMediatorDID!;

      const expectedService = new Service(
        "#didcomm-1",
        ["DIDCommMessaging"],
        new ServiceEndpoint(mediatorDID.toString())
      );
      createPeerDID.calledWith([], [expectedService]);
      updateKeyList.calledWith([peerDID]);
    });

    it("As a developer I can only use a valid invitationMessage as out of band invitation, anything else will throw an exception as the piuri is invalid.", async () => {
      /**
       * The following is an invalid oob connection string, decode it in base64 to see the original body
       */
      const oob =
        "https://my.domain.com/path?_oob=eyJpZCI6Ijg5NWYzMWZhLTIyNWUtNDRlNi1hNzkyLWFhN2E0OGY1MjgzYiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC93cm9uZ1R5cGUiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2V6eWtjQmpNS2dHUEVEaDQ0cEM4UWZ1N2NDekpvc1Z1VjRqcDZ4NVk1QkhMLlZ6Nk1rd1JKdDFTbVpwM2FERGhMVW40ZkszM204TExaWFc5MlhUOHZyVUh1NHVwQTYuU2V5SjBJam9pWkcwaUxDSnpJam9pYUhSMGNITTZMeTlyT0hNdFpHVjJMbUYwWVd4aGNISnBjMjB1YVc4dmNISnBjMjB0WVdkbGJuUXZaR2xrWTI5dGJTSXNJbklpT2x0ZExDSmhJanBiSW1ScFpHTnZiVzB2ZGpJaVhYMCIsImJvZHkiOnsiZ29hbF9jb2RlIjoiaW8uYXRhbGFwcmlzbS5jb25uZWN0IiwiZ29hbCI6IkVzdGFibGlzaCBhIHRydXN0IGNvbm5lY3Rpb24gYmV0d2VlbiB0d28gcGVlcnMgdXNpbmcgdGhlIHByb3RvY29sICdodHRwczovL2F0YWxhcHJpc20uaW8vbWVyY3VyeS9jb25uZWN0aW9ucy8xLjAvd3JvbmcnIiwiYWNjZXB0IjpbXX19";

      expect(
        agent.parseOOBInvitation(new URL(oob))
      ).to.eventually.be.rejectedWith(AgentError.UnknownInvitationTypeError);
    });

    it("As a developer with a valid invitationMessage I will be sending a Handshake request with the correct information and store the didPair in pluto right after.", async () => {
      const did = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const validOOB = "https://my.domain.com/path?_oob=eyJpZCI6Ijg5NWYzMWZhLTIyNWUtNDRlNi1hNzkyLWFhN2E0OGY1MjgzYiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNlenlrY0JqTUtnR1BFRGg0NHBDOFFmdTdjQ3pKb3NWdVY0anA2eDVZNUJITC5WejZNa3dSSnQxU21acDNhRERoTFVuNGZLMzNtOExMWlhXOTJYVDh2clVIdTR1cEE2LlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5ck9ITXRaR1YyTG1GMFlXeGhjSEpwYzIwdWFXOHZjSEpwYzIwdFlXZGxiblF2Wkdsa1kyOXRiU0lzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6ImlvLmF0YWxhcHJpc20uY29ubmVjdCIsImdvYWwiOiJFc3RhYmxpc2ggYSB0cnVzdCBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHBlZXJzIHVzaW5nIHRoZSBwcm90b2NvbCAnaHR0cHM6Ly9hdGFsYXByaXNtLmlvL21lcmN1cnkvY29ubmVjdGlvbnMvMS4wL3JlcXVlc3QnIiwiYWNjZXB0IjpbXX19";

      sandbox.stub(UUIDLib, "uuid").returns("123456-123456-12356-123456");
      const stubStoreDID = sandbox.stub(agent.pluto, "storeDID").resolves();
      const stubCreateDID = sandbox.stub(agent.castor, "createPeerDID").resolves(did);
      const stubSendMessage = sandbox.stub(agent.connectionManager, "sendMessage").resolves();
      const stubAddConnection = sandbox.stub(agent.connectionManager, "addConnection").resolves();

      const oobInvitation = await agent.parseOOBInvitation(new URL(validOOB));
      await agent.acceptInvitation(oobInvitation);

      expect(stubStoreDID).to.have.been.calledOnce;
      expect(stubAddConnection).to.have.been.calledOnce;
      expect(stubCreateDID).to.have.been.calledOnce;
      expect(stubSendMessage).to.have.been.calledWith(
        HandshakeRequest.fromOutOfBand(oobInvitation, did).makeMessage()
      );
    });

    it("As a developer with a valid invitationMessage I will be sending a presentation with the correct information, but will fail as it is expired.", async () => {
      const connectionManager = agent.connectionManager;

      const did = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const validOOB =
        "https://my.domain.com/path?_oob=eyJpZCI6IjViMjUwMjIzLWExNDItNDRmYi1hOWJkLWU1MjBlNGI0ZjQzMiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNkV0hWQ1BFOHc0NWZETjM4aUh0ZFJ6WGkyTFNqQmRSUjRGTmNOUm12VkNKcy5WejZNa2Z2aUI5S1F1OGlnNVZpeG1HZHM3dmdMNmoyUXNOUGFybkZaanBNQ0E5aHpQLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQTZMeTh4T1RJdU1UWTRMakV1TXpjNk9EQTNNQzlrYVdSamIyMXRJaXdpY2lJNlcxMHNJbUVpT2xzaVpHbGtZMjl0YlM5Mk1pSmRmWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6InByZXNlbnQtdnAiLCJnb2FsIjoiUmVxdWVzdCBwcm9vZiBvZiB2YWNjaW5hdGlvbiBpbmZvcm1hdGlvbiIsImFjY2VwdCI6W119LCJhdHRhY2htZW50cyI6W3siaWQiOiIyYTZmOGM4NS05ZGE3LTRkMjQtOGRhNS0wYzliZDY5ZTBiMDEiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJpZCI6IjI1NTI5MTBiLWI0NmMtNDM3Yy1hNDdhLTlmODQ5OWI5ZTg0ZiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0uYXRhbGFwcmlzbS5pby9wcmVzZW50LXByb29mLzMuMC9yZXF1ZXN0LXByZXNlbnRhdGlvbiIsImJvZHkiOnsiZ29hbF9jb2RlIjoiUmVxdWVzdCBQcm9vZiBQcmVzZW50YXRpb24iLCJ3aWxsX2NvbmZpcm0iOmZhbHNlLCJwcm9vZl90eXBlcyI6W119LCJhdHRhY2htZW50cyI6W3siaWQiOiJiYWJiNTJmMS05NDUyLTQzOGYtYjk3MC0yZDJjOTFmZTAyNGYiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJvcHRpb25zIjp7ImNoYWxsZW5nZSI6IjExYzkxNDkzLTAxYjMtNGM0ZC1hYzM2LWIzMzZiYWI1YmRkZiIsImRvbWFpbiI6Imh0dHBzOi8vcHJpc20tdmVyaWZpZXIuY29tIn0sInByZXNlbnRhdGlvbl9kZWZpbml0aW9uIjp7ImlkIjoiMGNmMzQ2ZDItYWY1Ny00Y2E1LTg2Y2EtYTA1NTE1NjZlYzZmIiwiaW5wdXRfZGVzY3JpcHRvcnMiOltdfX19LCJmb3JtYXQiOiJwcmlzbS9qd3QifV0sInRoaWQiOiI1YjI1MDIyMy1hMTQyLTQ0ZmItYTliZC1lNTIwZTRiNGY0MzIiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2RXSFZDUEU4dzQ1ZkROMzhpSHRkUnpYaTJMU2pCZFJSNEZOY05SbXZWQ0pzLlZ6Nk1rZnZpQjlLUXU4aWc1Vml4bUdkczd2Z0w2ajJRc05QYXJuRlpqcE1DQTloelAuU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbWgwZEhBNkx5OHhPVEl1TVRZNExqRXVNemM2T0RBM01DOWthV1JqYjIxdElpd2ljaUk2VzEwc0ltRWlPbHNpWkdsa1kyOXRiUzkyTWlKZGZYMCJ9fX1dLCJjcmVhdGVkX3RpbWUiOjE3MjQzMzkxNDQsImV4cGlyZXNfdGltZSI6MTcyNDMzOTQ0NH0";

      const createPeerDID = sandbox.stub(agent, "createNewPeerDID");
      const sendMessage = sandbox.stub(connectionManager, "sendMessage");
      const addConnection = sandbox.stub(connectionManager, "addConnection");

      sandbox.stub(UUIDLib, "uuid").returns("123456-123456-12356-123456");

      createPeerDID.resolves(did);
      sendMessage.resolves();
      addConnection.resolves();

      expect(
        agent.parseOOBInvitation(new URL(validOOB))
      ).to.eventually.be.rejectedWith(AgentError.InvitationIsInvalidError);
    });
  });

  describe("functions", () => {
    beforeEach(async () => {
      await agent.start();
    });
    /* Iterate through backup scenarios and fixtures to validate backup and restore functionality.
       Each fixture tests the following:
      - `backup`: Ensures a valid JWE is created from backup data.
      - `restore`: Verifies the restoration of backup data into the store.
      - `round trip integration`: Confirms data integrity during backup and restore cycle.
    */
    Fixtures.Backup.backups.forEach(backupFixture => {
      describe(`Backup/Restore :: ${backupFixture.title}`, () => {
        test("backup", async () => {
          sandbox.stub(pluto, "backup").resolves(backupFixture.json);

          const jwe = await agent.backup.createJWE(backupFixture.options);
          expect(jwe).to.be.a("string");
          expect(jwe.split(".")).to.have.length(5);
        });

        test("restore", async () => {
          const stubRestore = sandbox.stub(pluto, "restore");
          await agent.backup.restore(backupFixture.jwe, backupFixture.options);
          let backupSchema = backupFixture.json;
          const excludes = backupFixture.options?.excludes;
          if (excludes) {
            backupSchema.mediators = excludes.includes('mediators') ? [] : backupSchema.mediators;
            backupSchema.messages = excludes.includes('messages') ? [] : backupSchema.messages;
            backupSchema.link_secret = excludes.includes('link_secret') ? undefined : backupSchema.link_secret;
          }
          const expected = JSON.parse(JSON.stringify(backupSchema));
          expect(stubRestore).to.have.been.calledWith(expected);
        });

        test("round trip integration", async () => {
          // empty db of linksecret
          (store as any).cleanup();
          sandbox.stub(pluto, "backup").resolves(backupFixture.json);
          const spyRestore = sandbox.spy(pluto, "restore");

          const jwe = await agent.backup.createJWE(backupFixture.options);
          await agent.backup.restore(jwe, backupFixture.options);

          expect(jwe).to.be.a("string");

          let backupSchema = backupFixture.json;
          const excludes = backupFixture.options?.excludes;
          if (excludes) {
            backupSchema.mediators = excludes.includes('mediators') ? [] : backupSchema.mediators;
            backupSchema.messages = excludes.includes('messages') ? [] : backupSchema.messages;
            backupSchema.link_secret = excludes.includes('link_secret') ? undefined : backupSchema.link_secret;
          }
          // running SERDE to remove nil values, which will happen during backup/restore
          let expected = JSON.parse(JSON.stringify(backupSchema));
          expect(spyRestore).to.have.been.calledWith(expected);
        });

      });
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

      describe("Should create a credential request from a valid didcomm CredentialOffer Message", () => {
        /*
        // TODO 
        it(`CredentialType [${CredentialType.AnonCreds}]`, async () => {
          const linkSecret = Fixtures.Credentials.Anoncreds.linkSecret;

          sandbox
            .stub(pluto, "getLinkSecret")
            .resolves(linkSecret);

          sandbox
            .stub(api, "fetchCredentialDefinition")
            .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

          const offer = Fixtures.Credentials.Anoncreds.credentialOfferMessage;

          const requestCredential =
            await agent.prepareRequestCredentialWithIssuer(offer);

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
        //*/
        it(`CredentialType [${CredentialType.JWT}]`, async () => {

          // const offer = createOffer(CredentialType.JWT);
          const offer = Fixtures.Credentials.JWT.credentialOfferMessage;

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
          expect(foundAttachment?.format).to.equal(CredentialType.JWT);
        });

        it(`CredentialType [${CredentialType.SDJWT}]`, async () => {
          const offer = Fixtures.Credentials.SDJWT.credentialOfferMessage;

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
          expect(foundAttachment?.format).to.equal(CredentialType.SDJWT);
        });
      });
      //*/
      for (let credType of [CredentialType.W3C, CredentialType.Unknown]) {
        it(`CredentialType [${credType}] - not implemented - should throw`, async () => {
          const offer = createOffer(credType);

          expect(agent.prepareRequestCredentialWithIssuer(offer)).to.eventually.be
            .rejected;
        });
      }
    });

    describe("processIssuedCredentialMessage", () => {
      it("no attachment - throws", () => {
        const issueCredential = new IssueCredential(
          { formats: [] },
          [],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to")
        );

        const result = agent.processIssuedCredentialMessage(issueCredential);

        expect(result).to.eventually.be.rejected;
      });

      describe("JWTCredential", () => {
        const base64Data = base64url.baseEncode(Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded));

        it("Should be able to parse a credential and convert it into a storable object from a valid didcomm CredentialIssue Message", async () => {
          vi.spyOn(pluto, "storeCredential").mockResolvedValue();

          const jwtAttachment = AttachmentDescriptor.build(
            Fixtures.Credentials.JWT.credentialPayloadEncoded,
            "attach_1",
            undefined,
            undefined,
            CredentialType.JWT
          );
          const issueCredential = new IssueCredential(
            { formats: [{ attach_id: "attach_1", format: CredentialType.JWT }] },
            [jwtAttachment],
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to"),
            "test-revocation-thid"
          );

          const result = await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.be.an.instanceOf(Credential);
          expect(result.isStorable()).to.be.true;

          const storable = (result as any as StorableCredential).toStorable();
          expect(storable).not.to.be.undefined;
        });

        it("Should revoke a JWT Credential", async () => {
          const revocationIssueMessage = new IssueCredential(
            { formats: [{ attach_id: "attach_1", format: CredentialType.JWT }] },
            [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, CredentialType.JWT)],
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to"),
            "12345"
          );
          const thid = revocationIssueMessage.thid!;

          const revocationMessage = new RevocationNotification(
            {
              issueCredentialProtocolThreadId: thid
            },
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to")
          );

          await agent.pluto.storeMessage(revocationIssueMessage.makeMessage());

          await agent.connectionManager.processMessages([{
            attachmentId: "123",
            message: revocationMessage.makeMessage()
          }]);

          const [revokedCredential] = await agent.pluto.getAllCredentials();

          expect(revokedCredential).to.not.equal(undefined);
          expect(revokedCredential!.isRevoked()).to.equal(true);
        });
      });

      describe("SD+JWTCredential", () => {
        it("Should be able to parse a credential and convert it into a storable object from a valid didcomm CredentialIssue Message", async () => {
          vi.spyOn(pluto, "storeCredential").mockResolvedValue();

          const attachment = AttachmentDescriptor.build(
            Fixtures.Credentials.SDJWT.credentialPayloadEncoded,
            "attach_1",
            undefined,
            undefined,
            CredentialType.SDJWT
          );
          const issueCredential = new IssueCredential(
            { formats: [{ attach_id: "attach_1", format: CredentialType.SDJWT }] },
            [attachment],
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to"),
            "test-revocation-thid"
          );

          const result = await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.be.an.instanceOf(Credential);
          expect(result.isStorable()).to.be.true;

          const storable = (result as any as StorableCredential).toStorable();
          expect(storable).not.to.be.undefined;
        });
      });

      describe("AnonCreds", () => {
        it("module not registered by default - throws", async () => {
          vi.spyOn(pluto, "storeCredential").mockResolvedValue();
          vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(Fixtures.Credentials.Anoncreds.linkSecret);
          vi.spyOn(api, "request").mockResolvedValue(new ApiResponse(Fixtures.Credentials.Anoncreds.credentialDefinition, 200));
          vi.spyOn(pluto, "getCredentialMetadata").mockResolvedValue(
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

          const sut = agent.processIssuedCredentialMessage(issueCredential);
          expect(sut).to.eventually.be.rejected;
        });
      });
    });


    describe("createPresentationForRequestProof", () => {
      const didFrom = DID.from("did:peer:2.Ez6LSfhufN8b8EufbxPNRh88YYvjpf7uuVfa3tMG4nKeFK2wX.Vz6Mkf2USnehnAgu263PfyTDsB7KhjuR64wMa3Y4XLHi3KuQS.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovLzE5Mi4xNjguMS4xNjU6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ");
      const didTo = DID.from("did:peer:2.Ez6LSjNzhLeoBEL67PHWSq6X7A7YFuQpcqs13g3cYJTRFyhpu.Vz6MkemtLC5RN1bwBopgZVgXpRRXoigbZjKQt8NHEiJR1eAQ1.SeyJyIjpbXSwicyI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5emFYUXRjSEpwYzIwdGJXVmthV0YwYjNJdVlYUmhiR0Z3Y21semJTNXBieUlzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJhIjpbXSwidCI6ImRtIn0");


      describe("Anoncreds", () => {
        test("module not registered by default - throws", async () => {
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

          const sut = agent.createPresentationForRequestProof(request, credential);
          expect(sut).to.eventually.be.rejected;
        });
      });

      describe("JWT", () => {
        let stubGetDIDPrivateKeysByDID;

        beforeEach(() => {
          stubGetDIDPrivateKeysByDID = sandbox
            .stub(pluto, "getDIDPrivateKeysByDID")
            .resolves([Fixtures.Keys.secp256K1.privateKey as any]);
        });

        test("JWTCredential + JWTPresentationRequest - returns Presentation", async () => {
          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          const attach = AttachmentDescriptor.build(Fixtures.PresentationRequests.JWTAttachment.data, undefined, undefined, undefined, CredentialType.JWT);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [attach],
            didFrom,
            didTo
          );

          const result = await agent.createPresentationForRequestProof(request, credential);

          expect(result).to.be.instanceOf(Presentation);
          expect(result).to.have.property("attachments")
            .to.be.an("array")
            .to.have.length(1);
          const attached = result.attachments[0];
          // expect(attached).to.have.property("mediaType", CredentialType.JWT);
          expect(attached).to.have.property("data");
          expect(attached.data).to.have.property("base64").to.be.a("string");

          expect(result).to.have.property("body");
          expect(result.body).to.have.property("comment", request.body.comment);
          expect(result.body).to.have.property("goalCode", request.body.goalCode);

          expect(result).to.have.property("from", request.to);
          expect(result).to.have.property("to", request.from);
          expect(result).to.have.property("thid", request.thid || request.id);
        });

        test("Attachment format - not JWT - throws", async () => {
          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [{ ...Fixtures.PresentationRequests.JWTAttachment, format: "wrong" }],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).to.eventually.be.rejected;
        });

        test("Credential.subjectDID - invalid - throws", async () => {
          const credential = new JWTCredential({
            iss: "did:test:123",
            sub: undefined,
            nbf: 23456754321,
            exp: 2134564321,
            vc: {}
          } as any);

          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const sut = agent.createPresentationForRequestProof(request, credential);

          expect(sut).to.eventually.be.rejected;
        });

        test("Credential.subjectDID - doesn't match PrivateKey - throws", async () => {
          stubGetDIDPrivateKeysByDID.resolves([]);

          const credential = new JWTCredential({
            iss: "did:test:123",
            sub: undefined,
            nbf: 23456754321,
            exp: 2134564321,
            vc: {}
          } as any);

          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const sut = agent.createPresentationForRequestProof(request, credential);

          expect(sut).to.eventually.be.rejected;
        });
      });

      describe("Fail cases", () => {
        test("RequestPresentation.attachments - empty - throws", async () => {
          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).to.eventually.be.rejected;
        });

        test("Credential - not matched - throws", async () => {
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          const result = agent.createPresentationForRequestProof(request, credential);
          expect(result).to.eventually.be.rejected;
        });
      });
    });

    describe("initiatePresentationRequest", () => {
      const expectedBody = {
        presentation_definition: {
          id: expect.stringMatching(""),
          input_descriptors: [
            {
              id: expect.stringMatching(""),
              name: "Presentation",
              purpose: "Verifying Credentials",
              constraints: {
                fields: [],
                limit_disclosure: "required",
              },
              format: {
                jwt: {
                  alg: ["ES256K"],
                },
                sdjwt: {
                  alg: ["ES256K"],
                },
              },
            },
          ],
          format: {
            jwt: {
              alg: ["ES256K"],
            },
            sdjwt: {
              alg: ["ES256K"],
            },
          },
        },
        options: {
          challenge: expect.stringContaining("Sign this text"),
          domain: "N/A",
        },
      };

      test("JWT", async () => {
        const result = await agent.initiatePresentationRequest(CredentialType.JWT, Fixtures.DIDs.peerDID1, { claims: {} });

        expect(result).toBeInstanceOf(RequestPresentation);
        expect(result.attachments).toHaveLength(1);
        const attached = result.attachments[0];
        expect(attached.id).to.be.a("string");
        expect(attached.format).toBe(DIF.PRESENTATION_REQUEST);
        expect(attached.mediaType).toBe("application/json");

        // TODO fix types
        expect((attached.data as any).json).toEqual(expectedBody);
        expect(attached.payload).toEqual(expectedBody);
      });

      test("SDJWT", async () => {
        const result = await agent.initiatePresentationRequest(CredentialType.SDJWT, Fixtures.DIDs.peerDID1, { claims: {} });

        expect(result).toBeInstanceOf(RequestPresentation);
        expect(result.attachments).toHaveLength(1);
        const attached = result.attachments[0];
        expect(attached.id).to.be.a("string");
        expect(attached.format).toBe(DIF.PRESENTATION_REQUEST);
        expect(attached.mediaType).toBe("application/json");

        // TODO fix types
        expect((attached.data as any).json).toEqual(expectedBody);
        expect(attached.payload).toEqual(expectedBody);
      });
    });

    describe("handlePresentation", () => {
      beforeEach(() => {
        sandbox.stub(pluto, "getDIDPrivateKeysByDID")
          .resolves([Fixtures.Keys.secp256K1.privateKey]);
      });

      test("JWT", async () => {
        const presentationReq = await agent.initiatePresentationRequest(CredentialType.JWT, Fixtures.DIDs.peerDID1, {
          claims: {
            test: {
              type: "string",
              pattern: "did:prism"
            }
          }
        });

        const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialData.jws);
        const presentation = await agent.createPresentationForRequestProof(presentationReq, credential);
        const result = await agent.handlePresentation(presentation);

        expect(result).toBe(true);
      });

      test("SDJWT", async () => {
        const presentationReq = await agent.initiatePresentationRequest(CredentialType.SDJWT, Fixtures.DIDs.peerDID1, {
          claims: {
            test: {
              type: "string",
              pattern: "did:prism"
            }
          }
        });

        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialData.jws);
        const presentation = await agent.createPresentationForRequestProof(presentationReq, credential);
        const result = await agent.handlePresentation(presentation);

        expect(result).toBe(true);
      });

      // test("Anoncreds", async () => {
      //   sandbox.stub(pluto, "getLinkSecret").resolves(Fixtures.Credentials.Anoncreds.linkSecret);

      //   sandbox.stub(pollux as any, "fetchSchema")
      //     .resolves(Fixtures.Credentials.Anoncreds.schema);

      //   sandbox.stub(pollux as any, "fetchCredentialDefinition")
      //     .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

      //   const presentationReq = await agent.initiatePresentationRequest(CredentialType.AnonCreds, Fixtures.DIDs.peerDID1, {
      //     attributes: {
      //       attr1_referent: {
      //         name: "name",
      //         restrictions: {
      //           cred_def_id: "did:web:xyz/resource/definition",
      //         },
      //       },
      //     }
      //   });

      //   const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
      //   const presentation = await agent.createPresentationForRequestProof(presentationReq, credential);
      //   const result = await agent.handlePresentation(presentation);

      //   expect(result).toBe(true);
      // });
    });
  });
});
