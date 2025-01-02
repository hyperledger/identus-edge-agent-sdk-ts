import * as assert from 'node:assert';
import { InputPrompt } from "../cli";
import SDK from "sdk";;

/**
 * Input an OOB string and handle it
 */
export const InputOOB = new InputPrompt(
  "Enter Out of Band",
  async (value, state) => {
    const agent = state.AgentDC;
    assert(agent instanceof SDK.Agent);

    // transform the given value into an understandable invitation object
    const invitation = await agent.parseInvitation(value);
    // handle the invitation according to its type
    // will automatically run the relevant code dependent on the type of invitation
    await agent.acceptInvitation(invitation);
  });
