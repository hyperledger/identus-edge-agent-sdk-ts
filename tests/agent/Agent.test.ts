import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import Agent from "../../src/prism-agent/Agent";
import Pluto from "../../src/pluto/Pluto";
import Mercury from "../../src/mercury/Mercury";
import * as UUIDLib from "@stablelib/uuid";
import Apollo from "../../src/apollo/Apollo";
import { CastorMock } from "./mocks/CastorMock";
import { ConnectionsManagerMock } from "./mocks/ConnectionManagerMock";
import * as Fixtures from "../pollux/fixtures";

import {
  Api,
  CredentialType,
  DID,
  HttpResponse,
  Message,
  Service,
  ServiceEndpoint,
} from "../../src/domain/models";
import { DIDCommProtocol } from "../../src/mercury/DIDCommProtocol";
import { Castor } from "../../src/domain/buildingBlocks/Castor";
import { AgentError } from "../../src/domain/models/Errors";
import { HandshakeRequest } from "../../src/prism-agent/protocols/connection/HandshakeRequest";
import { OfferCredential } from "../../src/prism-agent/protocols/issueCredential/OfferCredential";
import { ProtocolType } from "../../src/prism-agent/protocols/ProtocolTypes";
import { CredentialPreview } from "../../src/prism-agent/protocols/issueCredential/CredentialPreview";
import { RequestCredential } from "../../src/prism-agent/protocols/issueCredential/RequestCredential";
chai.use(SinonChai);
chai.use(chaiAsPromised);
const expect = chai.expect;

let agent: Agent;
let pluto: Pluto;
let castor: Castor;
let sandbox: sinon.SinonSandbox;

pluto = new Pluto({
  type: "sqlite",
  dropSchema: true,
  database: "pluto.db",
  logger: "debug",
  synchronize: true,
});

describe("Agent Tests", () => {
  afterEach(async () => {
    jest.useRealTimers();

    await agent.stop();
    await pluto.dataSource.destroy();
    sandbox.restore();
  });

  beforeEach(async () => {
    jest.useFakeTimers();

    sandbox = sinon.createSandbox();
    const apollo: Apollo = new Apollo();
    castor = CastorMock;
    const httpManager: Api = {
      request: async () => new HttpResponse<any>(new Uint8Array(), 200),
    };
    const didProtocol: DIDCommProtocol = {
      packEncrypted: async () => "",
      unpack: async () => new Message("{}", undefined, "TypeofMessage"),
    };

    const mercury = new Mercury(castor, didProtocol, httpManager);
    const connectionsManager = new ConnectionsManagerMock();
    agent = Agent.instanceFromConnectionManager(
      apollo,
      castor,
      pluto,
      mercury,
      connectionsManager
    );
  });

  describe("Integration Tests", () => {
    beforeEach(async () => {
      await agent.start();
    });

    it("As a developer when a peerDID is created and we have specified to updateKeyList the services are correctly added and updateKeyList is called correctly.", async () => {
      const didHigherFunctions = (agent as any).agentDIDHigherFunctions;
      const storePeerDID = sandbox.stub(pluto, "storePeerDID").resolves();
      const updateKeyList = sandbox.stub(
        didHigherFunctions.mediationHandler,
        "updateKeyListWithDIDs"
      );
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
      const agentInvitations = (agent as any).agentInvitations;
      const agentInvitationsConnection = agentInvitations.connection;
      const didHigherFunctions = (agent as any).agentDIDHigherFunctions;

      const did = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      );
      const validOOB =
        "https://my.domain.com/path?_oob=eyJpZCI6Ijg5NWYzMWZhLTIyNWUtNDRlNi1hNzkyLWFhN2E0OGY1MjgzYiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNlenlrY0JqTUtnR1BFRGg0NHBDOFFmdTdjQ3pKb3NWdVY0anA2eDVZNUJITC5WejZNa3dSSnQxU21acDNhRERoTFVuNGZLMzNtOExMWlhXOTJYVDh2clVIdTR1cEE2LlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5ck9ITXRaR1YyTG1GMFlXeGhjSEpwYzIwdWFXOHZjSEpwYzIwdFlXZGxiblF2Wkdsa1kyOXRiU0lzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6ImlvLmF0YWxhcHJpc20uY29ubmVjdCIsImdvYWwiOiJFc3RhYmxpc2ggYSB0cnVzdCBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHBlZXJzIHVzaW5nIHRoZSBwcm90b2NvbCAnaHR0cHM6Ly9hdGFsYXByaXNtLmlvL21lcmN1cnkvY29ubmVjdGlvbnMvMS4wL3JlcXVlc3QnIiwiYWNjZXB0IjpbXX19";

      const createPeerDID = sandbox.stub(
        didHigherFunctions,
        "createNewPeerDID"
      );
      const sendMessage = sandbox.stub(
        agentInvitationsConnection,
        "sendMessage"
      );
      const addConnection = sandbox.stub(
        agentInvitationsConnection,
        "addConnection"
      );

      sandbox.stub(UUIDLib, "uuid").returns("123456-123456-12356-123456");

      createPeerDID.resolves(did);
      sendMessage.resolves();
      addConnection.resolves();

      const oobInvitation = await agent.parseOOBInvitation(new URL(validOOB));

      const validHanshakeMessage = HandshakeRequest.fromOutOfBand(
        oobInvitation,
        did
      ).makeMessage();

      await agent.acceptDIDCommInvitation(oobInvitation);

      expect(createPeerDID.callCount).to.be.equal(1);
      expect(sendMessage.callCount).to.be.equal(1);
      expect(addConnection.callCount).to.be.equal(1);

      expect(sendMessage).calledWith(validHanshakeMessage);
    });
  });

  describe("LinkSecret generation", () => {
    it("getLinkSecret returns null - storeLinkSecret is called", async () => {
      const stubGetLinkSecret = sandbox
        .stub(pluto, "getLinkSecret")
        .returns(Promise.resolve(null));
      const spyStoreLinkSecret = sandbox.spy(pluto, "storeLinkSecret");

      await agent.start();

      expect(stubGetLinkSecret).to.have.been.calledOnce;
      expect(spyStoreLinkSecret).to.have.been.calledOnce;
    });

    it("getLinkSecret returns null - storeLinkSecret not called", async () => {
      const stubGetLinkSecret = sandbox
        .stub(pluto, "getLinkSecret")
        .returns(Promise.resolve({} as any));
      const spyStoreLinkSecret = sandbox.spy(pluto, "storeLinkSecret");

      await agent.start();

      expect(stubGetLinkSecret).to.have.been.calledOnce;
      expect(spyStoreLinkSecret).not.to.have.been.called;
    });
  });

  describe("AnonCreds", () => {
    beforeEach(async () => {
      await agent.start();
    });
    it.only("Should create a credential request from a valid didcomm CredentialOffer Message", async () => {
      const offerBody = Fixtures.credOffer;

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
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      );
      const validPeerDID = DID.fromString(
        `did:peer:2.Ez6LSoHkfN1Y4nK9RCjx7vopWsLrMGNFNgTNZgoCNQrTzmb1n.Vz6MknRZmapV7uYZQuZez9n9N3tQotjRN18UGS68Vcfo6gR4h.SeyJyIjpbImRpZDpleGFtcGxlOnNvbWVtZWRpYXRvciNzb21la2V5Il0sInMiOiJodHRwczovL2V4YW1wbGUuY29tL2VuZHBvaW50IiwiYSI6W10sInQiOiJkbSJ9`
      );

      const credentialMap = new Map();

      credentialMap.set(CredentialType.AnonCreds, offerBody);

      const offer = OfferCredential.build(
        credentialPreview,
        mypeerDID,
        validPeerDID,
        "threadID123456",
        credentialMap
      );

      const requestCredential = await agent.prepareRequestCredentialWithIssuer(
        offer
      );

      expect(requestCredential instanceof RequestCredential).to.equal(true);
      expect(requestCredential.to?.toString()).to.equal(offer.from?.toString());
      expect(requestCredential.from.toString()).to.equal(offer.to?.toString());

      expect(Array.isArray(requestCredential.body.formats)).to.equal(true);
      expect(requestCredential.body.formats.length === 1).to.equal(true);
      expect(
        requestCredential.body.formats[0].format === CredentialType.AnonCreds
      ).to.equal(true);

      const foundAttachment = requestCredential.attachments.find(
        ({ id }) => id === requestCredential.body.formats[0].attach_id
      );

      expect(foundAttachment).to.not.be.undefined;
      expect(foundAttachment?.format).to.equal(CredentialType.AnonCreds);
    });

    it("Should be able to parse a credential and convert it into a storable object from a valid didcomm CredentialIssue Message", async () => {});
  });
});
