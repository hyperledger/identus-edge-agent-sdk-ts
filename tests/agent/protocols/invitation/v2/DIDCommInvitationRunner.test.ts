import chai from "chai";
import { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { Message } from "../../../../../domain";
import Mercury from "../../../../../domain/buildingBlocks/Mercury";
import { AgentError } from "../../../../../domain/models/Errors";
import { DIDCommInvitationRunner } from "../../../../../prism-agent/protocols/invitation/v2/DIDCommInvitationRunner";
import { MercuryStub } from "../../../mocks/MercuryMock";

let mercury: Mercury;
chai.use(chaiAsPromised);

describe("DIDCommInvitationRunner Tests", () => {
  beforeEach(() => {
    mercury = new MercuryStub();
  });
  it("Should throw an error if invalid invitationType is provided", () => {
    async function run() {
      const exampleMessage = new Message("{}", undefined, "Something wrong");
      const queryString = await mercury.packMessage(exampleMessage);
      const exampleURL = `localhost:8080?_oob=${queryString}`;
      const invitation = new DIDCommInvitationRunner(new URL(exampleURL));
      return invitation.run();
    }

    expect(run()).to.eventually.be.rejectedWith(
      AgentError.UnknownInvitationTypeError
    );
  });
});
