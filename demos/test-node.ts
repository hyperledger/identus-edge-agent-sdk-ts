import {webcrypto} from "node:crypto";
import {uuid} from "@stablelib/uuid";
import * as SDK from "..";
import {createTestScenario} from "./createTestScenario";
import {base64url} from "multiformats/bases/base64";

(globalThis as any).crypto = webcrypto;

(async () => {
  const Fabio = SDK.Domain.DID.fromString(
      "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9hbGljZS5kaWQuZm1ncC5hcHAvIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ"
  );
  const mediatorDID = SDK.Domain.DID.fromString(
      "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
  );

  const {seed, agent} = createTestScenario(
      mediatorDID,
  );

  agent.onMessage((messages) => {
    console.log(messages);
  });

  await agent.start();
  console.log(
      `Welcome to PrismEdge Agent, state ${
          agent.state
      } with mnemonics ${seed.mnemonics.join(", ")}`
  );

  const did = await agent.createNewPeerDID([], false);
  const obbJson = {
    id: uuid(),
    type: "https://didcomm.org/out-of-band/2.0/invitation",
    from: did.toString(),
    body: {
      goal_code: "connect",
      goal: "Establish a trust connection between two peers",
      accept: [],
    },
  };
  const obbUrl = `https://domain.com/path?_obb=${base64url.baseEncode(
      Buffer.from(JSON.stringify(obbJson))
  )}`;

  const message = await agent.parseOOBInvitation(obbUrl);
  await agent.acceptDIDCommInvitation(message);

  /**
   * 1. Create a new PEERDID
   * 2. Create an out of band invitation
   *
   * 3. We want to start listening for messages from the event and run some code on the received messaged
   * 4. We want to parse this out of band message + send the message to agent.acceptDIDCommInvitation
   *   4.1 This method internally runs some code that is not yet ready fromt he agent, inside the createPeeerDID, the updateMedioatorList.
   */
})();
