import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import * as RunProtocolModule from "../../../src/edge-agent/helpers/RunProtocol";
import { HandleIssueCredential } from '../../../src/edge-agent/didcomm/HandleIssueCredential';
import { Task } from '../../../src/utils';
import { IssueCredential } from '../../../src';
import * as Fixtures from "../../fixtures";
import { Payload } from '../../../src/domain/protocols/Payload';


describe("Agent", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    ctx = Task.Context.make({});
  });


  afterEach(async () => {
    vi.restoreAllMocks();
  });

  describe("HandleIssueCredential", () => {
    test("unknown Payload returned from protocol - throws", async () => {
      vi.spyOn(RunProtocolModule, "RunProtocol")
        .mockReturnValue({
          run: () => Promise.resolve({ pid: "not-credential", data: {} }),
          log: () => ({}),
        } as any);

      const issueCredential = IssueCredential.fromMessage(Fixtures.Messages.IssueCredential);
      const sut = ctx.run(new HandleIssueCredential({ issueCredential }));

      await expect(sut).rejects.toThrow("invalid Credential issued");
    });

    test("Credential not returned from protocol - throws", async () => {
      vi.spyOn(RunProtocolModule, "RunProtocol")
        .mockReturnValue({
          run: () => Promise.resolve({ pid: "credential", data: {} }),
          log: () => ({}),
        } as any);

      const issueCredential = IssueCredential.fromMessage(Fixtures.Messages.IssueCredential);
      const sut = ctx.run(new HandleIssueCredential({ issueCredential }));

      await expect(sut).rejects.toThrow("invalid Credential issued");
    });
  });
});
