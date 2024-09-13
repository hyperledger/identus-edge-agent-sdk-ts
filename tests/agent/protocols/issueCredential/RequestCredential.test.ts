import { vi, assert, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Message } from "../../../../src/domain";
import { AgentError } from "../../../../src/domain/models/Errors";

import {
  createRequestCredentialBody,
  RequestCredential,
} from "../../../../src/edge-agent/protocols/issueCredential/RequestCredential";
import { DIDTest } from "../../helpers/DID";

describe("RequestCredential", () => {
  it("Should create a valid RequestCredential from a correct RequestMessage", () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);
    const validRequestCredential = new RequestCredential(
      createRequestCredentialBody([{ attach_id: "test1", format: "test" }]),
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
