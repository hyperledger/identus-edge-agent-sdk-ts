import * as chalk from "chalk";
import { InputPrompt } from "../cli";

/**
 * Store the given value for use as the MediatorDID with Agent.start()
 */
export const UpdateMediatorDID = new InputPrompt(
  state => {
    const append = typeof state.mediatorDID === "string"
      ? `[${chalk.green(` ${state.mediatorDID.substring(0, 15)}...`)}]`
      : "";
    return `Enter Mediator DID ${append}`;
  },
  async (value, state) => {
    state.mediatorDID = value;
  });
