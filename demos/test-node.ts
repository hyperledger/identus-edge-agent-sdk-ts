import { webcrypto } from "node:crypto";
import * as SDK from "..";
import { createTestScenario } from "./createTestScenario";

(globalThis as any).crypto = webcrypto;

(async () => {
  const mediatorDID = SDK.Domain.DID.fromString(
    "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
  );

  const { seed, agent } = createTestScenario(mediatorDID);

  await agent.start();
  console.log(
    `Welcome to PrismEdge Agent, state ${
      agent.state
    } with mnemonics ${seed.mnemonics.join(", ")}`
  );
})();
