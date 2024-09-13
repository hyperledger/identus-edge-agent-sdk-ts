import { vi, assert, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Message } from "../../../../src/domain";
import { AgentError } from "../../../../src/domain/models/Errors";
import {
  createOfferCredentialBody,
  OfferCredential,
} from "../../../../src/edge-agent/protocols/issueCredential/OfferCredential";
import { ProtocolType } from "../../../../src/edge-agent/protocols/ProtocolTypes";
import { DIDTest } from "../../helpers/DID";
import * as Messages from "../../../fixtures/messages";

describe("OfferCredential", () => {
  it("Should create a valid OfferCredential from a correct OfferMessage", () => {
    const fromDID = DIDTest.fromIndex(0);
    const toDID = DIDTest.fromIndex(1);
    const validOfferCredential = new OfferCredential(
      createOfferCredentialBody(
        {
          type: ProtocolType.DidcommCredentialPreview,
          attributes: [
            {
              name: "test1",
              value: "test",
              mimeType: "test.x",
            },
          ],
        },
        [
          {
            attach_id: "test1",
            format: "test",
          },
        ]
      ),
      [],
      fromDID,
      toDID,
      "1"
    );

    const offerMessage = validOfferCredential.makeMessage();
    const testOfferCredential = OfferCredential.fromMessage(offerMessage);

    expect(validOfferCredential).to.deep.equal(testOfferCredential);
  });

  test("OfferCredential from an actual PrismAgent Message", () => {
    const sut = OfferCredential.fromMessage(Messages.OfferCredential);

    expect(sut).to.be.instanceOf(OfferCredential);
    expect(sut.attachments).to.deep.eq(Messages.OfferCredential.attachments);
    // expect(sut.body).to.deep.eq(Messages.OfferCredential.body);
    expect(sut.from).to.deep.eq(Messages.OfferCredential.from);
    expect(sut.id).to.deep.eq(Messages.OfferCredential.id);
    expect(sut.thid).to.deep.eq(Messages.OfferCredential.thid);
    expect(sut.to).to.deep.eq(Messages.OfferCredential.to);
  });

  it("Should test failure when invalid OfferMessage is provided when Creating an OfferCredential", () => {
    const invalidOfferCredential = new Message(
      '{"body": {}}',
      "id",
      "InvalidType"
    );
    assert.throws(
      () => {
        OfferCredential.fromMessage(invalidOfferCredential);
      },
      AgentError.InvalidOfferCredentialMessageError,
      "Invalid offer credential message error."
    );
  });
});
