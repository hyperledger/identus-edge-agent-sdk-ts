import { AsyncPrompt } from "../../cli";
import SDK from "sdk";;

export const makeAcceptCredentialOffer = (message: SDK.Domain.Message) => new AsyncPrompt(
  "Accept Credential Offer",
  async (state) => {
    if (state.AgentDC?.state !== "running") {
      throw new Error("agent not running");
    }

    const offer = SDK.OfferCredential.fromMessage(message);
    const request = await state.AgentDC.prepareRequestCredentialWithIssuer(offer);
    await state.AgentDC.sendMessage(request.makeMessage());
  });
