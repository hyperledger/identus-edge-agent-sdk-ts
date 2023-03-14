import * as SDK from ".";

import { DID, SeedWords } from "./domain";
import Apollo from "./domain/buildingBlocks/Apollo";
import Castor from "./domain/buildingBlocks/Castor";
import Mercury from "./domain/buildingBlocks/Mercury";
import Pluto from "./domain/buildingBlocks/Pluto";

interface TestScenario {
  apollo: Apollo;
  castor: Castor;
  pluto: Pluto;
  mercury: Mercury;
  seed: SeedWords;
  agent: SDK.Agent;
}

interface TestOutOfBand {
  outOfBand: string;
  did: DID;
}

export function outOfBandConnection(apollo: Apollo): TestOutOfBand {
  const createdPeerDID = "";
  return {
    outOfBand: JSON.stringify({
      id: "9f00d185-a0dd-4727-bcb5-d01746b0acd4",
      type: "https://didcomm.org/out-of-band/2.0/invitation",
      from: "did:peer:2.Ez6LSfuXdp4rncpBvqjyWaQ5gR1XpwtUGo6UbjfCyH6WJc8Bn.Vz6MkoYQdhVmkHKaThYSVR8Toc5dejuem2LCsX4eSo4XtXCVC.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovL2hvc3QuZG9ja2VyLmludGVybmFsOjgwODAvZGlkY29tbSIsInIiOltdLCJhIjpbImRpZGNvbW0vdjIiXX0",
      body: {
        goal_code: "connect",
        goal: "Establish a trust connection between two peers",
        accept: [],
      },
    }),
    did: createdPeerDID,
  };
}

export function createTestScenario(
  mediatorDID: DID,
  sqlWasmBinaryUrl: string
): TestScenario {
  const apollo = new SDK.Apollo();
  const api = new SDK.ApiImpl();
  const castor = new SDK.Castor(apollo);
  const pluto = new SDK.Pluto({
    type: "sql",
    wasmBinaryURL: sqlWasmBinaryUrl,
  });
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
    seed.seed
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
