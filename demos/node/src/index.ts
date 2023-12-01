import * as SDK from "@input-output-hk/atala-prism-wallet-sdk";
//@ts-ignore
import { PlutoInMemory } from "../../pluto/PlutoInMemory";

function createTestScenario(mediatorDID: SDK.Domain.DID) {
  const apollo = new SDK.Apollo();
  const api = new SDK.ApiImpl();
  const castor = new SDK.Castor(apollo);
  const pluto = new PlutoInMemory();
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
    apollo,
    seed,
    agent,
    mercury,
    pluto,
    castor,
  };
}

(async () => {
  const mediatorDID = SDK.Domain.DID.fromString(
    "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19"
  );

  const { seed, agent } = createTestScenario(mediatorDID);

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
