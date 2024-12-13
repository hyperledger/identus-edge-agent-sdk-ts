import SDK from "sdk";;
import { AsyncPrompt, SelectPrompt } from "../../cli";
import { makeAcceptCredentialOffer } from "./acceptCredentialOffer";
import { makeProcessIssueCredential } from "./processCredentialIssue";

export const ListMessages = new SelectPrompt(
  state => {
    const notify = state.notifications[SDK.ListenerKey.MESSAGE] ? "!" : "";
    return `List ${notify}`;
  },
  async (state) => {
    state.notifications[SDK.ListenerKey.MESSAGE] = false;

    const msgs = await state.AgentDC?.pluto.getAllMessages() ?? [];
    const prompts = msgs
      .sort((a, b) => b.createdTime - a.createdTime)
      .map(message => {
        const menu = new SelectPrompt(`${message.id.substring(0, 8)} - ${message.piuri}`)
          .addOption(new AsyncPrompt("details", async (state) => {
            console.dir(message, { depth: null });
            console.dir(message.attachments.at(0)?.payload, { depth: null });
            console.log("\n\n");
          }));

        // if(message.attachments.length > 0) {
        //   menu.addOption(new AsyncPrompt("attachment", async () => {
        //     console.dir(message.attachments.at(0), { depth: null });
        //     console.log("\n\n");
        //   }))
        // }

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
