import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Message } from "../../../../src/domain";
import { AgentError } from "../../../../src/domain/models/Errors";
import { parsePresentationMessage } from "../../../../src/edge-agent/helpers/ProtocolHelpers";
import { Presentation } from "../../../../src/edge-agent/protocols/proofPresentation/Presentation";
import { ProtocolType } from "../../../../src/edge-agent/protocols/ProtocolTypes";
import { PresentationBody } from "../../../../src/edge-agent/protocols/types";
import { DIDTest } from "../../helpers/DID";

describe("ProofPresentation -> Presentation Tests", () => {
  it("Should create a Presentation from a valid PresentationMessage", async () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);
    const msg = new Message("{}", undefined, ProtocolType.DidcommPresentation);
    const presentationBody = parsePresentationMessage(msg);
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
