import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Message } from "../../../../../src/domain";
import { Mercury } from "../../../../../src/domain/buildingBlocks/Mercury";
import { AgentError } from "../../../../../src/domain/models/Errors";
import { DIDCommInvitationRunner } from "../../../../../src/edge-agent/protocols/invitation/v2/DIDCommInvitationRunner";
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
