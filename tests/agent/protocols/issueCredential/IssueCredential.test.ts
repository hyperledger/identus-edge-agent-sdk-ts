import { describe, expect, test } from 'vitest';
import { AttachmentDescriptor, Message } from "../../../../src/domain";
import { IssueCredential } from "../../../../src/edge-agent/protocols/issueCredential/IssueCredential";
import { ProtocolType } from "../../../../src/edge-agent/protocols/ProtocolTypes";
import * as Fixtures from "../../../fixtures";

describe("IssueCredential", () => {
  test("Should create a valid IssueCredential from valid params", () => {
    const sut = new IssueCredential({}, [], Fixtures.DIDs.peerDID1, Fixtures.DIDs.peerDID2);

    expect(sut).toBeInstanceOf(IssueCredential);
  });

  test("Should create IssueCredential with attachments", () => {
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

    const sut = new IssueCredential({}, [attached], Fixtures.DIDs.peerDID1, Fixtures.DIDs.peerDID2);

    expect(sut).toBeInstanceOf(IssueCredential);
    expect(sut.attachments).toHaveLength(1);
    expect(sut.attachments[0].id).toEqual(id);
    expect(sut.attachments[0].data).toEqual({ json });
    expect(sut.attachments[0].format).toEqual(format);
  });

  test("Should create IssueCredential with valid optional params", () => {
    const body = { comment: "optional-comment", replacement_id: "optional" };
    const from = Fixtures.DIDs.peerDID1;
    const to = Fixtures.DIDs.peerDID2;
    const thid = "test-thid";
    const id = "test-id";
    const sut = new IssueCredential(body, [], from, to, thid, id);

    expect(sut).toBeInstanceOf(IssueCredential);
    expect(sut.attachments).toHaveLength(0);
    expect(sut.body).toEqual(body);
    expect(sut.from).toBe(from);
    expect(sut.to).toBe(to);
    expect(sut.thid).toBe(thid);
    expect(sut.id).toBe(id);
  });

  test("IssueCredential from an actual PrismAgent Message", () => {
    const sut = IssueCredential.fromMessage(Fixtures.Messages.IssueCredential);

    expect(sut).to.be.instanceOf(IssueCredential);
    expect(sut.attachments).to.eq(Fixtures.Messages.IssueCredential.attachments);
    // expect(sut.body).to.eq(Messages.IssueCredential.body);
    expect(sut.from).to.eq(Fixtures.Messages.IssueCredential.from);
    expect(sut.id).to.eq(Fixtures.Messages.IssueCredential.id);
    expect(sut.thid).to.eq(Fixtures.Messages.IssueCredential.thid);
    expect(sut.to).to.eq(Fixtures.Messages.IssueCredential.to);
  });

  describe("fromMessage", () => {
    test("piuri invalid - throws", () => {
      const piuri = ProtocolType.DidcommBasicMessage;
      const from = Fixtures.DIDs.peerDID1;
      const msg = new Message({}, "id", piuri, from);

      const sut = () => IssueCredential.fromMessage(msg);

      expect(sut).toThrow("Invalid issue credential message error.");
    });
  });
});
