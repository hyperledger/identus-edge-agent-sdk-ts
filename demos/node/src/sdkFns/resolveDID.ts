import { InputPrompt } from "../cli";
import SDK from "sdk";;

/**
 * Output the DID Document of the provided DID
 */
export const ResolveDID = new InputPrompt(
  "Resolve DID",
  async (value, state) => {
    const apollo = state.components.Apollo ?? new SDK.Apollo();
    const castor = state.components.Castor ?? new SDK.Castor(apollo);
    const document = await castor.resolveDID(value);

    console.dir(document, { depth: null });
  });
