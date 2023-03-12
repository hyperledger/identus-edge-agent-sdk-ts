import * as SDK from ".";

(async () => {
  const mediatorDID = SDK.Domain.DID.fromString(
    "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
  );
  const apollo = new SDK.Apollo();
  const api = new SDK.ApiImpl();
  const castor = new SDK.Castor(apollo);
  const pluto = new SDK.Pluto({
    type: "sql",
    wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist`,
  });

  const didcomm = new SDK.DIDCommWrapper(apollo, castor, pluto);
  const mercury = new SDK.Mercury(castor, didcomm, api);
  const store = new SDK.PublicMediatorStore(pluto);
  const handler = new SDK.BasicMediatorHandler(mediatorDID, mercury, store);
  const manager = new SDK.ConnectionsManager(castor, mercury, pluto, handler);
  const seed = apollo.createRandomSeed();
  console.log(seed.mnemonics);
  const agent = new SDK.Agent(
    apollo,
    castor,
    pluto,
    mercury,
    handler,
    manager,
    seed.seed
  );

  await agent.start();
  console.log("HELLO", agent);
})();

export default {};
