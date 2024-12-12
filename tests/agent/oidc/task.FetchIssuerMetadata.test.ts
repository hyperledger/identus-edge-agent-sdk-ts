import { vi, describe, it, expect, test, beforeEach, afterEach, MockInstance } from 'vitest';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import { Task } from "../../../src/utils/tasks";
import { FetchIssuerMetadata } from "../../../src/edge-agent/oidc/tasks";
import * as Fixtures from "../../fixtures";
import { ApiResponse } from "../../../src/domain";
import { InvalidOffer } from "../../../src/edge-agent/oidc/errors";
import { OIDC } from "../../../src";
import { ValidationError } from "../../../src/domain/models/errors/Common";

chai.use(SinonChai);
chai.use(chaiAsPromised);

describe("OIDC Tasks", () => {
  let ctx: Task.Context;
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    ctx = Task.Context.make({
      Api: { request: vi.fn() }
    });
  });

  afterEach(async () => {
    sandbox.restore();
  });

  describe("fetchIssuerMetadata", () => {
    test("path appended to issuer url", async () => {
      const stubRequest = sandbox.stub(ctx.Api, "request").resolves(new ApiResponse(Fixtures.OIDC.issuerMeta, 200));
      const uri = "http://test/issuermeta";
      const task = new FetchIssuerMetadata({ uri });
      await ctx.run(task);

      expect(stubRequest).to.have.been.calledOnceWith("GET", `${uri}/.well-known/openid-credential-issuer`);
    });

    test("valid issuer metadata returned", async () => {
      sandbox.stub(ctx.Api, "request").resolves(new ApiResponse(Fixtures.OIDC.issuerMeta, 200));
      const task = new FetchIssuerMetadata({ uri: "http://test/issuermeta" });
      const result = await ctx.run(task);

      expect(result).to.deep.eq(Fixtures.OIDC.issuerMeta);
    });

    describe("Errors", () => {
      test("invalid uri - null - throws", async () => {
        const task = new FetchIssuerMetadata({ uri: null } as any);
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(Error);
      });

      test("invalid uri - empty string - throws", async () => {
        const task = new FetchIssuerMetadata({ uri: "" });
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err?.toString()).toEqual("TypeError: Invalid URL: ");
      });

      test("invalid issuerMeta - throws", async () => {
        sandbox.stub(ctx.Api, "request").resolves(new ApiResponse({}, 200));
        const task = new FetchIssuerMetadata({ uri: "http://test/issuermeta" });
        const s = OIDC.TokenResponseSchema;
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(ValidationError);
      });
    });
  });
});
