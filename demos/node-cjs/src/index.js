/**
 * WARNING: This is an example using an encrypted inMemory storage.
 * Checkout Community maintained NPM package @pluto-encrypted/database for more DB wrappers.
*/
const readline = require("readline");
const InMemory = require("@pluto-encrypted/inmemory");
const SDK = require("@hyperledger/identus-edge-agent-sdk");

// change to generated values
const ISSUER_ID = "e3ef76b0-c879-49a1-9a37-8e4f1bcdabbd";
const CREDENTIAL_ISSUER_DID = "did:prism:8a9614fbf9b4db8f48265151525d8246a535c09e35e90c238a6214a789d29989";
const CREDENTIAL_ISSUER = `http://localhost:8090/oid4vci/issuers/${ISSUER_ID}`;

const CREDENTIAL_CONFIGURATION_ID = "StudentProfile";
const ALICE_CLIENT_ID = "alice-wallet";
const REDIRECT_URL = "http://localhost:7777/cb";

(async () => {
  try {
    const apollo = new SDK.Apollo();
    const api = new SDK.ApiImpl();
    const store = new SDK.Store({
      name: "test",
      storage: InMemory,
      password: Buffer.from("demoapp").toString("hex")
    });
    const pluto = new SDK.Pluto(store, apollo);
    const oidcAgent = SDK.OIDCAgent.initialize({ pluto, api, apollo });
    await oidcAgent.start();

    const fetchOffer = async () => {
      const offer_response = await fetch(`${CREDENTIAL_ISSUER}/credential-offers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "credentialConfigurationId": CREDENTIAL_CONFIGURATION_ID,
          "issuingDID": CREDENTIAL_ISSUER_DID,
          "claims": {
            "name": "Alice",
            "age": 42
          }
        })
      });
      const offer_json = await offer_response.json();
      const qs = offer_json.credentialOffer.split("=")[1];
      const offer = JSON.parse(decodeURIComponent(qs));
      return offer;
    };

    const rawOffer = await fetchOffer();
    const offer = oidcAgent.parseCredentialOffer(rawOffer);
    console.dir({ offer }, { depth: null })

    const manualFlow = async () => {
      const scopes = [
        "web-origins",
        "email",
        "profile",
        "roles",
        "microprofile-jwt",
        "acr",
        "offline_access",
        "address",
        "StudentProfile",
        "phone"
      ];

      const issuerMeta = await oidcAgent.fetchIssuerMetadata(offer.credential_issuer);
      const authServer = await oidcAgent.fetchAuthorizationServerMetadata(issuerMeta.authorization_servers?.at(0));
      const authRequest = await oidcAgent.createAuthorizationRequest(
        issuerMeta,
        authServer,
        ALICE_CLIENT_ID,
        REDIRECT_URL,
        { scopes }
      );

      const loginUrl = authRequest.url.href;
      console.log(loginUrl);

      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

      rl.question(`url: `, async url => {
        await oidcAgent.handleTokenRequest(authRequest, url);

        const credentialRequest = await oidcAgent.createCredentialRequest(offer, ALICE_CLIENT_ID);
        console.dir({ credentialRequest }, { depth: null });

        const cred = await oidcAgent.send(credentialRequest);
        console.dir({ cred }, { depth: null })

        rl.close();
      });
    };

    const convenienceFlow = async () => {
      const authRequest = await oidcAgent.resolveCredentialOffer(offer, ALICE_CLIENT_ID, REDIRECT_URL);
      const loginUrl = authRequest.url.href;
      const issuerMeta = authRequest.issuerMeta;
      const authServer = authRequest.authServerMeta;

      console.dir({ issuerMeta }, { depth: null })
      console.dir({ authServer }, { depth: null })
      console.log(loginUrl)

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(`url: `, async url => {
        // console.log(`url: ${url}`);

        // const authResponse = await oidcAgent.processCallbackUrl({ callbackUrl: url });
        // console.dir({ authResponse }, { depth: null });

        // const tokenRequest = await oidcAgent.createTokenRequest(authResponse);
        // console.dir({ tokenRequest }, { depth: null });

        // const tokenResponse = await oidcAgent.sendTokenRequest(tokenRequest);
        // console.dir({ tokenResponse }, { depth: null });
        const offer2 = await fetchOffer();

        const cred1 = await oidcAgent.resolveCredentialRequest(
          offer2,
          authRequest,
          { callbackUrl: url }
        );
        console.dir({ cred1 }, { depth: null })

        // test making multiple requests with the same offer
        const credentialRequest2 = await oidcAgent.createCredentialRequest(offer2, ALICE_CLIENT_ID);
        console.dir({ credentialRequest2 }, { depth: null });

        const cred2 = await oidcAgent.send(credentialRequest2);
        console.dir({ cred2 }, { depth: null })

        const credentialRequest3 = await oidcAgent.createCredentialRequest(offer2, ALICE_CLIENT_ID);
        console.dir({ credentialRequest3 }, { depth: null });

        const cred3 = await oidcAgent.send(credentialRequest3);
        console.dir({ cred3 }, { depth: null })

        rl.close();
      });
    };

    // uncomment the wanted flow
    try {
      // await manualFlow();
    }
    catch (e) {
      console.log(e);
    }

    try {
      await convenienceFlow();
    }
    catch (e) {
      console.log(e);
    }
  }
  catch (e) {
    console.log("ERROR")
    console.log(e)
  }
})();
