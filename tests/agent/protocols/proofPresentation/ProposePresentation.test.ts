import { describe, expect, test } from 'vitest';
import { AttachmentDescriptor, Message } from "../../../../src/domain";
import { ProposePresentation } from "../../../../src/edge-agent/protocols/proofPresentation/ProposePresentation";
import { ProtocolType } from '../../../../src';
import * as Fixtures from "../../../fixtures";

describe("ProposePresentation", () => {
  test("Should create a ProposePresentation from valid params", async () => {
    const sut = new ProposePresentation({}, [], Fixtures.DIDs.peerDID1, Fixtures.DIDs.peerDID2);

    expect(sut).toBeInstanceOf(ProposePresentation);
  });

  test("Should create ProposePresentation with attachments", () => {
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

    const sut = new ProposePresentation({}, [attached], Fixtures.DIDs.peerDID2, Fixtures.DIDs.peerDID3);

    expect(sut).toBeInstanceOf(ProposePresentation);
    expect(sut.attachments).toHaveLength(1);
    expect(sut.attachments[0].id).toEqual(id);
    expect(sut.attachments[0].data).toEqual({ json });
    expect(sut.attachments[0].format).toEqual(format);
  });

  test("Should create ProposePresentation with valid optional params", () => {
    const comment = "test-comment";
    const goal_code = "test-goal-code";
    const body = { comment, goal_code };
    const from = Fixtures.DIDs.peerDID1;
    const to = Fixtures.DIDs.peerDID2;
    const thid = "test-thid";
    const id = "test-id";
    const sut = new ProposePresentation(body, [], from, to, thid, id);

    expect(sut).toBeInstanceOf(ProposePresentation);
    expect(sut.body.comment).toEqual(comment);
    expect(sut.body.goal_code).toEqual(goal_code);

    expect(sut.attachments).toHaveLength(0);
    expect(sut.body).toEqual(body);
    expect(sut.from).toBe(from);
    expect(sut.to).toBe(to);
    expect(sut.thid).toBe(thid);
    expect(sut.id).toBe(id);
  });

  describe("fromMessage", () => {
    test("piuri invalid - throws", () => {
      const piuri = ProtocolType.DidcommBasicMessage;
      const from = Fixtures.DIDs.peerDID1;
      const to = Fixtures.DIDs.peerDID2;
      const msg = new Message({}, "id", piuri, from, to);

      const sut = () => ProposePresentation.fromMessage(msg);

      expect(sut).toThrow("Invalid Propose Presentation Message");
    });

    test("from missing - throws", () => {
      const piuri = ProtocolType.DidcommProposeCredential;
      const to = Fixtures.DIDs.peerDID2;
      const msg = new Message({}, "id", piuri, null as any, to);

      const sut = () => ProposePresentation.fromMessage(msg);

      expect(sut).toThrow("Invalid Propose Presentation Message");
    });
  });
});
