import { vi, describe, expect, test, beforeEach, afterEach, MockInstance } from 'vitest';
import { Apollo, OIDCAgent, Pluto } from "../../../src";
import { mockPluto } from "../../fixtures/inmemory/factory";
import { ExpectError } from "../../../src/domain/models/errors/Common";
import * as Fixtures from "../../fixtures";
import * as ParseCredentialOfferModule from "../../../src/edge-agent/oidc/tasks/ParseCredentialOffer";
import * as FetchIssuerMetadataModule from "../../../src/edge-agent/oidc/tasks/FetchIssuerMetadata";
import * as FetchAuthMetaModule from "../../../src/edge-agent/oidc/tasks/FetchAuthServerMeta";
import * as CreateAuthRequestModule from "../../../src/edge-agent/oidc/tasks/CreateAuthorizationRequest";
import * as CreateCredentialRequestModule from "../../../src/edge-agent/oidc/tasks/CreateCredentialRequest";
import * as ResolveTokenRequestModule from "../../../src/edge-agent/oidc/tasks/ResolveTokenRequest";
import * as ResolveCredentialOfferModule from "../../../src/edge-agent/oidc/tasks/ResolveCredentialOffer";
import { MissingClientId, MissingScope } from "../../../src/edge-agent/oidc/errors";

/**
 * Unit tests
 * to prove any logic not encapsulated in a Task
 * plus all arguments are passed correctly through
 */
describe("OIDC Agent", () => {
  let spy: MockInstance;
  let agent: OIDCAgent;
  let pluto: Pluto;

  beforeEach(() => {
    const apollo = new Apollo();
    pluto = mockPluto({ apollo });
    agent = OIDCAgent.initialize({ pluto, apollo });
  });

  afterEach(async () => {
    spy.mockRestore();
    vi.useRealTimers();
    vi.restoreAllMocks();
    await agent.stop();
  });

  const spyOnTask = <T>(module: T, task: keyof T) => {
    spy = vi
      .spyOn(module as any, task as any)
      .mockReturnValue({
        run: () => Promise.resolve({}),
        log: () => ({}),
      });
  };

  describe("parseCredentialOffer", () => {
    test("Task arguments passed correctly", async () => {
      spyOnTask(ParseCredentialOfferModule, "ParseCredentialOffer");
      await agent.parseCredentialOffer(Fixtures.OIDC.credentialOfferJson);
      expect(spy).toHaveBeenCalledWith({ value: Fixtures.OIDC.credentialOfferJson });
    });
  });

  describe("fetchIssuerMetadata", () => {
    test("Task arguments passed correctly", async () => {
      spyOnTask(FetchIssuerMetadataModule, "FetchIssuerMetadata");
      const uri = "http://test/issuermeta";
      await agent.fetchIssuerMetadata(uri);
      expect(spy).toHaveBeenCalledWith({ uri });
    });
  });

  describe("fetchAuthorizationServerMetadata", () => {
    test("Task arguments passed correctly", async () => {
      spyOnTask(FetchAuthMetaModule, "FetchAuthServerMeta");
      const url = "http://test/authmeta";
      await agent.fetchAuthorizationServerMetadata(url);
      expect(spy).toHaveBeenCalledWith({ serverUri: url, algorithm: "oidc" });
    });
  });

  describe("createAuthorizationRequest", () => {
    test("Task arguments passed correctly", async () => {
      spyOnTask(CreateAuthRequestModule, "CreateAuthorizationRequest");
      const issuerMeta = { issuer: 1 } as any;
      const authServerMeta = { auth: 2 } as any;
      const clientId = "clientId";
      const redirectUri = "http://redirect";
      await agent.createAuthorizationRequest(issuerMeta, authServerMeta, clientId, redirectUri);
      expect(spy).toHaveBeenCalledWith({
        issuerMeta,
        authServerMeta,
        clientId,
        redirectUri,
      });
    });

    test("optional arguments", async () => {
      spyOnTask(CreateAuthRequestModule, "CreateAuthorizationRequest");
      const offer = { offer: 3 } as any;
      const scopes = ["test", "scopes"];
      await agent.createAuthorizationRequest({} as any, {} as any, "", "", {
        offer, scopes
      });
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({ offer, scopes })
      );
    });
  });

  describe("handleTokenRequest", () => {
    test("Task arguments passed correctly", async () => {
      spyOnTask(ResolveTokenRequestModule, "ResolveTokenRequest");
      const params = new Map([["client_id", "1"], ["scope", "test"]]);
      const authorizationRequest = { params } as any;
      await agent.handleTokenRequest(authorizationRequest);
      expect(spy).toHaveBeenCalledWith({ authorizationRequest });
    });

    test("optional callbackUrl", async () => {
      spyOnTask(ResolveTokenRequestModule, "ResolveTokenRequest");
      const params = new Map([["client_id", "1"], ["scope", "test"]]);
      const authorizationRequest = { params } as any;
      const callbackUrl = "http://test/cb";
      await agent.handleTokenRequest(authorizationRequest, callbackUrl);
      expect(spy).toHaveBeenCalledWith({ authorizationRequest, callbackUrl });
    });

    describe("Errors", () => {
      test("client_id missing", async () => {
        const params = new Map([["scope", "test"]]);
        const authorizationRequest = { params } as any;
        const callbackUrl = "http://test/cb";
        let err;

        try {
          await agent.handleTokenRequest(authorizationRequest, callbackUrl);
        }
        catch (e) {
          err = e;
        }

        expect(err).toBeInstanceOf(MissingClientId);
      });

      test("scope missing", async () => {
        const params = new Map([["client_id", "qwerty"]]);
        const authorizationRequest = { params } as any;
        const callbackUrl = "http://test/cb";
        let err;

        try {
          await agent.handleTokenRequest(authorizationRequest, callbackUrl);
        }
        catch (e) {
          err = e;
        }

        expect(err).toBeInstanceOf(MissingScope);
      });
    });
  });

  describe("createCredentialRequest", () => {
    test("Task arguments passed correctly", async () => {
      spyOnTask(CreateCredentialRequestModule, "CreateCredentialRequest");
      const issuerMeta = { iss: 7 };
      const tokenResponse = { token: 8 };
      const offer = { test: 9 } as any;
      const clientId = "testClient";

      vi.spyOn((agent as any).connections, "find")
        .mockImplementation(() => ({ issuerMeta, tokenResponse }));

      await agent.createCredentialRequest(offer, clientId);
      expect(spy).toHaveBeenCalledWith({ offer, clientId, issuerMeta, tokenResponse });
    });

    describe("Errors", () => {
      test("connection missing", async () => {
        const offer = { test: 9 } as any;
        const clientId = "testClient";
        let err;

        try {
          await agent.createCredentialRequest(offer, clientId);
        }
        catch (e) {
          err = e;
        }

        expect(err).toBeInstanceOf(ExpectError);
      });
    });
  });

  describe("resolveCredentialOffer", () => {
    test("Task arguments passed correctly", async () => {
      spyOnTask(ResolveCredentialOfferModule, "ResolveCredentialOffer");
      const offer = { test: 9 } as any;
      const clientId = "testClient";
      const redirectUri = "http://test";

      await agent.resolveCredentialOffer(offer, clientId, redirectUri);
      expect(spy).toHaveBeenCalledWith({ offer, clientId, redirectUri });
    });
  });

  describe("resolveCredentialRequest", () => {
    test("Task arguments passed correctly", async () => {
      const clientId = "client-123";
      const params = new Map([["client_id", clientId]]);
      const authorizationRequest = { ar: 78, params } as any;
      const offer = { test: 9 } as any;
      const credentialRequest = { credReq: 3 } as any;
      const credential = { cred: 34 } as any;

      const spyHandleTokenRequest = vi.spyOn(agent, "handleTokenRequest")
        .mockResolvedValue({} as any);
      const spyCreateCredentialRequest = vi.spyOn(agent, "createCredentialRequest")
        .mockResolvedValue(credentialRequest);
      const spySend = vi.spyOn(agent, "send")
        .mockResolvedValue(credential);
      const spyStoreCredential = vi.spyOn(agent.pluto, "storeCredential")
        .mockResolvedValue();

      const result = await agent.resolveCredentialRequest(offer, authorizationRequest);

      expect(spyHandleTokenRequest).toHaveBeenCalledWith(authorizationRequest, undefined);
      expect(spyCreateCredentialRequest).toHaveBeenCalledWith(offer, clientId);
      expect(spySend).toHaveBeenCalledWith(credentialRequest);
      expect(spyStoreCredential).toHaveBeenCalledWith(credential);
      expect(result).toBe(credential);
    });

    test("optional arguments", async () => {
      const clientId = "client-123";
      const callbackUrl = "http://test/cb";
      const authorizationRequest = { ar: 33 } as any;
      const offer = { test: 9 } as any;
      const credentialRequest = { credReq: 3 } as any;
      const credential = { cred: 34 } as any;

      const spyHandleTokenRequest = vi.spyOn(agent, "handleTokenRequest")
        .mockResolvedValue({} as any);
      const spyCreateCredentialRequest = vi.spyOn(agent, "createCredentialRequest")
        .mockResolvedValue(credentialRequest);
      const spySend = vi.spyOn(agent, "send")
        .mockResolvedValue(credential);
      const spyStoreCredential = vi.spyOn(agent.pluto, "storeCredential")
        .mockResolvedValue();

      const result = await agent.resolveCredentialRequest(
        offer,
        authorizationRequest,
        {
          clientId,
          callbackUrl
        }
      );

      expect(spyHandleTokenRequest).toHaveBeenCalledWith(authorizationRequest, callbackUrl);
      expect(spyCreateCredentialRequest).toHaveBeenCalledWith(offer, clientId);
      expect(spySend).toHaveBeenCalledWith(credentialRequest);
      expect(spyStoreCredential).toHaveBeenCalledWith(credential);
      expect(result).toBe(credential);
    });

    describe("Errors", () => {
      test("clientId missing", async () => {
        const callbackUrl = "http://test/cb";
        const params = new Map();
        const authorizationRequest = { ar: 21, params } as any;
        const offer = { test: 9 } as any;
        const credentialRequest = { credReq: 3 } as any;
        const credential = { cred: 34 } as any;

        const spyHandleTokenRequest = vi.spyOn(agent, "handleTokenRequest")
          .mockResolvedValue({} as any);
        const spyCreateCredentialRequest = vi.spyOn(agent, "createCredentialRequest")
          .mockResolvedValue(credentialRequest);
        const spySend = vi.spyOn(agent, "send")
          .mockResolvedValue(credential);
        const spyStoreCredential = vi.spyOn(agent.pluto, "storeCredential")
          .mockResolvedValue();

        let err;
        try {
          await agent.resolveCredentialRequest(
            offer,
            authorizationRequest,
            { callbackUrl }
          );
        }
        catch (e) {
          err = e;
        }

        expect(err).toBeInstanceOf(MissingClientId);
      });
    });
  });

});
