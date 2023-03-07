import { expect, assert } from "chai";
import { Message } from "../../../../domain";
import {
  createIssueCredentialBody,
  IssueCredential,
} from "../../../../prism-agent/protocols/issueCredential/IssueCredential";
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
    assert.throws(
      () => {
        IssueCredential.fromMessage(invalidIssueCredential);
      },
      Error,
      "Invalid CredentialBody Error"
    );
  });
  it("Should throw an error when initializing an issue credential from an invalid message", () => {
    const invalidIssueCredential = new Message(
      `{"body":{ "formats":[{"wrong": true}]}}`,
      "any id",
      "invalidType"
    );
    assert.throws(
      () => {
        IssueCredential.fromMessage(invalidIssueCredential);
      },
      Error,
      "Invalid credential formats"
    );
  });
});
