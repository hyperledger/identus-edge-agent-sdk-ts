import { assert, describe, expect, test } from 'vitest';
import { AttachmentDescriptor, Message } from "../../../../src/domain";
import { AgentError } from "../../../../src/domain/models/Errors";

import { ProposeCredential, ProposeCredentialBody } from "../../../../src/edge-agent/protocols/issueCredential/ProposeCredential";
import { ProtocolType } from "../../../../src/edge-agent/protocols/ProtocolTypes";
import { CredentialPreview } from '../../../../src/edge-agent/protocols/issueCredential/CredentialPreview';
import * as Fixtures from "../../../fixtures";

describe("ProposeCredential", () => {
  test("Should create a ProposeCredential from valid params", () => {
    const sut = new ProposeCredential({}, []);

    expect(sut).toBeInstanceOf(ProposeCredential);
    expect(sut.attachments).toHaveLength(0);
    expect(sut.body).toEqual({});
    expect(sut.from).toBeUndefined();
    expect(sut.to).toBeUndefined();
    expect(sut.thid).toBeUndefined();
    expect(sut.id).toEqual(expect.stringMatching(""));
  });

  test("Should create OfferCredential with attachments", () => {
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

    const sut = new ProposeCredential({}, [attached]);

    expect(sut).toBeInstanceOf(ProposeCredential);
    expect(sut.attachments).toHaveLength(1);
    expect(sut.attachments[0].id).toEqual(id);
    expect(sut.attachments[0].data).toEqual({ json });
    expect(sut.attachments[0].format).toEqual(format);
  });

  test("Should create OfferCredential with valid optional params", () => {
    const from = Fixtures.DIDs.peerDID1;
    const to = Fixtures.DIDs.peerDID2;
    const thid = "test-thid";
    const id = "test-id";
    const sut = new ProposeCredential({}, [], from, to, thid, id);

    expect(sut).toBeInstanceOf(ProposeCredential);
    expect(sut.attachments).toHaveLength(0);
    expect(sut.body).toEqual({});
    expect(sut.from).toBe(from);
    expect(sut.to).toBe(to);
    expect(sut.thid).toBe(thid);
    expect(sut.id).toBe(id);
  });

  test("ProposeCredential body properties should be correct", () => {
    const goal_code = "test-goalcode";
    const comment = "test-comment";
    const credential_preview: CredentialPreview = { type: "1", body: { attributes: [] } };
    const body: ProposeCredentialBody = { goal_code, comment, credential_preview };
    const sut = new ProposeCredential(body, []);

    expect(sut).toBeInstanceOf(ProposeCredential);
    expect(sut.body.goal_code).toEqual(goal_code);
    expect(sut.body.comment).toEqual(comment);
    expect(sut.body.credential_preview).toEqual(credential_preview);
  });

  describe("fromMessage", () => {
    test("piuri invalid - throws", () => {
      const piuri = ProtocolType.DidcommBasicMessage;
      const from = Fixtures.DIDs.peerDID1;
      const to = Fixtures.DIDs.peerDID2;
      const msg = new Message({}, "id", piuri, from, to);

      const sut = () => ProposeCredential.fromMessage(msg);

      expect(sut).toThrow("Invalid proposed credential message error.");
    });

    test("from missing - throws", () => {
      const piuri = ProtocolType.DidcommProposeCredential;
      const to = Fixtures.DIDs.peerDID2;
      const msg = new Message({}, "id", piuri, null as any, to);

      const sut = () => ProposeCredential.fromMessage(msg);

      expect(sut).toThrow("Invalid proposed credential message error.");
    });

    test("to missing - throws", () => {
      const piuri = ProtocolType.DidcommProposeCredential;
      const from = Fixtures.DIDs.peerDID1;
      const msg = new Message({}, "id", piuri, from);

      const sut = () => ProposeCredential.fromMessage(msg);

      expect(sut).toThrow("Invalid proposed credential message error.");
    });
  });

  test("Should test failure when invalid ProposeMessage is provided when Creating an ProposeCredential", () => {
    const invalidProposeCredential = new Message(
      '{"body": {}}',
      "id",
      "InvalidType"
    );
    assert.throws(
      () => {
        ProposeCredential.fromMessage(invalidProposeCredential);
      },
      AgentError.InvalidProposedCredentialMessageError,
      "Invalid proposed credential message error."
    );
  });
});
