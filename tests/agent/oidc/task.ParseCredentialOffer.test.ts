import { vi, describe, it, expect, test, beforeEach, afterEach, MockInstance } from 'vitest';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import { Task } from "../../../src/utils/tasks";
import { ParseCredentialOffer } from "../../../src/edge-agent/oidc/tasks";
import * as Fixtures from "../../fixtures";
import { ApiResponse } from "../../../src/domain";
import { InvalidOffer } from "../../../src/edge-agent/oidc/errors";

chai.use(SinonChai);
chai.use(chaiAsPromised);

describe("OIDC Tasks", () => {
  let ctx: Task.Context;
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    ctx = new Task.Context({
      Api: { request: vi.fn() }
    });
  });

  afterEach(async () => {
    sandbox.restore();
  });

  describe("parseCredentialOffer", () => {
    test("valid offer - json - returns offer", async () => {
      const task = new ParseCredentialOffer({ value: Fixtures.OIDC.credentialOfferJson });
      const result = await ctx.run(task);
      expect(result).to.deep.eq(Fixtures.OIDC.credentialOfferJson);
    });

    test("valid offer - urlencoded - returns offer", async () => {
      const task = new ParseCredentialOffer({ value: Fixtures.OIDC.credentialOfferQueryParam });
      const result = await ctx.run(task);
      expect(result).to.deep.eq(Fixtures.OIDC.credentialOfferJson);
    });

    test("valid offer - uri - returns offer", async () => {
      const stubRequest = sandbox.stub(ctx.Api, "request").resolves(new ApiResponse(Fixtures.OIDC.credentialOfferJson, 200));
      const uri = "openid-credential-offer://?credential_offer_uri=http%3A%2F%2Flocalhost%2Ftestoffer";
      const task = new ParseCredentialOffer({ value: uri });
      const result = await ctx.run(task);

      expect(result).to.deep.eq(Fixtures.OIDC.credentialOfferJson);
      expect(stubRequest).to.have.been.calledOnceWith("GET", "http://localhost/testoffer");
    });

    describe("Errors", () => {
      test("unhandled value - throws", async () => {
        const task = new ParseCredentialOffer({ value: null });
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(InvalidOffer);
      });

      test("invalid json - throws", async () => {
        const task = new ParseCredentialOffer({ value: {} });
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(InvalidOffer);
      });
    });
  });
});
