import { expect, assert } from "chai";
import { Message } from "../../../../domain";
import { AgentError } from "../../../../domain/models/Errors";

import {
  createRequestCredentialBody,
  RequestCredential,
} from "../../../../prism-agent/protocols/issueCredential/RequestCredential";
import { DIDTest } from "../../helpers/DID";

describe("RequestCredential", () => {
  it("Should create a valid RequestCredential from a correct RequestMessage", () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);
    const validRequestCredential = new RequestCredential(
      createRequestCredentialBody([{ attachId: "test1", format: "test" }]),
      [],
      fromDID,
      toDID,
      "1"
    );

    const requestMessage = validRequestCredential.makeMessage();
    const testRequestCredential = RequestCredential.fromMessage(requestMessage);

    expect(validRequestCredential).to.deep.equal(testRequestCredential);
  });

  it("Should test failure when invalid RequestMessage is provided when Creating an RequestCredential", () => {
    const invalidRequestCredential = new Message(
      '{"body": {}}',
      "id",
      "InvalidType"
    );
    assert.throws(
      () => {
        RequestCredential.fromMessage(invalidRequestCredential);
      },
      AgentError.InvalidRequestCredentialMessageError,
      "Invalid request credential message error."
    );
  });
});
