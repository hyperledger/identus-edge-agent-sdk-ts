import { AsyncPrompt } from "../../cli";
import SDK from "sdk";;

export const makeProcessIssueCredential = (message: SDK.Domain.Message) => new AsyncPrompt(
  "Process Issue Credential",
  async (state) => {
    if (state.AgentDC?.state !== "running") {
      throw new Error("agent not running");
    }

    const issueCredential = SDK.IssueCredential.fromMessage(message);
    const credential = await state.AgentDC.processIssuedCredentialMessage(issueCredential);
    console.log(credential);
  });
