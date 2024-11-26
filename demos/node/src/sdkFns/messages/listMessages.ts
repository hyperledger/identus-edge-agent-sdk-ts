import { AsyncPrompt, SelectPrompt } from "../../cli";
import * as SDK from "sdk";
import { makeAcceptCredentialOffer } from "./acceptCredentialOffer";
import { makeProcessIssueCredential } from "./processCredentialIssue";

export const ListMessages = new SelectPrompt(
  state => {
    const notify = state.notifications[SDK.ListenerKey.MESSAGE] ? "!" : "";
    return `Messages ${notify}`;
  },
  async (state) => {
    state.notifications[SDK.ListenerKey.MESSAGE] = false;

    const msgs = await state.AgentDC?.pluto.getAllMessages() ?? [];
    const prompts = msgs.reverse().map(message => {
      const menu = new SelectPrompt(message.id)
        .addOption(new AsyncPrompt("details", async (state) => {
          console.log(message);
          console.log("\n\n");
        }));

      if (message.piuri === SDK.ProtocolType.DidcommOfferCredential) {
        menu.addOption(makeAcceptCredentialOffer(message));
      }

      if (message.piuri === SDK.ProtocolType.DidcommIssueCredential) {
        menu.addOption(makeProcessIssueCredential(message));
      }

      return menu;
    });

    return prompts;
  }
);
/*
const msgName = (msg: SDK.Domain.Message) => {
  switch (msg.piuri) {
    case SDK.ProtocolType.DidcommBasicMessage:
    case SDK.ProtocolType.DidcommOfferCredential:
  }
};
//*/
