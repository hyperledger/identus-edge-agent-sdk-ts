import { AsyncPrompt } from "../../cli";
import SDK from "sdk";

export const makeHandlePresentationRequest = (message: SDK.Domain.Message) => new AsyncPrompt(
  "Process Issue Credential",
  async (state) => {
    if (state.AgentDC?.state !== "running") {
      throw new Error("agent not running");
    }

    // TODO improve credential selection
    const allCredentials = await state.AgentDC.pluto.getAllCredentials();
    const credential = allCredentials.at(-1);

    if (!credential) {
      throw new Error("No credential found");
    }

    const request = SDK.RequestPresentation.fromMessage(message);
    const presentation = await state.AgentDC.createPresentationForRequestProof(request, credential);
    console.log(presentation);
  });
