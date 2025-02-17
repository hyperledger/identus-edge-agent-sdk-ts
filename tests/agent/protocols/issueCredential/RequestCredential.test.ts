import { vi, assert, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { AttachmentDescriptor, Message } from "../../../../src/domain";
import { AgentError } from "../../../../src/domain/models/Errors";
import { RequestCredential } from "../../../../src/edge-agent/protocols/issueCredential/RequestCredential";
import * as Fixtures from "../../../fixtures";
import { InvalidCredentialFormats } from '../../../../src/domain/models/errors/Agent';
import { ProtocolType } from '../../../../src';

describe("RequestCredential", () => {
  it("Should create a valid RequestCredential from valid params", () => {
    const validRequestCredential = new RequestCredential({ formats: [] }, [], Fixtures.DIDs.peerDID1);

    expect(validRequestCredential).toBeInstanceOf(RequestCredential);
  });

  test("Should create RequestCredential with attachments", () => {
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

    const sut = new RequestCredential({ formats: [] }, [attached], Fixtures.DIDs.peerDID2);

    expect(sut).toBeInstanceOf(RequestCredential);
    expect(sut.attachments).toHaveLength(1);
    expect(sut.attachments[0].id).toEqual(id);
    expect(sut.attachments[0].data).toEqual({ json });
    expect(sut.attachments[0].format).toEqual(format);
  });

  test("Should create RequestCredential with valid optional params", () => {
    const formatItem = { attach_id: "123", format: "test-format" };
    const body = { formats: [formatItem] };
    const from = Fixtures.DIDs.peerDID1;
    const to = Fixtures.DIDs.peerDID2;
    const thid = "test-thid";
    const id = "test-id";
    const sut = new RequestCredential(body, [], from, to, thid, id);

    expect(sut).toBeInstanceOf(RequestCredential);
    expect(sut.body.formats).toHaveLength(1);
    expect(sut.body.formats[0]).toEqual(formatItem);

    expect(sut.attachments).toHaveLength(0);
    expect(sut.body).toEqual(body);
    expect(sut.from).toBe(from);
    expect(sut.to).toBe(to);
    expect(sut.thid).toBe(thid);
    expect(sut.id).toBe(id);
  });

  test("invalid body - no formats - throws", () => {
    const sut = () => new RequestCredential({} as any, [], Fixtures.DIDs.peerDID1);

    expect(sut).toThrow(InvalidCredentialFormats);
  });

  test("invalid body.formats - not an object - throws", () => {
    const sut = () => new RequestCredential(
      { formats: ["wrong"] as any },
      [],
      Fixtures.DIDs.peerDID1
    );

    expect(sut).toThrow(InvalidCredentialFormats);
  });

  test("invalid body.formats - missing attach_id - throws", () => {
    const formatItem = { format: "test-format" } as any;
    const sut = () => new RequestCredential(
      { formats: [formatItem] },
      [],
      Fixtures.DIDs.peerDID1
    );

    expect(sut).toThrow(InvalidCredentialFormats);
  });

  test("invalid body.formats - missing format - throws", () => {
    const formatItem = { attach_id: "123" } as any;
    const sut = () => new RequestCredential(
      { formats: [formatItem] },
      [],
      Fixtures.DIDs.peerDID1
    );

    expect(sut).toThrow(InvalidCredentialFormats);
  });

  describe("fromMessage", () => {
    test("piuri invalid - throws", () => {
      const piuri = ProtocolType.DidcommBasicMessage;
      const from = Fixtures.DIDs.peerDID1;
      const msg = new Message({}, "id", piuri, from);

      const sut = () => RequestCredential.fromMessage(msg);

      expect(sut).toThrow("Invalid request credential message error.");
    });

    test("from missing - throws", () => {
      const piuri = ProtocolType.DidcommProposeCredential;
      const to = Fixtures.DIDs.peerDID2;
      const msg = new Message({}, "id", piuri, null as any);

      const sut = () => RequestCredential.fromMessage(msg);

      expect(sut).toThrow("Invalid request credential message error.");
    });
  });
});
