import { webcrypto } from "node:crypto";
import * as SDK from "..";
import { createTestScenario } from "./createTestScenario";

(globalThis as any).crypto = webcrypto;

(async () => {
  const mediatorDID = SDK.Domain.DID.fromString(
    "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
  );

  const { seed, agent } = createTestScenario(mediatorDID);

  // agent.onMessage((messages) => {
  //   console.log(messages);
  // });

  await agent.start();
  console.log(
    `Welcome to PrismEdge Agent, state ${
      agent.state
    } with mnemonics ${seed.mnemonics.join(", ")}`
  );
  /**
   * 1. Create a new PEERDID
   * 2. Create an out of band invitation
   *
   * 3. We want to start listening for messages from the event and run some code on the received messaged
   * 4. We want to parse this out of band message + send the message to agent.acceptDIDCommInvitation
   *   4.1 This method internally runs some code that is not yet ready fromt he agent, inside the createPeeerDID, the updateMedioatorList.
   */
})();
