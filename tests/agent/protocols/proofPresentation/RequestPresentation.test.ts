import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Message } from "../../../../src/domain";
import { AgentError } from "../../../../src/domain/models/Errors";
import { ProposePresentation } from "../../../../src/edge-agent/protocols/proofPresentation/ProposePresentation";
import { RequestPresentation } from "../../../../src/edge-agent/protocols/proofPresentation/RequestPresentation";
import { DIDTest } from "../../helpers/DID";
import * as Messages from "../../../fixtures/messages";

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

  test("RequestPresentation from an actual PrismAgent Message", () => {
    const sut = RequestPresentation.fromMessage(Messages.RequestPresentationJWT);

    expect(sut).to.be.instanceOf(RequestPresentation);
    expect(sut.attachments).to.deep.eq(Messages.RequestPresentationJWT.attachments);
    // expect(sut.body).to.deep.eq(Messages.RequestPresentationJWT.body);
    expect(sut.from).to.deep.eq(Messages.RequestPresentationJWT.from);
    expect(sut.id).to.deep.eq(Messages.RequestPresentationJWT.id);
    expect(sut.thid).to.deep.eq(Messages.RequestPresentationJWT.thid);
    expect(sut.to).to.deep.eq(Messages.RequestPresentationJWT.to);
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
