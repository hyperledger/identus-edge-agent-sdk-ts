import { expect } from "chai";
import { Message } from "../../../../domain";
import { AgentError } from "../../../../domain/models/Errors";
import { ProtocolHelpers } from "../../../../prism-agent/helpers/ProtocolHelpers";
import { Presentation } from "../../../../prism-agent/protocols/proofPresentation/Presentation";
import { ProposePresentation } from "../../../../prism-agent/protocols/proofPresentation/ProposePresentation";
import { RequestPresentation } from "../../../../prism-agent/protocols/proofPresentation/RequestPresentation";
import { ProtocolType } from "../../../../prism-agent/protocols/ProtocolTypes";
import { ProposePresentationBody } from "../../../../prism-agent/protocols/types";
import { DIDTest } from "../../helpers/DID";

describe("ProofPresentation->RequestPresentation Tests", () => {
  it("Should create a RequestPresentation from a valid ProposePresentationMessage", async () => {
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

    const requestPresentationMessage = validRequestPresentation.makeMessage();
    const testRequestPresentation = RequestPresentation.fromMessage(
      requestPresentationMessage
    );

    expect(validRequestPresentation).to.deep.equal(testRequestPresentation);
  });
  it("Should throw an error when invalid propose message is used to initialise RequestPresentation", () => {
    const invalidRequestPresentation = new Message(
      "{}",
      undefined,
      "InvalidType"
    );
    expect(() => {
      RequestPresentation.fromMessage(invalidRequestPresentation);
    }).to.throw(AgentError.InvalidRequestPresentationMessageError);
  });
  it("Should start a RequestPresentation from a valid ProposalMessage", () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);
    const validProposalRequest = new ProposePresentation(
      {
        proofTypes: [{ schema: "testSchema" }],
      },
      [],
      fromDID,
      toDID,
      "1"
    );

    const proposalMessage = validProposalRequest.makeMessage();
    const testProposePresentation =
      RequestPresentation.makeRequestFromProposal(proposalMessage);

    expect(validProposalRequest.from.toString()).to.equal(
      testProposePresentation.to.toString()
    );

    expect(validProposalRequest.to.toString()).to.equal(
      testProposePresentation.from.toString()
    );

    expect(validProposalRequest.attachments).to.deep.equal(
      testProposePresentation.attachments
    );

    expect(validProposalRequest.id).to.equal(testProposePresentation.thid);
    expect(validProposalRequest.body.goalCode).to.equal(
      testProposePresentation.body.goalCode
    );

    expect(validProposalRequest.body.comment).to.equal(
      testProposePresentation.body.comment
    );
  });
});
