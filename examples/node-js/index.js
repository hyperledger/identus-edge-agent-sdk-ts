const sdk = require("@input-output-hk/atala-prism-wallet-sdk");

const apollo = new sdk.Apollo();
const castor = new sdk.Castor();
const pluto = new sdk.Pluto({
  type: "sql",
  wasmBinaryURL: `${process.cwd()}/node_modules/@input-output-hk/atala-prism-wallet-sdk/node_modules/sql.js/dist`,
});

(async () => {
  await pluto.start();
  const mediatorDID = sdk.Domain.DID.fromString(
    "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
  );
  const didcomm = new sdk.DIDCommWrapper(apollo, castor, pluto);
  const store = new sdk.PublicMediatorStore(pluto);
  const handler = new sdk.BasicMediatorHandler(mediatorDID, mercury, store);
  const manager = new sdk.ConnectionsManager(castor, mercury, pluto, handler);
  const seed = apollo.createRandomSeed().seed;
  const mercury = new sdk.Mercury();

  const agent = new sdk.Agent(
    apollo,
    castor,
    pluto,
    mercury,
    handler,
    manager,
    seed
  );

  await agent.start();
  console.log("HELLO", agent);
})();
