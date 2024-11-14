import { AsyncPrompt } from "../cli";
import SDK from "sdk";;
import * as InMemory from "@pluto-encrypted/inmemory";

/**
 * Create a DIDComm Agent and start() it
 */
export const DIDCommStart = new AsyncPrompt(
  "Start Agent",
  async (state) => {
    // TODO export agent state enum
    if (state.AgentDC?.state === "running") {
      throw new Error("Agent already running");
    }

    // a mediatorDID is needed as `agent.start()` attempts to connect to a mediator
    const mediatorDID = state.mediatorDID ?? "";

    if (mediatorDID.length === 0) {
      throw new Error("no mediator DID");
    }

    // instantiate the minimum required components
    // Apollo provides cryptographic functionality
    const apollo = new SDK.Apollo();
    // the Store is the underlying data storage
    const store = new SDK.Store({
      name: 'demo_db_node',
      password: Buffer.from("demo_db_node").toString("hex"),
      storage: InMemory as any
    });
    // Pluto handles storage logic
    const pluto = new SDK.Pluto(store, apollo);
    // Agent orchestrates the SDK functionality
    const agent = SDK.Agent.initialize({ mediatorDID, pluto });

    await agent.start();

    agent.addListener(SDK.ListenerKey.CONNECTION, event => {
      state.notifications[SDK.ListenerKey.CONNECTION] = true;
      console.log(`\nConnection Added`);
      // console.log(event);
      console.log(`\n\n\n`);
    });

    agent.addListener(SDK.ListenerKey.MESSAGE, event => {
      state.notifications[SDK.ListenerKey.MESSAGE] = true;
      console.log(`\nMessage Received`);
      // console.log(event);
      console.log(`\n\n\n`);
    });

    state.AgentDC = agent;
  }
);
