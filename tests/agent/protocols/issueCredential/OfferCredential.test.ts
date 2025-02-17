import { describe, expect, test } from 'vitest';
import { OfferCredential, OfferCredentialBody } from "../../../../src/edge-agent/protocols/issueCredential/OfferCredential";
import { ProtocolType } from "../../../../src/edge-agent/protocols/ProtocolTypes";
import { AttachmentDescriptor } from '../../../../src/domain';
import * as Messages from "../../../fixtures/messages";
import * as Fixtures from "../../../fixtures";

describe("OfferCredential", () => {
  test("Should create OfferCredential from valid params", () => {
    const body: OfferCredentialBody = {
      credential_preview: {
        type: ProtocolType.DidcommCredentialPreview,
        body: {
          attributes: [
            {
              name: "test1",
              value: "test",
              media_type: "test.x",
            },
          ],
        },
      },
    };
    const sut = new OfferCredential(body, []);

    expect(sut).toBeInstanceOf(OfferCredential);
    expect(sut.attachments).toHaveLength(0);
    expect(sut.body).toEqual(body);
    expect(sut.from).toBeUndefined();
    expect(sut.to).toBeUndefined();
    expect(sut.thid).toBeUndefined();
    expect(sut.id).toEqual(expect.stringMatching(""));
  });

  test("Should create OfferCredential with attachments", () => {
    const body: OfferCredentialBody = {
      credential_preview: {
        type: ProtocolType.DidcommCredentialPreview,
        body: { attributes: [] },
      },
    };

    const json = JSON.stringify({
      options: {
        challenge: "fedac0c2-3250-4fb1-bfcb-b5e904058e1f",
        domain: "domain"
      }
    });
    const id = "321905d1-5f01-42b0-b0ba-39b09645eeaa";
    const format = "JWT";
    const attached = new AttachmentDescriptor(
      { json },
      undefined,
      id,
      undefined,
      format
    );

    const sut = new OfferCredential(body, [attached]);

    expect(sut).toBeInstanceOf(OfferCredential);
    expect(sut.attachments).toHaveLength(1);
    expect(sut.attachments[0].id).toEqual(id);
    expect(sut.attachments[0].data).toEqual({ json });
    expect(sut.attachments[0].format).toEqual(format);
  });

  test("Should create OfferCredential with valid optional params", () => {
    const body: OfferCredentialBody = {
      credential_preview: {
        type: ProtocolType.DidcommCredentialPreview,
        body: { attributes: [] }
      },
    };
    const from = Fixtures.DIDs.peerDID1;
    const to = Fixtures.DIDs.peerDID2;
    const thid = "test-thid";
    const id = "test-id";
    const sut = new OfferCredential(body, [], from, to, thid, id);

    expect(sut).toBeInstanceOf(OfferCredential);
    expect(sut.attachments).toHaveLength(0);
    expect(sut.body).toEqual(body);
    expect(sut.from).toBe(from);
    expect(sut.to).toBe(to);
    expect(sut.thid).toBe(thid);
    expect(sut.id).toBe(id);
  });

  test("invalid body.credential_preview - throws", () => {
    const body: OfferCredentialBody = { credential_preview: {} as any };
    const sut = () => new OfferCredential(body, []);

    expect(sut).toThrow("Invalid offer credential message error.");
  });

  describe("fromMessage", () => {
    test("actual PrismAgent Message - instantiates", () => {
      const sut = OfferCredential.fromMessage(Messages.OfferCredential);

      expect(sut).to.be.instanceOf(OfferCredential);
      expect(sut.attachments).to.deep.eq(Messages.OfferCredential.attachments);
      // expect(sut.body).to.deep.eq(Messages.OfferCredential.body);
      expect(sut.from).to.deep.eq(Messages.OfferCredential.from);
      expect(sut.id).to.deep.eq(Messages.OfferCredential.id);
      expect(sut.thid).to.deep.eq(Messages.OfferCredential.thid);
      expect(sut.to).to.deep.eq(Messages.OfferCredential.to);
    });
  });
});
