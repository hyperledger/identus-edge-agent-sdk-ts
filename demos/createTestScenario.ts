import * as SDK from "..";
import initSqlJs from 'sql.js';
import {DID, SeedWords} from "../domain";
import Apollo from "../domain/buildingBlocks/Apollo";
import Castor from "../domain/buildingBlocks/Castor";
import Mercury from "../domain/buildingBlocks/Mercury";
import Pluto from "../domain/buildingBlocks/Pluto";

interface TestScenario {
  apollo: Apollo;
  castor: Castor;
  pluto: Pluto;
  mercury: Mercury;
  seed: SeedWords;
  agent: SDK.Agent;
}

export function createTestScenario(
    mediatorDID: DID,
    sqlWasmBinaryUrl: string
): TestScenario {
  const apollo = new SDK.Apollo();
  const api = new SDK.ApiImpl();
  const castor = new SDK.Castor(apollo);
  const pluto = new SDK.Pluto({
    type: "sqljs",
    driver: initSqlJs,
    sqlJsConfig: {
      locateFile: (filename: string) => `${sqlWasmBinaryUrl}/${filename}`
    }
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
