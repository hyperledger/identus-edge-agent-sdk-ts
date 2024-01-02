/**
 * WARNING: This is an example using an encrypted inMemory storage.
 * Checkout Community maintained NPM package @pluto-encrypted/database for more DB wrappers.
 */
import InMemory from "@pluto-encrypted/inmemory";
import { Database } from "@pluto-encrypted/database";
import SDK from "@atala/prism-wallet-sdk";

async function createTestScenario() {
  const mediatorDID = SDK.Domain.DID.fromString(
    "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19"
  );
  const apollo = new SDK.Apollo();
  const api = new SDK.ApiImpl();
  const castor = new SDK.Castor(apollo);
  const defaultPassword = new Uint8Array(32).fill(1);
  const pluto = await Database.createEncrypted(
    {
      name: `my-db`,
      encryptionKey: defaultPassword,
      storage: InMemory,
    }
  );
  const didcomm = new SDK.DIDCommWrapper(apollo, castor, pluto);
  const mercury = new SDK.Mercury(castor, didcomm, api);
  const store = new SDK.PublicMediatorStore(pluto);
  const handler = new SDK.BasicMediatorHandler(mediatorDID, mercury, store);
  const manager = new SDK.ConnectionsManager(castor, mercury, pluto, handler);
  const seed = apollo.createRandomSeed();
  const agent = new SDK.Agent(
    apollo,
    castor,
    pluto,
    mercury,
    handler,
    manager,
    seed.seed,
  );
  return {
    SDK,
    apollo,
    seed,
    agent,
    mercury,
    pluto,
    castor,
  };
}

(async () => {


  const { seed, agent, SDK } = await createTestScenario();

  agent.addListener(SDK.ListenerKey.MESSAGE, (message) => {
    console.log("Got new message", message);
  });

  await agent.start();
  console.log(
    `Welcome to PrismEdge Agent, state ${agent.state
    } with mnemonics ${seed.mnemonics.join(", ")}`,
  );

  try {
    const secondaryDID = await agent.createNewPeerDID([], true);
    const message = new SDK.BasicMessage(
      { content: "Test Message" },
      secondaryDID,
      secondaryDID,
    );

    await agent.sendMessage(message.makeMessage());
    await agent.sendMessage(message.makeMessage());
    console.log("Sent");
  } catch (err) {
    console.log(
      "Safe to ignore, mediator returns null on successfully receiving the message, unpack fails.",
    );
  }
})();
