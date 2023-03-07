import { expect, assert } from "chai";
import { Message } from "../../../../domain";
import {
  createOfferCredentialBody,
  OfferCredential,
} from "../../../../prism-agent/protocols/issueCredential/OfferCredential";
import { ProtocolType } from "../../../../prism-agent/protocols/ProtocolTypes";
import { DIDTest } from "../../helpers/DID";

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
            attachId: "test1",
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
      Error,
      "Invalid Offer CredentialBody Error"
    );
  });
});
