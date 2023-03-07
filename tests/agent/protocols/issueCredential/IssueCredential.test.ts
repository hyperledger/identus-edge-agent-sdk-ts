import { expect, assert } from "chai";
import { Message } from "../../../../domain";
import {
  createIssueCredentialBody,
  IssueCredential,
} from "../../../../prism-agent/protocols/issueCredential/IssueCredential";
import { RequestCredential } from "../../../../prism-agent/protocols/issueCredential/RequestCredential";
import { DIDTest } from "../../helpers/DID";

describe("IssueCredential", () => {
  it("Should create a valid IssueCredential when valid IssueMessage is provided", () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);
    const validIssueCredential = new IssueCredential(
      createIssueCredentialBody([
        {
          attachId: "test1",
          format: "test",
        },
      ]),
      [],
      fromDID,
      toDID,
      "1"
    );
    const issueMessage = validIssueCredential.makeMessage();
    const testIssueCredential = IssueCredential.fromMessage(issueMessage);
    expect(validIssueCredential).to.deep.equal(testIssueCredential);
  });
  it("Should throw an error when initializing an issue credential from an invalid message", () => {
    const invalidIssueCredential = new Message(
      '{"body":{}}',
      "any id",
      "invalidType"
    );
    const invalidIssueCredential2 = new Message(
      `{"body":{ "formats":[{"wrong": true}]}}`,
      "any id",
      "invalidType"
    );
    assert.throws(
      () => {
        IssueCredential.fromMessage(invalidIssueCredential);
      },
      Error,
      "Invalid Issue CredentialBody Error"
    );
    assert.throws(
      () => {
        IssueCredential.fromMessage(invalidIssueCredential2);
      },
      Error,
      "Invalid credential formats"
    );
  });
  it("Should create an IssueCredential when a valid RequestMessage is provided", () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);
    const validRequestCredential = new RequestCredential(
      createIssueCredentialBody([
        {
          attachId: "test1",
          format: "test",
        },
      ]),
      [],
      fromDID,
      toDID,
      "1"
    );
    const requestMessage = validRequestCredential.makeMessage();
    const testIssueCredential =
      IssueCredential.makeIssueFromRequestCredential(requestMessage);

    expect(validRequestCredential.from.toString()).to.equal(
      testIssueCredential.to.toString()
    );
    expect(validRequestCredential.to.toString()).to.equal(
      testIssueCredential.from.toString()
    );
    expect(validRequestCredential.attachments).to.deep.equal(
      testIssueCredential.attachments
    );

    expect(validRequestCredential.id).to.equal(testIssueCredential.thid);
    expect(validRequestCredential.body.goalCode).to.equal(
      testIssueCredential.body.goalCode
    );

    expect(validRequestCredential.body.comment).to.equal(
      testIssueCredential.body.comment
    );

    expect(validRequestCredential.body.formats).to.deep.equal(
      testIssueCredential.body.formats
    );
  });
});
