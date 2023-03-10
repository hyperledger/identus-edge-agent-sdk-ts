const sdk = require("@input-output-hk/atala-prism-wallet-sdk");

const apollo = new sdk.Apollo();
const castor = new sdk.Castor();
const pluto = new sdk.Pluto({
  type: "sql",
  wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist`,
});
const mercury = new sdk.Mercury();

(async () => {
  await pluto.start();
  const mediatorDID = sdk.Domain.DID.fromString(
    "did:peer:2.Ez6LSoHkfN1Y4nK9RCjx7vopWsLrMGNFNgTNZgoCNQrTzmb1n.Vz6MknRZmapV7uYZQuZez9n9N3tQotjRN18UGS68Vcfo6gR4h.SeyJyIjpbImRpZDpleGFtcGxlOnNvbWVtZWRpYXRvciNzb21la2V5Il0sInMiOiJodHRwczovL2V4YW1wbGUuY29tL2VuZHBvaW50IiwiYSI6W10sInQiOiJkbSJ9"
  );

  const store = new sdk.PublicMediatorStore(pluto);
  const handler = new sdk.BasicMediatorHandler(mediatorDID, mercury, store);
  const manager = new sdk.ConnectionsManager(castor, mercury, pluto, handler);
  const seed = apollo.createRandomSeed().seed;

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
