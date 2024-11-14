import { AsyncPrompt, SelectPrompt } from "../../cli";
import SDK from "sdk";;

export const ListConnections = new SelectPrompt(
  state => {
    const notify = state.notifications[SDK.ListenerKey.CONNECTION] ? "!" : "";
    return `Connections ${notify}`;
  },
  async (state) => {
    state.notifications[SDK.ListenerKey.CONNECTION] = false;

    if (state.AgentDC?.state !== "running") {
      throw new Error("Agent not running");
    }

    const pairs = await state.AgentDC.pluto.getAllDidPairs();
    const prompts = pairs.map(x =>
      new SelectPrompt(x.name)
        .addOption(new AsyncPrompt("details", async (state) => {
          console.log(x);
          console.log("\n\n");
        }))
      // .addOption(showMessages)
      // .addOption(remove)
    );

    return prompts;
  }
);
