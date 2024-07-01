/**
 * WARNING: This is an example using an encrypted inMemory storage.
 * Checkout Community maintained NPM package @pluto-encrypted/database for more DB wrappers.
 */
const InMemory = require("@pluto-encrypted/inmemory");
const SDK = require("@atala/prism-wallet-sdk");

// const SCHEMA_ID = "ff41c059-1d03-3c65-ab60-f8db40ee9387";
const ISSUER_ID = "0453c36e-b63a-486a-869d-8717a2daa5cb";
const CREDENTIAL_ISSUER_DID = "did:prism:a288837496a64d5d79e04c077f167801c513ddd3556859e7641dae8b5379196d";
const CREDENTIAL_ISSUER = `http://localhost:8080/prism-agent/oid4vci/issuers/${ISSUER_ID}`;
const CREDENTIAL_CONFIGURATION_ID = "UniversityDegreeCredential";
// const HOLDER_LONG_FORM_DID = "did:prism:73196107e806b084d44339c847a3ae8dd279562f23895583f62cc91a2ee5b8fe:CnsKeRI8CghtYXN0ZXItMBABSi4KCXNlY3AyNTZrMRIhArrplJNfQYxthryRU87XdODy-YWUh5mqrvIfAdoZFeJBEjkKBWtleS0wEAJKLgoJc2VjcDI1NmsxEiEC8rsFplfYvRLazdWWi3LNR1gaAQXb-adVhZacJT4ntwE";
const REDIRECT_URL = "http://localhost:7777/cb";
const ALICE_CLIENT_ID = "alice-wallet";


(async () => {
  try {
    const defaultMediatorDID = "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vc2l0LXByaXNtLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJhIjpbImRpZGNvbW0vdjIiXX19.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzczovL3NpdC1wcmlzbS1tZWRpYXRvci5hdGFsYXByaXNtLmlvL3dzIiwiYSI6WyJkaWRjb21tL3YyIl19fQ";
    const mediatorDID = SDK.Domain.DID.fromString(defaultMediatorDID);
    const apollo = new SDK.Apollo();
    const api = new SDK.ApiImpl();
    const castor = new SDK.Castor(apollo);
    const store = new SDK.Store({
      name: "test",
      storage: InMemory,
      password: Buffer.from("demoapp").toString("hex")
    });
    const pluto = new SDK.Pluto(store, apollo);
    const didcomm = new SDK.DIDCommWrapper(apollo, castor, pluto);
    const mercury = new SDK.Mercury(castor, didcomm, api);
    const mediationStore = new SDK.PublicMediatorStore(pluto);
    const mediationHandler = new SDK.BasicMediatorHandler(mediatorDID, mercury, mediationStore);
    const seed = apollo.createRandomSeed().seed;

    const agent = new SDK.OIDCAgent(
      apollo,
      castor,
      pluto,
      mediationHandler,
      seed,
      api,
      ALICE_CLIENT_ID,
      CREDENTIAL_ISSUER,
      REDIRECT_URL,
      CREDENTIAL_CONFIGURATION_ID
    );

    await agent.start();

    const offer_response = await fetch(`${CREDENTIAL_ISSUER}/credential-offers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "credentialConfigurationId": CREDENTIAL_CONFIGURATION_ID,
        "issuingDID": CREDENTIAL_ISSUER_DID,
        "claims": { "firstName": "Alice", "degree": "ChemicalEngineering", "grade": 3.2 },
      })
    });
    const offer_json = await offer_response.json();
    const qs = offer_json.credentialOffer.split("=")[1];
    const offer = JSON.parse(decodeURIComponent(qs));
    console.log({ offer })

    const issuerMeta = await agent.getIssuerMetadata(CREDENTIAL_ISSUER);
    console.log({ issuerMeta });

    const asConfig = await agent.getASConfiguration(issuerMeta);
    console.log({ asConfig })

    const loginUrl = agent.makeLoginUrl(asConfig, offer);
    console.log(loginUrl)

    const ping = () => new Promise((res) => {
      setTimeout(async () => {
        try {
          const response = await agent.getAuthorizationResponse();
          res(response);
        }
        catch {
          res(undefined);
        }
      }, 1000);
    });

    const poll = async () => {
      let pong;
      while (!pong) {
        pong = await ping();
      }
      return pong;
    };

    const authCode = await poll();
    console.log({ authCode })

    const tokenResponse = await agent.sendTokenRequest(asConfig, authCode);
    console.log({ tokenResponse })

    const cred = await agent.sendCredentialRequest(issuerMeta, tokenResponse);
    console.log({ cred });
  }
  catch (e) {
    console.log("ERROR")
    console.log(e)
  }
})();
