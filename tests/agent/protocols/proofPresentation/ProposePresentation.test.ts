import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Message } from "../../../../src/domain";
import { AgentError } from "../../../../src/domain/models/Errors";
import { ProposePresentation } from "../../../../src/edge-agent/protocols/proofPresentation/ProposePresentation";
import { RequestPresentation } from "../../../../src/edge-agent/protocols/proofPresentation/RequestPresentation";
import { DIDTest } from "../../helpers/DID";

describe("ProofPresentation->ProposePresentation Tests", () => {
  it("Should create a ProposePresentation from a valid ProposePresentationMessage", async () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);

    const validProposePresentation = new ProposePresentation(
      {
        proofTypes: [{ schema: "testSchema" }],
      },
      [],
      fromDID,
      toDID,
      "1"
    );

    const proposePresentationMessage = validProposePresentation.makeMessage();
    const testProposePresentation = ProposePresentation.fromMessage(
      proposePresentationMessage
    );

    expect(validProposePresentation).to.deep.equal(testProposePresentation);
  });
  it("Should throw an error when invalid propose message is used to initialise ProposePresentation", () => {
    const invalidProposePresentation = new Message(
      "{}",
      undefined,
      "InvalidType"
    );
    expect(() => {
      ProposePresentation.fromMessage(invalidProposePresentation);
    }).to.throw(AgentError.InvalidProposePresentationMessageError);
  });
  it("Should start a ProposePresentation from a valid RequestMessage", () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);
    const validRequestPresentation = new RequestPresentation(
      {
        proofTypes: [{ schema: "testSchema" }],
      },
      [],
      fromDID,
      toDID,
      "1"
    );

    const requestMessage = validRequestPresentation.makeMessage();
    const testProposePresentation =
      ProposePresentation.makeProposalFromRequest(requestMessage);

    expect(validRequestPresentation.from.toString()).to.equal(
      testProposePresentation.to.toString()
    );

    expect(validRequestPresentation.to.toString()).to.equal(
      testProposePresentation.from.toString()
    );

    expect(validRequestPresentation.attachments).to.deep.equal(
      testProposePresentation.attachments
    );

    expect(validRequestPresentation.id).to.equal(testProposePresentation.thid);
    expect(validRequestPresentation.body.goalCode).to.equal(
      testProposePresentation.body.goalCode
    );

    expect(validRequestPresentation.body.comment).to.equal(
      testProposePresentation.body.comment
    );
  });
});
