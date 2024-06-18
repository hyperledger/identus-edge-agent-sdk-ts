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
  HttpResponse,
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
import { Pluto as IPluto } from "../../src/domain";
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
      request: async () => new HttpResponse<any>(new Uint8Array(), 200),
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
        const backupJWE = "eyJhbGciOiJFQ0RILUVTK0EyNTZLVyIsImVuYyI6IkEyNTZDQkMtSFM1MTIiLCJlcGsiOnsieCI6IkZHR1J0X0c5WDJRS3d2TEJqSWRmMWZ6cGZfVDVKWDVDNWhpTjdoUmhEeU0iLCJjcnYiOiJYMjU1MTkiLCJrdHkiOiJPS1AifX0.PtqnqslB7ohldv_avUkqS7c3hNk-M4bfhne6ZiNqBK8u8RHOKmgHsFIEnfgP1QjhnDKuxSQUNhCGixOaHfy9JQMvHHY9kucq.o7z6mCA3KRPktIGfPhU1CA._cx-DA_x5mE3Crb0uyHiNHNu6PPSvydWGi7ZD8KsvtnJ-xTetnzEGb_cwpJvY4RNbOAys-IoP9EyLwj1NKgbykouhdum659An0lqJGI7Ja84QNgdwNLpcSQyiZQAg95V_gyljBwXra4JRAlhCM00H3PNGbz7H373WIVKDcVgfV2hZFxOfrifDEKlzftSD8IaqEyPxv8FTq7nwD5GiPTzELjSD_MRCXOQL7TIxTkC_TBmKMomQ3391b7oZ0cNOQ-QCbMrt_kPfmcat6XgLOldDhplXwtwv_YebWglImLD5QVjjpq4RsQ_lc5sYFdWnhCbdXNwsb52g93Mo6zhtKROTcL2InpVNVgCYYp_6YGTZXnHmmWSpOpg46nKW_vfK3FVvJAXUOv50JtuAwNpLGPfdstoX9SPUHKFWoIxB_l6uoum2zbgKaQZc2nhU7SBKaW9psU9hTHCiiloMI9nxMpIGIarMMwu5RXhSm4I0lzYUNDRDeIDmbgBEDkZ7K3mHR39ToH4oSCWGaPtDydOpaIXoxK1njTRnifRn6ExjGWw7_GGomjXWr_zsoxvI_b-iXE0mIqBtgroT0rzLRBBwXvGHzUfcxIowIwI13fXspSRt-GC9sABpsPLLHpvXXYYSQAz-CJpXhDtWOwr43KrmyljDSe5fzSLpcwz3haXOwzOGsQrw2fLFXyvxxl9euRP4ulf_zmjaIk-KlvsLR4kR1ntlxtu0u57FwivyrJg7IzA7DC636C10KKowgZbiZ0flYGIM6CUbp01FSn6koZepUzjK_Wc8BtbNVlvcH0PLBF0tc_lm7e_Zl1j84oqnO9OZ3uAC81po_9P-wCUQH2xMiSZpXMBjMv5_9bJR7oPCP2AWdmi2NOJsnN6uLkPilSG54p1xNFGhCTQPdq3-mCu09k6UjUmB1GNUucJy3jhbd4vbKCatMgBdx6JpyUcQpGlUuLnDSQO7ko3d4zc2ABjdm9zoWT57rDTUWiaRmoamb70CWZMWV2P99lh6A7gZOMTSdGXa9lJV5DUO1SuSWRWWRkc9DyUvIILjHDai2CRJZzUdM20Thhjgg_-wcJb_9ufiinvzMcv2DDsr0e3-tQwtvBSWOPvUfJBxnE9UGn41idwh2r8a8cS8AXbMh9EAAYWulupmLjSis9DOalRBCLBR-H4oet1HXtPy7FCdApM7TaZNFmF1WnOQ2VU_CCcCTQBOCZz_Vx77ee1OtcetTbHr57nutXzCE0FilXXkqCtQf9cjbSoPZPKxi7lhWR1uLLLfovU3Cefzu4OcLSgzo6jqTy5RC0cg24igGxtjxxhQBjweeqaO7j03UhsWaJUakvP6biEQ8H_I3-dbxKbvpWyP6uXBZ9_drdMT07YinGi-2iZHOEVzwx5NkKClQkSjtMjJMJE0--lLd7RHVry_C5BryOkATn3cO1mh0LTS9z74t2Q-PkoJihJkshxbXyZf90YDtdq528cH7XtZNxFc1DjQX5IokNT5RWlde0fTTUMgA7xuoPA5HH8NfNpnr-eMDIfodpfASrP_63HIkPdz7Mn03r3ZFZSU3TxNFPVxuqQXqH2ab4U9Wg9dEJQEL3dly1l3rdXnFZWA8aFD_NCjs0dFuM_zR4WXWBIh_D13betc1B9GNx-t1IjKd1eTTTwy4Db9-DBr2XGxVVNEesxZWvBOi2HUQHHiZhU6khsN30jQzFk01IObwJTa2YhHI-ld2IMyYSFOfL4kjFkD0yZAl7hBh2MKCtH3tiQqTOkI_zEYSQnpxuKiGer42KKTH9WOUEfSqbKMeDZiEsxoRQpecgurVtX5cb8GfnWzu20kJxn_WnwcuGOJ70mrsJCd1_Bw5ZOT57Y5nh0LHBMs_gncTLW5CyrJczKLbh8J7iFGsL7wGV-cM5YHh7bMBVN9LKZUPqhQKlslwYyHhWAYKahnwaFaEaSDDcH4IF5SeRNV672phwR8IQpP6NUnPyZfHgJ7yhlSNGe_Ty9Jt5TSvVlUXvQP3Q-QbNaZnLsVfsbMrmfav86mmr_hzu6LDYlRgRKFF4RLDJgytz8JjJkkChrLt45WzzYj4RZqGA4yrkt4V8SOJl9hteM8SclLcx4ZVOuG3fKNcet_bpRls0QGY90akkbOQa69mKb6rEFsq7_0LUhvCZyS2Q0HTJFnpEtF3eB5zsPHTAFtEbOTsApdxxMDVDpQwe1sliBzr6xjZDSoMCKmA_uMxpXTeUb8F3_U-EIPPPRNYj245lIrRQXhJqvBqaYGp6rDcKIXTAymS4ijoUWyuU5pSCg72Z1kennIUdK_ee2GOUp6j8DKjPnXJPWamxgWXnTvcLQx6UCvnAzsaQki5i3_KPLaR7kvVwLsQyumNYaN103xXz7hPitkTj5MCfkGiBxxApY6lukVzhdZ71-_8p3trYfS4rZBqv-QY0wCIGK8M6v_3k7rcEUpXuZtLDSwuINYOugDus2Blg2iTpMcE77wFNW_c_6PzKVutsAygDt_ePy9GUTx5OpTa6r69UgKn3yknPVHubkkeKksoe9V2_Fvf5QOrNjEPxMtXhthKJgadCIrCc7aGUdh8F113s9sQx4TaMYcqVhWDHqn9PkaEaBKwTjz1OFDA7QzL7n3uzav3qvaYZDL962whZJt0619HotjU2dNbR1fd-MdAXW15feBg8uvTZjNWGN3-UYvVRwVBvtvkeGQJJqne5sUIwKfrCaghlw2gpEC_o7JbaIE9FlJHAHmVtOL3-ZaOnGU0CeRg21p59UA7SCsoS1CYZE8UR7PlYNZebdhav2G9ZgWIQ5_Jmu6br-1qeOJ4B0wVEtmTAAoft3GiyMNw9JsI_UeDjBBP_IZU9BI4TH2BSnlUAVhct7t9KnUjHDOZ_gq0eB1hqyKNHI-RpOp5iCeyrGdGMpQpcdhElm95UkTCCXAzLSHsTicjqUNrKxTAwzGTjBlC4e22y1bbzOk-9KEC-4T0yl0kpEBQKSY8fOH-mAVHhqAMX9T9xGafGGFLRJgC5y2305U6tzopWuoPxxwLll4HAS12lkVE1Dxark9L01v4nYPGcz9vuN4gjZd-AaoGD9wy-dVNTsbhp8fTV9DcBRXCYHDdQpJWhVVy7j6VvTlyIfkf_6khvGylMnkSNa5PpIHSOBFNf1s1Hg0bzQ0a-qZOxR6rMFY9S3IqGZlJW_-2Z_x4-ewc_GaBetq71nl_U9PBKk4N330wjQ7U9WsnyWJS_1-sssvJEguxOf6nhkE3hROHMSDz9I2AcmP0TeWv4zjPmXsiArhJ5Bd8rgDDjvmDAY0Ez-lbg-aPQrY3r04XRyljOt8Nwx912nv5NUsSGSuSt2-lnT_8wvNjIJcYjqioMLBf25enP44Fp3A7ulgffdM4cIdLB4ra_43a8eXmy3V-HKQ5w5yC0IyFp7fYGtInMQPnnvvgLNyl6kYNzTt_xDVkVGyxITot_DgcWBeOYbPdQ4sJMPAeDPIbBeDnhxTEf0Y-Icx7rk0-ACSnCqmrLy6Dw0le7FgSQxblc9MpWGC6GHtwTr4gRH1KeRE6KEFGYSTKuV9i0ER6fBLyw9ByboX9Ir8qhoMnEyiaLWRkPvKLzaeMBjsNBAVuTlzMbM-QDcRgG2ctEIo3I_bX8rNq3UOVeaqNVxdrh6IZeATDxa7P_w3yGKWHbiz19wyGDULJpfoluNb9M8Zohezs4fleoiU7BaFYg2Aynq4vsv_CIE4_v9ApmdHKIPVtoaHbr4L2DpITaPYfLoQN9GHCBR5bveVV8T7p3SP0vNI34A_HcrsZR6UKsdJC7lotwC7Zm1xxF2UoixdSVitcA7I2cOAKB7N1wPQPvb2TxQlNntQRp9S8LC31gg_qA9aEVcsE8ZAABVw90LQVO0ssqXpSiKKVW8gppjvW-7g7JTtC4fdkOzP1mb_NnkABW4vPNQne9WCV54VmfU93XDVo_XD-eKqft2vODohMragXic6fse9Gs-gq4FjwGn77c9PA6XjEbfNIcMkGWPxCMoVhDGMatHpttGZzJNIAkJZXihBrIsYJujxpcZgCgu7ny7lIkHJZrV_xLFs67Euywv-8Cu1g5NZBWk4_cQs6SbFHpW7WyayErqN4LVXx21CQGBxizWEGuyPXgNgdn2GSwMhXtEk4RUD3kDHW7vmPVCIiB8ZSTG9Q_1Gr_3Km-702x-2vmyOGCxeFIUH4Je0BwhXtzbkL6uQ9s01BGSB9A1wpcpRrUloviOgUW4JdteTr4-ivvPAbLW6cfhNzS6cdzaq7P0qlBwrmURG9WUBqN-2u1tIIkBQNndq0VVV0TheKsaTiu3UeUYEef2F8fBgOk6C2VXADgifq4cMHnx-AqLi6kglNguJYJekgh-hBMNHB7XZOf2hX0PCvJUNiee1TlZR90ZCeGKjEUBQ24-L8uqLb05HMTtTljsD_jxA_kgYDMIndPH-AkEcXaC2-rRHAX8l_wMVNLZHPhUMAYLEuP2A-oxgSaHGy2JFa_sb5XDacD5hBMbM8CDbxzqmO1aDuuU5k_6To04x5NJqlXD1poYGvzQZFlBPkMObSKK7eDqHzMKY9RWHpfnydAgtovxZGQSDG3VnT4QIpPjdysCX5oI4mAx-LmHxuqmUVQq-CfIP3KWBM--u1RGvZIHirdBBv0YiDuE51ZgOSdR-sK93_UYHPrH-qdLjeEjai604m4HQ2Q3aEzaUIGN4FjoZR7D4wCzvwwUyUXRb3HelO2EbXDapAi7-6FtWaW0p9WbQagCZkNwsOC1RTnvGH0BXKi5anw8LVjy7quJh1-3jIzwcQk54Gr37uKEK725QINeTa7_PuLuoKk3IJHEVOzih8QnQQboD-rj2_zw7zJVYVLfWEsvm98UWwokO4azbCZKC29F0bZrT9XrawakZ1vHa_6Uck6ZuFVNpaxauQEVA6l7pnq-1s35MF4GQ0NeM9pczg3_zM4aPp_SeqxzbmLf-dzf6gb-QE7leJedz6Os-EZCc7jjDuwhmA8-lxtqNGCeUMg615g-9LkFw5ZUzx6MQAcNUF6KVAufbBq2W52Hhhg0a1Z070YAnOBn4GSc3yItCVbH6hgj-ZuQATd5yWhDdXPlc5CGctSziOfqanEtJ5XD_S_O3OOYslajZz67GgtJBMThW3HLv15c9THsppPp1lYHQzRZ8O7pI61Tp4VsIUM9BI_SMqWtSZIQrirRIkJRfosFnNDT8U6ghO47vFh4tlybBpy-ebzzk6W69xyJgJGaJAm6LsI55f-ZQw7PBEXyrAlDtUVM4C03yCL3wY76AAHL_8-s-VvcyCFG3OIzkMwZmg0s77rZvwihX-FAaxjsqlreUt0iNQU1n18NaC3xH4Za4A_56HbEObtzO26aPxBtJHVzVoVBKZARHGzAmuU1kIkljNPlKC8ab_oyTaCUa3lxuSrw_Sgs2hlSZaSg1Xg339eWK5y-Vi3vYpKGK2INrOMxLDgdW-WRJH2QrLl_dn88wiGLLKs25Cz0MiomhAAuMvrSkN-RYWoCJKtxPNPdvZWNire6IiYj7E2cKatNMJEv9WAHkv50iUUlfpRSx9civgqKqlzI-S5Q8_kE2bGDRX1dFITQ2oKXJTEHUg_SvC5xLaaHMoRJRMPvTdpY25dE2zSmotTsQBsYJgXCUQKVOKSHg6y4nsX_FTRif-X9EEPQakHX-TG4di6HknhYmLcuRFc2HFQtGnSgQy0cQenYR_EM5F5DsTIjS4ow5DBciJuirWWRVLOFcJzWdKNJqg23st-ESavP7-MhN7jk6PSKo1CtUtdnVVliefZi4vuJL-yfKX6xVsWqIxHqczWZ-adl8ditF4bNgy7Gtr9Gtv9bf5f7oisirceSOooKaqdFyy3kGfZ6xVyIug2ziQmddNi4g1fv41VOSWiAU4jbRAC6GUl-QAw9xxqUUcg-DJnWivlJNlb0DQsPFPsN9Qo7TDKJN-_pGMGGIfhPtZv42EFsgO8Ec0fTu7p0OYfSBUQE8RxNM9JSy8Uwzq4wZgLJQPVwfbCF-cYRMbhr4GXMMbuUMgQsMBJnn8C99h45foq_5t5cZoM7gPg0rKdKG8PiIu4V9Nf__evVSu3y38UmgZ4o9dKbKxUwX-KnmEHyVdY5J3bSMGm7_VAm0nHdi2AWdxFD_YqjpBliIWT3CB2_FCrh4c7rG6Q-EIOLejKi7sBIX1Gaa6QH-EsFb2BZKIhtjW9qO9UQG7ozOzwDRblKJZkfm1-YUn4u3H4grYGHl6ZBK2P7QGmkm-ELjWW3v_IiO-7e0SWsWJy6_ACOiGlkyYQ5KyAZo8baPFXjr3_pMHlw9S2S8c3O2eCec7epCw4xmConxuY5iZs7ZOdnQfKCWPO8L0MjMDl-avP4bgL3QLQ-1O4SYa8WdrpZZkCqB4Ii6MnPSc7_dzjayQKlrwwGKX_eQisV29BhnDJeAjgcU-517ZUyOVqYax97MqqyfLJNcQ4DaCAlVqKglxdsSvWfqWdwYgT0b-1Se1-vgiTEouwKm_pB27nLkSvc4bWfusn3VRA7xfhqH6dGS0Rvn2wPBKo6ryYxZEUqXzEX73viCzFx9Env7k-2qShsukrFlH9Aa1OGf7M_HifZ5hJPMRPqZSUfaULyhAVHtRc2rIKL3TYzvO6Kehf-NaxUpHsSTZLoEeb0kmMQPHcshDJ8AHJZzykBVuIgP95DhwSbtyWczd-v40WmyW7jU_IvOfmfSFWjtyc2F_AC6grUgYXJc1XJRBJSupynKZVkZvgD11tMsDek_HXOFHFMLH6dQNTK1W_z9mTlJP0j8vDPHqsU9b4Lds3ncYKf3gtwpt4vaTzrWLHj0NxgMefzHPkaDHA5Hig0_uvpROospHVFC3f_MmEJvx80hTmzgZro9JXVkt28ldKxWqxUJJYx9_tBEi1zxgAl8QH9dHssK1Hw4Rv-Hcg36Cj3Qu6TjAiW3w8ImnXKpBO3cPquHrsOCvyCFnED_0BmCyDNwB33-4pINgzm2mXdfW8D0key44yJR7SWyu018PTBfBPbX2RZWtEA0G0fyc8UAw33KVn76N9_L0GdplRpJynL7D0NX7kf1DcGzAdP2FKcJVf4Pmp_GIcOVd_43J9yQgKgYUXKhB1mwSAf6GtnsJglZ3P-WZJh24X0sgNM28P5SsIWDK3JhuxD5KXeC0gRW2kYes1whOqrUdlkGNoPNN0nchcwEPrXlbmJ6JjqtBRMAAzFFIW00Q_ULduRVJDJur-dS8s9XA0QrtcA5d98EP12xegwCEOODL_BcStJN4ilRfTRwuTRx3bxc19y-fD_LnVNck_kbzYJ5mkE-pwrZ681WPAH8RFabsvwP38S_xpXp8keEPn3EMy6aqtjwiJ1eaVkTuwbpvzh8LaF-IQZ-MUU7W0AZAdj6oDsuIfkX4x5h4TfenNSxrS05dPfytQZbMTA179eGkJuW7AZcTF07oZc6fua-d4YuAfMr9XovrZIDJjVUJhHmw_73uC_L39SZ7h2qwiiti8e4G5iLEg3Q_CeAXsvk2UG_BKa0utRHoeIBnTbjxn-z8KmCYIW0LGQm8o3DY8FPcVnFrOJA-DOEO8WKMBkJ3iWUrmNpgfmXNFUYBVwK_y4ZrUByyDN6OMts5qNjKBhlrYQCJaGayqquP5nB954cN2L_rG1YA4pADYgVABOqCOxlDtwaIQbxUKkLJ_4hjxHDWxgGkK5nltb9pp8FKdqjoVKzEF3kihAzFo3hZCXp2Kr3Yu23mxzOAL_bjKLuxy51nS6gJv7-pghdylhsW72mcx-M1Hq_pygju0ck4woMr3qoPMKA2YpuVEJTw07B4RbqsZYzlunU925Z9sQBoQTOHgrH3fT5hTt3e9jpIlZphXlP03nn4pd_3IurSGkQbzVAHibeP_SN367WnwOk4ylK0tiUc6lKsCuXA26b7-JgqmDDTKoDNpVtJAJ1GBjzxq6gyH4MFcgddoHd5h-mR5o0WBBSea_8_e2hjCWZIgvHzYcdf0ngM1_RJvbqc4sRG9eMwO5EgHD471Id_lYaCfWs18ICf8qr1uk9kW17xsH8esqqAZqth7ISnDmIrOqF_g3lBILl9-Hg5BDtge4ZFCd0ohZKGmrWLguOkntTEopdI8TIV9zMe8hqTLX2wuzK-FOkYmc4AS2Bx7WZug6bZjFnNzbtxFE4i6q5Yz39gzSKh5DJlySVlKJblUX9yey_5A9VK3HY8liUlmOO_eXJ1efibzVP3HlyV0OIz7eXI44m2wWIfF_BWpE6n0LYWsCfuwUV5II-f0HUS4NhgysGfZX3TXYFzE1IuSI4OGcKQ8l-u63RAGi_5HdfWbZxrzh1ZT2nfqUNlZMhXjiii6PaBq_2k9TXeaIN-dY2fcgfC19bKl_ylripRXT_fAbgApX41iWqJiVIWmwPeQkJEhXHyjkYbMz4RtDbFtz-nR92IF5LrlFbRX-49moeti9a0uGq6uItv46OxgZH3zcT68qAaKeG0BATcf9Krp8AwVFnyxaXuLccB_uFIg6bWv8h39QbalHsEjGnLLIp8UVSBFRbQFdrdR4F6cflut_WeibsGXKv6Xv3vlrcUWyzJCNDiOCmuEnDLk3JPVEghBztT17KmIYe3gxulK8VaDyH5iNFidjZaJVx3aIw996S1KbM2l3dBWiTGUyLfX7cf5HOX1bIPiK-unR1ZrulIe3Bos3U6gFjUQGjEnshgrkggKkt1GV8UjytZe-edcP1x66vefCz_9w1C0mEFb0cZ8kTxjRD1bqMwZoyOtWAiaw_K3c7cmlgH72-CgApdnbOY9TwI-dTX_ZbsX20nyk21C5jAI1IDbvTv1MOwiSph1KKTO0I3rxcL_CyZafiDF7Scvr_fGK7bCcXc33KxmAQkbZJZe9HAhPkjzVpt5u2p9VdCUr2ValHPFVohmwZPkvnbuviw2BptnHoiT-QH_AVFKlwRXM7plnxOcBDPgTfLINRW8MOjlqfCXXONtVrZ_i_ZUaLEwGL-O6SjGq9blKqd6NbeImvIxDqsuMhNvKDg_8-E-Yc9cGMHVZbUKhmZjCPZn6TcPAuBdl8XCwE2ROu-UiH8iQt4M62fSvfyeKACErXFEb5zJ_R-cA8CvtnIKb28hfUI6quII-TVtWEzmizlZqwTluAlzBy_ZcSjrdloSVtaVegCFGAnZmLH3h11-oo6tQ2C1sYEDeVg7hYk-abfczHQc3lkHlY5iwDI8UApPPpC-UHgvUv7T6AUQwMCphRy4meTwPb-NTl8f5m9oC8dzw-ZS6F_kugox_9mG4xWJc0TaEm6ifwNvWLVEA1xTr2ws4MOLLK8euD6LhkBbd3dPDAmikZQTPEIvaNxp6Coc-ckbi3Nvk-YjvuNYSROSeYiXSCova-nY2_X9ATTbGspgG1vctzVWztbeJK3ZNO61NDkvtHC8yVPn-Re7b7qTm5NPxETZEzAJCFgfuB7R55amxEv8bLHk9U6zGaunEWPZaonPtLOFTbCLY1UbN861t--j68hm3LpkAPA6C1VNNk5jvWgM0_FbtEGAsw26_2UetmbwUkgkw5fmlo1uu5tptHLl8mgv-tvamaU0tlwJKs9nH_hS9lBTboqySOtiYb2aVJqaeZwnxmCtgaQy6dPfYUzcOE_aq0-qeq3QEr5pwn8PHJoSAayVderRoMuOzCTToevSdqUd33PdLNyIMnwtut74UTqyfGvI1HV-Mpz7HOEH2sHr8nYNXnwqKTQp8jaluKWvaegwQqiMdnD2n5CH0HnKa0sq1uTcknJcOgnKd_q-5JYWER_xDLU7drRAX8RW99dX0g2mQw601xRBpiRG4k-cEB3ihqrQxO9OI_TjREOJfUSGFH5YpD5bwqC3lwH4pHF1M4E1_w--reua27_KnCYhvx9obObo8rtfchP9qC3ME-M3qRNCMcYUjQGARH-RPa3Ud1B0fsJpRlU5FJZomzPShL6YDue6Q1GOBkIqsIJca-tkIqdT2qxFmSGR5c4srMTJc4-TAkZzzs7byvyJnNWlqPXXKqMLXH5WfRbAkrYzurc7Fa8eG68lrqK5HI4M99S4Q9TArCNmjIGanqhTkCe5Xk_bdcQN4Iw8CmCXrbv7JuaB-09T0Oqs9c8RWMhzA9XQHpUXK7rtnO7KVurGIjt64vb-Bwv-lDXzGdhmLdUMagKZRCnN7-fpDFAd_OwbzfiKkxXDFqNsqdeTry97TvMboZZlR4JBzSofNnXfImE8Z9eWRXw_BK2DwUiyWp9ZJVzfIHg21u3JYuoOGqUvnIoDPCyYIwZ8_kVv-8Yvql7M-Pt18GjQK7DbLeM-VXRKVFu3feg67VL8JZwQrpia03YoZwDG6oiIKQT82RAFr_pOq-M3NT2nnXJdpJ9GkN8lsBCOo0Bn4Ymo7sLwQTHT9o6Y_xuf3Ty3S0-fOtcppo6ZdStFZAYUAyXs61FZJJ9lWJLdFsqkjhL40kzrXmX6g-Ey2GzYfyNZ_LDpujH4S9q_qiMW9gYX0j0aPnmwRXi8rErA4FABe13Qd0KF6MV8VenN7jM16qxqlI0fw97pUZT7eW6lzftnELX72cLGN3TIu51ZBQxSTnua391_OlVlzthThWmUD1w3vQDmk_wSUruY7IMAF45Bf_H0SB4rBevOGIK7mvgh2HecNWk9XLERIF_tBdShR4BgqLAMdz5AZC3bYSS-i1PP2J7CR2RqQUybtVriGGFAWRMTCcCqLtlrr1-ViwFKSd4BDQZ3pk6LIBPEhRw6GRxswBgufGsXU0iISU4KWL5pACpmtuU8yv9PC7hSlD0M_aBo2mMi8Ht3bj7bPoxw6949uAjOFphgcynWjWh4Jc_SOdnKUouZQY7A8E0Xp-BR4nTNGRsjD-wAAHy8a4rfJQ8uqbeZo_c2gK-rmsf8p2ghPF-rGC5KXmmv1i_QM-N0swkwa7B5O31BK14fRLi6qp5ipaFvmvsY8ozGRhqMFXfznucDrszbqwQsS92kuHj5Z1b8KjixjSWFlsrXooRbyr-UvvEC5J-ZOcPtB1vM6s3T-u-m_A6hLhx7GpfTHTy3kgd_Dhna1qES3gNs00Z8pcqGQJFrXSnDAgQB7-PeyEh8dONBROdRgxryhXNqVa_EtuMZg9kACASSPnMFsxH5L_dglqTa_gsANSjsM3zAzEgs-Er6pvBkRdfFhEhbjqyK5hIsohGKoCvM6e-CmKGEHOV3xmdUAxTxHErD_PVuVbm-bpuPryPEhuIgXm31anKDOVPXlG13YJpYqZcvBOVMD1eWbjTvyayq81ihOdTp62mv_OnoCovSE_U9qqGhAG-pPk9i_or3MTNDIFhA40ib_sEfMbXEkykqqV4zxDkPdUBaMY1BM5gQXPlint99AeY3rFCSoZWjOTJfysnpADvN_hA0nsSgOaJWlLjKJ705yY6Gat-sOKAg4BKj1uiWQzt-TEFC7JFy50nOrMb9QMir1mGZ9p191BjHM6jM34hZvIJc3VP3jhYx9ggIP8FB419EbWzHbGH79SHUyvHYYPayZO9O76nXFKbJIMsnMCu2L3bOzKFjU64PM_wxWD4t91yGB-YzF-YNEAGj_VV9uccvev7hhdjgRZgGvrrofJ_8KmDXtQ5f9GZ-7omAAaJFngAE9YL7QYUKP--q4sgqbtiJOSXU2gT0VgPC6liC5re6I_oJ9TogTKmIX1PAhlf9uUAvUkcRK19VTu7_UC7mUJB0QYRAqW7LymwJOH8s4NpiCAURlIOdbTXk3mxwn_8qFYsfCHERJzTHJMV_JzdZOlhooLS1tXI9xA6MxTJdnUBJz1uJYVfAKLLxp3N2tMpbZHIrFi6OneJFJ2lyT-DM2V3-qFS7Gjb6Tz6s97RAhqpJGyTE8buVthC7YbKLxIaNUyJnru2dr-VEDCuwrUVfkE-NX5ak1tfmswd-fv8FdwuK6icRyV1wh7ZODkO-M2BWLCdQAJRmnxb1bXz3uxoWQJ_GmY2265Lsczv4AwUobQleQBXiU2h-z7fBEuLhIN9PFRZaYZ9rpVdRRA-JD5loj3DngxoMMHaAH73knSvlvJqUzdVjXBjBX-yTkDS42IBr3vEGjhG2_vPJ-wyxTZ5yiR3Ifvq0rQh_BWi3ag4d5M5pbXRP2__yqU4GSJUnjzWhLM5MPSVwxfaDEN-7ufT5SMiCLC52JbgEGQKkfGDZzmsUBmxtOlNmuwrVxwdNE1KMHbVsIkiTstA8i7chE_lo5UT9d8FGtCJhANI0Ef0rzuASblzVPi2acoLlBipmtCOVAgr65hAPWoaoKWtTUDuKgPUQFaoIGDvzD-POZgRFN001C_TA5MJ67H8ROF7STKjpxAHzDm_Pb0_l1xCTld8qQzUnsK4eUdD-Sh-P0hUm7V0pRvEcd2WuI0YdbfKk7XEpKipP62jhr91WegB83TAvRyv-Zbfxh-MVeH7BoQfR0UokeGXdQWEL5hTUzZ_CR2k3WhGOYlyvXSM8841E2C2oI1bEGzwGZroMnHO6i-qV_HA62DN72YgifvaT854TAJCZvDGh1tcvs3l6otC7ue_-PoJZrTw0tEeC4vteH2CUFIF11NuV6pLV2b78CVdW48PNJUZW8t25xv46BQ1eZQjbVj3Y24fzpJWXBFN-cpmqYEhfl0WEMuZza00zat1VCD_0_jgnPqi42bUikVwG0RUQ7hzojche5gSdaGFWmIc4ggjHcIC5Y2vwoDydMqQST2vG5KRWBjFEOwHszCWkXrJ6AwNQDux4UaPl6QfG7Yl6KI_sULawuTu_xMuPkXSYdWQus4X8A9rrc6phxAQFgtBG7U8qCBAxeaMDwPzONUmGsoYNFgfyfHi9e2x-_9fAALJZVJtYj56g9MQW9peG67rJkND1kpygle04g6ZmNFr3bhlkTa0qUkSRaEzusGA5vNKOEYhpLnOBM-ATtEXJ2pDxi5BeRNRjAQAKB7pJP64wW_RT1qRZhLokVZhT90-DDrrMbbbMLDx1g0qfsgD8YE7jI1mBjsPxOv7ZKXUw-xBgLrp5j1_cr_wwNiduYmS7h_dYGWN5m-SI-E9zgCRJ5cFhz6M_gTBkrSV0UNGwwg-qj9gYpFSdpCF2pxYzi4Xazg-1kuwTGQjd3VDmzKlg4EyvlsQ4JLSX1quIRLvE3RCjuSnJUU3LBnB2NvrFKsjTE_TOIvNFtCO-w7_iQQY4glZjIGeeUbnH62lQq08UfedamO3GU3nhBGV_JTPRmfxVqXhARzHPgcORhOjN_nSf56ypPOYmQVSXwm-9lFKGRpCNIRASnoQU9_fZ1Ttveg3FPMo97KelVE9ju821kEFlXqdauTSPEy0wbTvFuocyuWqp7zv4oCReFSChwtbCAzM6tB06fMW434LW0QFyjzMZsY6U0gYtW-b7jxOJBGK2LQ3n4U6JbKIH30nf-rRxO_-hpZE5dDPQRTRIkROxTz8Ql7as6hf8UGv4d0VnAGKxcc01E_EC6NPkFLzKGYVi4_Am61s70EkOQmixlSR1biPQVJImfA-BfCbSrHtdSATNHADUEjx1M-bqnWaJFJuTzed6FcR9Z3eKVH6QLaazzo-NhPMfy4eyhvRc7I2sQ_1ELPV9ARWGKczN0Be2wj47JFgQWdR6gpqHFJVSctHqfWy-YYyrTvN_y4GXJyCs1JvnE0zjjxR6RIxI0miCNOH9t2bazAHQFqrB99dMaITIWS6Aet-63ogj0aDAJ-nqli5eknI8nlTZrpoWGdyrMmw-Ju7qAPMu6W3C_mkS5UsU5h7HOxkqcjyeeVK5pfnreYa6kdUtPRKi5NnO3-4I9wyXIvfQhv1a1VSbwVv_pboK4hk-yjpSzjzm8BpI7HA4ylTjcpS2kcdXHLwR1JBOhOq7vFhY3C_ahT4LOAeXBE3L-OjXLVfhkhW5O1qISIwcyP8OnhesMxPsSI9kM72Na2nGobprna7Hb-lVvKF0xvt1nhr1xiYNcsOAo4AybISQBPLK61fGTcKnld0BiX_h-xw2rlaJx8XHkqCD36lwvsPEEEDQfBjXPON70clt8l_qoIx_ptZwzCUWzVMVP-fj-7DZGsZNuaXJIdgVXYBiwNb7zEtIJJ8tjMuGfRJRhcWk7Of511PBFHxczNI2J-quME2FfrpcoCYBupVUs39vL9gg6ElSgx0gujel6OPijDegI9msg6xe_oQd0Mtp9IpPk2TKNKh5jk_8vr1in2Bf1GogrJams0w9jtbaPcg769X992MDM88BQm5HiUmw8oQntbEfa3j0ru2y65biA7z195BXS3n6K7rMqRDGiliMvXO2xNaD8ieZHxn2_4Mqc0deCgh2ZZGragayij6rhTn8VLak3JiQvYk3SxQx17OF1sFO_jPEzjVa-SAdGO3qXgpFzAGAd5EM8l9v8D_cMKihm_jAyIMBDO4xpLTq1psBC3RNNXNkIQLC6IqhmPgUaBohITgMrcn66wAK14QKaM62HiVmsmJjU8KMteFSFDfbueSUu9hL2JJI2WO1EWjdCAd4kaSuV5eNi8k7ECPRBgOFD4EAyKZi086fVrd2qxC_HbgXkAWtPybCF3UuyJznQeuze6GPdvmjsar41AOBy69uUzRA24Si0LQka1sxynBrK12-wzB_Ynd7UYXmks3qIJgvvMQKnqDkJL1STOCuDg1aRHRQs_sa0yaSDD3Qh02dcsUY2UUwmj30q7WUOt4tTog5epoCAuNRI9kZXpVMMI8UbB9kSlxUxXHpl9B4HU_wGXWVMNoATty1Cgp-Gcw6THiQ--t6rEtlexodKs75Pdh8iNGmH_JgG1qvdBpSf_cEU7h0qKGWDWugccibenz2Levgsm2WNuRglmcA2DiU_8gOPYVCHXAmk8KZPWfM1nCf-qDC-BPDB0w9Nm1w_ombDdtO74-EAjdxkKzZfDRzeb1PBdIIAo1SpYXK-Bs9zApyvonwtcv-cgoWUYN2VsWkqPqunUT0BJXP_q9BzRvym68SEVHh0i6MboY1Z8bfY0bUetGq2kL303FW8jghdbwTv8guHGD3h6VgmPUHbHRnU0zla9oVqR3mzGxGGsiViia4Y_3sopugDwbJO9LyAYlWOg_1vv49wruIS1BV7FGpRAY0x83HCJpKGt52icgIIhbr1ZZCAXTYsatU5C-U6XDxpOOnN-JvyCs-fqUMUOsvh9E_noCq4mRWGSHY3XuYX_7q-n1KoEVGHZmQ96cyTgNnh3mksNjuixWkjuqHxfBFXxoBM94BVWxqi8GQi_kAo7FqFTms9W9OmET4cGcu-GvHmD7ChQsmGM9wKPuKCDlibra_FkHB-vgI1B7qeyApYNfue7vPdNH_Ktm6VzgZ9bbqvFwf5PmbdPaD6IRsK365r8KyyI1bjqkMAmIRM88TGlwK4GlRkZu1Ds3Q3mHS7uyfMhUeQ26U6lnc_EsvbHNyF0m7gzxbUbW6oVMcYtO5XTiSHxXShfRql0a4A3C-n77cXJHpV_9iwkVQw0ud4agIFrt-uCnLZ1gBEx6Vo03aoMsCTjIRrOdjAVNp5k7FuHYAFJ462Dl5Cq5oEtg664B7OxDvRRE8N5QP9qTS9hrLW_NjeIG2YZK-y5H1Ra0XXKrjIbRyEAEN4CRN91hs0Bf_0FmOuUaCVBMEiG4mvNF-WHm6864MyzR3URqyi9KVZCx3xxoXl1pR_d7vIOoWsVp7o3Sz1nlSo2NUXE54TpSM-pfj_2rqLph7VI1dDtuD_D9TNUkxd3EA6aV9Glt9frcNxE3ZUFOHqTikpQkyCyrMX0FpoFV1xoHfOJCtWtalHFlSfaPspzCQ7estNANZq0u0Ptnsr2IBIODD4wivr0rOQOKqgaXkConX1oQNkQ1kwVkGPHk-u1y00MgstXEphwdTvbXtFcaN6BkTwk5KGNL9r9JTc396ooy7pCUSmSQdWyRowIBW-KfUK0e1UVtFL-HjE7CM3bcYTPccK6QqKbV2-RGmoY8J5-GO28hVuKzG3a-KsgUKS7Ab0ln6D0Q-0MpqW3qjwYjKcXAA8TzzjQzOJKfl2hJZ1GcYv_4luSfRLZMITUysmAKvsJDSWOm8KQT9KgcmlCk-8gnouL33FqZnVA3g7VbRPq_cHpi0xfYbXMaUVPceTuoP4RcNFpPdT3DFq9IsfdzWMrI9a8CAbg5I8mrKsDwl5ZS8GyzAHGKwx9aM1qHtarxfVIrEmeFZccBYJWdeLikta3ZnhKM0Rlm5ITggdmoeSQlVYRSs6K36dHQQ3MAh_MbVOVswvfEXU6AzxXXCNryeEKcNgQ1G8UgunECibtUYiMfNOgcH6PVBayhIeqqob610lsPoV-57E7UJ_05FdVUbFBo-14S2ZllUVETP61ORE6noeCHw_hfgzlY1MgKDlQSs3JMtec9u3ay534dKI6wogmw-_at3CGP7QSXeXf82dqp9lHB0i7ARL2Ev_VKiknzHCBm_Qj7G4nwPxLC9LyDNQhtOimGJMKNfpEFfkn4tBuWGzUnlS9jqG7rfdRonIKAHjePUewSn3HTguSdorsv80z_WdJ_YR71IV8IxTm-prPDBGOia5reMpSdDYVNq6cRYfEZ2rw2Dhg8WysA8lOyn81EkVtejaEA_P_j8KdpnVwcCTMGy5m7-2C13LpFD_pHcm1zwNcGDwIm8PvAcDngb5R3V8k_PqNThkxrHUo8B9m-smnrjw7D6hk6jnTFyTI-fJUffghH0mTpK_LOenQN21Laj6vxNCw2oom73rHBX31Tfg-ecS2WLyB9fuVjWd8RnYi3c6mVsFacQAxDgJPryxYtNyKrAM2a6vf8qG2f5yK8huDXmCB3T37VHS772DcgMFMG1kzNdJsxpGPxzC-2Qx9WzFfBzvVP6DZuOLx0i_8wEk6mIM5WDhh5jZlVMCtb4fU1ou79d0IoezIxN6NLxtKCk2jifYAlhe6ObvroFpe9joQUlN3ogyQoSzMW4cySl_jTFFgi9173qLb-ggz5nQgX0Ivj2ynx0_8fx1tQi8gIjHFlnZqQHDj-CXp0m_340bBktesNd-hRyPEt3UnrXstTQ2fbfVGQEMIZ2BdT6f9qvUpRW9XaaHUCa7OVwdVZeSO-AyCH8sk0H-JcqMgMMPfezaC6np92v9Bu_qh9D7kpeiFVyspzqPgrzx-t1PiMWqzUGq8dJFhm26XH7PERN1wODsth2JuYwsiWrMKT-EsCYaqPU8wjE81wTS_DFJJ8K08El_Brf3lHYMo6w0azbgc1pXbqnD3yhfavcVvBxynMrH29Sk1gheZlm68rtOSV0_s6r14cFKQwTap45biyx91uieN3rUtVVwEo2PvmjpP8uuv6ynpvE4zYv0TXLXB79v5Ib47V0lm5l9Qlkx0-vD6EOT2JglScE_lJXqVsF8jSQL7_EfSSCTjmYEDbj3tK3P6gzd-Bb4v_NDxCS42dnbd2Tq1mhejPYJowySd2JnNErMKfQZP55PXWQ.nuq79cVkKd63mjjM4Ak6HRaAkEGKUbU-GQCVeAI8SCk";
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
