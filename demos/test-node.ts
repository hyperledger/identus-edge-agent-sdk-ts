import { webcrypto } from "node:crypto";

(globalThis as any).crypto = webcrypto;

import * as SDK from "../src";
import { BasicMessage } from "../src";
import { ListenerKey } from "../src/prism-agent/types";
import { createTestScenario } from "./createTestScenario";

(async () => {
  const mediatorDID = SDK.Domain.DID.fromString(
    "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
  );

  const { seed, agent } = createTestScenario(mediatorDID);

  agent.addListener(ListenerKey.MESSAGE, (message) => {
    console.log("Got new message", message);
  });

  await agent.start();

  console.log(
    `Welcome to PrismEdge Agent, state ${
      agent.state
    } with mnemonics ${seed.mnemonics.join(", ")}`
  );

  const secondaryDID = await agent.createNewPeerDID([], true);

  await agent.sendMessage(
    new BasicMessage(
      { content: "Test Message" },
      secondaryDID,
      secondaryDID
    ).makeMessage()
  );
})();
