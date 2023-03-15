import { expect } from "chai";
import { Message } from "../../../../domain";
import { AgentError } from "../../../../domain/models/Errors";
import { ProtocolHelpers } from "../../../../prism-agent/helpers/ProtocolHelpers";
import { Presentation } from "../../../../prism-agent/protocols/proofPresentation/Presentation";
import { ProtocolType } from "../../../../prism-agent/protocols/ProtocolTypes";
import { PresentationBody } from "../../../../prism-agent/protocols/types";
import { DIDTest } from "../../helpers/DID";

describe("ProofPresentation->Presentation Tests", () => {
  it("Should create a Presentation from a valid PresentationMessage", async () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);

    const presentationBody = ProtocolHelpers.safeParseBody<PresentationBody>(
      "{}",
      ProtocolType.DidcommPresentation
    );
    const validPresentation = new Presentation(
      presentationBody,
      [],
      fromDID,
      toDID
    );

    const presentationMessage = validPresentation.makeMessage();
    const testPresentation = Presentation.fromMessage(presentationMessage);

    expect(validPresentation).to.deep.equal(testPresentation);
  });
  it("Should throw an error when invalid request message is used to initialise Presentation", () => {
    const invalidPresentation = new Message("{}", undefined, "InvalidType");
    expect(() => {
      Presentation.fromMessage(invalidPresentation);
    }).to.throw(AgentError.InvalidPresentationMessageError);
  });
});
