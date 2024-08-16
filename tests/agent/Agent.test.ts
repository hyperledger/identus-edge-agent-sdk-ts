/**
 * @jest-environment node
 */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import Agent from "../../src/edge-agent/Agent";
import Mercury from "../../src/mercury/Mercury";
import * as UUIDLib from "@stablelib/uuid";
import Apollo from "../../src/apollo/Apollo";
import { CastorMock } from "./mocks/CastorMock";
import { ConnectionsManagerMock } from "./mocks/ConnectionManagerMock";
import * as Fixtures from "../fixtures";
import {
  Api,
  AttachmentDescriptor,
  Credential,
  CredentialMetadata,
  CredentialType,
  DID,
  JWTCredentialPayload,
  LinkSecret,
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
import { base64, base64url } from "multiformats/bases/base64";
import Pollux from "../../src/pollux/Pollux";
import { AnoncredsLoader } from "../../src/pollux/AnoncredsLoader";
import { RequestPresentation } from "../../src/edge-agent/protocols/proofPresentation/RequestPresentation";
import { Presentation } from "../../src/edge-agent/protocols/proofPresentation/Presentation";
import { JWTCredential } from "../../src/pollux/models/JWTVerifiableCredential";
import { AnonCredsCredential } from "../../src/pollux/models/AnonCredsVerifiableCredential";
import InMemoryStore from "../fixtures/inmemory";
import { ApiResponse, Pluto as IPluto } from "../../src/domain";
import { Pluto } from "../../src/pluto/Pluto";
import { RevocationNotification } from "../../src/edge-agent/protocols/revocation/RevocationNotfiication";
import { AgentCredentials } from "../../src/edge-agent/Agent.Credentials";
import { BasicMediatorHandler, Castor, Store } from "../../src";
import { randomUUID } from "crypto";
import { AgentDIDHigherFunctions } from "../../src/edge-agent/Agent.DIDHigherFunctions";
import { JWT } from "../../src/pollux/utils/JWT";


chai.use(SinonChai);
chai.use(chaiAsPromised);
const expect = chai.expect;

let agent: Agent;
let pluto: IPluto;
let pollux: Pollux;
let castor: CastorType;
let sandbox: sinon.SinonSandbox;
let store: Pluto.Store;


describe("Agent Tests", () => {
  afterEach(async () => {
    jest.useRealTimers();

    await agent.stop();
    sandbox.restore();
  });

  beforeEach(async () => {
    jest.useFakeTimers();
    jest.mock('isows', () => ({
      WebSocket: jest.fn(() => ({
        addEventListener: jest.fn(),
        send: jest.fn(),
        close: jest.fn(),
      })),
    }));
    sandbox = sinon.createSandbox();
    const apollo: Apollo = new Apollo();
    castor = CastorMock;
    const httpManager: Api = {
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
    const mercury = new Mercury(castor, didProtocol, httpManager);

    const polluxInstance = new Pollux(apollo, castor);
    const handler = new BasicMediatorHandler(DID.fromString("did:peer:123456"), mercury, pluto);
    const seed: Seed = {
      value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
    };

    const didHigherFunctions = new AgentDIDHigherFunctions(
      apollo,
      castor,
      pluto,
      handler,
      seed
    );

    const agentCredentials = new AgentCredentials(
      apollo,
      castor,
      pluto,
      polluxInstance,
      seed,
      mercury,
      didHigherFunctions
    );

    const connectionsManager = ConnectionsManagerMock.buildMock({
      castor,
      mercury,
      pluto,
      agentCredentials,
      options: {
        experiments: {
          liveMode: false
        }
      }
    });

    agent = Agent.instanceFromConnectionManager(
      apollo,
      castor,
      pluto,
      mercury,
      connectionsManager,
      seed,
      undefined,
      {
        experiments: {
          liveMode: false
        }
      }
    );

    await polluxInstance.start();

    pollux = (agent as any).pollux as Pollux;

  });

  describe("Integration Tests", () => {
    beforeEach(async () => {
      await agent.start();
    });


    it("As a developer when a peerDID is created and we have specified to updateKeyList the services are correctly added and updateKeyList is called correctly.", async () => {
      const didHigherFunctions = (agent as any).agentDIDHigherFunctions;
      const storePeerDID = sandbox.stub(pluto, "storeDID").resolves();
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
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
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

  // Requires Agent not to be started in before hook
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

    it("getLinkSecret returns value - storeLinkSecret not called", async () => {
      const stubGetLinkSecret = sandbox
        .stub(pluto, "getLinkSecret")
        .returns(Promise.resolve({} as any));
      const spyStoreLinkSecret = sandbox.spy(pluto, "storeLinkSecret");

      await agent.start();

      expect(stubGetLinkSecret).to.have.been.calledOnce;
      expect(spyStoreLinkSecret).not.to.have.been.called;
    });
  });

  describe("functions", () => {
    beforeEach(async () => {
      await agent.start();
    });

    describe("Backup/Restore", () => {
      test("backup", async () => {
        sandbox.stub(pluto, "backup").resolves(Fixtures.Backup.backupJson);

        const jwe = await agent.backup.createJWE();

        expect(jwe).to.be.a("string");
        expect(jwe.split(".")).to.have.length(5);
      });

      test("restore", async () => {
        const stubRestore = sandbox.stub(pluto, "restore");
        const backupJWE = "eyJ0eXAiOiJhcHBsaWNhdGlvbi9kaWRjb21tLWVuY3J5cHRlZCtqc29uIiwiYWxnIjoiRUNESC1FUytBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiYXB2IjoiVk5BTmhuZFl6dmdXdkVhRjlZNHllNVNYRXJCLXZSZkRTRjhfX0o2ZlVUTSIsImVwayI6eyJjcnYiOiJYMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiRXJ4dDRKYkJqa1FzSklEZGxUSzFNZEczUC1JYXJ0aGRuM01YWmxLWGkwbyJ9fQ.J4khuugTiYpjjwrGwHYc3JFxr9J33OwLwdCOotf6hGg5uBmhSRzpYqIHgt_hbZa9ot49RD6klDlmMcWf0M9K5xV5T41UIAkG.UVppJucK7jm2p2FNuGjw_g.S7I6FiS2Fo6SbYN0txF0iaFApKrY899fvUYe40Ymu_S-xq4-_LDM_FWoSPyc1KHL1bzYhPLAMeuKlr1FGecq6YGPkWu0hsz32j5gAsgVGSVoljwg8fCdmVO4D0ijjTmBHVvbOBBHeQsjAWe9udbLD6uOcbksizkPHEePZqZhBX5jOCfX-l6K3g0jP2FKRStpR4_zXyomThlp64WFWK023XXlwqR3rL4rY1ru8Ago-ux7Vo-SS14x9k82e5Ca2M8AwV1NSU2nIRQcruDz-YyInc4yWVcOSI3UnGZD6nvKHsV8_K4IEYviR6w1uTXN_PohfounUJFyUyaYXD4PmsgXggHb5wC3fKuG3NRcjZm6LraWt4__5cxY21P_mvK1VkIdkdo0rUdVHLAeqbxCxJ-8-5mmuaO5t75-NjfiT0P2eTuSYpiUxeEOPpro6_YoFtOv30CjeU-5hQSU1lQ1fA2iRaaMjOgR1PUUgRB7AcYy5wlkqsf_L0o8cl_y-BU93_9JuGHbVDShDaI2SfND19IguddhBnPHj0QL_6VCmC6313RiGXERC8NZz-f9NfGO7qHjY3CaRsU4Txw-zOPud5SFAkiHx4DzaVXB4KPcsEzQdfr5WUrYxVxP0UZP5hiyXiC1GlhwLm_Y0mBExQ9x1pnRyi8HaIl0toTlr40dcLEaT1iDe_IIVZREARy_hlCdzUXyWl7Zn0V-XykKG6_H2byNxJQ0CLhT5rx0Lh1DGAAnje2EbNS7d4DpgyRu23gpQ75od9nr0ukull49Pa6AUe-zFNoWm3TQcJZ8Xq_7K-nNCeBXxxMZOGDlwrW56ASZgzyXsWPxjaBISo-I4jgZmMIKEFFZfTmloyLYSn6mgrL7gT9vhBm8bmIO2n1mfbqUBr_SydL6IxBf2YY6NJI9yiofYrwQA5LJmfM8q9rQgE9BbNzYSRtef16HhvSwQtdLpjs0rfcJQveD7Sd5IwBZvBT_qwBqUcb4idBSTTFThnG9DlUMowwK1ceLW2o0F6UgERmwQMo4w29j0z2eqdCU0mK1rIRnL1NiFONd7StGwkzuimyqLd3kOHDIM6TuQNsDwMtjX3QKKrc3A4UD3OjwgP04VVFSUFe_XLxleW3lnjlzVE6Ljez_lsGPZQU2E_aXQ5kTKnbr6-B0oVvWw15Lw6I-opJEKFMymB4LK3yJG629CPUw6eQW7zBW3VIVBrH85QS-RABnQngNYQ1rijg5RxOqgYB_6SDzQkoNAwpSMgKfITN_vqWJwiQpYh6rziizO33-F-soxk3Jf0iyCTLq3Cnqkgic1n4weJd3gmD1QBueiT-ytZFRB_e_6Kx2iDeXxRnHMRKiAfuYKImaLV7Jf51cCUFa9cbsLaTBa4HIbKuPAKHRUCEYkoAiuNDYUBT-Vcnb7u2VzikvA1tNO9DmSLZ-0iNZOccIB12gQlla2Ljk1KtP4Quc8JW-wItfm2rgG2EdaFyM_wNQ1FBjy6k8Z_JqmOgeZrVfa-AiNasJpCA_PgMxkyiFI68p7ksk-SEB2GP-DIjG79zwzJBpjlYsSCS8qFoEMi2lV7MltOO7fJSOilNuipBrrfduJUM9HLnp54OPK9GeL_5b5pE8Ft21wRHE8mKw4x7tdYMx2_2_dKWJOVpCQM2pQ-hv3UMDdfkYva236w-AZ9nO4pNZB7gCNyejcP74zsv9w1VzIANkaQd085vLRXbh_vtpycwp_9yT3MJTVS88GJaxX_Z39j58bIj9xRIxPsvRbtSVTrZWaoYbpnuhq8CPhZrTKfZ6_KriUyOOzp3GhSkeXNQJ6NyUStPcyHGP42VR6x3Dl_lLMwjFnyPMBUx0oOq0puqlD-QJZssxkPDf7-6VXJNXjmnt2H5p2GeCZaX_4LwvXeJXJRlYIMyRLUErtSoCmFlpiowzYjmWn8JPCCIrDzwIUJQCRJ8deJSm-_pZwYhs6x91QziiViiNK9KBsDmsOaBBHPfmqQgi1KHUvExK0-DMVrX4lykJCyQ69vU2RR__zPuTMSdurtEFmiXuDpJHg9BY3OwW6p09Ac4bj1IY7UU_cfENDxMFWCgkA9dCsnonjFxYsbhemuNakJ7MsnJcLf3Sh8D3TenpZyoS5oXK76cEg6wHUwT0WPJsTD3EpsQRAWAp-MLE2f2YKWWP3-swb3tDGoCPHW5fZkzxYQxXwbBV13c7iyWz1jkpAO5rsnU0a7J9JUY8WmBkHZwMgbHRoBTO_25ZigXgL41V_44oJELDDOx6qvYk62NbuQ25jAK0zJh5W54bmrxPuAZzHJySs2PorvvkL4SUiUbkQ0EJEzSUaEZsyM_QwolyMA-Yh21ieI94li0t8BGxcNepyq-DIA98a8-u_3SPSYW073RlJiVpBCHBTOj8yITGRfICtkjk3UKINjduVPV9GDArUuBJsVxB5grMyusUJPixyaC5zv2v8n6RGBOmGowYglehrfIOOuSDAFIRyZS21C02ovsaKcqJ1WqzDo8mrcYSWDfgT6pGgwVyNt1syeT27RcB5JtNLcxrV4qmZR8MXSIEpBwCF_21RUL3iVHxykcCWbJSpe7kQNt1hcxGs6q2Af6ttyd7IKjAnylukRguV0RwZBffGiJXWbiR-aCFg0BUbQQeO-AM8C3TWWnK6LKl4umVl3bq8bxZq-hh8cQgIPw-6FHD6K66uyOtG8l0_AhwzGsEx_VrA07LrjjQKSB0d5zmJkmesRkx-YoSiDW9R3zd_TdqYd4NMATHPd-_NBJwDXCUNadrLLlbM20kiLgqKEOZA4QCVhezgyrGDp1m8upbbQo_YVdc3HOmrcGRiigZZQSoz0Bzz4O-7p-ZqEn_Tlzd85K73jBc7T6PTn6ZTakb519Ok_Ef4olyZuAA_HJfiVO7FCmPfB5xbjceZD-Hz1V5euA5LbYz5t0HRJyyMQwHp1k508KW3Gn4emyOPIO889HVv_6ZRMNr8q5CcSvRuDVPRYjOSQBdRnFCH_tsrpUSHp8piWukbIeew86RCJ6G_E9ggycLawO5STrkG9OI-VOZUy0Ize9oHJa4kXzPiwDbzgIIo3DKCtOOP4_F1YDv7ulb74yyL1zpVN24w-TT-7YPiVOQlr09aYoEnuF4rpBoOTeyxYqyMLjNS8O3K2xPTjYpTlYD1UhAUJwad4N__2jHVtoGlK8UHkhJDPVKWLZjg8mt6PYfa6mxZF4TGAC-O-pQGJ92QX86wlcGOzKN-zFLhVg5Q_9dUlUhlXVSr_RJDx930G-7l2GdjLRkhSFKl_S4-g_aNKVdHmO6VJ-6bRfpLZCJ20AjLUeyebbtan-ZTjfmg347LH4-PLPHhOStH2pbPoLsEA8l4VeBXm5XSUDucJPAtzfnQVrTpGUg0EPikvFlbsv2gf-J36WcEEgu-UI6izeaErFh_G_tvjuFZlDXOwMTsulHxmgqTwmLaf3NBc7bzbiANMn7hJZK9suWmxDa1AOg9V9vO6x_K-01LN3n89P6jDQ8mX37sEtPdbWLpRVZP5rOio-5hWzmY-0TINq-wN_9Ii-x2A6VK1-EWsyQVz0UsX8JY-VRkFE9OgZmdVs1yDgloP_y7XIzl-CSL5Slqstuu3GRnoLswoCVlGr-3jFhvt1pt75Mvu_iZ22eV5F85af_LqM40nSDf_KFj3F0UM-SP7OiR8QpSszDRDIcD5qx3a7scVf6P_raWoARgr7zsXkuw3Ne31uxefX2fau03Da4cbSQxj57kni0juAWkX50QLDIkl3V-F499nHHZmA3OPWyoyuivepSfaT0QJYFAzJZSccdTATu8-tEj9N-eenxFe08nZtD86l9HSy8W0yAN0lpndy5ZGLBC4Xf7hfoKksEzO4GiClq8bXQrUDCWbaDqdCpQ9W6BVqB_EF-iATsPWwmA8NqWs8HElcsXTHV9Tb2C1POsqynsjkpi3ZFhp2QnXVg7u1qxspmtZMDD-eC2wQ8P9SRNxO_PS_A65Ci-BVwotGDo2S3PcZiX28wGskZcICU7b3SF7VhFP8XrBaCZE1MlfUKwonGzxCraTMWfxar3h0BTOdJYvAK3bpnG07rtsnIq3jhIw5gavjMbTENagw_Dhl4ndsJUjyzkOiSLQjbqToVD-4mysiuxq4N-rGL1frcGThH7wnJjyNXFNYXgM9Tya7IQ8Zqg5iY5tO3knGDY-wBw0Q2xtokUApP8tO-j0iIgkSGeHrQeNZ9LpQUMMEfKrzYgymwDsFxa3gMxtmrtyGy1SLXXuBj3790iSbsV2ACBClVBAfzu4maxBrU8AghpNfdpNWZcPqtnj0E-mpW-U7NAIv5bgWxsqn6D8Z6IXaKuXlidYYYzLyzbaq5XgEzUg73T8o8-cVl0u-XrdTcReLX2Iv981bmo0q6wCacFkdDsKoZFKG4SHEh6IcjE6LAti6B5oe5Huuu0hEjG4b0sfdqwBu8OnRt18tOKh0Dudv9EEc0TYbdcUf6y3sYd6TwXFsMva-th5uva0gwzyF3MlUHHa3GQ6z-fJVRLu4PuLXBAzzkcVa7AhErd4LLYl1uqOk8RMqEqRPMgBkEA1EFqz3ZBJzG9wMZybtNoRDbT3nb1fAsUzGSNItxG0JuHSj_H7cRdEHLE0bDIw_Zh4vNEQdD-jCTq6fiYJKbIzEQ4DhngOQF16ngTI53TLp1zudtwrlnfqGxiTJHDcdeVy1YnblY8id4y2dHi-RXhwRndOE9CJXBrxYawYuBPSpLsIGXjPnUJ3uIgJZGXa1hyxIeiJuS1Zom6DMG5i5K_VFtGf0jshz07b7fQriwbIewbIGMDD0rWfsczCArhF6K8Cqc-qOcT4if34XruFzdtHtR0RYxLCeMr0PRVSn3TVI3oBqpN-MCRZAxb7DjEA8K4zVgYhmS7sPwcchaWtL56vP9aSfWPIx-44PHS7DQir7MuOJgGYW0ISJZUmBsx0uoZJ9Li4wPl-B4wzDJwde6klcfRO7AVMK8HKmWDUguo0bBDGYJG3Rj5p4sYWZcxcHvFOaWc0t483YeWwOOehGwLdWAjwXzDS4-zeKJXXTMaw5OlErjPg5gezhmZaBNambASbjtYVsb6h1ro38AB6MJEhhkd4vGIrdiTw2_VT0XK3lCDd5grfPAbRUkrWghNTRXitWiS8eW5F-QsDleVxX6R5NWU7Xa9irNcl7-HYdSiwoXWVB7zzC1n33aQeqM3qdmsgun1RteCGeu2RAiWFVHU0p3_Tt0xNnZLXspHB7_3g9ptsrQ5CRPRN_XzSpMXHiUtuObR_uk41obxi0ExOAfhrWqvw4GQ2v_WXv5xu7IGS5y8aX9JT7XRuou5od9PE2c_CLLjiBGGLbd46oycIWVi_zwdFwG0PfIiuc3hlMjfAGBMf_hqCjk--PWHVep2uKOvxlhCJVih-4b0fR4GVqF-y4AN1QWSz_-hkUc8NSJhkf2NVKWAtm7VpiTpIZL8wcOULrGRe5AR0H7fUrc9HyCLMzYOLFVkcPx3H4OqjRVJXBryArIfl-W-_7Oagxgd-DofiMsqYyatf0Pb7k5Co4h-yA9IJDHqaZQi47VN-nYhIcVreH_-Z0zU4bcEfcHRVAU8hp96BtVtbIIzAw5FOxf-R-UBsHFSTCs7a-n_EWJBDlrO-anUGidlDyE4OL1SICIonFXJHhI8J8iMp5_jDUdLfSandOqhY1tm9MDdidLcidWremss44TywwZ8b4_x6KUKClxDre5RK7G2CYPNlyEikA4GoKcysCxb4U8OXs8pM4WmJEYDkvQXSf0vsGhhDcFPsWzCkP0LgA0TAZngJvXe9ix8vujWRLdOrRC-P14d9YJmJU1nZZnJifffR9tm0K1KBOJP9r-pHF83vkigHsbTAk74jdWFEPzPHjwxvgq9Zo7s-RJJk1eo2lMOvjHnVQptSczuNOMF2KclMEQ5O00oMY91Cm0uE6ylmtIzcKmJPyIieojLhJhnKI4Y1YUeZnn8S4qpe-VU7Irh9m1vZDhSfUBblnLpnsRH-TV9_-eS89Fl-MZtfMze-WO9mNaPaRTRZTvSEA059twGB7wDDNiIRBOeMKRJfN9W6gBzmaUGcCIaZw1lxsl2YOU7hHFKe-1eFPDlXrVi0P6Q4ZnBQojvKpekuZ70nuY3pviytJSO1S1QKbNtpEG9u5BrzYkdxNwtOF5pQpQREyTRj-RO9rpsoTUQoc85Uo_9tX2Jc-oEnNjhpXj_e0OG58tTI9hXua4Ub7Yj_VzM76hQPrAI_2iq0DRVwg6KbcTqpjPqWObqVtvp4HXLYh0ZYDJrqqxtatCAGGPwgDCPnhD-XFSSuIHCV5Cff484cQ1YQ0L7xo0g-lC2GZwzQVVFpPLqfXi6Ht_ZYCmMAxKQbNEmZKkV-5R8PI1Idtmt9_p2qYlBmU1pWKDKLqj5yOUOOvCpXv7L4dICvVTrzCoOdqMotO4PAytIPI5rVKYL0_WNjpY7HalvEg4uzgRjZ_z82VehU82n13Xh6Q460XEWkZjYDMB39imocrtz_Ic1otufCsP-0aY0MSZrKpqWY9HTMmsFIR2pDKaxcL2n6Vxquswnzh_nYmx9VKMh4MnbyboPw3eKCnMvXLPeH9S7RZXR6vQc_CEFwibDHmKwhrJuCxfiugqiytHyUNLRSPyTOjFtOjXGtj3xt8xEEEgkJUysuYRi_fhS3dCu0VtyvZsKciFzsROsYOaCTiycuypWY4byWUg25m1DOZQZ_pYinHi6Xjz-q1_Z4i_R0E5bLbKdIEp93_6BW-6vmXVeoKy7NBe37aI-CvTrBTJyC7CHatQrHV7SuMJ7xLZZXHhPFWUekWLEIvc9Zpf5epT3MWNy7qyq0-7jmIGwEi3ufstqj0iD9MKuoaiaslGxv3l9I3zVMJc5vjXpaglpFVl81742F7c687Hr-dQhFMxjMtmseJv9soiS0Yt6yQBXWXgSpwo1k9OxWkNio-t16PtoTMvvJaj8mxnmo6QFEp-ZjjvKdP12wtVf27UOjRrcyzkY2FFcFehUZ12YPmHphDFXKK7YrFyk4HDlg6EAh0ZpPA8ELCJXIKk_PkdHFDjvXO9fVcN1f89ebSQ9O4UvjshW4BmpNaaOi2J2rEHV2zWRd1Wit-twXAYlEomG2AxZQ9UEh5K8Lj4Xcy7n_qMku-zeDczUGDop8-pR_AqdexeYqL08Hxlf1R_pMyErXIHsWx65F1ddiJIWIgvcJQoT2L7VWrQcXQkWFbwXlt-NQteGHX6D4uFXGOarf4h-58TJ0ra6_wMkmWxbrOGVTny-UgFUtVFQSx556rzig5bW_2mZgVVVIb9LqGJxgHYrLaAHDx4qU6LlT6Q-ShhhboUJCMzT-6aVkxuvg6ZHMmCIvYRO3MLzgEtHzAJLnuhcrZN-UQVngQBo53GXHvJhP4Fy6zcTs_oJspJWk0srkg97mfaSzZuab3_-Ew3TEJWShWwh6GWFoOqiRdmab1pO8DcC_JNlKseIsXbzyeQ7Q7FRsrsSCv8IVLr6mGUSykWspg5dEUN9-00chJUzdtLUyHpxKUjA1gmXGFdkINP6ViBPDOCoaiQilICYx87sTKPPC7N7X0TvpNqG9QDTrQ6a61MpqkGKoeRqprphTkQDbr0G3VVPCFF0UYxy9oZg6iq77_3EQjEXZVIKVswKCyQshxSgqg1nR6ZuyyxWacj8Z-iDMlaiiZCy56g6FZfs9ezMvySVljGxqIFnl8mnWJ-q_8Id1xKzDF02sKEXxgeTsgLWIYcNT0SKa5t0VKnJQ3BTwRgApJJkVOcLpOz5oB6p3hba1oIuwmNO_nDMmJ_FIShiR8hwZCgo-WpU-RDxrF0xmwaZPb97NExO-l6NV7IH5ARLDrtPGGhBWz6PrTvN-UVPx_HtCznFi3tenL8CFPPzKek_USfmElOYNLUsfuaRO1-76et6nEacyMT6ENoUjHk2HKEhTTZ_dseCZfXzfh2mjRuX-oJXj842cUBWkRkQSqGmMhezk3v6cn_JCn0WjIs0npsHUkSzfvtL8t5yJB38BoWmL1uQAeOYHGrKTspF4fBUJrkDbEBihgLzYLY092ZL_P-CcBxhRaXnwKaor9fyS2i1u8sluXnH94kox_ydeHe79A1_dq4-VLUhqQCMBOeMPT1aHOc1GsG4Pg1EBaFD9tO2PXfLMi3icCIG8NrR0X9JvAIV066A7CB1Agt9tAEn3j69Pq3n7EnemfhRTcP5EeRl-jLL_Qw91nDBedPWdRaEwnprwq8IFkbIEkjPskZTpKMze4c8AbX0criX8psPRg0yU6PeEQ4liYKCDylZBI8PdapM8Flk5g_6gN2vdaBOvp97SOI_Ee-2D96ZOaZ4WMsEFND1zdayerIHsfB0NajgYoZ5pkuBy6DNW_R-Ma3SvIHE1fhw6kbKTLui-GOSZJBn3ZYxJLAJb5Vp4c-X7lWEquse5Eq9PRZY5q2fjQfrDJbrofdJloyx7oPeK-Czyxmt2K4glFlSwHqVW9erj63Q4zxXThIHlVgm0p_VH2RaldjhdvaOR_96gBkcZ9Xpgi1vYUGridpg3vaRLghoPwp36nNL-PM7RHAvpW2-sIeJYttjQ2YnmHi6cOM8xYKN6P7U_S2jIi5hiStoLxn-IR9oqdMGOpBZuhCt2GbpvriuwWPxJn2fuHCHUYH-6DWzq53ljjjhkF-OuqYfxgWPqTgSRypXxblZIW6FuuFNMRxV-Zt8scggbONj8Yq8HXk9N_nB99XST2lc1SNG4YXp90VjO_HyvkNQW_uXjXO_TrI32k90d4pKHVFuKLoaqqew88AdOwPw4VlPjK35cGQS7KJbAZCnbG88AqxOL1E_KlVAhcPD2u-ZOQ8Emyr4335PGtkcRD9yGFFe5O0SyMAMDlLFXal2Dv_c4tuUqOoidYxoQWViwD0csS-F3Acvv44XJNzW8YsJwXNtj8g9eh4Ahh72qRH0m01odtAad-z5fA4AlFnnfo712a7s2NgfjA66OdzgnS4uESpG5JxLi7UM6RRdc-A5pN6l1UjoPxPkK-ZMAxBphhEWDepoN2pkhkVmiTMbKWg82t188w8lcpjnscNuYpwHVrPaksf02_iW8LyFRzR4N_fizdikofXnSLyLL7kNuD2l-uQTkyZCurUTJOSBML9hKP58phBslHfzVLlPqUdizk4DPW2aKXc5KjQW3jhJO4_7va-FJqMjgDP6CuGBbecKIJblTVd8XyeG0AdUsSTZiM_dZ5PCxfjDa1x_9SPVpDxCScnQTTIWwj8BCvoJC9CXOt8zXB1KrffPtOUb2Eemo7lI4wSmOF7JkWYGD0nvya2bKhJf5xkPmefIFzu_iJb0XTxvKK9FtTesQHwwMc1bRuFcU40bdlnd2P9nuCsAvHyA3JO9GR_6H7vgsuWzA9sbY6ilKi7H1nhtGxvUtFI5xFE82rrJLJk3XDTl5WMbo1SsoXAmUc_nHs3h990jwNQBtDyGKVDTFuUnVsnHawcMC4gfys1mK8g9-Z8AAtK9Yg4zKIoNH8_tUUwak4EBxOHUzzjqB__HVIEOxkpo38prTFp0AMElGpLYRRAJuEQqqDtU8W1qPSrw9s2Qdcwm9e3rjlRM7jO5uU1XcFlKdHsxSJmkJHyMTGYAXroqcBfbw_NAwr_1-VI_D4D0GtuRcuspn6o2kM_jQIVBYUW4uS7tFizEr20w68xGnlB279cGUcYtntt4NpC_aiY7G6GCOsFZ98rQt5lRVOPfitCvvacEVWqfhMPXXGGFzwz-Zd-geLtEOJGA4DM8UlcH9VKX22CNWcxtWzp8QMB1F0QeXG23XDJRF9klgwkFuG7B_D-VzjEKluGxRktmWc-CNfPQiYyb1AE6hPK8I4EUvfZHmif9xOGzRvC1-zfZSaqxXti-wH0LZmkwdpuBmlQXcAe2BrNAp0YcTthxhvI6jqHagBMeshO_txFSqcRD_weGhpT_qxD__3-kOfHZTcMlnlLA437zNEIbGJNDA3mQDJeVMYjSB61SKoQsjzYW81roXYPPcKDQpJk49xA7-gj-7ICfiyWXxtIN05HXdFKOS2WuqfAIgHDXDxdRJgqpYQNI6Nh_GeCBOUZWPHeGKWvJYOKjU8Z-q5CTO8cYsuFz8c1rKknA-BTA7_P00HoOYYS7NryskkI_9rX0_Z_QxzWLb2Al0kqq3EU4P6qESDSsA1B_vOmrfmsDGCTh6uwccrobl19nIdPJuwdc16NyC90dv20RCdJNXIexUqCyHqrr0pbnLVQNvhGa9UDXpz-ysHfHN-oQmDHgR94iz-wUbwQp44vsSS5I2HD04Piiyb9T6uGBeSIPOqhhr9R2FagiDf7Y4bjvuvMSrr_O5YlcxNs3rChoOJIyAO1txIgdzNCIgEanrA6OJyxSyUBDhXyMs41uPkh8RPJAKLbglCKkDwPOjuWCvmYR-cbsk9sWOuKrEUQjmOewT9FgBV7_9eMtoLuYrlj6xC6AYfPrTbJ72UvQ940IrqsxfTcjLVjI2ge4w2wxKP2SFMOht8pT0CkO0fO_a2D0lbUpASNYhBo-gvhepRZ4PSeT90nyl8ZZIkOQQRTtaz1X0i3fif0TeSTSo_P_wWoLmEqOLiSdybg-B-wviIW9uE3yKKELxuIKqemb0fY4gMsgXAlMsjvSOsvHQkj1AzM1jONdZUrzOfKyncsgg8DakE1UR5s-CYFSYfKgUGnNS-J7jFM805zNFgiMQz4qAoaAmzsalXmeiu4R_Y1q8zaZZC0I7AufipC94zWw7F5zQ2uQJVt7R29S5nQhxVihBqUWls54stKn9PZxrGoivln9whz5r_MincCEyYAwsYonWsIA5n2Wmvvkquiy1arwRP1OUnVJM_GtrvHKv6p1dPW3hhZq_9Mu_6QAKu2JPaHnAQC6PToq7WybUbZ5WqvP6MdCAU3amw4Zf__EG5VVSdYSVTRfxvrnjYc1XwycUDSTAKLZAo59YLJpEfd3wbpElx0Lx0Pgq5jstc13bkN3_Z_yJP0uo2SUk3KyT1bv8Qw92xIjAVXNH0NYm2FrDb8uQ3c5XrE1O6qdhuBLJhgqtVvabsWRUF8P6il9cZjAixMyYqMWdAOi00F-IV3RuKYqy06bDP3cHgSUN3y1wtlPwNQ0kjoadvIgik8auqX4bklipDlhuzgpjRoKtWMo9OGe-F7UP_6LIRx9hcV3k7aSW5l1w89ObVCwwTXCt_qkab0TWFzlRNJu58J4OComtMHSDL6s2OzgP9gcSMkZ5f-V5DLNuT5J-7OGdrMW1l2Cok5N0Rv1gtSGIGibNEk6Mv41Z75UNJK3lwvkJn6fa6aPfG_gVl8VJwsOYm6a9AARdyr5utBZdjD_yysmlVieNHmM2Z1wj_1EbCKrL7VLbVUgcjjzze7_qvP1KL26Qkq0Utct8q-wjQhinm6Wnot3dNXzCXo_IstdKQ77dbLEDJ1juWJlryS_y6iiMnJrAAWjHGvJbkmMecxFeUcKD0RD3IjgoALlZn2Sf9PXffFTkqT-1slV-6OtCYPQVKMxKX0TfvMyoWOY3JErmfRSsq2Q4_1RxPFQfnLjnpIK3YyoxGA-z_2LeSax7ilgaiQZeRbQkcDn6nOYleLiZhb01UnATF76yUFpz1ctp2QHmnfJTjiC-UCXdOrOgH6-C6FebP9zXswKwzbKGBfEukOtyXKmaoVVg9YpujwXmftxZxqR0T8YZu_gz0pei8bIhKfhBClilR967BWSFvgB7iDEDLg7pOvH2Hd0ymSRZjUPTfS4lJV4KfvvVY9aY4Mc0zlERGJXnnRMCnR5QXj0zMh_dFkRP5sx_30IFK37aKD5RAtT1fm8tg5oAnQs5yLGQbyeyOPmwNYWVISSmIrXxNPXo7lLOm5lq9B3qpatX82xqmkYgCwHzfMJES-98L4ng4qT6iidnetzVF10uTRWQUu16mXDYZpTxf82JB86lSRSMWLXL1XPUsHOhDaFscbxzxRxVDqvMfmJlQgB_p0WnlCZ-tqqmN0DCkrs6wDHA4xLyV74LXB7EZFqkWRUCr4vuR5M2JFiN6KDBgkmBOimvLRl9I32kXXnSWx4lTNvdO1-oT_obWaUQqydrtXdclpL1vH-_9rljHjOmNZPDwJmrKM2FuJvYTSWGP8T9SqfQLjzXjztq5GJLIPvM3ij709a4s05Efa37TzS1F1Gmnnk1pwajqkt2aAw9KbryOEQDiptkb3dP6nD2DJYQq9Oi9Ej9UL3LVc1-u8_rHuRXJo_sKjuOYVnHD6AkyUOXI_D8sOQah17IHXeK7bh4MUWQnkNOpNQtAKLlNLc_zZfSSOKr_n_9roVqaSH6RHTNf2qYhz1RJTwyJl4ZziuuQ8Tdai_9GnsAfIlxWrMtMQGqnK1-JaLgssgvm8apy8shdJ3GyBEhWAIlScD4M1Dsl8GYJ3Up8XgsQDrAcLdOXqjzCM3v6LLPsNOtnlXZA4mY2x7tx10CPuLErNn3tciDM2_BEEtAxXGafV_pUBGIKS-Ied3x_sNakISl7JYXo8F78D6UPaVEwsQrR2HtwPDKe65AAslF3sZ0raCHKYQMnJlb9-gi8NfXAOEYJNnSkn4cCIPq-ZMTwZsF60iOAxKw-JLRHSWqC3EFeu_2gpNzugQLUkXR8vtCJbdIZylJDbAyRZbOVu8txv7d8C8pczYQ_cs_98i9hSLwEZwhDPj3devMcNRHve16amJ4YziL70lDDHXFlGKsIFm3qACXOt53MiJGv1ZD7w4hofjx_00cIlVqSa6zGglq1t9fcvutr1yb5pSUpBjHDd2l1sD5XdemacXtRzRTs_Mu1x29NHcz5jZT8ECBjmoQoh0647knVVVumse1U6F_ERIpRmn4E9C9nievODLG3J9vo-mlYTiZHm43AV2B2K-R69fsbaZ8NcHfwy1SIuaEZ82K73TWJ7SOASRRt933abAGmxuA5CCzDajiltPc-HNOwtOBV3gKIZOORGjMoYDyfeRwSIDlbTbUq8a_iKW3MW5yNt3o5Vyl5m9bJqfi3AbwCAHLDCBCLHENKRy71G7wBCZW21scH8gWqOaDa947bD9gydvU8VYGwTTf-fiQUfrv6rbCVh1M_bYYxfHRezsEt0uJH43DkuHiRL2scLxonSE8WLQYzFgbZxh4GwqJnI0WYqo1RK-rl_uTdF8SzX_VcoztOKxMctGEHEfG3JCtccT5vcbCccT9yeeLS1BoTlmcAyo9hE1PPRzuhBvyXozGzz2hTux6K2OxJ3ZbvGr6wpM2J5b5oqZwsjHArrjrbZhI2cUZXJ8zyqkbG8MGeJPqUAmMxLZ7ls4qqlgXZJUkGpZKKhgjAloXuYyl_oJNcrkWAAh2ictFB6d-w5smXL9ZHRoqIIOAcx8002-l9dV4awnWf1qdZhFXtqoaWnT_WaG5POp2gny0Ci034TnVXNZFor_rs9bE8KqG-o2YupvUAfcqx1JoPKAUJ2xT8WNeQn6qGRd-VULttGv_k8gdZeWaYePt89aHrxJON9Sxt4g-u8Wb5P90YPSv3_jUdtbouAO0Sw_D6ldmgVunNvQzc0xL881q-r1vumO8ITNfHagFaMGvcCteXVLSSpnqCnG6sY-I0svKRYAuhmzTCT2OL0txDhmJnYtrbtA4aARvzZJGlsnNzRrlzheCX-XzWwsybkQ4Vpmrr_C9utKiJ8k_1agixR-YW2qszckLw2dQrVDDOiaZTvcpQR-UkoP0qJ1Cj3dW5tpsELOqUT7HJpeN5T4C3JJkuYLnF7AE91-Bgos07iq8eefsv2KhKsar9M5eRYbiJlbUn26hauZN4SPlBCTzb8YPz6o9ElX_BmnBzUbnJzCBzX8MYR8PRo0SMSO-tpXv969NPp43BzX9vuZbu9fzu4-OBygm_YFw-vU7ekI2ZVOwDg7HxZVJdWvbeEz8l4Lyr_ESSiZGurbwU1nu836Y3M4lq_-CmdB4E6VtLU7yb3-yIkGiCul-sd05g97Yym9oD2Il4gbnIHHv_6lo6fBx7TMFNzUvDo3iY7OMbV6zA0enCM0SrcM59KO0P9TLcgEX09rO5yOGo-sLg1Oa2P1qbMZhh_S0wE-VKArrI0YzCp8qpuz701R4hOzOHRPf4GvIimmSsGnU5WLUoUZ7nsRewqISh0SkNLM_NEcJJgT6miDxZGV9ffYC51L2usUMKkFP8dAZrgzF5gu8cACO0uuTScC8TvSvFpUG8AxmfJd-eIQGitsSSXsDN_Qcd0elkBnqL7i3skC36oO1ssld-yb9Ic-BV1JytnAjtpR7t5UXJrQp_v1gNaKvl4_eARXOLSQn1QFaRsWBdrTBpvf1-WMv91ER2vrbfHlEZo__4x3RmI0StD-egTPgrr3_CbjVzn_h01IumM7gyattWCqT0dlkaOgE_Js0KSO9k0ex9a27TKSuMLEBBJgcIA6WqIw0srpdOBxdLLB_1QFv5cmmrDv18vRbW__czG7C5w10R5zXi6g1IG6vbiVnMJe7XyZvckRhSdHY3Q8bnCl3FL8BGCrpVFVrRlwxFf4oXPZ6mQhml9EYQXuQf9YqQz5gwdS3lKws3Qjt2ESZhtj2m5BKWKT-pfQXqg1Ds9FwpJwrGIKJEDTD2x9vgA5r7QCWa6sHyqWJr_l2j7MqQHViB6GyqIRO3UQzW_Zw4NVgIBA3HUkdM2e787djTSEghpnWnC1o5yXDY_juoPTchLwcllaqnDFZsAs_zubPBraZyFzQsUzPk34G9O41FLj5gQELS-hPQLPYQJusw7Gqb3578EgjU6S7kjyVEjqUryu1Vmi0DXEWbSzPCepFlZa7xEmIdqBDUz9e2CT4Vptx-oNaDpVnYROg2Kb6W3KiAf-1ao2V17s2q5z4bEfIXpAfSz2N_NT8hDGAeDKCeIONFb05R6pN_3FQGYzt8FshMndB0IM5JHdpiSeWZ4Ak0SXaEB-D4lizlCW2nG50RnqW4UjHghqU9mw-J3T8spaO8MWhdhpZorV8vo_zQWqXWOnZ9xfn2RBLNmsdjzsbbek9iL9h3kVyaNaWhJmUG_lQu3R-igaLlv6TFDI0R-ZAOia5SPZJncnmPJsiwKu-l4odmMW8YaK0_MCSYbKRWV4Q9G_RV8dhzKvVeYwAZmSWrGtLutaLFLhfVniW73LOkSl_GZfPa4oxrB1wtpEYBqVc-fesvE6LsmVgJYYisXlZf_RXNjp_fryKsaIg0fbNNgmFxL45FoEhiyrV6hRsB8-_sn45c6BhrUWGi4h5zVBZ9l1xEpVZ4VpvbkqttIgxRwW-KHU4-36RsFBr4xvmDcbWywX2dp7NhFbx776NnyUAs0i9UmHu6TgpkUp-s59jDi4Pib3UQx00jN7dX0YdzmoelozpKNxFBVejNGP4aafW4J8IBvcr28rsLQFwHHuvxcjjQCAQH7ZDG2GKDdyNFf3khrWhhcjkJHBn0bSNbW9i4VhHwO5oBCV2e08UXf6fceWlV8M6WKYcRMS1XJ8ReOXkhbNTberTg-7EHeK7VsbkXNCFW5Mp9M8zuC37-nEWSktG6s09dev9YBEVzZVCSmYfPIrKH5wZeAnEiZn12LO3xOM4hP5kX0PqlZfVKuxzyO9CEiHr3R8pyDKmJZjfhlWwRsZFNSuccO001TEvsIytDx17hCVglXoSxP02D1Z1ykaT4auYVhYzVBiALpdLF0jiNX1Ru4-FAfVqM1Ga0xECC_BlKlCAbSPP2gcSM4Kd68alwGDOPrOMvnFmqVVt5RllX8xPrGb2zn_jMa-zYf5_IbaYX-wYUM2_oNHARc6rs6Rz7qc6vf-Ja-uzCmZCDudaNaDWoDQujhwf9Qk1xFG_qtB-IZYO7duZ4TtAImL73fpgt5415ScKC02JuA_sHeGWLwMCiFpenOlXOTZUen9CCrtbnWO0Zjzufzfsw0xBZ7cSOLRzk6_Y6MYxWb8l7jAt05HB2LROaMmUhXhHie-aUN2_P9oGYc6nTSIis2pTDflBxq7ZKLwX7vzrPwjW3uSEe6RX64qOvCMlTfDxIZwriEJ9ILSOKtjAgyvKUHObptJOuVcPUt6TzKSMiJ16ZNvLAAjU5ec6ZV_txAS2tdO7olAh6O1SVz3C8ChIs4S61k3lSA2axiSBHL9xqkz5FlmjteHs88oYJtMqhOCd8Q7CFQa8R6oDDsKRmW8FdJqCodiuMpd4r8vSaWbHjXbP4KP-RgX-s2KbDNI5fSOw7CVayv_xmugMEfU9Ez_ajez8gdnPTxppVrnrxjULze8mywY50YjGWfNG6VJ0fDDErhHSdnPh1IRaAhmJkXnjjnJa6Z3lYrnstTblM8jmtnZw2Wvm6iFLrSgiYRCElbHnt9_3g3Jop8o88o6XE--VLPekJw5VyXgGCAMyOXWabzWF-jlLSyaM3SNp_5CRrDOZvzMnE82tvuiV7pYU5mAbqUA3kaouFd9s11A2Hlx50qg0Zw7afj5Fxd9tCbHFRnXzBvUwDY4axbGUJya5Ce7ugdr6GUCmAcv3ukKzsE5SDqKxr7iUuJIy-siZWYrN1NgryTVuxHJQjU0hHDq1iUd8WENKvGt5DV357IbnhV_S3K-nHVpcwOUm9L70r2DHFYBd-BGKGBuzCT-jDQzvG_C1Hj8qkCBjWw5tVXzqdqliLVURUMiPaUBnG6aAAg5BoWGgEG2s3BP6LIWCRYI0z-MUd0iWEeWGamrPmNh8Rl18Q8FpDECjJ8qwouj8ko-UGuY2uw9YfFogEUlk0p3IskbEPhY3VB5Arp2lqGpjGcHFytOWzLXwHu0onCE9Z_rsSYflpwAc8sJtcKzBoQ3tkYKNDx5lfJ5-siWtEdpobESzZZ8tKAFw1B779Ix_0aTc-zdV6tLcEEt-yRZwK_HxRWiQnml2MqQ64jx6a3D4c6l-VkWHSVH_1_BYlr3a2w2qtHOHstzmsdIddiEFY4u_vQf4soMoDwoZ8q1WoeDBzBu997HQOG9683Ulwa85y94LO1u0rVwcMPcjBOv0-oDAgA_5ZVcZDPvlVfp4yqv0k2A9NZh2mAcIW_ugAiYXJRIPB4w2jhODE5uYLMksXm34n3QwD0RHwC_GZd5X_TQRelcuiA9P0MQqUtHu_1BcdI62jhBN8TlmpahdeiRoHGhgFPIHLorwWjwjN1nBpPDRJq_WtT2DHAaKfWmE26NWUoYUGl_88JTQumhiIWdWlAO6GK-loY1HHgL_V7Hh7x6a-LzGlS4bcTT-oeK7pDdwZkmg51cYQFT31rDr6h_4Nb8QVA5SkUhZ1Bh_D7RKr_D9v8T9PpwcU1qFcO3kf2FEwlNduqaXl78sxEHTtO4gSA6N7q4rtOPs3rCMu3VfjfTdqUxsnKlAHDDNOp8Q-ooWchhfwcCBBNYGgPNHplT-PfJ8_vG3ccfmKlviBG2mA6J-MNxAGijlf1GjSStYMVVbmJCTsHvPU._fCyHBBy1s39UbK3URpLHQjVpyPUId0ZdyFRl3TAmU0";
        await agent.backup.restore(backupJWE);
        const expected = JSON.parse(JSON.stringify(Fixtures.Backup.backupJson));
        expect(stubRestore).to.have.been.calledWith(expected);
      });

      test("round trip integration", async () => {
        // empty db of linksecret
        (store as any).cleanup();
        sandbox.stub(pluto, "backup").resolves(Fixtures.Backup.backupJson);
        const spyRestore = sandbox.spy(pluto, "restore");

        const jwe = await agent.backup.createJWE();
        await agent.backup.restore(jwe);

        expect(jwe).to.be.a("string");

        // running SERDE to remove nil values, which will happen during backup/restore
        const expected = JSON.parse(JSON.stringify(Fixtures.Backup.backupJson));
        expect(spyRestore).to.have.been.calledWith(expected);
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

      it("Should throw when linkSecret is not found - Anoncreds", () => {
        const offer = createOffer(CredentialType.AnonCreds);

        // const offer = createOffer(credType);
        sandbox.stub(pluto, "getLinkSecret").returns(Promise.resolve(null));

        expect(agent.prepareRequestCredentialWithIssuer(offer)).to.eventually.be
          .rejected;
      });


      describe("Should create a credential request from a valid didcomm CredentialOffer Message", () => {
        it(`CredentialType [${CredentialType.AnonCreds}]`, async () => {
          const anonCreds = await AnoncredsLoader.getInstance();
          const linkSecret = Fixtures.Credentials.Anoncreds.linkSecret;

          sandbox
            .stub(pluto, "getLinkSecret")
            .resolves(linkSecret);

          sandbox
            .stub(pollux as any, "fetchCredentialDefinition")
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

          // const offer = createOffer(CredentialType.JWT);
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
        const parseCredentialResult = { mock: "JWTCredential" };
        const base64Data = base64url.baseEncode(Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded));
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

        it("Pollux.parseCredential is called with correct decoded data and CredentialType", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();

          const credData = base64url.baseDecode(base64Data);

          const stubParseCredential = sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);



          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubParseCredential).to.have.been.calledOnceWith(credData, {
            type: CredentialType.JWT,
          });
        });

        it("Pluto.storeCredential is called with result of parseCredential", async () => {
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const stubStoreCredential = sandbox
            .stub(pluto, "storeCredential")
            .resolves();

          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubStoreCredential).to.have.been.calledOnceWith(
            parseCredentialResult
          );
        });

        it("result of Pollux.parseCredential is returned", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const result =
            await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.equal(parseCredentialResult);
        });
      });

      describe("SD+JWTCredential", () => {
        const parseCredentialResult = { mock: "SD+JWTCredential" };
        const base64Data = base64url.baseEncode(Buffer.from(Fixtures.Credentials.SDJWT.credentialPayloadEncoded));
        const sdJWTAttachment = AttachmentDescriptor.build(
          Fixtures.Credentials.SDJWT.credentialPayloadEncoded,
          "attach_1",
          undefined,
          undefined,
          CredentialType.JWT
        );
        const issueCredential = new IssueCredential(
          { formats: [{ attach_id: "attach_1", format: CredentialType.SDJWT }] },
          [sdJWTAttachment],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "test-revocation-thid"
        );

        it("Pollux.parseCredential is called with correct decoded data and CredentialType", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();

          const credData = base64url.baseDecode(base64Data);

          const stubParseCredential = sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);



          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubParseCredential).to.have.been.calledOnceWith(credData, {
            type: CredentialType.SDJWT,
          });
        });

        it("Pluto.storeCredential is called with result of parseCredential", async () => {
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const stubStoreCredential = sandbox
            .stub(pluto, "storeCredential")
            .resolves();

          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubStoreCredential).to.have.been.calledOnceWith(
            parseCredentialResult
          );
        });

        it("result of Pollux.parseCredential is returned", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const result =
            await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.equal(parseCredentialResult);
        });
      });

      describe("AnonCreds", () => {
        const parseCredentialResult = { mock: "AnonCredsCredential" };
        const base64Data = base64url.baseEncode(
          Buffer.from(JSON.stringify(Fixtures.Credentials.Anoncreds.credentialIssued))
        );

        const issueCredential = new IssueCredential(
          {
            formats: [
              { attach_id: "attach_id", format: CredentialType.AnonCreds },
            ],
          },
          [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, "anoncreds/credential@v1.0")],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "thid"
        );

        it("Pluto.getCredentialMetadata returns nullish - throws", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox.stub(pluto, "getLinkSecret").resolves();
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);
          sandbox.stub(pluto, "getCredentialMetadata").resolves(undefined);

          const result = agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.eventually.be.rejected;
        });

        it("Pluto.getCredentialMetadata gets called with issueCredential.thid", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox.stub(pluto, "getLinkSecret").resolves();
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const stubFetchCredentialMetadata = sandbox
            .stub(pluto, "getCredentialMetadata")
            .resolves(new CredentialMetadata(CredentialType.AnonCreds, "mock", { mock: "CredentialMetadata" }) as any);

          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubFetchCredentialMetadata).to.have.been.calledOnceWith(issueCredential.thid);
        });

        it("Pollux.parseCredential is called with correct decoded data and CredentialType, LinkSecret, CredentialMetadata", async () => {
          const getLinkSecretResult = new LinkSecret("linkSecret123");
          const fetchCredentialMetadataResult = new CredentialMetadata(CredentialType.AnonCreds, "mock", { mock: "CredentialMetadata" });
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox.stub(pluto, "getLinkSecret").resolves(getLinkSecretResult);
          sandbox
            .stub(pluto, "getCredentialMetadata")
            .resolves(fetchCredentialMetadataResult as any);

          const stubParseCredential = sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          await agent.processIssuedCredentialMessage(issueCredential);

          const credData = base64url.baseDecode(base64Data);
          expect(stubParseCredential).to.have.been.calledOnceWith(credData, {
            type: CredentialType.AnonCreds,
            linkSecret: getLinkSecretResult.secret,
            credentialMetadata: fetchCredentialMetadataResult.toJSON(),
          });
        });

        it("Pluto.storeCredential is called with result of parseCredential", async () => {
          sandbox.stub(pluto, "getLinkSecret").resolves(new LinkSecret("linkSecret123"));
          sandbox
            .stub(pluto, "getCredentialMetadata")
            .resolves(new CredentialMetadata(CredentialType.AnonCreds, "mock", { mock: "CredentialMetadata" }) as any);
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const stubStoreCredential = sandbox
            .stub(pluto, "storeCredential")
            .resolves();

          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubStoreCredential).to.have.been.calledOnceWith(
            parseCredentialResult
          );
        });

        it("result of Pollux.parseCredential is returned", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox.stub(pluto, "getLinkSecret").resolves(Fixtures.Credentials.Anoncreds.linkSecret);
          sandbox
            .stub(pluto, "getCredentialMetadata")
            .resolves(new CredentialMetadata(CredentialType.AnonCreds, "mock", Fixtures.Credentials.Anoncreds.credentialRequestMeta) as any);
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const result =
            await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.equal(parseCredentialResult);
        });
      });

      it("Should be able to parse a credential and convert it into a storable object from a valid didcomm CredentialIssue Message", async () => {
        sandbox.stub(pluto, "storeCredential").resolves();
        sandbox.stub(pluto, "getLinkSecret").resolves(Fixtures.Credentials.Anoncreds.linkSecret);
        sandbox
          .stub(pluto, "getCredentialMetadata")
          .resolves(new CredentialMetadata(CredentialType.AnonCreds, "mock", Fixtures.Credentials.Anoncreds.credentialRequestMeta) as any);
        sandbox
          .stub(pollux as any, "fetchCredentialDefinition")
          .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

        const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
        const encoded = Buffer.from(JSON.stringify(payload));
        const base64Data = base64url.baseEncode(encoded);

        const issueCredential = new IssueCredential(
          {
            formats: [
              { attach_id: "attach_id", format: CredentialType.AnonCreds },
            ],
          },

          [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, "anoncreds/credential-offer@v1.0")],


          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "thid"
        );

        const result =
          await agent.processIssuedCredentialMessage(issueCredential);

        expect(result).to.be.an.instanceOf(Credential);
        expect(result.isStorable()).to.be.true;

        const storable = (result as any as StorableCredential).toStorable();
        expect(storable).not.to.be.undefined;
      });
    });

    describe("createPresentationForRequestProof", () => {
      const didFrom = DID.from("did:peer:2.Ez6LSfhufN8b8EufbxPNRh88YYvjpf7uuVfa3tMG4nKeFK2wX.Vz6Mkf2USnehnAgu263PfyTDsB7KhjuR64wMa3Y4XLHi3KuQS.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovLzE5Mi4xNjguMS4xNjU6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ");
      const didTo = DID.from("did:peer:2.Ez6LSjNzhLeoBEL67PHWSq6X7A7YFuQpcqs13g3cYJTRFyhpu.Vz6MkemtLC5RN1bwBopgZVgXpRRXoigbZjKQt8NHEiJR1eAQ1.SeyJyIjpbXSwicyI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5emFYUXRjSEpwYzIwdGJXVmthV0YwYjNJdVlYUmhiR0Z3Y21semJTNXBieUlzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJhIjpbXSwidCI6ImRtIn0");

      describe("Anoncreds", () => {
        test("AnoncredsCredential + AnoncredsPresentationRequest - returns Presentation", async () => {
          sandbox.stub(pluto, "getLinkSecret").resolves(Fixtures.Credentials.Anoncreds.linkSecret);

          sandbox.stub(pollux as any, "fetchSchema")
            .resolves(Fixtures.Credentials.Anoncreds.schema);

          sandbox.stub(pollux as any, "fetchCredentialDefinition")
            .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

          const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.AnoncredsAttachment],
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

      describe("JWT", () => {
        let stubGetDIDPrivateKeysByDID;

        beforeEach(() => {
          stubGetDIDPrivateKeysByDID = sandbox
            .stub(pluto, "getDIDPrivateKeysByDID")
            .resolves([Fixtures.Keys.secp256K1.privateKey as any]);
        });

        test("JWTCredential + JWTPresentationRequest - returns Presentation", async () => {
          const jwt = new JWT(new Apollo(), CastorMock);
          const payload: JWTCredentialPayload = {
            iss: "did:prism:da61cf65fbf04b6b9fe06fa3b577fca3e05895a13902decaad419845a20d2d78:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw",
            nbf: 23456754321,
            exp: 2134564321,
            sub: "did:prism:da61cf65fbf04b6b9fe06fa3b577fca3e05895a13902decaad419845a20d2d78:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw",
            vc: {} as any
          };
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:prism:da61cf65fbf04b6b9fe06fa3b577fca3e05895a13902decaad419845a20d2d78:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
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

        test("Attachment format - not JWT - throws", () => {
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

          const jwt = new JWT(new Apollo(), CastorMock);
          const payload: JWTCredentialPayload = {
            iss: "did:test:123",
            sub: undefined as any,
            nbf: 23456754321,
            exp: 2134564321,
            vc: {} as any
          };
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:issuer:123"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).to.eventually.be.rejected;
        });

        test("Credential.subjectDID - doesn't match PrivateKey - throws", async () => {
          stubGetDIDPrivateKeysByDID.resolves([]);

          const jwt = new JWT(new Apollo(), CastorMock);
          const payload: JWTCredentialPayload = {
            iss: "did:test:123",
            nbf: 23456754321,
            exp: 2134564321,
            sub: "did:test:123",
            vc: {} as any
          };
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:issuer:123"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).to.eventually.be.rejected;
        });
      });

      describe("Fail cases", () => {
        test("RequestPresentation.attachments - empty - throws", async () => {
          const jwt = new JWT(new Apollo(), CastorMock);
          const payload: JWTCredentialPayload = {
            iss: "did:test:123",
            nbf: 23456754321,
            exp: 2134564321,
            sub: "did:test:123",
            vc: {} as any
          };
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:issuer:123"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
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
          const payload: JWTCredentialPayload = {
            iss: "did:test:123",
            nbf: 23456754321,
            exp: 2134564321,
            sub: Fixtures.DIDs.prismDIDDefault.toString(),
            vc: {} as any
          };
          const jwt = new JWT(new Apollo(), CastorMock);
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:issuer:123"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const result = agent.createPresentationForRequestProof(request, credential);
          expect(result).to.eventually.be.rejected;

        });
      });
    });
  });
});
