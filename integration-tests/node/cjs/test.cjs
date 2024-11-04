/* eslint-disable n/no-unsupported-features/node-builtins */
const { describe, test } = require('node:test');
const assert = require('node:assert');
const SDK = require("sdk");

describe('CommonJS Integration', () => {
  test('Top level exports', () => {
    assert(typeof SDK === "object");

    // modules
    assert("Agent" in SDK);
    assert("Apollo" in SDK);
    assert("Castor" in SDK);
    assert("Domain" in SDK);
    assert("Mercury" in SDK);
    assert("Pluto" in SDK);
    assert("Pollux" in SDK);

    // misc modules
    assert("ApiImpl" in SDK);
    assert("BasicMediatorHandler" in SDK);
    assert("ConnectionsManager" in SDK);
    assert("PublicMediatorStore" in SDK);

    // credentials
    assert("AnonCredsCredential" in SDK);
    assert("AnonCredsCredentialProperties" in SDK);
    assert("AnonCredsRecoveryId" in SDK);

    assert("JWTCredential" in SDK);
    assert("JWTVerifiableCredentialRecoveryId" in SDK);

    assert("SDJWTCredential" in SDK);
    assert("SDJWTVerifiableCredentialRecoveryId" in SDK);

    // keys
    assert("Ed25519KeyPair" in SDK);
    assert("Ed25519PrivateKey" in SDK);
    assert("Ed25519PublicKey" in SDK);
    assert("Secp256k1KeyPair" in SDK);
    assert("Secp256k1PrivateKey" in SDK);
    assert("Secp256k1PublicKey" in SDK);
    assert("X25519KeyPair" in SDK);
    assert("X25519PrivateKey" in SDK);
    assert("X25519PublicKey" in SDK);
    assert("KeyProperties" in SDK);

    // DIDComm
    assert("ProtocolType" in SDK);
    assert("BasicMessage" in SDK);
    assert("DIDCommWrapper" in SDK);
    assert("HandshakeRequest" in SDK);
    assert("IssueCredential" in SDK);
    assert("OfferCredential" in SDK);
    assert("OutOfBandInvitation" in SDK);
    assert("Presentation" in SDK);
    assert("ProposePresentation" in SDK);
    assert("RequestPresentation" in SDK);

    // OIDC
    assert("OIDC" in SDK);
    assert("OIDCAgent" in SDK);

    assert("ListenerKey" in SDK);

    // ?? should be in Castor
    assert("PeerDID" in SDK);
    assert("PeerDIDService" in SDK);

    // ?? should be in Pluto
    assert("Store" in SDK);

    // ?? shouldnt be exported
    assert("isPresentationDefinitionRequestType" in SDK);
  });

  describe("Modules", () => {
    describe("Apollo", () => {
      test("instantiates", async () => {
        const apollo = new SDK.Apollo();
        assert(apollo instanceof SDK.Apollo);
        assert(apollo.createRandomMnemonics instanceof Function);
        assert(apollo.createSeed instanceof Function);
        assert(apollo.createRandomSeed instanceof Function);
        assert(apollo.createPrivateKey instanceof Function);
        assert(apollo.createPublicKey instanceof Function);
      });
    });

    describe("Castor", () => {
      test("instantiates", async () => {
        const apollo = new SDK.Apollo();
        const castor = new SDK.Castor(apollo);
        assert(castor instanceof SDK.Castor);
        assert(castor.parseDID instanceof Function);
        assert(castor.createPrismDID instanceof Function);
        assert(castor.createPeerDID instanceof Function);
        assert(castor.resolveDID instanceof Function);
        assert(castor.verifySignature instanceof Function);
        assert(castor.getEcnumbasis instanceof Function);
      });
    });

    describe("Mercury", () => {
      test("instantiates", async () => {
        const apollo = new SDK.Apollo();
        const castor = new SDK.Castor(apollo);
        const httpManager = {};
        const protocol = { unpack: () => 123 };
        const mercury = new SDK.Mercury(castor, protocol, httpManager);
        assert(mercury instanceof SDK.Mercury);
        assert(mercury.packMessage instanceof Function);
        assert(mercury.unpackMessage instanceof Function);
        assert(mercury.sendMessage instanceof Function);
        assert(mercury.sendMessageParseMessage instanceof Function);
      });
    });

    describe("Pluto", () => {
      test("instantiates", async () => {
        const apollo = new SDK.Apollo();
        const store = { insert: () => { } }
        const pluto = new SDK.Pluto(store, apollo);
        assert(pluto instanceof SDK.Pluto);
        assert(pluto.backup instanceof Function);
        assert(pluto.restore instanceof Function);
        assert(pluto.storeDID instanceof Function);
        assert(pluto.storeMessage instanceof Function);
        assert(pluto.storeMediator instanceof Function);
        assert(pluto.storeCredential instanceof Function);
      });
    });

    describe("Pollux", () => {
      test("instantiates", async () => {
        const apollo = new SDK.Apollo();
        const castor = new SDK.Castor(apollo);
        const pollux = new SDK.Pollux(apollo, castor);
        assert(pollux instanceof SDK.Pollux);
        assert(pollux.revealCredentialFields instanceof Function);
        assert(pollux.isCredentialRevoked instanceof Function);
        assert(pollux.parseCredential instanceof Function);
        assert(pollux.processCredentialOffer instanceof Function);
        assert(pollux.createPresentationSubmission instanceof Function);
        assert(pollux.verifyPresentationSubmission instanceof Function);
        assert(pollux.createPresentationDefinitionRequest instanceof Function);
      });
    });
  });

  test("Agent starts", async () => {
    const apollo = new SDK.Apollo();
    const castor = new SDK.Castor(apollo);
    const mockApi = {
      request: async () => new SDK.Domain.ApiResponse(new Uint8Array(), 200)
    };
    const mockProtocol = {
      packEncrypted: async () => "",
      unpack: async () => new SDK.Domain.Message("{}", undefined, "TypeofMessage"),
    };
    const mercury = new SDK.Mercury(castor, mockProtocol, mockApi);
    const seed = {
      value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
    };
    const store = {
      query: () => ([]),
      insert: () => { }
    };
    const pluto = new SDK.Pluto(store, apollo);
    const did = SDK.Domain.DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19");
    const agent = SDK.Agent.initialize({
      mediatorDID: did,
      apollo,
      castor,
      pluto,
      mercury,
      seed,
    });

    // hack to avoid mediation startup
    agent.connectionManager.cancellable = { cancel: () => { } };
    agent.mediationHandler.mediator = {
      hostDID: did,
      mediatorDID: did,
      routingDID: did,
    };

    await agent.start();
    assert(agent.state === "running");
    await agent.stop();
    assert(agent.state === "stopped");
  });
});
